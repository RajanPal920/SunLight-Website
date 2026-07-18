// src/pages/ProductCategory/ProductCategory.jsx

import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Package } from "lucide-react";
import products from "../data/products";
import productCategory from "../data/productCategories/index"

const ProductCategory = () => {
  const { category } = useParams();

  // Find the category by slug
  const productCategory = products.find((p) => p.slug === category);

  if (!productCategory) {
    return (
      <div className="min-h-screen pt-[110px] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#46127B]">
            Category not found
          </h1>
          <Link
            to="/products"
            className="text-[#03A58D] hover:underline mt-4 inline-block"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const Icon = productCategory.icon;

  return (
    <>
      <Helmet>
        <title>
          {productCategory.name} | Sunlight Forge & Fitting Pvt. Ltd.
        </title>
        <meta name="description" content={productCategory.description} />
      </Helmet>

      <div className="min-h-screen pt-[110px] xs:pt-[115px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px] bg-slate-50">
        {/* Category Header */}
        <div className="bg-gradient-to-r from-[#46127B] to-[#320D5A] py-8 sm:py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>

            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                  <Icon size={32} className="text-[#03A58D]" />
                </div>
                <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-white">
                  {productCategory.name}
                </h1>
              </div>
              <p className="font-poppins text-base sm:text-lg text-white/80 max-w-2xl">
                {productCategory.description}
              </p>
              <div className="flex gap-1.5 justify-center mt-4">
                <span className="block h-1 w-10 rounded-full bg-[#03A58D]" />
                <span className="block h-1 w-4 rounded-full bg-white/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Types Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {productCategory.types && productCategory.types.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {productCategory.types.map((type) => (
                <Link
                  key={type.id}
                  to={`/products/${productCategory.slug}/${type.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 hover:border-[#03A58D]"
                >
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#46127B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#46127B]/80 to-transparent">
                      <span className="text-white text-xs font-semibold">
                        {productCategory.name}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-poppins font-bold text-sm sm:text-base text-[#46127B] group-hover:text-[#03A58D] transition-colors line-clamp-2">
                      {type.title}
                    </h3>

                    <p className="font-poppins text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                      {type.shortDescription}
                    </p>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
                      <span className="text-xs font-semibold text-[#46127B] group-hover:text-[#03A58D] transition-colors flex items-center gap-1">
                        View Details
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm">
              <Package className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#46127B] mb-2">
                No products in this category
              </h3>
              <p className="text-slate-500">Check back later for updates</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCategory;
