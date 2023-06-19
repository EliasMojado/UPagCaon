import React, { useState } from 'react';
import './Employee.css';
import DeleteEmployeeModal from './DeleteEmployeeModal';
import EditEmployeeModal from './EditEmployeeModal';
import ViewEmployeeModal from './ViewEmployeeModal';

const EmployeeList = ({ employees }) => {
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [showViewEmployeeModal, setShowViewEmployeeModal] = useState(false);
  const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false);

  const ToggleD = (employee) => {
    setShowDeleteEmployeeModal(true);
    setSelectedEmployee(employee);
  };

  const closeDeleteModal = () => {
    setShowDeleteEmployeeModal(false);
    setSelectedEmployee({});
  };

  const ToggleE = (employee) => {
    setShowEditEmployeeModal(true);
    setSelectedEmployee(employee);
  };

  const closeEditModal = () => {
    setShowEditEmployeeModal(false);
    setSelectedEmployee({});
  };

  const ToggleV = (employee) => {
    setShowViewEmployeeModal(true);
    setSelectedEmployee(employee);
  };

  const closeViewModal = () => {
    setShowViewEmployeeModal(false);
    setSelectedEmployee({});
  };

  const truncateId = (ID) => {
    if (ID.length > 10) {
      return ID.slice(0, 10) + '...';
    }
    return ID;
  };

  return (
    <div className="employee-list">
      <table>
        <thead>
          <tr>
            <th className="first-column"></th>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th className="last-column"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                <button className="edit" onClick={() => ToggleE(employee)}>
                  Edit
                </button>
              </td>
              <td className="employee-data" onClick={() => ToggleV(employee)}>
                {truncateId(employee.ID)}
              </td>
              <td className="employee-data" onClick={() => ToggleV(employee)}>
                {employee.name}
              </td>
              <td className="employee-data" onClick={() => ToggleV(employee)}>
                {employee.email}
              </td>
              <td className="employee-data" onClick={() => ToggleV(employee)}>
                {employee.contact_number}
              </td>
              <td>
                <button className="delete" onClick={() => ToggleD(employee)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <DeleteEmployeeModal
        show={showDeleteEmployeeModal}
        close={closeDeleteModal}
        employee={selectedEmployee}
      />
      <EditEmployeeModal
        show={showEditEmployeeModal}
        close={closeEditModal}
        employee={selectedEmployee}
      />
      <ViewEmployeeModal
        show={showViewEmployeeModal}
        close={closeViewModal}
        employee={selectedEmployee}
      />
    </div>
  );
};

export default EmployeeList;
