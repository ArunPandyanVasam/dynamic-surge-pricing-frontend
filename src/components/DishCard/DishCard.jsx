import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import styles from "./DishCard.module.css";
import OrderModal from "../OrderModal/OrderModal";
import { FaMinus, FaPlus } from "react-icons/fa";

const DishCard = ({ dish }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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

          <div className={styles.quantitySelector}>
            <Button variant="outline-secondary" onClick={decreaseQuantity}>
              <FaMinus />
            </Button>
            <span className={styles.quantityValue}>{quantity}</span>
            <Button variant="outline-secondary" onClick={increaseQuantity}>
              <FaPlus />
            </Button>
          </div>

          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>

      {/* <OrderModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        dish={dish}
      /> */}

    </>
  );
};

export default DishCard;
