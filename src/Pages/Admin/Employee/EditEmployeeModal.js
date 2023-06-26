import React, { useState, useEffect } from 'react';
import TextFieldComponent from './EditEmployeeForm.js';
import '../Employee/Employee.css';
import closebutton from '../../../Assets/close-button.svg';
import { apiUrl } from '../../../config';
import toast from 'react-hot-toast';

function EditEmployeeModal({ show, close, employee }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact_number, setContactNumber] = useState('');

  useEffect(() => {
    setName(employee.name);
    setEmail(employee.email);
    setContactNumber(employee.contact_number);
  }, [employee]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleUpdateEmployee = () => {
    const updatedEmployee = {
      id: employee.ID,
      name: name,
      email: email,
      password: password,
      contact_number: contact_number,
    };

    fetch(apiUrl + '/admin/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    })
      .then((response) => {
        if (response.ok) {
          // Edit operation successful
          console.log('Employee updated successfully');
          
          toast.success('Employee Updated', {
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
          // Edit operation failed
          console.error('Error updating employee');
          // Handle the error case appropriately
          toast.error('An error occurred while updating the employee.', {
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
        console.error('Error updating employee:', error);
        // Handle the error case appropriately
      });


    close();
  };

  return (
    <>
      {show ? (
        <div className="edit-employee-container">
          <div className="edit-employee-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="edit-employee-modal_header-title">Edit Employee</h2>
              <button className='exit' onClick={close}>
                <img src={closebutton} alt='exit' />
              </button>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent
                  initialName={name}
                  initialEmail={email}
                  initialPassword={password}
                  initialContact={contact_number}
                  handleNameChange={handleNameChange}
                  handleEmailChange={handleEmailChange}
                  handlePasswordChange={handlePasswordChange}
                  handleContactNumberChange={handleContactNumberChange}
                />
              </div>
            </main>
            <footer className="modal_footer">
              <div className='button-row'>
                <button className="cancel" onClick={close}>
                  Cancel
                </button>
                <button className="okay" onClick={handleUpdateEmployee}>
                  Okay
                </button>
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default EditEmployeeModal;
