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

const ASTMA350LF2LF3FlangesPage = () => {
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
    (type) => type.slug === "astm-a350-lf2-lf3-flanges",
  );

  const allDestinations = [
    "Jordan",
    "New Zealand",
    "Thailand (Bangkok)",
    "Iraq",
    "Trinidad and Tobago",
    "Iran",
    "Cameroon",
    "Angola",
    "Tunisia",
    "Dubai",
    "Malaysia",
    "Germany",
    "Kazakhstan",
    "Nigeria",
    "Mexico",
    "Bahrain",
    "Morocco",
    "Mozambique",
    "Ethiopa",
    "United States",
    "Africa",
    "Azerbaijan",
    "Turkey",
    "London",
    "Indonesia",
    "Algeria",
    "Sri Lanka",
    "Ghana",
    "UAE",
    "Kuwait",
    "Democratic Republic of the Congo",
    "Peru",
    "UK",
    "Egypt",
    "Israel",
    "Italy",
    "Russia",
    "Saudi Arabia",
    "Sudan",
    "Houston",
    "Uganda",
    "Chine",
    "Australia",
    "Argentina",
    "Colombia",
    "Venezuela",
    "South Africa",
    "Canada",
    "Brazil",
    "Vietnam",
    "New York",
    "Johannesburg",
    "Cairo",
    "Kaduna",
    "Durban",
    "Benin",
    "Subra al-Haymah",
    "Dammam",
    "Accra",
    "Douala",
    "Mogadishu",
    "Abidjan",
    "Bamako",
    "Zaria",
    "Port Harcourt",
    "Maiduguri",
    "Dakar",
    "Riyadh",
    "Bethlehem",
    "Maputo",
    "Doha",
    "Tripoli",
    "Byblos",
    "Aqaba",
    "Rabat",
    "Kinshasa",
    "Freetown",
    "Algiers",
    "Ibadan",
    "Muscat",
    "Alexandria",
    "Addis Ababa",
    "Luanda",
    "Kano",
    "Abu Dhabi",
    "Hong Kong",
    "Mecca",
    "Omdurman",
    "Port Elizabeth",
    "Cairo",
    "Tehran",
    "Pretoria",
    "Kampala",
    "Istanbul",
    "Mbuji-Mayi",
    "Casablanca",
    "Conakry",
    "Singapore",
    "Amman",
    "Lagos",
    "Harare",
    "Antananarivo",
    "Beirut",
    "Khartoum",
    "Nairobi",
    "Ouagadougou",
    "Fez",
    "Yaoundé",
    "Manama",
    "Lusaka",
    "Tel Aviv",
    "Giza",
    "Cape Town",
    "Colombo",
    "Bulawayo",
    "Jeddah",
    "Dar es Salaam",
    "Jerusalem",
    "Brazzaville",
    "Soweto",
    "Dubai",
    "Lubumbashi",
    "Kolwezi",
    "Sharm el-Sheikh",
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
          Carbon Steel ASTM A350 LF2 Low Temperature Pipe Flanges Supplier, CS
          A350 LF3 Slip on Flanges Manufacturer, Carbon A350 LTCS Socket weld
          Flange, Blind Flanges Exporter
        </title>
        <meta
          name="description"
          content="Carbon Steel ASTM A350 LF2 Low Temperature Pipe Flanges Supplier, CS A350 LF3 Slip on Flanges Manufacturer, Carbon A350 LTCS Socket weld Flange, Blind Flanges Exporter. ASTM A350 LF2/LF3 Low Temperature Carbon Steel Flanges."
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
                                type.slug === "astm-a350-lf2-lf3-flanges"
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
                      Carbon Steel ASTM A350 LF2/LF3 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Supplier & Exporter of ASTM A350 LF2 Carbon Steel Pipe
                      Flanges, CS A350 LF3 Low Temperature Slip on Flanges,
                      Carbon ASTM A350 LTCS Lap Joint Flanges, Carbon Steel A350
                      LF2 Low Temperature Blind Flanges Manufacturer in India.
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
                    alt="ASTM A350 LF2/LF3 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Carbon Steel ASTM A350 LF2 Low Temperature Flange / LTCS
                  Flange
                </p>
                <p>
                  We Neon Alloys is a leader in Manufacturers and Exporters of
                  high quality Carbon Steel Flanges
                </p>
                <p>
                  We, Neon Alloys acknowledged as a manufacturer & exporters of
                  A350 LF2 /LF3 Carbon Steel Flanges Flange & Stainless steel
                  Flanges (Gr. 304, 304L, 316, 316L) available in a variety or
                  grades, materials, and finishes, in metric and inch sizes.
                  Apart from this, we deliver these ASTM A LF2 /LF3 Flanges at
                  patrons' destination within the stipulated time frame
                  worldwide. We export ASTM A350 LF2 Low Temperature Flanges /
                  LF3 Flanges which are used in applications of Oil Field,
                  Offshore, Water System, Shipbuilding, Natural Gas, Electric
                  Power, Pipe Projects, Pulp & paper industry, Research &
                  development, Mega projects, Defense industry, Development
                  industry others etc. etc.
                </p>
                <p>
                  These ASTM A LF2 /LF3 Low Temperature Flanges are manufacture
                  in different Type of Flanges like LF2 Blind Flange, LF2
                  Spectacle Blind Flange, LF2 Slip On Flange, Socket Welding Low
                  Temperature Flanges Flange, LF2 Welding Neck Flange, SORF
                  Flanges, LF2 Collar Flange, LF2 Plate Flange, LF3 Raised Face
                  Flange, LF2 Flat Face Flange, SWRF, WNRF, BLRF, LF3 Lapped
                  Joint Flange, LF2 Ring Type Joint Flange, LF2 Threaded Flange
                  & LF3 Low Temperature Flanges Long Welding Neck Flange.
                </p>
                <p>
                  Carbon ASTM A350 LF2 CL1 Pipe Flanges Manufacturer, CS A350
                  LF2 LTCS Plate Flanges, ASTM A350 DIN/ASME Pipe Flanges,
                  Carbon A350 LF3 LTCS Socket weld Flanges, ASTM A350 LF2 CL2
                  Low Temperature Carbon Lap Joint Flanges Suppliers in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  ASTM A350 Low Temperature Carbon Steel Pipe Flanges standard
                  and <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM A350 LF2 / LF3 Low Temperature Flange / LTCS Flange
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> ½” to
                        36″
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Material:</strong>{" "}
                        ASTM A350 LF1, LF2 CL1/CL2, LF3 CL1/CL2
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
                  Types of ASTM A350 LF2 LTCS Carbon Flanges / ASTM A350 LF3
                  LTCS CS Pipe <span className="text-[#66BB6A]">Flanges</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Carbon Steel ASTM A350 LF2 Blind Flanges",
                    "Carbon A350 LTCS Plate Flanges",
                    "ASTM A350 Low Temperature Carbon ASME Flanges",
                    "Carbon A350 LF2 CL2 Low Temperature Reducing Flanges",
                    "CS ASTM A350 LF2 Weld Neck Flanges",
                    "Carbon A350 LTCS Industrial Flanges",
                    "CS A350 LF2 Threaded Flanges",
                    "ASTM A350 Low Temperature Carbon Lap Joint Flanges",
                    "A350 LF3 CL1 Carbon Long weld Neck Flanges",
                    "Carbon Steel A350 LTCS Slip-On Flanges",
                    "Carbon ASTM A350 Socket Weld Flanges",
                    "CS A350 LF2 Low Temperature Orifice Flanges",
                    "Carbon Steel A350 LF3 Flat Flanges",
                    "Carbon ASTM A350 Low Temperature DIN Flanges",
                    "CS A350 ANSI LTCS Flanges",
                    "Carbon Steel ASTM A350 Pipe Flanges",
                    "Carbon Steel A350 Low Temperature Flanges",
                    "ASTM A350 LF2 Forged Flanges",
                    "ASTM A350 Low Temperature Pipe Flanges",
                    "ASTM A350 LF3 CL1 Carbon Flange",
                    "ANSI B16.47 Carbon ASTM A350 LF2 Flanges",
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
                  EXPORT DESTINATIONS FOR ASTM A350 LF2 & LF3 LOW TEMPERATURE
                  CARBON FLANGES
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

export default ASTMA350LF2LF3FlangesPage;
