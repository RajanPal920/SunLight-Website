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
  PhoneCall,
} from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import pipesTubes from "../../data/productCategories/pipes-tubes";
import pipesTubesImage from "../../assets/productsImage/inc.jpg";

const HastelloyC276Page = () => {
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

  const currentCategory = pipesTubes.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || pipesTubes.categories[0];

  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "hastelloy-c276-pipestubes",
  );

  const allDestinations = [
    "Canada",
    "Uganda",
    "Australia",
    "Kuwait",
    "Ethiopa",
    "Saudi Arabia",
    "Colombia",
    "London",
    "Sri Lanka",
    "Russia",
    "Cameroon",
    "Germany",
    "Brazil",
    "Egypt",
    "Vietnam",
    "Israel",
    "Iran",
    "Azerbaijan",
    "Turkey",
    "Malaysia",
    "UK",
    "Mozambique",
    "Thailand (Bangkok)",
    "UAE",
    "Africa",
    "Morocco",
    "Sudan",
    "Tunisia",
    "Iraq",
    "Peru",
    "Ghana",
    "Indonesia",
    "Democratic Republic of the Congo",
    "Angola",
    "Kazakhstan",
    "New Zealand",
    "Italy",
    "United States",
    "Houston",
    "Venezuela",
    "Trinidad and Tobago",
    "Algeria",
    "Mexico",
    "Chine",
    "Dubai",
    "Nigeria",
    "Argentina",
    "South Africa",
    "Jordan",
    "Bahrain",
    "Dammam",
    "Luanda",
    "Cairo",
    "Hong Kong",
    "Alexandria",
    "Dar es Salaam",
    "Port Harcourt",
    "Muscat",
    "Pretoria",
    "Lusaka",
    "Johannesburg",
    "Brazzaville",
    "Byblos",
    "Rabat",
    "Conakry",
    "Fez",
    "Zaria",
    "Kaduna",
    "Ibadan",
    "Kinshasa",
    "Accra",
    "Giza",
    "Mecca",
    "Dakar",
    "Maiduguri",
    "Amman",
    "Ouagadougou",
    "Doha",
    "Port Elizabeth",
    "Lubumbashi",
    "Colombo",
    "New York",
    "Jeddah",
    "Nairobi",
    "Casablanca",
    "Maputo",
    "Tripoli",
    "Lagos",
    "Bethlehem",
    "Benin",
    "Jerusalem",
    "Abidjan",
    "Soweto",
    "Kampala",
    "Abu Dhabi",
    "Sharm el-Sheikh",
    "Douala",
    "Mbuji-Mayi",
    "Istanbul",
    "Khartoum",
    "Omdurman",
    "Singapore",
    "Freetown",
    "Antananarivo",
    "Tel Aviv",
    "Tehran",
    "Algiers",
    "Subra al-Haymah",
    "Cape Town",
    "Aqaba",
    "Bulawayo",
    "Addis Ababa",
    "Manama",
    "Mogadishu",
    "Riyadh",
    "Durban",
    "Beirut",
    "Kolwezi",
    "Kano",
    "Harare",
    "Yaoundé",
    "Bamako",
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

  return (
    <>
      <Helmet>
        <title>Hastelloy C276 Pipes & Tubes | Sunlight Forge & Fitting</title>
        <meta
          name="description"
          content="High Hastelloy C276 Pipes & Tubes Manufacturer. UNS N10276 Seamless & Welded Pipes, Tubes. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {pipesTubes.badge}
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
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      PIPES & TUBES
                    </h4>
                    {pipesTubes.categories.map((category) => (
                      <div key={category.id} className="mb-2">
                        <h5 className="text-xs font-semibold text-[#4A148C] ml-2 mb-1">
                          {category.title}
                        </h5>
                        <ul className="space-y-0.5 ml-4">
                          {category.types?.map((type) => (
                            <li key={type.id}>
                              <Link
                                to={`/products/${category.slug}/${type.slug}`}
                                className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                                  type.slug === "hastelloy-c276-pipestubes"
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
                  </div>

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
                              item.slug === "pipes-tubes"
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
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/pipes-tubes")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Pipes & Tubes
                </button>
              </div>

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
                      {currentProduct?.title || "Hastelloy C276 Pipes & Tubes"}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {activeCategory.description}
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

              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={pipesTubesImage}
                    alt={
                      currentProduct?.title || "Hastelloy C276 Pipes & Tubes"
                    }
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title || "Hastelloy C276 Pipes & Tubes"}
                </p>
                <p>
                  {currentProduct?.title || "Hastelloy C276 Pipes & Tubes"} -
                  Manufacturers & Exporters of Hastelloy C276 Pipes & Tubes,
                  Hastelloy Alloy UNS N10276 Seamless Pipes & Seamless Tubes,
                  Hastelloy C276 Welded Pipes & Welded Tubes in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a well-known manufacturer & Exporters of Hastelloy C276
                  Pipe & Tubes. Hastelloy C276 Pipe are usually used in
                  industries such as chemical processing, pharmaceutical,
                  nuclear engineering, aerospace, food processing, paper,
                  machinery, and others.
                </p>
                <p>
                  Hastelloy C276 is a nickel-molybdenum-chromium alloy with
                  excellent resistance to corrosion in a wide range of
                  aggressive environments. It has outstanding resistance to
                  pitting, crevice corrosion, and stress-corrosion cracking.
                </p>
                <p>
                  The Hastelloy C276 Pipes & Tubes are manufactured to sustain
                  very high pressure and product warranty. The main reason being
                  we have an excellent warehousing and storage facilities for
                  both finished and semi finish goods.
                </p>
                <p>
                  Designed as per international and national standards, these
                  Hastelloy C276 Seamless Pipes & Tubes are offered in
                  customized length sizes and shapes to our esteemed clients.
                  Also referred as UNS N10276, we offer these Hastelloy Seamless
                  Pipes & Tubes at best possible rates in the market.
                </p>
                <p>
                  Our product includes tubes and pipes, Hastelloy C276 Pipes,
                  Hastelloy C276 Tubes, Hastelloy C276 Seamless Pipes & Tubes
                  etc. These products are available at best possible prices
                  which is another important feature exhibited by our products
                  range.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Hastelloy C276 Seamless & Hastelloy C276 Welded{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    Pipes & Tubes Specification:
                  </span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Hastelloy C276 (UNS N10276)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong>{" "}
                        Seamless 1/2" - 10", Welded 1/2" - 48"
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Types:</strong>{" "}
                        Seamless / ERW / Welded / Fabricated / LSAW Pipes
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Rectangular, Hydraulic Etc.
                      </p>
                      {currentProduct?.specs && (
                        <div className="mt-2">
                          <p>
                            <strong className="text-[#4A148C]">
                              Standards:
                            </strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-slate-600">
                            {currentProduct.specs.map((spec, idx) => (
                              <li key={idx}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4 pt-4 border-t border-green-200 text-sm">
                    Hastelloy C276 Pipes, Hastelloy C276 Tubes, Hastelloy
                    Werkstoff Nr.2.4819 Seamless Pipes & Tubes, Hastelloy C276
                    Welded Pipes Supplier, Hastelloy C276 EFW / ERW Pipes &
                    Tubes Exporter in India.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  High Hastelloy C276 Pipes & Tubes UNS N10276 Pipes{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">Chemical Composition</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
                          Element
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
                          % (max / min)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Ni</td>
                        <td className="px-6 py-2.5 text-sm">Remainder</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Mo</td>
                        <td className="px-6 py-2.5 text-sm">15.0 - 17.0</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Cr</td>
                        <td className="px-6 py-2.5 text-sm">14.5 - 16.5</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Fe</td>
                        <td className="px-6 py-2.5 text-sm">4.0 - 7.0</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">W</td>
                        <td className="px-6 py-2.5 text-sm">3.0 - 4.5</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Co</td>
                        <td className="px-6 py-2.5 text-sm">2.5 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Mn</td>
                        <td className="px-6 py-2.5 text-sm">1.0 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">C</td>
                        <td className="px-6 py-2.5 text-sm">0.010 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Si</td>
                        <td className="px-6 py-2.5 text-sm">0.08 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">S</td>
                        <td className="px-6 py-2.5 text-sm">0.030 max</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

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
                          Hastelloy C276
                        </td>
                        <td className="px-4 py-2.5 text-sm">N10276</td>
                        <td className="px-4 py-2.5 text-sm">2.4819</td>
                        <td className="px-4 py-2.5 text-sm">NiMo16Cr15W</td>
                        <td className="px-4 py-2.5 text-sm">NA 17</td>
                        <td className="px-4 py-2.5 text-sm">НП-2</td>
                        <td className="px-4 py-2.5 text-sm">NW 10276</td>
                        <td className="px-4 py-2.5 text-sm">N-100M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of {activeCategory.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] transition-colors cursor-pointer ${
                        type.slug === "hastelloy-c276-pipestubes"
                          ? "border-[#66BB6A] bg-green-100"
                          : ""
                      }`}
                    >
                      {/* ✅ Link removed — static text only */}
                      <p className="text-sm font-semibold text-[#4A148C]">
                        {type.title}
                      </p>
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

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  EXPORT DESTINATIONS FOR HASTELLOY C276 PIPES, HASTELLOY C276
                  TUBES, <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    HASTELLOY C276 SEAMLESS PIPES, HASTELLOY C276 WELDED TUBES
                  </span>
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

export default HastelloyC276Page;
