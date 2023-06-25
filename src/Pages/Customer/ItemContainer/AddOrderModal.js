import React, { useState } from "react";
import '../../Admin/Item/Item.css';
import closebutton from '../../../Assets/close-button.svg';

function AddOrderModal ({ show, close, item}) {
    const [quantity, setQuantity] = useState("");
    const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData();
      formData.append("name", item.name);
      formData.append("price", item.price);
      formData.append("type", item.type);
      formData.append("description", item.description);
      formData.append("quantity", quantity);
      formData.append("expiryDate", item.expiry);
      formData.append("image", item.image);
      // insertOrder(formData);
      close();
      };

      let [count, setCount] = useState(0);

      const handleButtonPlus = () => {
        count = count+1;
        setCount(count);
      };
      
      const handleButtonMinus = () => {
        count = count-1;
        setCount(count);
      };


      return (
        <>
        {show ? (
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
                <div className="item-details-col title">
                  <div> {item.name} </div>
                  <div> {item.description} </div> 
                  <div> {item.type} </div>
                  <div> {item.description} </div>
                  <div> {item.price} </div>
                  <div> {item.rating} </div>
                </div>
               </div>
              {/* <form onSubmit={handleSubmit}>
              <div>
                <TextFieldComponent
                name={item.name}
                type={item.type}
                description={item.description}
                price={item.price}
                quantity={quantity}
                handleQuantityChange={handleQuantityChange}
                />
              </div> */}
              <div className='row-quan'>
              <div>
                <span className='quantity mr-2 align-self-center' >Quantity</span>
              </div>
              <div>
              <button className='mt-2 minus' onClick={handleButtonMinus}>-</button>
              </div>
              <div>
              <input
                className='count'
                value={count}
              />
              </div>
              <div>
              <button className="plus" onClick={handleButtonPlus}>+</button>
              </div>
            </div>
            <footer className="modal_footer">
                <div className='item-button-row'>
                    <button className="order-cancel" onClick={close}>
                        Cancel
                    </button>
                    <button className="order-okay" type="submit">
                        Add to Cart
                    </button>
                </div>
            </footer>
          {/* </form> */}
        </main>
      </div>
    </div>
    ) : null}
    </>
    );
}

export default AddOrderModal;