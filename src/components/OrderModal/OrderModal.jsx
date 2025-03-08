import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import styles from "./OrderModal.module.css";

const OrderModal = ({ show, handleClose, dish, quantity }) => {
  const [location, setLocation] = useState("");
  const [surgePricing, setSurgePricing] = useState(null);

  const handleGetSurgePricing = () => {
    // Dynamic surge pricing logic
    const basePrice = dish.price * quantity;
    const weatherSurcharge = (basePrice * 0.2).toFixed(2); // 20% of base price
    const trafficSurcharge = (basePrice * 0.3).toFixed(2); // 30% of base price
    const totalSurgePrice = (basePrice + parseFloat(weatherSurcharge) + parseFloat(trafficSurcharge)).toFixed(2);
    
    setSurgePricing({ basePrice, weatherSurcharge, trafficSurcharge, totalSurgePrice });
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
          {surgePricing && (
            <Table striped bordered hover className={styles.surgeTable}>
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Base Price</td>
                  <td>${surgePricing.basePrice}</td>
                </tr>
                <tr>
                  <td>Weather Surcharge (20%)</td>
                  <td>${surgePricing.weatherSurcharge}</td>
                </tr>
                <tr>
                  <td>Traffic Surcharge (30%)</td>
                  <td>${surgePricing.trafficSurcharge}</td>
                </tr>
                <tr>
                  <td><strong>Total Surge Price</strong></td>
                  <td><strong>${surgePricing.totalSurgePrice}</strong></td>
                </tr>
              </tbody>
            </Table>
          )}
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