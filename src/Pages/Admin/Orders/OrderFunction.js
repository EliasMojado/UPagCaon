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

export function getOrderedItems(id) {
  return fetch(apiUrl + '/order/getOrderedItems/' + id)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to retrieve ordered items');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error retrieving ordered items:', error);
      toast.error('Failed to retrieve ordered items');
      // Handle the error case appropriately
    });
}