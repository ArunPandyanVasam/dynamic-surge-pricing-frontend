
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./HomePage.module.css";
import DishCard from "../../components/DishCard/DishCard";

const dishes = [
  {
    id: 1,
    name: "Cheeseburger",
    price: 15,
    rating: 4.6,
    description: "A classic cheeseburger with a juicy beef patty, cheese, lettuce, and pickles.",
    img: "/assets/cheeseburger.jpg",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 12,
    rating: 4.7,
    description: "A simple yet delicious pizza with fresh mozzarella, tomato sauce, and basil.",
    img: "/assets/pizza.jpg",
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    price: 13,
    rating: 4.5,
    description: "A healthy salad with grilled chicken, romaine lettuce, croutons, and Caesar dressing.",
    img: "/assets/caesar-salad.jpg",
  },
  {
    id: 4,
    name: "Sushi Roll",
    price: 18,
    rating: 4.8,
    description: "Fresh sushi rolls with a variety of fish, avocado, cucumber, and a soy dipping sauce.",
    img: "/assets/sushi.jpg",
  }
];



const HomePage = ({ setCart, cart }) => {
  return (
    <Container className={styles.pageContainer}>
      <h1 className={styles.dishTitle}> Discover Your Next Favorite Meal </h1>
      <Row className={styles.dishGrid}>
        {dishes.map((dish) => (
          <Col key={dish.id} sm={12} md={6} lg={4}>
            <DishCard dish={dish} setCart={setCart} cart={cart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;