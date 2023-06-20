import React, { useState } from "react";
import './Drinks.css';
import DeleteEmployeeModal from "../Employee/DeleteEmployeeModal";

const DrinksList = ({ drinks }) => {
  const [selectedDrink, setSelectedDrink] = useState({});
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] = useState(false);

  const ToggleD = (drink) => {
    setShowDeleteEmployeeModal(true);
    setSelectedDrink(drink);
  };

  const closeDeleteModal = () => {
    setShowDeleteEmployeeModal(false);
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

            <DeleteEmployeeModal
                show={showDeleteEmployeeModal}
                close={closeDeleteModal}
                drink={selectedDrink}
            />

        </div>
    );
};

export default DrinksList;