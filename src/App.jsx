import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Quality from './pages/Quality';
import Contact from './pages/Contact';

/**
 * App — root component with React Router setup.
 * Routes:
 *   /          → Home (full page)
 *   /about     → About (stub)
 *   /products  → Products (stub)
 *   /quality   → Quality & Certifications (stub)
 *   /contact   → Contact (stub)
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all → Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
