import { apiUrl } from '../../config.js';
import toast from 'react-hot-toast';

export function insertItem(formData) {
  fetch(apiUrl + '/item/add', {
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
