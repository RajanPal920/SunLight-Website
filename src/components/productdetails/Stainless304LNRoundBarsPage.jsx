import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import {
  Phone,
  Mail,
  Menu,
  Globe,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import roundbars from "../../data/productCategories/round-bars";
import roundBarImage from "../../assets/productsImage/bar4.jpg";

const Stainless304LNRoundBarsPage = () => {
  const navigate = useNavigate();
  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
    address:
      "Office No. 8, Ground Floor, Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004",
    website: "www.sunlightforgefitting.com",
  };

  const { categorySlug } = useParams();

  const currentCategory = roundbars.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || roundbars.categories[0];

  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "304ln-stainless-steel-roundbars",
  );

  const allDestinations = [
    "Iraq",
    "Israel",
    "United States",
    "Azerbaijan",
    "Sri Lanka",
    "South Africa",
    "Iran",
    "Mozambique",
    "Sudan",
    "Thailand (Bangkok)",
    "Algeria",
    "Uganda",
    "Brazil",
    "Tunisia",
    "UK",
    "Saudi Arabia",
    "Germany",
    "Venezuela",
    "Angola",
    "Australia",
    "Dubai",
    "Morocco",
    "Democratic Republic of the Congo",
    "Italy",
    "Vietnam",
    "Indonesia",
    "Canada",
    "Peru",
    "Jordan",
    "Ethiopa",
    "Cameroon",
    "Nigeria",
    "Ghana",
    "Colombia",
    "New Zealand",
    "UAE",
    "Africa",
    "Kazakhstan",
    "Argentina",
    "Trinidad and Tobago",
    "London",
    "Russia",
    "Turkey",
    "Bahrain",
    "Kuwait",
    "Malaysia",
    "Houston",
    "Mexico",
    "Egypt",
    "Chine",
    "Douala",
    "Fez",
    "Lusaka",
    "Maputo",
    "Dakar",
    "Soweto",
    "Freetown",
    "Tel Aviv",
    "Dubai",
    "Addis Ababa",
    "Yaoundé",
    "Port Elizabeth",
    "Maiduguri",
    "Manama",
    "Mecca",
    "Colombo",
    "Doha",
    "Antananarivo",
    "Accra",
    "Khartoum",
    "Subra al-Haymah",
    "Riyadh",
    "Mogadishu",
    "Bulawayo",
    "New York",
    "Tehran",
    "Abu Dhabi",
    "Giza",
    "Dammam",
    "Ibadan",
    "Lubumbashi",
    "Cairo",
    "Bamako",
    "Bethlehem",
    "Omdurman",
    "Benin",
    "Jeddah",
    "Cape Town",
    "Muscat",
    "Hong Kong",
    "Harare",
    "Amman",
    "Lagos",
    "Durban",
    "Nairobi",
    "Kaduna",
    "Singapore",
    "Rabat",
    "Cairo",
    "Aqaba",
    "Conakry",
    "Abidjan",
    "Kampala",
    "Byblos",
    "Jerusalem",
    "Tripoli",
    "Istanbul",
    "Mbuji-Mayi",
    "Zaria",
    "Kolwezi",
    "Kinshasa",
    "Brazzaville",
    "Luanda",
    "Pretoria",
    "Johannesburg",
    "Casablanca",
    "Algiers",
    "Beirut",
    "Ouagadougou",
    "Sharm el-Sheikh",
    "Kano",
    "Dar es Salaam",
    "Port Harcourt",
    "Alexandria",
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

  return (
    <>
      <Helmet>
        <title>
          Stainless Steel 304LN Round Bars & Rods | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Stainless Steel 304LN Round Bars & Rods Manufacturer. SS 304LN Hex Bars, Square Bars & Round Rods Supplier in India."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {roundbars.badge}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {roundbars.categories.map((category) => (
                    <div key={category.id}>
                      <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                        {category.title}
                      </h4>
                      <ul className="space-y-0.5 ml-2">
                        {category.types?.map((type) => (
                          <li key={type.id}>
                            <Link
                              to={`/products/${category.slug}/${type.slug}`}
                              className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                                type.slug === "304ln-stainless-steel-roundbars"
                                  ? "text-[#66BB6A] font-semibold bg-green-50 border-l-2 border-[#66BB6A]"
                                  : ""
                              }`}
                            >
                              {type.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

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
                              item.slug === "round-bars"
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
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/round-bars")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Round Bars
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${activeCategory.image})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      {currentProduct?.title ||
                        "Stainless Steel 304LN Round Bars & Rods"}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {activeCategory.description}
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

              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={roundBarImage}
                    alt={currentProduct?.title || "SS 304LN Round Bars"}
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Stainless Steel 304LN Round Bars & Rods"}
                </p>
                <p>
                  {currentProduct?.title ||
                    "Stainless Steel 304LN Round Bars & Rods"}{" "}
                  - Manufacturers & Exporters of Stainless Steel 304LN Round
                  Bars & UNS S30453 Round Rods, SS 304LN Bright Bars, Steel UNS
                  S30453 Rods, 304LN Hexagonal Bar Suppliers in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is involved in manufacturing and exporting 304LN Steel Round
                  Bar. The offered round bar is high on demand in the market for
                  its optimum quality.
                </p>
                <p>
                  304LN This material is with higher tensile strength than
                  AISI/SUS 304L stainless, is mainly used in coal, oil
                  industries, open-air equipment's, chemical goods ship, which
                  has a high request of resistance for grain boundary attack.
                </p>
                <p>
                  These 304LN Round bars are developed with the help of
                  excellent technology and are known for their dimensional
                  accuracy, durability, fine quality, optimum performance,
                  corrosion resistance and excellent finish. They are known for
                  their long lives and are used in diverse industries such as
                  Food, Dairy, Beverage, Paper, Chemical, Cryogenic, Automotive
                  and Aerospace industries etc.
                </p>
                <p>
                  Stainless Steel 304LN Round Rods Manufacturer, SS 304LN Forged
                  Bar, Steel 304LN Hex Bar, Stainless 304LN Hollow Bar,
                  Werkstoff nr. 1.4311 Black Bars Supplier in India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  SS 304LN Round Bars & Steel 304LN Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Stainless Steel 304LN (UNS S30453)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM A276 / ASME SA276
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Diameter:</strong>{" "}
                        25mm to 152mm dia
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Condition:</strong>{" "}
                        Cold Drawn & Polished Cold Drawn, Centreless Ground &
                        Polished
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Bright, Polish & Black
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Round/Square/ Hexagonal/ Rectangular
                      </p>
                      {currentProduct?.specs && (
                        <div className="mt-2">
                          <p>
                            <strong className="text-[#4A148C]">
                              Standards:
                            </strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-slate-600">
                            {currentProduct.specs.map((spec, idx) => (
                              <li key={idx}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Standards <span className="text-[#66BB6A]">Equivalents</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Standard
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Werkstoff Nr.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          SS 304LN
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4311</td>
                        <td className="px-4 py-2.5 text-sm">S30453</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory.types?.map((type) => (
                  <div
                    key={type.id}
                    className={`bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-200 cursor-pointer`}
                  >
                    {/* ✅ Link removed — static text only */}
                    <p className="text-sm font-semibold text-[#4A148C]">
                      {type.title}
                    </p>
                    {type.specs && (
                      <ul className="mt-2 space-y-0.5">
                        {type.specs.map((spec, idx) => (
                          <li key={idx} className="text-xs text-slate-500">
                            • {spec}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

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

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  EXPORT DESTINATIONS FOR SS 304LN ROUND BARS, STEEL 304LN BARS,
                  STAINLESS STEEL 304LN RODS, STEEL 304LN ROUND RODS, SS 304LN
                  RODS
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {allDestinations.map((country, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {country}
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
    </>
  );
};

export default Stainless304LNRoundBarsPage;
