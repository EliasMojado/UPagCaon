import React, { useState } from "react";
import './Drinks.css';
import DeleteItemModal from "../Item/DeleteItemModal";
import EditItemModal from "../Item/EditItemModal"
import ViewItemModal from "../Item/ViewItemModal";

const DrinksList = ({ drinks }) => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);
  const [showViewItemModal, setShowViewItemModal] = useState(false);

  const ToggleD = (drink) => {
    setShowDeleteItemModal(true);
    setSelectedDrink(drink);
  };

  const ToggleE = (drink) => {
    setShowEditItemModal(true);
    setSelectedDrink(drink);
  }
  
  const ToggleV = (drink) => {
    setShowViewItemModal(true);
    setSelectedDrink(drink);
  };

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedDrink({});
  };

  const closeEditModal = () => {
    setShowEditItemModal(false);
    setSelectedDrink({});
  }

  const closeViewModal = () => {
    setShowViewItemModal(false);
    setSelectedDrink({});
  };

  const truncateId = (id) => {
    if (id.length > 10) {
        return id.slice(0, 10) + "...";
    }
    return id;
  };

    return ( 
        <div className="drinks-list">
            <table>
                <thead>
                    <tr>
                        <th className="dfirst-column"></th>
                        <th>Product ID</th>
                        <th>Product Name</th>    
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Expiry Date</th>
                        <th>Image</th>
                        <th className="dlast-column"></th>
                    </tr>
                </thead>
                <tbody>
                    {drinks.map((drink) => (
                        <tr key={drink.id}>
                        <td>
                            <button className="drink-edit" onClick={()=>ToggleE(drink)}>
                            Edit
                            </button>
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            {truncateId(drink.id)}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            {drink.name}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            {drink.description}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            {drink.price}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            {drink.quantity}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            {new Date(drink.expiry_date).toLocaleDateString("en-US")}
                        </td>
                        <td className="view-data" onClick={() => ToggleV(drink)}>
                            <a href={drink.image} target="_blank" rel="noopener noreferrer">
                                <img src={drink.image} alt="Product Image" className="drink-image" />
                            </a>
                        </td>
                        <td>
                            <button className="drink-delete" onClick={() => ToggleD(drink)}>
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
                item = {selectedDrink}
                modalHeader="Drink"
            />

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedDrink}
                modalHeader="Drink"
            />

            <ViewItemModal
                show={showViewItemModal}
                close={closeViewModal}
                item={selectedDrink}
                modalHeader="Drink"
            />

        </div>
    );
};

export default DrinksList;