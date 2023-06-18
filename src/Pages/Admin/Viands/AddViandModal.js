import React, { useState } from "react";
import '../Viands/Viands.css';
import closebutton from '../../../Assets/close-button.svg';
import TextFieldComponent from "../Viands/AddViandForm";

function AddViandModal ({ show, close}) {

    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [image, setImage] = useState('');

    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

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
        <div className="add-viand-container">
          <div className="add-viand-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-viand-modal_header-title">Add Viand</h2>
              <button className='viand-exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div>
                <TextFieldComponent
                type={type}
                name={name}
                description={description}
                price={price}
                quantity={quantity}
                expiry={expiry}
                image={image}
                handleTypeChange={handleTypeChange}
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
                <div className='viand-button-row'>
                    <button className="viand-cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="viand-okay" onClick={close}>
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

export default AddViandModal;