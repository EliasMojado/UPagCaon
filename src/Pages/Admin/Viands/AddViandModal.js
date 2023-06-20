import React, { useState, useRef } from "react";
import "../Viands/Viands.css";
import closebutton from "../../../Assets/close-button.svg";
import TextFieldComponent from "../Viands/AddViandForm";
import { insertItem } from "../Item/items";

function AddViandModal({ show, close }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry, setExpiry] = useState("");
  const [image, setImage] = useState(null); // Store the selected image file

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

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", "viand");
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
        <div className="add-viand-container">
          <div className="add-viand-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-viand-modal_header-title">Add Viand</h2>
              <button className="viand-exit" onClick={close}>
                <img src={closebutton} alt="exit" />
              </button>
            </header>
            <main className="modal_content">
              <form onSubmit={handleSubmit}>
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
                    handleImageChange={handleFileSelect}
                  />
                  {image && (
                    <p>Selected File: {image.name}</p>
                  )}
                </div>
                <footer className="modal_footer">
                  <div className="viand-button-row">
                    <button className="viand-cancel" onClick={close}>
                      Cancel
                    </button>
                    <button className="viand-okay" type="submit">
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

export default AddViandModal;
