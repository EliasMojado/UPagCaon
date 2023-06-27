import React from 'react';
import '../../Admin/Employee/Employee.css';
import '../Profile/Profile.css';
import closebutton from '../../../Assets/close-button.svg';
import deleteicon from '../../../Assets/delete.svg';
import { apiUrl } from '../../../config';
import { deleteUser } from './ProfileFunctions';
import toast from 'react-hot-toast';

function DeleteProfileModal({ show, close, employee }) {

    const adminDelete = async () => {
        try { 
            const response = await deleteUser(employee.id);
            console.log(response);
            toast.success(response.message, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                duration: 3000
            });
            setTimeout(() => {
                localStorage.removeItem('user');
                window.location.href = '/';
            }, 3000);
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error(error.message, {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
                duration: 3000
            });
        }
    };

  
  
    return (
        <>
        {show ? (
        <div className="delete-user-container">
          <div className="delete-user-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <img src={deleteicon} alt='delete-icon' className='delete-user-icon'/>
              <h2 className="delete-user-modal_header-title">Delete Profile</h2>
              <button className='exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <span className='delete-user-content'>
                    Are you sure you want to delete your profile data? <br />
                    This process cannot be undone.
                </span>
              </div>
            </main>
            <footer className="delete-modal_footer">
                <div className='button-row'>
                    <button className="no" onClick={close}>
                        No
                    </button>
                    <button className="yes" onClick={adminDelete}>
                        Yes
                    </button>
                </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>

    )
}

export default DeleteProfileModal;