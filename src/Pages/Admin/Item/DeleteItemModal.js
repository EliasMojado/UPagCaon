import React from 'react';
import '../../Admin/Employee/Employee.css';
import closebutton from '../../../Assets/close-button.svg';
import deleteicon from '../../../Assets/delete.svg';
import { deleteItem } from './Items';

function DeleteItemModal({ show, close, item, modalHeader }) {
  return (
      <>
      {show ? (
      <div className="delete-employee-container">
        <div className="delete-employee-modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <img src={deleteicon} alt='delete-icon' className='delete-icon'/>
            <h2 className="delete-employee-modal_header-title">Delete {modalHeader}</h2>
            <button className='exit' onClick={close}>
              <img src={closebutton} alt='exit'/>
            </button>
          </header>
          <main className="modal_content">
            <div>
              <span className='delete-content'>
                  Are you sure you want to delete this data? <br />
                  This process cannot be undone.
              </span>
            </div>
          </main>
          <footer className="delete-modal_footer">
              <div className='button-row'>
                  <button className="no" onClick={close}>
                      No
                  </button>
                  <button className="yes" onClick={() => deleteItem(item)}>
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

export default DeleteItemModal;