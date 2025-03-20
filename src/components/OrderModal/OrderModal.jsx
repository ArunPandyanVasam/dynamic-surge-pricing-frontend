import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./OrderModal.module.css";

const OrderModal = ({ show, handleClose, dish, quantity }) => {
  const [location, setLocation] = useState("");
  const [surgePricing, setSurgePricing] = useState(null);
  const navigate = useNavigate();

  const handleGetSurgePricing = async () => {
    if (!location.trim()) {
      alert("Please enter a valid location.");
      return;
    }
  
    try {
      const response = await axios.post(
        "https://dynamic-surge-pricing-backend.onrender.com/get-weather",
        {
          address: location,
          base_price: dish.price * quantity,
        }
      );
  
      console.log("Surge Pricing Response:", response.data);  // Log response here
      setSurgePricing(response.data);
    } catch (error) {
      console.error("Error fetching surge price:", error);
      alert("Failed to fetch surge pricing. Try again.");
    }
  };

  const handleOrderConfirm = () => {
    navigate("/order-confirmation", {
      state: { dish, quantity, surgePricing, location },
    });
  };

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
          <p>
            ⭐ {dish.rating} | ${dish.price * quantity}
          </p>
          <p>{dish.description}</p>

          {!surgePricing && (
            <Form.Group>
              <Form.Label>Enter Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., 290 Bremner Blvd, Toronto, ON M5V 3L9, Canada"
                className={styles.inputField}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          )}

          {surgePricing && (
            <Table striped bordered hover className={styles.surgeTable}>
              <tbody>
                <tr>
                  <td>
                    <strong>Temperature</strong>
                  </td>
                  <td>{surgePricing.temperature}°C</td>
                </tr>
                <tr>
                  <td>
                    <strong>Weather</strong>
                  </td>
                  <td>{surgePricing.weather_description}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Base Price</strong>
                  </td>
                  <td>${surgePricing.base_price}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Surge Price</strong>
                  </td>
                  <td>${surgePricing.surge_price}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Tax (10%)</strong>
                  </td>
                  <td>${surgePricing.tax}</td>
                </tr>
                <tr>
                  <td>
                    <strong>Total Price</strong>
                  </td>
                  <td>
                    <strong>${surgePricing.final_price}</strong>
                  </td>
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
            <Button
              className={styles.btnSuccess}
              onClick={handleGetSurgePricing}
            >
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
