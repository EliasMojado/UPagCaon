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
  
  