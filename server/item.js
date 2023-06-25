const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
const uuid = require("uuid");
const router = express.Router();
const upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./db");
const storage = require("./firebase");

// POST /item - Add a new item
router.post("/addItem", upload.single("image"), (req, res) => {
  const { name, price, type, description, quantity, expiryDate } = req.body;
  const id = uuid.v4();

  const query =
    "INSERT INTO items (id, name, price, type, description, quantity, expiry_date, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const values = [id, name, price, type, description, quantity, expiryDate];
  const imageFile = req.file;

  if (!imageFile) {
    // Handle the case where no image file was uploaded
    console.log("No image file provided.");
    res.status(400).json({ error: "No image file provided." });
    return;
  }

  // Upload the image to Firebase Storage
  const bucket = storage.bucket();
  const imageName = `${id}-${imageFile.originalname}`;
  const imageFileRef = bucket.file(imageName);
  const imageMetadata = { contentType: imageFile.mimetype };

  imageFileRef
    .createWriteStream({
      metadata: imageMetadata
    })
    .on("error", (error) => {
      console.error("Error uploading image:", error);
      res.status(500).json({ error: "An error occurred while uploading the image." });
    })
    .on("finish", () => {
      // Get the download URL of the uploaded image
      const imageUrl = `https://storage.googleapis.com/${bucket.name}/${imageName}`;

      // Store the image URL in the item table along with other attributes
      values.push(imageUrl);

      db.query(query, values, (err, results) => {
        if (err) {
          console.error("Error inserting item:", err);
          res.status(500).json({ error: "An error occurred while inserting the item." });
          return;
        }

        console.log("Item inserted successfully!");
        res.status(200).json({ message: "Item inserted successfully!" });
      });
    })
    .end(imageFile.buffer);
});

// GET /item - get items
router.get("/getItem", (req, res) => {
  const itemType = req.query.type;

  const query = 'SELECT * FROM items WHERE type = ?';
  db.query(query, [itemType], (err, results) => {
    if (err) {
      console.error('Error retrieving items.', err);
      res.status(500).json({ error: 'An error occurred while retrieving items.' });
      return;
    }

    res.status(200).json({ items: results });
  });
});

// DELETE /item/delete
router.delete("/deleteItem", async (req, res) => {
  const itemID = req.body.id;
  const imageURL = req.body.image;
  // Delete SQL record
  const deleteQuery = 'DELETE FROM items WHERE id = ?';
  db.query(deleteQuery, [itemID], async (err, results) => {
    if (err) {
      console.error('Error deleting item:', err);
      res.status(500).json({ error: 'An error occurred while deleting item.' });
      return;
    }
    // Delete image from Firebase Storage
    try {
      const bucketName = 'upagcaon.appspot.com'; // Replace with your Firebase Storage bucket name
      const bucket = storage.bucket(bucketName);
      // Extract the filename from the imageURL
      const filename = imageURL.split('/').pop();
      const imageFile = bucket.file(filename);
      // Delete the image file
      await imageFile.delete();
      res.status(200).json({ message: 'Item deleted successfully!' });
    } catch (error) {
      console.error('Error deleting image:', error);
      res.status(500).json({ error: 'An error occurred while deleting image.' });
    }
  });
});

// UPDATE /item/update
router.put("/updateItem", upload.single("image"), (req, res) => {
  const { id, name, price, description, quantity, expiryDate, imageURL } = req.body;

  // Update the item attributes in the database
  const updateQueries = [];

  if (name) {
    updateQueries.push({ query: `UPDATE items SET name = '${name}' WHERE ID = '${id}'` });
  }

  if (price) {
    updateQueries.push({ query: `UPDATE items SET price = '${price}' WHERE ID = '${id}'` });
  }

  if (description) {
    updateQueries.push({ query: `UPDATE items SET description = '${description}' WHERE ID = '${id}'` });
  }

  if (quantity) {
    updateQueries.push({ query: `UPDATE items SET quantity = '${quantity}' WHERE ID = '${id}'` });
  }

  if (expiryDate) {
    updateQueries.push({ query: `UPDATE items SET expiry_date = '${expiryDate}' WHERE ID = '${id}'` });
  }

  const imageFile = req.file;
  if (imageFile) {
    // Upload the new image to Firebase Storage
    const bucket = storage.bucket();
    const imageName = `${id}-${imageFile.originalname}`;
    const imageFileRef = bucket.file(imageName);
    const imageMetadata = { contentType: imageFile.mimetype };

    imageFileRef
      .createWriteStream({
        metadata: imageMetadata
      })
      .on("error", (error) => {
        console.error("Error uploading image:", error);
        res.status(500).json({ error: "An error occurred while uploading the image." });
      })
      .on("finish", () => {
        // Get the download URL of the uploaded image
        const imageUrl = `https://storage.googleapis.com/${bucket.name}/${imageName}`;

        // Delete the old image from Firebase Storage
        if (imageURL) {
          const oldImageName = imageURL.substring(imageURL.lastIndexOf("/") + 1);
          const oldImageFileRef = bucket.file(oldImageName);

          oldImageFileRef
            .delete()
            .then(() => {
              // Update the item with the new image URL
              updateQueries.push({ query: `UPDATE items SET image = '${imageUrl}' WHERE id = '${id}'` });

              // Execute the update queries in parallel using Promise.all
              Promise.all(
                updateQueries.map(({ query }) => {
                  return new Promise((resolve, reject) => {
                    db.query(query, (err, results) => {
                      if (err) {
                        console.error("Error updating item:", err);
                        reject(err);
                        return;
                      }
                      resolve();
                    });
                  });
                })
              )
                .then(() => {
                  console.log("Item updated successfully!");
                  res.status(200).json({ message: "Item updated successfully!" });
                })
                .catch((error) => {
                  console.error("An error occurred while updating the item:", error);
                  res.status(500).json({ error: "An error occurred while updating the item." });
                });
            })
            .catch((error) => {
              console.error("Error deleting old image:", error);
              res.status(500).json({ error: "An error occurred while deleting the old image." });
            });
        } else {
          // Update the item with the new image URL
          updateQueries.push({ query: `UPDATE items SET image = '${imageUrl}' WHERE id = '${id}'` });

          // Execute the update queries in parallel using Promise.all
          Promise.all(
            updateQueries.map(({ query }) => {
              return new Promise((resolve, reject) => {
                db.query(query, (err, results) => {
                  if (err) {
                    console.error("Error updating item:", err);
                    reject(err);
                    return;
                  }
                  resolve();
                });
              });
            })
          )
            .then(() => {
              console.log("Item updated successfully!");
              res.status(200).json({ message: "Item updated successfully!" });
            })
            .catch((error) => {
              console.error("An error occurred while updating the item:", error);
              res.status(500).json({ error: "An error occurred while updating the item." });
            });
        }
      })
      .end(imageFile.buffer);
  } else {
    // No new image provided, execute the update queries directly
    Promise.all(
      updateQueries.map(({ query }) => {
        return new Promise((resolve, reject) => {
          db.query(query, (err, results) => {
            if (err) {
              console.error("Error updating item:", err);
              reject(err);
              return;
            }
            resolve();
          });
        });
      })
    )
      .then(() => {
        console.log("Item updated successfully!");
        res.status(200).json({ message: "Item updated successfully!" });
      })
      .catch((error) => {
        console.error("An error occurred while updating the item:", error);
        res.status(500).json({ error: "An error occurred while updating the item." });
      });
  }
});

router.get("/getProducts/:page", (req, res) => {
  const { page } = req.params;

  let query = '';

  if (page === 'viand') {
    query = "SELECT items.*, IFNULL(feedback_avg.average_rating, 0) AS rating FROM items LEFT JOIN (SELECT item_id, AVG(rating) AS average_rating FROM feedbacks GROUP BY item_id) AS feedback_avg ON items.id = feedback_avg.item_id WHERE items.type = 'viand';";
  } else if (page === 'drink') {
    query = "SELECT items.*, IFNULL(feedback_avg.average_rating, 0) AS rating FROM items LEFT JOIN (SELECT item_id, AVG(rating) AS average_rating FROM feedbacks GROUP BY item_id) AS feedback_avg ON items.id = feedback_avg.item_id WHERE items.type = 'drink';";
  } else if (page === 'others') {
    query = "SELECT items.*, IFNULL(feedback_avg.average_rating, 0) AS rating FROM items LEFT JOIN (SELECT item_id, AVG(rating) AS average_rating FROM feedbacks GROUP BY item_id) AS feedback_avg ON items.id = feedback_avg.item_id WHERE items.type = 'other';";
  } else if (page === 'all') {
    query = "SELECT items.*, IFNULL(feedback_avg.average_rating, 0) AS rating FROM items LEFT JOIN (SELECT item_id, AVG(rating) AS average_rating FROM feedbacks GROUP BY item_id) AS feedback_avg ON items.id = feedback_avg.item_id;";
  } else if (page === 'snack'){
    query = "SELECT items.*, IFNULL(feedback_avg.average_rating, 0) AS rating FROM items LEFT JOIN (SELECT item_id, AVG(rating) AS average_rating FROM feedbacks GROUP BY item_id) AS feedback_avg ON items.id = feedback_avg.item_id WHERE items.type = 'snack';";
  }else {
    res.status(400).json({ error: 'Invalid page parameter.' });
    return;
  }

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving items.', err);
      res.status(500).json({ error: 'An error occurred while retrieving items.' });
      return;
    }

    res.status(200).json({ items: results });
  });
});

module.exports = router;