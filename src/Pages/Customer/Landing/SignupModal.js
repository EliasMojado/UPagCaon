import '../Landing/SignupModal.css';
import React, { useRef, useEffect } from 'react';
import TextFieldComponent from './SignupForm.js';

const SignupModal = ({ show, close }) => {
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
              <h2 className="modal_header-title">SIGN UP</h2>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent />
              </div>
            </main>
            <footer className="modal_footer">
              <button className="login" onClick={close}>
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
