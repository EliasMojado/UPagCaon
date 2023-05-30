import React, { useState } from 'react';
import logo from '../../../Assets/logo.svg';
import kaha from '../../../Assets/kaha.svg';
import footer from '../../../Assets/footer-logo.svg';
import '../Landing/Landing.css';
import LoginForm from './LoginForm';

function Landing() {
  const [showModal, setShowModal] = useState(false);
  const Toggle = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);
  return (
    <div className="landing">
      <header>
        <div className="button-container">
          <button className="transparent-button">ABOUT US</button>
        </div>
      </header>
      <div className='content'>
        <div className="img-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div>
          <img src={kaha} alt="kaha" className="kaha" />
        </div>
        <div className="buttons">
        <button className="signup" onClick={() => Toggle()}>
            SIGN UP
          </button>
          <button className="login" onClick={() => Toggle()}>
            LOG IN
          </button>
        </div>
      </div>
      <footer className="footer">
        <img src={footer} alt="footer" className="footer-logo" />
        <a className="powered">Powered by</a>
        <a className="deep">   deep solutions</a>
      </footer>

      <LoginForm show={showModal} close={closeModal}/>
    </div>
  )
}

export default Landing;
