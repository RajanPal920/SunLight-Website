import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, PhoneCall, Globe, ArrowLeft } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import sheetsplates from "../../data/productCategories/sheets-plates";
import nickelSheetImage from "../../assets/productsImage/sheets1.jpg";

const NickelAlloySheetsPage = () => {
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

  // Get all sheet products from the structured data
  const allSheetProducts = sheetsplates.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allSheetProducts.find(
    (item) => item.slug === "nickel-alloy-sheetsplates",
  );

  // All sheet products for the sidebar
  const sheetProducts = allSheetProducts;

  const allDestinations = [
    "Bahrain",
    "Australia",
    "Saudi Arabia",
    "Chine",
    "Colombia",
    "Dubai",
    "Iraq",
    "Ethiopa",
    "Russia",
    "Sudan",
    "Democratic Republic of the Congo",
    "United States",
    "Kazakhstan",
    "Algeria",
    "Mozambique",
    "Africa",
    "Malaysia",
    "Brazil",
    "Angola",
    "Houston",
    "Israel",
    "London",
    "Jordan",
    "Ghana",
    "Kuwait",
    "Azerbaijan",
    "Vietnam",
    "Cameroon",
    "Tunisia",
    "South Africa",
    "Mexico",
    "Morocco",
    "Indonesia",
    "Uganda",
    "Sri Lanka",
    "Germany",
    "UK",
    "Iran",
    "Argentina",
    "Trinidad and Tobago",
    "Peru",
    "UAE",
    "Turkey",
    "Egypt",
    "Thailand (Bangkok)",
    "Venezuela",
    "Italy",
    "New Zealand",
    "Nigeria",
    "Canada",
    "Cairo",
    "Freetown",
    "Douala",
    "Colombo",
    "Nairobi",
    "Mogadishu",
    "Port Harcourt",
    "Accra",
    "Harare",
    "Brazzaville",
    "Singapore",
    "Istanbul",
    "Rabat",
    "Kampala",
    "Kaduna",
    "Giza",
    "Kolwezi",
    "Abidjan",
    "Maputo",
    "Benin",
    "Aqaba",
    "Pretoria",
    "Jeddah",
    "Algiers",
    "Sharm el-Sheikh",
    "Soweto",
    "Abu Dhabi",
    "Dammam",
    "Zaria",
    "Conakry",
    "Durban",
    "Alexandria",
    "Bulawayo",
    "Byblos",
    "Lagos",
    "Dakar",
    "Omdurman",
    "Kano",
    "Khartoum",
    "Beirut",
    "Tripoli",
    "Ouagadougou",
    "Mecca",
    "Dar es Salaam",
    "Cairo",
    "Tehran",
    "Tel Aviv",
    "Manama",
    "Jerusalem",
    "Casablanca",
    "Fez",
    "Subra al-Haymah",
    "Lusaka",
    "Antananarivo",
    "Luanda",
    "Kinshasa",
    "Riyadh",
    "Lubumbashi",
    "Amman",
    "Bethlehem",
    "Johannesburg",
    "Ibadan",
    "Yaoundé",
    "Maiduguri",
    "Dubai",
    "Port Elizabeth",
    "Addis Ababa",
    "New York",
    "Muscat",
    "Mbuji-Mayi",
    "Cape Town",
    "Hong Kong",
    "Bamako",
    "Doha",
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

  // Product data
  const productData = {
    title: "Nickel Alloy Sheets, Plates & Coils / Nickel Alloy Flat Products",
    subtitle:
      "Nickel Alloy Sheets, Plates & Coils Manufacturer, Nickel Alloy 200/201 Plates & Coils, Inconel 600/625 Sheets, Monel 400/K500 Plates, Hastelloy B2/C22/C276 Coils, Incoloy 800/825 Flats, Alloy 20 Hot & Cold Rolled Plates Exporter in India.",
    description1:
      "Sunlight Forge & Fitting Pvt. Ltd. is a leading manufacturer, supplier, and exporter of Nickel Alloy Sheets, Plates & Coils, which are manufactured from premium nickel-based alloys including Nickel 200/201, Inconel, Monel, Hastelloy, Incoloy, and Alloy 20. These flat products offer exceptional corrosion resistance, high-temperature strength, and excellent mechanical properties for demanding applications.",
    description2:
      "Nickel Alloy Sheets, Plates & Coils are specifically designed for applications requiring superior resistance to corrosion, oxidation, and high-temperature environments. These products are available in various forms including sheets, plates, coils, flats, strips, and rings to meet diverse industrial requirements.",
    description3:
      "Our nickel alloy flat products are manufactured as per ASTM B162 / ASME SB162 standards and are available in various grades including Nickel 200/201, Inconel 600/625, Monel 400/K500, Hastelloy B2/C22/C276, Incoloy 800/825, and Alloy 20, each offering unique properties for specific applications.",
    description4:
      "Our Nickel Alloy sheets, plates, and coils are available in sizes ranging from 0.5mm to 50mm thickness with widths up to 2000mm. We manufacture and stock even odd sizes which is hard to find.",
    grades: [
      "ASTM / ASME SB 162 UNS 2200 (NICKEL 200)",
      "ASTM / ASME SB 162 UNS 2201 (NICKEL 201)",
      "ASTM / ASME SB 168 UNS 6600 (INCONEL 600)",
      "ASTM / ASME SB 168 UNS 6601 (INCONEL 601)",
      "ASTM / ASME SB 168 UNS 6625 (INCONEL 625)",
      "ASTM / ASME SB 127 UNS 4400 (MONEL 400)",
      "ASTM / ASME SB 127 UNS 5500 (MONEL K500)",
      "ASTM / ASME SB 575 UNS 10276 (HASTELLOY C276)",
      "ASTM / ASME SB 575 UNS 10675 (HASTELLOY B2)",
      "ASTM / ASME SB 409 UNS 8800 (INCOLOY 800)",
      "ASTM / ASME SB 409 UNS 8825 (INCOLOY 825)",
      "ASTM / ASME SB 463 UNS 8020 (ALLOY 20)",
    ],
    specifications: {
      standard: "ASTM B162 / ASME SB162",
      grades:
        "Nickel 200/201, Inconel 600/625, Monel 400/K500, Hastelloy C276, Incoloy 800/825, Alloy 20",
      form: "Sheets, Plates, Coils, Flats, Strips, Rings, Circles",
      thickness: "0.5mm to 50mm",
      width: "Up to 2000mm",
      finish: "Hot Rolled (HR), Cold Rolled (CR), 2B, 2D, BA, SATIN",
    },
    standardsTable: [
      {
        standard: "Nickel 200",
        werkstoff: "2.4066",
        uns: "N02200",
        jis: "NW 2200",
        afnor: "N-100M",
        bs: "NA 11",
        gost: "НП-2",
        en: "Ni 99.2",
      },
      {
        standard: "Nickel 201",
        werkstoff: "2.4068",
        uns: "N02201",
        jis: "NW 2201",
        afnor: "-",
        bs: "NA 12",
        gost: "НП-2",
        en: "LC-Ni 99",
      },
      {
        standard: "Monel 400",
        werkstoff: "2.4360",
        uns: "N04400",
        jis: "NW 4400",
        afnor: "-",
        bs: "NA 13",
        gost: "НП-2",
        en: "NiCu30Fe",
      },
      {
        standard: "Inconel 600",
        werkstoff: "2.4816",
        uns: "N06600",
        jis: "NW 6600",
        afnor: "-",
        bs: "NA 14",
        gost: "ХН45Ю",
        en: "NiCr15Fe",
      },
      {
        standard: "Inconel 625",
        werkstoff: "2.4856",
        uns: "N06625",
        jis: "NW 6625",
        afnor: "-",
        bs: "NA 21",
        gost: "-",
        en: "NiCr22Mo9Nb",
      },
      {
        standard: "Hastelloy C276",
        werkstoff: "2.4819",
        uns: "N10276",
        jis: "NW 0276",
        afnor: "-",
        bs: "-",
        gost: "-",
        en: "NiMo16Cr15W",
      },
    ],
    types: [
      "Nickel Alloy 200 Sheets",
      "Nickel 201 Plates",
      "Nickel 200 Coils",
      "Nickel 200 Flats",
      "Monel 400/K500 Rings",
      "Inconel 600/625 Strip",
      "Inconel 800/825 Sheets",
      "Hastelloy B2/C22/C276 Plates",
      "Hastelloy C276 Circle",
      "Alloy 20 Sheets & Plates",
      "Inconel 600 Hot Rolled Plates",
      "Monel 400 Cold Rolled Sheets",
      "Nickel 201 Coils",
      "Incoloy 825 Flats",
      "Hastelloy C276 Strips",
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
      hover: "#2E0A5E",
    },
    whatsapp: {
      backgroundColor: "#25D366",
      hover: "#128C7E",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Nickel Alloy Sheets, Plates & Coils | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="Nickel Alloy Sheets, Plates & Coils Manufacturer. Nickel 200/201, Inconel 600/625, Monel 400, Hastelloy C276, Incoloy 800/825. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {sheetsplates.badge ||
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
                  {/* ===== SHEETS, PLATES & COILS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      SHEETS, PLATES & COILS
                    </h4>
                    <ul className="space-y-0.5">
                      {sheetProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/sheets-plates/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "nickel-alloy-sheetsplates"
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
                              item.slug === "sheets-plates"
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
                  onClick={() => navigate("/products/sheets-plates")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Sheets & Plates
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${nickelSheetImage})`,
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
                    src={nickelSheetImage}
                    alt="Nickel Alloy Sheets, Plates & Coils"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Nickel Alloy Sheets, Plates & Coils – ASTM B162
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

              {/* Grades List */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Nickel Alloy Sheets, Plates & Coils Grades &{" "}
                  <span className="text-[#66BB6A]">Materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    {productData.grades.map((grade, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#66BB6A] font-bold">•</span>
                        {grade}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Nickel Alloy Sheets, Plates & Coils{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        {productData.specifications.standard}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grades:</strong>{" "}
                        {productData.specifications.grades}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong>{" "}
                        {productData.specifications.form}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        {productData.specifications.finish}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        {productData.specifications.thickness}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Width:</strong>{" "}
                        {productData.specifications.width}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standards Table */}
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
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          JIS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          AFNOR
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          BS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          GOST
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          EN
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {productData.standardsTable.map((row, index) => (
                        <tr key={index}>
                          <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                            {row.standard}
                          </td>
                          <td className="px-4 py-2.5 text-sm">
                            {row.werkstoff}
                          </td>
                          <td className="px-4 py-2.5 text-sm">{row.uns}</td>
                          <td className="px-4 py-2.5 text-sm">{row.jis}</td>
                          <td className="px-4 py-2.5 text-sm">{row.afnor}</td>
                          <td className="px-4 py-2.5 text-sm">{row.bs}</td>
                          <td className="px-4 py-2.5 text-sm">{row.gost}</td>
                          <td className="px-4 py-2.5 text-sm">{row.en}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Nickel Alloy Flat Products - Grid */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of Nickel Alloy Sheets, Plates &{" "}
                  <span className="text-[#66BB6A]">Coils</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productData.types.map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] transition-colors"
                    >
                      <p className="text-sm font-semibold text-[#4A148C]">
                        {type}
                      </p>
                    </div>
                  ))}
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
                  EXPORT DESTINATIONS FOR NICKEL ALLOY SHEETS, NICKEL ALLOY
                  PLATES, NICKEL ALLOY COILS
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

export default NickelAlloySheetsPage;
