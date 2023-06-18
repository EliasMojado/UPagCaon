import React from 'react';
import '../Employee/Employee.css';
import closebutton from '../../../Assets/close-button.svg';
import deleteicon from '../../../Assets/delete.svg';
import { apiUrl } from '../../../config';

function DeleteEmployeeModal({ show, close, employee }) {

  const adminDelete = () =>{
    fetch(apiUrl + '/admin/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ adminID: employee.ID}),
    }).then((response) => {
        if (response.ok) {
          // Delete operation successful
          console.log('Employee deleted successfully');
          window.location.reload();
          // Perform any additional actions, such as updating the employee list
        } else {
          // Delete operation failed
          console.error('Error deleting employee');
          // Handle the error case appropriately
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
        <div className="delete-employee-container">
          <div className="delete-employee-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <img src={deleteicon} alt='delete-icon' className='delete-icon'/>
              <h2 className="delete-employee-modal_header-title">Delete</h2>
              <button className='exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <span className='delete-content'>
                    Are you sure you want to delete this data? <br />
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

export default DeleteEmployeeModal;