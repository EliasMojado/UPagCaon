import React, { useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Drinks/Drinks.css';
import DrinksList from './DrinksList';
import AddDrinkModal from './AddDrinkModal';
import withAdminAuthentication from "../requireAdminAuthentication";

function Drinks() {
    const drinks = [
        { id: 1271672482, type: 'Drink', name: 'Coffee Jelly', description: 'mainom', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 2372837232, type: 'Drink', name: 'Mango Tapioca', description: 'mainom', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 3323436563, type: 'Drink', name: 'Coca Cola', description: 'mainom', price: 35, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 4696856604, type: 'Drink', name: 'Cucumber Lemonade', description: 'mainom', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 5583983975, type: 'Drink', name: 'Sprite', description: 'mainom', price: 25, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 6454954586, type: 'Drink', name: 'Pepsi', description: 'mainom', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 7584549557, type: 'Drink', name: 'C2', description: 'mainom', price: 35, quantity: 20, expiry: '06-18-2023', image: 'img' },
      ];

      const [showAddDrinkModal, setShowAddDrinkModal] = useState(false);
      const Toggle = () => setShowAddDrinkModal(!showAddDrinkModal);
      const closeAddDrinkModal = () => setShowAddDrinkModal(false);
  
    return (
        <div className="drinks-page">
            <header className="drinks-header">
                <Sidebar/>
                <div className="dpageheader">
                    <span className="d">DRINKS</span>
                </div>
                <button className="add-drink" onClick={() => Toggle()}>
                    Add Drink
                </button>
                <AddDrinkModal
                show={showAddDrinkModal}
                close={closeAddDrinkModal}
                />
                <SearchBar/>
            </header>

            <DrinksList drinks={drinks}/>

        </div>
    )
}

export default withAdminAuthentication(Drinks);