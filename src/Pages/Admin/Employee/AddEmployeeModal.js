import React, { useRef, useEffect, useState } from 'react';
import TextFieldComponent from './AddEmployeeForm.js';
import '../Employee/Employee.css';
import closebutton from '../../../Assets/close-button.svg';
import toast from 'react-hot-toast';
import {apiUrl} from '../../../config.js';

function AddEmployeeModal({ show, close }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact_number, setContactNumber] = useState('');

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

  const adminSignup  = () => {
    // Create a request body with the form data
    const requestBody = {
      name: name,
      email: email,
      password: password,
      contact_number: contact_number,
      type: "admin"
    };

    // Make a POST request to your signup route
    fetch(apiUrl + '/admin/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log('Response:', data);
        if (data.error){
          toast.error(data.error,{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration:3000
          }); 
        } else {
          toast.success(data.message,{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration:3000
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
          toast.error(error.error,{
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration:3000
          }); 
        // Handle any errors that occurred during the request
      });

      close();
  };


    return (
        <>
        {show ? (
        <div className="add-employee-container">
          <div className="add-employee-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-employee-modal_header-title">Add Employee</h2>
              <button className='exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent
                name={name}
                email={email}
                password={password}
                contact_number={contact_number}
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
                    <button className="okay" onClick={adminSignup}>
                        Okay
                    </button>
                </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>

    )
}

export default AddEmployeeModal;