import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
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
import flangesImage from "../../assets/productsImage/fan.jpg";

const InconelAlloy800FlangesPage = () => {
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
    (type) => type.slug === "inconel-alloy-800-flanges",
  );

  const allDestinations = [
    "London",
    "Bahrain",
    "Russia",
    "Peru",
    "Israel",
    "Australia",
    "Colombia",
    "Thailand (Bangkok)",
    "Brazil",
    "Indonesia",
    "Africa",
    "Democratic Republic of the Congo",
    "Algeria",
    "Turkey",
    "Ghana",
    "Saudi Arabia",
    "Dubai",
    "Germany",
    "Mexico",
    "Venezuela",
    "Uganda",
    "UAE",
    "Morocco",
    "Iran",
    "Canada",
    "Nigeria",
    "Italy",
    "Iraq",
    "UK",
    "Kazakhstan",
    "Sudan",
    "Mozambique",
    "United States",
    "South Africa",
    "Houston",
    "Angola",
    "Cameroon",
    "Ethiopa",
    "Chine",
    "Vietnam",
    "Sri Lanka",
    "Tunisia",
    "New Zealand",
    "Jordan",
    "Egypt",
    "Kuwait",
    "Azerbaijan",
    "Argentina",
    "Trinidad and Tobago",
    "Malaysia",
    "Lagos",
    "Maputo",
    "Bamako",
    "Kaduna",
    "Alexandria",
    "Mecca",
    "Dakar",
    "Byblos",
    "Sharm el-Sheikh",
    "Omdurman",
    "Durban",
    "Lubumbashi",
    "Addis Ababa",
    "Subra al-Haymah",
    "Colombo",
    "Accra",
    "Kano",
    "Maiduguri",
    "Kampala",
    "New York",
    "Casablanca",
    "Algiers",
    "Beirut",
    "Bulawayo",
    "Giza",
    "Ouagadougou",
    "Soweto",
    "Bethlehem",
    "Dar es Salaam",
    "Khartoum",
    "Singapore",
    "Abidjan",
    "Tehran",
    "Cairo",
    "Aqaba",
    "Muscat",
    "Luanda",
    "Jerusalem",
    "Tripoli",
    "Mogadishu",
    "Nairobi",
    "Yaoundé",
    "Pretoria",
    "Fez",
    "Dubai",
    "Cairo",
    "Ibadan",
    "Manama",
    "Benin",
    "Tel Aviv",
    "Freetown",
    "Conakry",
    "Kolwezi",
    "Jeddah",
    "Johannesburg",
    "Lusaka",
    "Port Harcourt",
    "Istanbul",
    "Doha",
    "Kinshasa",
    "Douala",
    "Brazzaville",
    "Antananarivo",
    "Harare",
    "Port Elizabeth",
    "Amman",
    "Hong Kong",
    "Dammam",
    "Zaria",
    "Cape Town",
    "Rabat",
    "Abu Dhabi",
    "Mbuji-Mayi",
    "Riyadh",
  ];

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
          Inconel Alloy 800 Flanges Manufacturer, Inconel 800 Slip on Flanges
          Exporter, Alloy 800 Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Inconel Alloy 800 Flanges Manufacturer, Inconel 800 Slip on Flanges Exporter, Alloy 800 Blind Flanges Suppliers. ASTM B564 / ASME SB564 Inconel Alloy 800/800H/800HT (UNS N08800/N08810/N08811) Flanges."
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
                                type.slug === "inconel-alloy-800-flanges"
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
                      Inconel Alloy 800 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are Supplier & Exporter of Inconel Alloy 800 Pipe
                      Flanges, Inconel 800H Slip on Flanges, Inconel 800 DIN
                      Blind Flanges, Inconel Alloy UNS N08800 Plates Flanges
                      Manufacturer in India.
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
                    alt="Inconel Alloy 800 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Inconel Alloy 800 / UNS N08800 Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Inconel
                  Alloy 800 Flanges
                </p>
                <p>
                  Inconel 800 is a combination of nickel and chromium alloy that
                  has excellent tensile strength and resistance to oxidation as
                  well as carburization properties. This 800 alloy flanges is
                  extremely functional as it maintains a stable structure, even
                  when exposed to high temperature. The Inconel is extremely
                  resistant to corrosion, even in acidic environment. This alloy
                  is extremely functional as it maintains a stable structure,
                  even when exposed to high temperature.
                </p>
                <p>
                  We manufacture and export premium quality of Inconel 800
                  Flanges. Branded for their high strength, corrosion resistance
                  finish and dimensional accuracy, the offered Inconel flanges
                  are ideal of pipe fitting applications. Available in Weld Neck
                  Flanges, Slip On Flanges, Blind Flanges, Socket Weld Flanges,
                  Screwed Flanges, Orifice Flanges, Lap Join Flanges, Long Weld
                  Neck Flanges.
                </p>
                <p>
                  Inconel Alloy 800 /UNS N08800 is used for process piping, heat
                  exchangers, heating-element sheathing, carburizing equipment,
                  nuclear steam-generator tubing, engine ducting, combustion
                  liners and spray bars, chemical plant hardware and special
                  seawater applications.
                </p>
                <p>
                  ASTM A564 Inconel 800 Flanges, Alloy 800 Orifice Flanges,
                  Incoloy WNR 1.4876 Forged Flanges, Alloy 800HT Socket weld
                  Flanges, Inconel 800 ANSI/ASME B16.5 Reducing Flanges Supplier
                  in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Inconel Alloy 800 Pipe Flanges available in below standard and{" "}
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
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Inconel Alloy 800/800H/800HT (UNS N08800), Werkstoff
                        nr.1.4876
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
                        300#, 800#, 900#, 1500# & 2500#
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
                          Incoloy 800
                        </td>
                        <td className="px-4 py-2.5 text-sm">N08800</td>
                        <td className="px-4 py-2.5 text-sm">1.4876</td>
                        <td className="px-4 py-2.5 text-sm">
                          X10NiCrAlTi32-20
                        </td>
                        <td className="px-4 py-2.5 text-sm">XH32T</td>
                        <td className="px-4 py-2.5 text-sm">NA 15</td>
                        <td className="px-4 py-2.5 text-sm">ЭИ670</td>
                        <td className="px-4 py-2.5 text-sm">NCF 800</td>
                        <td className="px-4 py-2.5 text-sm">Z8NC32-21</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Incoloy 800H
                        </td>
                        <td className="px-4 py-2.5 text-sm">N08810</td>
                        <td className="px-4 py-2.5 text-sm">1.4958 / 1.4876</td>
                        <td className="px-4 py-2.5 text-sm">X5NiCrAlTi31-20</td>
                        <td className="px-4 py-2.5 text-sm">XH32T</td>
                        <td className="px-4 py-2.5 text-sm">NA 15(H)</td>
                        <td className="px-4 py-2.5 text-sm">ЭИ670</td>
                        <td className="px-4 py-2.5 text-sm">NCF 800H</td>
                        <td className="px-4 py-2.5 text-sm">Z8NC33-21</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Incoloy 800HT
                        </td>
                        <td className="px-4 py-2.5 text-sm">N08811</td>
                        <td className="px-4 py-2.5 text-sm">1.4859 / 1.4876</td>
                        <td className="px-4 py-2.5 text-sm">X8NiCrAlTi32-21</td>
                        <td className="px-4 py-2.5 text-sm">XH32T</td>
                        <td className="px-4 py-2.5 text-sm">NA 15(HT)</td>
                        <td className="px-4 py-2.5 text-sm">ЭИ670</td>
                        <td className="px-4 py-2.5 text-sm">NCF 800HT</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N08800 Incoloy 800/800H/800HT DIN/ANSI/ASME{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Inconel 800 Blind Flanges",
                    "Inconel Alloy 800H Plate Flanges",
                    "Incoloy 800 ASME Flanges",
                    "800 Inconel Reducing Flanges",
                    "UNS N08800 Weld Neck Flanges",
                    "Inconel 800 Industrial Flanges",
                    "Inconel Alloy WNR 1.4876 Threaded Flanges",
                    "Inconel 800HT Lap Joint Flanges",
                    "800 Inconel Long weld Neck Flanges",
                    "Alloy 800 Slip-On Flanges",
                    "Inconel Alloy 800 Socket Weld Flanges",
                    "Incoloy UNS N08800 Orifice Flanges",
                    "Inconel 800 Alloy Flat Flanges",
                    "800 Inconel Alloy DIN Flanges",
                    "Inconel 800H ANSI Flanges",
                    "ASTM A564 800 BLRF Flanges",
                    "ANSI b16.5 800 Inconel Flanges",
                    "Inconel 800HT Forged Flanges",
                    "Alloy 800 Flanges",
                    "Incoloy 800 ANSI B16.5 Flanges",
                    "Inconel Alloy 800 ANSI B16.47 Flanges",
                    "800 Inconel SWRF Flanges",
                    "Inconel 800 WNRF Flanges",
                    "Inconel Alloy 800 SORF Flanges",
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
                  EXPORT DESTINATIONS FOR ALLOY 800 PIPE FLANGES, INCONEL 800
                  FLANGES, INCONEL 800 SLIP ON FLANGES, INCOLOY 800 BLIND
                  FLANGES
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
      {/* ===== FLOATING CALL AND WHATSAPP BUTTONS ===== */}
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

export default InconelAlloy800FlangesPage;
