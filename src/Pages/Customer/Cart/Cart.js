import React from "react";
import Sidebar from "../Home/Sidebar";
import SearchBar from "../Home/SearchBar";
import './Cart.css';
import cancel from '../../../Assets/Cart/cancel.svg'; 
import out from '../../../Assets/Cart/out.svg';
import { useState, useEffect } from "react";

function Cart() {
    const dot = "........................................";

    const [cartItems, setCartItems] = useState([]);
    const [orderType, setOrderType] = useState(null);
    const [paymentType, setPaymentType] = useState(null);

    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItems(cart);
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


    return (
        <div className="cart-page">
            <header className="header-container">
                <span className="cart-header">CART</span>
                <SearchBar />
                <Sidebar />
            </header>
            <main>
                <div className="order-summary">
                    <table className="summary-table">
                        <thead>
                            <tr>
                                <th className="summary-table-header" colSpan="6">ORDER SUMMARY</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.item_id}>
                                <td>{item.quantity}</td>
                                <td>{item.name}</td>
                                {/* <td>{dot}</td> */}
                                <td className="order-summary-price">
                                    {item.price ? `Php ${item.price}` : ""}
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
                                    <img src={out} alt="order-summary-out" className="order-summary-out" />
                                </td>
                                </tr>
                            ))}
                            <tr className="summary-total-footer">
                                <td className="order-total">TOTAL</td>
                                <td className="order-summary-total">Php {calculateTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="order-type">
                    <table className="order-type-table">
                        <div  className="orderrr-type">
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
                    </table>
                </div>
                <button className="check-out">Check Out</button>
            </main>
        </div>
    )
}

export default Cart;