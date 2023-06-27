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
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response data
      })
      .catch(error => {
        console.error('Error updating user:', error);
        // Handle the error
      });
  }
  
  