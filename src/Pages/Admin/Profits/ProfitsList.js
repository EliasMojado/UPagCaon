import React, { useState } from "react";
import "./Profits.css";

const ProfitsList = ({ profits }) => {
  
  return (
    <div className="profits-list">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Payment ID</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(profits) &&
            profits.map((profit) => (
            <tr key={profit.id}>
              <td className="profit-data">{profit.orderID}</td>
              <td className="profit-data">{profit.ID}</td>
              <td className="profit-data">{profit.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitsList;
