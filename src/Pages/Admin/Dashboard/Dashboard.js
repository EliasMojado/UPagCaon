// import React {useState} from react;
import SearchBar from './SearchBar';
import '../Dashboard/Dashboard.css';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className="dashboard">
      <header className='header-container'> 
        <span className='dash'>DASHBOARD</span>
            <SearchBar/>
            <Sidebar/>
      </header>
    </div>
  );
}

export default Dashboard;
