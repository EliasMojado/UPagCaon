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

export function updateOrderStatus(id, status) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ decision: status }),
  };

  return fetch(`/updateOrderStatus/${id}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update order status');
      }
      return response.json();
    })
    .then(data => {
      console.log('Order status updated successfully:', data.message);
      return data;
    })
    .catch(error => {
      console.error('Error updating order status:', error);
      throw error;
    });
}
