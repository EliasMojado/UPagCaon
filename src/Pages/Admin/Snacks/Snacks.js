import React, { useEffect, useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Snacks/Snacks.css';
import SnacksList from './SnacksList';
import AddSnackModal from './AddSnackModal';
import withAdminAuthentication from "../requireAdminAuthentication";
import { getItem } from '../Item/Items';
import Drinks from '../Drinks/Drinks';

function Snacks() {
    const [showAddSnackModal, setShowAddSnackModal] = useState(false);
    const Toggle = () => setShowAddSnackModal(!showAddSnackModal);
    const closeAddSnackModal = () => setShowAddSnackModal(false);
    
    const [snacks, setSnacks] = useState([]);
    const [filteredSnacks, setFilteredSnacks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItem('snack');
                setSnacks(data);
                setFilteredSnacks(data);
            }catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (filteredItems) => {
        setFilteredSnacks(filteredItems);
    }
    
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
                <SearchBar
                    items={snacks}
                    setFilteredItems={handleSearch}
                    itemType="items"
                />
            </header>

            <SnacksList snacks={filteredSnacks}/>

        </div>
    )
}

export default withAdminAuthentication(Snacks);