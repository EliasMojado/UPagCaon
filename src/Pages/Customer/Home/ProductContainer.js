import React from 'react';
import '../Home/Home.css';

const ProductContainer = ({ imageSrc, title, rating, price }) => {
  return (
    <div className='p-container'>
      <img src={imageSrc} alt="Container Image" className='product-img' />
      <h2 className='title'>{title}</h2>
      {rating.map((star, index) => (
        <img key={index} src={star} alt='star' className={`rating ${index === 0 ? 'first-star' : ''}`}/>
      ))}
      <h3 className='price'>{price}</h3>
    </div>
  );
};

export default ProductContainer;
