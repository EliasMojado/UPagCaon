import React, { useState, useEffect } from "react";
import "../../Admin/Item/Item.css";
import moment from 'moment';
import 'moment-timezone';

const TextFieldComponent = ({
  initialName,
  initialDescription,
  initialPrice,
  initialQuantity,
  initialExpiry,
  initialImage,
}) => {
  
  const newExpiryDate = moment(initialExpiry).format("YYYY-MM-DD");
  const [vname, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [expiry_date, setExpiry] = useState(newExpiryDate);
  const [image, setImage] = useState(initialImage);

  useEffect(() => {
    setName(initialName);
    setDescription(initialDescription);
    setPrice(initialPrice);
    setQuantity(initialQuantity);
    setExpiry(newExpiryDate);
    setImage(initialImage);
  }, [
    initialName,
    initialDescription,
    initialPrice,
    initialQuantity,
    initialExpiry,
    initialImage
  ]);

  return (
    <div className="input">

      <div className="input">
        <input
          readOnly
          className="vname"
          type="text"
          placeholder="Product Name"
          value={vname}
        />
        <input
          className="vname"
          type="text"
          placeholder="Description"
          value={description}
          readOnly
        />
        <input
          className="vname"
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          readOnly
        />
        <input
          className="vname"
          type="number"
          placeholder="Quantity"
          value={quantity} 
          readOnly
        />
        <input
          className="vname"
          type="date"
          placeholder="Expiry Date"
          value={expiry_date}
          readOnly
        />
      </div>
      
    <div className="input">
      {initialImage && (
        <div>
          <p className="initial-image-label">Uploaded Image:</p>
          {/* <p className="initial-image-name"> */}
            {/* {initialImage.name || initialImage.substring(initialImage.lastIndexOf("/") + 1)} */}
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img src={image} alt="Product Image" className="view-image" />
            </a>
          {/* </p> */}
        </div>
      )}
    </div>

    </div>
  );
};

export default TextFieldComponent;  
