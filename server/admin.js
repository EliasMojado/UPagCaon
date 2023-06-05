const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
const uuid = require('uuid');
const router = express.Router();

// POST /admin/signup - Sign up a new admin
router.post('/signup', (req, res) => {
  const { name, email, password, contact_number, type} = req.body;

  // Hash the password before storing it
  const hashedPassword = bcrypt.hashSync(password, 10);

  // generate a unique id
  const id = uuid.v4();

  const admin = {
    id,
    name,
    password: hashedPassword,
    email,
    contact_number,
    type
  }

  // Insert the admin into the database
  db.query('INSERT INTO users SET ?', admin, (err, results) => {
    if (err) {
      console.error('Error signing up:', err);
      res.status(500).json({ error: 'An error occurred while signing up.' });
      return;
    }

    console.log('admin signed up successfully!');
    res.status(200).json({ message: 'Admin signed up successfully!' });
  })
});

//POST /admin/login - Log in admin
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Query the database to check if the admin exists
  db.query('SELECT * FROM users WHERE email = ?', email, (err, results) => {
    if (err) {
      console.error('Error logging in:', err);
      res.status(500).json({ error: 'An error occurred while logging in.' });
      return;
    }

    // Check if the admin exists in the database
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }

    const admin = results[0];

    // Compare the provided password with the hashed password stored in the database
    if (!bcrypt.compareSync(password, admin.password)) {
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }

    // admin is authenticated, return a success message or token
    res.status(200).json({ message: 'Login successful!' , type: admin.type});
  });
});

// PUT /admin/:id
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { attribute, value } = req.body;

  // Update the admin attribute in the database
  const query = `UPDATE users SET ${attribute} = ? WHERE id = ?`;
  db.query(query, [value, userId], (err, results) => {
    if (err) {
      console.error('Error updating admin:', err);
      res.status(500).json({ error: 'An error occurred while updating the admin.' });
      return;
    }

    if (results.affectedRows === 0) {
      // No admin found with the given id
      res.status(404).json({ error: 'admin not found.' });
      return;
    }

    console.log('admin updated successfully!');
    res.status(200).json({ message: 'admin updated successfully!' });
  });
});

// GET /admin/count
router.get('/count', (req, res) => {
  // Fetch the count of admin users from the database
  db.query('SELECT COUNT(*) AS adminCount FROM users WHERE type = ?', ['admin'], (err, results) => {
    if (err) {
      console.error('Error fetching admin count:', err);
      res.status(500).json({ error: 'An error occurred while fetching admin count.' });
      return;
    }

    const adminCount = results[0].adminCount;
    res.status(200).json({ adminCount });
  });
});

// GET /admin/employee
router.get('/employee', (req, res) => {
  // Fetch the admin users from the database
  db.query('SELECT * FROM users WHERE type = ?', ['admin'], (err, results) => {
    if (err) {
      console.error('Error fetching admins:', err);
      res.status(500).json({ error: 'An error occurred while fetching admins.' });
      return;
    }

    res.status(200).json(results);
  });
});


module.exports = router;
