import React, { useState } from "react";
import "./Orders.css";

const OrdersList = ({ orders }) => {

  orders.sort((a, b) => new Date(a.date) - new Date(b.date));
  const [orderStatus, setOrderStatus] = useState({});

  const handleStatusChange = (orderId) => {
    setOrderStatus((prevStatus) => {
      const prevOrderStatus = prevStatus[orderId] || "pending";
      let newOrderStatus;

      switch (prevOrderStatus) {
        case "completed":
          newOrderStatus = "pending";
          break;
        case "pending":
          newOrderStatus = "failed";
          break;
        case "failed":
          newOrderStatus = "completed";
          break;
        default:
          newOrderStatus = "pending";
      }

      return { ...prevStatus, [orderId]: newOrderStatus };
    });
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
            <th className="order-last-column"></th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) &&
            orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <button className="order-view">View</button>
                </td>
                <td className="order-data">{order.id}</td>
                <td className="order-data">{order.user}</td>
                <td className="order-data">{order.payment}</td>
                <td className="order-data">{new Date(order.date).toLocaleString()}</td>
                <td className="order-data">{order.total}</td>
                <td>
                  <button
                    className={`order-status ${orderStatus[order.id] || "pending"}`}
                    onClick={() => handleStatusChange(order.id)}
                  >
                    {(orderStatus[order.id] || "pending").charAt(0).toUpperCase() +
                      (orderStatus[order.id] || "pending").slice(1)}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
