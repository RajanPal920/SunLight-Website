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
import alloySheetImage from "../../assets/productsImage/sheets.jpg";

const AlloySteelSheetsPage = () => {
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
    (item) => item.slug === "alloy-steel-sheetsplates",
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
    "Peru",
    "Algeria",
    "London",
    "Africa",
    "Ghana",
    "Germany",
    "Angola",
    "South Africa",
    "Iraq",
    "Dubai",
    "Russia",
    "Malaysia",
    "Indonesia",
    "Tunisia",
    "New Zealand",
    "Saudi Arabia",
    "Cameroon",
    "Turkey",
    "United States",
    "Nigeria",
    "Mexico",
    "Australia",
    "Sri Lanka",
    "Thailand (Bangkok)",
    "Kuwait",
    "Mozambique",
    "Azerbaijan",
    "Kazakhstan",
    "Israel",
    "UK",
    "Jordan",
    "Canada",
    "Democratic Republic of the Congo",
    "Chine",
    "Houston",
    "Ethiopa",
    "Brazil",
    "UAE",
    "Vietnam",
    "Argentina",
    "Sudan",
    "Italy",
    "Trinidad and Tobago",
    "Morocco",
    "Bahrain",
    "Egypt",
    "Colombia",
    "Uganda",
    "Venezuela",
    "Iran",
    "Abidjan",
    "Conakry",
    "Jerusalem",
    "Bulawayo",
    "Port Harcourt",
    "Freetown",
    "Tehran",
    "Manama",
    "Luanda",
    "Sharm el-Sheikh",
    "Mogadishu",
    "Bethlehem",
    "Khartoum",
    "Benin",
    "Ibadan",
    "Riyadh",
    "Pretoria",
    "Kolwezi",
    "Johannesburg",
    "Dammam",
    "Tripoli",
    "Accra",
    "Douala",
    "Tel Aviv",
    "Fez",
    "Cape Town",
    "Durban",
    "Hong Kong",
    "Antananarivo",
    "Port Elizabeth",
    "Ouagadougou",
    "Dubai",
    "Harare",
    "Lagos",
    "Casablanca",
    "Lubumbashi",
    "Algiers",
    "Dakar",
    "Amman",
    "Aqaba",
    "Dar es Salaam",
    "Alexandria",
    "Beirut",
    "Muscat",
    "Giza",
    "Colombo",
    "Byblos",
    "Yaoundé",
    "Singapore",
    "Addis Ababa",
    "Maiduguri",
    "Kampala",
    "Bamako",
    "Cairo",
    "Kaduna",
    "Doha",
    "Omdurman",
    "Soweto",
    "Kano",
    "Istanbul",
    "Brazzaville",
    "Rabat",
    "Jeddah",
    "Subra al-Haymah",
    "Maputo",
    "Abu Dhabi",
    "Zaria",
    "New York",
    "Kinshasa",
    "Cairo",
    "Nairobi",
    "Lusaka",
    "Mecca",
    "Mbuji-Mayi",
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
          Alloy Steel Sheets, Plates & Coils | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Alloy Steel Sheets, Plates & Coils Manufacturer. Alloy Steel Shim Sheet, Perforated Sheet. Export quality, best prices."
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
                              item.slug === "alloy-steel-sheetsplates"
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
                        "Alloy Steel Sheets, Plates & Coils"}
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
                    src={alloySheetImage}
                    alt="Alloy Steel Sheets, Plates & Coils"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Alloy Steel Sheets, Plates & Coils"}
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is Exporter and Supplier of Alloy Steel Plates, Sheets &
                  Coils. Alloy Steel Shim Sheet, Perforated Sheet Manufacturer
                  in India.
                </p>
                <p>
                  Widely used in sophisticated engineering industries, these
                  plates are highly sturdy and possess easy machinability
                  traits. The fabrication of these products is done with
                  high-end machines and premium-grade iron at vendors' end.
                  Apart from this, we make the timely supply of these plates to
                  our customers at nominal price tags.
                </p>
                <p>
                  Premeditated from superior grade of steels, these Alloy Steel
                  Sheets, Plates & Coils are provided to our valuable customers
                  in customized and standard specifications. Our Alloy Steel
                  Plates are significantly harder and stronger with respect to
                  other grades. Also, our Alloy Steel Coils is virtually
                  irreplaceable in resisting oxidation at elevated temperatures.
                  It also raises the tensile, yield, and hardness at room
                  temperatures.
                </p>
                <p>
                  Alloy Steel Sheets, Plates and Coils are used in some typical
                  applications such as in Chemical and allied industries, Food
                  and dye production, Heat exchangers, SO 2 scrubbers and other
                  severe environments, Tanks, Pickling racks, Valves, and so on.
                </p>
                <p>
                  We can make these available of imported and Indian
                  manufacturers in dissimilar finish forms, which include round,
                  coil, square, U shape. Our expertise as well lies in offering
                  these in drawing and growth as per essential in terms of
                  length & size.
                </p>
                <p>
                  Alloy Steel Sheets Exporter, ASTM A204 High Strength Low Alloy
                  Steel Plates Manufacturer & Supplier in India.
                </p>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Alloy Steel Sheets, Plates & Coils{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM A387, ASTM A204
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> ASTM
                        A387 Gr.2, 5, 9, 11, 12 & 22 in class 1&2
                      </p>
                      <p>
                        ASTM A204 Gr. A & B, DIN 17175 Gr.15 Mo 3 & 16 Mo 3 with
                        IBR Test Certificate.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Range:</strong> 0.5
                        mm To 200 mm thick in 1000 mm To 3000 mm width & 2500 mm
                        To 12500 mm length available with NACE MR 01-75
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Specialize:</strong>{" "}
                        Shim Sheet, Perforated Sheet, B. Q. Profile
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong> 2B,
                        2D, HR, CR, BA NO(8), SATIN (Met with Plastic Coated),
                        Hot rolled plate (HR) Cold rolled sheet (CR)
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
                  Types Of Alloy Steel Sheets,{" "}
                  <span className="text-[#66BB6A]">Plates & Coils</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Sheets
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Plates
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Coils
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Shim Sheet
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Blank
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Coils
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Chequered Plate
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Perforated Sheet
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Rolls
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Foils
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Strips
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-700 font-medium">
                      Alloy Steel Profile
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
                  EXPORT DESTINATIONS FOR ALLOY STEEL SHEETS, ALLOY PLATES,
                  ALLOY STEEL PLATES, ALLOY SHEETS, ALLOY FLATS
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

export default AlloySteelSheetsPage;
