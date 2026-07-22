import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import graphiteFilledBronzeBush from "../../data/productCategories/graphite-filled-bronze-bush";
import bushImage from "../../assets/productsImage/graphite-bronze-bush.jpg";

const BronzeBushesPage = () => {
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

  // Get all bush products from the structured data
  const allBushProducts = graphiteFilledBronzeBush.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allBushProducts.find(
    (item) => item.slug === "graphite-filled-bronze-bush",
  );

  // All bush products for the sidebar
  const bushProducts = allBushProducts;

  const allDestinations = [
    "Peru",
    "Africa",
    "Italy",
    "Angola",
    "Ethiopa",
    "Israel",
    "Cameroon",
    "Venezuela",
    "Germany",
    "Iran",
    "Argentina",
    "Azerbaijan",
    "Chine",
    "Morocco",
    "Australia",
    "Bahrain",
    "Mozambique",
    "London",
    "Turkey",
    "Russia",
    "UAE",
    "Vietnam",
    "Dubai",
    "Jordan",
    "Trinidad and Tobago",
    "Brazil",
    "Uganda",
    "Kuwait",
    "Egypt",
    "Saudi Arabia",
    "Sri Lanka",
    "Ghana",
    "Iraq",
    "UK",
    "Houston",
    "Colombia",
    "Indonesia",
    "South Africa",
    "Algeria",
    "Nigeria",
    "Sudan",
    "New Zealand",
    "Canada",
    "United States",
    "Thailand (Bangkok)",
    "Democratic Republic of the Congo",
    "Kazakhstan",
  ];

  const allCities = [
    "Muscat",
    "Tehran",
    "Freetown",
    "Brazzaville",
    "Tripoli",
    "Luanda",
    "Subra al-Haymah",
    "Tel Aviv",
    "Antananarivo",
    "Singapore",
    "Mogadishu",
    "Amman",
    "Dammam",
    "Benin",
    "Ibadan",
    "Beirut",
    "Dar es Salaam",
    "Aqaba",
    "Zaria",
    "Manama",
    "New York",
    "Bulawayo",
    "Lusaka",
    "Riyadh",
    "Abidjan",
    "Alexandria",
    "Jerusalem",
    "Jeddah",
    "Rabat",
    "Durban",
    "Bethlehem",
    "Accra",
    "Omdurman",
    "Lagos",
    "Lubumbashi",
    "Addis Ababa",
    "Doha",
    "Kaduna",
    "Dakar",
    "Cairo",
    "Cape Town",
    "Yaoundé",
    "Cairo",
    "Kinshasa",
    "Casablanca",
    "Kampala",
    "Kolwezi",
    "Nairobi",
    "Byblos",
    "Pretoria",
    "Fez",
    "Port Elizabeth",
    "Colombo",
    "Hong Kong",
    "Harare",
    "Maputo",
    "Mecca",
    "Khartoum",
    "Abu Dhabi",
    "Kano",
    "Dubai",
    "Mbuji-Mayi",
    "Bamako",
    "Johannesburg",
    "Ouagadougou",
    "Conakry",
    "Sharm el-Sheikh",
    "Algiers",
    "Soweto",
    "Maiduguri",
    "Istanbul",
    "Giza",
    "Douala",
    "Port Harcourt",
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

  // Product data - Graphite Filled Bronze Bushes
  const productData = {
    title: "Graphite Filled Bronze Bushes / Self-Lubricating Bronze Bushes",
    subtitle:
      "Graphite Filled Bronze Bushes Manufacturer, Self-Lubricating Bronze Bushes, Graphite Bronze Bushes Exporter in India.",
    description1:
      "Neon Alloys is a leading manufacturer and exporter of Graphite Filled Bronze Bushes in India, offering superior-quality, self-lubricating solutions for high-performance industrial applications. These bushes are specially designed for environments where traditional lubrication methods like greasing or oiling are impractical. Engineered with precision, our Graphite Filled Bronze Bushes feature embedded solid lubricants, ensuring smooth operation, reduced friction, and enhanced durability, even under extreme conditions.",
    description2:
      "Our Graphite Bronze Bushes are widely used in industries such as automotive, heavy machinery, marine, and aerospace, providing excellent wear resistance and extended service life. At Neon Alloys, we manufacture these bushes using high-grade materials and advanced technology, ensuring optimal performance and cost-effectiveness. Whether you need standard sizes or customized solutions, we offer premium-quality graphite-embedded bronze bushes at competitive prices. Contact us today for the best prices!",

    // Technical Datasheet
    technicalDatasheet: {
      product: "Graphite Filled Bronze Bushes",
      manufacturer: "Neon Alloys",
    },

    // Material Composition Table
    materialComposition: [
      {
        copperAlloy: "C83600",
        standard: "ASTM",
        cu: "84-86",
        sn: "4.3-6",
        pb: "4-5.7",
        zn: "4.3-6",
        fe: "0.25",
        ni: "1",
      },
      {
        copperAlloy: "RG-5",
        standard: "DIN",
        cu: "84-86",
        sn: "4-6",
        pb: "4-6",
        zn: "4-6",
        fe: "0.2",
        ni: "2",
      },
      {
        copperAlloy: "CB491K",
        standard: "EN",
        cu: "83-86.5",
        sn: "4.2-6",
        pb: "4.2-5.8",
        zn: "4.5-6.5",
        fe: "0.25",
        ni: "2",
      },
      {
        copperAlloy: "CAC406 (BC6)",
        standard: "JIS",
        cu: "Rem.",
        sn: "4-6",
        pb: "4-6",
        zn: "4-6",
        fe: "0.5",
        ni: "2",
      },
      {
        copperAlloy: "LG-2",
        standard: "BS:1400",
        cu: "84-86",
        sn: "4-6",
        pb: "4-6",
        zn: "4-6",
        fe: "0.5",
        ni: "2",
      },
      {
        copperAlloy: "LTB-2",
        standard: "IS:318-1981",
        cu: "Rem.",
        sn: "4-6",
        pb: "4-6",
        zn: "4-6",
        fe: "0.35",
        ni: "2",
      },
      {
        copperAlloy: "G-CuSn5Zn5Pb5",
        standard: "UNI7013",
        cu: "Rem.",
        sn: "4-6",
        pb: "4-6",
        zn: "4-6",
        fe: "0.3",
        ni: "2",
      },
    ],

    // Mechanical Properties
    mechanicalProperties: [
      { property: "Hardness (HB)", value: "70-150 Brinell" },
      { property: "Tensile Strength", value: "200-350 MPa" },
      { property: "Yield Strength", value: "90-150 MPa" },
      { property: "Elongation", value: "5-20%" },
    ],

    // Physical Properties
    physicalProperties: [
      { property: "Density", value: "7.5-8.9 g/cm³" },
      { property: "Thermal Conductivity", value: "50-70 W/m·K" },
      { property: "Electrical Conductivity", value: "7-15% IACS" },
      {
        property: "Coefficient of Friction",
        value: "~0.15 (dry) / ~0.05 (lubricated)",
      },
    ],

    // Applications
    applications: [
      "Automotive: Suspension systems, gearboxes, brake systems",
      "Heavy Machinery: Hydraulic cylinders, excavators, industrial presses",
      "Marine & Aerospace: Propeller shafts, turbines, aerospace components",
      "Oil & Gas: Valves, pumps, high-load bearings",
    ],

    // Advantages
    advantages: [
      "Self-lubricating: No need for external oiling/greasing",
      "High wear resistance: Suitable for harsh environments",
      "Corrosion-resistant: Performs well in humid and chemical-exposed conditions",
      "Maintenance-free: Extended lifespan, reducing downtime",
    ],

    // Customization Options
    customizationOptions: [
      "Size & Dimensions: As per client requirements",
      "Material Composition: Based on industry standards",
      "Surface Treatment: Special coatings for enhanced durability",
    ],

    types: [
      "Graphite Filled Bronze Bushes",
      "Self-Lubricating Bronze Bushes",
      "Graphite Bronze Bushes",
      "Custom Bronze Bushes",
      "Industrial Bronze Bushes",
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
          Graphite Filled Bronze Bushes | Self-Lubricating Bronze Bushes |
          Sunlight Forge
        </title>
        <meta
          name="description"
          content="Graphite Filled Bronze Bushes Manufacturer. Self-Lubricating Bronze Bushes, Graphite Bronze Bushes. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {graphiteFilledBronzeBush.badge ||
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
                  {/* ===== GRAPHITE FILLED BRONZE BUSH SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      GRAPHITE FILLED BRONZE BUSH
                    </h4>
                    <ul className="space-y-0.5">
                      {bushProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/graphite-filled-bronze-bush/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "graphite-filled-bronze-bush"
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
                              item.slug === "graphite-filled-bronze-bush"
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
                  onClick={() =>
                    navigate("/products/graphite-filled-bronze-bush")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Graphite Filled Bronze Bush
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${bushImage})`,
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
                    src={bushImage}
                    alt="Graphite Filled Bronze Bushes"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Graphite Filled Bronze Bushes – Self-Lubricating Solutions
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  {productData.description1}
                </p>
                <p>{productData.description2}</p>
              </div>

              {/* ===== TECHNICAL DATASHEET ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Technical Datasheet
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Product:</strong>{" "}
                        {productData.technicalDatasheet.product}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Manufacturer:
                        </strong>{" "}
                        {productData.technicalDatasheet.manufacturer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== MATERIAL COMPOSITION ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Graphite Filled Bronze Bushes - Material Composition
                </h2>
                {renderTable(productData.materialComposition, [
                  "Copper Alloys",
                  "Standard",
                  "Cu (%)",
                  "Sn (%)",
                  "Pb (%)",
                  "Zn (%)",
                  "Fe (%)",
                  "Ni (%)",
                ])}
              </div>

              {/* ===== MECHANICAL PROPERTIES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Graphite Filled Bronze Bushes - Mechanical Properties
                </h2>
                {renderTable(productData.mechanicalProperties, [
                  "Property",
                  "Value",
                ])}
              </div>

              {/* ===== PHYSICAL PROPERTIES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Graphite Filled Bronze Bush - Physical Properties
                </h2>
                {renderTable(productData.physicalProperties, [
                  "Property",
                  "Value",
                ])}
              </div>

              {/* ===== APPLICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Graphite Filled Bronze Bushes - Applications
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {productData.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#66BB6A] font-bold">•</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ===== ADVANTAGES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Graphite Filled Bronze Bushes - Advantages
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {productData.advantages.map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#66BB6A] font-bold">•</span>
                        {adv}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ===== CUSTOMIZATION OPTIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Graphite Filled Bronze Bushes - Customization Options
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {productData.customizationOptions.map((opt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#66BB6A] font-bold">•</span>
                        {opt}
                      </li>
                    ))}
                  </ul>
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
                  EXPORT DESTINATIONS FOR GRAPHITE FILLED BRONZE BUSHES
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

export default BronzeBushesPage;
