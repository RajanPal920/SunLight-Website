import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  Menu,
  Globe,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import roundbars from "../../data/productCategories/round-bars";
import roundBarImage from "../../assets/productsImage/round-bars.jpg";

const Stainless177PHRoundBarsPage = () => {
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

  const currentCategory = roundbars.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || roundbars.categories[0];

  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "17-7-ph-stainless-steel-roundbars",
  );

  const allDestinations = [
    "Canada",
    "Bahrain",
    "Vietnam",
    "Tunisia",
    "Kazakhstan",
    "Australia",
    "Algeria",
    "Chine",
    "Ethiopa",
    "London",
    "Uganda",
    "Iraq",
    "Morocco",
    "Venezuela",
    "Dubai",
    "United States",
    "Italy",
    "South Africa",
    "Azerbaijan",
    "Turkey",
    "Cameroon",
    "Nigeria",
    "Egypt",
    "Saudi Arabia",
    "Russia",
    "Malaysia",
    "Iran",
    "Colombia",
    "Angola",
    "UK",
    "UAE",
    "Kuwait",
    "Jordan",
    "Indonesia",
    "Thailand (Bangkok)",
    "Israel",
    "Mozambique",
    "Peru",
    "Sri Lanka",
    "Africa",
    "Houston",
    "New Zealand",
    "Argentina",
    "Democratic Republic of the Congo",
    "Brazil",
    "Mexico",
    "Trinidad and Tobago",
    "Sudan",
    "Germany",
    "Ghana",
    "Casablanca",
    "Bulawayo",
    "Abidjan",
    "Kinshasa",
    "Ouagadougou",
    "Subra al-Haymah",
    "Jeddah",
    "Port Harcourt",
    "Doha",
    "Muscat",
    "Sharm el-Sheikh",
    "Cairo",
    "Mbuji-Mayi",
    "Kolwezi",
    "Cairo",
    "Byblos",
    "Lagos",
    "Luanda",
    "Singapore",
    "Dakar",
    "Durban",
    "Alexandria",
    "Bamako",
    "Freetown",
    "Brazzaville",
    "Kampala",
    "Pretoria",
    "Algiers",
    "Jerusalem",
    "Harare",
    "Yaoundé",
    "Lusaka",
    "Giza",
    "Tehran",
    "Istanbul",
    "Bethlehem",
    "Beirut",
    "Mogadishu",
    "Manama",
    "Mecca",
    "Amman",
    "Rabat",
    "Maputo",
    "Addis Ababa",
    "Kaduna",
    "Dar es Salaam",
    "Riyadh",
    "Aqaba",
    "Cape Town",
    "Dubai",
    "Nairobi",
    "Abu Dhabi",
    "Dammam",
    "New York",
    "Colombo",
    "Kano",
    "Port Elizabeth",
    "Khartoum",
    "Fez",
    "Tel Aviv",
    "Tripoli",
    "Soweto",
    "Antananarivo",
    "Conakry",
    "Lubumbashi",
    "Douala",
    "Johannesburg",
    "Zaria",
    "Accra",
    "Ibadan",
    "Maiduguri",
    "Omdurman",
    "Hong Kong",
    "Benin",
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
          We are leading Dealer & Supplier of Stainless Steel 17-7 PH Round Bar,
          ASTM A276 SS 17-7 PH Rods, SS UNS S17700 Round Bar, Stainless Steel
          17-7 PH Bar, ASTM A479 17-7 PH Stainless Steel Hex Bars Exporter in
          India.
        </title>
        <meta
          name="description"
          content="We are leading Dealer & Supplier of Stainless Steel 17-7 PH Round Bar, ASTM A276 SS 17-7 PH Rods, SS UNS S17700 Round Bar, Stainless Steel 17-7 PH Bar, ASTM A479 17-7 PH Stainless Steel Hex Bars Exporter in India."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* Government Recognised Badge */}
        <div className="bg-[#0b2a4a] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#ffd700] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#ffd700] uppercase">
                <i className="fas fa-award mr-2"></i>
                GOVERNMENT RECOGNISED STAR EXPORT HOUSE
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar - Same as example */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {roundbars.categories.map((category) => (
                    <div key={category.id}>
                      <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                        {category.title}
                      </h4>
                      <ul className="space-y-0.5 ml-2">
                        {category.types?.map((type) => (
                          <li key={type.id}>
                            <Link
                              to={`/products/${category.slug}/${type.slug}`}
                              className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                                type.slug ===
                                "17-7-ph-stainless-steel-roundbars"
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
                              item.slug === "round-bars"
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

            {/* Main Content */}
            <div className="flex-1 min-w-0 pt-4">
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/round-bars")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Round Bars
                </button>
              </div>

              {/* Hero Section */}
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
                      Stainless Steel 17-7 PH Round Bars & Rods
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are leading Dealer & Supplier of Stainless Steel 17-7
                      PH Round Bar, ASTM A276 SS 17-7 PH Rods, SS UNS S17700
                      Round Bar, Stainless Steel 17-7 PH Bar, ASTM A479 17-7 PH
                      Stainless Steel Hex Bars Exporter in India.
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
                    src={roundBarImage}
                    alt="Stainless Steel 17-7 PH Round Bars"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Stainless Steel 17-7 PH Round Bars & Rods
                </p>
                <p>
                  We are involved in offering a qualitative Steel Round Bars to
                  our clients. Widely used in the making of canals, bridges,
                  buildings, hotels, hospitals, homes etc.
                </p>
                <p>
                  Stainless Steel 17-7 PH Hot Rolled Bar, 17-7 PH Stainless
                  Steel Flat Bar & Rods Exporter, ASTM A479 17-7 PH Steel Round
                  Bar, ASTM A276 Stainless Steel 310 Bright Bar, ASTM A479 17-7
                  PH SS Rectangular Bars Stockholder, Trader
                </p>
                <p>
                  Stainless Steel 17-7 PH Round Bars is a precipitation
                  hardening steel with a high strength and moderately resistant
                  to corrosion. These SS 17-7 PH Round Bars delivers toughness,
                  and quality mechanical properties to a variety of industries
                  such as Chemical, Paper industries, Food Processing,
                  Petrochemical, Petroleum, Aerospace and many other industries.
                </p>
                <p>
                  Being largest exporter, manufacturer and supplier, Neon Alloys
                  carries Stainless Steel 17-7 PH Rods with the ability to
                  withstand high temperatures. These UNS S17700 Round Bars
                  contains large amounts of manganese, phosphorus, sulfur,
                  silicon, columbium (or niobium) and tantalum content.
                </p>
                <p>
                  <strong className="text-[#4A148C]">
                    Stainless Steel 17-7 PH Round Bar Stock
                  </strong>
                  <br />
                  Stainless Steel 17-7 PH Round bars can be accessible in
                  forged, welded and formed with round, flat, square, hex,
                  rectangular and hollow shapes according to international
                  standards. Our stainless Steel 17-7 PH bar comes in a
                  different range of diameters, wall thicknesses and sizes as
                  per the project requirements at affordable rates. Kindly call
                  us to request a free quote immediately.
                </p>
                <p>
                  Stainless Steel 17-7 PH Forged Round Bar, SS 17-7 PH Square
                  Bars Dealers, SS Werkstoff Nr. 1.4568 Round Bar Exporter, SS
                  17-7 PH Round Bars, Stainless Steel 310 Polished Round Bar,
                  ASTM A479 17-7 PH Stainless Steel Black Bars Stockists
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  SS 17-7 PH Round Bars & Steel 17-7 PH Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Stainless Steel 17-7 PH (UNS S17400)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimension:</strong>{" "}
                        EN, DIN, JIS, ASTM, BS, ASME, AISI
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Application:</strong>{" "}
                        Chemical process, Food processing, Petrochemical,
                        Pollution control, Pulp and Paper, Refining
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Condition:</strong>{" "}
                        Cold Drawn & Polished Cold Drawn, Centreless Ground &
                        Polished
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Bright, Polish & Black
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Round/Square/ Hexagonal/ Rectangular
                      </p>
                      <div className="mt-2">
                        <p>
                          <strong className="text-[#4A148C]">Standards:</strong>
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-600">
                          <li>ASTM A276 / ASME SA276</li>
                          <li>ASTM A479</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standards Equivalents Table */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Standards <span className="text-[#66BB6A]">Equivalents</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Standard
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Werkstoff Nr.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          SS 17-7 PH
                        </td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">S17700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Types Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of Stainless Steel 17-7 PH Round Bars &{" "}
                  <span className="text-[#66BB6A]">17-7 PH Rods</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "17-7-ph-stainless-steel-roundbars"
                          ? "border-[#66BB6A] bg-green-100"
                          : "border-green-200"
                      }`}
                    >
                      <Link
                        to={`/products/${activeCategory.slug}/${type.slug}`}
                        className="text-sm font-semibold text-[#4A148C] hover:text-[#66BB6A] transition-colors block"
                      >
                        {type.title}
                      </Link>
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

              {/* Call to Action */}
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
                  EXPORT DESTINATIONS FOR SS 17-7 PH ROUND BARS, STEEL 17-7 PH
                  BARS, STAINLESS STEEL 17-7 PH RODS, STEEL 17-7 PH ROUND RODS,
                  SS 17-7 PH RODS
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

export default Stainless177PHRoundBarsPage;
