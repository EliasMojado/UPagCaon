import React, { useState, useEffect } from "react";
import "../Admin/EditItemModal.css";

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
  const [expiry_date, setExpiry] = useState(initialExpiry);
  const [image, setImage] = useState(initialImage);

  useEffect(() => {
    setName(initialName);
    setDescription(initialDescription);
    setPrice(initialPrice);
    setQuantity(initialQuantity);
    setExpiry(initialExpiry);
    setImage(initialImage);
  }, [
    initialName,
    initialDescription,
    initialPrice,
    initialQuantity,
    initialExpiry,
    initialImage,
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
    setImage(event.target.value);
    handleImageChange(event);
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
        value={image}
        onChange={handleImageInputChange}
      />
    </div>
  );
};

export default TextFieldComponent;
