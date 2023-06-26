import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ProductContainer from '../ItemContainer/ProductContainer';
import ProductPage from '../Product/ProductPage';
import {apiUrl} from '../../../config'
import Sidebar from '../Home/Sidebar';
import SearchBar from '../Home/SearchBar';
import './Profile.css';

import user from '../../../Assets/user-m.svg';
import EditProfileModal from './EditProfileModal';

function Profile() {
  useEffect(() => {
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (!storedUser || JSON.parse(storedUser).type !== 'customer') {
      window.location.href = '/';
    }
  }, []);

  const [selectedProfile, setSelectedProfile] = useState({});
  const [showDeleteProfileModal, setShowDeleteProfileModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
    
  const navigate = useNavigate();

  const Toggle = () => {
    navigate('/cart', { replace: true});
  }

  const ToggleD = () => {
    setShowDeleteProfileModal(true);
    setSelectedProfile();
  };

  const ToggleE = () => {
    setShowEditProfileModal(true);
    setSelectedProfile();
  }

  const closeEditModal = () => {
    setShowEditProfileModal(false);
    setSelectedProfile({});
  }

  const closeDeleteModal = () => {
    setShowDeleteProfileModal(false);
    setSelectedProfile({});
  };


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
      <img src={user} alt="user" className="user-m" />
      <table className="summary-table">
      <thead>
        <tr>
          <th className="user-table-header" colSpan="12">USER ID : [insert here]</th>
        </tr>
      </thead>

      <tbody>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details">Name: </td>
            <td className='user-margin' ></td>
            <td colSpan="4" className='user-deets' > Ellenmarie </td>
        </tr>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details">Email: </td>
            <td className='user-margin'> </td>
            <td colSpan="4" className='user-deets' > Ellenmarie </td>
        </tr>
        <tr className='tr-row'>
            <td colSpan="4" className="user-details" >Contact: </td>
            <td className='user-margin'> </td>
            <td colSpan="4" className='user-deets'> Ellenmarie </td>
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
        kjshdakjsh
      </div>
      </div>

      <EditProfileModal
                show = {showEditProfileModal}
                close = {closeEditModal}
                user = {selectedProfile}
                // modalHeader="Snack"
            />

    </div>
  );
}

export default Profile;