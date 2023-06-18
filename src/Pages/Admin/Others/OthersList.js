import React, { useState } from "react";
import './Others.css';
import DeleteEmployeeModal from "../Employee/DeleteEmployeeModal";

const OthersList = ({ others }) => {
  const [selectedOther, setSelectedOther] = useState({});
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);

  const ToggleD = (other) => {
    setShowDeleteEmployeeModal(true);
    setSelectedOther(other);
  };

  const closeDeleteModal = () => {
    setShowDeleteEmployeeModal(false);
    setSelectedOther({});
  };

    return ( 
        <div className="others-list">
            <table>
                <thead>
                    <tr>
                        <th className="ofirst-column"></th>
                        <th>Product ID</th>
                        <th>Product Name</th>    
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Expiry Date</th>
                        <th>Image</th>
                        <th className="olast-column"></th>
                    </tr>
                </thead>
                <tbody>
                    {others.map((other) => (
                        <tr key={other.id}>
                        <td>
                            <button className="other-edit">
                            Edit
                            </button>
                        </td>
                        <td className="other-data">
                            {other.id}
                        </td>
                        <td className="other-data">
                            {other.name}
                        </td>
                        <td className="other-data">
                            {other.description}
                        </td>
                        <td className="other-data">
                            {other.price}
                        </td>
                        <td className="other-data">
                            {other.quantity}
                        </td>
                        <td className="other-data">
                            {other.expiry}
                        </td>
                        <td className="other-data">
                            {other.image}
                        </td>
                        <td>
                            <button className="other-delete" onClick={() => ToggleD(other)}>
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
                other={selectedOther}
            />

        </div>
    );
};

export default OthersList;