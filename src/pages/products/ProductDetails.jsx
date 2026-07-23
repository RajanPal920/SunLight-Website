// src/pages/products/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Home,
  Package,
  Phone,
  Mail,
  ArrowLeft,
  Check,
  PhoneCall, // Added PhoneCall
} from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md"; // Added WhatsApp icon
import { getCategoryBySlug } from "../../data/productCategories";
// FIX: Import from the correct location
import productDetailsMap from "../../components/productdetails/index";

const ProductDetails = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [parentCategory, setParentCategory] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
  };

  // Floating button styles
  const floatingStyles = {
    container: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      zIndex: 9999,
    },
    button: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "none",
      textDecoration: "none",
      color: "white",
      fontSize: "24px",
    },
    call: {
      backgroundColor: "blue",
    },
    whatsapp: {
      backgroundColor: "#25D366",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Category from URL:", category);
    console.log("Slug from URL:", slug);

    const data = getCategoryBySlug(category);
    console.log("Category Data:", data);
    setCategoryData(data);

    if (data) {
      // If category is a simple array (like sheets-plates)
      if (Array.isArray(data)) {
        const foundProduct = data.find((item) => item.slug === slug);
        console.log("Found Product (Simple Array):", foundProduct);
        if (foundProduct) {
          setProduct(foundProduct);
          const related = data.filter((item) => item.slug !== slug);
          setRelatedProducts(related.slice(0, 4));
        }
        return;
      }

      // Complex category with nested types (like pipes-tubes)
      if (data.categories) {
        let foundProduct = null;
        let foundParent = null;

        for (const subCategory of data.categories) {
          if (subCategory.types) {
            const found = subCategory.types.find((t) => t.slug === slug);
            if (found) {
              foundProduct = found;
              foundParent = subCategory;
              break;
            }
          }
        }

        console.log("Found Product (Complex):", foundProduct);
        console.log("Found Parent:", foundParent);

        setProduct(foundProduct);
        setParentCategory(foundParent);

        if (foundParent && foundParent.types) {
          const related = foundParent.types.filter((t) => t.slug !== slug);
          setRelatedProducts(related.slice(0, 4));
        }
      }
    }
  }, [category, slug]);

  // Check if we have a specialized component for this slug
  const SpecializedComponent = productDetailsMap[slug];
  console.log("Specialized Component:", SpecializedComponent);

  // If we have a specialized component, render it
  if (SpecializedComponent) {
    console.log("Rendering specialized component for:", slug);
    return <SpecializedComponent />;
  }

  // If no product found, show not found
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-4">
            Product "{slug}" not found in category "{category}".
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-block bg-[#46127B] text-white px-6 py-3 rounded-lg hover:bg-[#46127B]/90"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Default product detail view
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <ArrowLeft size={18} />
            Back
          </button>
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 bg-white p-3 rounded-lg shadow-sm flex-wrap">
          <Link to="/" className="text-gray-500 hover:text-[#46127B]">
            <Home size={16} className="inline" />
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link to="/products" className="text-gray-500 hover:text-[#46127B]">
            Products
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <Link
            to={`/products/${category}`}
            className="text-gray-500 hover:text-[#46127B]"
          >
            {categoryData?.name || category}
          </Link>
          <ChevronRight size={14} className="text-gray-400" />
          <span className="text-[#46127B] font-medium">{product.title}</span>
        </nav>

        {/* Product Image */}
        <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-2xl h-auto object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Product Main Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="mb-4">
              {parentCategory && (
                <span className="text-sm text-[#46127B] font-medium bg-[#46127B]/10 px-3 py-1 rounded-full">
                  {parentCategory.title}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-800 mt-3 mb-2">
                {product.title}
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.shortDescription || product.description}
            </p>

            {product.specs && product.specs.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Specifications
                </h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <Check
                        size={16}
                        className="text-[#46127B] mt-0.5 flex-shrink-0"
                      />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={`tel:${contactDetails.phone}`}
                className="flex items-center gap-2 bg-[#46127B] text-white px-6 py-3 rounded-lg hover:bg-[#46127B]/90 transition-colors"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex items-center gap-2 border-2 border-[#46127B] text-[#46127B] px-6 py-3 rounded-lg hover:bg-[#46127B] hover:text-white transition-colors"
              >
                <Mail size={18} />
                Email Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Related Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/products/${category}/${related.slug}`}
                  className="group block bg-gray-50 rounded-lg p-4 hover:bg-green-100 hover:border-[#66BB6A] border-2 border-transparent transition-all duration-300"
                >
                  {related.image && (
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                  )}
                  <h4 className="font-medium text-gray-800 group-hover:text-[#4A148C]">
                    {related.title}
                  </h4>
                  <div className="mt-2 text-[#46127B] group-hover:text-[#66BB6A] text-sm font-medium">
                    View Details →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-[#46127B] to-[#03A58D] rounded-lg p-6 text-white text-center">
          <h3 className="text-xl font-bold mb-2">Need More Information?</h3>
          <p className="text-white/90 mb-4">
            Contact our team for detailed technical specifications and custom
            requirements
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${contactDetails.phone}`}
              className="bg-white text-[#46127B] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone size={18} className="inline mr-2" />
              Call Now
            </a>
            <a
              href={`mailto:${contactDetails.email}`}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Mail size={18} className="inline mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* ===== FLOATING CALL AND WHATSAPP BUTTONS ===== */}
      <div style={floatingStyles.container}>
        {/* Call Button */}
        <a
          href={`tel:${contactDetails.phone}`}
          style={{
            ...floatingStyles.button,
            backgroundColor: floatingStyles.call.backgroundColor,
          }}
          className="hover:scale-110 transition-transform duration-300"
          aria-label="Call us"
        >
          <PhoneCall size={28} />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${contactDetails.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...floatingStyles.button,
            backgroundColor: floatingStyles.whatsapp.backgroundColor,
          }}
          className="hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MdOutlineWhatsapp size={28} />
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
