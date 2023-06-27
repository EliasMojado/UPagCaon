import {apiUrl} from  "../../../config.js";
import toast from 'react-hot-toast';

export function checkOut(user_id, items, payment_type, order_type) {
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time as yyyy-mm-dd HH:MM:SS
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    const purchase_date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  
    // Create the request body
    const requestBody = {
      user_id: user_id,
      purchase_date: purchase_date,
      items: items,
      payment_type: payment_type,
      order_type: order_type
    };
  
    fetch(apiUrl + '/order/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      toast.success('Order added successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 5000,
      });
    })
    .catch(error => {
      // Handle any errors
      console.error('Error adding order:', error);
      toast.error('An error occurred while adding the order.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
    });
  }
  export function checkCartItems(items) {
    const requestBody = { 
      items: items
    };
  
    return fetch(apiUrl + '/order/checkCartItems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to check cart items');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data
        return data;
      })
      .catch(error => {
        console.error('Error checking cart items:', error);
        throw error; // re-throw the error to propagate it to the caller if needed
      });
  }
  
  export function getUserOrders() {
    return fetch(apiUrl + '/order/getUserOrders')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve orders');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error retrieving orders:', error);
        toast.error('Failed to retrieve orders');
        // Handle the error case appropriately
      });
  }
  