import React, { useState, useEffect }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Viands/Viands.css';
import ViandsList from './ViandsList';
import AddViandModal from './AddViandModal';
import { getItem } from '../Item/Items';
import withAdminAuthentication from "../requireAdminAuthentication";

function Viands() {
      const [showAddViandModal, setShowAddViandModal] = useState(false);
      const Toggle = () => setShowAddViandModal(!showAddViandModal);
      const closeAddViandModal = () => setShowAddViandModal(false);

      const [viands, setViands] = useState([]);
      const [filteredViands, setFilteredViands] = useState([]);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getItem('viand');
            setViands(data); 
            setFilteredViands(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleSearch = (filteredItems) => {
        setFilteredViands(filteredItems);
      };
  
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
                <SearchBar 
                  items={viands} 
                  setFilteredItems={handleSearch}
                  itemType="items"
                />
            </header>

            <ViandsList viands={filteredViands}/>

        </div>
    )
}

export default withAdminAuthentication(Viands);