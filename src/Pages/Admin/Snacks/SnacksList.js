import React, { useState } from "react";
import './Snacks.css';
import DeleteEmployeeModal from "../Employee/DeleteEmployeeModal";

const SnacksList = ({ snacks }) => {
  const [selectedSnack, setSelectedSnack] = useState({});
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);

  const ToggleD = (snack) => {
    setShowDeleteEmployeeModal(true);
    setSelectedSnack(snack);
  };

  const closeDeleteModal = () => {
    setShowDeleteEmployeeModal(false);
    setSelectedSnack({});
  };

    return ( 
        <div className="snacks-list">
            <table>
                <thead>
                    <tr>
                        <th className="sfirst-column"></th>
                        <th>Product ID</th>
                        <th>Product Name</th>    
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Expiry Date</th>
                        <th>Image</th>
                        <th className="slast-column"></th>
                    </tr>
                </thead>
                <tbody>
                    {snacks.map((snack) => (
                        <tr key={snack.id}>
                        <td>
                            <button className="snack-edit">
                            Edit
                            </button>
                        </td>
                        <td className="snack-data">
                            {snack.id}
                        </td>
                        <td className="snack-data">
                            {snack.name}
                        </td>
                        <td className="snack-data">
                            {snack.description}
                        </td>
                        <td className="snack-data">
                            {snack.price}
                        </td>
                        <td className="snack-data">
                            {snack.quantity}
                        </td>
                        <td className="snack-data">
                            {snack.expiry}
                        </td>
                        <td className="snack-data">
                            {snack.image}
                        </td>
                        <td>
                            <button className="snack-delete" onClick={() => ToggleD(snack)}>
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
                snack={selectedSnack}
            />

        </div>
    );
};

export default SnacksList;