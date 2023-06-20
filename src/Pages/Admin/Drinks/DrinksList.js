import React, { useState } from "react";
import './Drinks.css';
import DeleteItemModal from "../Item/DeleteItemModal";

const DrinksList = ({ drinks }) => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);

  const ToggleD = (drink) => {
    setShowDeleteItemModal(true);
    setSelectedDrink(drink);
  };

  const closeDeleteModal = () => {
    setShowDeleteItemModal(false);
    setSelectedDrink({});
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
                            <button className="drink-edit">
                            Edit
                            </button>
                        </td>
                        <td className="drink-data">
                            {drink.id}
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

            <DeleteItemModal
                show={showDeleteItemModal}
                close={closeDeleteModal}
                item={selectedDrink}
            />

        </div>
    );
};

export default DrinksList;