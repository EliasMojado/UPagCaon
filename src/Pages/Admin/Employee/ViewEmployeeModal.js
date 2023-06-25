import React, { useState, useEffect } from "react";
import TextFieldComponent from "./ViewEmployeeForm";
import "../Employee/Employee.css";
import closebutton from "../../../Assets/close-button.svg";
import EditEmployeeModal from "./EditEmployeeModal";
import DeleteEmployeeModal from "./DeleteEmployeeModal";

function ViewEmployeeModal({ show, close, employee }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact_number, setContactNumber] = useState("");
  
    useEffect(() => {
      if (employee) {
        setName(employee.name);
        setEmail(employee.email);
        setContactNumber(employee.contact_number);
        setPassword(employee.password);
      }
    }, [employee]);
  
    const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState({});
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

    useEffect(() => {
        if (showEditEmployeeModal || showDeleteEmployeeModal) {
          close();
        }
    }, [showEditEmployeeModal, showDeleteEmployeeModal, close]);

    return (
      <>
        {show ? (
          <div className="view-employee-container">
            <div
              className="view-employee-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <header>
                <h2 className="view-employee-modal_header-title">View Employee</h2>
                <button className="exit" onClick={close}>
                  <img src={closebutton} alt="exit" />
                </button>
              </header>
              <main className="modal-content">
                <div>
                  <TextFieldComponent
                    initialName={name}
                    initialEmail={email}
                    initialPassword={password}
                    initialContact={contact_number}
                  />
                </div>
              </main>
              <footer className="modal_footer">
                <div className="button-row">
                  <button className="view-delete" onClick={() => ToggleD(employee)}>
                    Delete
                  </button>
                  <button className="view-edit" onClick={() => ToggleE(employee)}>
                    Edit
                  </button>
                </div>
              </footer>
            </div>
          </div>
        ) : null}
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
      </>
    );
}
  
export default ViewEmployeeModal;  