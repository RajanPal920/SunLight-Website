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

const BrassBronzeRoundBarsPage = () => {
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
    (type) => type.slug === "brass-bronze-roundbars",
  );

  const allDestinations = [
    "Mexico",
    "Bahrain",
    "Africa",
    "Iran",
    "Angola",
    "South Africa",
    "Turkey",
    "Canada",
    "Chine",
    "Mozambique",
    "Egypt",
    "Saudi Arabia",
    "UAE",
    "United States",
    "Colombia",
    "Uganda",
    "Morocco",
    "Kuwait",
    "Russia",
    "Nigeria",
    "UK",
    "Sudan",
    "Tunisia",
    "Venezuela",
    "Trinidad and Tobago",
    "New Zealand",
    "Algeria",
    "Thailand (Bangkok)",
    "Vietnam",
    "Argentina",
    "Sri Lanka",
    "Iraq",
    "Kazakhstan",
    "Israel",
    "Malaysia",
    "Indonesia",
    "Ghana",
    "Italy",
    "Democratic Republic of the Congo",
    "London",
    "Houston",
    "Peru",
    "Azerbaijan",
    "Germany",
    "Australia",
    "Dubai",
    "Brazil",
    "Jordan",
    "Cameroon",
    "Ethiopa",
    "Pretoria",
    "Jerusalem",
    "Cairo",
    "Omdurman",
    "Dakar",
    "Algiers",
    "Rabat",
    "Cairo",
    "Jeddah",
    "Doha",
    "Dubai",
    "Antananarivo",
    "Dammam",
    "Brazzaville",
    "Kano",
    "Bulawayo",
    "Maputo",
    "Port Elizabeth",
    "Aqaba",
    "Abu Dhabi",
    "Bamako",
    "Mbuji-Mayi",
    "Istanbul",
    "Dar es Salaam",
    "Colombo",
    "Casablanca",
    "Singapore",
    "Mogadishu",
    "Kampala",
    "Muscat",
    "Amman",
    "Abidjan",
    "Yaoundé",
    "Ouagadougou",
    "Ibadan",
    "Zaria",
    "Tel Aviv",
    "Byblos",
    "Tripoli",
    "Freetown",
    "Port Harcourt",
    "Mecca",
    "Durban",
    "Lagos",
    "Harare",
    "Soweto",
    "Conakry",
    "Douala",
    "Maiduguri",
    "Accra",
    "Riyadh",
    "Kaduna",
    "Cape Town",
    "Luanda",
    "Lubumbashi",
    "Lusaka",
    "Giza",
    "Sharm el-Sheikh",
    "Kinshasa",
    "Kolwezi",
    "Hong Kong",
    "Johannesburg",
    "Manama",
    "Nairobi",
    "Beirut",
    "Khartoum",
    "Alexandria",
    "Benin",
    "Addis Ababa",
    "Fez",
    "Tehran",
    "Bethlehem",
    "New York",
    "Subra al-Haymah",
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
          Brass / Bronze Round Bars & Rods | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Brass / Bronze Round Bars & Rods Manufacturer. Brass Hex Bars, Square Bars & Bronze Round Rods Supplier in India."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {roundbars.badge}
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
                                type.slug === "brass-bronze-roundbars"
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

            <div className="flex-1 min-w-0 pt-4">
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/round-bars")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Round Bars
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
                      {currentProduct?.title ||
                        "Brass / Bronze Round Bars & Rods"}
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
                    src={roundBarImage}
                    alt={currentProduct?.title || "Brass / Bronze Round Bars"}
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title || "Brass / Bronze Round Bars & Rods"}
                </p>
                <p>
                  {currentProduct?.title || "Brass / Bronze Round Bars & Rods"}{" "}
                  - Manufacturers & Exporters of Brass Round Bars & Rods, Bronze
                  Hex Bars, Brass Square Bars & Bronze Round Rods Supplier in
                  India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a leading manufacturer & exporters of Brass & Bronze Round
                  Bars. These are made by using the finest grades of Brass &
                  Bronze by using cutting edge technologies. Brass & Bronze
                  Round Bars are available in options of a wide range of alloys
                  and in different material finishes. Being of superior finish
                  quality, we are export this brass round bars in varied finish
                  options in terms of sizes, lengths, thickness and diameters so
                  as to meet the different demands of the customers.
                </p>
                <p>
                  These Brass Round Bar are manufactured under close supervision
                  of experts and these are appreciated for rust resistance, heat
                  tolerance and effective performance. Our Brass & Bronze Round
                  bars & rods are widely used in various application industries
                  such as Cement industry, Power Industry, Sugar Mills, Chemical
                  Plants, and Pharmaceuticals etc.
                </p>
                <p>
                  As a result to that our export account today is in over 45
                  countries some of them are United States, United Arab
                  Emirates, Canada, Pakistan, Spain, France, United Kingdom,
                  Indonesia, Iran, Kuwait, Mexico, Malaysia, Nigeria, Singapore,
                  Saudi Arabia, Netherlands, Brazil, Colombia, Egypt, Iraq, Sri
                  Lanka, Russia, Vietnam, South Africa, Turkey, Bangladesh,
                  Italy, Japan, Thailand, Hong Kong, Switzerland, New Zealand.
                  We welcome your inquiries.
                </p>
                <p>
                  Brass Rods, Bronze Round Bars, Alloy Brass Round Rods, Alloy
                  Bronze Hexagonal Bars, Brass Bright Bars Supplier & Bronze
                  Bars Exporter in India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Brass Round Bars & Bronze Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification:</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Range:</strong> 5 mm
                        To 500 mm thick in 100 mm TO 6000 mm
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Round/Square/ Hexagonal/ Rectangular/ Flat
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Bright, Black, Polish, Round, Square, Hex (A/F), Bush,
                        Rectangle, Flat, Wire Mesh
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
                    Brass Round Bars, Bronze Rods, Brass Werkstoff Round Bars &
                    Rods, Brass Hex Bars, Bronze Square Bars Supplier, Brass EFW
                    / ERW Bars & Rods Exporter in India.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of Brass Alloy Round Bars &{" "}
                  <span className="text-[#66BB6A]">Bronze Alloy Rods</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "brass-bronze-roundbars"
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
                  EXPORT DESTINATIONS FOR BRASS ROUND BARS, BRONZE BARS, BRASS
                  ALLOY RODS, BRONZE ALLOY ROUND RODS
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

export default BrassBronzeRoundBarsPage;
