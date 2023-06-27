import React from "react";
import { useNavigate } from 'react-router-dom';
import Sidebar from "../Home/Sidebar";
import SearchBar from "../Home/SearchBar";
import './Cart.css';
import cancel from '../../../Assets/Cart/cancel.svg'; 
import out from '../../../Assets/Cart/out.svg';
import { useState, useEffect } from "react";
import { checkOut, checkCartItems } from "./CartFunction";
import { toast } from "react-hot-toast";

function Cart() {
  const dot = "........................................";
  const navigate = useNavigate();

  const Toggle = () => {
    navigate('/track', { replace: true});
  }
  const [cartItems, setCartItems] = useState([]);
  const [orderType, setOrderType] = useState(null);
  const [paymentType, setPaymentType] = useState(null);
  const [unavailableItems, setUnavailableItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);

    checkCartItems(cart)
      .then(data => {
        setUnavailableItems(data.unavailableItems);
      })
      .catch(error => {
        console.error("Error checking cart items:", error);
      });
  }, []);

  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.item_id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      if (item.price) {
        total += item.price * item.quantity;
      }
    });
    return total;
  };

  const handleOrderTypeChange = (selectedOrderType) => {
    if (orderType === selectedOrderType) {
      // Deselect the order type if it's already selected
      setOrderType(null);
    } else {
      // Select the new order type and deselect the other type
      setOrderType(selectedOrderType);
    }
  };

  const handlePaymentTypeChange = (selectedPaymentType) => {
    if (paymentType === selectedPaymentType) {
      // Deselect the payment type if it's already selected
      setPaymentType(null);
    } else {
      // Select the new payment type and deselect the other type
      setPaymentType(selectedPaymentType);
    }
  };

  const handleCheckOut = () => {
    const user = JSON.parse(localStorage.getItem('userId'));

    if (!user || !cartItems || !paymentType || !orderType) {
        toast.error("Please complete the form", {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            autoClose: 3000,
          });
      // Handle the error case appropriately
      return;
    }else if (unavailableItems.length > 0) {
        toast.error("Resolve the unavailable items before proceeding.", {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          autoClose: 3000,
        });
        console.log("unavailable items")
        console.log(unavailableItems)
        return;
    }else{
        checkOut(user, cartItems, paymentType, orderType);
    }
  }

  const isItemUnavailable = (itemId) => {
    if (unavailableItems.length === 0) {
      return false; // No unavailable items, so the item is not unavailable
    }
  
    return unavailableItems.some((item) => item.item_id === itemId);
  };
  

  return (
    <div className="cart-page">
      <header className="header-container">
        <span className="cart-header">CART</span>
        <button className="add-order-track" onClick={() => Toggle()}>
            Track
        </button>
        <SearchBar />
        <Sidebar />
      </header>
      <main>
        <div className="order-summary">
          <table className="summary-tablee">
            <thead>
              <tr>
                <th className="summary-table-header" colSpan="6">ORDER SUMMARY</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.item_id}>
                  <td className="FCol">{item.quantity}</td>
                  <td>{item.name}</td>
                  <td>{dot}</td>
                  <td className="order-summary-price">
                    {item.price ? `₱${item.price}` : ""}
                  </td>
                  <td className="LCol">
                    <img
                      src={cancel}
                      alt="order-summary-cancel"
                      className="order-summary-cancel"
                      onClick={() => removeItemFromCart(item.item_id)}
                    />
                  </td>
                  <td className="LCol">
                    {isItemUnavailable(item.item_id) && (
                      <img src={out} alt="order-summary-out" className="order-summary-out" />
                    )}
                  </td>
                </tr>
              ))}
              <div>
              <tr className="summary-total-footer">
                <td className="order-total">TOTAL</td>
                <td className="order-summary-total">₱{calculateTotal()}.00</td>
              </tr>

              </div>
              
            </tbody>
          </table>
        </div>
        <div className="order-type">
          <table className="order-type-table">
            <div className="orderrr-type">
              <tr>
                <th className="summary-table-header" colSpan="6">ORDER TYPE</th>
              </tr>
              <tbody>
                <tr className="order-type-content">
                  <td>
                    <input 
                      type="checkbox"
                      checked={orderType === "dine-in"}
                      onChange={() => handleOrderTypeChange("dine-in")}
                    />
                  </td>
                  <td>Dine In</td>
                </tr>
                <tr className="order-type-content">
                  <td>
                    <input 
                      type="checkbox"
                      checked={orderType === "take-out"}
                      onChange={() => handleOrderTypeChange("take-out")} 
                    />
                  </td>
                  <td>Take Out</td>
                </tr>
              </tbody>
            </div>
            <div className="orderr-type">
              <tr>
                <th className="summary-table-header" colSpan="6">PAYMENT TYPE</th>
              </tr>
              <tbody>
                <tr className="order-type-content">
                  <td>
                    <input 
                      type="checkbox"
                      checked={paymentType === "otc"}
                      onChange={() => handlePaymentTypeChange("otc")}
                    />
                  </td>
                  <td>OTC</td>
                </tr>
                <tr className="order-type-content">
                  <td>
                    <input 
                      type="checkbox"
                      checked={paymentType === "gcash"}
                      onChange={() => handlePaymentTypeChange("gcash")}
                    />
                  </td>
                  <td>GCASH</td>
                </tr>
              </tbody>
            </div>
            <div className="proceed-button-container">
              <button
                className="proceed-button"
                onClick={handleCheckOut}
                // disabled={unavailableItems.length > 0}
              >
                PROCEED
              </button>
            </div>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Cart;
