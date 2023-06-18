import React, { useState } from "react";
import '../Others/Others.css';
import closebutton from '../../../Assets/close-button.svg';
import TextFieldComponent from "../Others/AddOtherForm";

function AddOtherModal ({ show, close}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [image, setImage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
    setPrice(event.target.value);
    };

    const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    };

    const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
    };

    const handleImageChange = (event) => {
    setImage(event.target.value);
    };

      return (
        <>
        {show ? (
        <div className="add-other-container">
          <div className="add-other-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-other-modal_header-title">Add Other</h2>
              <button className='other-exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent
                name={name}
                description={description}
                price={price}
                quantity={quantity}
                expiry={expiry}
                image={image}
                handleNameChange={handleNameChange}
                handleDescriptionChange={handleDescriptionChange}
                handlePriceChange={handlePriceChange}
                handleQuantityChange={handleQuantityChange}
                handleExpiryChange={handleExpiryChange}
                handleImageChange={handleImageChange}
                />
              </div>
            </main>
            <footer className="modal_footer">
                <div className='other-button-row'>
                    <button className="other-cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="other-okay" onClick={close}>
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

export default AddOtherModal;