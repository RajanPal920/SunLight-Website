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

const CopperNickelFlangesPage = () => {
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
    (type) => type.slug === "copper-nickel-flanges",
  );

  const allDestinations = [
    "Indonesia",
    "Iran",
    "Mozambique",
    "Brazil",
    "Sudan",
    "Angola",
    "Turkey",
    "Bahrain",
    "Sri Lanka",
    "Morocco",
    "South Africa",
    "Dubai",
    "Egypt",
    "Colombia",
    "Vietnam",
    "Africa",
    "Ethiopa",
    "Peru",
    "Canada",
    "UAE",
    "Algeria",
    "Democratic Republic of the Congo",
    "Argentina",
    "Venezuela",
    "London",
    "Kazakhstan",
    "Israel",
    "Nigeria",
    "UK",
    "Iraq",
    "New Zealand",
    "Saudi Arabia",
    "Kuwait",
    "Chine",
    "Trinidad and Tobago",
    "Australia",
    "Cameroon",
    "Germany",
    "Mexico",
    "United States",
    "Russia",
    "Uganda",
    "Ghana",
    "Houston",
    "Jordan",
    "Tunisia",
    "Malaysia",
    "Italy",
    "Thailand (Bangkok)",
    "Azerbaijan",
    "Yaoundé",
    "Harare",
    "Maputo",
    "Accra",
    "Cape Town",
    "Mecca",
    "Kampala",
    "Dammam",
    "Dakar",
    "Khartoum",
    "Sharm el-Sheikh",
    "Muscat",
    "Giza",
    "Bethlehem",
    "Brazzaville",
    "Luanda",
    "Tel Aviv",
    "Subra al-Haymah",
    "Abu Dhabi",
    "Mbuji-Mayi",
    "Durban",
    "Port Elizabeth",
    "Singapore",
    "Colombo",
    "Jeddah",
    "New York",
    "Bamako",
    "Istanbul",
    "Alexandria",
    "Jerusalem",
    "Antananarivo",
    "Beirut",
    "Nairobi",
    "Dubai",
    "Zaria",
    "Maiduguri",
    "Hong Kong",
    "Cairo",
    "Lagos",
    "Byblos",
    "Douala",
    "Algiers",
    "Johannesburg",
    "Freetown",
    "Tripoli",
    "Tehran",
    "Kaduna",
    "Aqaba",
    "Doha",
    "Soweto",
    "Casablanca",
    "Ibadan",
    "Addis Ababa",
    "Ouagadougou",
    "Riyadh",
    "Kolwezi",
    "Cairo",
    "Omdurman",
    "Fez",
    "Port Harcourt",
    "Kinshasa",
    "Conakry",
    "Kano",
    "Rabat",
    "Benin",
    "Pretoria",
    "Amman",
    "Lubumbashi",
    "Lusaka",
    "Bulawayo",
    "Dar es Salaam",
    "Manama",
    "Abidjan",
    "Mogadishu",
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
          Copper Nickel Flanges Manufacturer, Cupro Nickel Slip on Flanges
          Exporter, Copper Nickel Alloy Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Copper Nickel Flanges Manufacturer, Cupro Nickel Slip on Flanges Exporter, Copper Nickel Alloy Blind Flanges Suppliers. Cu-Ni 70/30 (C71500) and Cu-Ni 90/10 (C70600) Flanges."
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
                                type.slug === "copper-nickel-flanges"
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
                      Copper Nickel Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Copper Nickel Pipe Flanges, Cupro Nickel 70/30 Slip on
                      Flanges, Copper Nickel 90/10 DIN Blind Flanges, Copper
                      Nickel Alloy UNS C71500 Plates Flanges Manufacturer in
                      India.
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
                    alt="Copper Nickel Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Copper Nickel Flanges / Cupro Nickel Flange
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Copper
                  Nickel Flanges
                </p>
                <p>
                  We are amongst the highly trustworthy manufacturer & exporter
                  of the best quality array of Copper Nickel Flange. We produce
                  Copper Nickel Cu-Ni 70/30 (C71500) Flanges, Copper Nickel
                  Cu-Ni 90/10 (C70600) Flanges, Cupro Nickel Flange. The offered
                  copper nickel flange is examined on quality provisions for
                  make certain its flawlessness. These Copper Nickel Flanges are
                  commonly used in application like Salt water pipes and
                  fittings, hot water tanks, salt water baffles, propeller
                  sleeves, valve and pump components, flanges, boat hulls,
                  marine fittings and marine hardware, Heat exchanger and
                  cooling plant, evaporator tubes, pump and valve trim, brake
                  lines, condenser plates, pressure vessels and distiller tubes.
                </p>
                <p>
                  These Copper Nickel Flange are manufacture in different Type
                  of Flanges like Copper Nickel Blind Flange, Cupro Nickel
                  Spectacle Blind Flange, Cu-Ni 70/30 Slip On Flange, Copper
                  Nickel Socket Welding Flange, Cu-Ni 90/10 Welding Neck Flange,
                  SORF Flanges, Cupro Nickel Collar Flange, Copper Nickel Plate
                  Flange, Copper Nickel Raised Face Flange, Cu-Ni 90/10 Flat
                  Face Flange, SWRF, WNRF, BLRF, Copper Nickel Lapped Joint
                  Flange, Copper Nickel Ring Type Joint Flange, Cu-Ni 70/30
                  Threaded Flange & Copper Nickel Long Welding Neck Flange
                </p>
                <p>
                  Copper Nickel Flanges, Cupro Nickel 70/30 Orifice Flanges,
                  Cu-Ni 90/10 Forged Flanges, Copper UNS C70600 Socket weld
                  Flanges, Cupro ANSI/ASME B16.5 Reducing Flanges Supplier in
                  India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Copper Nickel Pipe Flanges available in below standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standards:</strong>{" "}
                        ASTM / ASME SB 61 / 62 / 151 / 152.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Copper Nickel UNS NO. C70600 (Cu-Ni 90/10), C71500
                        (Cu-Ni 70/30) C71640
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> ½” to
                        12"
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
                        <strong className="text-[#4A148C]">
                          Flanges Types:
                        </strong>{" "}
                        Blind Flanges, Slip on Flanges, Reducing Flanges, Socket
                        weld Flanges, Weld Neck Flanges, Orifice Flanges, Lap
                        Joint Flanges, Threaded Flanges, Plate Flanges,
                        Industrial Flanges, etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Class:</strong> 150#,
                        300#, 825#, 900#, 1500# & 2500#
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS C70600/C71500/C71640 Copper Nickel DIN/ANSI/ASME{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Copper Nickel 70/30 Blind Flanges",
                    "Cupro Nickel Alloy C70600 Plate Flanges",
                    "Copper 90/10 ASME Flanges",
                    "Copper Nickel Reducing Flanges",
                    "Copper Weld Neck Flanges",
                    "Copper Nickel 70/30 Industrial Flanges",
                    "Copper Nickel 70/30 Threaded Flanges",
                    "Copper Nickel C70600 Lap Joint Flanges",
                    "Cupro Nickel Long weld Neck Flanges",
                    "Copper Nickel 90/10 Slip-On Flanges",
                    "Copper Nickel Socket Weld Flanges",
                    "Cupro Orifice Flanges",
                    "Copper Nickel Alloy 70/30 Flat Flanges",
                    "Copper DIN Flanges",
                    "Cupro Nickel ANSI Flanges",
                    "Copper Nickel BLRF Flanges",
                    "ANSI B16.5 Copper Nickel Flanges",
                    "Copper Nickel Forged Flanges",
                    "Copper Nickel Flanges",
                    "Cupro Nickel ANSI B16.5 Flanges",
                    "Copper Nickel ANSI B16.47 Flanges",
                    "Copper Nickel C70600 SWRF Flanges",
                    "Copper Nickel WNRF Flanges",
                    "Cupro Nickel Alloy 90/10 SORF Flanges",
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
                  EXPORT DESTINATIONS FOR COPPER NICKEL FLANGES, CUPRO NICKEL
                  PIPE FLANGES, COPPER PIPE FLANGES, CU-NI FLANGES
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

export default CopperNickelFlangesPage;
