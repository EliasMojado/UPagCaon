const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
const uuid = require('uuid');

const router = express.Router();

/* 
  TO DO:
  1. Do not allow users to sign up multiple times with same email
  2. 
*/

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

//POST /user/login - Log in user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query the database to check if the user exists
  db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).json({ error: 'An error occurred while logging in.' });
      return;
    }

    // Check if the user exists in the database
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }

    const user = results[0];

    // Compare the provided password with the hashed password stored in the database
    if (!bcrypt.compareSync(password, user.password)) {
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }

    // User is authenticated, return a success message or token
    res.status(200).json({ message: 'Login successful!' });
  });
});


module.exports = router;
