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
import buttweld from "../../data/productCategories/buttweld-fittings";
import buttweldImage from "../../assets/productsImage/but.jpg";

const Alloy20ButtweldFittingsPage = () => {
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

  const currentCategory = buttweld.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || buttweld.categories?.[0];

  const currentProduct = activeCategory?.types?.find(
    (type) => type.slug === "alloy-20-buttweld-fittings",
  );

  const allDestinations = [
    "Israel",
    "Argentina",
    "Dubai",
    "Africa",
    "Algeria",
    "UK",
    "Ethiopa",
    "Trinidad and Tobago",
    "Kuwait",
    "Vietnam",
    "Morocco",
    "Australia",
    "London",
    "Tunisia",
    "Italy",
    "Chine",
    "Kazakhstan",
    "Thailand (Bangkok)",
    "Mozambique",
    "Nigeria",
    "Saudi Arabia",
    "Bahrain",
    "Ghana",
    "Venezuela",
    "Russia",
    "Indonesia",
    "United States",
    "Mexico",
    "Malaysia",
    "Turkey",
    "Cameroon",
    "Iran",
    "Iraq",
    "Jordan",
    "UAE",
    "Sudan",
    "Germany",
    "Azerbaijan",
    "Uganda",
    "New Zealand",
    "Brazil",
    "South Africa",
    "Houston",
    "Democratic Republic of the Congo",
    "Colombia",
    "Egypt",
    "Peru",
    "Sri Lanka",
    "Canada",
    "Angola",
    "Giza",
    "Dammam",
    "Nairobi",
    "Tripoli",
    "Luanda",
    "Brazzaville",
    "Bamako",
    "Conakry",
    "Freetown",
    "Dubai",
    "Muscat",
    "New York",
    "Soweto",
    "Mbuji-Mayi",
    "Bulawayo",
    "Kampala",
    "Harare",
    "Benin",
    "Accra",
    "Douala",
    "Dar es Salaam",
    "Beirut",
    "Subra al-Haymah",
    "Jerusalem",
    "Colombo",
    "Fez",
    "Jeddah",
    "Khartoum",
    "Antananarivo",
    "Yaoundé",
    "Alexandria",
    "Lusaka",
    "Johannesburg",
    "Singapore",
    "Kinshasa",
    "Aqaba",
    "Istanbul",
    "Mecca",
    "Manama",
    "Zaria",
    "Riyadh",
    "Cairo",
    "Sharm el-Sheikh",
    "Durban",
    "Port Harcourt",
    "Maputo",
    "Ibadan",
    "Kano",
    "Maiduguri",
    "Doha",
    "Port Elizabeth",
    "Rabat",
    "Mogadishu",
    "Byblos",
    "Lagos",
    "Lubumbashi",
    "Bethlehem",
    "Tel Aviv",
    "Omdurman",
    "Amman",
    "Pretoria",
    "Abu Dhabi",
    "Abidjan",
    "Kolwezi",
    "Tehran",
    "Kaduna",
    "Casablanca",
    "Ouagadougou",
    "Cape Town",
    "Cairo",
    "Addis Ababa",
    "Algiers",
    "Hong Kong",
    "Dakar",
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
          Alloy 20 Buttweld Pipe Fittings, Alloy 20 Seamless Fittings, Alloy 20
          Welded Pipe Fittings Manufacturer, Alloy 20 Buttweld Pipe Fittings,
          Alloy 20 Elbow, 20 Alloy Tee, Alloy 20 Pipe Cross, Alloy 20 Reducers,
          Alloy 20 Short Radius Elbow Exporters in India.
        </title>
        <meta
          name="description"
          content="Alloy 20 Buttweld Pipe Fittings, Alloy 20 Seamless Fittings, Alloy 20 Welded Pipe Fittings Manufacturer, Alloy 20 Buttweld Pipe Fittings, Alloy 20 Elbow, 20 Alloy Tee, Alloy 20 Pipe Cross, Alloy 20 Reducers, Alloy 20 Short Radius Elbow Exporters in India."
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
            {/* Sidebar - Similar to roundbars example */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* Use buttweld categories here */}
                  {buttweld.categories?.map((category) => (
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
                                type.slug === "alloy-20-buttweld-fittings"
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
                              item.slug === "buttweld-fittings"
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
                  onClick={() => navigate("/products/buttweld-fittings")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Buttweld Fittings
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${buttweldImage || activeCategory?.image})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Alloy 20 Buttweld Fittings
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Alloy 20 Seamless Fittings, Alloy 20 Welded Pipe Fittings
                      Manufacturer, Alloy 20 Buttweld Pipe Fittings, Alloy 20
                      Elbow, 20 Alloy Tee, Alloy 20 Pipe Cross, Alloy 20
                      Reducers, Alloy 20 Short Radius Elbow Exporters in India.
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
                    src={buttweldImage}
                    alt="Alloy 20 Buttweld Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Alloy 20 Pipe Fittings
                </p>
                <p>
                  20 Alloy Welded Buttweld Fittings, Alloy 20 Pipe Buttweld
                  Fittings, Alloy 20 Seamless Pipe Buttweld Fittings
                </p>
                <p>
                  Neon Alloys is one of the pioneer supplier and dealer of Alloy
                  20 Butt Weld Pipe Fittings, which is a
                  nickel-chromium-molybdenum alloy with excellent corrosion
                  resistance in both oxidizing and reducing environments. Alloy
                  20 offers exceptional resistance to a wide range of corrosive
                  environments including sulfuric acid, phosphoric acid, and
                  chloride stress-corrosion cracking.
                </p>
                <p>
                  These Alloy 20 Butt Weld Fittings are used extensively in
                  applications where high strength and corrosion resistance are
                  required. The alloy has excellent fatigue strength and
                  resistance to stress-corrosion cracking, making it ideal for
                  demanding applications.
                </p>
                <p>
                  These Alloy 20 Pipe Fittings have exceptional resistance to a
                  variety of corrosive environments, including oxidation,
                  carburization, and chloride stress-corrosion cracking. They
                  are also resistant to many organic and inorganic compounds,
                  making them ideal for chemical processing applications.
                </p>
                <p>
                  Alloy 20 Butt Weld Pipe Fittings are widely used in various
                  application industries such as chemical processing, oil & gas,
                  nuclear power, aerospace, heat treating equipment, and
                  electronics. These fittings maintain their corrosion
                  resistance and strength in high-temperature environments. We
                  offer the same in market leading prices.
                </p>
              </div>

              {/* Types of Fittings */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of 20 Alloy Pipe{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    "Alloy 20 Tee",
                    "Alloy 20 Elbow",
                    "20 Alloy Reducing Tee",
                    "Alloy 20 Coupling",
                    "20 Alloy Long & Short Stub Band",
                    "Alloy 20 Reducer",
                    "Alloy 20 Return Bends",
                    "Alloy 20 Plug",
                    "Alloy 20 Union",
                    "Alloy 20 Pipe End Cap",
                    "20 Alloy Collar",
                    "20 Alloy Cross",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-3 border border-green-200 hover:border-[#66BB6A] transition-colors text-center"
                    >
                      <p className="text-sm font-medium text-[#4A148C]">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-slate-600 mt-4">
                  Alloy 20 Reducer, Alloy 20 Pipe End Cap Supplier, Alloy 20
                  Stub end, Alloy 20 Pipe Bends, 20 Alloy Reducing Elbow, Alloy
                  20 Pipe Bends Exporter in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Alloy 20 Butt weld Pipe Fittings available in standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        ASTM B366, ASME SB366
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> Alloy
                        20 (UNS N08020)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / Welded / Fabricated
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimensions:</strong>{" "}
                        ANSI/ASME B16.9, B16.28, MSS-SP-43
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong>{" "}
                        Seamless ½” to 24”, Welded ½” to 24”, Two Joint / Two
                        Halve Fittings 6” to 48”
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        Sch 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160, Sch
                        XXS
                      </p>
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
                          STANDARD
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          EN
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          OR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Alloy 20
                        </td>
                        <td className="px-4 py-2.5 text-sm">N08020</td>
                        <td className="px-4 py-2.5 text-sm">2.4660</td>
                        <td className="px-4 py-2.5 text-sm">NiCr20CuMo</td>
                        <td className="px-4 py-2.5 text-sm">Z2NCUD31-20AZ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Fittings - Detailed */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N08020 Alloy 20 Buttweld{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Size – 1/4" NB TO 32" NB. (Seamless & Welded)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Alloy 20 Reducers",
                    "Alloy 20 Concentric Reducers",
                    "Alloy 20 Tees",
                    "Alloy 20 Pipe Nipples",
                    "Alloy 20 Stub end",
                    "Alloy 20 Tees",
                    "Alloy 20 Elbows",
                    "20 Alloy 3D Elbow",
                    "Alloy 20 Stub Ends",
                    "UNS N08020 Alloy End Caps",
                    "Alloy 20 5D Elbow",
                    "20 Alloy 180° SR Return Bends",
                    "Alloy 20 Long Radius Elbow",
                    "Alloy 20 Eccentric Reducers",
                    "Alloy 20 Reducing Crosses",
                    "Alloy 20 Steel Elbows",
                    "20 Alloy Crosses",
                    "Alloy 20 Couplings",
                    "Alloy 20 Short Radius Elbow",
                    "20 Alloy ASME B16.9 Pipe Bends",
                    "20 Alloy 45° Elbows",
                    "Alloy 20 Reducing Elbow",
                    "20 Alloy Piggable Bends",
                    "20 Alloy 180° LR Return Bends",
                    "UNS N08020 Alloy Welded Fittings",
                    "Alloy 20 Seamless Fittings",
                    "20 ASTM B366 Butt weld Fittings",
                    "Alloy 20 Pipe Fittings",
                    "Alloy 20 Pipe Fittings",
                    "Alloy 20 Welded Pipe Fittings",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-3 border border-green-200 hover:border-[#66BB6A] transition-colors text-center"
                    >
                      <p className="text-sm font-medium text-[#4A148C]">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
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
                  EXPORT DESTINATIONS FOR ALLOY 20 BUTT WELD PIPE FITTINGS,
                  ALLOY 20 PIPE FITTINGS, ALLOY 20 SEAMLESS FITTINGS, ALLOY 20
                  WELDED PIPE FITTINGS IN INDIA
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

export default Alloy20ButtweldFittingsPage;
