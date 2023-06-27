import React from "react";
import Sidebar from "../Home/Sidebar";
import SearchBar from "../Home/SearchBar";
import './Cart.css';
import cancel from '../../../Assets/Cart/cancel.svg'; 
import out from '../../../Assets/Cart/out.svg';
import { useState, useEffect } from "react";
import { getUserOrders } from "./CartFunction";
import { toast } from "react-hot-toast";
import TrackList from "./TrackList";

function Track() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  useEffect(() =>{
    const userId = JSON.parse(localStorage.getItem("userId"));
    const fetchOrders = async () => {
        try {
            const orders = await getUserOrders(userId);
            setOrders(orders);
            setFilteredOrders(orders);
            console.log(orders);
        }catch (error){
          console.error('Error retrieving orders:', error);
        }
    };

    fetchOrders();
    }, []);

    const handleSearch = (filteredItems) => {
        setFilteredOrders(filteredItems);
    }
  return (
    <div className="cart-page">
      <header className="header-container">
        <span className="cart-header">TRACK ORDER</span>
        <Sidebar />
      </header>
      <TrackList orders={filteredOrders} />
    </div>
  )
}

export default Track;
