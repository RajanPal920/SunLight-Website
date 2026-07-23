import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom"; // Added useNavigate
import {
  Phone,
  Mail,
  Menu,
  Globe,
  ArrowLeft, // Added ArrowLeft
  PhoneCall, // Added PhoneCall
} from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md"; // Added WhatsApp icon
import pipesTubes from "../../data/productCategories/pipes-tubes";
import astmP92Image from "../../assets/productsImage/p92.jpg";

const ASTMA335P92Page = () => {
  const navigate = useNavigate(); // Added for back button

  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
    address:
      "Office No. 8, Ground Floor, Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004",
    website: "www.sunlightforgefitting.com",
  };

  const { categorySlug } = useParams();

  const currentCategory = pipesTubes.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || pipesTubes.categories[0];

  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "astm-a335-p92-pipes",
  );

  const allDestinations = [
    "Morocco",
    "Houston",
    "New Zealand",
    "Argentina",
    "Thailand (Bangkok)",
    "United States",
    "Nigeria",
    "Algeria",
    "Colombia",
    "Chine",
    "Bahrain",
    "Uganda",
    "Saudi Arabia",
    "Africa",
    "Ethiopa",
    "Peru",
    "Kazakhstan",
    "Indonesia",
    "Venezuela",
    "London",
    "UK",
    "Malaysia",
    "Trinidad and Tobago",
    "Azerbaijan",
    "Israel",
    "South Africa",
    "Tunisia",
    "Germany",
    "Kuwait",
    "Iran",
    "Iraq",
    "UAE",
    "Mexico",
    "Italy",
    "Vietnam",
    "Australia",
    "Angola",
    "Canada",
    "Egypt",
    "Sri Lanka",
    "Cameroon",
    "Turkey",
    "Russia",
    "Sudan",
    "Jordan",
    "Mozambique",
    "Ghana",
    "Democratic Republic of the Congo",
    "Dubai",
    "Brazil",
    "Ibadan",
    "Ouagadougou",
    "Dakar",
    "Colombo",
    "Port Harcourt",
    "Soweto",
    "Singapore",
    "Lusaka",
    "Manama",
    "Addis Ababa",
    "Conakry",
    "New York",
    "Beirut",
    "Mogadishu",
    "Algiers",
    "Abidjan",
    "Yaoundé",
    "Pretoria",
    "Omdurman",
    "Bethlehem",
    "Aqaba",
    "Khartoum",
    "Benin",
    "Kampala",
    "Brazzaville",
    "Lubumbashi",
    "Kinshasa",
    "Kolwezi",
    "Istanbul",
    "Sharm el-Sheikh",
    "Amman",
    "Dar es Salaam",
    "Johannesburg",
    "Kaduna",
    "Hong Kong",
    "Muscat",
    "Rabat",
    "Durban",
    "Byblos",
    "Freetown",
    "Doha",
    "Jerusalem",
    "Maiduguri",
    "Accra",
    "Abu Dhabi",
    "Antananarivo",
    "Nairobi",
    "Riyadh",
    "Cairo",
    "Fez",
    "Casablanca",
    "Douala",
    "Subra al-Haymah",
    "Mecca",
    "Giza",
    "Jeddah",
    "Alexandria",
    "Maputo",
    "Cape Town",
    "Bamako",
    "Dubai",
    "Bulawayo",
    "Dammam",
    "Mbuji-Mayi",
    "Kano",
    "Cairo",
    "Tehran",
    "Zaria",
    "Tripoli",
    "Luanda",
    "Lagos",
    "Port Elizabeth",
    "Tel Aviv",
    "Harare",
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
          Alloy Steel ASTM A335 P92 Pipes & A213 T92 Tubes | Sunlight Forge &
          Fitting
        </title>
        <meta
          name="description"
          content="High Alloy Steel ASTM A335 P92 Pipes & A213 T92 Tubes Manufacturer. Seamless & Welded Pipes, Tubes. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {pipesTubes.badge}
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
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      PIPES & TUBES
                    </h4>
                    {pipesTubes.categories.map((category) => (
                      <div key={category.id} className="mb-2">
                        <h5 className="text-xs font-semibold text-[#4A148C] ml-2 mb-1">
                          {category.title}
                        </h5>
                        <ul className="space-y-0.5 ml-4">
                          {category.types?.map((type) => (
                            <li key={type.id}>
                              <Link
                                to={`/products/${category.slug}/${type.slug}`}
                                className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                                  type.slug === "astm-a335-p92-pipes"
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
                  </div>

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
                              item.slug === "pipes-tubes"
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
              {/* ===== BACK BUTTON ===== */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/pipes-tubes")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Pipes & Tubes
                </button>
              </div>

              {/* ===== HERO IMAGE & HEADING ===== */}
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
                        "Alloy Steel P92 Pipes & T92 Tubes"}
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

              {/* ===== PRODUCT IMAGE ===== */}
              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={astmP92Image}
                    alt={
                      currentProduct?.title || "ASTM A335 P92 Alloy Steel Pipe"
                    }
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title || "Alloy Steel P92 Pipes & P92 Tubes"}
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  manufactures & exports ASTM A335 P92 Pipes and ASTM A213 T92
                  Tubes having excellent quality to fully satisfy customer's
                  requirements.
                </p>
                <p>
                  We can offer a comprehensive range of ASTM A335/ASME SA335 P92
                  High Pressure Steel Pipe for the right technical solution.
                  Neon Alloy manufactures & exports wide selections of ASTM
                  A335/ASME SA335 P92 High Pressure Steel Pipe. The range of
                  ASTM A335 P92 seamless alloy steel pipe sizes that may be
                  examined by each method shall be subjected to the limitations
                  in the scope of the respective practice.
                </p>
                <p>
                  ASTM A213 T92 is the part of ASTM A213 Standard Specification
                  for Seamless Ferritic and Austenitic Alloy-Steel Boiler,
                  Superheater Heat-Exchanger Tubes. ASTM A213 T92 Standard
                  covers seamless ferritic and austenitic steel boiler,
                  Superheater, and heat-exchanger tube.
                </p>
                <p>
                  ASTM A335 P92 High Pressure Pipe & Tube Exporter, Alloy Steel
                  A213 T92 Seamless Tubes Supplier, Alloy P92 Fabricated Pipe,
                  ASME SA335 P92 SAW/LSAW Pipe Manufacturer in India.
                </p>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  ASTM A553 Alloy P92 Pipes & ASME A213 Alloy T92 Tubes{" "}
                  <span className="text-[#66BB6A]">Specifications:</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> Alloy
                        Steel A335 GR P92 / Alloy Steel A213 GR T92
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        ASTM A335, A213 / ASME SA335, SA213
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/2"
                        NB - 24" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH80,
                        SCH120, SCH140, SCH160, XXS
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / ERW / Welded / Fabricated / LSAW Pipes
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Rectangular, Hydraulic Etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong>{" "}
                        Single Random, Double Random & Cut Length.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">End:</strong> Plain
                        End, Beveled End, Treaded
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of Alloy Steel ASTM A335, ASME SA335 P92 Pipes &{" "}
                  <span className="text-[#66BB6A]">
                    ASTM A213, ASME SA213 T92 Tubes
                  </span>
                </h2>

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
              </div>

              {/* ===== CONTACT BOX ===== */}
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

              {/* ===== EXPORT DESTINATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  EXPORT DESTINATIONS FOR ALLOY P92 PIPES, AS P92 PIPES, ALLOY
                  T92 TUBES, AS T92 TUBES
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

export default ASTMA335P92Page;
