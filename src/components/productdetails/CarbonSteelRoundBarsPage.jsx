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

const CarbonSteelRoundBarsPage = () => {
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
    (type) => type.slug === "carbon-steel-roundbars",
  );

  const allDestinations = [
    "Trinidad and Tobago",
    "Israel",
    "Brazil",
    "Indonesia",
    "Venezuela",
    "Germany",
    "UAE",
    "Malaysia",
    "Mexico",
    "Algeria",
    "Dubai",
    "Chine",
    "Africa",
    "Uganda",
    "New Zealand",
    "South Africa",
    "Thailand (Bangkok)",
    "Egypt",
    "Ethiopa",
    "Nigeria",
    "Houston",
    "Mozambique",
    "Democratic Republic of the Congo",
    "Peru",
    "Sri Lanka",
    "Canada",
    "Argentina",
    "Kazakhstan",
    "Saudi Arabia",
    "Angola",
    "UK",
    "London",
    "Vietnam",
    "Italy",
    "United States",
    "Cameroon",
    "Kuwait",
    "Turkey",
    "Colombia",
    "Morocco",
    "Ghana",
    "Iran",
    "Sudan",
    "Australia",
    "Iraq",
    "Jordan",
    "Russia",
    "Tunisia",
    "Bahrain",
    "Azerbaijan",
    "Maiduguri",
    "Alexandria",
    "Amman",
    "Manama",
    "Harare",
    "Benin",
    "Algiers",
    "Tehran",
    "Dammam",
    "Jerusalem",
    "Soweto",
    "Durban",
    "Doha",
    "Fez",
    "Addis Ababa",
    "Cairo",
    "Port Elizabeth",
    "Nairobi",
    "Ibadan",
    "Brazzaville",
    "Yaoundé",
    "Dar es Salaam",
    "Casablanca",
    "Cairo",
    "Conakry",
    "Antananarivo",
    "Port Harcourt",
    "Jeddah",
    "Johannesburg",
    "Zaria",
    "Giza",
    "Istanbul",
    "Omdurman",
    "Muscat",
    "Accra",
    "Mecca",
    "Kaduna",
    "Colombo",
    "Lusaka",
    "Lagos",
    "Dubai",
    "Cape Town",
    "Riyadh",
    "Subra al-Haymah",
    "Mbuji-Mayi",
    "Maputo",
    "Abu Dhabi",
    "Douala",
    "Bulawayo",
    "Singapore",
    "Tel Aviv",
    "Lubumbashi",
    "Rabat",
    "Khartoum",
    "Aqaba",
    "Kinshasa",
    "Hong Kong",
    "Byblos",
    "Sharm el-Sheikh",
    "Pretoria",
    "Ouagadougou",
    "Kampala",
    "Mogadishu",
    "Bethlehem",
    "Kolwezi",
    "Dakar",
    "Abidjan",
    "Bamako",
    "Beirut",
    "Freetown",
    "Kano",
    "New York",
    "Tripoli",
    "Luanda",
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
          Carbon Steel Round Bars & Rods Manufacturer, Carbon Hex Bars Supplier,
          Hollow Bars, Threaded Bars, Carbon Round Rods Exporter
        </title>
        <meta
          name="description"
          content="Carbon Steel Round Bars & Rods Manufacturer, Carbon Hex Bars Supplier, Hollow Bars, Threaded Bars, Carbon Round Rods Exporter in India."
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
                                type.slug === "carbon-steel-roundbars"
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
                      Carbon Steel Round Bars & Rods
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We Neon Alloys are Prominent Manufacturer & Exporter of
                      Carbon Steel Round Bars & Rods, Carbon Steel Hex Bars,
                      Carbon Hollow Bars, Square Bars Supplier in India.
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
                    alt="Carbon Steel Round Bars"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Carbon Steel Round Bars & Rods
                </p>
                <p>
                  We are involved in offering a qualitative Carbon Steel Round
                  Bars to our clients. Widely used in the making of canals,
                  bridges, buildings, hotels, hospitals, homes etc.
                </p>
                <p>
                  We provide a varied variety of Carbon Steel Round Bars. These
                  are designed and developed according to industry laid quality
                  norms and guidelines at the premises of our vendors. To meet
                  the various demands of the clients, we offer our products in
                  various grades, dimensions and sizes. Moreover, we charge
                  nominal rates from the clients for providing these products to
                  the customers.
                </p>
                <p>
                  Depending on the quantity of carbon existence in the alloy,
                  Carbon Steel Round Bars, Wires can be categorized in some four
                  different categories – Very High Carbon Steel, High Carbon
                  Steel, Medium Carbon Steel, and Low Carbon Steel. Carbon Steel
                  Bars, Rods, Wires have superior strength and are exceptionally
                  long-lasting. These products show first-rate resistance
                  properties to oxidation and corrosion, and are thus used in
                  atmospheres that have high temperature and pressure.
                </p>
                <p>
                  We can offer vide range of Carbon Steel Round Bars / CS Round
                  Bars / Steel Bars from ready stock or on make to order basis.
                  Can export Carbon Steel Round Bars / CS Round Bars / Steel
                  Bars in normalized, annealed, spherodized annealed, quenched
                  (hardened) & tempered with black or bright finish.
                </p>
                <p>
                  Stainless steel Round Bars Rods also finds application in
                  architectural sector, namely for cladding, roofing and
                  facades. Reinforcing bars are also made of stainless steel,
                  owing to the corrosion resistance property again.Catalytic
                  converters and exhaust systems in cars also use the alloy
                  extensively. It is also forming a major part of the structure
                  of the automobiles these days.
                </p>
                <p>
                  Carbon Steel Round Rods Manufacturers, Carbon Hexagonal Bars,
                  CS Rods Exporters, Carbon Hollow Bars, Bright Bars Suppliers
                  in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Carbon Steel Bars & Carbon Rods{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM / ASME A36, IS 2000, ASTM A516, ASTM A515
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 26mm
                        to 63mm
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        0.5mm to 500mm Diameter
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Diameter:</strong> 10
                        mm To 200 mm Diameter
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> IS
                        2062/ASTM A36, Gr.A,B & C, IS 2002 Gr. 1 & 2 ASTM A516
                        Gr.60 & 70, ASTM A515 Gr.70
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong> 100
                        to 6000mm length
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Bright, Polish & Black
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Hex (A/F), Rectangle, Wire (Coil Form),
                        Wire-mesh, Billet, Ingot, Forging Etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Types Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types Of Carbon Steel Round Bars &{" "}
                  <span className="text-[#66BB6A]">Rods</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "carbon-steel-roundbars"
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
                  EXPORT DESTINATIONS FOR CARBON ROUND BARS, CS BARS, CARBON
                  STEEL ROUND BARS, CARBON RODS
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

export default CarbonSteelRoundBarsPage;
