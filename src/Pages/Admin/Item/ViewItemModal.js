import closebutton from "../../../Assets/close-button.svg";
import TextFieldComponent from "./ViewItemForm";
import React, { useState, useEffect } from "react";
import "../../Admin/Item/Item.css";
import moment from "moment";
import EditItemModal from "./EditItemModal";
import DeleteItemModal from "./DeleteItemModal";

const ViewItemModal = ({ show, close, item, modalHeader }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiry_date, setExpiry] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
      setPrice(item.price);
      setQuantity(item.quantity);
      setExpiry(moment(item.expiry_date).format("M/DD/YYYY"));
      setImage(item.image);
    }
  }, [item]);

  const [selectedItem, setSelectedItem] = useState({});

  const [showDeleteItemModal, setShowDeleteItemModal] = useState(false);
  const [showEditItemModal, setShowEditItemModal] = useState(false);

    const ToggleD = (item) => {
        setShowDeleteItemModal(true);
        setSelectedItem(item);
    };
    
    const closeDeleteModal = () => {
        setShowDeleteItemModal(false);
        setSelectedItem({});
    };
    
    const ToggleE = (item) => {
        setShowEditItemModal(true);
        setSelectedItem(item);
    };
    
    const closeEditModal = () => {
        setShowEditItemModal(false);
        setSelectedItem({});
    };

    useEffect(() => {
      if (showEditItemModal || showDeleteItemModal) {
        close();
      }
  }, [showEditItemModal, showDeleteItemModal, close]);

  return (
    <>
      {show ? (
        <div className="view-item-container">
          <div className="view-item-modal" 
          onClick={(e) => e.stopPropagation()}
          >
            <header className="modal-header">
              <h2 className="view-item-modal-header-title"> View {modalHeader}</h2>
              <button className="exit" onClick={close}>
                <img src={closebutton} alt="exit" />
              </button>
            </header>
            <main className="modal-content">
              {/* <form> */}
                <div>
                  <TextFieldComponent
                    initialName={name}
                    initialDescription={description}
                    initialPrice={price}
                    initialQuantity={quantity}
                    initialExpiry={expiry_date}
                    initialImage={image}
                  />
                </div>
            </main>
                <footer className="modal-footer">
                <div className="button-row">
                  <button className="view-delete" onClick={() => ToggleD(item)}>
                    Delete
                  </button>
                  <button className="view-edit" onClick={() => ToggleE(item)}>
                    Edit
                  </button>
                </div>
                </footer>
              {/* </form> */}
          </div>
        </div>
      ) : null}
        <DeleteItemModal
          show={showDeleteItemModal}
          close={closeDeleteModal}
          item={selectedItem}
        />
        <EditItemModal
          show={showEditItemModal}
          close={closeEditModal}
          item={selectedItem}
          modalHeader={"Edit Viand"}
        />
    </>
  );
};

export default ViewItemModal;
