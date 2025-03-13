import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./OrderModal.module.css";

const OrderModal = ({ show, handleClose, dish, quantity }) => {
  const [location, setLocation] = useState("");
  const [surgePricing, setSurgePricing] = useState(null);
  const navigate = useNavigate();

  // Fetch surge pricing from Flask API
  const handleGetSurgePricing = async () => {
    if (!location.trim()) {
      alert("Please enter a valid location.");
      return;
    }
  
    try {
      const response = await axios.post("http://127.0.0.1:5000/get-weather", {
        address: location,
        base_price: dish.price * quantity,
      });
      setSurgePricing({
        totalSurgePrice: response.data.total_price.toFixed(2),
      });
    } catch (error) {
      console.error("Error fetching surge price:", error);
      alert("Failed to fetch surge pricing. Try again.");
    }
  };

  // Handle order confirmation
  const handleOrderConfirm = () => {
    navigate("/order-confirmation", {
      state: { dish, quantity, surgePricing, location },
    });
  };

  // Reset state when modal is closed
  const handleCancel = () => {
    setLocation("");
    setSurgePricing(null);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleCancel} centered>
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
              placeholder="e.g., 1600 Pennsylvania Ave NW, Washington, DC 20500, USA"
              className={styles.inputField}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>

          {surgePricing && (
            <Table striped bordered hover className={styles.surgeTable}>
              <tbody>
                <tr>
                  <td><strong>Total Surge Price</strong></td>
                  <td><strong>${surgePricing.totalSurgePrice}</strong></td>
                </tr>
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer className={styles.modalFooter}>
          <Button className={styles.btnSecondary} onClick={handleCancel}>
            Cancel
          </Button>
          {!surgePricing ? (
            <Button className={styles.btnSuccess} onClick={handleGetSurgePricing}>
              Get Surge Pricing
            </Button>
          ) : (
            <Button className={styles.btnPrimary} onClick={handleOrderConfirm}>
              Confirm Order
            </Button>
          )}
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default OrderModal;
