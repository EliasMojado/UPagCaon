const express = require('express');
const db = require('./db');
const router = express.Router();

router.post('/addOrder', (req, res) => {
  const { user_id, purchase_date, items, payment_type, order_type } = req.body;

  const orderQuery = "INSERT INTO orders (user_id, purchase_date, status, type) VALUES (?, ?, 'pending', ?)";
  const orderValues = [user_id, purchase_date, order_type];
  let order_id, order_total = 0;
  let purchaseCount = 0;

  db.query(orderQuery, orderValues, (error, results) => {
    if (error) {
      console.error('Error inserting data into orders:', error);
      res.status(500).json({ error: 'An error occurred while adding order.' });
    } else {
      order_id = results.insertId;
      console.log('Data inserted into orders successfully');
      // Do not send the response here

      // Handle the success case appropriately
      items.forEach((item) => {
        const { item_id, quantity, price } = item;
        order_total += price*quantity;

        db.query('INSERT INTO purchase (orderID, itemID, quantity) VALUES (?, ?, ?)', [order_id, item_id, quantity], (error, results) => {
          if (error) {
            console.error('Error inserting data into purchase:', error);
            // Handle the error case appropriately
            res.status(500).json({ error: 'An error occurred while adding purchase.' });
          } else {
            console.log('Data inserted into purchase successfully');
            purchaseCount++;

            if (purchaseCount === items.length) {
              // Send the response only after all items have been processed
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
                      res.status(200).json({ message: 'Order added successfully!' });
                    }
                  });
                }
              });
            }
          }
        });
      });
    }
  });
});


router.get("/getOrders", (req, res) => {
  db.query("SELECT * FROM orders WHERE status IN ('pending', 'serving')", (error, orders) => {
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
                total: paymentMap[order.payment_id],
                status: order.status
              }));

              res.status(200).json(ordersWithDetails);
            }
          });
        }
      });
    }
  });
});

router.get("/getUserOrders/:userId", (req, res) => {
  const userId = req.params.userId;

  db.query(
    "SELECT * FROM orders WHERE status IN ('pending', 'serving') AND user_id = ?",
    [userId],
    (error, orders) => {
      if (error) {
        console.error('Error retrieving orders:', error);
        res.status(500).json({ error: 'Failed to retrieve orders' });
      } else {
        console.log('Orders retrieved successfully');

        const userIds = orders.map(order => order.user_id);

        db.query('SELECT ID, name FROM users WHERE ID IN (?)', [userIds], (error, users) => {
          if (error) {
            console.error('Error retrieving user names:', error);
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
                  type: order.type,
                  date: order.purchase_date,
                  total: paymentMap[order.payment_id],
                  status: order.status
                }));

                res.status(200).json(ordersWithDetails);
              }
            });
          }
        });
      }
    }
  );
});

router.get("/getOrderedItems/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM purchase WHERE orderID = ?", [id], (error, purchases) => {
    if (error) {
      console.error('Error retrieving purchases:', error);
      // Handle the error case appropriately
      res.status(500).json({ error: 'Failed to retrieve purchases' });
    } else {
      console.log('Purchases retrieved successfully');

      const itemIds = purchases.map(purchase => purchase.itemID);
      db.query('SELECT ID, name, price FROM items WHERE ID IN (?)', [itemIds], (error, items) => {
        if (error) {
          console.error('Error retrieving item details:', error);
          // Handle the error case appropriately
          res.status(500).json({ error: 'Failed to retrieve item details' });
        } else {
          console.log('Item details retrieved successfully');

          const itemMap = {};
          items.forEach(item => {
            itemMap[item.ID] = {
              name: item.name,
              price: item.price
            };
          });

          const purchasesWithDetails = purchases.map(purchase => {
            const item = itemMap[purchase.itemID];
            if (!item) {
              console.error(`Item not found for itemID: ${purchase.itemID}`);
              return null;
            }
            return {
              id: purchase.itemID,
              item: item,
              quantity: purchase.quantity,
              total: item.price * purchase.quantity
            };
          });

          // Filter out any null entries in case an item was not found
          const validPurchasesWithDetails = purchasesWithDetails.filter(purchase => purchase !== null);

          res.status(200).json(validPurchasesWithDetails);
        }
      });
    }
  });
});

router.put("/updateOrderStatus/:id", (req, res) => {
  const { id } = req.params;
  const { decision } = req.body;

  db.query("UPDATE orders SET status = ? WHERE ID = ?", [decision, id], (error, results) => {
    if (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({ error: 'Failed to update order status' });
    } else {
      console.log('Order status updated successfully');
      if (decision === 'completed') {
        db.query("UPDATE payment SET status = TRUE WHERE orderID = ?", [id], (error, results) => {
          if (error) {
            console.error('Error updating payment status:', error);
            res.status(500).json({ error: 'Failed to update payment status' });
          } else {
            console.log('Payment status updated successfully');
            res.status(200).json({ message: 'Order and payment status updated successfully!' });
          }
        });
      } else {
        res.status(200).json({ message: 'Order status updated successfully!' });
      }
    }
  });
});

router.post("/checkCartItems", (req, res) => {
  const { items } = req.body;

  // Assuming your items are passed as an array of objects, each containing item_id and quantity properties
  const itemIds = items.map(item => item.item_id);

  // Get the available items from the database based on the item IDs
  db.query('SELECT id, quantity, expiry_date FROM items WHERE id IN (?)', [itemIds], (error, availableItems) => {
    if (error) {
      console.error('Error retrieving available items:', error);
      res.status(500).json({ error: 'Failed to retrieve available items.' });
    } else {
      const unavailableItems = [];

      // Check if each item meets the availability criteria
      for (const item of items) {
        const availableItem = availableItems.find(available => available.id === item.item_id);
        console.log(availableItem);
        if (!availableItem || availableItem.quantity === 0 || isExpired(availableItem.expiry_date)) {
          unavailableItems.push(item);
        }
      }

      if (unavailableItems.length > 0) {
        console.log("dili ok");
        res.status(200).json({ message: 'Some items are unavailable.', unavailableItems });
      } else {
        res.status(200).json({ message: 'All items are available.', unavailableItems });
        console.log("ok");
      }
    }
  });
});

function isExpired(date) {
  const currentDate = new Date();
  const expiryDate = new Date(date);

  // Set the time to 00:00:00 to compare only the dates
  currentDate.setHours(0, 0, 0, 0);
  expiryDate.setHours(0, 0, 0, 0);

  return expiryDate <= currentDate;
}



module.exports = router;
