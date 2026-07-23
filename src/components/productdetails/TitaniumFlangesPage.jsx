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
import flangesImage from "../../assets/productsImage/fant.jpg";

const TitaniumFlangesPage = () => {
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
    (type) => type.slug === "titanium-flanges",
  );

  const allDestinations = [
    "United States",
    "Dubai",
    "Trinidad and Tobago",
    "South Africa",
    "Sri Lanka",
    "Argentina",
    "Canada",
    "Democratic Republic of the Congo",
    "Colombia",
    "Australia",
    "Iran",
    "Sudan",
    "London",
    "UK",
    "Ethiopa",
    "Morocco",
    "Turkey",
    "Italy",
    "Jordan",
    "Kuwait",
    "Egypt",
    "Peru",
    "UAE",
    "New Zealand",
    "Kazakhstan",
    "Thailand (Bangkok)",
    "Houston",
    "Venezuela",
    "Ghana",
    "Uganda",
    "Germany",
    "Tunisia",
    "Nigeria",
    "Iraq",
    "Saudi Arabia",
    "Azerbaijan",
    "Russia",
    "Mexico",
    "Mozambique",
    "Algeria",
    "Angola",
    "Israel",
    "Indonesia",
    "Chine",
    "Africa",
    "Brazil",
    "Bahrain",
    "Cameroon",
    "Malaysia",
    "Vietnam",
    "Tripoli",
    "Antananarivo",
    "Bamako",
    "Maiduguri",
    "Dar es Salaam",
    "Lagos",
    "Omdurman",
    "Giza",
    "Conakry",
    "Johannesburg",
    "Dammam",
    "Khartoum",
    "Maputo",
    "Harare",
    "Manama",
    "Nairobi",
    "Casablanca",
    "Subra al-Haymah",
    "Jerusalem",
    "Bulawayo",
    "Accra",
    "Dubai",
    "Aqaba",
    "Hong Kong",
    "Sharm el-Sheikh",
    "Brazzaville",
    "Riyadh",
    "Jeddah",
    "Kolwezi",
    "Kampala",
    "Mbuji-Mayi",
    "Soweto",
    "Kaduna",
    "Tel Aviv",
    "Abu Dhabi",
    "Port Harcourt",
    "Lusaka",
    "Yaoundé",
    "Kano",
    "Douala",
    "Mecca",
    "Ouagadougou",
    "Freetown",
    "Muscat",
    "Cape Town",
    "Algiers",
    "Zaria",
    "New York",
    "Benin",
    "Ibadan",
    "Fez",
    "Pretoria",
    "Kinshasa",
    "Alexandria",
    "Bethlehem",
    "Byblos",
    "Cairo",
    "Luanda",
    "Rabat",
    "Durban",
    "Cairo",
    "Singapore",
    "Port Elizabeth",
    "Mogadishu",
    "Dakar",
    "Beirut",
    "Addis Ababa",
    "Amman",
    "Colombo",
    "Istanbul",
    "Tehran",
    "Doha",
    "Lubumbashi",
    "Abidjan",
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
          Titanium Flanges Manufacturer, Titanium Slip on Flanges Exporter,
          Titanium Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Titanium Flanges Manufacturer, Titanium Slip on Flanges Exporter, Titanium Blind Flanges Suppliers. Titanium Gr2, Gr.5, Gr.7 (UNS R50400) Flanges."
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
                                type.slug === "titanium-flanges"
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
                      Titanium Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are Supplier & Exporter of Titanium Pipe Flanges,
                      Titanium Gr2 Slip on Flanges, Titanium Gr.5 DIN Blind
                      Flanges, Alloy Gr.2 UNS R50400 Plates Flanges Manufacturer
                      in India.
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
                    alt="Titanium Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Titanium Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Titanium
                  Flanges
                </p>
                <p>
                  Considered amongst one of the quality oriented organizations,
                  Neon Alloys have come up with a distinctive and wide
                  compilation of Titanium Flanges to our esteemed clients. To
                  suit the diversified requirements of the clients, we offer
                  these grades in various specifications and designs. This grade
                  flanges are 40% lighter than steel due to low density but it
                  is stronger than steel. We also offer the complete range of
                  grades like Titanium GR I, GR -2, GR-3, GR-4, GR-5, GR-7
                  Flanges. We provide different grade Titanium flanges like
                  Titanium Gr 2 Flanges & Titanium Grade 5 flanges.
                </p>
                <p>
                  Our product range includes Titanium Blind Flange, Titanium
                  Spectacle Blind Flange, Titanium Slip On Flange, Titanium
                  Socket Welding Flange, Titanium Welding Neck Flange, SORF
                  Flanges, Titanium Collar Flange, Titanium Plate Flange,
                  Titanium Raised Face Flange, Titanium Flat Face Flange, SWRF,
                  WNRF, BLRF, Titanium Lapped Joint Flange, Titanium Ring Type
                  Joint Flange, Titanium Threaded Flange & Titanium Long Welding
                  Neck Flange.
                </p>
                <p>
                  ASTM A249 Titanium Flanges, Titanium Gr2 Orifice Flanges,
                  Titanium WNR 3.7035 Forged Flanges, Alloy Gr.2 Socket weld
                  Flanges, Titanium ANSI/ASME B16.5 Reducing Flanges Supplier in
                  India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Titanium Pipe Flanges available in below standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM A213, ASTM A269, ASTM A249
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Titanium Gr2, Gr.5, Gr.7 (UNS R50400), Werkstoff
                        nr.3.7035
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> ½” to
                        18"
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
                          Titanium Gr2
                        </td>
                        <td className="px-4 py-2.5 text-sm">R50400</td>
                        <td className="px-4 py-2.5 text-sm">3.7035</td>
                        <td className="px-4 py-2.5 text-sm">NiMo16Cr15W</td>
                        <td className="px-4 py-2.5 text-sm">NW 0276</td>
                        <td className="px-4 py-2.5 text-sm">ХН65МВУ</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">ЭП760</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Titanium Gr.5
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

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS R50400 Titanium DIN/ANSI/ASME{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Titanium Gr2 Blind Flanges",
                    "Alloy Gr.2 Plate Flanges",
                    "Titanium Gr.5 ASME Flanges",
                    "Titanium Reducing Flanges",
                    "UNS R50400 Weld Neck Flanges",
                    "Titanium Gr2 Industrial Flanges",
                    "Titanium WNR 3.7035 Threaded Flanges",
                    "Titanium Gr.2 Lap Joint Flanges",
                    "Titanium Long weld Neck Flanges",
                    "Titanium Gr.5 Slip-On Flanges",
                    "Titanium Socket Weld Flanges",
                    "UNS R50400 Orifice Flanges",
                    "Alloy Gr2 Flat Flanges",
                    "Titanium DIN Flanges",
                    "Titanium Gr.7 ANSI Flanges",
                    "ASTM A564 Titanium BLRF Flanges",
                    "ANSI b16.5 Titanium Flanges",
                    "Titanium Forged Flanges",
                    "Titanium Flanges",
                    "Titanium ANSI B16.5 Flanges",
                    "Titanium ANSI B16.47 Flanges",
                    "Titanium Gr.2 SWRF Flanges",
                    "Titanium WNRF Flanges",
                    "Alloy Gr.5 SORF Flanges",
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
                  EXPORT DESTINATIONS FOR TITANIUM FLANGES, TITANIUM ALLOY
                  FLANGES, TITANIUM GR 2 PIPE FLANGES, TITANIUM GRADE 5 FLANGES
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

export default TitaniumFlangesPage;
