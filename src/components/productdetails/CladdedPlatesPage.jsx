import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import claddedPlates from "../../data/productCategories/cladded-plates";
import claddedImage from "../../assets/productsImage/cladded-plates.jpg";

const CladdedPlatesPage = () => {
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

  // Get all cladded plate products from the structured data
  const allCladdedProducts = claddedPlates.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allCladdedProducts.find(
    (item) => item.slug === "cladded-plates",
  );

  // All cladded products for the sidebar
  const claddedProducts = allCladdedProducts;

  const allDestinations = [
    "Houston",
    "Israel",
    "Dubai",
    "Russia",
    "Australia",
    "Thailand (Bangkok)",
    "South Africa",
    "Ghana",
    "London",
    "Malaysia",
    "Tunisia",
    "Mozambique",
    "Sri Lanka",
    "United States",
    "UK",
    "Jordan",
    "Egypt",
    "Indonesia",
    "Chine",
    "Trinidad and Tobago",
    "Democratic Republic of the Congo",
    "Germany",
    "Iran",
    "Angola",
    "Bahrain",
    "New Zealand",
    "Saudi Arabia",
    "Brazil",
    "Cameroon",
    "Iraq",
    "Italy",
    "Kazakhstan",
    "UAE",
    "Turkey",
    "Vietnam",
    "Kuwait",
    "Azerbaijan",
    "Argentina",
    "Algeria",
    "Mexico",
    "Canada",
    "Morocco",
    "Nigeria",
    "Sudan",
    "Ethiopa",
    "Colombia",
  ];

  const allCities = [
    "Kaduna",
    "Beirut",
    "Mogadishu",
    "Muscat",
    "Sharm el-Sheikh",
    "Yaoundé",
    "Nairobi",
    "Aqaba",
    "Manama",
    "Dar es Salaam",
    "Jerusalem",
    "Douala",
    "Tripoli",
    "Dubai",
    "Brazzaville",
    "Khartoum",
    "Tehran",
    "Fez",
    "Kampala",
    "Luanda",
    "Algiers",
    "Ouagadougou",
    "Accra",
    "Tel Aviv",
    "Riyadh",
    "Port Harcourt",
    "Doha",
    "Lusaka",
    "Maiduguri",
    "Kinshasa",
    "Cairo",
    "Abu Dhabi",
    "Mecca",
    "Bethlehem",
    "Lubumbashi",
    "Omdurman",
    "Alexandria",
    "Benin",
    "Byblos",
    "Lagos",
    "Giza",
    "Durban",
    "Pretoria",
    "Conakry",
    "Singapore",
    "Colombo",
    "Dakar",
    "Mbuji-Mayi",
    "Johannesburg",
    "Bulawayo",
    "Maputo",
    "Freetown",
    "Subra al-Haymah",
    "Antananarivo",
    "Casablanca",
    "Istanbul",
    "Cape Town",
    "Hong Kong",
    "Amman",
    "Ibadan",
    "Kolwezi",
    "Bamako",
    "Addis Ababa",
    "Dammam",
    "Kano",
    "Cairo",
    "Rabat",
    "Abidjan",
    "Port Elizabeth",
    "Jeddah",
    "Soweto",
    "New York",
    "Zaria",
    "Harare",
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
        <title>Cladded Plates | Clad Steel Plates | Sunlight Forge</title>
        <meta
          name="description"
          content="Cladded Plates Manufacturer. Stainless Steel Clad Plates, Nickel Alloy Clad Plate, Roll Bonded Clad Plates, Explosive Bonding Clad Plates, Titanium Clad Plates. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {claddedPlates.badge ||
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
                  {/* ===== CLADDED PLATES SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      CLADDED PLATES
                    </h4>
                    <ul className="space-y-0.5">
                      {claddedProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/cladded-plates/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "cladded-plates"
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
                              item.slug === "cladded-plates"
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
                  onClick={() => navigate("/products/cladded-plates")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Cladded Plates
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${claddedImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Cladded Plates
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Clad Plates, Nickel Alloy Clad Plate, Roll
                      Bonded Clad Plates, Explosive Bonding Clad Plates,
                      Titanium Clad Plates Supplier & Exporter in India.
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
                    src={claddedImage}
                    alt="Cladded Plates"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Cladded Plates
                </p>
                <p>
                  We provide a gamut of superlative clad metal plates that is
                  made into various shapes and products for many industries.
                </p>
              </div>

              {/* Explosion Cladding Process */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Explosion Cladding Process
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    Explosion cladding is a process wherein a cladding plate is
                    positioned over the backer plate with a small gap. Specially
                    made explosives are spread on top of the cladding plate. On
                    detonation the cladding plate is accelerated towards the
                    backer plate and collides with it at a high velocity. This
                    collision takes place progressively from one end of the
                    plate to the other in micro seconds.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    This acceleration causes a unique phenomenon of progressive
                    turbulence at the interface and removes the contaminating
                    surface films like oxides and gases, creating a strong
                    metallurgical bond at the collision point of the two
                    surfaces.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed mt-4">
                    The thickness of explosive layer, its propagation
                    characteristics as well as stand off distance and the
                    collision angles are carefully controlled to produce uniform
                    and strong metallurgical bonding all over the plate. It is
                    basically a solid-state pressure bonding process.
                  </p>
                </div>
              </div>

              {/* Materials Table */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Clad Layer & Base Material
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Clad Layer
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Base Material
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          Stainless Steel, Duplex, Titanium, Zirconium,
                          Tantalum, AI-Bronze, Nickel, Nickel Alloys, Aluminium,
                          Copper, Copper Alloys
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          Carbon Steel, Stainless Steel, Alloy Steel, Copper,
                          Aluminium
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  Cladding on both sides of a backer metal with the
                  same/different cladding metal is possible. Even multilayered
                  clad composites are possible.
                </p>
                <p className="text-sm text-slate-600 mt-2">
                  Certain NEON ALLOYS clad products can be further
                  rolled/extruded into thinner gauges and can be considered when
                  technically feasible and quantities are adequate.
                </p>
              </div>

              {/* Advantages */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  ADVANTAGES OF CLAD PRODUCTS
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Guaranteed strong Metallurgical bonds
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Wide range of metal combinations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Economic use of scarce and dearer metals
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Wide range of sizes and composite thickness
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Custom made products
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Adoption of conventional fabrication procedures
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Extremely low electrical metal properties
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Retention of individual metal properties
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Good heat transfer
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">✔</span>
                      Short processing times
                    </li>
                  </ul>
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
                  EXPORT DESTINATIONS FOR CLADDED PLATES, STEEL CLADDED PLATES,
                  CLAD STEEL PLATES, CLAD PLATES SUPPLIER
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

export default CladdedPlatesPage;
