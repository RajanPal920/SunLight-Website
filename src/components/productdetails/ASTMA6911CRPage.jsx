import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  ExternalLink,
  Menu,
  Globe,
  ChevronRight,
} from "lucide-react";
import pipesTubes from "../../data/productCategories/pipes-tubes";
import astmA6911CrImage from "../../assets/productsImage/pipes.jpg";

const ASTMA6911CRPage = () => {
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
    (type) => type.slug === "astm-a691-1cr-pipes",
  );

  const allDestinations = [
    "Iraq",
    "Iran",
    "Africa",
    "Cameroon",
    "Azerbaijan",
    "UAE",
    "Malaysia",
    "Nigeria",
    "Jordan",
    "UK",
    "Brazil",
    "Morocco",
    "Democratic Republic of the Congo",
    "Ethiopa",
    "Mexico",
    "Dubai",
    "Thailand (Bangkok)",
    "Angola",
    "London",
    "Tunisia",
    "New Zealand",
    "Sudan",
    "Vietnam",
    "Peru",
    "Australia",
    "Bahrain",
    "Russia",
    "Canada",
    "South Africa",
    "Kuwait",
    "United States",
    "Italy",
    "Saudi Arabia",
    "Kazakhstan",
    "Venezuela",
    "Trinidad and Tobago",
    "Turkey",
    "Algeria",
    "Chine",
    "Sri Lanka",
    "Indonesia",
    "Germany",
    "Argentina",
    "Houston",
    "Israel",
    "Ghana",
    "Mozambique",
    "Colombia",
    "Egypt",
    "Uganda",
    "Zaria",
    "Freetown",
    "Luanda",
    "Antananarivo",
    "Colombo",
    "Abidjan",
    "Mecca",
    "Bethlehem",
    "Casablanca",
    "Tripoli",
    "Kano",
    "Bulawayo",
    "Sharm el-Sheikh",
    "Dar es Salaam",
    "Manama",
    "Brazzaville",
    "Durban",
    "Kolwezi",
    "Dubai",
    "Kinshasa",
    "Dammam",
    "Cairo",
    "Johannesburg",
    "Bamako",
    "Accra",
    "Pretoria",
    "Abu Dhabi",
    "Istanbul",
    "Jeddah",
    "Algiers",
    "Khartoum",
    "Maputo",
    "New York",
    "Kampala",
    "Douala",
    "Maiduguri",
    "Dakar",
    "Mbuji-Mayi",
    "Giza",
    "Kaduna",
    "Fez",
    "Mogadishu",
    "Byblos",
    "Riyadh",
    "Amman",
    "Addis Ababa",
    "Yaoundé",
    "Port Harcourt",
    "Tel Aviv",
    "Harare",
    "Nairobi",
    "Cairo",
    "Aqaba",
    "Tehran",
    "Beirut",
    "Alexandria",
    "Rabat",
    "Ouagadougou",
    "Jerusalem",
    "Hong Kong",
    "Benin",
    "Lagos",
    "Cape Town",
    "Omdurman",
    "Lusaka",
    "Port Elizabeth",
    "Soweto",
    "Singapore",
    "Conakry",
    "Subra al-Haymah",
    "Muscat",
    "Doha",
    "Lubumbashi",
    "Ibadan",
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
          ASTM A691 Gr.1 CR Alloy Steel Pipes | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High ASTM A691 Gr.1 CR Alloy Steel Pipes Manufacturer. Seamless & Welded Pipes. Export quality, best prices."
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
                                  type.slug === "astm-a691-1cr-pipes"
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
              {/* ===== HERO IMAGE & HEADING ===== */}
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
                        "Alloy Steel ASTM A691 Gr.1 CR Pipes"}
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

              {/* ===== PRODUCT IMAGE ===== */}
              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={astmA6911CrImage}
                    alt={
                      currentProduct?.title ||
                      "ASTM A691 Gr.1 CR Alloy Steel Pipe"
                    }
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Alloy Steel ASTM A691 / ASME SA691 Gr.1 CR Pipe"}
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a leading brand in the market of Steel products and exports
                  and one of our known products include ASTM A691 GRADE 1 CR
                  Alloy Steel Pipes. The most useful properties of ASTM A691
                  GRADE 1 CR Alloy Steel Pipes, which make them efficient,
                  include features like enhanced strength, toughness, hardness,
                  hardenability, wear resistance, corrosion resistance and hot
                  hardness and our product has been manufactured to provide them
                  all.
                </p>
                <p>
                  We supply High precision ASTM A691 Gr.1 CR Alloy Steel Welded
                  Pipe & high quality alloy grades pipes & tubes to Oil & Gas,
                  Nuclear And Power, Aerospace, Chemical Process, Medical, High
                  Purity and High Performance.
                </p>
                <p>
                  ASTM A691 1 CR Alloy Steel Welded Pipe also known as Seamless
                  Alloy Steel Pipes "Chrome Moly" ASTM A/ASME SA335 Gr. 1CR.
                  ASTM A691 Gr.1CR Alloy Steel Welded Pipe is High Temperature
                  Pipes and Tubes & available in form of Round Pipes/Tubes,
                  Square Pipes/Tubes, Rectangular Pipe/Tubes, Coiled Tubes, "U"
                  Shape, Pan Cake Coils and Hydraulic Tubes.
                </p>
                <p>
                  Alloy ASTM A691 Gr.1 CR High Pressure Pipe Exporter, Alloy
                  Steel Gr.1 CR Fabricated Pipe, ASME SA691 Gr.1 CR SAW Pipe,
                  Alloy Steel Gr.1 CR LSAW Pipe Manufacturer in India.
                </p>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  ASTM A691 Alloy Steel Grade Gr.1 CR{" "}
                  <span className="text-[#66BB6A]">Pipe Specifications:</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> Alloy
                        Steel A691 GR Gr.1 CR
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        ASTM A691 / ASME SA691
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/2"
                        NB - 24" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH80,
                        SCH120, SCH140, SCH160, XXS
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / ERW / Welded / Fabricated / LSAW Pipes
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Rectangular, Hydraulic Etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong>{" "}
                        Single Random, Double Random & Cut Length.
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">End:</strong> Plain
                        End, Beveled End, Treaded
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of ASTM A691 Alloy Steel{" "}
                  <span className="text-[#66BB6A]">Gr.1 CR Pipes</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "astm-a691-1cr-pipes"
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

              {/* ===== CONTACT BOX ===== */}
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

              {/* ===== EXPORT DESTINATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  EXPORT DESTINATIONS FOR ALLOY A691 GR 1 CR PIPES, AS A691
                  GRADE 1 PIPES, AS A691 CR PIPE
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

export default ASTMA6911CRPage;
