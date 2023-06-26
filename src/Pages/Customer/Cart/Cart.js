import React from "react";
import Sidebar from "../Home/Sidebar";
import SearchBar from "../Home/SearchBar";
import './Cart.css';
import cancel from '../../../Assets/Cart/cancel.svg'; 
import out from '../../../Assets/Cart/out.svg';

function Cart() {
    const dot = "........................................";
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
                            <tr>
                                <td>1 Fried Chicken</td>
                                <td>{dot}</td>
                                <td className="order-summary-price">Php 40.00</td>
                                <td className="LCol"><img src={cancel} alt="order-summary-cancel" className="order-summary-cancel"/></td>
                                <td className="LCol"><img src={out} alt="order-summary-out" className="order-summary-out"/></td>
                            </tr>
                            <tr>
                                <td>5 Puto Cheese</td>
                                <td>{dot}</td>
                                <td className="order-summary-price">Php 50.00</td>
                                <td className="LCol"><img src={cancel} alt="order-summary-cancel" className="order-summary-cancel"/></td>
                                <td className="LCol"><img src={out} alt="order-summary-out" className="order-summary-out"/></td>
                            </tr>
                            <tr>
                                <td>1 Cucumber Lemonade</td>
                                <td>{dot}</td>
                                <td className="order-summary-price">Php 25.00</td>
                                <td className="LCol"><img src={cancel} alt="order-summary-cancel" className="order-summary-cancel"/></td>
                                <td className="LCol"><img src={out} alt="order-summary-out" className="order-summary-out"/></td>
                            </tr>
                            <div className="summary-total-footer">
                                <tr>
                                    <td className="order-total">TOTAL</td>
                                    <td className="order-summary-total">Php 115.00</td>
                                </tr>
                            </div>
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
                                    <input type="checkbox" />
                                    </td>
                                    <td>Dine In</td>
                                </tr>
                                <tr className="order-type-content">
                                    <td>
                                    <input type="checkbox" />
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
                                    <input type="checkbox" />
                                    </td>
                                    <td>OTC</td>
                                </tr>
                                <tr className="order-type-content">
                                    <td>
                                    <input type="checkbox" />
                                    </td>
                                    <td>GCASH</td>
                                </tr>
                            </tbody>
                        </div>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default Cart;