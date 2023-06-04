// import React {useState} from react;
import { useEffect } from 'react';
import { useState } from 'react';

import SearchBar from './SearchBar';
import '../Dashboard/Dashboard.css';
import Sidebar from './Sidebar';
import OrderList from './OrderList';
import employee from '../../../Assets/NavIcons/employee.svg';
import wallet from '../../../Assets/NavIcons/wallet.svg';
import cart from '../../../Assets/NavIcons/cart.svg';
import viands from '../../../Assets/NavIcons/viand.svg';
import drinks from '../../../Assets/NavIcons/drink.svg';
import snacks from '../../../Assets/NavIcons/snack.svg';
import schoolsupply from '../../../Assets/NavIcons/schoolsupply.svg';

function Dashboard() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log('Stored User Data:', userData);
      if(userData.type === 'admin'){
        setAuthenticated(true);
      }else{
        window.location.href = '/admin';
      }
      // Perform any necessary actions with the user data
    }else{
      window.location.href = '/admin';
    }
  }, []);

  const orders = [
    { id: 1, name: 'Order #2134' },
    { id: 2, name: 'Order #2134' },
    { id: 3, name: 'Order #2134' },
    { id: 4, name: 'Order #2134' },
    { id: 5, name: 'Order #2134' },
    { id: 6, name: 'Order #2134' },
    { id: 7, name: 'Order #2134' },
  ];

  if(!authenticated){
    return null;
  }

  return (
    <div className="dashboard">
      <header className='header-container'> 
        <span className='dash'>DASHBOARD</span>
        <SearchBar/>
        <Sidebar/>
      </header>
      <div className="container-wrapper">
        <div className="container">
          <div className="box">
            <span className='box-content'>Total Employees</span>
            <div className='employee-container'>
              <img src={employee} alt='employee' className='employee'/>
              <span className='number'>105</span>
            </div>
          </div>
          <div className="box">
            <span className='box-content'>Total Profit</span>
            <div className='profit-container'>
              <img src={wallet} alt='wallet' className='wallet'/>
              <span className='number'>500</span>
            </div>
          </div>
          <div className="box">
            <span className='box-content'>Orders in Queue</span>
            <div className='cart-container'>
              <img src={cart} alt='cart' className='cart'/>
              <span className='number'>150</span>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="box2">
            <span className='box-content2'>Viands</span>
            <div className='viands-container'>
              <img src={viands} alt='viands' className='viands'/>
            </div>
          </div>
          <div className="box2">
            <span className='box-content2'>Beverages</span>
            <div className='drinks-container'>
              <img src={drinks} alt='drinks' className='drinks'/>
            </div>
          </div>
          <div className="box2">
            <span className='box-content2'>Snacks</span>
            <div className='snacks-container'>
              <img src={snacks} alt='snacks' className='snacks'/>
            </div>
          </div>
          <div className="box2">
            <span className='box-content2'>School Supplies</span>
            <div className='schoolsupply-container'>
              <img src={schoolsupply} alt='schoolsupply' className='schoolsupply'/>
            </div>
          </div>
        </div>
      </div>
      <OrderList orders={orders} />
    </div>
  );
}

export default Dashboard;
