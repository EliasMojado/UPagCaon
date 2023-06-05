import React, { useState } from 'react';
import './EmployeeList.css';
import DeleteEmployeeModal from './DeleteEmployeeModal';

const EmployeeList = ({ employees }) => {
    const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({});

    const Toggle = (employee) => {
        console.log(employee);
        setShowDeleteEmployeeModal(!showDeleteEmployeeModal);
        setSelectedEmployee(employee);
    }
       
    const closeDeleteEmployeeModal = () => setShowDeleteEmployeeModal(false);

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
                    <td> 
                        <button className='delete' onClick={() => Toggle(employee)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
     </table>

    <DeleteEmployeeModal
        show={showDeleteEmployeeModal}
        close={closeDeleteEmployeeModal}
        employee={selectedEmployee}
    />
    </div>
  );
};

export default EmployeeList;
