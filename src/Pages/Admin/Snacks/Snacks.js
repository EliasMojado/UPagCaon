import React, { useEffect, useState }from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Snacks/Snacks.css';
import SnacksList from './SnacksList';
import AddSnackModal from './AddSnackModal';
import withAdminAuthentication from "../requireAdminAuthentication";
import { getItem } from '../Item/Items';

function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [showAddSnackModal, setShowAddSnackModal] = useState(false);
    const Toggle = () => setShowAddSnackModal(!showAddSnackModal);
    const closeAddSnackModal = () => setShowAddSnackModal(false);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItem('snack');
                setSnacks(data);
            }catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);
    
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