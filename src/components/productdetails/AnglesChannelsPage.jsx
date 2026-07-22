import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import anglesChannels from "../../data/productCategories/angles-channels";
import angleImage from "../../assets/productsImage/angle-channels.jpg";

const AnglesChannelsPage = () => {
  const navigate = useNavigate();

  // YOUR EXACT CONTACT DETAILS
  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
    address:
      "Office No. 8, Ground Floor, Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004",
    website: "www.sunlightforgefitting.com",
  };

  const { categorySlug } = useParams();

  // Get all angle & channel products from the structured data
  const allAngleProducts = anglesChannels.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allAngleProducts.find(
    (item) => item.slug === "angles-channels",
  );

  // All angle products for the sidebar
  const angleProducts = allAngleProducts;

  const allDestinations = [
    "Egypt",
    "Trinidad and Tobago",
    "Turkey",
    "Kuwait",
    "Ethiopa",
    "UAE",
    "Jordan",
    "Mexico",
    "UK",
    "Tunisia",
    "Colombia",
    "South Africa",
    "London",
    "Ghana",
    "Venezuela",
    "Russia",
    "Nigeria",
    "Azerbaijan",
    "Chine",
    "Bahrain",
    "Cameroon",
    "Germany",
    "Morocco",
    "Africa",
    "Iraq",
    "Brazil",
    "Kazakhstan",
    "Indonesia",
    "Argentina",
    "Peru",
    "Saudi Arabia",
    "Uganda",
    "Israel",
    "Italy",
    "Vietnam",
    "Dubai",
    "Canada",
    "Mozambique",
    "Houston",
    "Malaysia",
    "Thailand (Bangkok)",
    "Sri Lanka",
    "Democratic Republic of the Congo",
    "New Zealand",
    "Angola",
    "Australia",
    "United States",
  ];

  const allCities = [
    "Jeddah",
    "Cairo",
    "Mogadishu",
    "Kampala",
    "Accra",
    "Giza",
    "Byblos",
    "Omdurman",
    "Casablanca",
    "Freetown",
    "Doha",
    "Aqaba",
    "Sharm el-Sheikh",
    "Colombo",
    "Jerusalem",
    "Durban",
    "Kolwezi",
    "Bulawayo",
    "Zaria",
    "Singapore",
    "Lubumbashi",
    "Johannesburg",
    "Riyadh",
    "Abu Dhabi",
    "Dakar",
    "Kaduna",
    "Cape Town",
    "Khartoum",
    "Tehran",
    "Kano",
    "Dar es Salaam",
    "Dammam",
    "Amman",
    "Ibadan",
    "Maiduguri",
    "Luanda",
    "Istanbul",
    "Tripoli",
    "Kinshasa",
    "Alexandria",
    "Muscat",
    "New York",
    "Ouagadougou",
    "Mbuji-Mayi",
    "Addis Ababa",
    "Cairo",
    "Dubai",
    "Antananarivo",
    "Brazzaville",
    "Pretoria",
    "Douala",
    "Benin",
    "Hong Kong",
    "Beirut",
    "Bethlehem",
    "Port Harcourt",
    "Fez",
    "Mecca",
    "Lusaka",
    "Lagos",
    "Yaoundé",
    "Nairobi",
    "Abidjan",
    "Harare",
    "Algiers",
    "Bamako",
    "Conakry",
    "Manama",
    "Tel Aviv",
    "Subra al-Haymah",
    "Port Elizabeth",
    "Maputo",
    "Rabat",
    "Soweto",
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
          Angles & Channels | Structural Steel Sections | Sunlight Forge
        </title>
        <meta
          name="description"
          content="Angles & Channels Manufacturer. Stainless Steel Angles, Carbon Steel Angles & Channels, Alloy Steel Channels, Mild Steel Angles, MS Angles. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {anglesChannels.badge ||
                  "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* ===== ANGLES & CHANNELS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      ANGLES & CHANNELS
                    </h4>
                    <ul className="space-y-0.5">
                      {angleProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/angles-channels/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "angles-channels"
                                ? "text-[#66BB6A] font-semibold bg-green-50 border-l-2 border-[#66BB6A]"
                                : ""
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ===== PRODUCT RANGE SECTION ===== */}
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
                              item.slug === "angles-channels"
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
                  onClick={() => navigate("/products/angles-channels")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Angles & Channels
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${angleImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Angles & Channels
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Angles, Carbon Steel Angles & Channels,
                      Alloy Steel Channels, Mild Steel Angles, MS Angles
                      Supplier & Exporter in India.
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
                    src={angleImage}
                    alt="Angles & Channels"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Angles & Channels
                </p>
                <p>
                  We offer our customers a wide range of Angles & Channels
                  widely find its applications in different industrial &
                  commercial sectors.
                </p>
                <p>
                  Also these are scratch-proof and corrosion resistant and offer
                  greater load bearing capacity. These are available in various
                  dimensions of width, leg height, material thickness and other
                  parameters.
                </p>
              </div>

              {/* Mild Steel Beams Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Mild Steel H Beam | Mild Steel I Beam
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The Mild Steel Beams, which we offer, are extensively used
                    for construction purposes for making steel-frames for
                    buildings and bridges. MS Beams exported by us are highly
                    durable and have high tensile strength. We are one of the
                    most reliable MS Beams Suppliers. Our MS Beams are available
                    in 2 types - Mild Steel H Beam (available from 100mm to
                    1040mm) and Mild Steel I Beam (available from 100mm to
                    400mm).
                  </p>
                </div>
              </div>

              {/* U-Channels & C-Channels Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  U-Channels | C-Channels
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    We are engaged in exporting of Mild Steel Channel, which is
                    widely used as structural support in construction works.
                    Available in different sizes and shapes, the MS Channels are
                    procured from reliable sources, which use high grade steel
                    that adds anti-corrosion properties and high tensile
                    strength to the finished range. We are rated among the
                    leading MS Channels Exporters and Mild Steel U Channels
                    Suppliers.
                  </p>
                </div>
              </div>

              {/* Equal Angle | Unequal Angle Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Equal Angle | Unequal Angle
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    One of the most commonly used Steel Products in construction
                    is MS Angles and we specialize in supplying Wholesale Mild
                    steel Angles. We Supply Equal Angles, Unequal Angles and T
                    Angles which are available in different thickness and
                    dimensions. Our MS Angles are galvanized to make them
                    corrosion resistant. We are among the top most Galvanized
                    Mild Steel Angles Suppliers in India.
                  </p>
                </div>
              </div>

              {/* Technical Specifications Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Technical Specifications
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700">
                    Dimension And Properties As Per ISI Specification IS:
                    2012-1991
                  </p>
                </div>
              </div>

              {/* Contact Box */}
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
                  EXPORT DESTINATIONS FOR STEEL ANGLES, STEEL CHANNELS, MILD
                  STEEL BEAM, MILD STEEL ANGLES, MILD STEEL CHANNELS
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {allDestinations.map((country, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {allCities.map((city, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {city}
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

      {/* Floating Call and WhatsApp Buttons */}
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

export default AnglesChannelsPage;
