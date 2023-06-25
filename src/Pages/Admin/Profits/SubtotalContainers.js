import React from "react";
import '../Profits/Profits.css';
import { getEarned } from './ProfitFunction';

const SubtotalContainers = () => {
  const [earned, setEarned] = React.useState('');

  React.useEffect(() => {
    fetchEarned();
  }, []);

  const fetchEarned = async () => {
    try {
      const response = await getEarned();
      const totalEarned = response.total || '0';
      setEarned(totalEarned);
    } catch (error) {
      console.error('Error retrieving earned:', error);
    }
  };

  return (
    <div className='subtotal-containers'>
      <div className='daily-subtotal'>
        <span className='daily-subtotal-content'>DAILY SUBTOTAL</span>
        <div className='daily-subtotal-container'>
          <span className='daily-subtotal-text'>{earned}</span>
        </div>
      </div>
      <div className='monthly-subtotal'>
        <span className='monthly-subtotal-content'>MONTHLY SUBTOTAL</span>
        <div className='monthly-subtotal-container'>
          <span className='monthly-subtotal-text'>6759.00</span>
        </div>
      </div>
    </div>
  );
}

export default SubtotalContainers;
