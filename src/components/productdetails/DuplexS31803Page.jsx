import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import pipesTubes from "../../data/productCategories/pipes-tubes";
import pipesTubesImage from "../../assets/productsImage/mon.jpg";

const DuplexS31803Page = () => {
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
    (type) => type.slug === "duplex-s31803-pipestubes",
  );

  const allDestinations = [
    "Malaysia",
    "Democratic Republic of the Congo",
    "South Africa",
    "Russia",
    "Ghana",
    "UAE",
    "Uganda",
    "Sudan",
    "Sri Lanka",
    "Trinidad and Tobago",
    "Houston",
    "Nigeria",
    "Angola",
    "Venezuela",
    "United States",
    "Iraq",
    "Kuwait",
    "Algeria",
    "Egypt",
    "Thailand (Bangkok)",
    "Bahrain",
    "Colombia",
    "London",
    "Indonesia",
    "Mexico",
    "UK",
    "Israel",
    "Turkey",
    "Tunisia",
    "New Zealand",
    "Mozambique",
    "Azerbaijan",
    "Jordan",
    "Canada",
    "Vietnam",
    "Iran",
    "Dubai",
    "Africa",
    "Australia",
    "Chine",
    "Cameroon",
    "Germany",
    "Kazakhstan",
    "Saudi Arabia",
    "Ethiopa",
    "Argentina",
    "Peru",
    "Italy",
    "Morocco",
    "Brazil",
    "Lusaka",
    "Istanbul",
    "Singapore",
    "Jerusalem",
    "Casablanca",
    "Lubumbashi",
    "Johannesburg",
    "Durban",
    "Abu Dhabi",
    "Colombo",
    "Port Elizabeth",
    "Mbuji-Mayi",
    "Abidjan",
    "Beirut",
    "Dakar",
    "Freetown",
    "Harare",
    "Tehran",
    "Dammam",
    "Cairo",
    "Manama",
    "Mecca",
    "Jeddah",
    "Accra",
    "Lagos",
    "Kinshasa",
    "Subra al-Haymah",
    "Bulawayo",
    "Riyadh",
    "Muscat",
    "Nairobi",
    "Byblos",
    "Cape Town",
    "Sharm el-Sheikh",
    "Pretoria",
    "Luanda",
    "Kano",
    "Kampala",
    "Conakry",
    "Giza",
    "Aqaba",
    "Kaduna",
    "Maputo",
    "Dar es Salaam",
    "Zaria",
    "Rabat",
    "Mogadishu",
    "Addis Ababa",
    "Maiduguri",
    "Doha",
    "Hong Kong",
    "Algiers",
    "Bethlehem",
    "Tel Aviv",
    "Alexandria",
    "Ibadan",
    "Ouagadougou",
    "Port Harcourt",
    "Soweto",
    "Kolwezi",
    "Bamako",
    "Antananarivo",
    "New York",
    "Brazzaville",
    "Yaoundé",
    "Dubai",
    "Khartoum",
    "Cairo",
    "Amman",
    "Tripoli",
    "Benin",
    "Douala",
    "Fez",
    "Omdurman",
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
        <title>
          Duplex Steel UNS S31803 Pipes & Tubes | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Duplex Steel UNS S31803 Pipes & Tubes Manufacturer. Duplex 2205 Seamless & Welded Pipes, Tubes. Export quality, best prices."
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
                                  type.slug === "duplex-s31803-pipestubes"
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
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/pipes-tubes")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Pipes & Tubes
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
                      {currentProduct?.title ||
                        "Duplex Steel UNS S31803 Pipes & Tubes"}
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

              {/* Product Image */}
              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={pipesTubesImage}
                    alt={
                      currentProduct?.title ||
                      "Duplex Steel UNS S31803 Pipes & Tubes"
                    }
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Duplex Steel UNS S31803 Pipes & Tubes"}
                </p>
                <p>
                  Duplex S31803 Tubes, UNS S31803 Duplex Steel Pipes, Duplex
                  2205 Pipes, ASTM A790 Duplex Steel WRN 1.4462 Seamless Pipes &
                  Welded Tubes Supplier & Exporter in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  manufacturer & export these duplex steel pipes & tubes in form
                  of Round Pipes/Tubes, Square Pipes/Tubes, Rectangular
                  Pipe/Tubes, Coiled Tubes, "U" Shape, Pan Cake Coils, Hydraulic
                  Tubes. These S31803 duplex steel pipes & tubes are widely used
                  in construction, chemical, cement and petrochemicals
                  industries & other industrial application as well.
                </p>
                <p>
                  Our UNS S31803 Duplex Steel Pipes and Tubes are stronger and
                  harder as compared to normal steel. However, these UNS S32205
                  Duplex Steel Pipes and Tubes are not as challenging to
                  corrosion as stainless steel.
                </p>
                <p>
                  These S31803 duplex steel pipes and tubes are resistant to
                  corrosion which increases their functional life. They are
                  characterized by high chromium (19 % to 32 %) and molybdenum
                  (up to 5 %) and lower nickel contents than austenitic
                  stainless steels.
                </p>
                <p>
                  The properties of these duplex stainless steels are achieved
                  by means of having an overall lower alloy content than
                  similar-performing super-austenitic grades, making their use
                  cost-effective for many applications. Meanwhile, we as well
                  offer these pipes and tubes in customized thicknesses and
                  sizes as per the précised requirements given by our valuable
                  customers in national and international standard quality of
                  raw materials.
                </p>
                <p>
                  Duplex Steel S31803 ERW Pipes, Duplex 2205 Seamless Tubes,
                  Duplex S31803 Welded Pipes, Duplex S31803 EFW Tubes, Duplex
                  S32205 Seamless Pipes Manufacturer in India.
                </p>
              </div>

              {/* Specifications Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Duplex Steel UNS 32205 / S31803 Seamless & Duplex Steel UNS
                  32205 / S31803 Welded <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    Pipes & Tubes Specifications:
                  </span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Duplex Steel UNS S32205 / UNS S31803
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM A790 / ASME SA790, A815
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/2"NB
                        TO 12 "NB IN
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Seamless Pipe & Tube:
                        </strong>{" "}
                        1/2" NB - 8" NB
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Welded Pipe & Tube:
                        </strong>{" "}
                        6" NB - 24" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Rectangular, Hydraulic Etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / ERW / Welded / Fabricated / EFW
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Schedule:</strong>{" "}
                        SCH20, SCH30, SCH40, STD, SCH80
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">End:</strong> Plain
                        End, Beveled End, Treaded
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong>{" "}
                        Single Random, Double Random & Cut Length.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standards Equivalents */}
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
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Duplex 2205
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4462</td>
                        <td className="px-4 py-2.5 text-sm">S31803 / S32205</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Chemical Composition */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  UNS S31803 / S32205 Seamless / Welded / EFW / ERW Pipes &
                  Tubes{" "}
                  <span className="text-[#66BB6A]">Chemical Composition</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Element
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          MIN
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          MAX
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">Ni</td>
                        <td className="px-4 py-2.5 text-sm">4.5</td>
                        <td className="px-4 py-2.5 text-sm">6.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">Cr</td>
                        <td className="px-4 py-2.5 text-sm">22.0</td>
                        <td className="px-4 py-2.5 text-sm">23.0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">Mo</td>
                        <td className="px-4 py-2.5 text-sm">3.0</td>
                        <td className="px-4 py-2.5 text-sm">3.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">Mn</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">2.0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">Si</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">1.0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">C</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">0.03</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">N</td>
                        <td className="px-4 py-2.5 text-sm">0.14</td>
                        <td className="px-4 py-2.5 text-sm">0.2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">S</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">0.02</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">P</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">0.03</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">Fe</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">Balance</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of {activeCategory.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A]  transition-all duration-200 cursor-pointer`}
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
                  EXPORT DESTINATIONS FOR DUPLEX S31803 PIPES, DUPLEX STEEL
                  S31803 TUBES, <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    DUPLEX SEAMLESS S31803 PIPES & TUBES
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

export default DuplexS31803Page;
