import React, { useState } from 'react';
import logo from '../../../Assets/logo.svg';
import kaha from '../../../Assets/kaha.svg';
import footer from '../../../Assets/footer-logo.svg';
import '../Landing/Landing.css';
import LoginForm from './LoginModal';
import SignupForm from './SignupModal';

function Landing() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const ToggleL = () => setShowLoginModal(!showLoginModal);
  const closeLoginModal = () => setShowLoginModal(false);

  const [showSignupModal, setShowSignupModal] = useState(false);
  const ToggleS = () => setShowSignupModal(!showSignupModal);
  const closeSignupModal = () => setShowSignupModal(false);

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
        <button className="signup" onClick={() => ToggleS()}>
            SIGN UP
          </button>
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
      <SignupForm show={showSignupModal} close={closeSignupModal}/>
    </div>
  )
}

export default Landing;
