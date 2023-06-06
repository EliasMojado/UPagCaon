import '../Employee/Employee.css';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from '../Dashboard/SearchBar';
import EmployeeList from './EmployeeList';
import { useState, useEffect } from 'react';
import { apiUrl } from '../../../config';
import AddEmployeeModal from './AddEmployeeModal';
import withAdminAuthentication from '../requireAdminAuthentication';

function Employee() {
    const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
    const Toggle = () => setShowAddEmployeeModal(!showAddEmployeeModal);
    const closeAddEmployeeModal = () => setShowAddEmployeeModal(false);

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        // Make an API call to fetch the employee data
        fetch(apiUrl + '/admin/employee')
        .then((response) => response.json())
        .then((data) => {
            setEmployees(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <div className="employee-page">
            <header className="employee-header">
                <span className="e">EMPLOYEE</span>
                <SearchBar/>
                <Sidebar/>
                <button className='add-employee' onClick={() => Toggle()}>
                    Add Employee
                </button>
            </header>

            <EmployeeList employees={employees}/>
            <AddEmployeeModal 
                show={showAddEmployeeModal} 
                close={closeAddEmployeeModal}
            />
        </div>
    )
}

export default withAdminAuthentication(Employee);