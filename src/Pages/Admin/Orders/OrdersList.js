import React, { useState } from "react";
import "./Orders.css";
import ViewOrderModal from "./ViewOrderModal";

const OrdersList = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState({});
  const [showViewOrderModal, setShowViewOrderModal] = useState(false);

  if (!Array.isArray(orders)) {
    orders = [];
  }
  orders.sort((a, b) => new Date(a.date) - new Date(b.date));

  const ToggleV = (order) => {
    setShowViewOrderModal(true);
    setSelectedOrder(order);
    console.log(order);
  };

  const closeViewModal = () => {
    setShowViewOrderModal(false);
    setSelectedOrder({});
  };

  return (
    <div className="orders-list">
      <table>
        <thead>
          <tr>
            <th className="order-first-column"></th>
            <th>Order ID</th>
            <th>User</th>
            <th>Payment ID</th>
            <th>Purchase Date</th>
            <th>Total</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <button className="order-view" onClick={() => ToggleV(order)}>View</button>
                </td>
                <td className="order-data">{order.id}</td>
                <td className="order-data">{order.user}</td>
                <td className="order-data">{order.payment}</td>
                <td className="order-data">{new Date(order.date).toLocaleString()}</td>
                <td className="order-data">{order.total}</td>
                <td className="order-data">{order.status}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <ViewOrderModal
        show={showViewOrderModal}
        close={closeViewModal}
        order={selectedOrder} 
      />
    </div>
  );
};

export default OrdersList;
