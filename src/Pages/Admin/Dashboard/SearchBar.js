import React, { useState } from 'react';
import '../Dashboard/Dashboard.css';

const SearchBar = ({ items, setFilteredItems }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filterItems(e.target.value);
  };

  const filterItems = (searchValue) => {
    const filteredItems = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.contact_number.toString().includes(searchValue.toLowerCase())
      );
    });
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
