import React from 'react';
import '../Viands/Viands.css';

const TextFieldComponent = ({
    vname,
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
    <div className='v-input'>
      <input
        className='vname'
        type="text"
        placeholder="Product Name"
        value={vname}
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
        className='image'
        type="file"
        accept="image/*"
        value={image}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default TextFieldComponent;