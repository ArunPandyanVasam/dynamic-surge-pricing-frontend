import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import styles from "./OrderModal.module.css";

const OrderModal = ({ show, handleClose, dish, quantity }) => {
  const [location, setLocation] = useState("");

  const handleGetSurgePricing = () => {
    console.log("Fetching surge pricing for", location);
    // Implement the surge pricing logic
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className={styles.modalContent}>
        <Modal.Header closeButton className={styles.modalHeader}>
          <Modal.Title>Enter Your Location</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <h5>{dish.name}</h5>
          <p>⭐ {dish.rating} | ${dish.price * quantity}</p>
          <p>{dish.description}</p>
          <Form.Group>
            <Form.Label>Enter Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your city/address"
              className={styles.inputField}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button className={styles.btnSecondary} onClick={handleClose}>
            Cancel
          </Button>
          <Button className={styles.btnSuccess} onClick={handleGetSurgePricing}>
            Get Surge Pricing
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default OrderModal;
