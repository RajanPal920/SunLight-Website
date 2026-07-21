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

const CarbonSteelASTMA105FlangesPage = () => {
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
    (type) => type.slug === "carbon-steel-astm-a105-flanges",
  );

  const allDestinations = [
    "Saudi Arabia",
    "Mexico",
    "Bahrain",
    "Indonesia",
    "Peru",
    "Algeria",
    "Argentina",
    "Trinidad and Tobago",
    "UAE",
    "Ghana",
    "Angola",
    "Africa",
    "South Africa",
    "Uganda",
    "Venezuela",
    "Malaysia",
    "Azerbaijan",
    "Kuwait",
    "Sudan",
    "Chine",
    "London",
    "Kazakhstan",
    "New Zealand",
    "Nigeria",
    "Tunisia",
    "Germany",
    "Brazil",
    "Ethiopa",
    "Thailand (Bangkok)",
    "Iran",
    "Dubai",
    "Italy",
    "Morocco",
    "Jordan",
    "Houston",
    "Russia",
    "Israel",
    "Colombia",
    "United States",
    "Canada",
    "Turkey",
    "UK",
    "Democratic Republic of the Congo",
    "Sri Lanka",
    "Egypt",
    "Iraq",
    "Mozambique",
    "Cameroon",
    "Vietnam",
    "Australia",
    "Omdurman",
    "Bulawayo",
    "Luanda",
    "Beirut",
    "Lagos",
    "Jerusalem",
    "Accra",
    "Aqaba",
    "Jeddah",
    "Tehran",
    "Riyadh",
    "Byblos",
    "Colombo",
    "Mogadishu",
    "Pretoria",
    "Kaduna",
    "Cairo",
    "Lubumbashi",
    "Douala",
    "Hong Kong",
    "Cape Town",
    "Ibadan",
    "Dakar",
    "Cairo",
    "Mecca",
    "Freetown",
    "Kolwezi",
    "Kano",
    "Lusaka",
    "Antananarivo",
    "Nairobi",
    "Tripoli",
    "Zaria",
    "Benin",
    "Tel Aviv",
    "Brazzaville",
    "Sharm el-Sheikh",
    "Rabat",
    "Doha",
    "Amman",
    "Ouagadougou",
    "Dar es Salaam",
    "Johannesburg",
    "Port Elizabeth",
    "Maputo",
    "Bamako",
    "Bethlehem",
    "Giza",
    "Abidjan",
    "Muscat",
    "Durban",
    "Singapore",
    "Yaoundé",
    "Subra al-Haymah",
    "Harare",
    "Soweto",
    "Fez",
    "Istanbul",
    "Port Harcourt",
    "Manama",
    "Abu Dhabi",
    "Dammam",
    "Algiers",
    "Kinshasa",
    "Alexandria",
    "New York",
    "Mbuji-Mayi",
    "Conakry",
    "Dubai",
    "Khartoum",
    "Addis Ababa",
    "Kampala",
    "Maiduguri",
    "Casablanca",
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
          Carbon Steel ASTM A105 Pipe Flanges Supplier, CS A105 Slip on Flanges
          Manufacturer, Carbon ASTM A105 Socket weld Flange, Blind Flanges
          Exporter
        </title>
        <meta
          name="description"
          content="Carbon Steel ASTM A105 Pipe Flanges Supplier, CS A105 Slip on Flanges Manufacturer, Carbon ASTM A105 Socket weld Flange, Blind Flanges Exporter. ASTM A105 Carbon Steel Flanges."
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
                                type.slug === "carbon-steel-astm-a105-flanges"
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
                      Carbon Steel ASTM A105 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Supplier & Exporter of ASTM A105 Carbon Steel Pipe
                      Flanges, CS A105 Slip on Flanges, Carbon ASTM A105 Lap
                      Joint Flanges, Carbon Steel A105 Blind Flanges
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
                    alt="Carbon Steel ASTM A105 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Carbon Steel ASTM A105 Flanges
                </p>
                <p>
                  We Neon Alloys is a leader in Manufacturers and Exporters of
                  high quality Carbon Steel Flanges
                </p>
                <p>
                  We are an internationally renowned manufacturer and exporter
                  of superior quality Carbon Steel ASTM A105 Pipe Flanges. We
                  offer an enormous array of Carbon Steel Flanges. Fabricated
                  using premium quality raw materials, our range of carbon steel
                  flanges are meticulously designed with utmost attention to
                  quality. Widely used in Application like Petro-chemical
                  industry, Oil and gas industry, Nuclear industry, Pulp & paper
                  industry, Research & development, Mega projects, Defense
                  industry, Development industry others etc.
                </p>
                <p>
                  These Carbon Steel ASTM A105 Flange are manufacture in
                  different Type of Flanges like Carbon steel Blind Flange,
                  Carbon ASTM A105 Spectacle Blind Flange, Carbon steel Slip On
                  Flange, Carbon steel Socket Welding Flange, Carbon steel ASTM
                  A105 Welding Neck Flange, SORF Flanges, A105 Collar Flange,
                  Carbon steel Plate Flange, Carbon steel ASTM A105 Raised Face
                  Flange, Carbon steel Flat Face Flange, SWRF, WNRF, BLRF,
                  Carbon steel Lapped Joint Flange, Carbon steel Ring Type Joint
                  Flange, Carbon steel Threaded Flange & Carbon steel Long
                  Welding Neck Flanges, Low Temperature CS Flanges, IS 2062
                  Flanges, ASTM A420 WPL6 Flanges, ASTM A860 WPHY Flanges, ANSI
                  B16.47 Flanges, ANSI B16.36 Flanges, PN 10 Flanges.
                </p>
                <p>
                  Carbon Steel Flanges are available in various dimensions.
                  Exhibiting the properties such as high strength, high
                  toughness, excellent fatigue strength, superior chemical
                  resistance and high stress-corrosion cracking resistance,
                  these flanges are ideal for connecting various pipes and are
                  significant while support is required for mechanical parts.
                </p>
                <p>
                  Carbon ASTM A105 Pipe Flanges Manufacturer, CS A105 Plate
                  Flanges, ASTM A105 DIN/ASME Pipe Flanges, Carbon A105 Socket
                  weld Flanges, ASTM A105 Carbon Lap Joint Flanges Suppliers in
                  India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  ASTM A105 Carbon Steel Pipe Flanges available in below
                  standard and <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM A105, ASTM A106 Gr. A/B
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Material:</strong>{" "}
                        ASTM A105, ASME A105, ASTM A266 GR.1, GR.2, GR.3, GR.4,
                        ASTM A350 LF1, LF2 CL1/CL2, LF3 CL1/CL2, ASTM A694 F42,
                        F46, F48, F50, F52, F56, F60, F65, F70
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Dimension:</strong>{" "}
                        ANSI/ASME B16.5, B 16.47 Series A & B, EN-1092, BS4504,
                        BS 10, B16.48, DIN, etc.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Type of Flanges:
                        </strong>{" "}
                        Blind Flanges, Slip on Flanges, Reducing Flanges, Socket
                        weld Flanges, Weld Neck Flanges, Orifice Flanges, Lap
                        Joint Flanges, Threaded Flanges, Plate Flanges,
                        Industrial Flanges, etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Specialize:</strong>{" "}
                        ASME Flanges, ANSI Flanges, DIN Flanges, BS Flanges, EN
                        Flanges, SORF Flanges, BLRF Flanges, SWRF Flanges, WNRF
                        Flanges, etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Class:</strong> 150#,
                        300#, 600#, 900#, 1500# & 2500#
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of ASTM A105 Carbon Flanges / ASTM A105 CS Pipe{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Carbon Steel ASTM A105 Blind Flanges",
                    "Carbon A105 Plate Flanges",
                    "ASTM A105 Carbon ASME Flanges",
                    "Carbon A105 Reducing Flanges",
                    "CS ASTM A105 Weld Neck Flanges",
                    "Carbon A105 Industrial Flanges",
                    "CS A105 Threaded Flanges",
                    "ASTM A105 Carbon Lap Joint Flanges",
                    "A105 Carbon Long weld Neck Flanges",
                    "Carbon Steel A105 Slip-On Flanges",
                    "Carbon ASTM A105 Socket Weld Flanges",
                    "CS A105 Orifice Flanges",
                    "Carbon Steel A105 Flat Flanges",
                    "Carbon ASTM A105 DIN Flanges",
                    "CS A105 ANSI Flanges",
                    "Carbon Steel ASTM A105 Pipe Flanges",
                    "Carbon Steel A105 Flanges",
                    "ASTM A105 Forged Flanges",
                    "ASTM A105 Pipe Flanges",
                    "ASTM A105 Carbon Flange",
                    "ANSI B16.47 Carbon ASTM A105 Flanges",
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
                  EXPORT DESTINATIONS FOR CARBON STEEL A105 PIPE FLANGES, ASTM
                  A105 CARBON FLANGES, CARBON A105 FLANGES
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

export default CarbonSteelASTMA105FlangesPage;
