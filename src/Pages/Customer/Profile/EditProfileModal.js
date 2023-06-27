import './Profile.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import TextFieldComponent from './EditProfileForm';
import closebutton from "../../../Assets/close-button.svg";
import { updateUser } from './ProfileFunctions';

const EditProfileModal = ({show, close, user}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    
    useEffect(() => {
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setContact(user.contact_number);
      }, [user]);

      const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };  
    
      const handleContactChange = (event) => {
        setContact(event.target.value);
      };

      const handleUpdateUser = () => {
        updateUser(user.name, user.password, user.email, user.contact_number);
    
        close();
      };

      return (
        <>
        {show ? (
          <div className="edit-item-container">
            <div className="edit-item-modal" onClick={(e) => e.stopPropagation()}>
              <header>
                <h2 className="edit-item-modal-header-title">Edit Profile</h2>
                <button className="exit" onClick={close}>
                  <img src={closebutton} alt="exit" />
                </button>
              </header>
              <main className="modal-content">
                <form onSubmit={handleUpdateUser}>
                  <div>
                    <TextFieldComponent
                      initialName={name}
                      initialEmail={email}
                      initialPassword={password}
                      initialContact={contact}
                      handleNameChange={handleNameChange}
                      handleEmailChange={handleEmailChange}
                      handlePrasswordChange={handlePasswordChange}
                      handleContactChange={handleContactChange}
                    />
                  </div>
                  <footer className="modal-footer">
                  <div className="edit-item-button-row">
                      <button className="cancel" onClick={close}>
                        Cancel
                      </button>
                      <button className="okay" type = "submit">
                        Okay
                      </button>
                    </div>
                  </footer>
                </form>
              </main>
            </div>
          </div>
        ) : null}
      </>
      )
}

export default EditProfileModal;