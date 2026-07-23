import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { MdOutlineWhatsapp } from "react-icons/md";
import { Phone, Mail, Menu, Globe, PhoneCall, ArrowLeft } from "lucide-react";
import sheetsplates from "../../data/productCategories/sheets-plates";
import csSheetImage from "../../assets/productsImage/sheets3.jpg";

const CarbonSteelSheetsPlatesCoilsPage = () => {
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
    (item) => item.slug === "carbon-steel-sheetsplates",
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
    title: "Carbon Steel Sheets, Plates & Coils / CS Flat Products",
    subtitle:
      "Carbon Steel Sheets, Plates & Coils Manufacturer, ASTM A36/A516 Gr.70 Plates & Coils, ASTM A283/A285 Sheets, Carbon Steel Hot & Cold Rolled Plates Exporter in India.",
    description1:
      "Sunlight Forge & Fitting Pvt. Ltd. is a leading manufacturer, supplier, and exporter of Carbon Steel Sheets, Plates & Coils, which are manufactured from premium carbon steel grades including ASTM A36, A516 Grade 70, A283, A285, and A106. These flat products offer excellent strength, durability, and cost-effectiveness for demanding industrial applications.",
    description2:
      "Carbon Steel Sheets, Plates & Coils are specifically designed for applications requiring high strength, excellent weldability, and reliable performance. These products are available in various forms including sheets, plates, coils, flats, strips, and rings to meet diverse industrial requirements.",
    description3:
      "Our carbon steel flat products are manufactured as per ASTM A36 / ASME SA36 standards and are available in various grades including A36, A516 Grade 70, A283, A285, and A106, each offering unique properties for specific applications.",
    description4:
      "Our Carbon Steel sheets, plates, and coils are available in sizes ranging from 0.5mm to 50mm thickness with widths up to 2000mm. We manufacture and stock even odd sizes which is hard to find.",
    grades: [
      "ASTM A36 / ASME SA36 (Carbon Steel)",
      "ASTM A516 Grade 70 / ASME SA516 Gr.70 (Pressure Vessel)",
      "ASTM A283 / ASME SA283 (Low to Intermediate Tensile)",
      "ASTM A285 / ASME SA285 (Low Carbon Pressure Vessel)",
      "ASTM A106 / ASME SA106 (Seamless Carbon Steel)",
    ],
    specifications: {
      standard: "ASTM A36 / ASME SA36",
      grades: "A36, A516 Gr.70, A283, A285, A106",
      form: "Sheets, Plates, Coils, Flats, Strips, Rings, Circles",
      thickness: "0.5mm to 50mm",
      width: "Up to 2000mm",
      finish: "Hot Rolled (HR), Cold Rolled (CR), Pickled & Oiled",
    },
    standardsTable: [
      {
        standard: "A36",
        werkstoff: "1.0038",
        uns: "K02600",
        jis: "SS400",
        afnor: "E24-2",
        bs: "BS 4360",
        gost: "Ст3сп",
        en: "S235JR",
      },
      {
        standard: "A516 Gr.70",
        werkstoff: "1.0473",
        uns: "K02700",
        jis: "SPV 450",
        afnor: "A48 AP",
        bs: "BS 1503",
        gost: "16ГС",
        en: "P355GH",
      },
      {
        standard: "A283",
        werkstoff: "1.0035",
        uns: "K03000",
        jis: "SS330",
        afnor: "E24-1",
        bs: "BS 4360",
        gost: "Ст2сп",
        en: "S185",
      },
      {
        standard: "A285",
        werkstoff: "1.0044",
        uns: "K02800",
        jis: "SS400",
        afnor: "E24-2",
        bs: "BS 4360",
        gost: "Ст3сп",
        en: "S275JR",
      },
      {
        standard: "A106",
        werkstoff: "1.0402",
        uns: "K03006",
        jis: "STPG 370",
        afnor: "A42CP",
        bs: "BS 1503",
        gost: "20",
        en: "P265GH",
      },
    ],
    types: [
      "Carbon Steel A36 Sheets & Plates",
      "A516 Gr.70 Plates & Coils",
      "Carbon Steel A283 Sheets & Coils",
      "A285 Hot Rolled Plates",
      "Carbon Steel A106 Cold Rolled Sheets",
      "CS Coils & Strips",
      "Carbon Steel Circle & Rings",
      "CS Flats",
      "Carbon Steel Hot Rolled Plates",
      "CS Pickled & Oiled Coils",
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
          Carbon Steel Sheets, Plates & Coils | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="Carbon Steel Sheets, Plates & Coils Manufacturer. ASTM A36, A516 Gr.70, A283, A285, A106. Export quality, best prices."
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
                              item.slug === "carbon-steel-sheetsplates"
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
                      backgroundImage: `url(${csSheetImage})`,
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
                    src={csSheetImage}
                    alt="Carbon Steel Sheets, Plates & Coils"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Carbon Steel Sheets, Plates & Coils – ASTM A36
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
                  Carbon Steel Sheets, Plates & Coils Grades &{" "}
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
                  Carbon Steel Sheets, Plates & Coils{" "}
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

              {/* Types of Carbon Steel Flat Products - Grid */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of Carbon Steel Sheets, Plates &{" "}
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
                  EXPORT DESTINATIONS FOR CARBON STEEL SHEETS, PLATES & COILS
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

export default CarbonSteelSheetsPlatesCoilsPage;
