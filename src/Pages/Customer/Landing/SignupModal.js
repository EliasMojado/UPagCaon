import '../Landing/SignupModal.css';
import React, { useRef, useEffect, useState } from 'react';
import TextFieldComponent from './SignupForm.js';
import {apiUrl} from '../../../config.js';

const SignupModal = ({ show, close }) => {
  const modalRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact_number, setContactNumber] = useState('');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [close]);

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

  const handleSignUp = () => {
    // Create a request body with the form data
    const requestBody = {
      name: name,
      email: email,
      password: password,
      contact_number: contact_number,
      type: "customer"
    };

    // Make a POST request to your signup route
    fetch(apiUrl + '/user/signup', {
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
        // Perform any necessary actions based on the response
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occurred during the request
      });
  };

  return (
    <>
      {show ? (
        <div className="modalContainer">
          <div ref={modalRef} className="customer_signup-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="customer_signup-modal_header-title">SIGN UP</h2>
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
              <button className="customer-signup" onClick={handleSignUp}>
                Sign up
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SignupModal;
