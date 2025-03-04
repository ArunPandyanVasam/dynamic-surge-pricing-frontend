
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
      <Router>
        <Header cartCount={cartCount} />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
  )
}

export default App
