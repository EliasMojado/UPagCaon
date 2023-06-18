import React, { useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Viands/Viands.css';
import ViandsList from './ViandsList';
import AddViandModal from './AddViandModal';

function Viands() {
    const viands = [
        { id: 1271672482, type: 'Viand', name: 'Humba', description: 'sabaw', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 2372837232, type: 'Viand', name: 'Mongos', description: 'sabaw', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 3323436563, type: 'Viand', name: 'Fried Chicken', description: 'di sabaw', price: 35, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 4696856604, type: 'Viand', name: 'Lumpia', description: 'di sabaw', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 5583983975, type: 'Viand', name: 'Barbeque', description: 'di sabaw', price: 25, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 6454954586, type: 'Viand', name: 'Fish', description: 'di sabaw', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 7584549557, type: 'Viand', name: 'Sinigang', description: 'sabaw', price: 35, quantity: 20, expiry: '06-18-2023', image: 'img' },
      ];

      const [showAddViandModal, setShowAddViandModal] = useState(false);
      const Toggle = () => setShowAddViandModal(!showAddViandModal);
      const closeAddViandModal = () => setShowAddViandModal(false);
  
    return (
        <div className="viands-page">
            <header className="viands-header">
                <Sidebar/>
                <div className="vpageheader">
                    <span className="v">VIANDS</span>
                </div>
                <button className="add-viand" onClick={() => Toggle()}>
                    Add Viand
                </button>
                <AddViandModal
                show={showAddViandModal}
                close={closeAddViandModal}
                />
                <SearchBar/>
            </header>

            <ViandsList viands={viands}/>

        </div>
    )
}

export default Viands;