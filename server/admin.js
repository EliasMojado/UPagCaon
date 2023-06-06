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

// PUT /admin/update
router.put('/update', (req, res) => {
  const { id, name, email, password, contact_number } = req.body;

  // Update the admin attributes in the database
  const updateQueries = [];

  if (name) {
    updateQueries.push({ query: `UPDATE users SET name = '${name}' WHERE ID = '${id}'` });
  }

  if (email) {
    updateQueries.push({ query: `UPDATE users SET email = '${email}' WHERE ID = '${id}'` });
  }

  if (password) {
    const hashedPassword = bcrypt.hashSync(password, 10);
    updateQueries.push({ query: `UPDATE users SET password = '${hashedPassword}' WHERE ID = '${id}'` });
  }

  if (contact_number) {
    updateQueries.push({ query: `UPDATE users SET contact_number = '${contact_number}' WHERE ID = '${id}'` });
  }

  // Execute the update queries in parallel using Promise.all
  Promise.all(
    updateQueries.map(({ query }) => {
      return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
          if (err) {
            console.error('Error updating admin:', err);
            reject(err);
            return;
          }
          resolve();
        });
      });
    })
  )
    .then(() => {
      console.log('Attributes updated successfully!');
      res.status(200).json({ message: 'Attributes updated successfully!' });
    })
    .catch(() => {
      res.status(500).json({ error: 'An error occurred while updating the attributes.' });
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

// DELETE /admin/delete
router.delete('/delete', (req, res) => {
  const { adminID } = req.body

  // Perform the deletion operation in the database
  db.query('DELETE FROM users WHERE ID = ?', [adminID], (err, results) => {
    if (err) {
      console.error('Error deleting admin:', err);
      res.status(500).json({ error: 'An error occurred while deleting admin.' });
      return;
    }

    res.status(200).json({ message: 'Admin deleted successfully!' });
  });
  
});


module.exports = router;
