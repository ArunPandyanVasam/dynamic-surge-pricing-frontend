import React, { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const [cartCount, setCartCount] = useState(0);
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/"> 🍽️ Foodie App </Navbar.Brand>
        <div className={styles.cartIcon}>
          <FaShoppingCart size={24} />
          <span className={styles.cartCount}> {cartCount} </span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
