import React, { useState, useEffect }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Others/Others.css';
import OthersList from './OthersList';
import AddOtherModal from '../Item/AddItemModal';
import { getItem } from '../Item/Items';
import withAdminAuthentication from "../requireAdminAuthentication";

function Others() {
      const [showAddOtherModal, setShowAddOtherModal] = useState(false);
      const Toggle = () => setShowAddOtherModal(!showAddOtherModal);
      const closeAddOtherModal = () => setShowAddOtherModal(false);
      
      const [others, setOthers] = useState([]);
      const [filteredOthers, setFilteredOther] = useState([]);
  
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getItem('other');
            setOthers(data); 
            setFilteredOther(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };

        fetchData();
    }, []);

    const handleSearch = (filteredItems) => {
      setFilteredOther(filteredItems);
    }

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
                  modalHeader="Add Other"
                />
                <SearchBar
                  items={others}
                  setFilteredItems={handleSearch}
                  itemType="items"
                />
            </header>

            <OthersList others={filteredOthers}/>

        </div>
    )
}

export default withAdminAuthentication(Others);