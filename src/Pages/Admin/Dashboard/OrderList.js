import React from 'react';
import './Dashboard.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h3>Queue</h3>
      <ul>
        {orders.map((order) => (
          // <li key={order.id}></li>
          <div>{order.id} - {order.date}</div>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
