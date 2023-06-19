import React from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Profits/Profits.css';
import ProfitsList from './ProfitsList';
import SubtotalContainers from './SubtotalContainers';

function Profits() {
    const profits = [
        { id: 1271672482, payment: 12345678, total: 45.00 },
        { id: 2372837232, payment: 12345678, total: 99.00 },
        { id: 3323436563, payment: 12345678, total: 25 },
        { id: 4696856604, payment: 12345678, total: 100 },
        { id: 5583983975, payment: 12345678, total: 89 },
        { id: 6454954586, payment: 12345678, total: 55 },
        { id: 7584549557, payment: 12345678, total: 100 },
        { id: 1271672482, payment: 12345678, total: 45.00 },
        { id: 2372837232, payment: 12345678, total: 99.00 },
        { id: 3323436563, payment: 12345678, total: 25 },
        { id: 4696856604, payment: 12345678, total: 100 },
        { id: 5583983975, payment: 12345678, total: 89 },
        { id: 6454954586, payment: 12345678, total: 55 },
        { id: 7584549557, payment: 12345678, total: 100 },
      ];

    return (
        <div className="profits-page">
            <header className="profits-header">
                <Sidebar/>
                <div className="profitpageheader">
                    <span className="profit">TOTAL PROFIT</span>
                </div>
                <SearchBar/>
            </header>
            <ProfitsList profits={profits}/>
            <SubtotalContainers/>
        </div>
    )
}

export default Profits;