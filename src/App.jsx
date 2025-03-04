
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

const App = () => {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </Router>
  )
}

export default App
