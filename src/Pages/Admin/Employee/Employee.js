import React, { useState, useEffect } from 'react';
import '../Employee/Employee.css';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from '../Dashboard/SearchBar';
import EmployeeList from './EmployeeList';
import { apiUrl } from '../../../config';
import AddEmployeeModal from './AddEmployeeModal';
import withAdminAuthentication from '../requireAdminAuthentication';

function Employee() {
    const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
    const Toggle = () => setShowAddEmployeeModal(!showAddEmployeeModal);
    const closeAddEmployeeModal = () => setShowAddEmployeeModal(false);

    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    useEffect(() => {
        // Make an API call to fetch the employee data
        fetch(apiUrl + '/admin/employee')
        .then((response) => response.json())
        .then((data) => {
            setEmployees(data);
            setFilteredEmployees(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    const handleSearch = (filteredItems) => {
        setFilteredEmployees(filteredItems);
    };

    return (
        <div className="employee-page">
                            
            <header className="employee-header">
            <Sidebar/>
                <div className = "page-header"> 
                <span className="e">EMPLOYEE</span>
                </div>
                
                <button className='add-employee' onClick={() => Toggle()}>
                    Add Employee
                </button>
                    <AddEmployeeModal
                    show={showAddEmployeeModal}
                    close={closeAddEmployeeModal}
                    />
                    <SearchBar 
                        items={employees} 
                        setFilteredItems={handleSearch} 
                        itemType="employees"
                    />
            </header>

            <EmployeeList employees={filteredEmployees} />
            
        </div>
    )
}

export default withAdminAuthentication(Employee);