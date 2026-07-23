// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Quality from "../pages/Certifications";

// Import products pages from the products folder
import Products from "../pages/products/Products";
import ProductCategory from "../pages/products/ProductCategory";
import ProductDetails from "../pages/products/ProductDetails";
import Certifications from "../pages/Certifications";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />

        {/* Products Routes */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<ProductCategory />} />

        {/* For products with 2 segments (pipes-tubes, sheets-plates, etc.) */}
        <Route path="/products/:category/:slug" element={<ProductDetails />} />

        {/* For products with 3 segments (round-bars/high-nickel-alloy-roundbars, etc.) */}
        <Route
          path="/products/:category/:subCategory/:slug"
          element={<ProductDetails />}
        />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
