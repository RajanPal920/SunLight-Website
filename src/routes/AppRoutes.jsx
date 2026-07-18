// src/routes/AppRoutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Quality from "../pages/Quality";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";
import ProductCategory from "../pages/ProductCategory";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        {/* The :category parameter will match the slug from your category data */}
        <Route path="/products/:category" element={<ProductCategory />} />
        <Route path="/products/:category/:slug" element={<ProductDetails />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
