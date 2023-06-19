import SearchBar from '../../Customer/Home/SearchBar';
import React, { useState, useEffect } from 'react';
import ProductContainer from './ProductContainer';
import Sidebar from '../../Customer/Home/Sidebar';
import star from '../../../Assets/Viands/star.svg';
import humba from '../../../Assets/Viands/humba.svg';
import lumpia from '../../../Assets/Viands/lumpia.svg';
import chicken from '../../../Assets/Viands/chicken.svg';
import '../Home/Home.css';

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

  const rate3 = Array(3).fill(star);
  const rate4 = Array(4).fill(star);
  const rate5 = Array(5).fill(star);

  return (
    <div className="dashboard">
      <header className='header-container'> 
        <span className='dash'>HOME</span>
        <SearchBar/>
        <Sidebar/>
      </header>
      <div className='product-containers'>
        <ProductContainer
          imageSrc= {humba}
          title="Humba"
          rating= {rate3}
          price="Php30.00"
        />
        <ProductContainer
          imageSrc= {lumpia}
          title="Lumpia"
          rating= {rate4}
          price="Php20.00"
        />
        <ProductContainer
          imageSrc= {chicken}
          title="Chicken"
          rating= {rate5}
          price="Php30.00"
        />
    </div>
    </div>
  );
}

export default Home;
