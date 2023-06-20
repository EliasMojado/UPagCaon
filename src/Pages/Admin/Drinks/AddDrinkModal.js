import React, { useState } from "react";
import '../Drinks/Drinks.css';
import closebutton from '../../../Assets/close-button.svg';
import TextFieldComponent from "../Drinks/AddDrinkForm";
import { insertItem } from "../Item/Items";

function AddDrinkModal ({ show, close}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expiry, setExpiry] = useState('');
    const [image, setImage] = useState(null);

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
      setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("type", "drink");
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("expiryDate", expiry);
      formData.append("image", image);
  
      insertItem(formData);
  
      close();
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
              <form onSubmit = {handleSubmit}>
                <div>
                  <TextFieldComponent
                    name={name}
                    description={description}
                    price={price}
                    quantity={quantity}
                    expiry={expiry}
                    handleNameChange={handleNameChange}
                    handleDescriptionChange={handleDescriptionChange}
                    handlePriceChange={handlePriceChange}
                    handleQuantityChange={handleQuantityChange}
                    handleExpiryChange={handleExpiryChange}
                    handleImageChange={handleImageChange}
                  />
                  {image && (
                    <p>Selected File: {image.name}</p>
                  )}
                </div>
                <footer className="modal_footer">
                  <div className='drink-button-row'>
                      <button className="drink-cancel" onClick={close}>
                          Cancel
                      </button>
                      <button className="drink-okay" type="submit">
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
    );
}

export default AddDrinkModal;