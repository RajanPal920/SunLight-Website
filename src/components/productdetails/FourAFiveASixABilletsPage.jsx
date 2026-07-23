import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import billets from "../../data/productCategories/billets";
import billetImage from "../../assets/productsImage/4-5-6-billets.jpg";

const FourAFiveASixABilletsPage = () => {
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
    (item) => item.slug === "4-5-6-billets",
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

  // Product data
  const productData = {
    title: "4A / 5A / 6A Duplex & Super Duplex Stainless Steel Billets",
    subtitle:
      "4A/5A/6A Duplex & Super Duplex Stainless Steel Billets Manufacturer and Supplier in India",
    description1:
      "Neon Alloys is a trusted manufacturer and exporter of 4A, 5A, and 6A Duplex & Super Duplex Stainless Steel Billets in India.",
    description2:
      "We are manufacturer and exporters for 4A, 5A, 6A – Duplex & Super Duplex Stainless Steel Billets in India.",
    description3:
      "Neon Alloy is acknowledged as a Leading Manufacturer and Exporters of 4A/5A/6A Billets. Duplex and Super Duplex stainless steel billets are a type of high-performance alloy that provides a distinct mix of corrosion resistance, strength, and weldability. These billets are frequently utilized in industries such as oil and gas, chemical processing, power generation, and naval building, all of which have hostile environments and high pressures.",
    description4:
      "The 'A' designation in the name of these billets denotes the inclusion of molybdenum, which increases their resistance to pitting and crevice corrosion. The digits 4, 5, and 6 represent increasing amounts of molybdenum content, with 4A being the lowest and 6A being the highest. These are semi-finished metal products in the form of a bar or ingot, used as raw material for further processing into various shapes and sizes.",

    // 4A Duplex Stainless Steel Billets
    fourATitle: "4A Duplex Stainless Steel Billets",
    fourASubtitle: "4A Duplex Stainless Steel Billets Manufacturer & Exporter",
    fourADescription:
      "4A duplex stainless steel billets are distinguished by their high strength, outstanding corrosion resistance, and weldability. They contain at least 3.5% molybdenum, which makes them very resistant to pitting and crevice corrosion in chloride-containing environments. The microstructure of 4A duplex stainless steel billets is composed of austenite and ferrite, which provides excellent strength, toughness, and resistance to stress corrosion cracking.",
    fourAApplications: [
      "Heat exchangers and condensers in power generation and chemical processing industries",
      "Piping and tubing in oil and gas production and transportation",
      "Marine hardware and equipment, such as propeller shafts and pumps",
      "Desalination plants and seawater handling systems",
    ],

    // Table 1: 4A Specification
    fourASpecification: [
      { parameter: "Material", value: "4A – Duplex Stainless Steel" },
      { parameter: "Cast ASTM / Standards", value: "A890, A995" },
      { parameter: "Cast UNS", value: "J92205" },
      { parameter: "Wrought UNS", value: "S31803" },
      { parameter: "Wrought Grade", value: "2205" },
      { parameter: "Cast Grade", value: "CD3MN, 4A" },
      { parameter: "Heat Treatment", value: "Solution Anneal" },
      {
        parameter: "Applications",
        value:
          "Used in low-temperature applications. Ideal for pressure vessels, valves, and fittings Common in oil & gas, petrochemical, and marine industries.",
      },
    ],

    // Table 2: 4A Chemical Composition
    fourAChemicalComposition: [
      { element: "Carbon", symbol: "C", percentage: "0.030 max." },
      { element: "Silicon", symbol: "Si", percentage: "1.000 max." },
      { element: "Manganese", symbol: "Mn", percentage: "1.500 max." },
      { element: "Phosphorus", symbol: "P", percentage: "0.040 max." },
      { element: "Sulphur", symbol: "S", percentage: "0.020 max." },
      { element: "Chromium", symbol: "Cr", percentage: "21.000 - 23.500" },
      { element: "Nickel", symbol: "Ni", percentage: "4.500 - 6.500" },
      { element: "Molybdenum", symbol: "Mo", percentage: "2.500 - 3.500" },
      { element: "Copper", symbol: "Cu", percentage: "1.000 max." },
      { element: "Nitrogen", symbol: "N", percentage: "0.100 - 0.300" },
      { element: "Iron", symbol: "Fe", percentage: "Balance" },
    ],

    // Table 3: 4A Mechanical Properties
    fourAMechanicalProperties: [
      { property: "Tensile Strength", value: "620 min." },
      { property: "Yield Strength", value: "415 min." },
      { property: "Elongation", value: "25 min." },
      { property: "Reduction of Area", value: "-" },
      { property: "Hardness", value: "-" },
      { property: "Impact", value: "-" },
    ],

    // Table 4: 4A Cross Reference
    fourACrossReference: [
      { material: "A995 4A", standard: "ASTM", industry: "Casting" },
      { material: "J92205", standard: "UNS", industry: "Casting" },
      {
        material: "A240 UNS S31803",
        standard: "ASTM",
        industry: "Steel, Sheet, Plate and Strip",
      },
      {
        material: "A240 UNS S32205",
        standard: "ASTM",
        industry: "Steel, Sheet, Plate and Strip",
      },
      { material: "22Cr5NiMoN", standard: "ASTM", industry: "Casting" },
      { material: "CD3MN", standard: "ASTM", industry: "Casting" },
    ],

    // 5A Duplex Stainless Steel Billets
    fiveATitle: "5A Duplex Stainless Steel Billets",
    fiveASubtitle: "5A Duplex Stainless Steel Billets Manufacturer & Exporter",
    fiveADescription:
      "5A duplex stainless steel billets are more corrosion resistant and stronger than 4A duplex stainless steel billets. They include at least 4.5% molybdenum, which increases their resistance to pitting and crevice corrosion in harsh situations. The microstructure of 5A duplex stainless steel billets is identical to that of 4A, consisting of austenite and ferrite phases.",
    fiveAApplications: [
      "High-temperature and high-pressure applications in power generation and chemical processing industries",
      "Seawater injection systems and desalination plants",
      "Oil and gas production and transportation, including subsea and offshore applications",
      "Chemical processing and storage facilities",
    ],

    // Table 5: 5A Specification
    fiveASpecification: [
      { parameter: "Material", value: "5A – Duplex Stainless Steel" },
      { parameter: "Cast ASTM / Standards", value: "A890, A995" },
      { parameter: "Cast UNS", value: "J93404" },
      { parameter: "Wrought UNS", value: "S32750" },
      { parameter: "Wrought Grade", value: "2507" },
      { parameter: "Cast Grade", value: "CE3MN, 5A" },
      { parameter: "Heat Treatment", value: "Solution Anneal" },
      {
        parameter: "Applications",
        value:
          "Used in low-temperature applications. Ideal for pressure vessels, valves, and fittings Common in oil & gas, petrochemical, and marine industries.",
      },
    ],

    // Table 6: 5A Chemical Composition
    fiveAChemicalComposition: [
      { element: "Carbon", symbol: "C", percentage: "0.030 max." },
      { element: "Silicon", symbol: "Si", percentage: "1.000 max." },
      { element: "Manganese", symbol: "Mn", percentage: "1.500 max." },
      { element: "Phosphorus", symbol: "P", percentage: "0.040 max." },
      { element: "Sulphur", symbol: "S", percentage: "0.020 max." },
      { element: "Chromium", symbol: "Cr", percentage: "24.000 - 26.000" },
      { element: "Nickel", symbol: "Ni", percentage: "6.000 - 8.000" },
      { element: "Molybdenum", symbol: "Mo", percentage: "4.000 - 5.000" },
      { element: "Nitrogen", symbol: "N", percentage: "0.100 - 0.300" },
      { element: "Iron", symbol: "Fe", percentage: "Balance" },
    ],

    // Table 7: 5A Mechanical Properties
    fiveAMechanicalProperties: [
      { property: "Tensile Strength", value: "690 min." },
      { property: "Yield Strength", value: "515 min." },
      { property: "Elongation", value: "18 min." },
      { property: "Reduction of Area", value: "-" },
      { property: "Hardness", value: "-" },
      { property: "Impact", value: "-" },
    ],

    // Table 8: 5A Cross Reference
    fiveACrossReference: [
      { material: "A995 5A", standard: "ASTM", industry: "Casting" },
      {
        material: "G X2CrNiMoN26-7-4",
        standard: "AFNOR NF",
        industry: "Casting",
      },
      { material: "1.4469", standard: "EN", industry: "Casting" },
      { material: "GX2CrNiMoN26-7-4", standard: "DIN", industry: "Casting" },
      { material: "GX2CrNiMoN25-7-4", standard: "DIN", industry: "Casting" },
      { material: "J93404", standard: "UNS", industry: "Casting" },
      { material: "1.4469", standard: "DIN", industry: "Casting" },
    ],

    // 6A Super Duplex Stainless Steel Billets
    sixATitle: "6A Super Duplex Stainless Steel Billets",
    sixASubtitle:
      "6A Super Duplex Stainless Steel Billets Manufacturer & Exporter",
    sixADescription:
      "6A super duplex stainless steel billets are the most corrosion-resistant and durable of the duplex stainless steel billets. They include at least 6.5% molybdenum, which gives excellent resistance to pitting and crevice corrosion in very aggressive conditions, including those with high amounts of chloride and sulfide ions. The microstructure of 6A super duplex stainless steel billets is distinguished by a high ferrite content, which results in excellent strength, toughness, and resistance to stress corrosion cracking.",
    sixAApplications: [
      "Extremely corrosive conditions, such as sour gas and high-temperature applications, in the production and transportation of oil and gas.",
      "Applications involving high temperatures and high pressures in the sectors that produce electricity and treat chemicals.",
      "Marine hardware and equipment in extreme seawater conditions, including pumps and propeller shafts.",
      "Systems for desulfurizing flue gases and other extremely corrosive uses.",
    ],

    // Table 9: 6A Specification
    sixASpecification: [
      { parameter: "Material", value: "6A – Duplex Stainless Steel" },
      { parameter: "Cast ASTM / Standards", value: "A890, A995" },
      { parameter: "Cast UNS", value: "J93380" },
      { parameter: "Wrought UNS", value: "S32760" },
      { parameter: "Wrought Grade", value: "ZERON® 100" },
      { parameter: "Cast Grade", value: "CD3MWCuN, 6A" },
      { parameter: "Heat Treatment", value: "Solution Anneal" },
      {
        parameter: "Applications",
        value:
          "Used in low-temperature applications. Ideal for pressure vessels, valves, and fittings Common in oil & gas, petrochemical, and marine industries.",
      },
    ],

    // Table 10: 6A Chemical Composition
    sixAChemicalComposition: [
      { element: "Carbon", symbol: "C", percentage: "0.030 max." },
      { element: "Silicon", symbol: "Si", percentage: "1.000 max." },
      { element: "Manganese", symbol: "Mn", percentage: "1.000 max." },
      { element: "Phosphorus", symbol: "P", percentage: "0.030 max." },
      { element: "Sulphur", symbol: "S", percentage: "0.025 max." },
      { element: "Chromium", symbol: "Cr", percentage: "24.000 - 26.000" },
      { element: "Nickel", symbol: "Ni", percentage: "6.500 - 8.500" },
      { element: "Molybdenum", symbol: "Mo", percentage: "3.000 - 4.000" },
      { element: "Copper", symbol: "Cu", percentage: "0.500 - 1.000" },
      { element: "Nitrogen", symbol: "N", percentage: "0.200 - 0.300" },
      { element: "Tungsten", symbol: "W", percentage: "0.500 - 1.000" },
      { element: "Iron", symbol: "Fe", percentage: "Balance" },
    ],

    // Table 11: 6A Mechanical Properties
    sixAMechanicalProperties: [
      { property: "Tensile Strength", value: "690 min." },
      { property: "Yield Strength", value: "450 min." },
      { property: "Elongation", value: "25 min." },
      { property: "Reduction of Area", value: "-" },
      { property: "Hardness", value: "-" },
      { property: "Impact", value: "-" },
    ],

    // Table 12: 6A Cross Reference
    sixACrossReference: [
      { material: "A995 6A", standard: "ASTM", industry: "Casting" },
      { material: "J93380", standard: "UNS", industry: "Casting" },
      {
        material: "A240 S32205",
        standard: "ASTM",
        industry: "Plate, Sheet and Strip",
      },
      { material: "A276 532205", standard: "ASTM", industry: "Bar and Shape" },
      { material: "A988 S32205", standard: "ASTM", industry: "Casting" },
      { material: "J92205", standard: "UNS", industry: "Casting" },
      { material: "Z3CNUD26.5M", standard: "AFNOR NF", industry: "Casting" },
    ],

    types: [
      "4A Duplex Stainless Steel Billets",
      "5A Duplex Stainless Steel Billets",
      "6A Super Duplex Stainless Steel Billets",
      "Duplex Steel Billets",
      "Super Duplex Steel Billets",
      "Custom Size 4A/5A/6A Billets",
      "Industrial Grade 4A/5A/6A Billets",
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
          4A/5A/6A Duplex & Super Duplex Stainless Steel Billets | Sunlight
          Forge
        </title>
        <meta
          name="description"
          content="4A/5A/6A Duplex & Super Duplex Stainless Steel Billets Manufacturer. ASTM A890/A995, UNS J92205/J93404/J93380. Export quality, best prices."
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
                              item.slug === "4-5-6-billets"
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
                    alt="4A/5A/6A Duplex & Super Duplex Stainless Steel Billets"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  4A / 5A / 6A Duplex & Super Duplex Stainless Steel Billets
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a trusted manufacturer and exporter of 4A, 5A, and 6A
                  Duplex & Super Duplex Stainless Steel Billets in India.
                </p>
                <p>{productData.description2}</p>
                <p>{productData.description3}</p>
                <p>{productData.description4}</p>
              </div>

              {/* ===== 4A DUPLEX STAINLESS STEEL BILLETS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  {productData.fourATitle}
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-4">
                  {productData.fourASubtitle}
                </p>
                <p className="text-slate-700 mb-6">
                  {productData.fourADescription}
                </p>

                <p className="font-semibold text-[#4A148C] mb-2">
                  Typical applications of 4A duplex stainless steel billets
                  include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-1">
                  {productData.fourAApplications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>

                {/* Table 1: 4A Specification */}
                <h3 className="text-xl font-bold text-[#4A148C] mb-4">
                  4A Duplex Stainless Steel Billets Specification
                </h3>
                {renderTable(productData.fourASpecification, [
                  "Parameter",
                  "Value",
                ])}

                {/* Table 2: 4A Chemical Composition */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  4A Duplex Stainless Steel Billets Chemical Composition
                </h3>
                {renderTable(productData.fourAChemicalComposition, [
                  "Element",
                  "Symbol",
                  "Percentage",
                ])}

                {/* Table 3: 4A Mechanical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  4A Duplex Billets Mechanical Properties
                </h3>
                {renderTable(productData.fourAMechanicalProperties, [
                  "Property",
                  "Value",
                ])}

                {/* Table 4: 4A Cross Reference */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  4A Duplex Billets Cross Reference Table
                </h3>
                {renderTable(productData.fourACrossReference, [
                  "Material",
                  "Standard",
                  "Grade Belong to the Industry",
                ])}
              </div>

              {/* ===== 5A DUPLEX STAINLESS STEEL BILLETS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  {productData.fiveATitle}
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-4">
                  {productData.fiveASubtitle}
                </p>
                <p className="text-slate-700 mb-6">
                  {productData.fiveADescription}
                </p>

                <p className="font-semibold text-[#4A148C] mb-2">
                  Typical applications of 5A duplex stainless steel billets
                  include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-1">
                  {productData.fiveAApplications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>

                {/* Table 5: 5A Specification */}
                <h3 className="text-xl font-bold text-[#4A148C] mb-4">
                  5A Duplex Stainless Steel Billets Specification
                </h3>
                {renderTable(productData.fiveASpecification, [
                  "Parameter",
                  "Value",
                ])}

                {/* Table 6: 5A Chemical Composition */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  5A Billets Chemical Composition
                </h3>
                {renderTable(productData.fiveAChemicalComposition, [
                  "Element",
                  "Symbol",
                  "Percentage",
                ])}

                {/* Table 7: 5A Mechanical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  Duplex Steel 5A Billets Mechanical Properties
                </h3>
                {renderTable(productData.fiveAMechanicalProperties, [
                  "Property",
                  "Value",
                ])}

                {/* Table 8: 5A Cross Reference */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  5A Duplex Billets Cross Reference Table
                </h3>
                {renderTable(productData.fiveACrossReference, [
                  "Material",
                  "Standard",
                  "Grade Belong to the Industry",
                ])}
              </div>

              {/* ===== 6A SUPER DUPLEX STAINLESS STEEL BILLETS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  {productData.sixATitle}
                </h2>
                <p className="text-center text-sm text-[#66BB6A] font-semibold mb-4">
                  {productData.sixASubtitle}
                </p>
                <p className="text-slate-700 mb-6">
                  {productData.sixADescription}
                </p>

                <p className="font-semibold text-[#4A148C] mb-2">
                  Typical applications of 6A super duplex stainless steel
                  billets include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-1">
                  {productData.sixAApplications.map((app, idx) => (
                    <li key={idx}>{app}</li>
                  ))}
                </ul>

                {/* Table 9: 6A Specification */}
                <h3 className="text-xl font-bold text-[#4A148C] mb-4">
                  6A Duplex Stainless Steel Billets Specification
                </h3>
                {renderTable(productData.sixASpecification, [
                  "Parameter",
                  "Value",
                ])}

                {/* Table 10: 6A Chemical Composition */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  6A Billets Chemical Composition
                </h3>
                {renderTable(productData.sixAChemicalComposition, [
                  "Element",
                  "Symbol",
                  "Percentage",
                ])}

                {/* Table 11: 6A Mechanical Properties */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  Duplex Steel 6A Billets Mechanical Properties
                </h3>
                {renderTable(productData.sixAMechanicalProperties, [
                  "Property",
                  "Value",
                ])}

                {/* Table 12: 6A Cross Reference */}
                <h3 className="text-xl font-bold text-[#4A148C] mt-8 mb-4">
                  6A Duplex Billets Cross Reference Table
                </h3>
                {renderTable(productData.sixACrossReference, [
                  "Material",
                  "Standard",
                  "Grade Belong to the Industry",
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
                  EXPORT DESTINATIONS FOR 4A/5A/6A Duplex & Super Duplex Steel
                  Billets
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

export default FourAFiveASixABilletsPage;
