import React, { useState } from "react";
import "./Cart.css";

const TrackList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState({});

  if (!Array.isArray(orders)) {
    orders = [];
  }
  orders.sort((a, b) => new Date(a.date) - new Date(b.date));


  return (
    <div className="orders-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Order ID</th>
            <th>Total Amount</th>
            <th>Payment Type</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <tr key={order.id}>
                <td className="order-data">{new Date(order.date).toLocaleString()}</td>
                <td className="order-data">{order.id}</td>
                <td className="order-data">{order.total}</td>
                {/* <td className="order-data">{order.payment (mao ni si payment type unta gcash or cash)}</td> */} 
                <td className="order-data">{order.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackList;
