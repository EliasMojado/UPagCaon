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

router.get("/getEarned", (req, res) => {
  db.query('SELECT SUM(amount) AS total FROM payment WHERE status = TRUE', (error, results) => {
    if (error) {
      console.error('Error retrieving total earned:', error);
      res.status(500).json({ error: 'Failed to retrieve total earned.' });
    } else {
      console.log('Total earned retrieved successfully.');

      const totalEarned = results.length > 0 ? results[0].total : 0;
      res.status(200).json({ total: totalEarned });
    }
  });
});

router.get("/getTodayEarnings", (req, res) => {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

  const query = `
    SELECT
      (SELECT SUM(p.amount) FROM orders o JOIN payment p ON o.ID = p.orderID WHERE o.status = TRUE AND o.purchase_date >= ? AND o.purchase_date <= ? AND p.type = 'otc') AS otcTotal,
      (SELECT SUM(p.amount) FROM orders o JOIN payment p ON o.ID = p.orderID WHERE o.status = TRUE AND o.purchase_date >= ? AND o.purchase_date <= ? AND p.type = 'gcash') AS gcashTotal`;

  const params = [startDate, endDate, startDate, endDate];

  db.query(query, params, (error, results) => {
    if (error) {
      console.error('Error retrieving total earnings for the day:', error);
      res.status(500).json({ error: 'Failed to retrieve total earnings for the day.' });
    } else {
      console.log('Total earnings for the day retrieved successfully.');

      const otcTotal = results[0].otcTotal || 0;
      const gcashTotal = results[0].gcashTotal || 0;
      res.status(200).json({ otcTotal, gcashTotal });
    }
  });
});

router.get("/getMonthlyEarnings", (req, res) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Adding 1 since getMonth() returns a zero-based index

  const startDate = new Date(year, month - 1, 1, 0, 0, 0);
  const endDate = new Date(year, month, 0, 23, 59, 59);

  const query = `
    SELECT
      (SELECT SUM(p.amount) FROM orders o JOIN payment p ON o.ID = p.orderID WHERE o.status = TRUE AND o.purchase_date >= ? AND o.purchase_date <= ? AND p.type = 'otc') AS otcTotal,
      (SELECT SUM(p.amount) FROM orders o JOIN payment p ON o.ID = p.orderID WHERE o.status = TRUE AND o.purchase_date >= ? AND o.purchase_date <= ? AND p.type = 'gcash') AS gcashTotal`;

  const params = [startDate, endDate, startDate, endDate];

  db.query(query, params, (error, results) => {
    if (error) {
      console.error('Error retrieving total earnings for the month:', error);
      res.status(500).json({ error: 'Failed to retrieve total earnings for the month.' });
    } else {
      console.log('Total earnings for the month retrieved successfully.');

      const otcTotal = results[0].otcTotal || 0;
      const gcashTotal = results[0].gcashTotal || 0;
      res.status(200).json({ otcTotal, gcashTotal });
    }
  });
});

router.get("/getCompletedPayments", (req, res) => {
  db.query('SELECT * FROM payment WHERE status = TRUE', (error, payments) => {
    if (error) {
      console.error('Error retrieving completed payments:', error);
      res.status(500).json({ error: 'Failed to retrieve completed payments.' });
    } else {
      console.log('Completed payments retrieved successfully.');
      
      if (payments.length > 0) {
        res.status(200).json({ payments });
      } else {
        res.status(200).json({ message: 'No completed payments found.' });
      }
    }
  });
});
  

module.exports = router;