import React from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./DishCard.module.css";
import { Link } from "react-router-dom";

const DishCard = ({ dish }) => {
  return (
    <Card className={styles.dishCard}>
      <Card.Img variant="top" src={dish.img} className={styles.dishCardImg} />
      <Card.Body className={styles.dishCardBody}>
        <Card.Title className={styles.dishCardTitle}> {dish.name} </Card.Title>
        <Card.Text className={styles.dishCardDescription}>
          {dish.description}
        </Card.Text>
        <Card.Text className={styles.dishCardPrice}>
          ⭐ {dish.rating} | ${dish.price}
        </Card.Text>
        <Link to={{ pathname: "/surge-pricing", state: { dish } }}>
          <Button variant="primary">Order Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
