import React, { useState } from "react";
import './Viands.css';
import DeleteItemModal from ".././DeleteItemModal";

const ViandsList = ({ viands }) => {
  const [selectedViand, setSelectedViand] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);

  const ToggleD = (viand) => {
    setShowDeleteItemModal(true);
    setSelectedViand(viand);
  };

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedViand({});
  };

  const truncateId = (id) => {
    if (id.length > 10) {
      return id.slice(0, 10) + '...';
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
                            <button className="viand-edit">
                            Edit
                            </button>
                        </td>
                        <td className="viand-data">
                            {truncateId(viand.id)}
                        </td>
                        <td className="viand-data">
                            {viand.name}
                        </td>
                        <td className="viand-data">
                            {viand.description}
                        </td>
                        <td className="viand-data">
                            {viand.price}
                        </td>
                        <td className="viand-data">
                            {viand.quantity}
                        </td>
                        <td className="viand-data">
                            {new Date(viand.expiry_date).toLocaleDateString('en-US')}
                        </td>
                        <td className="viand-data">
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

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedViand}
            />

        </div>
    );
};

export default ViandsList;