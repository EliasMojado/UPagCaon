import React, { useState, useEffect } from 'react';
import closebutton from '../../../Assets/close-button.svg';
import cart from '../../../Assets/ViewOrder/cart.svg';
import userIcon from '../../../Assets/ViewOrder/user.svg';
import item from '../../../Assets/ViewOrder/item.svg';
import payment from '../../../Assets/ViewOrder/payment.svg';
import '../Orders/Orders.css'
import { getOrderedItems, updateOrderStatus } from './OrderFunction';

function ViewOrderModal({ show, close, order }) {
    const [id, setId] = useState("");
    const [user, setUser] = useState("");
    const [date, setDate] = useState("");
    const [total, setTotal] = useState("");
    const [orderedItems, setOrderedItems] = useState([]);

    useEffect(() => {
        if (order) {
            setId(order.id);
            setUser(order.user);
            setDate(new Date(order.created).toLocaleDateString());
            setTotal(order.total);
        }

        if (order && order.id) {
            getOrderedItems(order.id)
                .then(orderedItems => {
                    setOrderedItems(orderedItems);
                }
            );
        }

    }, [order]);

    const handleUpdateStatus = (newStatus) => {
        updateOrderStatus(id, newStatus)
            .then(() => {
                console.log(`Order ${id} status updated to ${newStatus}`);
            })
            .catch(error => {
                console.error(`Failed to update order ${id} status:`, error);
            });
    };

    return (
        <>
            {show ? (
                <div className='view-order-container'>
                    <div
                        className='view-order-modal'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <header className='modal-header'>
                            <h2 className='view-order-modal_header-title'>View Order</h2>
                            <button className='exit' onClick={close}>
                                <img src={closebutton} alt='exit' />
                            </button>
                        </header>
                        <main>
                            <table className='table'>
                                <tbody>
                                    <tr key={order.id}>
                                        <td className='orders-info'>
                                            <div className="order-info">
                                                <div className='order-left'>
                                                    <img src={cart} className="order-icon" alt="Cart" />
                                                    <span>Order ID: {order.id}</span>
                                                </div>
                                                <div className='order-right'>
                                                    <span>{new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                                </div>
                                            </div>
                                            <div className="order-info">
                                                <div className='order-right'>
                                                    <img src={userIcon} className="order-icon" alt="User" />
                                                    <span>Customer</span>
                                                </div>
                                                <div className='order-left'>
                                                    {order.user}
                                                </div>
                                            </div>
                                        <div className="order-info">
                                            <div className='order-leftt'>
                                                <img src={item} className="order-icon" alt="Item" />
                                                <span>Item/s: </span>
                                                </div>
                                            <div className='order-rightt'>
                                                {orderedItems.map((item, index) => (
                                                    <div key={index}>
                                                        <span>{item.quantity} {item.item.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="order-info">
                                            <div className='order-left'>
                                                <img src={payment} className="order-icon" alt="Payment" />
                                                <span>Payment Status: </span>
                                            </div>
                                            <div className='order-right'>
                                                <span>Total: PHP {order.total} </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </main>
                        <footer className='view-order-footer'>
                            <div className='footer-buttons'>
                                <button className='failed' onClick={() => handleUpdateStatus('failed')}>Failed</button>
                                <button className='serving' onClick={() => handleUpdateStatus('serving')}>Serving</button>
                                <button className='complete' onClick={() => handleUpdateStatus('completed')}>Complete</button>
                            </div>
                        </footer>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default ViewOrderModal;