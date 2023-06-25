import React, { useState } from "react";
import './Others.css';
import DeleteItemModal from "../Item/DeleteItemModal";
import EditItemModal from "../Item/EditItemModal";
import ViewItemModal from "../Item/ViewItemModal";

const OthersList = ({ others }) => {
  const [selectedOther, setSelectedOther] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [showViewItemModal, setShowViewItemModal] = useState(false);

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

  const ToggleV = (other) => {
    setShowViewItemModal(true);
    setSelectedOther(other);
  };

  const closeViewModal = () => {
    setShowViewItemModal(false);
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
                        <td className="view-data" onClick={() => ToggleV(other)}>
                            {truncateId(other.id)}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(other)}>
                            {other.name}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(other)}>
                            {other.description}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(other)}>
                            {other.price}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(other)}>
                            {other.quantity}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(other)}>
                            {new Date(other.expiry_date).toLocaleDateString("en-US")}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(other)}>
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
                modalHeader="Item"
            />

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedOther}
                modalHeader="Item"
            />

            <ViewItemModal
                show={showViewItemModal}
                close={closeViewModal}
                item={selectedOther}
                modalHeader="Item"
            />

        </div>
    );
};

export default OthersList;