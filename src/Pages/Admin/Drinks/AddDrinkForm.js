import React from 'react';
import '../Drinks/Drinks.css';

const TextFieldComponent = ({
    dname,
    description,
    price,
    quantity,
    expiry,
    image,
    handleNameChange,
    handleDescriptionChange,
    handlePriceChange,
    handleQuantityChange,
    handleExpiryChange,
    handleImageChange,
}) => {

  return (
    <div className='d-input'>
      <input
        className='dname'
        type="text"
        placeholder="Product Name"
        value={dname}
        onChange={handleNameChange}
      />
      <input
        className='description'
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        className='price'
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <input
        className='quantity'
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <input
        className='expiry'
        type="date"
        placeholder="Expiry Date"
        value={expiry}
        onChange={handleExpiryChange}
      />
      <input
        className='image-upload'
        type="file"
        accept="image/*"
        value={image}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default TextFieldComponent;