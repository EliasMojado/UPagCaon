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

    // const employees = [
    //     { id: 1271672482, name: 'Daughpane Reponte', email: 'dsreponte@up.edu.ph', contact: '09293139952' },
    //     { id: 2372837232, name: 'Elijah Mojado', email: 'jmojado@up.edu.ph', contact: '09162738950' },
    //     { id: 3323436563, name: 'Ellenmarie Puyot', email: 'eypuyot@up.edu.ph', contact: '09654328976' },
    //     { id: 4696856604, name: 'Pinky Marfa', email: 'pamarfa@up.edu.ph', contact: '09098798354' },
    //     { id: 5583983975, name: 'Erik Alicaya', email: 'etalicaya@up.edu.ph', contact: '09213498976' },
    //     { id: 6454954586, name: 'Eli Tan', email: 'etan@up.edu.ph', contact: '09178965478' },
    //     { id: 7584549557, name: 'Ryan Dulaca', email: 'rcdulaca@up.edu.ph', contact: '09465792748' },
    //   ];

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