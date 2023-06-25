import React, { useEffect } from 'react';
import ProductContainer from '../ItemContainer/ProductContainer';
import Sidebar from '../Home/Sidebar';
import SearchBar from '../Home/SearchBar';
import Rating from '../ItemContainer/Rating';
import './ProductPage.css';

function ProductPage({ title, products }) {
  useEffect(() => {
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (!storedUser || JSON.parse(storedUser).type !== 'customer') {
      window.location.href = '/';
    }
  }, []);

  return (
    <div className="dashboard">
      <header className="header-container">
        <span className="dash">{title.toUpperCase()}</span>
        <SearchBar />
        <Sidebar />
      </header>
      <div className="product-containers">
        {products.map((product, index) => (
          <ProductContainer
            key={index}
            imageSrc={product.imageSrc}
            title={product.title}
            rating={Rating(product.rating)}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
