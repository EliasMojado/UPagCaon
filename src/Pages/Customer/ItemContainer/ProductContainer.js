import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../Product/ProductPage.css';
import OrderModal from './AddOrderModal';
import whitestar from '../../../Assets/Viands/whitestar.svg';


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
  
  const navigate = useNavigate();

  const Toggle = () => {
    navigate('/cart', { replace: true});
  }
  
  const renderRating = () => {
    if (rating === 0) {
      const stars = Array.from({ length: 5 }, () => whitestar);
      
      return stars.map((star, index) => (
        <img key={index} src={star} alt='whitestar' className={`zero-rating-star ${index === 0 ? 'first-star' : ''}`} />
      ));
    } else {
      return rating.map((star, index) => (
        <img key={index} src={star} alt='star' className={`rating ${index === 0 ? 'first-star' : ''}`} />
      ));
    }
  };
  
   

  return (
    <div>
    <div className='p-container' onClick={() => ToggleO(product)}>
      <img src={imageSrc} alt="Container Image" className='product-img' />
      <h2 className='title'>{name}</h2>
      <button className="add-order-cart" onClick={() => Toggle()}>
            Cart
      </button>
      <div className='rate'>
          {/* {rating.map((star, index) => (
            <img key={index} src={star} alt='star' className={`rating ${index === 0 ? 'first-star' : ''}`}/>
          ))} */}
          {renderRating()}
      </div>
      <h3 className='product-price'>₱{price}</h3>
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
