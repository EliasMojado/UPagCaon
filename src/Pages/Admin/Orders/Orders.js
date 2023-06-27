import React, { useEffect, useState } from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Orders/Orders.css';
import OrdersList from './OrdersList';
import withAdminAuthentication from "../requireAdminAuthentication";
import { getOrders } from './OrderFunction';
import toast from 'react-hot-toast';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  // const fetchOrders = async () => {
  //   try {
  //     const orders = await getOrders();
  //     setOrders(orders);
  //     setFilteredOrders(orders)
  //   } catch (error) {
  //     console.error('Error retrieving orders:', error);
  //     // Handle the error case appropriately
  //   }
  // };

  useEffect(() =>{
    const fetchOrders = async () => {
        try {
            const orders = await getOrders();
            setOrders(orders);
            setFilteredOrders(orders);
            console.log(orders);
        }catch (error){
          console.error('Error retrieving orders:', error);
          toast.error('Error retrieving orders.', {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
            duration: 3000,
        });
        }
    };

    fetchOrders();
    }, []);

    const handleSearch = (filteredItems) => {
        setFilteredOrders(filteredItems);
    }

  return (
    <div className="orders-page">
      <header className="orders-header">
        <Sidebar />
        <div className="orderpageheader">
          <span className="order">ORDERS IN QUEUE</span>
        </div>
        <SearchBar 
          items={orders}
          setFilteredItems={handleSearch}
          itemType="orders"
        />
      </header>
      <OrdersList orders={filteredOrders} />
    </div>
  );
}

export default withAdminAuthentication(Orders);
