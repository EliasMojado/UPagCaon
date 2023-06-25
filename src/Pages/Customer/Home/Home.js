import React, { useState, useEffect } from 'react';
import ProductContainer from '../ItemContainer/ProductContainer';
import ProductPage from '../Product/ProductPage';
import {apiUrl} from '../../../config'

function Home() {
  const [authenticated, setAuthenticated] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      console.log('Stored User Data:', userData);
      if (userData.type === 'customer') {
        setAuthenticated(true);
      } else {
        window.location.href = '/';
      }
    } else {
      window.location.href = '/';
    }

    fetch(apiUrl + '/item/getProducts/' + 'all')
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
          setProducts(mappedProducts);
          console.log('Products:', mappedProducts);
        }
      })
      .catch(error => {
        console.error('Error retrieving items.', error);
      });
  }, []);

  if (!authenticated) {
    return null;
  }

  return <ProductPage title="HOME" products={products} />;
}

export default Home;
