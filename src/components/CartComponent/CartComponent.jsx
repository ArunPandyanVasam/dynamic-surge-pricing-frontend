
import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import styles from "./CartComponent.module.css";

const CartComponent = ({ cart, setCart }) => {
  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Shopping Cart</h2>
      <ListGroup className={styles.cartList}>
        {cart.map((item) => (
          <ListGroup.Item key={item.id} className={styles.cartItem}>
            <div className={styles.itemDetails}>
              <span className={styles.itemName}>{item.name}</span> - 
              <span className={styles.itemPrice}> ${item.price} x {item.quantity} = ${item.price * item.quantity}</span>
            </div>
            <div className={styles.quantityControls}>
              <Button variant="outline-secondary" className={styles.quantityBtn} onClick={() => updateQuantity(item.id, -1)}>-</Button>
              <Button variant="outline-secondary" className={styles.quantityBtn} onClick={() => updateQuantity(item.id, 1)}>+</Button>
              <Button variant="danger" className={styles.removeBtn} onClick={() => updateQuantity(item.id, -item.quantity)}>Remove</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CartComponent;
