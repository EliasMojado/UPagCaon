import { apiUrl } from "../../../config";
import toast from 'react-hot-toast';

export function getOrders() {
  return fetch(apiUrl + '/order/getOrders')
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
