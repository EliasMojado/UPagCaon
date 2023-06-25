import { apiUrl } from "../../../config";
import toast from 'react-hot-toast';

export function getPayments() {
    return fetch(apiUrl + '/payment/getCompletedPayments')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to retrieve payments');
        }
        return response.json();
      })
      .then(data => {
        if (!data || !data.payments || data.payments.length === 0) {
            // Handle case when there are no completed payments
            // For example, display a message or take alternative actions
            throw new Error('No completed payments found.');
        }
        return data.payments;
      })
      .catch(error => {
        console.error('Error retrieving payments:', error);
        toast.error('Failed to retrieve payments');
        throw error; // re-throw the error to propagate it to the caller if needed
      });
  }
  

export function getEarned(){
    return fetch(apiUrl + '/payment/getEarned')
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to retrieve earned');
        }
        return response.json();
    }).catch(error => {
        console.error('Error retrieving earned:', error);
        toast.error('Failed to retrieve earned');
    });
}

export function updatePayments(payments, decision){
    return fetch(apiUrl + '/payment/updatePayments', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payments, decision }),
    })
    .then(response => {
        if(!response.ok){
            throw new Error('Failed to update payments');
        }
        return response.json();
    }).catch(error => {
        console.error('Error updating payments:', error);
        toast.error('Failed to update payments');
    });
}