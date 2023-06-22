import React, { useState, useEffect }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Others/Others.css';
import OthersList from './OthersList';
import AddOtherModal from './AddOtherModal';
import { getItem } from '../Item/Items';
import withAdminAuthentication from "../requireAdminAuthentication";

function Others() {
      const [showAddOtherModal, setShowAddOtherModal] = useState(false);
      const [others, setOthers] = useState([]);
      const Toggle = () => setShowAddOtherModal(!showAddOtherModal);
      const closeAddOtherModal = () => setShowAddOtherModal(false);
  
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getItem('other');
            setOthers(data); // Update the state with retrieved items
          } catch (error) {
            console.error('Error:', error);
            // Handle the error condition
          }
        };

        fetchData();
    }, []);

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

export default withAdminAuthentication(Others);