import React, {useState} from 'react';
import '../Home/Home.css';
const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const items = [

  { name: "Fried Chicken", type: "viand" },
  { name: "Lumpia", type: "viand" },
  { name: "Humba", type: "viand" },
  { name: "Mango Tapioca", type: "drink" },
  { name: "Cucumber Lemonade", type: "drink" },
  { name: "Coffee Jelly", type: "drink" },
  { name: "Bluebook", type: "school supply" },
  { name: "Ballpen", type: "school supply" },
  { name: "Yellow Paper", type: "school supply" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    items.filter((item) => {
    return item.name.match(searchInput);
});
}

return <div>

<input
   className='search'
   type="search"
   placeholder="Search"
   onChange={handleChange}  
   value={searchInput} />
</div>

};

export default SearchBar;