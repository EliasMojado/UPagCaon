const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();
const db = require('./db');
const uuid = require('uuid');
const router = express.Router();

const upload = multer();
app.use(bodyParser.urlencoded({ extended: true }));

// POST /item - Add a new item
router.post('/add', upload.single('image'), (req, res) => {
  const { name, price, type, description, quantity, expiryDate } = req.body;
  const id = uuid.v4();

  const query = 'INSERT INTO items (id, name, price, type, description, quantity, expiry_date) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [id, name, price, type, description, quantity, expiryDate];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error inserting item:', err);
      res.status(500).json({ error: 'An error occurred while inserting the item.' });
      return;
    }

    console.log('Item inserted successfully!');
    res.status(200).json({ message: 'Item inserted successfully!' });
  });
});

module.exports = router;
