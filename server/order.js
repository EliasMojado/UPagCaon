const express = require('express');
const db = require('./db');
const router = express.Router();

router.post('/addOrder', (req, res) => {
  const { user_id, purchase_date, items, payment_type } = req.body;

  const orderQuery = "INSERT INTO orders (user_id, purchase_date, status) VALUES (?, ?, 'pending')";
  const orderValues = [user_id, purchase_date];
  let order_id, order_total = 0;

  db.query(orderQuery, orderValues, (error, results) => {
    if (error) {
      console.error('Error inserting data into orders:', error);
      res.status(500).json({ error: 'An error occurred while adding order.' });
    } else {
      order_id = results.insertId;
      console.log('Data inserted into orders successfully');
      res.status(200).json({ message: 'Order added successfully!' });

      // Handle the success case appropriately
      items.forEach((item) => {
        const { item_id, quantity, price } = item;
        order_total += price;

        db.query('INSERT INTO purchase (orderID, itemID, quantity) VALUES (?, ?, ?)', [order_id, item_id, quantity], (error, results) => {
          if (error) {
            console.error('Error inserting data into purchase:', error);
            // Handle the error case appropriately
            res.status(500).json({ error: 'An error occurred while adding purchase.' });
          } else {
            console.log('Data inserted into purchase successfully');
            res.status(200).json({ message: 'Purchase added successfully!' });
            // Handle the success case appropriately
          }
        });
      });

      db.query('INSERT INTO payment (orderID, type, status, amount) VALUES (?, ?, ?, ?)', [order_id, payment_type, false, order_total], (error, results) => {
        if (error) {
          console.error('Error inserting data into payment:', error);
          // Handle the error case appropriately
          res.status(500).json({ error: 'An error occurred while adding payment.' });
        } else {
          console.log('Data inserted into payment successfully');

          db.query('UPDATE orders SET payment_id = ? WHERE ID = ?', [results.insertId, order_id], (error) => {
            if (error) {
              console.error('Error updating payment ID in orders:', error);
              // Handle the error case appropriately
              res.status(500).json({ error: 'An error occurred while updating payment ID.' });
            } else {
              console.log('Payment ID updated in orders successfully');
              // Handle the success case appropriately
              res.status(200).json({ message: 'Payment added successfully!' });
            }
          });
        }
      });
    }
  });
});

router.get("/getOrders", (req, res) => {
  db.query('SELECT * FROM orders', (error, orders) => {
    if (error) {
      console.error('Error retrieving orders:', error);
      // Handle the error case appropriately
      res.status(500).json({ error: 'Failed to retrieve orders' });
    } else {
      console.log('Orders retrieved successfully');

      const userIds = orders.map(order => order.user_id);

      db.query('SELECT ID, name FROM users WHERE ID IN (?)', [userIds], (error, users) => {
        if (error) {
          console.error('Error retrieving user names:', error);
          // Handle the error case appropriately
          res.status(500).json({ error: 'Failed to retrieve user names' });
        } else {
          console.log('User names retrieved successfully');

          const userMap = {};
          users.forEach(user => {
            userMap[user.ID] = user.name;
          });

          const paymentIds = orders.map(order => order.payment_id);
          db.query('SELECT ID, amount FROM payment WHERE ID IN (?)', [paymentIds], (error, payments) => {
            if (error) {
              console.error('Error retrieving payment totals:', error);
              // Handle the error case appropriately
              res.status(500).json({ error: 'Failed to retrieve payment totals' });
            } else {
              console.log('Payment totals retrieved successfully');

              const paymentMap = {};
              payments.forEach(payment => {
                paymentMap[payment.ID] = payment.amount;
              });

              const ordersWithDetails = orders.map(order => ({
                id: order.ID,
                user: userMap[order.user_id],
                payment: order.payment_id,
                date: order.purchase_date,
                total: paymentMap[order.payment_id]
              }));

              console.log(ordersWithDetails);

              res.status(200).json(ordersWithDetails);
            }
          });
        }
      });
    }
  });
});

module.exports = router;
