import React, { useState } from "react";
import '../Product/ProductPage.css';
// import Rating from '../ItemContainer/Rating';
import OrderModal from './AddOrderModal';

const ProductContainer = ({ imageSrc, name, rating, price, product }) => {
  const [selectedProd, setSelectedProd] = useState({});
  const [showOrderModal, setShowOrderModal] = useState(false);
  const ToggleO = (product) => {
    setShowOrderModal(true);
    setSelectedProd(product);
  };
  const closeOrderModal = () => {
    setShowOrderModal(false);
    setSelectedProd({});
  };

  return (
    <div>
    <div className='p-container' onClick={() => ToggleO(product)}>
      <img src={imageSrc} alt="Container Image" className='product-img' />
      <h2 className='title'>{name}</h2>
      <div className='rate'>
        {/* {rating} */}
          {rating.map((star, index) => (
            <img key={index} src={star} alt='star' className={`rating ${index === 0 ? 'first-star' : ''}`}/>
          ))}
        {/* <Rating rate={rating} /> */}
      </div>
      <h3 className='product-price'>{price}</h3>
    </div>
    <OrderModal
        show={showOrderModal}
        close={closeOrderModal}
        item={selectedProd}
      />
    </div>
    
  );
};

export default ProductContainer;
