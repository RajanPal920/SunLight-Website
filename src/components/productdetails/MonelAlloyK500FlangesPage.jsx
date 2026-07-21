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
// Assuming you have a flanges data file similar to roundbars
import flanges from "../../data/productCategories/flanges";
import flangesImage from "../../assets/productsImage/flanges.jpg";

const MonelAlloyK500FlangesPage = () => {
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
    (type) => type.slug === "monel-alloy-k500-flanges",
  );

  const allDestinations = [
    "Kazakhstan",
    "Thailand (Bangkok)",
    "Democratic Republic of the Congo",
    "Vietnam",
    "Tunisia",
    "United States",
    "Kuwait",
    "Sudan",
    "Mozambique",
    "Nigeria",
    "Iran",
    "Trinidad and Tobago",
    "Sri Lanka",
    "Dubai",
    "Azerbaijan",
    "Italy",
    "Cameroon",
    "Chine",
    "Egypt",
    "Ghana",
    "Indonesia",
    "Malaysia",
    "Brazil",
    "UK",
    "Morocco",
    "Mexico",
    "UAE",
    "Jordan",
    "Algeria",
    "Iraq",
    "New Zealand",
    "Turkey",
    "Venezuela",
    "Houston",
    "Argentina",
    "Russia",
    "Uganda",
    "Canada",
    "Israel",
    "London",
    "Bahrain",
    "Germany",
    "Australia",
    "Saudi Arabia",
    "Colombia",
    "Africa",
    "Peru",
    "South Africa",
    "Angola",
    "Ethiopa",
    "Conakry",
    "Giza",
    "Maiduguri",
    "Lagos",
    "Algiers",
    "Kampala",
    "Johannesburg",
    "Antananarivo",
    "Alexandria",
    "Rabat",
    "Kaduna",
    "Bethlehem",
    "Zaria",
    "Muscat",
    "Riyadh",
    "New York",
    "Abidjan",
    "Hong Kong",
    "Cape Town",
    "Bulawayo",
    "Luanda",
    "Harare",
    "Kolwezi",
    "Soweto",
    "Amman",
    "Khartoum",
    "Dakar",
    "Ibadan",
    "Mbuji-Mayi",
    "Dar es Salaam",
    "Jeddah",
    "Kinshasa",
    "Douala",
    "Addis Ababa",
    "Byblos",
    "Doha",
    "Benin",
    "Colombo",
    "Tel Aviv",
    "Bamako",
    "Pretoria",
    "Beirut",
    "Fez",
    "Mecca",
    "Lubumbashi",
    "Manama",
    "Maputo",
    "Dammam",
    "Jerusalem",
    "Abu Dhabi",
    "Tehran",
    "Nairobi",
    "Yaoundé",
    "Istanbul",
    "Cairo",
    "Singapore",
    "Brazzaville",
    "Casablanca",
    "Kano",
    "Cairo",
    "Aqaba",
    "Dubai",
    "Durban",
    "Tripoli",
    "Omdurman",
    "Ouagadougou",
    "Subra al-Haymah",
    "Mogadishu",
    "Port Harcourt",
    "Lusaka",
    "Accra",
    "Freetown",
    "Sharm el-Sheikh",
    "Port Elizabeth",
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
          Monel Alloy K500 Flanges Manufacturer, Monel K500 Slip on Flanges
          Exporter, Alloy K500 Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Monel Alloy K500 Flanges Manufacturer, Monel K500 Slip on Flanges Exporter, Alloy K500 Blind Flanges Suppliers. ASTM B564 / ASME SB564 Monel Alloy K500 (UNS N05500) Flanges."
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
                                type.slug === "monel-alloy-k500-flanges"
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
                      Monel Alloy K500 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are Supplier & Exporter of Monel Alloy K500 Pipe
                      Flanges, Monel K500 Slip on Flanges, Monel K500 DIN Blind
                      Flanges, Monel Alloy UNS N05500 Plates Flanges
                      Manufacturer in India.
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
                    alt="Monel Alloy K500 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Monel Alloy K500 / UNS N05500 Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Monel Alloy
                  K500 Flanges
                </p>
                <p>
                  We, Neon Alloys are one of the efficient organizations in
                  manufacturing & exporting of Monel K500 Flanges at a wide
                  range. We manufacture these Flawless Monel Alloy k500 Flanges
                  Using Stainless Steel Metal Alloys. The types of flanges that
                  we afford from our product are Slip On, Blind, Weld neck,
                  Socket weld, Threaded, Lap Joint, Orifice and Spectacle
                  Blinds, Tongue & Groove & Ring Joint Types, Vacuum Flanges,
                  Exhaust Flanges, Profile Flanges etc.
                </p>
                <p>
                  Monel k-500® is a nickel-copper alloy with the same corrosion
                  resistance and characteristics as the monel 400®. The monel
                  k-500® has a greater strength and hardness then the 400, as a
                  result of added aluminum and titanium. These flanges are
                  widely used in various application industries like Chemicals,
                  Fats, & Fertilizers, Sugar Mills & Distilleries, Cement
                  Industries, Ship Builders, Paper Industries etc.
                </p>
                <p>
                  ASTM A564 Monel K500 Flanges, Alloy K500 Orifice Flanges,
                  Monel WNR 2.4375 Forged Flanges, Alloy K500 Socket weld
                  Flanges, Monel K500 ANSI/ASME B16.5 Reducing Flanges Supplier
                  in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Monel Alloy K500 Pipe Flanges available in below standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM B564 / ASME SB564
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong> Monel
                        Alloy K500 (UNS N05500), Werkstoff nr.2.4375
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/2″NB
                        TO 60″NB
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
                        <strong className="text-[#4A148C]">Class:</strong> 150#,
                        300#, 600#, 900#, 1500# & 2500#
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
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Monel K500
                        </td>
                        <td className="px-4 py-2.5 text-sm">N05500</td>
                        <td className="px-4 py-2.5 text-sm">2.4375</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N05500 Monel K500 DIN/ANSI/ASME{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Monel K500 Blind Flanges",
                    "Monel Alloy K500 Plate Flanges",
                    "Monel K500 ASME Flanges",
                    "K500 Monel Reducing Flanges",
                    "UNS N05500 Weld Neck Flanges",
                    "Monel K500 Industrial Flanges",
                    "Monel Alloy WNR 2.4375 Threaded Flanges",
                    "Monel K500 Lap Joint Flanges",
                    "K500 Monel Long weld Neck Flanges",
                    "Alloy K500 Slip-On Flanges",
                    "Monel Alloy K500 Socket Weld Flanges",
                    "Monel UNS N05500 Orifice Flanges",
                    "Monel K500 Alloy Flat Flanges",
                    "K500 Monel Alloy DIN Flanges",
                    "Monel K500 ANSI Flanges",
                    "ASTM A564 K500 BLRF Flanges",
                    "ANSI b16.5 K500 Monel Flanges",
                    "Monel K500 Forged Flanges",
                    "Alloy K500 Flanges",
                    "Monel K500 ANSI B16.5 Flanges",
                    "Monel Alloy K500 ANSI B16.47 Flanges",
                    "K500 Monel SWRF Flanges",
                    "Monel K500 WNRF Flanges",
                    "Monel Alloy K500 SORF Flanges",
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
                  EXPORT DESTINATIONS FOR MONEL K500 PIPE FLANGES, ALLOY K500
                  FLANGES, MONEL ALLOY K500 SLIP ON FLANGES, ALLOY K500 BLIND
                  FLANGES
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

export default MonelAlloyK500FlangesPage;
