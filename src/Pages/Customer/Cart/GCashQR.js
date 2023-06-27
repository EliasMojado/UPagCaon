import React, { useState } from "react";
import gcash from '../../../Assets/gcash.svg';
import QR from '../../../Assets/qr.svg';
import '../../Admin/Item/Item.css';
import '../Home/Home.css'
import closebutton from '../../../Assets/close-button.svg';

function GCashQR ({ show, close }) {

  return (
    <>
      {show && (
        <div className="gcash-container">
          <div onClick={(e) => e.stopPropagation()}>
            <main className="modal_content">
              <div className="gcash-details">
                <div className="gcash-image">
                  <img src={gcash} alt="Container Image" className='item-image' />
                </div>
                <div className="item-image">
                  <img src={QR} alt="Container Image" className='item-image' />
                </div>
            </div>
            </main>
            <footer className="modal_footer">
              <div className='item-button-row'>
                <button className="gcash-close" onClick={close}>
                  Close
                </button>
            </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default GCashQR;
