import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import tubeSheets from "../../data/productCategories/tube-sheets";
import tubeSheetImage from "../../assets/productsImage/tubeSheets.jpg";

const TubeSheetsPage = () => {
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

  // Get all tube sheet products from the structured data
  const allTubeSheetProducts = tubeSheets.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allTubeSheetProducts.find(
    (item) => item.slug === "tube-sheets",
  );

  // All tube sheet products for the sidebar
  const tubeSheetProducts = allTubeSheetProducts;

  const allDestinations = [
    "Mozambique",
    "Uganda",
    "Thailand (Bangkok)",
    "Africa",
    "UAE",
    "Iraq",
    "Malaysia",
    "Azerbaijan",
    "Dubai",
    "Canada",
    "South Africa",
    "Germany",
    "Angola",
    "Morocco",
    "London",
    "Venezuela",
    "Democratic Republic of the Congo",
    "Israel",
    "Indonesia",
    "Sudan",
    "Argentina",
    "Colombia",
    "Kazakhstan",
    "Brazil",
    "Australia",
    "Egypt",
    "Saudi Arabia",
    "United States",
    "Russia",
    "Nigeria",
    "Kuwait",
    "Vietnam",
    "UK",
    "Chine",
    "Bahrain",
    "Sri Lanka",
    "Tunisia",
    "Iran",
    "Mexico",
    "Jordan",
    "Cameroon",
    "Houston",
    "Italy",
    "Ethiopa",
    "Algeria",
    "New Zealand",
    "Trinidad and Tobago",
  ];

  const allCities = [
    "Giza",
    "Luanda",
    "Brazzaville",
    "Colombo",
    "Amman",
    "Kaduna",
    "Tehran",
    "Muscat",
    "Port Elizabeth",
    "Jerusalem",
    "Soweto",
    "Singapore",
    "Byblos",
    "Kampala",
    "Hong Kong",
    "Kolwezi",
    "Yaoundé",
    "Addis Ababa",
    "Zaria",
    "Dubai",
    "Abu Dhabi",
    "Bamako",
    "Bethlehem",
    "Lubumbashi",
    "Abidjan",
    "Dammam",
    "Mogadishu",
    "Sharm el-Sheikh",
    "Antananarivo",
    "Dar es Salaam",
    "Doha",
    "Cape Town",
    "Manama",
    "Lusaka",
    "Beirut",
    "Kano",
    "Johannesburg",
    "Jeddah",
    "Conakry",
    "Durban",
    "Lagos",
    "Cairo",
    "New York",
    "Freetown",
    "Tel Aviv",
    "Accra",
    "Benin",
    "Khartoum",
    "Tripoli",
    "Cairo",
    "Fez",
    "Mbuji-Mayi",
    "Alexandria",
    "Maputo",
    "Istanbul",
    "Ibadan",
    "Harare",
    "Riyadh",
    "Pretoria",
    "Port Harcourt",
    "Ouagadougou",
    "Kinshasa",
    "Bulawayo",
    "Omdurman",
    "Algiers",
    "Subra al-Haymah",
    "Dakar",
    "Mecca",
    "Rabat",
    "Aqaba",
    "Nairobi",
    "Douala",
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
        <title>Tube Sheets | Heat Exchanger Tube Sheets | Sunlight Forge</title>
        <meta
          name="description"
          content="Tube Sheets Manufacturer. Stainless Steel Tube Sheet, Carbon Steel Tube Sheet, Alloy Steel Tube Sheet, High Nickel Alloy Tube Sheet, Heat Exchanger Tube Sheet. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {tubeSheets.badge || "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {/* ===== TUBE SHEETS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      TUBE SHEETS
                    </h4>
                    <ul className="space-y-0.5">
                      {tubeSheetProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/tube-sheets/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "tube-sheets"
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
                              item.slug === "tube-sheets"
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
                  onClick={() => navigate("/products/tube-sheets")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Tube Sheets
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${tubeSheetImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Tube Sheets
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Tube Sheet, Carbon Steel Tube Sheet, Alloy
                      Steel Tube Sheet, High Nickel Alloy Tube Sheet, Heat
                      Exchanger Tube Sheet Supplier & Exporter in India.
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
                    src={tubeSheetImage}
                    alt="Tube Sheets"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Tube Sheets
                </p>
                <p>
                  Neon Alloys is highly experienced in the manufacture of
                  critical, internal heat exchanger tubesheets.
                </p>
              </div>

              {/* Shell & Tube Heat Exchanger Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Shell & Tube Heat Exchanger
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    One of the most common heat exchangers in service within
                    industrial process applications is the "Shell & Tube Heat
                    Exchanger". They are available in many shapes, sizes and
                    have been used in industry for over 150 years. In this
                    exchanger group are various sub design types: Fixed, U-tube
                    and Floating tubesheet. Variations of all can be denoted as
                    type "E", "F", "G", "H", "J", "K" or "X". The main
                    applications are where high pressure/temperatures are key
                    considerations.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Loosely, general designs consist of the/an outer shell in
                    which resides a tube bundle (these can be configured as
                    finned, plain etc) sealed at each end by a tube sheet which
                    isolates the tubes and the outer shell.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Shell & tube heat exchangers have the capability to transfer
                    large amounts of heat at low(er) costs. This, in principle,
                    down to both design simplicity and effectiveness – large
                    tube surface for reduced weight, volume of liquid and
                    importantly floor space.
                  </p>
                </div>
              </div>

              {/* Tube Sheets Details Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Tube Sheets – Critical Components
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    Whilst there is a wide variety to choose from there are
                    certain key components similar in all. Tubesheets have tubes
                    attached to them within the body or "shell" of the heat
                    exchanger. The tubes allow the movement of a given medium
                    (gas/fluid) through the shell chamber stopping it mixing
                    with a second fluid medium that lies outside these tubes. As
                    long as there is a temperature difference between these, in
                    effect, the two flow past one another exchanging heat
                    without ever mixing. Tubesheets can be fixed or floating
                    dependent on the application the heat exchanger is designed
                    for.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Tubesheets are a critical component of the final design.
                    There are a multitude of materials they can be manufactured
                    from. Material selection is made after careful consideration
                    as it is in contact with both fluids. It must therefore have
                    the necessary corrosion resistance, electromechanical and
                    metallurgical properties associated for its given working
                    environment. The tubesheets themselves contain holes drilled
                    into them. This, in a given, very specific design
                    configuration, at very precise locations with critical
                    tolerances. The amounts of holes can range from a few to
                    thousands. These pattern or "pitch" holes are relative to
                    each other tubesheet within the shell. This pitch changes
                    tube distance, angle and flow direction. These parameters
                    have been varied to maximize the heat transfer
                    effectiveness.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mt-4">
                    Neon Alloys considerable experience in this highly
                    specialized area means that whatever the requirement,
                    whatever the timescale, we have the technical, in house
                    experience and know-how to approach a given task, deliver on
                    time and in budget. This is why the company is entrusted to
                    manufacture.
                  </p>
                </div>
              </div>

              {/* Materials Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Materials
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700">
                    Carbon, Stainless, Duplex, Aluminum Bronze, Copper Alloys,
                    Naval Brass, Copper Nickel, Pure Copper, Super Duplex,
                    Ni-Alloys, Exotic materials, and others as sought
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
                  EXPORT DESTINATIONS FOR STEEL TUBE SHEET, SS TUBE SHEET,
                  CARBON STEEL TUBE SHEET, STAINLESS STEEL TUBE SHEET, ALLOY
                  TUBE SHEET
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

export default TubeSheetsPage;
