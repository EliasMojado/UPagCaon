import React, { useState } from "react";
import './Drinks.css';
import DeleteItemModal from "../Item/DeleteItemModal";
import EditItemModal from "../Item/EditItemModal"

const DrinksList = ({ drinks }) => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);

  const ToggleD = (drink) => {
    setShowDeleteItemModal(true);
    setSelectedDrink(drink);
  };

  const ToggleE = (drink) => {
    setShowEditItemModal(true);
    setSelectedDrink(drink);
  }

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedDrink({});
  };

  const closeEditModal = () => {
    setShowEditItemModal(false);
    setSelectedDrink({});
  }

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
                        <td className="drink-data">
                            {truncateId(drink.id)}
                        </td>
                        <td className="drink-data">
                            {drink.name}
                        </td>
                        <td className="drink-data">
                            {drink.description}
                        </td>
                        <td className="drink-data">
                            {drink.price}
                        </td>
                        <td className="drink-data">
                            {drink.quantity}
                        </td>
                        <td className="drink-data">
                            {new Date(drink.expiry_date).toLocaleDateString("en-US")}
                        </td>
                        <td className="drink-data">
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
                modalHeader="Edit Drink"
            />

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedDrink}
            />

        </div>
    );
};

export default DrinksList;