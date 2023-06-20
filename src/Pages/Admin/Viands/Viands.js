import React, { useState, useEffect }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Viands/Viands.css';
import ViandsList from './ViandsList';
import AddViandModal from './AddViandModal';
import { getItem } from '../Item/items'
import withAdminAuthentication from "../requireAdminAuthentication";

function Viands() {
      const [showAddViandModal, setShowAddViandModal] = useState(false);
      const [viands, setViands] = useState([]);
      const Toggle = () => setShowAddViandModal(!showAddViandModal);
      const closeAddViandModal = () => setShowAddViandModal(false);

      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getItem('viand');
            setViands(data); // Update the state with retrieved items
          } catch (error) {
            console.error('Error:', error);
            // Handle the error condition
          }
        };
    
        fetchData();
      }, []);
  
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

export default withAdminAuthentication(Viands);