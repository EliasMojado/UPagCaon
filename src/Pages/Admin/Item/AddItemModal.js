import React, { useState } from "react";
import '../Item/Item.css';
import closebutton from '../../../Assets/close-button.svg';
import TextFieldComponent from "../Item/AddItemForm";
import { insertItem } from "../Item/Items";

function AddItemModal ({ show, close, modalHeader}) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [expiry, setExpiry] = useState("");
    const [image, setImage] = useState(null);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

    const handleTypeChange = (event) => {
      setType(event.target.value);
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

    const handleFileSelect = (event) => {
      setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("type", type);
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
        <div className="add-item-container">
          <div className="add-item-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-item-modal_header-title">{modalHeader}</h2>
              <button className='item-exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <form onSubmit={handleSubmit}>
              <div>
                <TextFieldComponent
                name={name}
                type={type}
                description={description}
                price={price}
                quantity={quantity}
                expiry={expiry}
                handleNameChange={handleNameChange}
                handleTypeChange={handleTypeChange}
                handleDescriptionChange={handleDescriptionChange}
                handlePriceChange={handlePriceChange}
                handleQuantityChange={handleQuantityChange}
                handleExpiryChange={handleExpiryChange}
                handleImageChange={handleFileSelect}
                />
              </div>
            <footer className="modal_footer">
                <div className='item-button-row'>
                    <button className="item-cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="item-okay" type="submit">
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

export default AddItemModal;