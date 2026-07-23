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

const CuproNickel9010RoundBarsPage = () => {
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
    (type) => type.slug === "cupro-nickel-90-roundbars",
  );

  const allDestinations = [
    "Canada",
    "Kuwait",
    "Vietnam",
    "New Zealand",
    "Malaysia",
    "Iraq",
    "Russia",
    "Mozambique",
    "Kazakhstan",
    "Sudan",
    "Mexico",
    "Saudi Arabia",
    "UK",
    "Venezuela",
    "Trinidad and Tobago",
    "Ethiopa",
    "Houston",
    "Bahrain",
    "Thailand (Bangkok)",
    "Germany",
    "Brazil",
    "Tunisia",
    "Italy",
    "Chine",
    "UAE",
    "Colombia",
    "Australia",
    "London",
    "Uganda",
    "Jordan",
    "Ghana",
    "Morocco",
    "Algeria",
    "Democratic Republic of the Congo",
    "Nigeria",
    "Turkey",
    "Azerbaijan",
    "Sri Lanka",
    "Indonesia",
    "South Africa",
    "Egypt",
    "Cameroon",
    "Israel",
    "United States",
    "Angola",
    "Dubai",
    "Peru",
    "Africa",
    "Argentina",
    "Iran",
    "Mogadishu",
    "Durban",
    "Colombo",
    "Aqaba",
    "New York",
    "Abu Dhabi",
    "Dar es Salaam",
    "Luanda",
    "Omdurman",
    "Kampala",
    "Ibadan",
    "Giza",
    "Riyadh",
    "Addis Ababa",
    "Dakar",
    "Tel Aviv",
    "Yaoundé",
    "Benin",
    "Kolwezi",
    "Ouagadougou",
    "Port Harcourt",
    "Tripoli",
    "Antananarivo",
    "Fez",
    "Harare",
    "Amman",
    "Kaduna",
    "Dammam",
    "Brazzaville",
    "Lusaka",
    "Kano",
    "Byblos",
    "Soweto",
    "Douala",
    "Kinshasa",
    "Mecca",
    "Khartoum",
    "Algiers",
    "Accra",
    "Bethlehem",
    "Lubumbashi",
    "Cairo",
    "Lagos",
    "Nairobi",
    "Jeddah",
    "Sharm el-Sheikh",
    "Conakry",
    "Manama",
    "Johannesburg",
    "Bamako",
    "Mbuji-Mayi",
    "Beirut",
    "Alexandria",
    "Subra al-Haymah",
    "Doha",
    "Cairo",
    "Rabat",
    "Dubai",
    "Tehran",
    "Casablanca",
    "Cape Town",
    "Pretoria",
    "Port Elizabeth",
    "Singapore",
    "Abidjan",
    "Freetown",
    "Maputo",
    "Zaria",
    "Maiduguri",
    "Muscat",
    "Hong Kong",
    "Jerusalem",
    "Bulawayo",
    "Istanbul",
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
          Top Dealers & Exporter of Cupro Nickel 90/10 Round Bar, ASTM ASTM B151
          Cu-Ni 90/10 Round Bar, UNS C70600 Cupro Nickel Round Bar, Copper
          Nickel Alloy Bar, ASME SB 151 90/10 Cupro Nickel Alloy Hex Bars
          Supplier in India.
        </title>
        <meta
          name="description"
          content="Top Dealers & Exporter of Cupro Nickel 90/10 Round Bar, ASTM ASTM B151 Cu-Ni 90/10 Round Bar, UNS C70600 Cupro Nickel Round Bar, Copper Nickel Alloy Bar, ASME SB 151 90/10 Cupro Nickel Alloy Hex Bars Supplier in India."
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
                                type.slug === "cupro-nickel-90-roundbars"
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
                      Cupro Nickel 90/10 Round Bars & Rods
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Top Dealers & Exporter of Cupro Nickel 90/10 Round Bar,
                      ASTM ASTM B151 Cu-Ni 90/10 Round Bar, UNS C70600 Cupro
                      Nickel Round Bar, Copper Nickel Alloy Bar, ASME SB 151
                      90/10 Cupro Nickel Alloy Hex Bars Supplier in India.
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
                    alt="Cupro Nickel 90/10 Round Bars"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Cupro Nickel 90/10 Round Bars & Rods
                </p>
                <p>
                  We are involved in offering a qualitative Steel Round Bars to
                  our clients. Widely used in the making of canals, bridges,
                  buildings, hotels, hospitals, homes etc.
                </p>
                <p>
                  Cupro Nickel 90/10 Forged Round Bar, Werkstoff Nr. 2.0872
                  Round Bar Exporter, Cu-Ni 90/10 Polished Round Bar, ASTM B151
                  Cupro Nickel 90/10 Black Bars, Cupro Nickel 90/10 Square Bars
                  Manufacturer & Supplier in India
                </p>
                <p>
                  As a global supplier, stockiest, exporter and manufacturer,
                  Based in Mumbai, India, we at Neon Alloys are engaged in
                  offering a premium quality Cupro Nickel 90 / 10 Round Bars in
                  India. These offered ranges of 90 / 10 Cupro Nickel Round Bars
                  by us are used in several applications such as in condensers,
                  condenser plates, distiller tubing, evaporator and heat
                  exchanger tubing, ferrules, salt water piping and more.
                </p>
                <p>
                  Copper Nickel 90 / 10 Round Bars has good hot and cold
                  workability and that also available in various ASTM, ASME, and
                  API standards. Cu-Ni 90 / 10 Rods are being fabricated by
                  forming and bending, welding with black, bright polished,
                  rough turned and BA are the some of the surface finish.
                </p>
                <p>
                  Moreover, we provide these UNS C70600 Round Bars and in
                  custom-built sizes, thicknesses and specification to match
                  exact requirements of our patrons. We maintain largest stock
                  of Cu-Ni 90/10 Round Bar which is offered round, square and
                  hex with few more shapes at economical prices to our
                  consumers. Call us now and request a free quote!
                </p>
                <p>
                  Cupro Nickel 90/10 Hot Rolled Bar, Cupro Nickel 90/10 Flat Bar
                  & Rods Exporter, ASTM B151 Cu-Ni 90/10 Rectangular Bar, ASME
                  SB 151 Cupro Nickel 90/10 Bright Bar, B111 310 Cupro Nickel
                  90/10 Hex Bars Stockholder, Trader in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Cupro Nickel Alloy 90/10 Round Bars & Cupro Nickel 90/10 Round
                  Rods <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specifications:
                        </strong>{" "}
                        ASTM B151, ASME SB151
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimensions:</strong>{" "}
                        EN, DIN, JIS, ASTM, BS, ASME, AISI
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Range:</strong> 5 mm
                        To 500 mm thick in 100 mm TO 6000 mm
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Black, Bright Polished, Rough Turned, NO.4 Finish, Matt
                        Finish, BA Finish
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong> 100
                        mm to 3660 mm Long
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Hex (A/F), Rectangle, Billet, Ingot, Forging
                        Etc.
                      </p>
                    </div>
                  </div>
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
                  EXPORT DESTINATIONS FOR COPPER ALLOY ROUND BARS, COPPER BARS,
                  COPPER NICKEL ALLOY RODS, CUPRO NICKEL ROUND RODS
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

export default CuproNickel9010RoundBarsPage;
