import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import pipesTubes from "../../data/productCategories/pipes-tubes";
import pipesTubesImage from "../../assets/productsImage/car.jpg";

const APIX65Page = () => {
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
    (type) => type.slug === "api-x65-linepipe",
  );

  const allDestinations = [
    "Mexico",
    "Bahrain",
    "Nigeria",
    "Indonesia",
    "Russia",
    "Australia",
    "Venezuela",
    "Uganda",
    "Peru",
    "Azerbaijan",
    "Dubai",
    "Algeria",
    "Egypt",
    "Iraq",
    "Turkey",
    "Ghana",
    "Colombia",
    "Canada",
    "Sudan",
    "Iran",
    "Africa",
    "Angola",
    "South Africa",
    "Germany",
    "United States",
    "Vietnam",
    "New Zealand",
    "Kazakhstan",
    "Mozambique",
    "UAE",
    "Sri Lanka",
    "Cameroon",
    "Brazil",
    "UK",
    "Thailand (Bangkok)",
    "Chine",
    "Italy",
    "Tunisia",
    "Democratic Republic of the Congo",
    "Morocco",
    "Argentina",
    "Trinidad and Tobago",
    "London",
    "Israel",
    "Saudi Arabia",
    "Ethiopa",
    "Jordan",
    "Houston",
    "Malaysia",
    "Kuwait",
    "Casablanca",
    "Bamako",
    "Subra al-Haymah",
    "Port Elizabeth",
    "Colombo",
    "Tripoli",
    "Accra",
    "Conakry",
    "Fez",
    "Johannesburg",
    "Abu Dhabi",
    "Abidjan",
    "Cape Town",
    "Lusaka",
    "Maputo",
    "Dubai",
    "Yaoundé",
    "Manama",
    "Dammam",
    "Durban",
    "Rabat",
    "Douala",
    "Jeddah",
    "Harare",
    "Nairobi",
    "Byblos",
    "Freetown",
    "Port Harcourt",
    "Khartoum",
    "Lagos",
    "Kolwezi",
    "Kaduna",
    "Tel Aviv",
    "Antananarivo",
    "Jerusalem",
    "Mecca",
    "Brazzaville",
    "Kano",
    "Lubumbashi",
    "Bulawayo",
    "Giza",
    "Kampala",
    "Aqaba",
    "Addis Ababa",
    "Dakar",
    "Benin",
    "Alexandria",
    "Soweto",
    "Muscat",
    "Amman",
    "New York",
    "Kinshasa",
    "Zaria",
    "Mbuji-Mayi",
    "Beirut",
    "Hong Kong",
    "Singapore",
    "Istanbul",
    "Ibadan",
    "Dar es Salaam",
    "Algiers",
    "Tehran",
    "Pretoria",
    "Mogadishu",
    "Sharm el-Sheikh",
    "Cairo",
    "Riyadh",
    "Maiduguri",
    "Doha",
    "Bethlehem",
    "Luanda",
    "Cairo",
    "Ouagadougou",
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
          Carbon Steel API 5L X65 PSL 1 / PSL 2 Line Pipe | Sunlight Forge &
          Fitting
        </title>
        <meta
          name="description"
          content="High Carbon Steel API 5L X65 PSL 1 / PSL 2 Line Pipe Manufacturer. Seamless & Welded Pipes. Export quality, best prices."
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
                                  type.slug === "api-x65-linepipe"
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
                        "Carbon Steel API 5L X65 PSL 1 / PSL 2 Line Pipe"}
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
                      "Carbon Steel API 5L X65 PSL 1 / PSL 2 Line Pipe"
                    }
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Carbon Steel API 5L X65 PSL 1 / PSL 2 Line Pipe"}
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a Manufacturer & Exporter of Carbon API 5L X65 Seamless
                  Pipe, API 5L X65 LSAW Pipe, Carbon API 5L X65 PSL1 ERW Pipe,
                  Carbon Steel API 5L PSL2 Welded Pipe Supplier in India.
                </p>
                <p>
                  Seamless pipes/ tubes, API 5L Gr. X65 PSL1/PSL2 carbon steel
                  pipes are made by rolling a preheated billet between offset
                  rolls to create a tube shell. The tube shell is then elongated
                  in a multi-stand rolling mill (with a mandrel) to achieve the
                  desired wall thickness and a limited range of diameters.
                </p>
                <p>
                  X65 Tube diameter can also be achieved with a sizing collar,
                  but for significant diameter changes the tube is reheated and
                  passed through a stretch-reducing mill – a multi-stand mill
                  that reduces outside diameter but not wall thickness.
                </p>
                <p>
                  We export all kind of Carbon Steel API 5L Gr. X65 PSL1/PSL2
                  Pipe or line pipe supplies that your company needs for use in
                  the oil or natural gas industries, Oil Refineries,
                  Petrochemicals, Power Generation (Nuclear/Thermal), Steel,
                  Sugar, Boiler Equipment's, Pressure Vessels and General
                  Engineering Purposes.
                </p>
                <p>
                  API 5L X65 Line Pipe, API 5L X65 Seamless Pipe, Carbon API 5L
                  X65 PSL1 Welded Pipe, API 5L X65 ERW Line Pipe, API 5L X65 PSL
                  2 LSAW Line Pipe Manufacturer in India.
                </p>
              </div>

              {/* Specifications Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  API 5L X65 PSL1 AND PSL2{" "}
                  <span className="text-[#66BB6A]">
                    Line Pipe Specifications:
                  </span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Carbon Steel API 5L X65
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">API 5L X65:</strong>{" "}
                        API 5L X65 PSL 1 Pipe / API 5L X65 PSL 2 Pipe
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        BS, JIS, GB, DIN, ASTM, API
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Sizes API 5L X65 Seamless Pipe:
                        </strong>{" "}
                        1/2" NB - 60" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Sizes API 5L X65 SAW Pipe:
                        </strong>{" "}
                        16" NB - 100" NB
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Sizes API 5L X65 ERW Pipe:
                        </strong>{" "}
                        1/2" NB - 24" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Outer Dimater:
                        </strong>{" "}
                        1/2''-24'' (seamless) 26''-48'' (welded)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Wall Thickness:
                        </strong>{" "}
                        2.11mm—60mm
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Types:</strong>{" "}
                        Seamless / Welded / ERW / LSAW
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Wall Thickness:
                        </strong>{" "}
                        SCH10, SCH20, SCH30, STD, SCH40, SCH60, XS, SCH80,
                        SCH100, SCH120, SCH140, SCH160, XXS DIN, JIS standard
                        thickness
                      </p>
                    </div>
                  </div>
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
                  EXPORT DESTINATIONS FOR API 5L 5L X65 LINE PIPE, CARBON X65
                  API PSL 1 & 2 LINE PIPE
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

export default APIX65Page;
