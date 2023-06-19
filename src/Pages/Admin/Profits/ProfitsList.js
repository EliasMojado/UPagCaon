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
          {profits.map((profit) => (
            <tr key={profit.id}>
              <td className="profit-data">{profit.id}</td>
              <td className="profit-data">{profit.payment}</td>
              <td className="profit-data">{profit.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitsList;
