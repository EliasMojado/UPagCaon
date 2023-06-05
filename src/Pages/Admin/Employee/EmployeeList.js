import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list"> 
     <table> 
        <thead>
            <tr>
                <th className='first-column'></th>
                <th>Employee ID</th>
                <th>Employee Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th className='last-column'></th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee) => (
                <tr key={employee.id}>
                    <td> <span className='edit'>Edit</span></td>
                    <td>{employee.ID}</td>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.contact_number}</td>
                    <td> <span className='delete'>Delete</span></td>
                </tr>
            ))}
        </tbody>
     </table>
    </div>
  );
};

export default EmployeeList;
