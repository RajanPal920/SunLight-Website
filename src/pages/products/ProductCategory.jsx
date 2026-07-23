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
  Sparkles,
  CheckCircle2,
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
      <div className="container mx-auto px-4 py-16 min-h-[70vh] flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-md w-full border border-gray-100 text-center">
          <div className="w-20 h-20 bg-[#46127B]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#46127B]">
            <Package className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Category Not Found
          </h2>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            The category you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center w-full bg-[#46127B] text-white font-medium px-6 py-3.5 rounded-2xl hover:bg-[#3a0e68] transition-all duration-300 shadow-md hover:shadow-lg shadow-[#46127B]/20 active:scale-[0.98]"
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
      <div className="bg-slate-50/60 min-h-screen py-6 sm:py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm mb-6 mt-2 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xs border border-gray-100 text-gray-600 flex-wrap">
            <Link
              to="/"
              className="text-gray-500 hover:text-[#46127B] transition-colors flex items-center gap-1"
            >
              <Home size={15} />
            </Link>
            <ChevronRight size={14} className="text-gray-400 shrink-0" />
            <Link
              to="/products"
              className="text-gray-500 hover:text-[#46127B] transition-colors"
            >
              Products
            </Link>
            <ChevronRight size={14} className="text-gray-400 shrink-0" />
            <span className="text-[#46127B] font-semibold truncate">
              {categoryData.name || "Sheets & Plates"}
            </span>
          </nav>

          {/* Category Header */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#46127B] via-[#5B1A9E] to-[#3A0E63] rounded-3xl shadow-xl p-6 sm:p-10 mb-8 text-white">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-400/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                  {categoryData.name || "Sheets & Plates"}
                </h1>
                <p className="text-purple-100/90 max-w-2xl text-sm sm:text-base leading-relaxed">
                  {categoryData.shortDescription ||
                    "High-quality sheets, plates, and coils in various materials and grades."}
                </p>
              </div>
              <div className="flex items-center self-start md:self-auto shrink-0">
                <span className="bg-white/15 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border border-white/20 shadow-inner">
                  {categoryData.length} Products
                </span>
              </div>
            </div>
          </div>

          {/* Search and View Controls */}
          <div className="bg-white rounded-2xl shadow-sm p-3.5 sm:p-4 mb-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row gap-3">
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
                  className="w-full pl-11 pr-4 py-2.5 text-sm sm:text-base bg-slate-50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#46127B]/30 focus:border-[#46127B] transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="flex gap-2 self-end sm:self-auto shrink-0">
                <button
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid View"
                  className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-[#46127B] text-white shadow-md shadow-[#46127B]/25"
                      : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  aria-label="List View"
                  className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-[#46127B] text-white shadow-md shadow-[#46127B]/25"
                      : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid / List */}
          {filteredItems.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(`/products/${categoryData.slug}/${item.slug}`)
                    }
                    className="group cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-gray-100 flex flex-col h-full overflow-hidden"
                  >
                    <div className="h-48 sm:h-52 overflow-hidden bg-slate-100 relative shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white group-hover:bg-[#46127B] transition-colors duration-300">
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors text-base sm:text-lg line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 group-hover:text-white/80 mt-1.5 line-clamp-2 leading-relaxed transition-colors duration-300">
                          {item.shortDescription}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 group-hover:border-white/10 flex items-center justify-between text-[#46127B] group-hover:text-white text-xs sm:text-sm font-semibold transition-all">
                        <span>View Details</span>
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
              <div className="space-y-3 sm:space-y-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(`/products/${categoryData.slug}/${item.slug}`)
                    }
                    className="group cursor-pointer bg-white rounded-2xl shadow-sm p-3.5 sm:p-5 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-gray-100"
                  >
                    <div className="w-full sm:w-28 h-40 sm:h-28 bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 group-hover:text-[#46127B] transition-colors text-base sm:text-lg truncate">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                        {item.shortDescription}
                      </p>
                    </div>
                    <div className="self-end sm:self-auto flex items-center gap-1 text-[#46127B] font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform shrink-0">
                      <span>View</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-12 sm:py-16 bg-white rounded-3xl shadow-sm border border-gray-100 px-4">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Package size={32} />
              </div>
              <p className="text-gray-600 font-medium">
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
    <div className="bg-slate-50/60 min-h-screen py-6 sm:py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs sm:text-sm mb-6 mt-2 bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xs border border-gray-100 text-gray-600 flex-wrap">
          <Link
            to="/"
            className="text-gray-500 hover:text-[#46127B] transition-colors flex items-center gap-1"
          >
            <Home size={15} />
          </Link>
          <ChevronRight size={14} className="text-gray-400 shrink-0" />
          <Link
            to="/products"
            className="text-gray-500 hover:text-[#46127B] transition-colors"
          >
            Products
          </Link>
          <ChevronRight size={14} className="text-gray-400 shrink-0" />
          <span className="text-[#46127B] font-semibold truncate">
            {categoryData.name}
          </span>
        </nav>

        {/* Category Header */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#46127B] via-[#5B1A9E] to-[#3A0E63] rounded-3xl shadow-xl p-6 sm:p-10 mb-8 text-white">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-400/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              {categoryData.badge && (
                <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
                  <Sparkles size={13} className="text-purple-200" />
                  {categoryData.badge}
                </span>
              )}
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                {categoryData.name}
              </h1>
              <p className="text-purple-100/90 max-w-2xl text-sm sm:text-base leading-relaxed">
                {categoryData.shortDescription || categoryData.longDescription}
              </p>
            </div>
            <div className="flex items-center self-start md:self-auto shrink-0">
              <span className="bg-white/15 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border border-white/20 shadow-inner">
                {allTypes.length} Products
              </span>
            </div>
          </div>
        </div>

        {/* Category Specifications */}
        {categoryData.specifications && (
          <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-6 mb-8 border border-gray-100">
            <h3 className="text-xs font-bold text-[#46127B] uppercase tracking-wider mb-4">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {Object.entries(categoryData.specifications).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-[11px] text-gray-500 uppercase font-semibold tracking-wider block">
                      {key}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-800 mt-1 font-semibold">
                      {value}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        )}

        {/* Search and View Controls */}
        <div className="bg-white rounded-2xl shadow-sm p-3.5 sm:p-4 mb-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-3">
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
                className="w-full pl-11 pr-4 py-2.5 text-sm sm:text-base bg-slate-50 border border-gray-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#46127B]/30 focus:border-[#46127B] transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="flex gap-2 self-end sm:self-auto shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#46127B] text-white shadow-md shadow-[#46127B]/25"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                aria-label="List View"
                className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-[#46127B] text-white shadow-md shadow-[#46127B]/25"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Categories with Types */}
        {subCategories.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
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
                  className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-[#46127B] to-[#5B1A9E] px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        {subCategory.image && (
                          <img
                            src={subCategory.image}
                            alt={subCategory.title}
                            className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-2xl border-2 border-white/20 shrink-0"
                          />
                        )}
                        <div>
                          <h2 className="text-lg sm:text-xl font-bold text-white">
                            {subCategory.title}
                          </h2>
                          {subCategory.description && (
                            <p className="text-purple-100/80 text-xs sm:text-sm line-clamp-1">
                              {subCategory.description}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="self-start sm:self-auto bg-white/15 backdrop-blur-md text-white text-xs px-3.5 py-1 rounded-full border border-white/20 shrink-0">
                        {typesToShow.length} items
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    {viewMode === "grid" ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                        {typesToShow.map((type) => (
                          <div
                            key={`${subCategory.id}-${type.id}`}
                            onClick={() =>
                              navigate(
                                `/products/${categoryData.slug}/${type.slug}`,
                              )
                            }
                            className="group cursor-pointer bg-slate-50/80 rounded-2xl p-4 sm:p-5 hover:bg-[#46127B] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 flex flex-col justify-between"
                          >
                            <div>
                              <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors text-sm sm:text-base">
                                {type.title}
                              </h3>
                              {type.specs && type.specs.length > 0 && (
                                <p className="text-xs text-gray-500 group-hover:text-purple-200 mt-1.5 line-clamp-2 leading-relaxed">
                                  {type.specs[0]}
                                </p>
                              )}
                            </div>
                            <div className="mt-4 pt-3 border-t border-gray-200/60 group-hover:border-white/10 flex items-center justify-between text-[#46127B] group-hover:text-white text-xs font-semibold">
                              <span>View Details</span>
                              <ArrowRight
                                size={15}
                                className="group-hover:translate-x-1 transition-transform"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {typesToShow.map((type) => (
                          <div
                            key={`${subCategory.id}-${type.id}`}
                            onClick={() =>
                              navigate(
                                `/products/${categoryData.slug}/${type.slug}`,
                              )
                            }
                            className="group cursor-pointer bg-slate-50/80 rounded-2xl p-3.5 sm:p-4 hover:bg-[#46127B] transition-all duration-200 flex items-center justify-between border border-slate-100"
                          >
                            <div className="pr-2">
                              <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors text-sm sm:text-base">
                                {type.title}
                              </h3>
                              {type.specs && type.specs.length > 0 && (
                                <p className="text-xs text-gray-500 group-hover:text-purple-200 mt-0.5 line-clamp-1">
                                  {type.specs[0]}
                                </p>
                              )}
                            </div>
                            <ArrowRight
                              size={18}
                              className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0"
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
          <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-8 border border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              All Products
            </h2>
            {filteredTypes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {filteredTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() =>
                      navigate(`/products/${categoryData.slug}/${type.slug}`)
                    }
                    className="group cursor-pointer bg-slate-50/80 rounded-2xl p-4 sm:p-5 hover:bg-[#46127B] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-slate-100 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors text-sm sm:text-base">
                        {type.title}
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-200/60 group-hover:border-white/10 flex items-center justify-between text-[#46127B] group-hover:text-white text-xs font-semibold">
                      <span>View Details</span>
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-400">
                  <Package size={32} />
                </div>
                <p className="text-gray-600 font-medium">
                  No products found matching your search
                </p>
              </div>
            )}
          </div>
        )}

        {/* Applications */}
        {categoryData.applications && categoryData.applications.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-6 mt-6 sm:mt-8 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
              Applications
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {categoryData.applications.map((app, index) => (
                <span
                  key={`app-${index}`}
                  className="px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#46127B]/10 text-[#46127B] rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#46127B]/20 transition-colors"
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {categoryData.features && categoryData.features.length > 0 && (
          <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-6 mt-6 border border-gray-100">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
              {categoryData.features.map((feature, index) => (
                <li
                  key={`feature-${index}`}
                  className="flex items-center gap-3 text-gray-700 bg-slate-50 rounded-2xl px-4 py-3 text-xs sm:text-sm border border-slate-100/80"
                >
                  <CheckCircle2 size={18} className="text-[#46127B] shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Export Destinations */}
        {categoryData.exportDestinations &&
          categoryData.exportDestinations.length > 0 && (
            <div className="bg-white rounded-3xl shadow-sm p-5 sm:p-6 mt-6 border border-gray-100">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                Export Destinations
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryData.exportDestinations
                  .slice(0, 30)
                  .map((dest, index) => (
                    <span
                      key={`dest-${index}`}
                      className="px-3 py-1.5 bg-slate-100/80 text-gray-700 rounded-xl text-xs font-medium hover:bg-slate-200/80 transition-colors"
                    >
                      {dest}
                    </span>
                  ))}
                {categoryData.exportDestinations.length > 30 && (
                  <span className="px-3 py-1.5 bg-[#46127B]/10 text-[#46127B] rounded-xl text-xs font-semibold">
                    +{categoryData.exportDestinations.length - 30} more
                  </span>
                )}
              </div>
            </div>
          )}

    
        {/* Explore Other Categories - Mobile-Optimized Design */}
        <div className="mt-8 sm:mt-12 bg-white rounded-3xl shadow-sm p-4 sm:p-8 border border-gray-100/80 relative overflow-hidden">
          {/* Ambient Background Blur Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#46127B]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-8 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-5 sm:w-2 sm:h-6 bg-[#46127B] rounded-full inline-block shrink-0"></span>
                <h3 className="text-lg sm:text-2xl font-extrabold text-gray-900 tracking-tight">
                  Explore Other Categories
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 pl-3.5 sm:pl-4">
                Discover more high-grade industrial materials and custom
                solutions.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 self-start sm:self-auto px-3.5 py-2 bg-[#46127B]/10 hover:bg-[#46127B] text-[#46127B] hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 group shadow-xs hover:shadow-md"
            >
              <span>View All Categories</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10">
            {allCategories
              .filter((c) => {
                const cSlug = c.slug || c.name;
                return cSlug !== category;
              })
              .slice(0, 8)
              .map((cat, idx) => {
                const itemCount =
                  cat.categories?.length ||
                  (Array.isArray(cat) ? cat.length : null);

                return (
                  <Link
                    key={cat.id || cat.slug || `cat-${idx}`}
                    to={`/products/${
                      cat.slug ||
                      cat.name?.toLowerCase().replace(/\s+/g, "-") ||
                      ""
                    }`}
                    className="group relative flex flex-row sm:flex-col items-center sm:items-stretch justify-between min-h-[4.5rem] sm:h-36 p-3.5 sm:p-5 bg-[#F8F6FC] sm:bg-gradient-to-br sm:from-slate-50 sm:via-purple-50/30 sm:to-slate-50 hover:bg-[#46127B] sm:hover:from-[#46127B] sm:hover:to-[#3A0E63] rounded-2xl border border-purple-100/60 sm:border-gray-100 hover:border-transparent hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Top Row / Left Content */}
                    <div className="flex items-center gap-3 sm:justify-between min-w-0 pr-2 sm:pr-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white shadow-xs group-hover:bg-white/15 group-hover:backdrop-blur-md flex items-center justify-center border border-purple-100 group-hover:border-white/20 transition-all duration-300 shrink-0">
                        <Package
                          size={18}
                          className="text-[#46127B] group-hover:text-white transition-colors duration-300"
                        />
                      </div>

                      {/* Title & Meta on Mobile */}
                      <div className="min-w-0 flex-1 sm:hidden">
                        <h4 className="font-bold text-gray-900 group-hover:text-white text-sm transition-colors duration-300 truncate">
                          {cat.name || cat.title || "Category"}
                        </h4>
                        {itemCount ? (
                          <span className="text-[11px] font-medium text-purple-900/70 group-hover:text-purple-200 transition-colors block mt-0.5">
                            {itemCount}{" "}
                            {itemCount === 1 ? "Subcategory" : "Subcategories"}
                          </span>
                        ) : (
                          <span className="text-[11px] font-medium text-purple-800/60 group-hover:text-purple-200 transition-colors block mt-0.5">
                            Explore Products
                          </span>
                        )}
                      </div>

                      {/* Desktop Arrow */}
                      <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/0 group-hover:bg-white/20 items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300">
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </div>
                    </div>

                    {/* Bottom Row / Title on Desktop */}
                    <div className="hidden sm:block">
                      <h4 className="font-bold text-gray-900 group-hover:text-white text-sm sm:text-base transition-colors duration-300 line-clamp-1">
                        {cat.name || cat.title || "Category"}
                      </h4>

                      {itemCount ? (
                        <span className="text-[11px] font-medium text-gray-500 group-hover:text-purple-200/80 transition-colors block mt-0.5">
                          {itemCount}{" "}
                          {itemCount === 1 ? "Subcategory" : "Subcategories"}
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium text-gray-400 group-hover:text-purple-200/80 transition-colors block mt-0.5">
                          Explore Products
                        </span>
                      )}
                    </div>

                    {/* Mobile Arrow */}
                    <div className="sm:hidden w-7 h-7 rounded-full bg-white group-hover:bg-white/20 flex items-center justify-center text-[#46127B] group-hover:text-white shadow-xs transition-all duration-300 shrink-0">
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 relative overflow-hidden bg-gradient-to-br from-[#46127B] via-[#5B1A9E] to-[#3A0E63] rounded-3xl shadow-xl p-6 sm:p-10 text-white text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
          <div className="relative max-w-xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-extrabold mb-2 sm:mb-3">
              Need Help Choosing the Right Product?
            </h3>
            <p className="text-purple-100/90 mb-6 text-xs sm:text-base">
              Our technical experts are here to assist you with your specific
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+919636901159"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#46127B] px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all shadow-md active:scale-[0.98]"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3.5 rounded-2xl font-bold text-sm hover:bg-white/20 transition-all shadow-md active:scale-[0.98]"
              >
                <Mail size={16} />
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
