import React from 'react';
import '../Others/Others.css';

const TextFieldComponent = ({
    oname,
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
    <div className='o-input'>
      <div className='o-input'>
        <input
        className='oname'
        type="text"
        placeholder="Product Name"
        value={oname}
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
      </div>
      <div className='img-input'>
      <input
        className='image-upload'
        type="file"
        accept="image/*"
        value={image}
        onChange={handleImageChange}
      />
      </div>
    </div>
  );
};

export default TextFieldComponent;