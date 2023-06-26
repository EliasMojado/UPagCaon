import {apiUrl} from  "../../../config.js";
import toast from 'react-hot-toast';

export function checkOut(user_id, items, payment_type) {
    // Get the current date and time
    const currentDate = new Date();
  
    // Format the date and time as ISO 8601
    const purchase_date = currentDate.toISOString();
  
    // Create the request body
    const requestBody = {
      user_id: user_id,
      purchase_date: purchase_date,
      items: items,
      payment_type: payment_type
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
  
  