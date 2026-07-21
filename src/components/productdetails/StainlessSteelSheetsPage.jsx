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
import stainlessSheetImage from "../../assets/productsImage/sheets.jpg";

const StainlessSteelSheetsPage = () => {
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
    (item) => item.slug === "stainless-steel-sheetsplates",
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
    "Egypt",
    "Nigeria",
    "Africa",
    "Ethiopa",
    "UK",
    "Tunisia",
    "Mozambique",
    "Ghana",
    "Vietnam",
    "New Zealand",
    "Angola",
    "Peru",
    "London",
    "Cameroon",
    "Venezuela",
    "Canada",
    "Argentina",
    "Russia",
    "Azerbaijan",
    "Turkey",
    "Indonesia",
    "Germany",
    "Dubai",
    "Brazil",
    "Mexico",
    "Chine",
    "Italy",
    "Houston",
    "United States",
    "Israel",
    "Saudi Arabia",
    "Kuwait",
    "Sri Lanka",
    "UAE",
    "Iran",
    "Bahrain",
    "Jordan",
    "Morocco",
    "Trinidad and Tobago",
    "South Africa",
    "Malaysia",
    "Colombia",
    "Australia",
    "Algeria",
    "Iraq",
    "Sudan",
    "Uganda",
    "Kazakhstan",
    "Thailand (Bangkok)",
    "Democratic Republic of the Congo",
    "Harare",
    "Giza",
    "Freetown",
    "Rabat",
    "Brazzaville",
    "Maiduguri",
    "Abu Dhabi",
    "Cairo",
    "Pretoria",
    "Kolwezi",
    "Omdurman",
    "Abidjan",
    "Casablanca",
    "Douala",
    "Colombo",
    "Zaria",
    "Dar es Salaam",
    "Yaoundé",
    "Jerusalem",
    "Johannesburg",
    "Mogadishu",
    "Khartoum",
    "Alexandria",
    "Antananarivo",
    "Durban",
    "Aqaba",
    "Port Elizabeth",
    "Cairo",
    "Istanbul",
    "Jeddah",
    "Nairobi",
    "Lubumbashi",
    "Subra al-Haymah",
    "Mecca",
    "Tehran",
    "Luanda",
    "Conakry",
    "Bethlehem",
    "Kinshasa",
    "Byblos",
    "Algiers",
    "Bulawayo",
    "Manama",
    "Muscat",
    "Tel Aviv",
    "Tripoli",
    "Cape Town",
    "Lusaka",
    "Benin",
    "Accra",
    "Maputo",
    "Lagos",
    "Port Harcourt",
    "Dubai",
    "Soweto",
    "Addis Ababa",
    "Dammam",
    "Amman",
    "Mbuji-Mayi",
    "Bamako",
    "Singapore",
    "Kampala",
    "Hong Kong",
    "Riyadh",
    "Ouagadougou",
    "Kaduna",
    "Sharm el-Sheikh",
    "New York",
    "Kano",
    "Beirut",
    "Doha",
    "Dakar",
    "Fez",
    "Ibadan",
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
          Stainless Steel Sheets, Plates & Coils | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Stainless Steel Sheets, Plates & Coils Manufacturer. SS 304, 304L, 316, 316L, 310, 310S Sheets & Plates. Export quality, best prices."
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
                              item.slug === "stainless-steel-sheetsplates"
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
                        "Stainless Steel Sheets, Plates & Coils"}
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
                    src={stainlessSheetImage}
                    alt="Stainless Steel Sheets, Plates & Coils"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Stainless Steel Sheets, Plates & Coils"}
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  manufactures and Exports of Stainless Steel Sheets & Plates,
                  SS Sheets, SS Plates, Stainless Coils, Steel Flats, SS Rings
                  Supplier in India.
                </p>
                <p>
                  We are one of the leading Manufacturer, Exporter and Supplier
                  of Stainless Steel Plates, Sheets & Coils.
                </p>
                <p>
                  Our well developed infrastructure and advanced packaging
                  solutions ensure that the quality of the products is
                  maintained at all points. We have a dedicated customer support
                  team that makes sure that care is taken to ensure maximum
                  customer satisfaction. Whether it is timely delivery, superior
                  quality, reasonable pricing or any other, you will find us
                  competent in all aspects.
                </p>
                <p>
                  In this extent we are giving Stainless Steel Sheets, Stainless
                  Steel Plates, Stainless Steel Coils and any more. The
                  organization has cut an unparalleled position in the business
                  by trying tireless endeavors to oblige the customers with
                  premium quality pipes, tubes and fitting parts.
                </p>
                <p>
                  We also supply of Sheets, Plates & Coils in all types of
                  grades like SS 304 & 304l, ss 316 & 316l & ss 310 & 310s
                  Sheets, Plates & Coils etc. These are made by high grade of
                  material.
                </p>
                <p>
                  With different form such as Coils, Foils, Rolls, Plain Sheet,
                  Shim Sheet, Perforated Sheet, etc, we also offer this product
                  in different types such as Stainless Steel Shim Sheet,
                  Stainless Steel Perforated Sheet, Stainless Steel Chequered
                  Plate, Stainless Steel Rolls, Stainless Steel Ring, and so on.
                </p>
                <p>
                  Stainless Steel 304/304L Sheets, SS 316/316l Plates, Steel
                  310/310S Coils, Stainless Steel 347/347H Strip & Flats, SS 446
                  Shim Sheet, Stainless Perforated Sheet & Chequered Plate
                  Manufacturer in India.
                </p>
              </div>

              {/* ===== APPLICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  SS Plates, SS Coils & SS Sheets{" "}
                  <span className="text-[#66BB6A]">Application</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      Kitchenware's, Home Appliances
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      Construction Decoration, Stairs, Elevator, Cabinet
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      Door/Fridge/Air conditioning/chair Panels
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      Burner Parts, Exhaust Parts of Auto, etc.
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel Plates, Sheets & Coils{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM/ASME A240, SA240
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> 304,
                        304L, 304LN, 309, 309S, 309H, 310H, 316, 316L, 316H,
                        316LN, 316Ti, 317, 317L, 321, 321H, 347, 347H, 409, 410,
                        420, 430 etc.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/4"
                        to 4"
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        0.5 mm To 200 mm thick in 1000 mm To 3000 mm width &
                        2500 mm To 12500 mm length available with NACE MR 01-75
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong> Hot
                        rolled plate (HR), Cold rolled sheet (CR), 2B, 2D, BA
                        NO(8), SATIN (Met with Plastic Coated)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Coils,
                        Foils, Rolls, Plain Sheet, Shim Sheet, Perforated Sheet,
                        Chequered Plate, Strip, Flats, Blank (Circle), Ring
                        (Flange) etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types Of Stainless Steel Sheets,{" "}
                  <span className="text-[#66BB6A]">Plates & Coils</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS Plates
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Steel Plates
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Steel 304 Plates
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless 316 Plates
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS 316 Sheets
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Steel 304 Sheets
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Sheets
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Steel Sheets
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS Coils
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Coils
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Steel 304/310 Coils
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS 316 Coils
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless 310 Plates
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS 310 Sheets
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless 304 Coils
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Steel 316 Plate
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Steel Shim Sheet
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS Perforated Sheet
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS 304L Flats
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Steel Chequered Plate
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless 316 Strip
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Steel Flats
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      SS 316 Rolls
                    </p>
                  </Link>
                  <Link
                    to={`/products/sheets-plates/stainless-steel-sheetsplates`}
                    className="bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] hover:bg-green-100 transition-all duration-300"
                  >
                    <p className="text-sm text-slate-700 font-medium">
                      Stainless Steel Rings
                    </p>
                  </Link>
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
                  EXPORT DESTINATIONS FOR STEEL SHEETS, SS PLATES, STEEL PLATES,
                  SS COILS, STAINLESS STEEL SHEETS & PLATES, COILS
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

export default StainlessSteelSheetsPage;
