import React, { useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Snacks/Snacks.css';
import SnacksList from './SnacksList';
import AddSnackModal from './AddSnackModal';
import withAdminAuthentication from "../requireAdminAuthentication";

function Snacks() {
    const snacks = [
        { id: 1271672482, type: 'Snack', name: 'Fudgee Bar', description: 'makabusog', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 2372837232, type: 'Snack', name: 'Piattos', description: 'makabusog', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 3323436563, type: 'Snack', name: 'Cheese Ring', description: 'makabusog', price: 35, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 4696856604, type: 'Snack', name: 'Cupcake', description: 'makabusog', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 5583983975, type: 'Snack', name: 'Piyaya', description: 'makabusog', price: 25, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 6454954586, type: 'Snack', name: 'Mamon', description: 'makabusog', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 7584549557, type: 'Snack', name: 'Puto Cheese', description: 'makabusog', price: 35, quantity: 20, expiry: '06-18-2023', image: 'img' },
      ];

      const [showAddSnackModal, setShowAddSnackModal] = useState(false);
      const Toggle = () => setShowAddSnackModal(!showAddSnackModal);
      const closeAddSnackModal = () => setShowAddSnackModal(false);
  
    return (
        <div className="snacks-page">
            <header className="snacks-header">
                <Sidebar/>
                <div className="spageheader">
                    <span className="s">SNACKS</span>
                </div>
                <button className="add-snack" onClick={() => Toggle()}>
                    Add Snack
                </button>
                <AddSnackModal
                show={showAddSnackModal}
                close={closeAddSnackModal}
                />
                <SearchBar/>
            </header>

            <SnacksList snacks={snacks}/>

        </div>
    )
}

export default withAdminAuthentication(Snacks);