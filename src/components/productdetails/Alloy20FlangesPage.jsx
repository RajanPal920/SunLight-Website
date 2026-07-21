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
// Assuming you have a flanges data file similar to roundbars
import flanges from "../../data/productCategories/flanges";
import flangesImage from "../../assets/productsImage/flanges.jpg";

const Alloy20FlangesPage = () => {
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

  const currentCategory = flanges.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || flanges.categories?.[0];

  const currentProduct = activeCategory?.types?.find(
    (type) => type.slug === "alloy-20-flanges",
  );

  const allDestinations = [
    "Israel",
    "Argentina",
    "Dubai",
    "Africa",
    "Algeria",
    "UK",
    "Ethiopa",
    "Trinidad and Tobago",
    "Kuwait",
    "Vietnam",
    "Morocco",
    "Australia",
    "London",
    "Tunisia",
    "Italy",
    "Chine",
    "Kazakhstan",
    "Thailand (Bangkok)",
    "Mozambique",
    "Nigeria",
    "Saudi Arabia",
    "Bahrain",
    "Ghana",
    "Venezuela",
    "Russia",
    "Indonesia",
    "United States",
    "Mexico",
    "Malaysia",
    "Turkey",
    "Cameroon",
    "Iran",
    "Iraq",
    "Jordan",
    "UAE",
    "Sudan",
    "Germany",
    "Azerbaijan",
    "Uganda",
    "New Zealand",
    "Brazil",
    "South Africa",
    "Houston",
    "Democratic Republic of the Congo",
    "Colombia",
    "Egypt",
    "Peru",
    "Sri Lanka",
    "Canada",
    "Angola",
    "Giza",
    "Dammam",
    "Nairobi",
    "Tripoli",
    "Luanda",
    "Brazzaville",
    "Bamako",
    "Conakry",
    "Freetown",
    "Dubai",
    "Muscat",
    "New York",
    "Soweto",
    "Mbuji-Mayi",
    "Bulawayo",
    "Kampala",
    "Harare",
    "Benin",
    "Accra",
    "Douala",
    "Dar es Salaam",
    "Beirut",
    "Subra al-Haymah",
    "Jerusalem",
    "Colombo",
    "Fez",
    "Jeddah",
    "Khartoum",
    "Antananarivo",
    "Yaoundé",
    "Alexandria",
    "Lusaka",
    "Johannesburg",
    "Singapore",
    "Kinshasa",
    "Aqaba",
    "Istanbul",
    "Mecca",
    "Manama",
    "Zaria",
    "Riyadh",
    "Cairo",
    "Sharm el-Sheikh",
    "Durban",
    "Port Harcourt",
    "Maputo",
    "Ibadan",
    "Kano",
    "Maiduguri",
    "Doha",
    "Port Elizabeth",
    "Rabat",
    "Mogadishu",
    "Byblos",
    "Lagos",
    "Lubumbashi",
    "Bethlehem",
    "Tel Aviv",
    "Omdurman",
    "Amman",
    "Pretoria",
    "Abu Dhabi",
    "Abidjan",
    "Kolwezi",
    "Tehran",
    "Kaduna",
    "Casablanca",
    "Ouagadougou",
    "Cape Town",
    "Cairo",
    "Addis Ababa",
    "Algiers",
    "Hong Kong",
    "Dakar",
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
          Alloy 20 Flanges Manufacturer, Alloy 20 Slip on Flanges Exporter,
          Alloy 20 Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Alloy 20 Flanges Manufacturer, Alloy 20 Slip on Flanges Exporter, Alloy 20 Blind Flanges Suppliers. ASTM B564 / ASME SB564 Alloy 20 (UNS N08020) Flanges."
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
                  {/* Use flanges categories here */}
                  {flanges.categories?.map((category) => (
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
                                type.slug === "alloy-20-flanges"
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
                              item.slug === "flanges"
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
                  onClick={() => navigate("/products/flanges")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Flanges
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${flangesImage || activeCategory?.image})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Alloy 20 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are Supplier & Exporter of Alloy 20 Pipe Flanges, Alloy
                      20 Slip on Flanges, Alloy 20 DIN Blind Flanges, Alloy UNS
                      N08020 Plates Flanges Manufacturer in India.
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
                    src={flangesImage}
                    alt="Alloy 20 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Alloy 20 / UNS N08020 Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Alloy 20
                  Flanges
                </p>
                <p>
                  We are Manufacturers and Exporters of Alloy 20 Pipe Flanges.
                  This Alloy 20 Flange is engineered with utmost precision using
                  latest machinery. Alloy 20 is an alloy formulated of Nickel,
                  Chromium and Iron with extension of Molybdenum, Copper and
                  Titanium. The alloy invented to contribute exceptional
                  resistance to many corrosive environments and reducing
                  environments that acquire sulphuric acid and phosphoric acid.
                </p>
                <p>
                  These Alloy 20 Flange are manufacture in different Type of
                  Flanges like Alloy 20 Blind Flange, Alloy 20 Spectacle Blind
                  Flange, Alloy 20 Slip On Flange, 1 Socket Welding Flange,
                  Alloy 20 Welding Neck Flange, SORF Flanges, Alloy 20 Collar
                  Flange, Alloy 20 Plate Flange, Alloy 20 Raised Face Flange,
                  Alloy 20 Flat Face Flange, SWRF, WNRF, BLRF, Alloy 20 Lapped
                  Joint Flange, Alloy 20 Ring Type Joint Flange, Alloy 20
                  Threaded Flange & Alloy 20 Long Welding Neck Flange.
                </p>
                <p>
                  These Alloy 20 flanges are widely use in industries like
                  Natural gas, petroleum, chemical industry, electric power,
                  metallurgy, thermodynamic fields, water supply engineering,
                  steam heating, hydroelectric power station and long pipe line
                  transportation projects.
                </p>
                <p>
                  ASTM A564 Alloy 20 Flanges, Alloy 20 Orifice Flanges, Alloy 20
                  WNR 2.4660 Forged Flanges, Alloy 20 Socket weld Flanges, Alloy
                  20 ANSI/ASME B16.5 Reducing Flanges Supplier in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Alloy 20 Pipe Flanges available in below standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM B564 / ASME SB564
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> Alloy
                        20 (UNS N08020), Werkstoff nr.2.4660
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/2″NB
                        TO 60″NB
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Dimension:</strong>{" "}
                        ANSI/ASME B16.5, B 16.47 Series A & B, EN-1092, BS4504,
                        BS 10, B16.48, DIN, etc.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Specialize:</strong>{" "}
                        ASME Flanges, ANSI Flanges, DIN Flanges, BS Flanges, EN
                        Flanges, SORF Flanges, BLRF Flanges, SWRF Flanges, WNRF
                        Flanges, etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Class:</strong> 150#,
                        300#, 825#, 900#, 1500# & 2500#
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
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Alloy 20
                        </td>
                        <td className="px-4 py-2.5 text-sm">N08020</td>
                        <td className="px-4 py-2.5 text-sm">2.4660</td>
                        <td className="px-4 py-2.5 text-sm">NiCr20CuMo</td>
                        <td className="px-4 py-2.5 text-sm">Z2NCUD31-20AZ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N08020 Alloy 20 DIN/ANSI/ASME{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Alloy 20 Blind Flanges",
                    "Alloy 20 Plate Flanges",
                    "Alloy 20 ASME Flanges",
                    "Alloy 20 Reducing Flanges",
                    "UNS N08020 Weld Neck Flanges",
                    "Alloy 20 Industrial Flanges",
                    "Alloy 20 WNR 2.4660 Threaded Flanges",
                    "Alloy 20 Lap Joint Flanges",
                    "Alloy 20 Long weld Neck Flanges",
                    "Alloy 20 Slip-On Flanges",
                    "Alloy 20 Socket Weld Flanges",
                    "UNS N08020 Orifice Flanges",
                    "Alloy 20 Flat Flanges",
                    "Alloy 20 DIN Flanges",
                    "Alloy 20 ANSI Flanges",
                    "ASTM A564 Alloy 20 BLRF Flanges",
                    "ANSI b16.5 Alloy 20 Flanges",
                    "Alloy 20 Forged Flanges",
                    "Alloy 20 Flanges",
                    "Alloy 20 ANSI B16.5 Flanges",
                    "Alloy 20 ANSI B16.47 Flanges",
                    "Alloy 20 SWRF Flanges",
                    "Alloy 20 WNRF Flanges",
                    "Alloy 20 SORF Flanges",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-4 border border-green-200 hover:border-[#66BB6A] transition-colors"
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
                  EXPORT DESTINATIONS FOR ALLOY 20 PIPE FLANGES
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

export default Alloy20FlangesPage;
