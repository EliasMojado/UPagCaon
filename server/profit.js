const express = require('express');
const db = require('./db');
const router = express.Router();

router.put("/updatePayments", (req, res) => {
    const { payments, decision } = req.body;

    payments.forEach((payment) => {
        if (decision === true) {
            db.query('UPDATE payment SET status = TRUE WHERE ID = ?', [payment], (error) => {
            if (error) {
                console.error('Error updating payment:', error);
                res.status(500).json({ error: 'Failed to update payment.' });
            } else {
                console.log('Payment updated successfully.');
            }
            });
        } else {
            db.query('DELETE FROM payment WHERE ID = ?', [payment], (error) => {
            if (error) {
                console.error('Error deleting payment:', error);
                res.status(500).json({ error: 'Failed to delete payment.' });
            } else {
                console.log('Payment deleted successfully.');
            }
            });
        }
    });
  
    res.status(200).json({ message: 'Payment update completed.' });
  });
  