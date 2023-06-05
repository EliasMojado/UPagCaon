import React, { useRef, useEffect } from 'react';
import TextFieldComponent from './AddEmployeeForm.js';
import '../Employee/Employee.css';
import closebutton from '../../../Assets/close-button.svg';

function AddEmployeeModal({ show, close }) {
    return (
        <>
        {show ? (
        <div className="add-employee-container">
          <div className="add-employee-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-employee-modal_header-title">Add Employee</h2>
              <button className='exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent/>
              </div>
            </main>
            <footer className="modal_footer">
                <div className='button-row'>
                    <button className="cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="okay" onClick={close}>
                        Okay
                    </button>
                </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>

    )
}

export default AddEmployeeModal;