import '../Landing/LoginForm.css';
import React, {useState} from 'react';
import TextFieldComponent from '../Landing/LoginField.js';

const LoginForm = ({ show, close }) => {
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