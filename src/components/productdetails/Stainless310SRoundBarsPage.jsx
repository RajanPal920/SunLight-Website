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
import roundBarImage from "../../assets/productsImage/bar.jpg";

const Stainless310SRoundBarsPage = () => {
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
    (type) => type.slug === "310s-stainless-steel-roundbars",
  );

  const allDestinations = [
    "Peru",
    "Dubai",
    "South Africa",
    "Iraq",
    "Colombia",
    "Saudi Arabia",
    "Nigeria",
    "Mozambique",
    "Bahrain",
    "Democratic Republic of the Congo",
    "Egypt",
    "New Zealand",
    "Chine",
    "Venezuela",
    "Morocco",
    "Sudan",
    "Thailand (Bangkok)",
    "Uganda",
    "UK",
    "Ghana",
    "Australia",
    "United States",
    "Iran",
    "Italy",
    "Turkey",
    "Israel",
    "Tunisia",
    "Canada",
    "Jordan",
    "Argentina",
    "Brazil",
    "Africa",
    "Algeria",
    "Germany",
    "Cameroon",
    "Angola",
    "Trinidad and Tobago",
    "Kazakhstan",
    "Ethiopa",
    "Azerbaijan",
    "Russia",
    "Vietnam",
    "Houston",
    "Mexico",
    "Indonesia",
    "Sri Lanka",
    "UAE",
    "Kuwait",
    "London",
    "Malaysia",
    "Maputo",
    "New York",
    "Dubai",
    "Giza",
    "Abidjan",
    "Alexandria",
    "Bamako",
    "Kolwezi",
    "Addis Ababa",
    "Freetown",
    "Luanda",
    "Port Harcourt",
    "Cairo",
    "Singapore",
    "Pretoria",
    "Maiduguri",
    "Benin",
    "Mecca",
    "Cape Town",
    "Riyadh",
    "Lusaka",
    "Douala",
    "Tripoli",
    "Sharm el-Sheikh",
    "Istanbul",
    "Khartoum",
    "Colombo",
    "Dar es Salaam",
    "Doha",
    "Port Elizabeth",
    "Kano",
    "Bethlehem",
    "Dammam",
    "Brazzaville",
    "Cairo",
    "Zaria",
    "Amman",
    "Ouagadougou",
    "Ibadan",
    "Lagos",
    "Johannesburg",
    "Mogadishu",
    "Subra al-Haymah",
    "Nairobi",
    "Kampala",
    "Soweto",
    "Antananarivo",
    "Abu Dhabi",
    "Conakry",
    "Muscat",
    "Jeddah",
    "Manama",
    "Bulawayo",
    "Beirut",
    "Durban",
    "Hong Kong",
    "Omdurman",
    "Dakar",
    "Casablanca",
    "Yaoundé",
    "Tel Aviv",
    "Lubumbashi",
    "Byblos",
    "Jerusalem",
    "Algiers",
    "Aqaba",
    "Kinshasa",
    "Harare",
    "Fez",
    "Rabat",
    "Mbuji-Mayi",
    "Kaduna",
    "Tehran",
    "Accra",
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
          Top Manufacturer & Exporter of Stainless Steel 310S Round Bar, ASTM
          A276 SS 310S Rods, SS UNS S3100 Round Bar, Stainless Steel 310S Bar,
          ASTM A479 310S Stainless Steel Hex Bars Supplier in India.
        </title>
        <meta
          name="description"
          content="Top Manufacturer & Exporter of Stainless Steel 310S Round Bar, ASTM A276 SS 310S Rods, SS UNS S3100 Round Bar, Stainless Steel 310S Bar, ASTM A479 310S Stainless Steel Hex Bars Supplier in India."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Government Recognised Badge */}
        <div className="bg-[#0b2a4a] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#ffd700] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#ffd700] uppercase">
                <i className="fas fa-award mr-2"></i>
                GOVERNMENT RECOGNISED STAR EXPORT HOUSE
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Same as example */}
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
                                type.slug === "310s-stainless-steel-roundbars"
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

            {/* Main Content */}
            <div className="flex-1 min-w-0 pt-4">
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/round-bars")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Round Bars
                </button>
              </div>

              {/* Hero Section */}
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
                      Stainless Steel 310S Round Bars & Rods
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Top Manufacturer & Exporter of Stainless Steel 310S Round
                      Bar, ASTM A276 SS 310S Rods, SS UNS S3100 Round Bar,
                      Stainless Steel 310S Bar, ASTM A479 310S Stainless Steel
                      Hex Bars Supplier in India.
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
                    src={roundBarImage}
                    alt="Stainless Steel 310S Round Bars"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Stainless Steel 310S Round Bars & Rods
                </p>
                <p>
                  We are involved in offering a qualitative Steel Round Bars to
                  our clients. Widely used in the making of canals, bridges,
                  buildings, hotels, hospitals, homes etc.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is one of the renowned Stainless Steel 310S Round Bars
                  Stockist and Exporter, based in Mumbai, India. These SS 310S
                  Round bars is an austenitic stainless steel that features
                  great weldability and malleability with extraordinary
                  high-temperature properties.
                </p>
                <p>
                  The offered range of 310S Stainless Steel Round Bars contains
                  a high substance of Nickel and Chromium having great
                  consumption resistance, astounding impervious to oxidation and
                  quality up to 2100°F. Our Stainless Steel 310S Bars comes in
                  various shapes like round bar, funnel, sheet, plate, tubing
                  and coil.
                </p>
                <p>
                  We offer an extensive range of SS 310S Rods that is
                  manufactured with utmost accuracy. Moreover, these steel round
                  bars are being delivered in a various industries exhibits high
                  strength, corrosion resistance and durability. Owing to vast
                  industrial experience, we ensure that our offered range of
                  product meets the international quality standards. Call us now
                  to order our high-quality grade 310S stainless steel bars
                  products!
                </p>
                <p>
                  Stainless Steel 310S Hot Rolled Bar, 310S Stainless Steel Flat
                  Bar & Rods Exporter, ASTM A479 310S Steel Round Bar, ASTM A276
                  Stainless Steel 310S Bright Bar, ASTM A479 310S SS Rectangular
                  Bars Stockholder, Trader in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  SS 310S Round Bars & Steel 310S Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Stainless Steel 310S (UNS S31008)
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
                      <div className="mt-2">
                        <p>
                          <strong className="text-[#4A148C]">Standards:</strong>
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-600">
                          <li>ASTM A276 / ASME SA276</li>
                          <li>ASTM A479</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standards Equivalents Table */}
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
                          SS 310S
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4845</td>
                        <td className="px-4 py-2.5 text-sm">S31008</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Types Section */}
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

              {/* Call to Action */}
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
                  EXPORT DESTINATIONS FOR SS 310S ROUND BARS, STEEL 310S BARS,
                  STAINLESS STEEL 310S RODS, STEEL 310S ROUND RODS, SS 310S RODS
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

export default Stainless310SRoundBarsPage;
