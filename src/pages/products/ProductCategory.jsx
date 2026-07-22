// src/pages/products/ProductCategory.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Home,
  Package,
  Search,
  Grid,
  List,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  getCategoryBySlug,
  getAllCategories,
} from "../../data/productCategories";

const ProductCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const categoryData = getCategoryBySlug(category);
  const allCategories = getAllCategories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  if (!categoryData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center ">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-gray-100">
          <div className="w-20 h-20 bg-[#46127B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-10 h-10 text-[#46127B]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Category Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The category you're looking for doesn't exist.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#46127B] text-white px-8 py-3 rounded-xl hover:bg-[#46127B]/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Products
          </Link>
        </div>
      </div>
    );
  }

  const isSimpleArray = Array.isArray(categoryData);

  if (isSimpleArray) {
    const filteredItems = categoryData.filter(
      (item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false,
    );

    return (
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6 mt-10 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100/50 flex-wrap">
            <Link
              to="/"
              className="text-gray-500 hover:text-[#46127B] transition-colors"
            >
              <Home size={16} className="inline" />
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <Link
              to="/products"
              className="text-gray-500 hover:text-[#46127B] transition-colors"
            >
              Products
            </Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-[#46127B] font-semibold">
              {categoryData.name || "Sheets & Plates"}
            </span>
          </nav>

          {/* Category Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#46127B] via-[#5B1A9E] to-[#3A0E63] rounded-2xl shadow-2xl p-8 mb-8 text-white">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-10 -mb-10"></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
                  {categoryData.name || "Sheets & Plates"}
                </h1>
                <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
                  {categoryData.shortDescription ||
                    "High-quality sheets, plates, and coils in various materials and grades."}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/20">
                  {categoryData.length} Products
                </span>
              </div>
            </div>
          </div>

          {/* Search and View Controls */}
          <div className="bg-white rounded-2xl shadow-sm p-4 mb-8 border border-gray-100/50">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#46127B] focus:border-transparent transition-all"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-[#46127B] text-white shadow-lg shadow-[#46127B]/30" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-[#46127B] text-white shadow-lg shadow-[#46127B]/30" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {filteredItems.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`/products/${categoryData.slug}/${item.slug}`);
                    }}
                    className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/50"
                  >
                    <div className="h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-gray-800 group-hover:text-[#46127B] transition-colors text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                        {item.shortDescription}
                      </p>
                      <div className="mt-4 flex items-center text-[#46127B] text-sm font-semibold group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      navigate(`/products/${categoryData.slug}/${item.slug}`);
                    }}
                    className="group cursor-pointer bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-6 border border-gray-100/50"
                  >
                    <div className="w-28 h-28 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-[#46127B] transition-colors text-lg">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.shortDescription}
                      </p>
                    </div>
                    <div className="flex items-center text-[#46127B] font-semibold group-hover:gap-2 transition-all">
                      View
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-100/50">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={40} className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">
                No products found matching your search
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const allTypes = [];
  if (categoryData.categories) {
    categoryData.categories.forEach((subCategory) => {
      if (subCategory.types) {
        subCategory.types.forEach((type) => {
          allTypes.push({
            ...type,
            subCategoryTitle: subCategory.title,
            subCategoryId: subCategory.id,
            parentCategorySlug: categoryData.slug,
          });
        });
      }
    });
  }

  const filteredTypes = allTypes.filter(
    (type) =>
      type.title?.toLowerCase().includes(searchTerm.toLowerCase()) || false,
  );

  const subCategories = categoryData.categories || [];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 mt-15 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-gray-100/50 flex-wrap">
          <Link
            to="/"
            className="text-gray-500 hover:text-[#46127B] transition-colors"
          >
            <Home size={16} className="inline" />
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link
            to="/products"
            className="text-gray-500 hover:text-[#46127B] transition-colors"
          >
            Products
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#46127B] font-semibold">
            {categoryData.name}
          </span>
        </nav>

        {/* Category Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#46127B] via-[#5B1A9E] to-[#3A0E63] rounded-2xl shadow-2xl p-8 mb-8 text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-10 -mb-10"></div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              {categoryData.badge && (
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-3 border border-white/20">
                  {categoryData.badge}
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
                {categoryData.name}
              </h1>
              <p className="text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
                {categoryData.shortDescription || categoryData.longDescription}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/20">
                {allTypes.length} Products
              </span>
            </div>
          </div>
        </div>

        {/* Category Specifications */}
        {categoryData.specifications && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(categoryData.specifications).map(
                ([key, value]) => (
                  <div key={key} className="bg-gray-50 rounded-xl p-4">
                    <span className="text-xs text-gray-500 uppercase font-semibold tracking-wider">
                      {key}
                    </span>
                    <p className="text-sm text-gray-700 mt-1 font-medium">
                      {value}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {/* Search and View Controls */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-8 border border-gray-100/50">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder={`Search products in ${categoryData.name}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#46127B] focus:border-transparent transition-all"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-3 rounded-xl transition-all ${viewMode === "grid" ? "bg-[#46127B] text-white shadow-lg shadow-[#46127B]/30" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-3 rounded-xl transition-all ${viewMode === "list" ? "bg-[#46127B] text-white shadow-lg shadow-[#46127B]/30" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Categories with Types */}
        {subCategories.length > 0 ? (
          <div className="space-y-8">
            {subCategories.map((subCategory) => {
              const typesToShow =
                subCategory.types?.filter(
                  (type) =>
                    type.title
                      ?.toLowerCase()
                      .includes(searchTerm.toLowerCase()) || false,
                ) || [];

              if (typesToShow.length === 0) return null;

              return (
                <div
                  key={subCategory.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100/50"
                >
                  <div className="bg-gradient-to-r from-[#46127B] to-[#5B1A9E] px-6 py-5">
                    <div className="flex items-center gap-4">
                      {subCategory.image && (
                        <img
                          src={subCategory.image}
                          alt={subCategory.title}
                          className="w-14 h-14 object-cover rounded-xl border-2 border-white/20"
                        />
                      )}
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-white">
                          {subCategory.title}
                        </h2>
                        {subCategory.description && (
                          <p className="text-white/80 text-sm">
                            {subCategory.description}
                          </p>
                        )}
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-4 py-1.5 rounded-full border border-white/20">
                        {typesToShow.length} items
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {typesToShow.map((type) => (
                          <div
                            key={`${subCategory.id}-${type.id}`}
                            onClick={() =>
                              navigate(
                                `/products/${categoryData.slug}/${type.slug}`,
                              )
                            }
                            className="group cursor-pointer bg-gray-50 rounded-xl p-5 hover:bg-[#46127B] hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100/50"
                          >
                            <h3 className="font-semibold text-gray-800 group-hover:text-white transition-colors">
                              {type.title}
                            </h3>
                            {type.specs && type.specs.length > 0 && (
                              <p className="text-xs text-gray-500 group-hover:text-white/80 mt-2 line-clamp-2">
                                {type.specs[0]}
                              </p>
                            )}
                            <div className="mt-4 flex items-center text-[#46127B] group-hover:text-white text-sm font-semibold">
                              View Details
                              <ArrowRight
                                size={16}
                                className="ml-1 group-hover:translate-x-1 transition-transform"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {typesToShow.map((type) => (
                          <div
                            key={`${subCategory.id}-${type.id}`}
                            onClick={() =>
                              navigate(
                                `/products/${categoryData.slug}/${type.slug}`,
                              )
                            }
                            className="group cursor-pointer bg-gray-50 rounded-xl p-4 hover:bg-[#46127B] hover:text-white transition-all duration-300 flex items-center justify-between border border-gray-100/50"
                          >
                            <div>
                              <h3 className="font-semibold text-gray-800 group-hover:text-white">
                                {type.title}
                              </h3>
                              {type.specs && type.specs.length > 0 && (
                                <p className="text-xs text-gray-500 group-hover:text-white/80 mt-1">
                                  {type.specs[0]}
                                </p>
                              )}
                            </div>
                            <ArrowRight
                              size={20}
                              className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100/50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              All Products
            </h2>
            {filteredTypes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() =>
                      navigate(`/products/${categoryData.slug}/${type.slug}`)
                    }
                    className="group cursor-pointer bg-gray-50 rounded-xl p-5 hover:bg-[#46127B] hover:text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100/50"
                  >
                    <h3 className="font-semibold text-gray-800 group-hover:text-white">
                      {type.title}
                    </h3>
                    <div className="mt-3 flex items-center text-[#46127B] group-hover:text-white text-sm font-semibold">
                      View Details
                      <ArrowRight
                        size={16}
                        className="ml-1 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package size={40} className="text-gray-400" />
                </div>
                <p className="text-gray-500 text-lg">
                  No products found matching your search
                </p>
              </div>
            )}
          </div>
        )}

        {/* Applications */}
        {categoryData.applications && categoryData.applications.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 border border-gray-100/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Applications
            </h3>
            <div className="flex flex-wrap gap-3">
              {categoryData.applications.map((app, index) => (
                <span
                  key={`app-${index}`}
                  className="px-4 py-2 bg-[#46127B]/10 text-[#46127B] rounded-xl text-sm font-medium hover:bg-[#46127B]/20 transition-colors"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {categoryData.features && categoryData.features.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 border border-gray-100/50">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categoryData.features.map((feature, index) => (
                <li
                  key={`feature-${index}`}
                  className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-xl px-4 py-3"
                >
                  <span className="text-[#46127B] font-bold text-lg">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Export Destinations */}
        {categoryData.exportDestinations &&
          categoryData.exportDestinations.length > 0 && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6 border border-gray-100/50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Export Destinations
              </h3>
              <div className="flex flex-wrap gap-3">
                {categoryData.exportDestinations
                  .slice(0, 30)
                  .map((dest, index) => (
                    <span
                      key={`dest-${index}`}
                      className="px-4 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      {dest}
                    </span>
                  ))}
                {categoryData.exportDestinations.length > 30 && (
                  <span className="px-4 py-2 bg-gray-200 text-gray-600 rounded-xl text-sm font-medium">
                    +{categoryData.exportDestinations.length - 30} more
                  </span>
                )}
              </div>
            </div>
          )}

        {/* Explore Other Categories */}
        <div className="mt-8 bg-gradient-to-br from-white to-gray-50/80 rounded-2xl shadow-xl p-6 border border-gray-100/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#46127B] rounded-full"></span>
              Explore Other Categories
            </h3>
            <Link
              to="/products"
              className="text-[#46127B] text-sm font-semibold hover:underline flex items-center gap-1"
            >
              View All
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allCategories
              .filter((c) => {
                const cSlug = c.slug || c.name;
                return cSlug !== category;
              })
              .slice(0, 8)
              .map((cat) => (
                <Link
                  key={cat.id || cat.slug || `cat-${Math.random()}`}
                  to={`/products/${cat.slug || cat.name?.toLowerCase().replace(/\s+/g, "-") || ""}`}
                  className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#46127B] to-[#5B1A9E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Icon/Number badge */}
                      <div className="w-8 h-8 rounded-lg bg-[#46127B]/10 group-hover:bg-white/20 transition-colors duration-300 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#46127B] group-hover:text-white font-bold text-xs transition-colors duration-300">
                          {String.fromCharCode(
                            65 + (allCategories.indexOf(cat) % 26),
                          )}
                        </span>
                      </div>

                      <span className="font-medium text-gray-800 group-hover:text-white transition-colors duration-300 text-sm">
                        {cat.name || cat.title || "Category"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[#46127B] group-hover:text-white transition-all duration-300">
                      <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Explore
                      </span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#46127B] group-hover:h-0.5 transition-all duration-300"></div>
                </Link>
              ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 relative overflow-hidden bg-gradient-to-br from-[#46127B] via-[#5B1A9E] to-[#3A0E63] rounded-2xl shadow-2xl p-8 text-white text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-10 -mb-10"></div>
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Need Help Choosing the Right Product?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Our experts are here to assist you with your requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919636901159"
                className="inline-flex items-center gap-2 bg-white text-[#46127B] px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-white/10 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
