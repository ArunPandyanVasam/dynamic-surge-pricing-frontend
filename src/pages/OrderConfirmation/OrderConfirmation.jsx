import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import styles from "./OrderConfirmation.module.css";

const OrderConfirmation = () => {
  const locationData = useLocation();
  const navigate = useNavigate();

  const { dish, quantity, surgePricing, location: userLocation } = locationData.state || {};

  const [userDetails, setUserDetails] = useState({
    name: "",
    contact: "",
    paymentMethod: "Credit Card",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleConfirmOrder = () => {
    if (!userDetails.name.trim() || !userDetails.contact.trim()) {
      setError("Please enter both your Name and Contact Number.");
      return;
    }

    navigate("/thank-you", {
      state: {
        name: userDetails.name,
        contact: userDetails.contact,
        totalPrice: surgePricing.final_price_after, 
      },
    });
  };

  if (!dish || !surgePricing) {
    return <p className={styles.errorMessage}>No order details found. Please start a new order.</p>;
  }

  return (
    <div className={styles.orderConfirmationContainer}>
      <Card className={styles.orderCard}>
        <Card.Body>
          <Card.Title className={styles.cardTitle}>Order Confirmation</Card.Title>
          <p className={styles.orderDetails}><strong>Dish:</strong> {dish.name} (x{quantity})</p>
          <p className={styles.orderDetails}><strong>Location:</strong> {userLocation}</p>
          <p className={styles.totalPrice}><strong>Total Price:</strong> <b>${surgePricing.final_price_after}</b></p>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <Form>
            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.formLabel}>Name</Form.Label>
              <Form.Control
                className={styles.formControl}
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.formLabel}>Contact Number</Form.Label>
              <Form.Control
                className={styles.formControl}
                type="text"
                name="contact"
                value={userDetails.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
            </Form.Group>

            <Form.Group className={styles.formGroup}>
              <Form.Label className={styles.formLabel}>Payment Method</Form.Label>
              <Form.Select className={styles.formSelect} name="paymentMethod" value={userDetails.paymentMethod} onChange={handleChange}>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
              </Form.Select>
            </Form.Group>

            <Button className={styles.confirmButton} onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
