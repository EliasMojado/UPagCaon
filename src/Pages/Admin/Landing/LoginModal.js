import React, { useState } from 'react';
import '../Landing/LoginForm.css';
import TextFieldComponent from './LoginForm.js';
import '../Landing/LoginModal.css'

const LoginForm = ({ show, close }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  const handleLogIn = () => {
    // Create a request body with email and password
    const requestBody = {
      email: email,
      password: password,
    };

    // Make a POST request to your login route
    fetch('http://localhost:3000/user/login', {
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
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">LOG IN</h2>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent
                  email={email}
                  password={password}
                  handleEmailChange={handleEmailChange}
                  handlePasswordChange={handlePasswordChange}
                />
              </div>
            </main>
            <footer className="modal_footer">
              <button className="login" onClick={handleLogIn}>
                Login
              </button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default LoginForm;