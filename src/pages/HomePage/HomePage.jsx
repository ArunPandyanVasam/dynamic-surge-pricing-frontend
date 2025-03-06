import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./HomePage.module.css";
import DishCard from "../../components/DishCard/DishCard";

const dishes = [
  {
    id: 1,
    name: "Spicy Chicken",
    price: 10,
    rating: 4.5,
    description: "Spicy chicken with garlic sauce",
    img: "/assets/pasta.jpg",
  },
  {
    id: 2,
    name: "Pasta",
    price: 12,
    rating: 4.2,
    description: "Creamy pasta with mushrooms",
    img: "/assets/pasta.jpg",
  }
];

const HomePage = ({ setCartCount }) => {
  return (
    <Container className={styles.pageContainer}>
      <h1 className={styles.dishTitle}> Discover Your Next Favorite Meal </h1>
      <Row className={styles.dishGrid}>
        {dishes.map((dish) => (
          <Col key={dish.id} sm={12} md={6} lg={4}>
            <DishCard dish={dish} setCartCount={setCartCount} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
