import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import olets from "../../data/productCategories/olets";
import oletsImage from "../../assets/productsImage/olets.jpg";

const OletsPage = () => {
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

  // Get all olet products from the structured data
  const allOletProducts = olets.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allOletProducts.find((item) => item.slug === "olets");

  // All olet products for the sidebar
  const oletProducts = allOletProducts;

  const allDestinations = [
    "United States",
    "Africa",
    "Kuwait",
    "UK",
    "Canada",
    "Turkey",
    "Indonesia",
    "Germany",
    "Houston",
    "Dubai",
    "Colombia",
    "South Africa",
    "Chine",
    "Democratic Republic of the Congo",
    "Mozambique",
    "Kazakhstan",
    "Azerbaijan",
    "Australia",
    "Angola",
    "Algeria",
    "Bahrain",
    "Malaysia",
    "Peru",
    "Saudi Arabia",
    "Venezuela",
    "Jordan",
    "Vietnam",
    "Iraq",
    "Russia",
    "Tunisia",
    "Mexico",
    "Brazil",
    "UAE",
    "Israel",
    "Sudan",
    "Argentina",
    "Thailand (Bangkok)",
    "New Zealand",
    "Cameroon",
    "Trinidad and Tobago",
    "Italy",
    "Nigeria",
    "London",
    "Ethiopa",
    "Egypt",
    "Uganda",
  ];

  const allCities = [
    "Lubumbashi",
    "Addis Ababa",
    "Abidjan",
    "Jeddah",
    "Bamako",
    "Mbuji-Mayi",
    "Kinshasa",
    "Dubai",
    "Maputo",
    "Fez",
    "Yaoundé",
    "Lagos",
    "Bethlehem",
    "Jerusalem",
    "Aqaba",
    "Freetown",
    "Sharm el-Sheikh",
    "Mogadishu",
    "Pretoria",
    "Algiers",
    "Khartoum",
    "Beirut",
    "Luanda",
    "Casablanca",
    "Subra al-Haymah",
    "Benin",
    "Johannesburg",
    "Kaduna",
    "Conakry",
    "Omdurman",
    "Hong Kong",
    "Ouagadougou",
    "Port Harcourt",
    "Kampala",
    "Maiduguri",
    "Byblos",
    "Cape Town",
    "Doha",
    "Istanbul",
    "Durban",
    "Tripoli",
    "Brazzaville",
    "Nairobi",
    "Amman",
    "Tehran",
    "Port Elizabeth",
    "Colombo",
    "Douala",
    "Alexandria",
    "Dakar",
    "Singapore",
    "Muscat",
    "Lusaka",
    "Rabat",
    "New York",
    "Harare",
    "Cairo",
    "Soweto",
    "Antananarivo",
    "Kano",
    "Tel Aviv",
    "Bulawayo",
    "Cairo",
    "Accra",
    "Dammam",
    "Mecca",
    "Zaria",
    "Riyadh",
    "Giza",
    "Kolwezi",
    "Ibadan",
    "Manama",
    "Dar es Salaam",
    "Abu Dhabi",
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
        <title>Olets | Branch Connections | Sunlight Forge</title>
        <meta
          name="description"
          content="Olets Manufacturer. Insert Weldolet, Sockolet, Threadolet, Elbolet, Branzolet, Coupolet. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {olets.badge || "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {/* ===== OLETS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      OLETS
                    </h4>
                    <ul className="space-y-0.5">
                      {oletProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/olets/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "olets"
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
                              item.slug === "olets"
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
                  onClick={() => navigate("/products/olets")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Olets
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${oletsImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Olets
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Insert Weldolet, Sockolet, Threadolet,
                      Elbolet, Branzolet & Coupolet Supplier & Exporter in
                      India.
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
                    src={oletsImage}
                    alt="Olets"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== INSERT WELDOLET ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Insert Weldolet Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Insert Weldolet
                </p>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Being noted worldwide for our high quality, and dimensional
                    accuracy Insert Weldolets, we offer our clients a wide
                    range. Fabricated using the best of raw material, and design
                    compliance is of the best in the industry. Our products hold
                    wide acclaim for high corrosion resistance, durability and
                    ease of usage.
                  </p>
                </div>
              </div>

              {/* ===== SOCKOLET ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Sockolet Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Sockolet
                </p>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Fabricated from High quality stainless steel, carbon steel
                    and alloy steel, our range of sockolets is widely used in a
                    wide array of industry applications. We have two categories
                    in these Sockolets, which are Sockolet (3000) and Sockolet
                    (6000). Our Quality processes ensure dimensional accuracy,
                    hassle free installation and usage.
                  </p>
                </div>
              </div>

              {/* ===== THREADOLET ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Threadolet Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Threadolet Nipolet
                </p>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Holding wide acclaim for durability, corrosion resistance
                    and long life, our Threadolet Nippolets are fabricated from
                    high grade raw materials. Ensuring conformity at all levels
                    of production to the highest quality standards, these
                    products, are offered in a variety of sizes to our
                    clientèle.
                  </p>
                </div>
              </div>

              {/* ===== ELBOLET ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Elbolet Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Elbolet
                </p>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Offered in a wide array of specifications our elbowlets, and
                    fabricated using the highest grades of raw materials.
                    Renowned for our durability and finish, corrosion resistance
                    and long life, Our Elbowlets are in constant demand
                    worldwide, due to our stringent Quality control norms.
                  </p>
                </div>
              </div>

              {/* ===== BRANZOLET & COUPOLET ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Branzolet Supplier
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-2">
                  Branzolet & Coupolet
                </p>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Requiring low maintenance and being of a high corrosion
                    resistance, Our Branzolets and Coupolets are available in a
                    wide range of High grade raw materials and specifications
                    suitable to a large set of applications. Due to our
                    extensive Quality checks we ensure that our Branzolets and
                    coupolets are in huge demand across the globe.
                  </p>
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
                  EXPORT DESTINATIONS FOR STEEL OLETS, STEEL OUTLET FITTINGS,
                  INSERT WELDOLET, SOCKOLET, THREADOLET, NIPOLET, ELBOLET
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

export default OletsPage;
