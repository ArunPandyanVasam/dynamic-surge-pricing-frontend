
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./DishCard.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import OrderModal from "../OrderModal/OrderModal";

const DishCard = ({ dish, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <Card className={styles.dishCard}>
      <Card.Img variant="top" src={dish.img} className={styles.dishCardImg} />
      <Card.Body className={styles.dishCardBody}>
        <Card.Title className={styles.dishCardTitle}>{dish.name}</Card.Title>
        <Card.Text className={styles.dishCardDescription}>{dish.description}</Card.Text>
        <Card.Text className={styles.dishCardPrice}>⭐ {dish.rating} | ${dish.price}</Card.Text>
        <div className={styles.quantitySelector}>
          <Button variant="outline-secondary" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <FaMinus />
          </Button>
          <span className={styles.quantityValue}>{quantity}</span>
          <Button variant="outline-secondary" onClick={() => setQuantity(quantity + 1)}>
            <FaPlus />
          </Button>
        </div>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Order Now
        </Button>
      </Card.Body>
      <OrderModal show={showModal} handleClose={() => setShowModal(false)} dish={dish} quantity={quantity} setCart={setCart} />
    </Card>
  );
};

export default DishCard;
