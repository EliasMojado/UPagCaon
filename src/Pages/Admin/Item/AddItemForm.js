import React from 'react';
import '../Item/Item.css';

const TextFieldComponent = ({
    itemsname,
    type,
    description,
    price,
    quantity,
    expiry,
    image,
    handleNameChange,
    handleTypeChange,
    handleDescriptionChange,
    handlePriceChange,
    handleQuantityChange,
    handleExpiryChange,
    handleImageChange,
}) => {

  return (
    <div className='items-input'>
      <input
        className='itemsname'
        type="text"
        placeholder="Product Name"
        value={itemsname}
        onChange={handleNameChange}
      />
      <input
        className='type'
        type="text"
        placeholder="Type"
        value={type}
        onChange={handleTypeChange}
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