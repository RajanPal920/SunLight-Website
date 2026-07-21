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

const Aluminium2014RoundBarsPage = () => {
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
    (type) => type.slug === "aluminium-2014-roundbars",
  );

  const allDestinations = [
    "UK",
    "New Zealand",
    "Israel",
    "Sudan",
    "Australia",
    "London",
    "Algeria",
    "Azerbaijan",
    "South Africa",
    "Kuwait",
    "Germany",
    "Jordan",
    "UAE",
    "Mexico",
    "Ghana",
    "Venezuela",
    "Argentina",
    "Vietnam",
    "Bahrain",
    "Iraq",
    "Trinidad and Tobago",
    "Cameroon",
    "Canada",
    "Morocco",
    "Kazakhstan",
    "Italy",
    "Malaysia",
    "Nigeria",
    "Uganda",
    "Colombia",
    "Brazil",
    "Thailand (Bangkok)",
    "Dubai",
    "Peru",
    "Saudi Arabia",
    "Russia",
    "Indonesia",
    "Houston",
    "Democratic Republic of the Congo",
    "Sri Lanka",
    "Africa",
    "Egypt",
    "Iran",
    "Ethiopa",
    "Tunisia",
    "United States",
    "Angola",
    "Turkey",
    "Mozambique",
    "Chine",
    "Accra",
    "Giza",
    "Kano",
    "Lusaka",
    "Durban",
    "Ouagadougou",
    "Addis Ababa",
    "Fez",
    "Kinshasa",
    "Aqaba",
    "Casablanca",
    "Istanbul",
    "Singapore",
    "Nairobi",
    "Mogadishu",
    "Port Elizabeth",
    "Antananarivo",
    "Bulawayo",
    "Hong Kong",
    "Alexandria",
    "Sharm el-Sheikh",
    "Byblos",
    "Benin",
    "Abidjan",
    "Omdurman",
    "Riyadh",
    "Cape Town",
    "Zaria",
    "Doha",
    "Amman",
    "Tripoli",
    "Pretoria",
    "Lubumbashi",
    "Ibadan",
    "Dubai",
    "Dar es Salaam",
    "Colombo",
    "Cairo",
    "New York",
    "Johannesburg",
    "Bamako",
    "Khartoum",
    "Soweto",
    "Abu Dhabi",
    "Yaoundé",
    "Beirut",
    "Manama",
    "Mbuji-Mayi",
    "Luanda",
    "Conakry",
    "Maiduguri",
    "Port Harcourt",
    "Cairo",
    "Rabat",
    "Dammam",
    "Kampala",
    "Subra al-Haymah",
    "Jeddah",
    "Brazzaville",
    "Kaduna",
    "Kolwezi",
    "Harare",
    "Mecca",
    "Algiers",
    "Maputo",
    "Freetown",
    "Dakar",
    "Muscat",
    "Tel Aviv",
    "Tehran",
    "Lagos",
    "Bethlehem",
    "Jerusalem",
    "Douala",
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
          Most Prominent Dealer & Exporter of Aluminium Alloy 2014 Round Bars,
          ASTM B211 Aluminium 2014 Rods, Aluminium Alloy UNS A92014 Round Bars,
          Aluminium Alloy Round Bars, Aluminium Alloy Bars Supplier in India.
        </title>
        <meta
          name="description"
          content="Most Prominent Dealer & Exporter of Aluminium Alloy 2014 Round Bars, ASTM B211 Aluminium 2014 Rods, Aluminium Alloy UNS A92014 Round Bars, Aluminium Alloy Round Bars, Aluminium Alloy Bars Supplier in India."
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
                                type.slug === "aluminium-2014-roundbars"
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
                      Aluminium 2014 Round Bars & Rods
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Most Prominent Dealer & Exporter of Aluminium Alloy 2014
                      Round Bars, ASTM B211 Aluminium 2014 Rods, Aluminium Alloy
                      UNS A92014 Round Bars, Aluminium Alloy Round Bars,
                      Aluminium Alloy Bars Supplier in India.
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
                    alt="Aluminium 2014 Round Bars"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Aluminium 2014 Round Bars & Rods
                </p>
                <p>
                  We are involved in offering a qualitative Steel Round Bars to
                  our clients. Widely used in the making of canals, bridges,
                  buildings, hotels, hospitals, homes etc.
                </p>
                <p>
                  Aluminium 2014 Forged Round Bars Stockist, ASME SB 211
                  Aluminium Alloy Werkstoff Nr. 3.1255 / 3.1254 Hex Bars, 2014
                  Flat Bars Exporter, Aluminium Alloy 2014 Black Round Bars
                  Manufacturer
                </p>
                <p>
                  Aluminum Alloy 2014 Round Bars is a high strength alloy with
                  excellent machinability that are made by outperforming
                  aluminum between moves underneath weight, it winds up plainly
                  more slender and longer the moving way. These Grade 2014
                  Aluminum Round Bars is also known as UNS A92014 Round Bars
                  comes with Bright, Black, Polish, Round surface finish.
                </p>
                <p>
                  We here at Neon Alloys is one of the largest and trusted
                  dealer and exporters of a large array of Aluminum 2014 Round
                  Bars in India and across worldwide. We offer Aluminum Alloy
                  2014 Rods in custom built sizes, thickness, standards with
                  hex, and square, rectangular and hollow shapes in order to
                  meet the complete needs for our esteemed customers at market
                  leading price.
                </p>
                <p>
                  We specialize in offering our client with best in class
                  Aluminium Alloy 2014 Round Bars which has the limited
                  formability and only fair corrosion resistance in the heat
                  treated condition. Kindly do call us now and request a free
                  quote!
                </p>
                <p>
                  Aluminium Alloy 2014 Cold Drawn Round Bars Exporter, ASTM B211
                  Aluminium 2014 Threaded Bars, Aluminium Alloy 2014 Rectangular
                  Bars, ASME SB 211 Grade 2014 Aluminium Welding Rods
                  Stockholder, Trader
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Aluminium Alloy 2014 Round Bars & Aluminium 2014 Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specifications:
                        </strong>{" "}
                        ASTM B221 / ASTM SB221
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimensions:</strong>{" "}
                        EN, DIN, JIS, ASTM, BS, ASME, AISI
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 5 mm
                        To 500 mm
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Diameter:</strong>{" "}
                        0.1 mm to 100 mm
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong> 100
                        mm To 3000 mm Long & Above
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Black, Bright Polished, Rough Turned, NO.4 Finish, Matt
                        Finish, BA Finish
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Tolerance:</strong>{" "}
                        H8, H9, H10, H11, H12, H13K9, K10, K11, K12 or as per
                        clients' requirements
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Hex (A/F), Rectangle, Billet, Ingot, Forging
                        Etc.
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
                          Aluminium 2014
                        </td>
                        <td className="px-4 py-2.5 text-sm">3.1255/3.1254</td>
                        <td className="px-4 py-2.5 text-sm">A92014</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Other Types Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of Aluminium Alloy 2014 Round Bars & Aluminium{" "}
                  <span className="text-[#66BB6A]">2014 Rods</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "aluminium-2014-roundbars"
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
                  EXPORT DESTINATIONS FOR ALUMINIUM 2014 ROUND BARS, ALUMINIUM
                  BARS, ALUMINIUM ALLOY RODS, ALUMINIUM 2014 ROUND RODS
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

export default Aluminium2014RoundBarsPage;
