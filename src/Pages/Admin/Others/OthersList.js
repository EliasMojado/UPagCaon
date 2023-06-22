import React, { useState } from "react";
import './Others.css';
import DeleteItemModal from "../Item/DeleteItemModal";
import EditItemModal from "../Item/EditItemModal";

const OthersList = ({ others }) => {
  const [selectedOther, setSelectedOther] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);

  const ToggleD = (other) => {
    setShowDeleteItemModal(true);
    setSelectedOther(other);
  };

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedOther({});
  };

  const ToggleE = (other) => {
    setShowEditItemModal(true);
    setSelectedOther(other);
  };

  const closeEditModal = () => {
    setShowEditItemModal(false);
    setSelectedOther({});
  };

  const truncateId = (id) => {
    if (id.length > 10) {
      return id.slice(0, 10) + "...";
    }
    return id;
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
                            <button className="other-edit" onClick={() => ToggleE(other)}> 
                            Edit
                            </button>
                        </td>
                        <td className="other-data">
                            {truncateId(other.id)}
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
                            {new Date(other.expiry_date).toLocaleDateString("en-US")}
                        </td>
                        <td className="other-data">
                            <a href={other.image} target="_blank" rel="noopener noreferrer">
                            <img src={other.image} alt="Product Image" className="other-image" />
                            </a>
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
            
            <EditItemModal
                show={showEditItemModal}
                close={closeEditModal}
                item={selectedOther}
                modalHeader="Edit Other"
            />

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedOther}
            />

        </div>
    );
};

export default OthersList;