import React, { useEffect, useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Drinks/Drinks.css';
import DrinksList from './DrinksList';
import AddDrinkModal from './AddDrinkModal';
import withAdminAuthentication from "../requireAdminAuthentication";
import { getItem } from '../Item/items';

function Drinks() {
    const [showAddDrinkModal, setShowAddDrinkModal] = useState(false);
    const [drinks, setDrinks] = useState([]);
    const Toggle = () => setShowAddDrinkModal(!showAddDrinkModal);
    const closeAddDrinkModal = () => setShowAddDrinkModal(false);

    useEffect(() =>{
    const fetchData = async () => {
        try {
            const data = await getItem('drink');
            setDrinks(data);
        }catch (error){
            console.error('Error:', error);
        }
    };

    fetchData();
    }, []);
  
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