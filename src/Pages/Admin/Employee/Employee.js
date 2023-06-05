import '../Employee/Employee.css';
import Sidebar from "../Dashboard/Sidebar";
import SearchBar from '../Dashboard/SearchBar';
import EmployeeList from './EmployeeList';
import { useState, useEffect } from 'react';
import { apiUrl } from '../../../config';

function Employee() {

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
                <span className='add-employee'>Add Employee</span>
            </header>
            <EmployeeList employees={employees}/>
        </div>

    )
}

export default Employee;