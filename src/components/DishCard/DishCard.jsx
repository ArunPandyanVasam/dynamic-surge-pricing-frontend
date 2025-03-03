import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./DishCard.module.css";
import OrderModal from "../OrderModal/OrderModal";

const DishCard = ({ dish }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Card className={styles.dishCard}>
        <Card.Img variant="top" src={dish.img} className={styles.dishCardImg} />
        <Card.Body className={styles.dishCardBody}>
          <Card.Title className={styles.dishCardTitle}>
            {" "}
            {dish.name}{" "}
          </Card.Title>
          <Card.Text className={styles.dishCardDescription}>
            {dish.description}
          </Card.Text>
          <Card.Text className={styles.dishCardPrice}>
            ⭐ {dish.rating} | ${dish.price}
          </Card.Text>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      <OrderModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        dish={dish}
      />
    </>
  );
};

export default DishCard;
