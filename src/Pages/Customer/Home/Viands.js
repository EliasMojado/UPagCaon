import SearchBar from '../../Customer/Home/SearchBar';
import React, { useState, useEffect } from 'react';
import ProductContainer from '../ItemContainer/ProductContainer';
import Sidebar from '../../Customer/Home/Sidebar';
import humba from '../../../Assets/Viands/humba.svg';
import lumpia from '../../../Assets/Viands/lumpia.svg';
import chicken from '../../../Assets/Viands/chicken.svg';
import Rating from '../ItemContainer/Rating';
import ProductPage from '../Product/ProductPage';


function Viands() {
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

  const products = [
    {
      imageSrc: humba,
      title: 'Humba',
      rating: 3,
      price: 'Php30.00',
    },
    {
      imageSrc: lumpia,
      title: 'Lumpia',
      rating: 4,
      price: 'Php20.00',
    },
    {
      imageSrc: chicken,
      title: 'Chicken',
      rating: 5,
      price: 'Php30.00',
    },
  ];

  return <ProductPage title="VIANDS" products={products} />;
}

export default Viands;
