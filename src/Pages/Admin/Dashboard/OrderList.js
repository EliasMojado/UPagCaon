import React from 'react';
import './Dashboard.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <h3>Queue</h3>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>{order.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
