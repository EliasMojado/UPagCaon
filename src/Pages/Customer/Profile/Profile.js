import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {apiUrl} from '../../../config'
import Sidebar from '../Home/Sidebar';
import './Profile.css';

import userPic from '../../../Assets/user-m.svg';
import cart from '../../../Assets/cartsvg.svg';
import EditProfileModal from './EditProfileModal';
import DeleteProfileModal from './DeleteProfileModal';

function Profile() {
  const [user, setUser] = useState();
  const [selectedProfile, setSelectedProfile] = useState({});
  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    setUser(userInfo);

    console.log(userInfo);
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (!storedUser || JSON.parse(storedUser).type !== 'customer') {
      window.location.href = '/';
    }
  }, []);
    
  const navigate = useNavigate();

  const Toggle = () => {
    navigate('/cart', { replace: true});
  }

  const ToggleD = () => {
    setShowDeleteProfileModal(true);
    setSelectedProfile(user);
  };

  const ToggleE = () => {
    setShowEditProfileModal(true);
    setSelectedProfile(user);
  }

  const closeEditModal = () => {
    setShowEditProfileModal(false);
    setSelectedProfile({});
  }

  const closeDeleteModal = () => {
    setShowDeleteProfileModal(false);
    setSelectedProfile({});
  };

  if (!user) {
    return null; // Render nothing until the user data is retrieved
  }

  return (
    <div className="dashboard">
      <header className="header-container">
        <span className="dash">PROFILE</span>
        {/* <button className="add-order-cart" onClick={() => Toggle()}>
            Cart
        </button> */}
        {/* <SearchBar /> */}
        <Sidebar />
      </header>
      <div className="profile-container">
      <div className='profile-box'>
      <img src={userPic} alt="user" className="user-m" />
      <table className="summary-table">
      <div className="user-table-row-h">
        <tr>
          <th  colSpan="12">USER ID : {user.id}</th>
        </tr>
      </div>

      <tbody>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details">Name: </td>
            <td className='user-margin' ></td>
            <td colSpan="4" className='user-deets' > {user.name} </td>
        </tr>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details">Email: </td>
            <td className='user-margin'> </td>
            <td colSpan="4" className='user-deets' > {user.email} </td>
        </tr>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details" >Contact: </td>
            <td className='user-margin'> </td>
            <td colSpan="4" className='user-deets'> {user.contact_number} </td>
        </tr>
        <tr className='tr-row'colSpan="12">
            <td colSpan="4"className="user-details">Type: </td>
            <td className='user-margin'> </td>
            <td colSpan="4" className='user-deets'> Customer </td>
        </tr>
      </tbody>

      </table>

      <footer className="modal_footer">
                <div className='button-row-profile'>
                <button className="okay" onClick={()=>ToggleD()}>
                        Delete
                    </button>
                    <button className="okay" onClick={()=>ToggleE()}>
                        Edit
                    </button>
                </div>
            </footer>
      </div>

      <div className='profile-box'>
      <img src={cart} alt="user" className="user-m" />
      <table className="summary-table mt-2">
      <div className="user-table-row-h">
        <tr>
          <th className="user-table-header" colSpan="12">ORDER HISTORY</th>
        </tr>
      </div>

      {/* <thead> */}
        <tr className='tr-row'>
          <th colSpan="4" >ORDER ID</th>
          <th className='user-margin'  ></th>
          <th colSpan="4">ORDER DATE</th>
        </tr>
      {/* </thead> */}

      <tbody>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details">1 </td>
            <td className='user-margin' ></td>
            <td colSpan="8" className='user-details' > January 2, 2002 </td>
        </tr>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details">2 </td>
            <td className='user-margin'> </td>
            <td colSpan="8" className='user-details' > January 2, 2002 </td>
        </tr>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details" >3 </td>
            <td className='user-margin'> </td>
            <td colSpan="8" className='user-details'> January 2, 2002 </td>
        </tr>
        <tr className='tr-row'colSpan="12">
            <td colSpan="4"className="user-details">4 </td>
            <td className='user-margin'> </td>
            <td colSpan="8" className='user-details'> January 2, 2002 </td>
        </tr>
      </tbody>

      </table>
      </div>
      </div>

      <EditProfileModal
          show = {showEditProfileModal}
          close = {closeEditModal}
          user = {selectedProfile}
          // modalHeader="Snack"
      />
      <DeleteProfileModal
          show = {showDeleteProfileModal}
          close = {closeDeleteModal}
          user = {selectedProfile}
          // modalHeader="Snack"
      />

    </div>
  );
}

export default Profile;
