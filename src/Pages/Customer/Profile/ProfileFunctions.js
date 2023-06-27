import { apiUrl } from "../../../config";
import toast from 'react-hot-toast';

export function updateUser(id, name, password, email, contact) {
  const attributes = [
    { name: 'name', value: name },
    { name: 'password', value: password },
    { name: 'email', value: email },
    { name: 'contact_number', value: contact }
  ];

  const body = {
    id: id,
    attributes: attributes
  };

  fetch(apiUrl + '/user/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Handle the response data

      // Fetch the updated user data
      return fetch(apiUrl + '/user/getUser/' + id, {
        method: 'POST',
      });
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to get user');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      localStorage.removeItem('user');
      localStorage.setItem('user', JSON.stringify(data));
      toast.success(data.message, {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000
      });

      setTimeout(() => {
        window.location.href = '/profile';
      }, 3000);
    })
    .catch(error => {
      console.error('Error updating user:', error);
      // Handle the error
    });
}

export function deleteUser(id) {
  return fetch(apiUrl + '/user/deleteUser/' + id, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      // Handle the response data
      return data;
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      // Handle the error
      throw error; // Rethrow the error to be caught by the caller
    });
}

export function getOrderHistory(id) {
  return fetch(apiUrl + '/order/orderHistory/' + id, {
    method: 'POST',
  })
    .then(response => response.json())
    .then(orders => {
      return orders; // Return the orders array directly
    })
    .catch(error => {
      console.error('Error getting order history:', error);
      // Handle the error
      throw error; // Rethrow the error to be caught by the caller
    });
}
  

  
  