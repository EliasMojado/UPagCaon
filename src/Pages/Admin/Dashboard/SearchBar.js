import React, { useState } from 'react';
import '../Dashboard/Dashboard.css';

const SearchBar = ({ items, setFilteredItems, itemType}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filterItems(e.target.value);
  };

  const filterItems = (searchValue) => {
    let filteredItems;
    if (itemType === "employees") {
      filteredItems = items.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.contact_number.toString().includes(searchValue.toLowerCase())
        );
      });
    } else if (itemType === "items") {
      filteredItems = items.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.description.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.price.toString().includes(searchValue.toLowerCase()) ||
          item.quantity.toString().includes(searchValue.toLowerCase()) ||
          item.expiry_date.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <input
        className='search'
        type='search'
        placeholder='Search'
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
