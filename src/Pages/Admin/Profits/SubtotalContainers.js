import React, { useEffect, useState } from "react";
import '../Profits/Profits.css';
import { getTodayEarnings, getMonthlyEarnings } from './ProfitFunction';

const SubtotalContainers = () => {
  const [dailyEarnings, setDailyEarnings] = useState({ cash: '0', gcash: '0' });
  const [monthlyEarnings, setMonthlyEarnings] = useState({ cash: '0', gcash: '0' });

  useEffect(() => {
    fetchEarned();
  }, []);

  const fetchEarned = async () => {
    try {
      const daily = await getTodayEarnings();
      const monthly = await getMonthlyEarnings();
      const totalDailyCashEarned = daily.otcTotal || '0';
      const totalDailyGcashEarned = daily.gcashTotal || '0';
      const totalMonthlyCashEarned = monthly.otcTotal || '0';
      const totalMonthlyGcashEarned = monthly.gcashTotal || '0';

      setDailyEarnings({ cash: totalDailyCashEarned, gcash: totalDailyGcashEarned });
      setMonthlyEarnings({ cash: totalMonthlyCashEarned, gcash: totalMonthlyGcashEarned });
    } catch (error) {
      console.error('Error retrieving earnings:', error);
    }
  };

  return (
    <div className='subtotal-containers'>
      <div className='daily-subtotal'>
        <span className='daily-subtotal-content'>DAILY SUBTOTAL</span>
        <div className='daily-subtotal-container'>
          <div className='mt-2'></div>
          <span className='daily-subtotal-title'>Cash</span>
          <span className='daily-subtotal-text'>{dailyEarnings.cash}</span>
          <span className='margin'> </span>
          <span className='daily-subtotal-gcash'>GCash</span>
          <span className='daily-subtotal-text'>{dailyEarnings.gcash}</span>
        </div>
      </div>

      <div className='monthly-subtotal'>
        <span className='monthly-subtotal-content'>MONTHLY SUBTOTAL</span>
        <div className='daily-subtotal-container'>
          <span className='daily-subtotal-title'>Cash</span>
          <span className='daily-subtotal-text'>{monthlyEarnings.cash}</span>
          <span className='margin'> </span>
          <span className='daily-subtotal-gcash'>GCash</span>
          <span className='daily-subtotal-text'>{monthlyEarnings.gcash}</span>
        </div>
      </div>
    </div>
  );
}

export default SubtotalContainers;
