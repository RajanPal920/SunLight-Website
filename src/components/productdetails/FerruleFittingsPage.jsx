import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import ferruleFittings from "../../data/productCategories/ferrule-fittings";
import ferruleImage from "../../assets/productsImage/ferrule-fittings1.jpg";

const FerruleFittingsPage = () => {
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

  // Get all ferrule fitting products from the structured data
  const allFerruleProducts = ferruleFittings.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allFerruleProducts.find(
    (item) => item.slug === "ferrule-fittings",
  );

  // All ferrule products for the sidebar
  const ferruleProducts = allFerruleProducts;

  const allDestinations = [
    "Mozambique",
    "Turkey",
    "Colombia",
    "Egypt",
    "Algeria",
    "Brazil",
    "Jordan",
    "Iraq",
    "Angola",
    "Kazakhstan",
    "Venezuela",
    "UAE",
    "Iran",
    "Chine",
    "Dubai",
    "Canada",
    "Italy",
    "Kuwait",
    "Germany",
    "Russia",
    "Argentina",
    "Houston",
    "Morocco",
    "Israel",
    "Ghana",
    "Ethiopa",
    "Uganda",
    "London",
    "Thailand (Bangkok)",
    "Cameroon",
    "Bahrain",
    "Malaysia",
    "Trinidad and Tobago",
    "Mexico",
    "Sri Lanka",
    "New Zealand",
    "Tunisia",
    "United States",
    "Sudan",
    "Saudi Arabia",
    "UK",
    "Australia",
    "Azerbaijan",
    "Vietnam",
    "Africa",
    "Nigeria",
    "Democratic Republic of the Congo",
  ];

  const allCities = [
    "Amman",
    "Lubumbashi",
    "New York",
    "Istanbul",
    "Addis Ababa",
    "Mbuji-Mayi",
    "Ibadan",
    "Pretoria",
    "Muscat",
    "Casablanca",
    "Dar es Salaam",
    "Benin",
    "Tehran",
    "Kampala",
    "Algiers",
    "Mogadishu",
    "Jeddah",
    "Khartoum",
    "Port Harcourt",
    "Soweto",
    "Dakar",
    "Doha",
    "Zaria",
    "Sharm el-Sheikh",
    "Bamako",
    "Lagos",
    "Colombo",
    "Lusaka",
    "Singapore",
    "Accra",
    "Kaduna",
    "Dammam",
    "Subra al-Haymah",
    "Dubai",
    "Douala",
    "Aqaba",
    "Maiduguri",
    "Abu Dhabi",
    "Bethlehem",
    "Luanda",
    "Antananarivo",
    "Conakry",
    "Alexandria",
    "Manama",
    "Kano",
    "Abidjan",
    "Yaoundé",
    "Bulawayo",
    "Kolwezi",
    "Johannesburg",
    "Ouagadougou",
    "Fez",
    "Port Elizabeth",
    "Nairobi",
    "Hong Kong",
    "Riyadh",
    "Cairo",
    "Mecca",
    "Jerusalem",
    "Kinshasa",
    "Harare",
    "Cape Town",
    "Omdurman",
    "Freetown",
    "Tripoli",
    "Durban",
    "Maputo",
    "Cairo",
    "Beirut",
    "Rabat",
    "Tel Aviv",
    "Brazzaville",
    "Byblos",
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
          Ferrule Fittings | Instrumentation Fittings | Sunlight Forge
        </title>
        <meta
          name="description"
          content="Ferrule Fittings Manufacturer. Stainless Steel Ferrule Fittings, Carbon Steel Ferrule Fittings, Alloy Steel Ferrule Fittings, High Nickel Alloy Ferrule Fittings. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {ferruleFittings.badge ||
                  "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {/* ===== FERRULE FITTINGS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      FERRULE FITTINGS
                    </h4>
                    <ul className="space-y-0.5">
                      {ferruleProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/ferrule-fittings/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "ferrule-fittings"
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
                              item.slug === "ferrule-fittings"
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
                  onClick={() => navigate("/products/ferrule-fittings")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Ferrule Fittings
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${ferruleImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Ferrule Fittings
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Ferrule Fittings, Carbon Steel Ferrule
                      Fittings, Alloy Steel Ferrule Fittings, High Nickel Alloy
                      Ferrule Fittings Supplier & Exporter in India.
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
                    src={ferruleImage}
                    alt="Ferrule Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Ferrule Fittings / Instrumentation Fittings
                </p>
                <p>
                  Stainless Steel Ferrule Fittings Manufacturer, Carbon Steel
                  Ferrule Fittings Supplier, Alloy Steel Instrumentation
                  Fittings Exporter in India.
                </p>
              </div>

              {/* Dairy Fittings Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Dairy Fittings
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    The company offers comprehensive range of superior quality
                    Dairy Fittings in which finest materials are used. We have
                    carved out a niche for our self as Dairy Steel providers at
                    reasonable prices. This line consists of Tri-Clover parts
                    with either Tri-Weld ends suitable for use with orbital
                    welding equipment or self-aligning Tri-clamp and
                    connections.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-slate-700">
                      <strong className="text-[#4A148C]">
                        Material Of Construction :
                      </strong>{" "}
                      304, 304L, 316, 316L etc
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong className="text-[#4A148C]">Finish :</strong>{" "}
                      Mechanical Polish as well as Electropolish finishes.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong className="text-[#4A148C]">Types :</strong>{" "}
                      Seamless & Welded
                    </p>
                  </div>
                </div>
              </div>

              {/* Ferrule Fittings Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Ferrule Fittings
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    We are engaged in importing and supplying a wide range of
                    Ferrule Fittings that is available in different grades and
                    specifications. These are sourced from authentic vendors,
                    who use latest technology and quality raw material in the
                    production process of forged pipe fittings to make these in
                    accordance with industry standards. Featuring dimensional
                    accuracy, high tensile strength, and corrosion resistance,
                    these pipe fittings can be easily fitted in the pipe. These
                    fittings are extensively used in diverse industries such as
                    Oil & Gas, Cement, Fertilizers and Petrochemicals. We are
                    known for our Ferrule Fittings etc.
                  </p>
                </div>
              </div>

              {/* Material Grades */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Material Grades
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700">
                    Stainless Steel, Nickel Alloys, Carbon Steel, Alloy Steel,
                    Monel, Nickel, Inconel, Hastelloy, Copper, Brass, Bronze,
                    Titanium, Tantalum, Bismuth, Aluminium, High Speed Steel,
                    Zinc, Lead, Etc.
                  </p>
                </div>
              </div>

              {/* Types */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 mb-2">
                    Nipples, Adaptors, Crosses, Union Ball Joints, Reducing
                    Bushing, Reducers, Pipe Caps, Couplings, Pipe Plug, Hollow
                    Hex Plug, Elbow, Reducing Union, 90 Deg. Union Elbow,
                    Reducing 90 Deg. Union Elbow, Extender Leg 90 Deg. Union
                    Elbow, 45 Deg. Union Elbow, Union Tee, Female Connector,
                    Male Connector, Manifold Tee, Locator Union, Extended Run
                    Leg Union Tee, Reducing Tee, Tribow, ATW Weld Ring, Tube
                    Socket Weld To Pipe Butt Weld, Tube Butt Weld To Tube Socket
                    Weld, Port Connector etc. Also as per the National &
                    International Standard.
                  </p>
                  <p className="text-sm text-slate-700 mt-2">
                    Double / Twin Ferrule Fittings Manufacturer, SS Ferrule
                    Fittings Exporter, Compression Tube Fittings,
                    Instrumentation Tube Fittings Supplier in India.
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Items
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Threaded Bevel Seat 90° Elbow",
                      "90° Reducing Elbow",
                      "Non Tapered 90° Elbow",
                      "Plain Bevel Seat 90° Elbow",
                      "Short Outlet Tee",
                      "45° Elbow",
                      "Equal Tee",
                      "Reducing Tee",
                      "Instrument Tee",
                      "Short Outlet Reducing Tee",
                      "Equal Cross",
                      "Long Weld Ferrule",
                      "Short Weld Ferrule",
                      "Ferrule for Expanding (Racesslass)",
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-2 border border-green-200 text-center"
                      >
                        <p className="text-sm text-slate-700">{item}</p>
                      </div>
                    ))}
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
                  EXPORT DESTINATIONS FOR STEEL FERRULE FITTINGS, SS FERRULE
                  FITTINGS, CARBON FERRULE FITTINGS, STAINLESS STEEL COMPRESSION
                  TUBING
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

export default FerruleFittingsPage;
