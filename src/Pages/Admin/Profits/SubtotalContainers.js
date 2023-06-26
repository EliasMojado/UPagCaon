import React from "react";
import '../Profits/Profits.css';
import { getEarned, getTodayEarnings, getMonthlyEarnings } from './ProfitFunction';

const SubtotalContainers = () => {
  const [dailyEarnings, setDailyEarnings] = React.useState('');
  const [monthlyEarnings, setMonthlyEarnings] = React.useState('');

  React.useEffect(() => {
    fetchEarned();
  }, []);

  const fetchEarned = async () => {
    try {
      const daily = await getTodayEarnings();
      const monthly = await getMonthlyEarnings();
      const totalDailyEarned = daily.total || '0';
      const totalMonthlyEarned = monthly.total || '0';

      setDailyEarnings(totalDailyEarned);
      setMonthlyEarnings(totalMonthlyEarned)
    } catch (error) {
      console.error('Error retrieving earned:', error);
    }
  };

  return (
    <div className='subtotal-containers'>
      <div className='daily-subtotal'>
        <span className='daily-subtotal-content'>DAILY SUBTOTAL</span>
        <div className='daily-subtotal-container'>
          <span className='daily-subtotal-text'>{dailyEarnings}</span>
        </div>
      </div>
      <div className='monthly-subtotal'>
        <span className='monthly-subtotal-content'>MONTHLY SUBTOTAL</span>
        <div className='monthly-subtotal-container'>
          <span className='monthly-subtotal-text'>{monthlyEarnings}</span>
        </div>
      </div>
    </div>
  );
}

export default SubtotalContainers;
