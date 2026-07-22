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
import buttweld from "../../data/productCategories/buttweld-fittings";
import buttweldImage from "../../assets/productsImage/buttweld.jpg";

const HastelloyButtweldFittingsPage = () => {
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

  const currentCategory = buttweld.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || buttweld.categories?.[0];

  const currentProduct = activeCategory?.types?.find(
    (type) => type.slug === "hastelloy-buttweld-fittings",
  );

  const allDestinations = [
    "Saudi Arabia",
    "Democratic Republic of the Congo",
    "Thailand (Bangkok)",
    "Uganda",
    "Peru",
    "New Zealand",
    "Morocco",
    "Sudan",
    "Mozambique",
    "Iraq",
    "Mexico",
    "Ethiopa",
    "Kazakhstan",
    "Chine",
    "Kuwait",
    "Ghana",
    "Houston",
    "Malaysia",
    "London",
    "Nigeria",
    "Russia",
    "Sri Lanka",
    "Africa",
    "Tunisia",
    "Canada",
    "Egypt",
    "Trinidad and Tobago",
    "Cameroon",
    "Dubai",
    "Indonesia",
    "Jordan",
    "Italy",
    "Azerbaijan",
    "UK",
    "Iran",
    "Israel",
    "Bahrain",
    "Algeria",
    "Colombia",
    "Turkey",
    "Brazil",
    "Venezuela",
    "Angola",
    "United States",
    "Argentina",
    "Germany",
    "UAE",
    "Australia",
    "Vietnam",
    "South Africa",
    "Abidjan",
    "Maputo",
    "Kano",
    "Durban",
    "Cape Town",
    "Dammam",
    "Abu Dhabi",
    "Pretoria",
    "Accra",
    "Mecca",
    "Cairo",
    "Aqaba",
    "Maiduguri",
    "Singapore",
    "Fez",
    "Rabat",
    "Johannesburg",
    "Kaduna",
    "Port Harcourt",
    "Benin",
    "Zaria",
    "Mogadishu",
    "Soweto",
    "Tripoli",
    "Manama",
    "Lubumbashi",
    "Kolwezi",
    "Doha",
    "Omdurman",
    "Nairobi",
    "Yaoundé",
    "Brazzaville",
    "Ibadan",
    "Alexandria",
    "Dakar",
    "Colombo",
    "Byblos",
    "Douala",
    "Hong Kong",
    "Amman",
    "Dar es Salaam",
    "Jeddah",
    "Riyadh",
    "Luanda",
    "Antananarivo",
    "Bamako",
    "Muscat",
    "Port Elizabeth",
    "Algiers",
    "Tehran",
    "Sharm el-Sheikh",
    "New York",
    "Mbuji-Mayi",
    "Kinshasa",
    "Beirut",
    "Jerusalem",
    "Lusaka",
    "Harare",
    "Giza",
    "Kampala",
    "Addis Ababa",
    "Dubai",
    "Subra al-Haymah",
    "Freetown",
    "Bethlehem",
    "Ouagadougou",
    "Bulawayo",
    "Istanbul",
    "Khartoum",
    "Cairo",
    "Casablanca",
    "Tel Aviv",
    "Lagos",
    "Conakry",
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
          Hastelloy Buttweld Pipe Fittings, Hastelloy C276 Seamless Fittings,
          Hastelloy C22 Welded Pipe Fittings Manufacturer, Hastelloy Buttweld
          Pipe Fittings, Hastelloy C276 Elbow, Hastelloy B2 Tee, Hastelloy Pipe
          Cross, Hastelloy Reducers, Hastelloy Short Radius Elbow Exporters in
          India.
        </title>
        <meta
          name="description"
          content="Hastelloy Buttweld Pipe Fittings, Hastelloy C276 Seamless Fittings, Hastelloy C22 Welded Pipe Fittings Manufacturer, Hastelloy Buttweld Pipe Fittings, Hastelloy C276 Elbow, Hastelloy B2 Tee, Hastelloy Pipe Cross, Hastelloy Reducers, Hastelloy Short Radius Elbow Exporters in India."
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
            {/* Sidebar - Similar to roundbars example */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* Use buttweld categories here */}
                  {buttweld.categories?.map((category) => (
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
                                type.slug === "hastelloy-buttweld-fittings"
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
                              item.slug === "buttweld-fittings"
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
                  onClick={() => navigate("/products/buttweld-fittings")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Buttweld Fittings
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${buttweldImage || activeCategory?.image})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Hastelloy Buttweld Fittings
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Hastelloy C276 Seamless Fittings, Hastelloy C22 Welded
                      Pipe Fittings Manufacturer, Hastelloy Buttweld Pipe
                      Fittings, Hastelloy C276 Elbow, Hastelloy B2 Tee,
                      Hastelloy Pipe Cross, Hastelloy Reducers, Hastelloy Short
                      Radius Elbow Exporters in India.
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
                    src={buttweldImage}
                    alt="Hastelloy Buttweld Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Hastelloy Pipe Fittings
                </p>
                <p>
                  Hastelloy Welded Buttweld Fittings, Hastelloy Pipe Buttweld
                  Fittings, Hastelloy Seamless Pipe Buttweld Fittings
                </p>
                <p>
                  Neon Alloys is one of the pioneer supplier and dealer of
                  Hastelloy Butt Weld Pipe Fittings, which is a
                  nickel-chromium-molybdenum alloy with excellent corrosion
                  resistance in both oxidizing and reducing environments.
                  Hastelloy offers exceptional resistance to a wide range of
                  corrosive environments including hydrochloric acid, sulfuric
                  acid, and chloride stress-corrosion cracking.
                </p>
                <p>
                  These Hastelloy Butt Weld Fittings are used extensively in
                  applications where high strength and corrosion resistance are
                  required. The alloy has excellent fatigue strength and
                  resistance to stress-corrosion cracking, making it ideal for
                  demanding applications.
                </p>
                <p>
                  These Hastelloy Pipe Fittings have exceptional resistance to a
                  variety of corrosive environments, including oxidation,
                  carburization, and chloride stress-corrosion cracking. They
                  are also resistant to many organic and inorganic compounds,
                  making them ideal for chemical processing applications.
                </p>
                <p>
                  Hastelloy Butt Weld Pipe Fittings are widely used in various
                  application industries such as chemical processing, oil & gas,
                  nuclear power, aerospace, heat treating equipment, and
                  electronics. These fittings maintain their corrosion
                  resistance and strength in high-temperature environments. We
                  offer the same in market leading prices.
                </p>
              </div>

              {/* Types of Fittings */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of Hastelloy Pipe{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    "Hastelloy Tee",
                    "Hastelloy Elbow",
                    "Hastelloy Reducing Tee",
                    "Hastelloy Coupling",
                    "Hastelloy Long & Short Stub Band",
                    "Hastelloy Reducer",
                    "Hastelloy Return Bends",
                    "Hastelloy Plug",
                    "Hastelloy Union",
                    "Hastelloy Pipe End Cap",
                    "Hastelloy Collar",
                    "Hastelloy Cross",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-3 border border-green-200 hover:border-[#66BB6A] transition-colors text-center"
                    >
                      <p className="text-sm font-medium text-[#4A148C]">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-slate-600 mt-4">
                  Hastelloy Reducer, Hastelloy Pipe End Cap Supplier, Hastelloy
                  Stub end, Hastelloy Pipe Bends, Hastelloy Reducing Elbow,
                  Hastelloy Pipe Bends Exporter in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Hastelloy Butt weld Pipe Fittings available in standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        ASTM B366, ASME SB366
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Hastelloy C276, C22, B2 (UNS N10276/N06022/N10665)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / Welded / Fabricated
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimensions:</strong>{" "}
                        ANSI/ASME B16.9, B16.28, MSS-SP-43
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong>{" "}
                        Seamless ½” to 24”, Welded ½” to 24”, Two Joint / Two
                        Halve Fittings 6” to 48”
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        Sch 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160, Sch
                        XXS
                      </p>
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
                          STANDARD
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          EN
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          JIS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          GOST
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          AFNOR
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          OR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Hastelloy C276
                        </td>
                        <td className="px-4 py-2.5 text-sm">N10276</td>
                        <td className="px-4 py-2.5 text-sm">2.4819</td>
                        <td className="px-4 py-2.5 text-sm">NiMo16Cr15W</td>
                        <td className="px-4 py-2.5 text-sm">NW 0276</td>
                        <td className="px-4 py-2.5 text-sm">ХН65МВУ</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">ЭП760</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Hastelloy C22
                        </td>
                        <td className="px-4 py-2.5 text-sm">N06022</td>
                        <td className="px-4 py-2.5 text-sm">2.4602</td>
                        <td className="px-4 py-2.5 text-sm">NiCr21Mo14W</td>
                        <td className="px-4 py-2.5 text-sm">NW 6022</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Hastelloy B2
                        </td>
                        <td className="px-4 py-2.5 text-sm">N10665</td>
                        <td className="px-4 py-2.5 text-sm">2.4617</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Fittings - Detailed */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N10276 Hastelloy Buttweld{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Size – 1/4" NB TO 32" NB. (Seamless & Welded)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Hastelloy Reducers",
                    "Hastelloy Concentric Reducers",
                    "Hastelloy Tees",
                    "Hastelloy Pipe Nipples",
                    "Hastelloy Stub end",
                    "Hastelloy Tees",
                    "Hastelloy Elbows",
                    "Hastelloy 3D Elbow",
                    "Hastelloy Stub Ends",
                    "UNS N10276 Hastelloy End Caps",
                    "Hastelloy 5D Elbow",
                    "Hastelloy 180° SR Return Bends",
                    "Hastelloy Long Radius Elbow",
                    "Hastelloy Eccentric Reducers",
                    "Hastelloy Reducing Crosses",
                    "Hastelloy Steel Elbows",
                    "Hastelloy Crosses",
                    "Hastelloy Couplings",
                    "Hastelloy Short Radius Elbow",
                    "Hastelloy ASME B16.9 Pipe Bends",
                    "Hastelloy 45° Elbows",
                    "Hastelloy Reducing Elbow",
                    "Hastelloy Piggable Bends",
                    "Hastelloy 180° LR Return Bends",
                    "UNS N10276 Hastelloy Welded Fittings",
                    "Hastelloy Seamless Fittings",
                    "Hastelloy ASTM B366 Butt weld Fittings",
                    "Hastelloy Pipe Fittings",
                    "Hastelloy Pipe Fittings",
                    "Hastelloy Welded Pipe Fittings",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-3 border border-green-200 hover:border-[#66BB6A] transition-colors text-center"
                    >
                      <p className="text-sm font-medium text-[#4A148C]">
                        {type}
                      </p>
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
                  EXPORT DESTINATIONS FOR HASTELLOY BUTT WELD PIPE FITTINGS,
                  HASTELLOY PIPE FITTINGS, HASTELLOY SEAMLESS FITTINGS,
                  HASTELLOY WELDED PIPE FITTINGS IN INDIA
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

export default HastelloyButtweldFittingsPage;
