import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import styles from "./ThankYouPage.module.css";

const ThankYouPage = () => {
  const location = useLocation();
  const { name, contact, totalPrice } = location.state || {};

  return (
    <div className={styles.thankYouContainer}>
      <Card className={styles.thankYouCard}>
        <Card.Body>
          <Card.Title className={styles.cardTitle}>Thank You for Your Order!</Card.Title>
          <p className={styles.orderDetails}><strong>Name:</strong> {name}</p>
          <p className={styles.orderDetails}><strong>Contact Number:</strong> {contact}</p>
          <p className={styles.totalPrice}><strong>Total Price:</strong> ${totalPrice}</p>
          <p className={styles.successMessage}>Your order has been successfully placed. Enjoy your meal!</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ThankYouPage;
