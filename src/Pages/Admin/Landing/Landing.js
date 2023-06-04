import React, { useState } from 'react';
import toast from 'react-hot-toast';
import logo from '../../../Assets/logo.svg';
import kaha from '../../../Assets/kaha.svg';
import footer from '../../../Assets/footer-logo.svg';
import '../Landing/Landing.css';
import LoginForm from './LoginModal';

function Landing() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const ToggleL = () => setShowLoginModal(!showLoginModal);
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <div className="landing">
      <header>
        <div className="button-container">
          <button className="transparent-button">ABOUT US</button>
        </div>
      </header>
      <div className='content'>
        <div className="img-container">
          <img src={logo} alt="logo" className="logo-landing" />
        </div>
        <div>
          <img src={kaha} alt="kaha" className="kaha" />
        </div>
        <div className="button">
          <button className="login" onClick={() => ToggleL()}>
            LOG IN
          </button>
        </div>
      </div>
      <footer className="footer">
        <img src={footer} alt="footer" className="footer-logo" />
        <span className="powered">Powered by</span>
        <span className="deep">   deep solutions</span>
      </footer>

      <LoginForm show={showLoginModal} close={closeLoginModal}/>
    </div>
  )
}

export default Landing;
