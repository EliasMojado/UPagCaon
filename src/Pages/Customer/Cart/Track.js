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
import GCashQR from "./GCashQR";

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
    
    const [showGCashQR, setShowGCashQR] = useState(false);

    const ToggleG = () => {
      setShowGCashQR(true);
    };
    
    const closeGCashQR = () => {
      setShowGCashQR(false);
    };

  return (
    <div className="cart-page">
      <header className="header-container">
        <span className="cart-header">TRACK ORDER</span>
        <button className="gcash-button" onClick={ToggleG}/>
        <Sidebar />
      </header>
      <TrackList orders={filteredOrders} />
      <GCashQR
        show={showGCashQR}
        close={closeGCashQR}
      />
    </div>
  )
}

export default Track;
