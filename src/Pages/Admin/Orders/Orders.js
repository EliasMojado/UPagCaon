import React from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Orders/Orders.css';
import OrdersList from './OrdersList';

function Orders() {
    const orders = [
        { id: 1271672482, user: 'Oliver', payment: 12345678, date: '06-18-2023', total: 45.00 },
        { id: 2372837232, user: 'Maybelle', payment: 12345678, date: '06-18-2023', total: 99.00 },
        { id: 3323436563, user: 'Kathryn', payment: 12345678, date: '06-18-2023', total: 25 },
        { id: 4696856604, user: 'Harry', payment: 12345678, date: '06-18-2023', total: 100 },
        { id: 5583983975, user: 'Potter', payment: 12345678, date: '06-18-2023', total: 89 },
        { id: 6454954586, user: 'Kim Namgil', payment: 12345678, date: '06-18-2023', total: 55 },
        { id: 7584549557, user: 'Ji Chang Wook', payment: 12345678, date: '06-18-2023', total: 100 },
      ];

    return (
        <div className="orders-page">
            <header className="orders-header">
                <Sidebar/>
                <div className="orderpageheader">
                    <span className="order">ORDERS IN QUEUE</span>
                </div>
                <SearchBar/>
            </header>
            <OrdersList orders={orders}/>
        </div>
    )
}

export default Orders;