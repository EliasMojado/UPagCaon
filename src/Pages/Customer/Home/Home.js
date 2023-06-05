import React, { useState, useEffect } from 'react';
import '../Home/Home.css';

import SearchBar from '../../Customer/Home/SearchBar';
import Sidebar from '../../Customer/Home/Sidebar';
// import OrderList from './OrderList';
import employee from '../../../Assets/NavIcons/employee.svg';
import wallet from '../../../Assets/NavIcons/wallet.svg';
import cart from '../../../Assets/NavIcons/cart.svg';
import viands from '../../../Assets/NavIcons/viand.svg';
import drinks from '../../../Assets/NavIcons/drink.svg';
import snacks from '../../../Assets/NavIcons/snack.svg';
import schoolsupply from '../../../Assets/NavIcons/schoolsupply.svg';

import { apiUrl } from '../../../config';

function Home() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log('Stored User Data:', userData);
      if(userData.type === 'customer'){
        setAuthenticated(true);
      }else{
        window.location.href = '/';
      }
      // Perform any necessary actions with the user data
    }else{
      window.location.href = '/';
    }
  }, []);

  if(!authenticated){
    return null;
  }

  return (
    <div className="dashboard">
      <header className='header-container'> 
        <span className='dash'>HOME</span>
        <SearchBar/>
        <Sidebar/>
      </header>
    </div>
  );
}

export default Home;
