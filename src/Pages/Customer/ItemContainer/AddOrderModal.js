import React, { useState } from "react";
import '../../Admin/Item/Item.css';
import '../Home/Home.css'
import closebutton from '../../../Assets/close-button.svg';
// import rating from '../ItemContainer/Rating';


function AddOrderModal ({ show, close, item }) {
  const [quantity, setQuantity] = useState(1);
  let rating = item.rating;

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const existingItemIndex = cart.findIndex(cartItem => cartItem.item_id === item.id);
  
    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update the quantity
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add the item to the cart
      cart.push({ item_id: item.id, quantity });
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Console log all items in the cart
    console.log("Items in the cart:");
    cart.forEach(cartItem => {
      console.log("Item ID:", cartItem.item_id);
      console.log("Quantity:", cartItem.quantity);
    });
  
    // Close the modal after adding to cart
    close();
  };
  

  const handleButtonPlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
  
  const handleButtonMinus = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };



  return (
    <>
      {show && (
        <div className="add-item-container">
          <div className="add-item-modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal_header">
              <h2 className="add-item-modal_header-title">Add Order</h2>
              <button className='item-exit' onClick={close}>
                <img src={closebutton} alt='exit'/>
              </button>
            </header>
            <main className="modal_content">
              <div className="item-details">
                <div className="item-image">
                  <img src={item.imageSrc} alt="Container Image" className='item-image' />
                </div>
                <div>
                  <div className="iname">{item.name}</div>
                  <div className="idescription">{item.description}</div> 
                  <div className="itype">{item.type}</div>
                  <div className="iname">₱{item.price}</div>
                  
                      <div className="istar">{item.rating}</div>

                  
                        
                </div>
              </div>
              <div className='row-quan'>
                <div>
                  <span className='quantity mr-2 align-self-center'>Quantity</span>
                </div>
                <div>
                  <button className='mt-2 minus' onClick={handleButtonMinus}>-</button>
                </div>
                <div>
                  <input
                    className='count'
                    value={quantity}
                    onChange={handleQuantityChange}
                  />
                </div>
                <div>
                  <button className="plus" onClick={handleButtonPlus}>+</button>
                </div>
              </div>
            </main>
            <footer className="modal_footer">
              <div className='item-button-row'>
                <button className="order-cancel" onClick={close}>
                  Cancel
                </button>
                <button className="order-okay" type="submit" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}

export default AddOrderModal;
