import React, {useEffect} from 'react';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from "../Dashboard/SearchBar";
import '../Profits/Profits.css';
import ProfitsList from './ProfitsList';
import SubtotalContainers from './SubtotalContainers';
import withAdminAuthentication from '../requireAdminAuthentication';
import { getPayments, getEarned, updatePayments } from './ProfitFunction';

function Profits() {
    const [profits, setProfits] = React.useState([]);

    useEffect(() => {
        fetchProfits();
    }, []);

    const fetchProfits = async () => {
        try {
            const profits = await getPayments();
            setProfits(profits);
        } catch (error) {
            console.error('Error retrieving profits:', error);
        }
    };

    return (
        <div className="profits-page">
            <header className="profits-header">
                <Sidebar/>
                <div className="profitpageheader">
                    <span className="profit">TOTAL EARNINGS</span>
                </div>
                <SearchBar/>
            </header>
            <ProfitsList profits={profits}/>
            <SubtotalContainers/>
        </div>
    )
}

export default withAdminAuthentication(Profits);