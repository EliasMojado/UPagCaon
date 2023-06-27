import React from 'react';
import '../../Admin/Employee/Employee.css';
import '../Profile/Profile.css';
import closebutton from '../../../Assets/close-button.svg';
import deleteicon from '../../../Assets/delete.svg';
import { apiUrl } from '../../../config';
import toast from 'react-hot-toast';

function DeleteProfileModal({ show, close, employee }) {

  const adminDelete = () =>{
    fetch(apiUrl + '/admin/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adminID: employee.ID}),
    })
    .then((response) => {
        if (response.ok) {
          // Delete operation successful
          console.log('Employee deleted successfully');
          toast.success('Employee Removed', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration: 3000
          });
          window.location.reload();
          // Perform any additional actions, such as updating the employee list
        } else {
          // Delete operation failed
          console.error('Error deleting employee');
          // Handle the error case appropriately
          toast.error('An error occurred while removing the employee.', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration: 3000,
          });
        }
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
        // Handle the error case appropriately
      });





    close();
  };
  
  
    return (
        <>
        {show ? (
        <div className="delete-user-container">
          <div className="delete-user-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <img src={deleteicon} alt='delete-icon' className='delete-user-icon'/>
              <h2 className="delete-user-modal_header-title">Delete Profile</h2>
              <button className='exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <span className='delete-user-content'>
                    Are you sure you want to delete your profile data? <br />
                    This process cannot be undone.
                </span>
              </div>
            </main>
            <footer className="delete-modal_footer">
                <div className='button-row'>
                    <button className="no" onClick={close}>
                        No
                    </button>
                    <button className="yes" onClick={adminDelete}>
                        Yes
                    </button>
                </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>

    )
}

export default DeleteProfileModal;