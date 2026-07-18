// src/pages/Products/Products.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Search,
  Filter,
  Grid3X3,
  List,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import products from "../data/products";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Products | Sunlight Forge & Fitting Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore our premium range of industrial products including flanges, valves, pipes, fittings, fasteners, and more."
        />
      </Helmet>

      <div className="min-h-screen pt-[110px] xs:pt-[115px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px] bg-slate-50">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#46127B] to-[#320D5A] py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <Package size={16} className="text-[#03A58D]" />
                <span className="font-poppins font-semibold text-xs uppercase tracking-widest text-white">
                  Our Products
                </span>
              </span>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Premium Industrial
                <br />
                <span className="text-[#03A58D]">Products</span>
              </h1>
              <div className="flex gap-1.5 justify-center mt-4">
                <span className="block h-1 w-10 rounded-full bg-[#03A58D]" />
                <span className="block h-1 w-4 rounded-full bg-white/50" />
              </div>
              <p className="font-poppins text-base sm:text-lg text-white/80 max-w-2xl mt-4">
                Discover our comprehensive range of high-quality industrial
                components engineered for excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46127B] focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Filter className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 sm:flex-none px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#46127B] focus:border-transparent bg-white appearance-none cursor-pointer min-w-[140px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-white shadow-sm text-[#46127B]"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-white shadow-sm text-[#46127B]"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                  aria-label="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-slate-500">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-4 sm:gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => {
                const Icon = product.icon;
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ${
                      viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                    } hover:bg-[#46127B]`}
                  >
                    {/* Product Image */}
                    <div
                      className={`relative overflow-hidden bg-slate-100 ${
                        viewMode === "list"
                          ? "sm:w-48 md:w-64 flex-shrink-0"
                          : "w-full"
                      } group-hover:bg-[#46127B]/20`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105 ${
                          viewMode === "list" ? "sm:h-full" : ""
                        }`}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#46127B]/90 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider group-hover:bg-white/20 group-hover:text-white">
                          {product.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#46127B]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Product Content */}
                    <div
                      className={`p-4 sm:p-5 flex-1 flex flex-col transition-colors duration-300 ${
                        viewMode === "list" ? "justify-center" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-lg bg-[#46127B]/10 text-[#46127B] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="font-poppins font-bold text-base sm:text-lg text-[#46127B] group-hover:text-white transition-colors duration-300 leading-tight">
                            {product.name}
                          </h3>
                        </div>
                      </div>

                      <p className="font-poppins text-xs sm:text-sm text-slate-600 group-hover:text-white/90 transition-colors duration-300 mt-2 leading-relaxed flex-1">
                        {product.shortDescription}
                      </p>

                      <span className="inline-flex items-center gap-2 mt-4 text-[#46127B] font-semibold text-sm group-hover:text-white transition-colors duration-300 group-hover:translate-x-1">
                        View Details
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#46127B] mb-2">
                No products found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-gradient-to-r from-[#46127B] to-[#320D5A] rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Need a Custom Solution?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Contact our team for custom manufacturing, bulk orders, or
              technical specifications.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#03A58D]/30 hover:-translate-y-1"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
