
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import CartComponent from './components/CartComponent/CartComponent';

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path='/' element={<HomePage setCart={setCart} cart={cart} />} />
        <Route path='/cart' element={<CartComponent cart={cart} setCart={setCart} />} />
      </Routes>
    </Router>
  );
};

export default App;