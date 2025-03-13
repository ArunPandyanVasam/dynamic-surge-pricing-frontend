
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ cartCount }) => {
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/"> 🍽️ Foodie</Navbar.Brand>
        {/* <Link to="/cart" className={styles.cartIcon}>
          <FaShoppingCart size={24} />
          <span className={styles.cartCount}>{cartCount}</span>
        </Link> */}
      </Container>
    </Navbar>
  );
};

export default Header;