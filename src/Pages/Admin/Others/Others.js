import React, { useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Others/Others.css';
import OthersList from './OthersList';
import AddOtherModal from './AddOtherModal';
import withAdminAuthentication from "../requireAdminAuthentication";

function Others() {
    const others = [
        { id: 1271672482, type: 'Other', name: 'Rice', description: 'di mani sud an', price: 10, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 2372837232, type: 'Other', name: 'Bluebook', description: 'goodluck', price: 6, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 3323436563, type: 'Other', name: 'Tissue', description: 'hihi', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 4696856604, type: 'Other', name: 'Lanyard', description: 'wowers', price: 100, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 5583983975, type: 'Other', name: 'Paper', description: 'hatdog', price: 30, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 6454954586, type: 'Other', name: 'Ballpen', description: 'pero way ball', price: 20, quantity: 20, expiry: '06-18-2023', image: 'img' },
        { id: 7584549557, type: 'Other', name: 'Ice', description: 'di mani beverage di ba', price: 5, quantity: 20, expiry: '06-18-2023', image: 'img' },
      ];

      const [showAddOtherModal, setShowAddOtherModal] = useState(false);
      const Toggle = () => setShowAddOtherModal(!showAddOtherModal);
      const closeAddOtherModal = () => setShowAddOtherModal(false);
  
    return (
        <div className="others-page">
            <header className="others-header">
                <Sidebar/>
                <div className="opageheader">
                    <span className="o">OTHERS</span>
                </div>
                <button className="add-other" onClick={() => Toggle()}>
                    Add Other
                </button>
                <AddOtherModal
                show={showAddOtherModal}
                close={closeAddOtherModal}
                />
                <SearchBar/>
            </header>

            <OthersList others={others}/>

        </div>
    )
}

export default Others;