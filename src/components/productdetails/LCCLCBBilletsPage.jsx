import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import billets from "../../data/productCategories/billets";
import billetImage from "../../assets/productsImage/billets.jpg";

const LCCLCBBilletsPage = () => {
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

  // Get all billet products from the structured data
  const allBilletProducts = billets.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allBilletProducts.find(
    (item) => item.slug === "lcc-lcb-billets",
  );

  // All billet products for the sidebar
  const billetProducts = allBilletProducts;

  const allDestinations = [
    "Kazakhstan",
    "Cameroon",
    "Chine",
    "Venezuela",
    "Africa",
    "Saudi Arabia",
    "UAE",
    "Algeria",
    "London",
    "United States",
    "Dubai",
    "Nigeria",
    "Brazil",
    "Sudan",
    "Germany",
    "South Africa",
    "Bahrain",
    "Morocco",
    "Argentina",
    "New Zealand",
    "Uganda",
    "Italy",
    "Peru",
    "Egypt",
    "Tunisia",
    "Jordan",
    "Kuwait",
    "Malaysia",
    "Iran",
    "Democratic Republic of the Congo",
    "Azerbaijan",
    "Vietnam",
    "Colombia",
    "Israel",
    "Thailand (Bangkok)",
    "Russia",
    "Mozambique",
    "Houston",
    "Ghana",
    "Trinidad and Tobago",
    "Indonesia",
    "Iraq",
    "UK",
    "Angola",
    "Ethiopa",
    "Canada",
  ];

  const allCities = [
    "Kampala",
    "Dar es Salaam",
    "Rabat",
    "Dakar",
    "Benin",
    "Abu Dhabi",
    "Cairo",
    "Soweto",
    "Port Harcourt",
    "Muscat",
    "Kolwezi",
    "Ouagadougou",
    "Tel Aviv",
    "Bamako",
    "Harare",
    "Kano",
    "Maputo",
    "Douala",
    "Subra al-Haymah",
    "Kinshasa",
    "Doha",
    "Cairo",
    "Conakry",
    "Dammam",
    "Pretoria",
    "Ibadan",
    "Accra",
    "Freetown",
    "Casablanca",
    "Johannesburg",
    "Antananarivo",
    "Jerusalem",
    "Lagos",
    "Colombo",
    "Fez",
    "Mogadishu",
    "Abidjan",
    "Zaria",
    "Algiers",
    "Jeddah",
    "Omdurman",
    "Maiduguri",
    "Beirut",
    "Nairobi",
    "Riyadh",
    "Singapore",
    "Port Elizabeth",
    "New York",
    "Alexandria",
    "Manama",
    "Bethlehem",
    "Cape Town",
    "Giza",
    "Sharm el-Sheikh",
    "Addis Ababa",
    "Lubumbashi",
    "Mecca",
    "Luanda",
    "Kaduna",
    "Dubai",
    "Yaoundé",
    "Byblos",
    "Hong Kong",
    "Tehran",
    "Mbuji-Mayi",
    "Amman",
    "Istanbul",
    "Khartoum",
    "Brazzaville",
    "Tripoli",
    "Lusaka",
    "Aqaba",
    "Durban",
    "Bulawayo",
  ];

  const productRange = [
    { name: "Pipes & Tubes", slug: "pipes-tubes" },
    { name: "Sheets & Plates", slug: "sheets-plates" },
    { name: "Round Bars", slug: "round-bars" },
    { name: "Flanges", slug: "flanges" },
    { name: "Buttweld Fittings", slug: "buttweld-fittings" },
    { name: "Socketweld Fittings", slug: "socketweld-fittings" },
    { name: "Fasteners", slug: "fasteners" },
    { name: "Angles & Channels", slug: "angles-channels" },
    {
      name: "Refractory Fixings & Anchors",
      slug: "refractory-fixings-anchors",
    },
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

  // Product data - LCC/LCB Billets
  const productData = {
    title: "LCC / LCB Billets / Low Temperature Carbon Steel Billets",
    subtitle:
      "LCC LCB Billets Manufacturer, Low Temperature Carbon Steel Billets, ASTM A352 LCC/LCB Billets, LCC/LCB Steel Billets Exporter in India.",
    description1:
      "Sunlight Forge & Fitting Pvt. Ltd. is a leading manufacturer, supplier, and exporter of LCC / LCB Billets, which are manufactured from premium quality low temperature carbon steel materials. These billets offer excellent low-temperature toughness, high strength, and reliable performance for demanding industrial applications.",
    description2:
      "LCC / LCB Billets are specifically designed for applications requiring excellent low-temperature toughness and high strength. These products are manufactured as per ASTM A352 / ASME SA352 standards and are available in various grades including LCC and LCB to meet diverse industrial requirements.",
    description3:
      "Our LCC / LCB billets are manufactured as per ASTM A352 / ASME SA352 standards and are available in grades LCC and LCB, each offering unique properties for specific applications.",
    description4:
      "Our LCC / LCB Billets are available in various sizes as per customer requirements. We manufacture and stock even odd sizes which is hard to find.",
    grades: [
      "ASTM A352 / ASME SA352 Grade LCC",
      "ASTM A352 / ASME SA352 Grade LCB",
    ],
    specifications: {
      standard: "ASTM A352 / ASME SA352",
      grades: "LCC, LCB",
      form: "Billets, Blooms, Ingots",
      size: "As per customer requirements (custom sizes available)",
      material: "Low Temperature Carbon Steel",
      application:
        "Low Temperature Service, Pressure Vessels, Valves, Fittings",
    },

    // LCC Specification Table
    lccSpecification: [
      { parameter: "Material", value: "LCC – Low Temperature Carbon Steel" },
      { parameter: "Cast ASTM / Standards", value: "A352, A352M" },
      { parameter: "Cast UNS", value: "J02500" },
      { parameter: "Heat Treatment", value: "Normalize and Temper" },
      {
        parameter: "Applications",
        value:
          "Used in low-temperature applications. Ideal for pressure vessels, valves, and fittings. Common in oil & gas, petrochemical, and marine industries.",
      },
    ],

    // LCB Specification Table
    lcbSpecification: [
      { parameter: "Material", value: "LCB – Low Temperature Carbon Steel" },
      { parameter: "Cast ASTM / Standards", value: "A352, A352M" },
      { parameter: "Cast UNS", value: "J02500" },
      { parameter: "Heat Treatment", value: "Normalize and Temper" },
      {
        parameter: "Applications",
        value:
          "Used in low-temperature applications. Ideal for pressure vessels, valves, and fittings. Common in oil & gas, petrochemical, and marine industries.",
      },
    ],

    // LCC Chemical Composition
    lccChemicalComposition: [
      { element: "Carbon", symbol: "C", percentage: "0.30 max." },
      { element: "Silicon", symbol: "Si", percentage: "0.60 max." },
      { element: "Manganese", symbol: "Mn", percentage: "1.00 - 1.60" },
      { element: "Phosphorus", symbol: "P", percentage: "0.040 max." },
      { element: "Sulphur", symbol: "S", percentage: "0.045 max." },
      { element: "Nickel", symbol: "Ni", percentage: "0.50 max." },
      { element: "Chromium", symbol: "Cr", percentage: "0.40 max." },
      { element: "Molybdenum", symbol: "Mo", percentage: "0.25 max." },
      { element: "Copper", symbol: "Cu", percentage: "0.40 max." },
      { element: "Vanadium", symbol: "V", percentage: "0.03 max." },
      { element: "Iron", symbol: "Fe", percentage: "Balance" },
    ],

    // LCB Chemical Composition
    lcbChemicalComposition: [
      { element: "Carbon", symbol: "C", percentage: "0.30 max." },
      { element: "Silicon", symbol: "Si", percentage: "0.60 max." },
      { element: "Manganese", symbol: "Mn", percentage: "1.00 - 1.60" },
      { element: "Phosphorus", symbol: "P", percentage: "0.040 max." },
      { element: "Sulphur", symbol: "S", percentage: "0.045 max." },
      { element: "Nickel", symbol: "Ni", percentage: "0.50 max." },
      { element: "Chromium", symbol: "Cr", percentage: "0.40 max." },
      { element: "Molybdenum", symbol: "Mo", percentage: "0.25 max." },
      { element: "Copper", symbol: "Cu", percentage: "0.40 max." },
      { element: "Vanadium", symbol: "V", percentage: "0.03 max." },
      { element: "Iron", symbol: "Fe", percentage: "Balance" },
    ],

    // LCC Mechanical Properties
    lccMechanicalProperties: [
      { property: "Tensile Strength", value: "485 MPa min." },
      { property: "Yield Strength", value: "275 MPa min." },
      { property: "Elongation", value: "22% min." },
      { property: "Reduction of Area", value: "35% min." },
      { property: "Impact Energy (CVN)", value: "27 J min." },
      { property: "Hardness", value: "137 - 187 HB" },
    ],

    // LCB Mechanical Properties
    lcbMechanicalProperties: [
      { property: "Tensile Strength", value: "450 MPa min." },
      { property: "Yield Strength", value: "240 MPa min." },
      { property: "Elongation", value: "22% min." },
      { property: "Reduction of Area", value: "35% min." },
      { property: "Impact Energy (CVN)", value: "27 J min." },
      { property: "Hardness", value: "137 - 187 HB" },
    ],

    // LCC Heat Treatment
    lccHeatTreatment: [
      { parameter: "Normalizing Temperature", value: "870 - 925°C" },
      { parameter: "Tempering Temperature", value: "620 - 675°C" },
      { parameter: "Quenching Media", value: "Air or Water" },
    ],

    // LCB Heat Treatment
    lcbHeatTreatment: [
      { parameter: "Normalizing Temperature", value: "870 - 925°C" },
      { parameter: "Tempering Temperature", value: "620 - 675°C" },
      { parameter: "Quenching Media", value: "Air or Water" },
    ],

    // Equivalent Standards
    equivalentStandards: [
      {
        grade: "LCC",
        astm: "A352 LCC",
        asme: "SA352 LCC",
        uns: "J02500",
        en: "16Mo3",
        jis: "SCPH 21",
        bs: "BS 1503",
      },
      {
        grade: "LCB",
        astm: "A352 LCB",
        asme: "SA352 LCB",
        uns: "J02500",
        en: "16Mo3",
        jis: "SCPH 21",
        bs: "BS 1503",
      },
    ],

    types: [
      "ASTM A352 LCC Billets",
      "ASTM A352 LCB Billets",
      "Low Temperature Carbon Steel Billets",
      "LCC/LCB Steel Blooms",
      "LCC/LCB Ingots",
      "Custom Size LCC Billets",
      "Custom Size LCB Billets",
      "Industrial Grade LCC/LCB Billets",
    ],
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

  const renderTable = (data, headers) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
        <thead>
          <tr className="bg-[#4A148C] text-white">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((row, idx) => (
            <tr key={idx}>
              {Object.values(row).map((value, colIdx) => (
                <td key={colIdx} className="px-4 py-2.5 text-sm text-slate-700">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>
          LCC / LCB Billets | Low Temperature Carbon Steel Billets | Sunlight
          Forge
        </title>
        <meta
          name="description"
          content="LCC LCB Billets Manufacturer. ASTM A352 LCC/LCB Billets, Low Temperature Carbon Steel Billets. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {billets.badge || "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {/* ===== BILLETS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      BILLETS
                    </h4>
                    <ul className="space-y-0.5">
                      {billetProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/billets/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "lcc-lcb-billets"
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
                              item.slug === "billets"
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
                  onClick={() => navigate("/products/billets")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Billets
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${billetImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      {productData.title}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {productData.subtitle}
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
                    src={billetImage}
                    alt="LCC LCB Billets"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  LCC / LCB Billets – ASTM A352
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  {productData.description1}
                </p>
                <p>{productData.description2}</p>
                <p>{productData.description3}</p>
                <p>{productData.description4}</p>
              </div>

              {/* ===== LCC SECTION ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  LCC Low Temperature Carbon Steel Billets
                </h2>
                <p className="text-slate-700 mb-6">
                  LCC low temperature carbon steel billets are distinguished by
                  their excellent low-temperature toughness, high strength, and
                  reliable performance in demanding low-temperature
                  applications.
                </p>

                {/* LCC Specification Table */}
                <h3 className="text-xl font-bold text-[#4A148C] mb-4">
                  LCC Billets Specification
                </h3>
                {renderTable(productData.lccSpecification, [
                  "Parameter",
                  "Value",
                ])}

                {/* LCC Chemical Composition */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  LCC Billets Chemical Composition
                </h3>
                {renderTable(productData.lccChemicalComposition, [
                  "Element",
                  "Symbol",
                  "Percentage",
                ])}

                {/* LCC Mechanical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  LCC Billets Mechanical Properties
                </h3>
                {renderTable(productData.lccMechanicalProperties, [
                  "Property",
                  "Value",
                ])}

                {/* LCC Heat Treatment */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  LCC Billets Heat Treatment
                </h3>
                {renderTable(productData.lccHeatTreatment, [
                  "Parameter",
                  "Value",
                ])}
              </div>

              {/* ===== LCB SECTION ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  LCB Low Temperature Carbon Steel Billets
                </h2>
                <p className="text-slate-700 mb-6">
                  LCB low temperature carbon steel billets offer excellent
                  low-temperature toughness and high strength, ideal for
                  pressure vessels, valves, and fittings in low-temperature
                  service.
                </p>

                {/* LCB Specification Table */}
                <h3 className="text-xl font-bold text-[#4A148C] mb-4">
                  LCB Billets Specification
                </h3>
                {renderTable(productData.lcbSpecification, [
                  "Parameter",
                  "Value",
                ])}

                {/* LCB Chemical Composition */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  LCB Billets Chemical Composition
                </h3>
                {renderTable(productData.lcbChemicalComposition, [
                  "Element",
                  "Symbol",
                  "Percentage",
                ])}

                {/* LCB Mechanical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  LCB Billets Mechanical Properties
                </h3>
                {renderTable(productData.lcbMechanicalProperties, [
                  "Property",
                  "Value",
                ])}

                {/* LCB Heat Treatment */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  LCB Billets Heat Treatment
                </h3>
                {renderTable(productData.lcbHeatTreatment, [
                  "Parameter",
                  "Value",
                ])}
              </div>

              {/* ===== EQUIVALENT STANDARDS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Equivalent Standards
                </h2>
                {renderTable(productData.equivalentStandards, [
                  "Grade",
                  "ASTM",
                  "ASME",
                  "UNS",
                  "EN",
                  "JIS",
                  "BS",
                ])}
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
                  EXPORT DESTINATIONS FOR LCC/LCB BILLETS, LOW TEMPERATURE
                  CARBON STEEL BILLETS
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

export default LCCLCBBilletsPage;
