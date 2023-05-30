const express = require('express');
const app = express();
const userRoutes = require('./user');
const db = require('./db');

app.use(express.json()); // Parse JSON request bodies

// Define your routes
app.use('/user', userRoutes);

// Handle other routes or middleware as needed

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

