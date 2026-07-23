import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import billets from "../../data/productCategories/billets";
import billetImage from "../../assets/productsImage/gr900-billets.jpg";

const Grade900BilletsPage = () => {
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
    (item) => item.slug === "gr900-billets",
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

  // Product data - Grade 900 Billets
  const productData = {
    title: "Grade 900 Billets / High Strength Alloy Steel Billets",
    subtitle:
      "Grade 900 Billets Manufacturer, High Strength Alloy Steel Billets, GR900 Billets, GR900 Steel Billets Exporter in India.",
    description1:
      "Neon Alloys is a leading manufacturer and supplier of AA900 Grade 900 Billets in India. This high-strength, high-temperature aluminum alloy is known for its excellent mechanical properties and corrosion resistance. Contact us for premium AA900 billets!",
    description2:
      "Premium-grade Grade 900 billets, offering high strength and durability for demanding industrial applications. Perfect for high-temperature and high-stress environments.",
    description3:
      "We are manufacturer and exporters for High Strength Grade 900 Billets in India.",
    description4:
      "Neon Alloys is recognized as a leading manufacturer and exporter of Continuous Casting High Strength Grade 900 Billets. Grade 900 Billets exhibit excellent resistance to corrosion in marine, industrial, and atmospheric environments.",
    description5:
      "Grade 900 billets are typically made from high-strength alloy steel, designed for applications in industries such as construction, aerospace, and heavy machinery. These billets are known for their exceptional mechanical properties, high-temperature resistance, and excellent durability, making them suitable for demanding environments.",
    description6:
      "The production of Grade 900 billets starts with the steelmaking process, where raw materials such as iron ore, coal, and limestone are melted in an electric arc furnace to produce molten steel. This molten steel is then cast into a continuous strand, which is cut into individual billets. The billets are then processed through rolling mills to achieve the desired shape and size, followed by heat treatment to develop the required microstructure and mechanical properties.",
    description7:
      "Grade 900 billets exhibit high ductility, enabling them to withstand plastic deformation without fracturing. These billets are also highly weldable and can be joined using various techniques, including gas metal arc welding (GMAW), gas tungsten arc welding (GTAW), and resistance welding, making them ideal for a variety of industrial applications.",
    grades: ["ASTM A615 / ASTM A706"],
    specifications: {
      standard: "ASTM A615 / ASTM A706",
      grades: "GR900",
      form: "Billets, Blooms, Ingots",
      size: "100x100 mm, 120x120 mm, 150x150 mm, etc.",
      length: "6m, 9m, or as per customer requirement",
      straightness: "≤ 5 mm per meter",
      heatTreatment: "Normalize And Temper",
      application:
        "Structural steel components, High-strength rebar production, Automotive and heavy machinery parts, Forgings and fasteners etc.",
    },

    // Grade 900 Specification Table
    gr900Specification: [
      { parameter: "Material", value: "High Strength Alloy Steel Grade 900" },
      { parameter: "ASTM / Standards", value: "ASTM A615 / ASTM A706" },
      { parameter: "Size", value: "100x100 mm, 120x120 mm, 150x150 mm, etc." },
      { parameter: "Length", value: "6m, 9m, or as per customer requirement" },
      { parameter: "Straightness", value: "≤ 5 mm per meter" },
      { parameter: "Heat Treatment", value: "Normalize And Temper" },
      {
        parameter: "Applications",
        value:
          "Structural steel components, High-strength rebar production, Automotive and heavy machinery parts, Forgings and fasteners etc.",
      },
    ],

    // Grade 900 Chemical Composition
    gr900ChemicalComposition: [
      { element: "Carbon (C)", percentage: "0.15 - 0.30" },
      { element: "Silicon (Si)", percentage: "0.10 - 0.50" },
      { element: "Manganese (Mn)", percentage: "0.50 - 1.50" },
      { element: "Sulfur (S)", percentage: "≤ 0.050" },
      { element: "Phosphorus (P)", percentage: "≤ 0.050" },
      { element: "Chromium (Cr)", percentage: "≤ 0.30" },
      { element: "Nickel (Ni)", percentage: "≤ 0.30" },
      { element: "Molybdenum (Mo)", percentage: "≤ 0.10" },
      { element: "Copper (Cu)", percentage: "≤ 0.30" },
    ],

    // Grade 900 Mechanical Properties
    gr900MechanicalProperties: [
      { property: "Yield Strength (YS)", value: "900 - 1000", unit: "MPa" },
      {
        property: "Ultimate Tensile Strength (UTS)",
        value: "1000 - 1100",
        unit: "MPa",
      },
      { property: "Elongation (%)", value: "10 - 15", unit: "%" },
      { property: "Hardness (Brinell)", value: "280 - 320", unit: "HB" },
      {
        property: "Impact Toughness (Charpy V-notch)",
        value: "20 - 40",
        unit: "J",
      },
      { property: "Modulus of Elasticity", value: "~200", unit: "GPa" },
      { property: "Density", value: "7.85", unit: "g/cm³" },
    ],

    // Physical Properties
    gr900PhysicalProperties: [
      { property: "Density", value: "~7.85", unit: "g/cm³" },
      { property: "Tensile Strength", value: "~900 - 1100", unit: "MPa" },
      { property: "Yield Strength", value: "~850 - 950", unit: "MPa" },
      { property: "Elongation", value: "~10 - 15", unit: "%" },
      { property: "Hardness", value: "~250 - 300", unit: "HB" },
      { property: "Thermal Conductivity", value: "~45 - 55", unit: "W/m·K" },
      { property: "Electrical Resistivity", value: "~0.1 - 0.2", unit: "µΩ·m" },
      { property: "Melting Point", value: "~1450 - 1520", unit: "°C" },
    ],

    types: [
      "Grade 900 High Strength Billets",
      "GR900 Alloy Steel Billets",
      "ASTM A615 GR900 Billets",
      "High Strength Steel Billets",
      "Industrial Grade GR900 Billets",
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

  const renderTable = (data, headers, hasUnit = false) => (
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
          Grade 900 Billets | High Strength Alloy Steel Billets | Sunlight Forge
        </title>
        <meta
          name="description"
          content="Grade 900 Billets Manufacturer. High Strength Alloy Steel Billets, GR900 Billets, ASTM A615/A706. Export quality, best prices."
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
                              item.slug === "gr900-billets"
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
                    alt="Grade 900 Billets"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Grade 900 High Strength Billets
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
                <p>{productData.description5}</p>
                <p>{productData.description6}</p>
                <p>{productData.description7}</p>
              </div>

              {/* ===== GRADE 900 SECTION ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Grade 900 High Strength Billets
                </h2>
                <p className="text-slate-700 mb-6">
                  Grade 900 high strength billets are distinguished by their
                  exceptional mechanical properties, high-temperature
                  resistance, and excellent durability for demanding
                  applications in construction, aerospace, and heavy machinery.
                </p>

                {/* Grade 900 Specification Table */}
                <h3 className="text-xl font-bold text-[#4A148C] mb-4">
                  Grade 900 High Strength Billets Specification
                </h3>
                {renderTable(productData.gr900Specification, [
                  "Parameter",
                  "Value",
                ])}

                {/* Grade 900 Chemical Composition */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  Grade 900 Billets Chemical Composition
                </h3>
                {renderTable(productData.gr900ChemicalComposition, [
                  "Element",
                  "Composition (%)",
                ])}

                {/* Grade 900 Mechanical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  Grade 900 Billets Mechanical Properties
                </h3>
                {renderTable(productData.gr900MechanicalProperties, [
                  "Property",
                  "Value",
                  "Unit",
                ])}

                {/* Grade 900 Physical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  Physical Properties of Grade 900 Billets
                </h3>
                {renderTable(productData.gr900PhysicalProperties, [
                  "Property",
                  "Value",
                  "Unit",
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
                  EXPORT DESTINATIONS FOR GRADE 900 BILLETS
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

export default Grade900BilletsPage;
