import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  ExternalLink,
  Menu,
  Globe,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import sheetsPlates from "../../data/productCategories/sheets-plates";
import carbonSheetImage from "../../assets/productsImage/sheets.jpg";

const CarbonSteelSheetsPage = () => {
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

  const currentCategory = sheetsPlates.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory =
    currentCategory || sheetsPlates.categories?.[0] || sheetsPlates;

  // Get the current product from the sheets array
  const currentProduct = sheetsPlates.find(
    (item) => item.slug === "carbon-steel-sheetsplates",
  );

  // All sheet products for the "SHEETS, PLATES & COILS" section
  const sheetProducts = [
    {
      id: 1,
      slug: "nickel-alloy-sheetsplates",
      title: "Nickel Alloy Sheets, Plates & Coils",
    },
    {
      id: 2,
      slug: "stainless-steel-sheetsplates",
      title: "Stainless Steel Sheets, Plates & Coils",
    },
    {
      id: 3,
      slug: "carbon-steel-sheetsplates",
      title: "Carbon Steel Sheets, Plates & Coils",
    },
    {
      id: 4,
      slug: "alloy-steel-sheetsplates",
      title: "Alloy Steel Sheets, Plates & Coils",
    },
  ];

  const allDestinations = [
    "United States",
    "Colombia",
    "Democratic Republic of the Congo",
    "London",
    "Dubai",
    "Sri Lanka",
    "Italy",
    "Egypt",
    "Ethiopa",
    "Thailand (Bangkok)",
    "Brazil",
    "Canada",
    "Germany",
    "UAE",
    "Kuwait",
    "UK",
    "Kazakhstan",
    "Azerbaijan",
    "Turkey",
    "Tunisia",
    "Mozambique",
    "Ghana",
    "Indonesia",
    "Angola",
    "Argentina",
    "Morocco",
    "Malaysia",
    "Uganda",
    "Saudi Arabia",
    "Australia",
    "Israel",
    "South Africa",
    "Chine",
    "Sudan",
    "Vietnam",
    "Peru",
    "Nigeria",
    "Jordan",
    "Trinidad and Tobago",
    "Iraq",
    "Algeria",
    "Iran",
    "New Zealand",
    "Bahrain",
    "Mexico",
    "Russia",
    "Cameroon",
    "Houston",
    "Venezuela",
    "Africa",
    "Dar es Salaam",
    "Yaoundé",
    "Mbuji-Mayi",
    "Fez",
    "Freetown",
    "Durban",
    "Maiduguri",
    "Harare",
    "Maputo",
    "Addis Ababa",
    "Kaduna",
    "Luanda",
    "Kolwezi",
    "Kampala",
    "Jerusalem",
    "Aqaba",
    "Port Elizabeth",
    "Beirut",
    "Cairo",
    "Manama",
    "Bulawayo",
    "Johannesburg",
    "Mogadishu",
    "Abidjan",
    "Conakry",
    "Kinshasa",
    "Singapore",
    "Benin",
    "Ouagadougou",
    "Zaria",
    "Dakar",
    "Colombo",
    "Riyadh",
    "Lagos",
    "Alexandria",
    "Tripoli",
    "Rabat",
    "New York",
    "Istanbul",
    "Casablanca",
    "Giza",
    "Tel Aviv",
    "Antananarivo",
    "Bamako",
    "Bethlehem",
    "Subra al-Haymah",
    "Soweto",
    "Jeddah",
    "Tehran",
    "Cape Town",
    "Omdurman",
    "Port Harcourt",
    "Dammam",
    "Doha",
    "Amman",
    "Muscat",
    "Hong Kong",
    "Dubai",
    "Accra",
    "Cairo",
    "Kano",
    "Khartoum",
    "Ibadan",
    "Douala",
    "Pretoria",
    "Mecca",
    "Lubumbashi",
    "Byblos",
    "Abu Dhabi",
    "Brazzaville",
    "Algiers",
    "Nairobi",
    "Sharm el-Sheikh",
    "Lusaka",
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

  return (
    <>
      <Helmet>
        <title>
          Carbon Steel Sheets, Plates & Coils | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Carbon Steel Sheets, Plates & Coils Manufacturer. CS Sheets, Plates, Coils. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {sheetsPlates.badge ||
                  "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {/* ===== SHEETS, PLATES & COILS SECTION - ABOVE PRODUCT RANGE ===== */}
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
              {/* ===== BACK BUTTON - Navigate to Parent Route ===== */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/sheets-plates")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Sheets & Plates
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
                        "Carbon Steel Sheets, Plates & Coils"}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {currentProduct?.shortDescription ||
                        "We manufacture & Export wide range of steel Sheets, Plates & Coils for quality end results."}
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
                    src={carbonSheetImage}
                    alt="Carbon Steel Sheets, Plates & Coils"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Carbon Steel Sheets, Plates & Coils"}
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is one of the Leading Exporter & Supplier of Carbon Steel
                  Plates, Carbon Steel Sheets & CS Coils Manufacturer in India.
                </p>
                <p>
                  We have an offer of carbon steel plates, boiler quality carbon
                  steel, sheets & coils which is made of boiler quality carbon
                  steel materials. These are made of quality proven materials
                  which are procured from reliable sources which ensure the
                  quality, reliability and optimum performance. We offer these
                  pipes at most affordable price.
                </p>
                <p>
                  Over the years we have manufactured fines range of Carbon
                  Steel Plates. We are consistently working hard to deliver the
                  best quality products made of steel. Carbon steel is an alloy
                  comprising iron and carbon. Such type of steel is available in
                  various grades in consonance with ASTM & ASME. The carbon
                  steel with low carbon content is softer and can be easily
                  formed whereas high content carbon steel is stronger and
                  harder but less ductile and harder to machine and weld.
                </p>
                <p>
                  Carbon Steel Sheets, Plates, Coils are used in different
                  industries such as for manufacturing parts for vehicles, in
                  Transportation and Automotive industry, and also in
                  Agricultural industry for developing a variety of equipments.
                  Other uses of it are that it is being used in Recreational
                  vehicles, in Tool industries and also in making off-highway
                  equipments.
                </p>
                <p>
                  Distinctive applications of Carbon Steel Sheets, Plates, Coils
                  include Water and other transportation, Hi-tensile
                  Scaffolding, Tube for structural engineering and general
                  engineering end use, Conveyor Idler Tube, Tube & General
                  Galvanizing, Furniture and General Purpose Precision Tubing.
                </p>
                <p>
                  Low carbon steel, Medium carbon steel, High carbon steel, Very
                  high carbon steel
                </p>
                <p>
                  Carbon Steel Sheets, Carbon Steel Plates, Carbon Coils, Carbon
                  Steel Strip & Flats, Carbon Shim Sheet, Carbon Perforated
                  Sheet & Chequered Plate Manufacturer in India.
                </p>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Carbon Steel Sheets, CS Plates & Carbon Coils{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM/ASME A36, A516
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> IS
                        2062/ASTM A36, Gr.A, B & C, IS 2002 Gr.1 & 2 ASTM A516
                        Gr.60 & 70
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 0.5 mm
                        To 200 mm thick in 1000 mm To 3000 mm width & 2500 mm To
                        12500 mm length available with NACE MR 01-75
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Foils,
                        Shim Sheet, Rolls, Perforated Sheet, Chequered Plate.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Other Services:
                        </strong>{" "}
                        Heat Treatment, Anneling, Pickling, Polish,
                        Electroplating, Anodising, Rolling, Cutting, Bending,
                        Forging, Minor Fabrication Etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types Of Carbon Steel Sheets,{" "}
                  <span className="text-[#66BB6A]">Plates & Coils</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Plates
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Sheets
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Shim Sheet
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Perforated Sheet
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Chequered Plate
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Rolls
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Circles
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Rings
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Coils
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Strips
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel flats
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Blanks
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Profile
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Carbon Steel Foils
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      CS Sheets
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      CS Plates
                    </p>
                  </div>
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
                  EXPORT DESTINATIONS FOR CARBON STEEL SHEETS, CARBON PLATES,
                  CARBON STEEL COILS, CS SHEETS
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
    </>
  );
};

export default CarbonSteelSheetsPage;
