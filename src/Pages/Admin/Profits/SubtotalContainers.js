import React from "react";
import '../Profits/Profits.css';

const SubtotalContainers = () => {
    return (
        <div className='subtotal-containers'>
        <div className='daily-subtotal'>
            <span className='daily-subtotal-content'>DAILY SUBTOTAL</span>
            <div className='daily-subtotal-container'>
                <span className='daily-subtotal-text'>567.50</span>
            </div>
        </div>
        <div className='monthly-subtotal'>
            <span className='monthly-subtotal-content'>MONTHLY SUBTOTAL</span>
            <div className='monthly-subtotal-container'>
                <span className='monthly-subtotal-text'>6759.00</span>
            </div>
        </div>
    </div>
    )
}

export default SubtotalContainers;