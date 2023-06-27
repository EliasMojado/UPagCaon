const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./db');
const uuid = require('uuid');
const router = express.Router();

// POST /user/signup - Sign up a new user
router.post('/signup', (req, res) => {
  const { name, email, password, contact_number, type} = req.body;

  // Hash the password before storing it
  const hashedPassword = bcrypt.hashSync(password, 10);

  // generate a unique id
  const id = uuid.v4();

  const user = {
    id,
    name,
    password: hashedPassword,
    email,
    contact_number,
    type
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
    res.status(200).json({ message: 'Login successful!' , type: user.type, id: user.ID, name: user.name, email: user.email, contact_number: user.contact_number});
  });
});

router.post('/getUser/:id', (req,res) => {
  const { id } = req.params;
  console.log(id);
  db.query('SELECT * FROM users WHERE id = ?', id, (err, results) => {
    if (err) {
      console.error('Error getting user:', err);
      res.status(500).json({ error: 'An error occurred while getting user.' });
      return;
    }

    // Check if the user exists in the database
    if (results.length === 0) {
      res.status(401).json({ error: 'Invalid credentials.' });
      return;
    }

    const user = results[0];

    res.status(200).json({ message: 'User retrieved successfully!' , type: user.type, id: user.ID, name: user.name, email: user.email, contact_number: user.contact_number});
  });
});

// PUT /user/:id
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { attributes } = req.body;

  // Construct the SET clause for updating user attributes
  let setClause = '';
  const values = [];

  for (const attribute of attributes) {
    const { name, value } = attribute;

    if (name === 'password' && value) {
      // Hash the password using bcrypt
      const hashedPassword = bcrypt.hashSync(value, 10);
      setClause += `password = ?, `;
      values.push(hashedPassword);
    } else if (value) {
      setClause += `${name} = ?, `;
      values.push(value);
    }
  }

  // Remove the trailing comma and space
  setClause = setClause.slice(0, -2);

  // Construct the SQL query
  const query = `UPDATE users SET ${setClause} WHERE id = ?`;
  console.log(query);
  values.push(userId);
  console.log(values);

  // Execute the query
  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'An error occurred while updating the user.' });
      return;
    }

    if (results.affectedRows === 0) {
      // No user found with the given id
      res.status(404).json({ error: 'User not found.' });
      return;
    }

    console.log('User updated successfully!');
    res.status(200).json({ message: 'User updated successfully!' });
  });
});



module.exports = router;
