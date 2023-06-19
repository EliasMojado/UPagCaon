import { apiUrl } from '../../config.js';
import toast from 'react-hot-toast';

export function insertItem(formData) {
  fetch(apiUrl + '/item/addItem', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log('Item inserted successfully!');
        return response.json();
      } else {
        throw new Error('An error occurred while inserting the item.');
      }
    })
    .then((data) => {
      // Handle the response data if needed
      toast.success('Item inserted successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
    })
    .catch((error) => {
      console.error('Error inserting item:', error);
      toast.error('An error occurred while inserting the item.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
    });
}

export function getItem(type) {
  const url = `${apiUrl}/item/getItem?type=${type}`;

  return fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch items.');
      }
      return response.json();
    })
    .then(data => {
      // Process the retrieved items data
      // Call a separate function to handle the data or update the state
      return data.items;
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle the error condition
    });
}


