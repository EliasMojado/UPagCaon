import React, { useState } from "react";
import '../Drinks/Drinks.css';
import closebutton from '../../../Assets/close-button.svg';
import TextFieldComponent from "../Drinks/AddDrinkForm";

function AddDrinkModal ({ show, close}) {
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
        <div className="add-drink-container">
          <div className="add-drink-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-drink-modal_header-title">Add Drink</h2>
              <button className='drink-exit' onClick={close}>
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
                <div className='drink-button-row'>
                    <button className="drink-cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="drink-okay" onClick={close}>
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

export default AddDrinkModal;