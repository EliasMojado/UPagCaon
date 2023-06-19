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
      console.error('Error retrieving items:', err);
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



module.exports = router;
