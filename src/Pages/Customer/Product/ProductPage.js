import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ProductContainer from '../ItemContainer/ProductContainer';
import Sidebar from '../Home/Sidebar';
import SearchBar from '../Home/SearchBar';
import Rating from '../ItemContainer/Rating';
import './ProductPage.css';

function ProductPage({ title, products }) {
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Retrieve the stored user data from local storage
    const storedUser = localStorage.getItem('user');
    if (!storedUser || JSON.parse(storedUser).type !== 'customer') {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (filteredItems) => {
    setFilteredProducts(filteredItems);
  };

  const renderProducts = () => {
    const productRows = [];
    const columnsPerRow = 4;

    for (let i = 0; i < filteredProducts.length; i += columnsPerRow) {
      const productRow = filteredProducts.slice(i, i + columnsPerRow);
      const productColumns = productRow.map((product, index) => (
        <div key={index} className="product-column">
          <ProductContainer
            imageSrc={product.imageSrc}
            name={product.name}
            rating={Rating(parseInt(product.rating))}
            price={product.price}
            product={product}
          />
        </div>
      ));
      productRows.push(
        <div key={i} className="product-row">
          {productColumns}
        </div>
      );
    }
    return productRows;
  };

  const handleCartClick = () => {
    navigate('/cart', { replace: true });
  };

  return (
    <div className="dashboard">
      <header className="header-container">
        <span className="dash">{title.toUpperCase()}</span>
        <button className="add-order-cart" onClick={handleCartClick}>
          Cart
        </button>
        <SearchBar
          items={products}
          setFilteredItems={handleSearch}
          itemType="items"
        />
        <Sidebar
          items={products}
          setFilteredItems={handleSearch}
          itemType="items"
        />
      </header>
      <div className="product-containers">
        <div className="product-cont">{renderProducts()}</div>
      </div>
    </div>
  );
}

export default ProductPage;
