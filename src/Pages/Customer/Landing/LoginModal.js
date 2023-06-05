import React, { useState } from 'react';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import '../Landing/LoginForm.css';
import TextFieldComponent from '../Landing/LoginForm.js';
import '../Landing/LoginModal.css';
import {apiUrl} from '../../../config.js';

const LoginForm = ({ show, close }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
    fetch(apiUrl + '/user/login', {
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
        if(data.type === 'customer'){
          // console.log('Customer user logged in');
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
          setTimeout(()=>{
            window.location.href = '/home';
            localStorage.setItem('user', JSON.stringify(data));
          },3000)
        }else{
          console.log('Unauthorized access.');
          toast.error('Unauthorized access.',{
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
        // Handle any errors that occurred during the request
      });
  };


  return (
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="customer-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="customer-modal_header-title">LOG IN</h2>
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
              <button className="customer-login" onClick={handleLogIn}>
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