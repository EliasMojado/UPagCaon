const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./user');
const adminRoutes = require('./admin');
const itemRoutes = require('./item');
const orderRoutes = require('./order');
const profitRoutes = require('./profit');
const db = require('./db');

app.use(express.json()); // Parse JSON request bodies
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
}); // Enable CORS middleware

// Define your routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/item', itemRoutes);
app.use('/order', orderRoutes);
app.use('/payment', profitRoutes);


// Handle other routes or middleware as needed

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

