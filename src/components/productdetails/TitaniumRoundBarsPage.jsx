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

const TitaniumRoundBarsPage = () => {
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
    (type) => type.slug === "titanium-roundbars",
  );

  const allDestinations = [
    "Indonesia",
    "Houston",
    "Italy",
    "London",
    "Egypt",
    "Cameroon",
    "Ethiopa",
    "Trinidad and Tobago",
    "Chine",
    "Thailand (Bangkok)",
    "UAE",
    "Tunisia",
    "Germany",
    "Brazil",
    "Democratic Republic of the Congo",
    "United States",
    "Canada",
    "Australia",
    "Argentina",
    "Morocco",
    "Nigeria",
    "Algeria",
    "Dubai",
    "Russia",
    "Kazakhstan",
    "Azerbaijan",
    "Kuwait",
    "South Africa",
    "Vietnam",
    "Mexico",
    "Israel",
    "Venezuela",
    "Saudi Arabia",
    "Iraq",
    "Jordan",
    "Angola",
    "Iran",
    "Ghana",
    "Sudan",
    "Malaysia",
    "Turkey",
    "Africa",
    "Uganda",
    "Sri Lanka",
    "Peru",
    "UK",
    "Bahrain",
    "New Zealand",
    "Colombia",
    "Mozambique",
    "Tel Aviv",
    "Kinshasa",
    "Cape Town",
    "Sharm el-Sheikh",
    "Colombo",
    "Maiduguri",
    "Rabat",
    "Amman",
    "Antananarivo",
    "Dar es Salaam",
    "Cairo",
    "Beirut",
    "Kampala",
    "Manama",
    "Alexandria",
    "Benin",
    "Port Harcourt",
    "Khartoum",
    "Doha",
    "Zaria",
    "Subra al-Haymah",
    "Dakar",
    "Mogadishu",
    "Kaduna",
    "Bulawayo",
    "Istanbul",
    "Addis Ababa",
    "Mbuji-Mayi",
    "Lubumbashi",
    "Casablanca",
    "Muscat",
    "Abidjan",
    "Jeddah",
    "Algiers",
    "Abu Dhabi",
    "Johannesburg",
    "Maputo",
    "Brazzaville",
    "Singapore",
    "Bamako",
    "Kolwezi",
    "Jerusalem",
    "Ibadan",
    "Omdurman",
    "Durban",
    "Tehran",
    "Port Elizabeth",
    "Byblos",
    "Tripoli",
    "Douala",
    "Mecca",
    "Yaoundé",
    "Aqaba",
    "Lagos",
    "Freetown",
    "Dubai",
    "Conakry",
    "Giza",
    "Soweto",
    "Pretoria",
    "Accra",
    "Bethlehem",
    "Luanda",
    "Hong Kong",
    "Fez",
    "Kano",
    "Nairobi",
    "Ouagadougou",
    "Lusaka",
    "Riyadh",
    "Cairo",
    "Dammam",
    "Harare",
    "New York",
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
          Titanium Gr2 / Gr5 Round Bars & Rods | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Titanium Gr2 / Gr5 Round Bars & Rods Manufacturer. UNS R50400 Hex Bars, Square Bars & Round Rods Supplier in India."
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
                                type.slug === "titanium-roundbars"
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
                        "Titanium Gr2 / Gr5 Round Bars & Rods"}
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
                    alt={currentProduct?.title || "Titanium Round Bars"}
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Titanium Gr2 / Gr5 Round Bars & Rods"}
                </p>
                <p>
                  {currentProduct?.title ||
                    "Titanium Gr2 / Gr5 Round Bars & Rods"}{" "}
                  - Manufacturers & Exporters of Titanium Gr5 Round Bars & Rods,
                  Titanium UNS R50400 Hex Bars, Titanium Grade 2 Square Bars &
                  Titanium Grade 5 Round Rods Supplier in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  offers a premium quality assortment of Titanium Alloys Round
                  bars & rods to our valued customers spread across the globe.
                </p>
                <p>
                  These products are manufactured with the help of modern
                  techniques using optimum quality material. Offered products
                  are thoroughly examined on different quality parameters for
                  make certain its superiority at our end. Our Titanium round
                  bars & rods are known for resistant to general corrosion,
                  crevice corrosion, intergranular attack & pitting and stress
                  corrosion cracking.
                </p>
                <p>
                  Titanium Bars available in GRADE 1, GRADE 2, GRADE 5, GRADE
                  12, TI6AL4V, MEDICAL GRADE, SURGICAL GRADE in various sizes
                  and cut lengths required by customer. Titanium Round bars &
                  rods are used extensively in various industries such as Sugar,
                  Chemical & Fertilizers, Paper, Engineering, Textile, Dairy, to
                  more complexes such as Oil & Gas, Petrochemical, Power
                  Generation and Nuclear Industries etc.
                </p>
                <p>
                  Titanium Alloy Gr2 Rods, Titanium Werkstoff Nr 3.7035 Round
                  Bars, Titanium Gr5 Round Rods, Titanium Alloy Gr5 Hexagonal
                  Bars, Titanium Gr2 Bright Bars Supplier & Gr5 Bars Exporter in
                  India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Titanium Alloy Gr2 Round Bars & Titanium Gr5 Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification:</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM B348 / ASME B348, ASTM B 863 / ASME SB 863
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Titanium Gr2 / Gr5
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 6 mm
                        to 120 mm
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Round/Square/ Hexagonal/ Rectangular/ Flat
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong>{" "}
                        Bright, Black, Polish
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
                    Titanium Gr2 Round Bars, Titanium Gr5 Rods, Titanium
                    Werkstoff Nr.3.7035 / 3.7165 Round Bars & Rods, Titanium Gr5
                    Hex Bars, Titanium Gr2 Square Bars Supplier, Titanium Alloy
                    EFW / ERW Bars & Rods Exporter in India.
                  </p>
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
                          Titanium Gr5
                        </td>
                        <td className="px-4 py-2.5 text-sm">R56400</td>
                        <td className="px-4 py-2.5 text-sm">3.7165</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Titanium Gr7
                        </td>
                        <td className="px-4 py-2.5 text-sm">R52400</td>
                        <td className="px-4 py-2.5 text-sm">3.7235</td>
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

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of ASTM B348 Titanium Gr2 Round Bars &{" "}
                  <span className="text-[#66BB6A]">Titanium Gr5 Rods</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "titanium-roundbars"
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
                  EXPORT DESTINATIONS FOR TITANIUM GR 2 ROUND BARS, TITANIUM
                  BARS, TITANIUM RODS, TITANIUM GR 5 ROUND RODS
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

export default TitaniumRoundBarsPage;
