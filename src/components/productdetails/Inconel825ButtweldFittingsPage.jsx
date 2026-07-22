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

const Inconel825ButtweldFittingsPage = () => {
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
    (type) => type.slug === "inconel-825-buttweld-fittings",
  );

  const allDestinations = [
    "Iran",
    "South Africa",
    "Cameroon",
    "Houston",
    "UK",
    "Nigeria",
    "Indonesia",
    "Uganda",
    "Chine",
    "Vietnam",
    "Trinidad and Tobago",
    "Malaysia",
    "Morocco",
    "Sudan",
    "Tunisia",
    "Iraq",
    "Democratic Republic of the Congo",
    "Germany",
    "Ghana",
    "Australia",
    "Egypt",
    "Italy",
    "Sri Lanka",
    "Peru",
    "Algeria",
    "Angola",
    "Kazakhstan",
    "Venezuela",
    "Dubai",
    "Brazil",
    "Colombia",
    "United States",
    "Turkey",
    "Thailand (Bangkok)",
    "Mozambique",
    "Kuwait",
    "Ethiopa",
    "Saudi Arabia",
    "Russia",
    "Azerbaijan",
    "Africa",
    "New Zealand",
    "Bahrain",
    "Jordan",
    "Israel",
    "Mexico",
    "Canada",
    "London",
    "UAE",
    "Argentina",
    "Jeddah",
    "Soweto",
    "Tel Aviv",
    "Accra",
    "Ibadan",
    "Khartoum",
    "Omdurman",
    "Cape Town",
    "Bulawayo",
    "Byblos",
    "Maputo",
    "Subra al-Haymah",
    "Colombo",
    "Kaduna",
    "Maiduguri",
    "Dammam",
    "Douala",
    "Dubai",
    "Hong Kong",
    "Port Harcourt",
    "Addis Ababa",
    "Cairo",
    "Yaoundé",
    "Ouagadougou",
    "Muscat",
    "Aqaba",
    "Durban",
    "Kolwezi",
    "Freetown",
    "Antananarivo",
    "Istanbul",
    "Bethlehem",
    "Amman",
    "Pretoria",
    "Tripoli",
    "Luanda",
    "Mbuji-Mayi",
    "Sharm el-Sheikh",
    "Alexandria",
    "Casablanca",
    "Lubumbashi",
    "Dar es Salaam",
    "Abu Dhabi",
    "Doha",
    "Brazzaville",
    "Giza",
    "Kinshasa",
    "Kano",
    "Bamako",
    "Fez",
    "Harare",
    "Mecca",
    "Singapore",
    "Cairo",
    "Algiers",
    "Lusaka",
    "Nairobi",
    "Mogadishu",
    "Jerusalem",
    "Kampala",
    "Benin",
    "Port Elizabeth",
    "Dakar",
    "Tehran",
    "New York",
    "Johannesburg",
    "Rabat",
    "Riyadh",
    "Conakry",
    "Beirut",
    "Manama",
    "Lagos",
    "Zaria",
    "Abidjan",
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
          Inconel 825 Buttweld Pipe Fittings, Alloy 825 Seamless Fittings,
          Inconel 825 Welded Pipe Fittings Manufacturer, Inconel Alloy 825
          Buttweld Pipe Fittings, Inconel 825 Elbow, 825 Inconel Tee, Alloy 825
          Pipe Cross, Inconel 825 Reducers, Alloy 825 Short Radius Elbow
          Exporters in India.
        </title>
        <meta
          name="description"
          content="Inconel 825 Buttweld Pipe Fittings, Alloy 825 Seamless Fittings, Inconel 825 Welded Pipe Fittings Manufacturer, Inconel Alloy 825 Buttweld Pipe Fittings, Inconel 825 Elbow, 825 Inconel Tee, Alloy 825 Pipe Cross, Inconel 825 Reducers, Alloy 825 Short Radius Elbow Exporters in India."
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
                                type.slug === "inconel-825-buttweld-fittings"
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
                      Inconel 825 Buttweld Fittings
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Alloy 825 Seamless Fittings, Inconel 825 Welded Pipe
                      Fittings Manufacturer, Inconel Alloy 825 Buttweld Pipe
                      Fittings, Inconel 825 Elbow, 825 Inconel Tee, Alloy 825
                      Pipe Cross, Inconel 825 Reducers, Alloy 825 Short Radius
                      Elbow Exporters in India.
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
                    alt="Inconel 825 Buttweld Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Inconel Alloy 825 Pipe Fittings
                </p>
                <p>
                  825 Alloy Welded Buttweld Fittings, Inconel Alloy Pipe
                  Buttweld Fittings, Inconel Seamless Pipe Buttweld Fittings
                </p>
                <p>
                  Neon Alloys is one of the pioneer supplier and dealer of
                  Inconel 825 Butt Weld Pipe Fittings, which is a
                  nickel-chromium-molybdenum alloy with excellent corrosion
                  resistance in both oxidizing and reducing environments.
                  Inconel 825 offers exceptional resistance to a wide range of
                  corrosive environments including seawater, acids, and
                  oxidizing environments.
                </p>
                <p>
                  These Inconel 825 Butt Weld Fittings are used extensively in
                  applications where high strength and corrosion resistance are
                  required. The alloy has excellent fatigue strength and
                  resistance to stress-corrosion cracking, making it ideal for
                  demanding applications.
                </p>
                <p>
                  These Inconel 825 Pipe Fittings have exceptional resistance to
                  a variety of corrosive environments, including oxidation,
                  carburization, and chloride stress-corrosion cracking. They
                  are also resistant to many organic and inorganic compounds,
                  making them ideal for chemical processing applications.
                </p>
                <p>
                  Inconel 825 Butt Weld Pipe Fittings are widely used in various
                  application industries such as chemical processing, oil & gas,
                  nuclear power, aerospace, heat treating equipment, and
                  electronics. These fittings maintain their corrosion
                  resistance and strength in high-temperature environments up to
                  2000°F (1093°C). We offer the same in market leading prices.
                </p>
              </div>

              {/* Types of Fittings */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of 825 Inconel Alloy Pipe{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    "Alloy 825 Tee",
                    "Inconel Alloy 825 Elbow",
                    "825 Alloy Reducing Tee",
                    "Inconel Alloy 825 Coupling",
                    "825 Alloy Long & Short Stub Band",
                    "Inconel 825 Reducer",
                    "Alloy 825 Return Bends",
                    "Inconel Alloy 825 Plug",
                    "Alloy 825 Union",
                    "Inconel Alloy 825 Pipe End Cap",
                    "825 Alloy Collar",
                    "825 Inconel Cross",
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
                  Alloy 825 Reducer, Inconel Alloy 825 Pipe End Cap Supplier,
                  Alloy 825 Stub end, Inconel 825 Pipe Bends, 825 Alloy Reducing
                  Elbow, Inconel 825 Pipe Bends Exporter in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Inconel Alloy 825 Butt weld Pipe Fittings available in
                  standard and <span className="text-[#66BB6A]">materials</span>
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
                        Inconel Alloy 825 (UNS N08825)
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
                          OR
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          BS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          GOST
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          JIS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          AFNOR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Incoloy 825
                        </td>
                        <td className="px-4 py-2.5 text-sm">N08825</td>
                        <td className="px-4 py-2.5 text-sm">2.4858</td>
                        <td className="px-4 py-2.5 text-sm">NiCr21Mo</td>
                        <td className="px-4 py-2.5 text-sm">XH38BT</td>
                        <td className="px-4 py-2.5 text-sm">NA 16</td>
                        <td className="px-4 py-2.5 text-sm">ЭИ703</td>
                        <td className="px-4 py-2.5 text-sm">NCF 825</td>
                        <td className="px-4 py-2.5 text-sm">NFE30C20DUM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Fittings - Detailed */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N08825 Inconel Alloy 825 Buttweld{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Size – 1/4" NB TO 32" NB. (Seamless & Welded)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Inconel Alloy 825 Reducers",
                    "Inconel 825 Concentric Reducers",
                    "Inconel 825 Tees",
                    "Inconel 825 Pipe Nipples",
                    "Inconel 825 Stub end",
                    "Inconel 825 Tees",
                    "Inconel 825 Elbows",
                    "825 Alloy 3D Elbow",
                    "Inconel 825 Stub Ends",
                    "UNS N08825 Inconel End Caps",
                    "Inconel 825 5D Elbow",
                    "825 Alloy 180° SR Return Bends",
                    "Inconel 825 Long Radius Elbow",
                    "Alloy 825 Eccentric Reducers",
                    "Inconel 825 Reducing Crosses",
                    "Inconel 825 Steel Elbows",
                    "825 Inconel Crosses",
                    "Inconel 825 Couplings",
                    "Inconel 825 Short Radius Elbow",
                    "825 Alloy ASME B16.9 Pipe Bends",
                    "825 Inconel 45° Elbows",
                    "Inconel 825 Reducing Elbow",
                    "825 Inconel Piggable Bends",
                    "825 Alloy 180° LR Return Bends",
                    "UNS N08825 Inconel Welded Fittings",
                    "Inconel 825 Seamless Fittings",
                    "825 ASTM B366 Butt weld Fittings",
                    "Inconel 825 Pipe Fittings",
                    "Inconel Alloy 825 Pipe Fittings",
                    "Alloy 825 Welded Pipe Fittings",
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
                  EXPORT DESTINATIONS FOR INCONEL 825 BUTT WELD PIPE FITTINGS,
                  INCONEL 825 PIPE FITTINGS, ALLOY 825 SEAMLESS FITTINGS,
                  INCONEL 825 WELDED PIPE FITTINGS IN INDIA
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

export default Inconel825ButtweldFittingsPage;
