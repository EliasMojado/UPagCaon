import React, { useEffect, useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Drinks/Drinks.css';
import DrinksList from './DrinksList';
import AddDrinkModal from '../Item/AddItemModal';
import withAdminAuthentication from "../requireAdminAuthentication";
import { getItem } from '../Item/Items';

function Drinks() {
    const [showAddDrinkModal, setShowAddDrinkModal] = useState(false);
    const Toggle = () => setShowAddDrinkModal(!showAddDrinkModal);
    const closeAddDrinkModal = () => setShowAddDrinkModal(false);

    const [drinks, setDrinks] = useState([]);
    const [filteredDrinks, setFilteredDrinks] = useState([]);

    useEffect(() =>{
    const fetchData = async () => {
        try {
            const data = await getItem('drink');
            setDrinks(data);
            setFilteredDrinks(data);
        }catch (error){
            console.error('Error:', error);
        }
    };

    fetchData();
    }, []);

    const handleSearch = (filteredItems) => {
        setFilteredDrinks(filteredItems);
    }
  
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
                modalHeader="Add Drink"
                />
                <SearchBar
                    items={drinks}
                    setFilteredItems={handleSearch}
                    itemType="items"
                />
            </header>

            <DrinksList drinks={filteredDrinks}/>

        </div>
    )
}

export default withAdminAuthentication(Drinks);