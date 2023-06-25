import SearchBar from '../../Customer/Home/SearchBar';
import React, { useState, useEffect } from 'react';
import ProductContainer from '../ItemContainer/ProductContainer';
import Sidebar from '../../Customer/Home/Sidebar';
import humba from '../../../Assets/Viands/humba.svg';
import lumpia from '../../../Assets/Viands/lumpia.svg';
import chicken from '../../../Assets/Viands/chicken.svg';
import Rating from '../ItemContainer/Rating';
import ProductPage from '../Product/ProductPage';
import { apiUrl } from '../../../config';


function Viands() {
  const [authenticated, setAuthenticated] = useState(false);
  const [viands, setViands] = useState([]);

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

    fetch(apiUrl + '/item/getProducts/' + 'viand')
      .then(response => response.json())
      .then(data => {
        if (data.items) {
          // Map the response data to the desired format
          const mappedProducts = data.items.map(item => ({
            id : item.id,
            name: item.name,
            rating: item.rating,
            price: item.price,
            imageSrc: item.image
          }));
          setViands(mappedProducts);
          console.log('Viands:', mappedProducts);
        }
      })
      .catch(error => {
        console.error('Error retrieving items.', error);
      });
  }, []);

  if(!authenticated){
    return null;
  }

  return <ProductPage title="VIANDS" products={viands} />;
}

export default Viands;
