// src/pages/products/Products.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Package, Search, Grid, List, ArrowRight } from "lucide-react";
import products from "../../data/products";
import { getAllCategories } from "../../data/productCategories";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // getAllCategories is async (it lazy-loads every product file on demand),
  // so it must be awaited — calling it directly, as before, assigned a
  // Promise to `categories` and `.map()` on that would crash the page.
  // This is the only logic change in this pass; filtering/search/selection
  // below is untouched.
  useEffect(() => {
    let active = true;
    // Promise.resolve(...) safely handles getAllCategories() whether it
    // returns a Promise (async version) or a plain array/object (sync
    // version) — avoids crashing if the two ever drift out of sync again.
    Promise.resolve(getAllCategories()).then((data) => {
      if (active) setCategories(data || []);
    });
    return () => {
      active = false;
    };
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.slug === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 sm:py-12 mt-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 sm:w-10 h-0.5 bg-[#03A58D]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#46127B] uppercase">
              Product Catalog
            </span>
            <span className="w-8 sm:w-10 h-0.5 bg-[#03A58D]" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-gray-800">
            Our <span className="text-[#46127B]">Products</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
            Explore our comprehensive range of high-quality industrial products
          </p>
        </div>

        {/* Search and Controls */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#46127B]/40 focus:border-[#46127B] transition-colors"
              />
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                className={`p-2.5 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#46127B] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="List view"
                className={`p-2.5 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#46127B] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              selectedCategory === null
                ? "bg-[#46127B] border-[#46127B] text-white"
                : "bg-white border-gray-200 text-gray-600 hover:border-[#46127B]/40 hover:text-[#46127B]"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                selectedCategory === cat.slug
                  ? "bg-[#46127B] border-[#46127B] text-white"
                  : "bg-white border-gray-200 text-gray-600 hover:border-[#46127B]/40 hover:text-[#46127B]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#03A58D]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-44 sm:h-48 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#46127B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[#03A58D] text-sm font-semibold">
                      View Details
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  className="group bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-xl hover:border-[#03A58D]/40 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#46127B] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {product.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[#03A58D] text-sm font-semibold flex-shrink-0">
                    View
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </Link>
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
            <Package size={44} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-sm">
              No products found matching your search
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
