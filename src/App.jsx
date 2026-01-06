import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
