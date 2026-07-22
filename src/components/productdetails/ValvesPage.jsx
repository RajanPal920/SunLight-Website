import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import valves from "../../data/productCategories/valves";
import valvesImage from "../../assets/productsImage/valves.jpg";

const ValvesPage = () => {
  const navigate = useNavigate();

  // YOUR EXACT CONTACT DETAILS
  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
    address:
      "Office No. 8, Ground Floor, Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004",
    website: "www.sunlightforgefitting.com",
  };

  const { categorySlug } = useParams();

  // Get all valve products from the structured data
  const allValveProducts = valves.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allValveProducts.find(
    (item) => item.slug === "valves",
  );

  // All valve products for the sidebar
  const valveProducts = allValveProducts;

  const allDestinations = [
    "South Africa",
    "Dubai",
    "Saudi Arabia",
    "Morocco",
    "Turkey",
    "Vietnam",
    "Ethiopa",
    "Bahrain",
    "Colombia",
    "Israel",
    "London",
    "Indonesia",
    "Angola",
    "Africa",
    "Uganda",
    "Trinidad and Tobago",
    "Australia",
    "Cameroon",
    "Houston",
    "Venezuela",
    "Chine",
    "Thailand (Bangkok)",
    "Sri Lanka",
    "UK",
    "Mexico",
    "Nigeria",
    "Peru",
    "Russia",
    "Sudan",
    "Brazil",
    "Tunisia",
    "Canada",
    "New Zealand",
    "Iraq",
    "United States",
    "Algeria",
    "Democratic Republic of the Congo",
    "UAE",
    "Kazakhstan",
    "Iran",
    "Ghana",
    "Malaysia",
    "Argentina",
    "Italy",
    "Azerbaijan",
    "Mozambique",
    "Egypt",
  ];

  const allCities = [
    "Tripoli",
    "Muscat",
    "Colombo",
    "Mogadishu",
    "Antananarivo",
    "Khartoum",
    "Zaria",
    "Lagos",
    "Jeddah",
    "Lusaka",
    "Nairobi",
    "Abu Dhabi",
    "Omdurman",
    "Jerusalem",
    "Port Harcourt",
    "Kano",
    "Ouagadougou",
    "Singapore",
    "Durban",
    "New York",
    "Manama",
    "Harare",
    "Freetown",
    "Dubai",
    "Beirut",
    "Benin",
    "Casablanca",
    "Bulawayo",
    "Dakar",
    "Cairo",
    "Luanda",
    "Kampala",
    "Aqaba",
    "Soweto",
    "Addis Ababa",
    "Hong Kong",
    "Cape Town",
    "Fez",
    "Alexandria",
    "Dar es Salaam",
    "Kinshasa",
    "Maputo",
    "Pretoria",
    "Riyadh",
    "Cairo",
    "Byblos",
    "Yaoundé",
    "Conakry",
    "Subra al-Haymah",
    "Dammam",
    "Mbuji-Mayi",
    "Bethlehem",
    "Sharm el-Sheikh",
    "Amman",
    "Tehran",
    "Kolwezi",
    "Algiers",
    "Tel Aviv",
    "Lubumbashi",
    "Doha",
    "Kaduna",
    "Bamako",
    "Ibadan",
    "Abidjan",
    "Maiduguri",
    "Douala",
    "Brazzaville",
    "Mecca",
    "Istanbul",
    "Rabat",
    "Port Elizabeth",
    "Accra",
    "Johannesburg",
    "Giza",
  ];

  const productRange = [
    { name: "Pipes & Tubes", slug: "pipes-tubes" },
    { name: "Sheets & Plates", slug: "sheets-plates" },
    { name: "Round Bars", slug: "round-bars" },
    { name: "Flanges", slug: "flanges" },
    { name: "Buttweld Fittings", slug: "buttweld-fittings" },
    { name: "Socketweld Fittings", slug: "socketweld-fittings" },
    { name: "Fasteners", slug: "fasteners" },
    {
      name: "Refractory Fixings & Anchors",
      slug: "refractory-fixings-anchors",
    },
    { name: "Angles & Channels", slug: "angles-channels" },
    { name: "Tube Sheets", slug: "tube-sheets" },
    { name: "Ferrule Fittings", slug: "ferrule-fittings" },
    { name: "Cladded Plates", slug: "cladded-plates" },
    { name: "Olets", slug: "olets" },
    { name: "Valves", slug: "valves" },
    {
      name: "Graphite Filled Bronze Bush",
      slug: "graphite-filled-bronze-bush",
    },
    { name: "Billets", slug: "billets" },
  ];

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

  return (
    <>
      <Helmet>
        <title>
          Stainless Steel Valves | Industrial Valves | Sunlight Forge
        </title>
        <meta
          name="description"
          content="Stainless Steel Valves Manufacturer. Globe Valves, Gate Valves, Non-Return Valves, Strainer Valves, Butterfly Valves. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {valves.badge || "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* ===== VALVES SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      VALVES
                    </h4>
                    <ul className="space-y-0.5">
                      {valveProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/valves/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "valves"
                                ? "text-[#66BB6A] font-semibold bg-green-50 border-l-2 border-[#66BB6A]"
                                : ""
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ===== PRODUCT RANGE SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      PRODUCT RANGE
                    </h4>
                    <ul className="space-y-0.5">
                      {productRange.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "valves"
                                ? "text-[#66BB6A] font-semibold bg-green-50 border-l-2 border-[#66BB6A]"
                                : ""
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1 min-w-0 pt-4">
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/valves")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Valves
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${valvesImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Valves
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Globe Valves, Gate Valves, Non-Return
                      Valves, Strainer Valves, Butterfly Valves Supplier &
                      Exporter in India.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-5">
                      <a
                        href={`tel:${contactDetails.phone}`}
                        className="inline-flex items-center gap-2 bg-[#66BB6A] hover:bg-[#4CAF50] text-white font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/10"
                      >
                        <Mail className="w-4 h-4" />
                        Email Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={valvesImage}
                    alt="Stainless Steel Valves"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== GLOBE VALVES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Globe Valves Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Globe Valves
                </p>
                <p className="text-center text-sm text-slate-600 mb-4">
                  BS 5352/ BS 6755 / BS 1873 / BS6755 /ASME B 16.34 / DIN3356
                </p>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="space-y-3">
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Stainless Steel (BAR STOCK)
                        </span>
                        <br />
                        RATING: 150#/300#
                        <br />
                        SIZE: 8 MM TO 100 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Carbon Steel/Stainless Steel/Alloy Steel
                        </span>
                        <br />
                        RATING: 125#/150#
                        <br />
                        SIZE: 25 MM TO 600 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Forged Carbon Steel/Stainless Steel
                        </span>
                        <br />
                        RATING: 150#/300#/800#/1500#
                        <br />
                        SIZE: 15 MM TO 50 MM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        RATING: 150#/300#/600#/900#
                        <br />
                        SIZE: 15 MM TO 40 MM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-[#4A148C] mb-2">
                      Forged Range
                    </h4>
                    <p className="text-sm text-slate-700">
                      <strong>DESIGN (Mfg.) STD.:</strong> BS 5352
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>TEST (Inspection) STD.:</strong> BS 6755
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-[#4A148C] mb-2">
                      Cast Range
                    </h4>
                    <p className="text-sm text-slate-700">
                      <strong>DESIGN (Mfg.) STD.:</strong> BS 1873 / DIN 3356
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>TEST (Inspection) STD.:</strong> BS 6755
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== GATE VALVES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Gate Valves Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Gate Valves
                </p>
                <p className="text-center text-sm text-slate-600 mb-4">
                  BS 1414/ BS 5352/ API 600/ API 602 / API 6D / ASME B 16.34 /
                  API 598
                </p>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="space-y-3">
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Stainless Steel (BAR STOCK)
                        </span>
                        <br />
                        RATING: 150#/300#
                        <br />
                        SIZE: 8 MM TO 100 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Forged Carbon Steel/Stainless Steel
                        </span>
                        <br />
                        RATING: 150#/300#/800#/1500#
                        <br />
                        SIZE: 15 MM TO 50 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Carbon Steel/Stainless Steel/Alloy Steel
                        </span>
                        <br />
                        RATING: 150#/300#/600#/900#
                        <br />
                        SIZE: 15 MM TO 600 MM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        RATING: 125#/150#
                        <br />
                        SIZE: 25 MM TO 600 MM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-[#4A148C] mb-2">
                      Forged Range
                    </h4>
                    <p className="text-sm text-slate-700">
                      <strong>PRESSURE/TEMP. RATING:</strong> ANSI B 16.34/ API
                      6D
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>DESIGN (Mfg.) STD.:</strong> API 602/BS 5352
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>TEST (Inspection) STD.:</strong> API 598/BS 6755
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-[#4A148C] mb-2">
                      Cast Range
                    </h4>
                    <p className="text-sm text-slate-700">
                      <strong>PRESSURE/TEMP. RATING:</strong> ANSI B 16.34
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>DESIGN (Mfg.) STD.:</strong> API 600/ API 6D
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>TEST (Inspection) STD.:</strong> API 598/API 6D
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== NON-RETURN VALVES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Non Return Valves Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Non Return Valves
                </p>
                <p className="text-center text-sm text-slate-600 mb-4">
                  BS 6755/ BS 1868/ ASME B 16.34 / API 6D
                </p>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="space-y-3">
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Stainless Steel (BAR STOCK)
                        </span>
                        <br />
                        RATING: 150#/300#
                        <br />
                        SIZE: 8 MM TO 100 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Forged Carbon Steel/Stainless Steel
                        </span>
                        <br />
                        RATING: 150#/300#/800#/1500#
                        <br />
                        SIZE: 15 MM TO 50 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        RATING: 125#/150#
                        <br />
                        SIZE: 25 MM TO 600 MM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron Carbon Steel/Stainless Steel/Alloy Steel
                        </span>
                        <br />
                        RATING: 150#/300#/600#/900#
                        <br />
                        SIZE: 15 MM TO 600 MM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-[#4A148C] mb-2">
                      Forged Range
                    </h4>
                    <p className="text-sm text-slate-700">
                      <strong>DESIGN (Mfg.) STD.:</strong> BS 5352
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>TEST (Inspection) STD.:</strong> BS 6755
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-[#4A148C] mb-2">
                      Cast Range
                    </h4>
                    <p className="text-sm text-slate-700">
                      <strong>DESIGN (Mfg.) STD.:</strong> BS 1868/API 6D
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong>TEST (Inspection) STD.:</strong> BS 6755/API 6D
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== STRAINER VALVES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Strainer Valves Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Strainer
                </p>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="space-y-3">
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Carbon Steel
                        </span>
                        <br />
                        DESIGN: Y TYPE (PN40 / DIN3356/ BS 1873)
                        <br />
                        SIZE: 15 MM TO 80 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Stainless Steel (BAR STOCK)
                        </span>
                        <br />
                        DESIGN : Y-TYPE (1501#)
                        <br />
                        ENDS: SCREWED/SOCKET WELD
                        <br />
                        SIZE : 15 MM TO 80 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        DESIGN: Y-TYPE (150#)
                        <br />
                        ENDS: SCREWED/FLANGED
                        <br />
                        SIZE: 15 MM TO 300 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        DESIGN: POT TYPE
                        <br />
                        ENDS: FLANGED
                        <br />
                        SIZE: 40 MM TO 300 MM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        DESIGN: T-TYPE (DIRT BOX)
                        <br />
                        ENDS: FLANGED
                        <br />
                        SIZE: 25 MM TO 300 MM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== BUTTERFLY VALVES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Butterfly Valves Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Butterfly Valves
                </p>
                <p className="text-center text-sm text-slate-600 mb-2">
                  API 609/ BS 5152/ IS 13095
                </p>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Mfg. STD : BS 3155/AWWA C 504/API 609/ IS13095
                  <br />
                  TEST STD. : BS 5155/BS6755
                </p>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="space-y-3">
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Carbon Steel
                        </span>
                        <br />
                        OPERATION: Lever/Manual Gear
                        <br />
                        DESIGN: Sureseal/Replaceable/ Rubber Lining
                        <br />
                        ENDS: Water Type
                        <br />
                        SIZE: 40 MM TO 500 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Carbon Steel
                        </span>
                        <br />
                        DESIGN: Offset Disc
                        <br />
                        OPERATION: Lever/Gear(ISI Marked)
                        <br />
                        ENDS: Water Type/ Double Flanged/ Lugged Type
                        <br />
                        SIZE: 350 MM TO 1200 MM
                      </p>
                    </div>
                    <div className="border-b border-green-200 pb-2">
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Cast Iron
                        </span>
                        <br />
                        DESIGN: Sureseal/Replaceable/ Rubber Lining
                        <br />
                        ENDS: Water Type
                        <br />
                        SIZE: 40 MM TO 300 MM
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">
                        <span className="font-bold text-[#4A148C]">
                          Stainless Steel
                        </span>
                        <br />
                        DESIGN : Offset Disc
                        <br />
                        Operation: Lever/Manual Gear/ Motorised Gear
                        <br />
                        ENDS: Water Type
                        <br />
                        SIZE : 40 MM TO 300 MM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Box */}
              <div className="mt-8">
                <div className="bg-[#4A148C] text-white rounded-2xl p-6 sm:p-8 text-center">
                  <p className="text-lg font-medium">
                    <Phone className="inline-block w-5 h-5 mr-2 text-[#66BB6A]" />
                    Call {contactDetails.phone} &nbsp;&nbsp; OR &nbsp;&nbsp;
                    <Mail className="inline-block w-5 h-5 mr-2 text-[#66BB6A]" />
                    Email us at{" "}
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="text-[#66BB6A] hover:underline font-bold"
                    >
                      {contactDetails.email}
                    </a>{" "}
                    for quick response
                  </p>
                </div>
              </div>

              {/* Export Destinations */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  EXPORT DESTINATIONS FOR STEEL VALVES, SS VALVES, STAINLESS
                  STEEL VALVES, STEEL GLOBE VALVES, BALL & GATE VALVES,
                  BUTTERFLY VALVES
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {allDestinations.map((country, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {allCities.map((city, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-4 text-center">
                    <Globe className="inline-block w-3 h-3 mr-1" /> Serving
                    customers across the globe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call and WhatsApp Buttons */}
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
    </>
  );
};

export default ValvesPage;
