import React, { useState } from 'react';
import toast from 'react-hot-toast';
import '../Landing/LoginForm.css';
import TextFieldComponent from './LoginForm.js';
import '../Landing/LoginModal.css'
import {apiUrl} from '../../../config.js';

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
    fetch(apiUrl + '/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log('Response:', data);
        // Handle the response from the server
        if(data.type === 'admin'){
          console.log('Admin user logged in');
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
          window.location.href = '/admin/dashboard';
          localStorage.setItem('user', JSON.stringify(data));
        }else{
          console.log('Unauthorized access');
        }
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
              <h2 className="modal_header-title">WELCOME</h2>
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
              <button className="loginmodal" onClick={handleLogIn}>
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