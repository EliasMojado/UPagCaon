import React from 'react';
import '../Product/ProductPage.css';
import rating from '../ItemContainer/Rating';

const ProductContainer = ({ imageSrc, name, rating, price }) => {
  return (
    
    <div className='p-container'>
      <img src={imageSrc} alt="Container Image" className='product-img' />
      <h2 className='title'>{name}</h2>
      <div className='rate'>
          {rating.map((star, index) => (
            <img key={index} src={star} alt='star' className={`rating ${index === 0 ? 'first-star' : ''}`}/>
          ))}
      </div>
      <h3 className='product-price'>{price}</h3>
    </div>
  );
};

export default ProductContainer;
