import { apiUrl } from '../../../config.js';
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
      window.location.reload();
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

export function deleteItem(item) {
  const url = `${apiUrl}/item/deleteItem`;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  })
    .then(response => {
      if (response.ok) {
        console.log('Item deleted successfully!');
        // Optionally, you can return the response data if needed
        return response.json();
      } else {
        throw new Error('An error occurred while deleting the item.');
      }
    })
    .then(data => {
      // Handle the response data if needed
      // For example, you can show a success toast message
      toast.success('Item deleted successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
      window.location.reload();
    })
    .catch(error => {
      console.error('Error deleting item:', error);
      // Handle the error condition
      // For example, you can show an error toast message
      toast.error('An error occurred while deleting the item.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
    });
}

export function updateItem(formData) {
  return fetch(apiUrl + '/item/updateItem', {
    method: 'PUT',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log('Item updated successfully');
        window.location.reload();
      } else {
        console.error('Error updating item');
      }
    }).then((data) => {
      // Handle the response data if needed
      toast.success('Item updated successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
        duration: 3000,
      });
    })
    .catch((error) => {
      console.error('Error updating item:', error);
      // Handle the error case appropriately
    });

}