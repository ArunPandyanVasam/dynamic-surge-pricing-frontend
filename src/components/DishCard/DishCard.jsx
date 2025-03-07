
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./DishCard.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const DishCard = ({ dish, setCart, cart }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === dish.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...dish, quantity }];
      }
    });
  };

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
        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
