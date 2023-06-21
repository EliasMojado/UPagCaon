import React, { useState, useEffect } from "react";
import "../../Admin/Item/EditItemModal.css";
import moment from "moment/moment";

const TextFieldComponent = ({
  initialName,
  initialDescription,
  initialPrice,
  initialQuantity,
  initialExpiry,
  initialImage,
  handleNameChange,
  handleDescriptionChange,
  handlePriceChange,
  handleQuantityChange,
  handleExpiryChange,
  handleImageChange,
}) => {
  const [editvname, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [expiry_date, setExpiry] = useState("");
  const newExpiryDate = moment.utc(initialExpiry).format("YYYY-MM-DD");

  useEffect(() => {
    setName(initialName);
    setDescription(initialDescription);
    setPrice(initialPrice);
    setQuantity(initialQuantity);
    setExpiry(newExpiryDate);
  }, [
    initialName,
    initialDescription,
    initialPrice,
    initialQuantity,
    initialExpiry,
  ]);

  const handleNameInputChange = (event) => {
    setName(event.target.value);
    handleNameChange(event);
  };

  const handleDescriptionInputChange = (event) => {
    setDescription(event.target.value);
    handleDescriptionChange(event);
  };

  const handlePriceInputChange = (event) => {
    setPrice(event.target.value);
    handlePriceChange(event);
  };

  const handleQuantityInputChange = (event) => {
    setQuantity(event.target.value);
    handleQuantityChange(event);
  };

  const handleExpiryInputChange = (event) => {
    setExpiry(event.target.value);
    handleExpiryChange(event);
  };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    handleImageChange(file);
  };

  return (
    <div className="edit-viand-input">
      <input
        className="editvname"
        type="text"
        placeholder="Product Name"
        value={editvname}
        onChange={handleNameInputChange}
      />
      <input
        className="editvdescription"
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionInputChange}
      />
      <input
        className="editvprice"
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={handlePriceInputChange}
      />
      <input
        className="editvquantity"
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={handleQuantityInputChange}
      />
      <input
        className="editvexpiry"
        type="date"
        placeholder="Expiry Date"
        value={expiry_date}
        onChange={handleExpiryInputChange}
      />
      <input
        className="editvimage"
        type="file"
        accept="image/*"
        onChange={handleImageInputChange}
      />
      {initialImage && (
        <div>
          <p className="initial-image-label">Uploaded Image:</p>
          <p className="initial-image-name">
            {initialImage.name || initialImage.substring(initialImage.lastIndexOf("/") + 1)}
          </p>
        </div>
      )}
    </div>
  );
};

export default TextFieldComponent;
