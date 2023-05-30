import '../Landing/LoginForm.css';
import React, { useState, useRef, useEffect } from 'react';
import TextFieldComponent from '../Landing/LoginField.js';

const LoginForm = ({ show, close }) => {
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
      {show ? (
        <div className="modalContainer">
          <div ref={modalRef} className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="modal_header-title">LOG IN</h2>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent />
              </div>
            </main>
            <footer className="modal_footer">
              <button className="login" onClick={close}>
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
