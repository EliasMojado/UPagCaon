const mysql = require('mysql2');
const express = require('express');
require('dotenv').config();

// const connection = mysql.createConnection(process.env.DATABASE_URL);
const databaseUrl = process.env.DATABASE_URL;

const connection = mysql.createConnection({
  uri: databaseUrl,
  multipleStatements: true // (optional) Enable multiple statements if needed
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;

