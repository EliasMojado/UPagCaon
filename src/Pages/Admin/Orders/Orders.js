import React, { useEffect, useState } from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Orders/Orders.css';
import OrdersList from './OrdersList';
import withAdminAuthentication from "../requireAdminAuthentication";
import { getOrders } from './OrderFunction';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const orders = await getOrders();
      setOrders(orders);
    } catch (error) {
      console.error('Error retrieving orders:', error);
      // Handle the error case appropriately
    }
  };

  return (
    <div className="orders-page">
      <header className="orders-header">
        <Sidebar />
        <div className="orderpageheader">
          <span className="order">ORDERS IN QUEUE</span>
        </div>
        <SearchBar />
      </header>
      <OrdersList orders={orders} />
    </div>
  );
}

export default withAdminAuthentication(Orders);
