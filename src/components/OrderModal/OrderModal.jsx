import React from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./OrderModal.module.css";

const OrderModal = ({ show, handleClose, dish }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className={styles.modalContent}>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>Enter Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <h5>{dish.name}</h5>
          <p>⭐ {dish.rating} | ${dish.price}</p>
          <p>{dish.description}</p>
          <input
            type="text"
            placeholder="Enter your city/address"
            className={styles.inputField}
          />
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button className={styles.btnSecondary} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.btnSuccess}>Get Surge Pricing</Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default OrderModal;
