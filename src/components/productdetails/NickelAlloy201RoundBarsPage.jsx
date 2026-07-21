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

const NickelAlloy201RoundBarsPage = () => {
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

  const currentCategory = roundbars.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || roundbars.categories?.[0];

  const currentProduct = activeCategory?.types?.find(
    (type) => type.slug === "nickel-alloy-201-roundbars",
  );

  const productCategories = roundbars.categories || [];

  const allDestinations = [
    "Turkey",
    "Brazil",
    "Kuwait",
    "New Zealand",
    "Iran",
    "UK",
    "Jordan",
    "Italy",
    "Sri Lanka",
    "Trinidad and Tobago",
    "Ghana",
    "Algeria",
    "United States",
    "Azerbaijan",
    "Mexico",
    "Russia",
    "Thailand (Bangkok)",
    "Iraq",
    "Democratic Republic of the Congo",
    "Houston",
    "Tunisia",
    "Vietnam",
    "Bahrain",
    "Morocco",
    "Uganda",
    "Canada",
    "South Africa",
    "Nigeria",
    "Sudan",
    "UAE",
    "Peru",
    "Colombia",
    "Egypt",
    "Germany",
    "Argentina",
    "Cameroon",
    "Saudi Arabia",
    "London",
    "Ethiopa",
    "Africa",
    "Indonesia",
    "Dubai",
    "Kazakhstan",
    "Mozambique",
    "Malaysia",
    "Australia",
    "Venezuela",
    "Israel",
    "Chine",
    "Angola",
    "Yaoundé",
    "Nairobi",
    "Mecca",
    "Durban",
    "Johannesburg",
    "Rabat",
    "Alexandria",
    "Abu Dhabi",
    "Freetown",
    "Hong Kong",
    "Kaduna",
    "Kolwezi",
    "Fez",
    "Muscat",
    "Cairo",
    "Giza",
    "Manama",
    "Antananarivo",
    "Dubai",
    "Port Elizabeth",
    "Lagos",
    "Algiers",
    "Zaria",
    "Colombo",
    "Mogadishu",
    "Jerusalem",
    "Beirut",
    "Bethlehem",
    "New York",
    "Jeddah",
    "Cape Town",
    "Tehran",
    "Pretoria",
    "Kampala",
    "Ouagadougou",
    "Subra al-Haymah",
    "Lusaka",
    "Abidjan",
    "Benin",
    "Brazzaville",
    "Accra",
    "Khartoum",
    "Dakar",
    "Bamako",
    "Addis Ababa",
    "Tripoli",
    "Amman",
    "Dammam",
    "Sharm el-Sheikh",
    "Istanbul",
    "Port Harcourt",
    "Maputo",
    "Singapore",
    "Kano",
    "Casablanca",
    "Dar es Salaam",
    "Aqaba",
    "Harare",
    "Riyadh",
    "Douala",
    "Kinshasa",
    "Byblos",
    "Doha",
    "Bulawayo",
    "Ibadan",
    "Omdurman",
    "Luanda",
    "Tel Aviv",
    "Mbuji-Mayi",
    "Conakry",
    "Lubumbashi",
    "Maiduguri",
    "Soweto",
    "Cairo",
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
          Nickel Alloy 201 Round Bars & Rods | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Nickel Alloy 201 Round Bars & Rods Manufacturer. Nickel Alloy UNS N02201 Hex Bars, Square Bars & Round Rods Supplier in India."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {roundbars.badge || "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {productCategories.map((category) => (
                    <div key={category.id}>
                      <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                        {category.title}
                      </h4>
                      <ul className="space-y-0.5">
                        {category.types?.map((type) => (
                          <li key={type.id}>
                            <Link
                              to={`/products/round-bars/${category.slug}/${type.slug}`}
                              className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                                type.slug === "nickel-alloy-201-roundbars"
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
                      backgroundImage: `url(${activeCategory?.image || roundBarImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      {currentProduct?.title ||
                        "Nickel Alloy 201 Round Bars & Rods"}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are involved in offering a qualitative Steel Round Bars
                      to our clients. Widely used in the making of canals,
                      bridges, buildings, hotels, hospitals, homes etc.
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
                    alt={currentProduct?.title || "Nickel Alloy 201 Round Bars"}
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "High Nickel Alloy 201 Round Bars & Rods"}
                </p>
                <p>
                  Manufacturer & Exporter of High Nickel Alloy 201 Round Bars &
                  Rods, Nickel Alloy UNS N02201 Hex Bars, Nickel 201 Square Bars
                  & Nickel Alloy 201 Round Rods Supplier in India.
                </p>
                <p>
                  Leveraging on our sound industrial experience and knowledge,
                  We Neon Alloys are manufacturing and exporting a broad gamut
                  of Nickel 201 Round Bars. Nickel 200 & 201 can be hot formed
                  to almost any shape Round Bar. The temperature range 1200°F to
                  2250°F is recommended and should be carefully abided as the
                  proper temperature is the most important factor in achieving
                  hot malleability.
                </p>
                <p>
                  These Nickel 201 Round Bars are highly regarded for
                  outstanding electrical conductivity and excellent resistance
                  to temperature variations. We ensure rigid standards of
                  quality by observing well defined standards of the industry.
                </p>
                <p>
                  Our Nickel Alloy 201 round bars accepted by clients in various
                  spheres of the industries ranging from basic industries such
                  as Sugar, Paper, Textile, Dairy, Engineering to more complex
                  such as Oil & Gas, Petrochemical, Chemical & Fertilizers,
                  Power Generation and Nuclear Industries.
                </p>
                <p>
                  Nickel Alloy 201 Rods, Nickel Werkstoff Nr. 2.4068 Round Bars,
                  Nickel 201 Round Rods, Nickel Alloy 201 Hexagonal Bars, Alloy
                  201 Bright Bars Supplier & Nickel 201 Bars Exporter in India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  High Nickel Alloy 201 Round Bars & Alloy 201 Round Rods{" "}
                  <span className="text-[#66BB6A]">Specification:</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM B160 / ASME SB160
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Nickel 201 (UNS N02201)
                      </p>
                      {roundbars.specifications && (
                        <>
                          <p>
                            <strong className="text-[#4A148C]">
                              Material:
                            </strong>{" "}
                            {roundbars.specifications.material}
                          </p>
                          <p>
                            <strong className="text-[#4A148C]">
                              Diameter:
                            </strong>{" "}
                            {roundbars.specifications.diameter}
                          </p>
                        </>
                      )}
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Range:</strong> 3.17
                        mm to 350 mm dia
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong> Round
                        / Square / Hexagonal / Rectangular / Flat
                      </p>
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
                          BS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          GOST
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          JIS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          AFNOR
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Nickel 201
                        </td>
                        <td className="px-4 py-2.5 text-sm">N02201</td>
                        <td className="px-4 py-2.5 text-sm">2.4068</td>
                        <td className="px-4 py-2.5 text-sm">LC-Ni 99</td>
                        <td className="px-4 py-2.5 text-sm">NA 12</td>
                        <td className="px-4 py-2.5 text-sm">НП-2</td>
                        <td className="px-4 py-2.5 text-sm">NW 2201</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of ASTM A160 High Nickel Alloy 201 Round Bars &{" "}
                  <span className="text-[#66BB6A]">Nickel 201 Rods</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory?.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "nickel-alloy-201-roundbars"
                          ? "border-[#66BB6A] bg-green-100"
                          : "border-green-200"
                      }`}
                    >
                      <Link
                        to={`/products/round-bars/${activeCategory.slug}/${type.slug}`}
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
                  EXPORT DESTINATIONS FOR NICKEL 201 ROUND BARS, ALLOY 201 BARS,
                  NICKEL ALLOY 201 ROUND RODS, ALLOY 201 HEX BARS
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

export default NickelAlloy201RoundBarsPage;
