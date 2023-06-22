const express = require('express');
const db = require('./db');
const router = express.Router();

router.post('/addOrder', (req, res) => {
    const {user_id, purchase_date, items} = req.body;
    
    

});
