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
                                <th className="summary-table-header" colspan="6">ORDER SUMMARY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1 Fried Chicken</td>
                                <td>{dot}</td>
                                <td className="order-summary-price">Php 40.00</td>
                                <td className="last-col"><img src={cancel} alt="order-summary-cancel" className="order-summary-cancel"/></td>
                                <td className="last-col"><img src={out} alt="order-summary-out" className="order-summary-out"/></td>
                            </tr>
                            <tr>
                                <td>5 Puto Cheese</td>
                                <td>{dot}</td>
                                <td className="order-summary-price">Php 50.00</td>
                                <td className="last-col"><img src={cancel} alt="order-summary-cancel" className="order-summary-cancel"/></td>
                                <td className="last-col"><img src={out} alt="order-summary-out" className="order-summary-out"/></td>
                            </tr>
                            <tr>
                                <td>1 Cucumber Lemonade</td>
                                <td>{dot}</td>
                                <td className="order-summary-price">Php 25.00</td>
                                <td className="last-col"><img src={cancel} alt="order-summary-cancel" className="order-summary-cancel"/></td>
                                <td className="last-col"><img src={out} alt="order-summary-out" className="order-summary-out"/></td>
                            </tr>
                            <tr className="summary-total-footer">
                                <td className="order-total">TOTAL</td>
                                <td></td>
                                <td className="order-summary-total">Php 105.00</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <table className="order-type-table">
                    </table> */}
                </div>
            </main>
        </div>
    )
}

export default Cart;