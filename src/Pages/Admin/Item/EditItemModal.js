import closebutton from "../../../Assets/close-button.svg";
import TextFieldComponent from "./EditItemForm";
import React, { useState, useEffect } from "react";
import "../../Admin/Item/EditItemModal.css";
import { apiUrl } from "../../../config";

const EditItemModal = ({ show, close, item }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry_date, setExpiry] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
    setPrice(item.price);
    setQuantity(item.quantity);
    setExpiry(item.expiry_date);
    setImage(item.image);
  }, [item]);

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

  const handleImageChange = (imageData) => {
    setImage(imageData);
  };

  const handleUpdateItem = () => {
    const updatedItem = {
      id: item.id,
      name: name,
      price: price,
      description: description,
      quantity: quantity,
      expiry_date: expiry_date
    };

    fetch(apiUrl + '/admin/updateItem', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (response.ok) {
          // Edit operation successful
          console.log('Item updated successfully');
          window.location.reload();
          // Perform any additional actions, such as updating the employee list
        } else {
          // Edit operation failed
          console.error('Error updating item');
          // Handle the error case appropriately
        }
      })
      .catch((error) => {
        console.error('Error updating item:', error);
        // Handle the error case appropriately
      });

    close();
  };

  return (
    <>
      {show ? (
        <div className="edit-item-container">
          <div className="edit-item-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <h2 className="edit-item-modal-header-title">Edit Viand</h2>
              <button className="exit" onClick={close}>
                <img src={closebutton} alt="exit" />
              </button>
            </header>
            <main className="modal-content">
              <div>
                <TextFieldComponent
                  initialName={name}
                  initialDescription={description}
                  initialPrice={price}
                  initialQuantity={quantity}
                  initialExpiry={expiry_date}
                  initialImage={image}
                  handleNameChange={handleNameChange}
                  handleDescriptionChange={handleDescriptionChange}
                  handlePriceChange={handlePriceChange}
                  handleQuantityChange={handleQuantityChange}
                  handleExpiryChange={handleExpiryChange}
                  handleImageChange={handleImageChange}
                />
              </div>
            </main>
            <footer className="modal-footer">
              <div className="edit-viand-button-row">
                <button className="cancel" onClick={close}>
                  Cancel
                </button>
                <button className="okay" onClick={handleUpdateItem}>
                  Okay
                </button>
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditItemModal;
