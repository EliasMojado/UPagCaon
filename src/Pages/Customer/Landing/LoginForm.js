import React, { useState } from 'react';
import '../Landing/LoginForm.css';
import React, {useState} from 'react';
import TextFieldComponent from '../Landing/LoginField.js';

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

  const modalRef = useRef(null);

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

  return (
    <>
     {
     show ?

      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">LOG IN</h2>
          </header>
          <main className="modal_content">
          <div>
            <TextFieldComponent />
        </div>
          </main>
          <footer className="modal_footer">
            {/* <button className="signup">Sign up</button> */}
            <button className="login" onClick={() => close()}>
              Login
            </button>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default LoginForm;
