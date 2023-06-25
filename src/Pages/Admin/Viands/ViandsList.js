import React, { useState } from "react";
import "./Viands.css";
import DeleteItemModal from '../Item/DeleteItemModal';
import EditItemModal from "../Item/EditItemModal";
import ViewItemModal from "../Item/ViewItemModal";

const ViandsList = ({ viands }) => {
  const [selectedViand, setSelectedViand] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [showViewItemModal, setShowViewItemModal] = useState(false);

  const ToggleD = (viand) => {
    setShowDeleteItemModal(true);
    setSelectedViand(viand);
  };

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedViand({});
  };

  const ToggleE = (viand) => {
    setShowEditItemModal(true);
    setSelectedViand(viand);
  };

  const closeEditModal = () => {
    setShowEditItemModal(false);
    setSelectedViand({});
  };

  const ToggleV = (viand) => {
    setShowViewItemModal(true);
    setSelectedViand(viand);
  };

  const closeViewModal = () => {
    setShowViewItemModal(false);
    setSelectedViand({});
  };

  const truncateId = (id) => {
    if (id.length > 10) {
      return id.slice(0, 10) + "...";
    }
    return id;
  };

  return (
    <div className="viands-list">
      <table>
        <thead>
          <tr>
            <th className="vfirst-column"></th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Image</th>
            <th className="vlast-column"></th>
          </tr>
        </thead>
        <tbody>
          {viands.map((viand) => (
            <tr key={viand.id}>
              <td>
                <button className="viand-edit" onClick={() => ToggleE(viand)}>
                  Edit
                </button>
              </td>
              <td className="view-data" onClick={() => ToggleV(viand)}>{truncateId(viand.id)}</td>
              <td className="view-data" onClick={() => ToggleV(viand)}>{viand.name}</td>
              <td className="view-data" onClick={() => ToggleV(viand)}>{viand.description}</td>
              <td className="view-data" onClick={() => ToggleV(viand)}>{viand.price}</td>
              <td className="view-data" onClick={() => ToggleV(viand)}>{viand.quantity}</td>
              <td className="view-data" onClick={() => ToggleV(viand)}>
                {new Date(viand.expiry_date).toLocaleDateString("en-US")}
              </td>
              <td className="view-data" onClick={() => ToggleV(viand)}>
                <a href={viand.image} target="_blank" rel="noopener noreferrer">
                  <img src={viand.image} alt="Product Image" className="viand-image" />
                </a>
              </td>
              <td>
                <button className="viand-delete" onClick={() => ToggleD(viand)}>
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
        item={selectedViand}
        modalHeader="Edit Viand"
      />
      <DeleteItemModal 
        show={showDeleteItemModal} 
        close={closeDeleteModal} 
        item={selectedViand} 
      />
      <ViewItemModal
        show={showViewItemModal}
        close={closeViewModal}
        item={selectedViand}
        modalHeader="Viand"
      />
    </div>
  );
};

export default ViandsList;
