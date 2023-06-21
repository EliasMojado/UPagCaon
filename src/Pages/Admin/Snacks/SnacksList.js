import React, { useState } from "react";
import './Snacks.css';
import DeleteItemModal from "../Item/DeleteItemModal";
import EditItemModal from "../Item/EditItemModal";

const SnacksList = ({ snacks }) => {
  const [selectedSnack, setSelectedSnack] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);

  const ToggleD = (snack) => {
    setShowDeleteItemModal(true);
    setSelectedSnack(snack);
  };

  const ToggleE = (snack) => {
    setShowEditItemModal(true);
    setSelectedSnack(snack);
  }

  const closeEditModal = () => {
    setShowEditItemModal(false);
    setSelectedSnack({});
  }

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedSnack({});
  };

  const truncateId = (id) => {
    if (id.length > 10) {
        return id.slice(0, 10) + "...";
    }
    return id;
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
                            <button className="snack-edit" onClick={()=>ToggleE(snack)}>
                            Edit
                            </button>
                        </td>
                        <td className="snack-data">
                            {truncateId(snack.id)}
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
                            {new Date(snack.expiry_date).toLocaleDateString("en-US")}
                        </td>
                        <td className="snack-data">
                            <a href={snack.image} target="_blank" rel="noopener noreferrer">
                                <img src={snack.image} alt="Product Image" className="snack-image" />
                            </a>
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

            <EditItemModal
                show = {showEditItemModal}
                close = {closeEditModal}
                item = {selectedSnack}
            />

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedSnack}
            />

        </div>
    );
};

export default SnacksList;