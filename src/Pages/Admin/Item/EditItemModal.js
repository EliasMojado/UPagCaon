import closebutton from "../../../Assets/close-button.svg";
import TextFieldComponent from "./EditItemForm";
import React, { useState, useEffect } from "react";
import "../../Admin/Item/EditItemModal.css";
import { updateItem } from "./Items";

const EditItemModal = ({ show, close, item }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry_date, setExpiry] = useState("");
  const [image, setImage] = useState(null);

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

  const handleImageChange = (file) => {
    setImage(file);
  };

  const handleUpdateItem = () => {
    const formData = new FormData();
    formData.append("id", item.id);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("type", "viand");
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("expiryDate", expiry_date);
    formData.append("image", image);
    formData.append("imageURL", item.image)

    console.log("passed expiry date: ");
    console.log(expiry_date);

    updateItem(formData);

    close();
  };

  return (
    <>
      {show ? (
        <div className="edit-item-container">
          <div className="edit-item-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <h2 className="edit-item-modal-header-title">Edit Item</h2>
              <button className="exit" onClick={close}>
                <img src={closebutton} alt="exit" />
              </button>
            </header>
            <main className="modal-content">
              <form onSubmit={handleUpdateItem}>
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
                <footer className="modal-footer">
                <div className="edit-item-button-row">
                    <button className="cancel" onClick={close}>
                      Cancel
                    </button>
                    <button className="okay" type = "submit">
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
};

export default EditItemModal;
