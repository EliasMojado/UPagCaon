const mysql = require('mysql2');
const express = require('express');

const connection = mysql.createConnection('mysql://x02uksibohlrfilhncup:pscale_pw_No0fy5f7l0fuKy2nZ0CM2yp4cMGpyXY9B6bPN4lE5z1@aws.connect.psdb.cloud/upagcaon?ssl={"rejectUnauthorized":true}');

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
});

module.exports = connection;

