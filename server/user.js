const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
const uuid = require('uuid');

const router = express.Router();

// POST /user/signup - Sign up a new user
router.post('/signup', (req, res) => {
  const { name, email, password, contact_number} = req.body;

  // Hash the password before storing it
  const hashedPassword = bcrypt.hashSync(password, 10);
  const id = uuid.v4();

  const user = {
    id,
    name,
    password: hashedPassword,
    email,
    contact_number
  }

  // Insert the user into the database
  db.query('INSERT INTO users SET ?', user, (err, results) => {
    if (err) {
      console.error('Error signing up:', err);
      res.status(500).json({ error: 'An error occurred while signing up.' });
      return;
    }

    console.log('User signed up successfully!');
    res.status(200).json({ message: 'User signed up successfully!' });
  })
});

module.exports = router;
