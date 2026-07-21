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

const MonelAlloy400FlangesPage = () => {
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
    (type) => type.slug === "monel-alloy-400-flanges",
  );

  const allDestinations = [
    "Dubai",
    "Morocco",
    "Brazil",
    "Uganda",
    "Kazakhstan",
    "Cameroon",
    "Vietnam",
    "Azerbaijan",
    "Indonesia",
    "Ethiopa",
    "South Africa",
    "Iran",
    "Venezuela",
    "Democratic Republic of the Congo",
    "United States",
    "Chine",
    "Argentina",
    "Saudi Arabia",
    "Africa",
    "Jordan",
    "Colombia",
    "Kuwait",
    "Egypt",
    "UK",
    "Tunisia",
    "Sudan",
    "Turkey",
    "Italy",
    "Peru",
    "Houston",
    "Canada",
    "Thailand (Bangkok)",
    "Nigeria",
    "Israel",
    "Iraq",
    "Malaysia",
    "New Zealand",
    "Mexico",
    "Bahrain",
    "Australia",
    "UAE",
    "Trinidad and Tobago",
    "Ghana",
    "Russia",
    "Sri Lanka",
    "Algeria",
    "London",
    "Mozambique",
    "Angola",
    "Germany",
    "Lusaka",
    "Casablanca",
    "Rabat",
    "Tripoli",
    "Singapore",
    "Accra",
    "Jerusalem",
    "Douala",
    "Amman",
    "Cape Town",
    "Freetown",
    "Soweto",
    "Hong Kong",
    "Muscat",
    "Kano",
    "Mbuji-Mayi",
    "Cairo",
    "Colombo",
    "Brazzaville",
    "Kinshasa",
    "Bulawayo",
    "Benin",
    "Kolwezi",
    "Cairo",
    "Tel Aviv",
    "Bethlehem",
    "Harare",
    "Alexandria",
    "Maiduguri",
    "Manama",
    "Kampala",
    "Jeddah",
    "Abidjan",
    "Dammam",
    "Maputo",
    "Sharm el-Sheikh",
    "Bamako",
    "Tehran",
    "Giza",
    "Doha",
    "Dakar",
    "Riyadh",
    "Pretoria",
    "Byblos",
    "Port Elizabeth",
    "Lagos",
    "Antananarivo",
    "Abu Dhabi",
    "Conakry",
    "Dubai",
    "Fez",
    "Mecca",
    "Aqaba",
    "Durban",
    "Omdurman",
    "Johannesburg",
    "Nairobi",
    "Istanbul",
    "Subra al-Haymah",
    "Ibadan",
    "Mogadishu",
    "Lubumbashi",
    "Algiers",
    "Luanda",
    "Dar es Salaam",
    "Addis Ababa",
    "Zaria",
    "Kaduna",
    "Yaoundé",
    "Khartoum",
    "New York",
    "Beirut",
    "Port Harcourt",
    "Ouagadougou",
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
          Monel Alloy 400 Flanges Manufacturer, Monel 400 Slip on Flanges
          Exporter, Alloy 400 Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Monel Alloy 400 Flanges Manufacturer, Monel 400 Slip on Flanges Exporter, Alloy 400 Blind Flanges Suppliers. ASTM B564 / ASME SB564 Monel Alloy 400 (UNS N04400) Flanges."
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
                                type.slug === "monel-alloy-400-flanges"
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
                      Monel Alloy 400 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      We are Supplier & Exporter of Monel Alloy 400 Pipe
                      Flanges, Monel 400 Slip on Flanges, Monel 400 DIN Blind
                      Flanges, Monel Alloy UNS N04400 Plates Flanges
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
                    alt="Monel Alloy 400 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Monel Alloy 400 / UNS N04400 Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Monel Alloy
                  400 Flanges
                </p>
                <p>
                  We are an leading manufacturer & exporter of best quality
                  Monel 400 Flanges. The offered Monel Alloy 400 flanges are
                  given in different stipulations according to the expressed
                  needs of clients. These Monel 400 flanges are used with stub
                  end or daft which is butt welded to the pipe with the flange
                  loose behind it. Monel 400 is a combination of nickel and
                  copper and is hardened by cold working only.
                </p>
                <p>
                  This alloy is widely renowned for its corrosion resistant
                  properties against flowing sea - water and is extensively used
                  for marine applications.
                </p>
                <p>
                  Monel 400 Flanges are available in Slip On, Blind, Weld neck,
                  Socket weld, Threaded, Lap Joint, Orifice and Spectacle
                  Blinds, Tongue & Groove & Ring Joint Types, Vacuum Flanges,
                  Exhaust Flanges, Profile Flanges etc. Monel Alloy 400 Flange
                  can be availed with us at very affordable prices.
                </p>
                <p>
                  ASTM A564 Monel 400 Flanges, Alloy 400 Orifice Flanges, Monel
                  WNR 2.4360 Forged Flanges, Alloy 400 Socket weld Flanges,
                  Monel 400 ANSI/ASME B16.5 Reducing Flanges Supplier in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Monel Alloy 400 Pipe Flanges available in below standard and{" "}
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
                        Alloy 400 (UNS N04400), Werkstoff nr.2.4360
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
                          Monel 400
                        </td>
                        <td className="px-4 py-2.5 text-sm">N04400</td>
                        <td className="px-4 py-2.5 text-sm">2.4360</td>
                        <td className="px-4 py-2.5 text-sm">NiCu30Fe</td>
                        <td className="px-4 py-2.5 text-sm">NA 13</td>
                        <td className="px-4 py-2.5 text-sm">
                          МНЖМц 28-2,5-1,5
                        </td>
                        <td className="px-4 py-2.5 text-sm">NW 4400</td>
                        <td className="px-4 py-2.5 text-sm">NU-30M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N04400 Monel 400 DIN/ANSI/ASME{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Monel 400 Blind Flanges",
                    "Monel Alloy 400 Plate Flanges",
                    "Monel 400 ASME Flanges",
                    "400 Monel Reducing Flanges",
                    "UNS N04400 Weld Neck Flanges",
                    "Monel 400 Industrial Flanges",
                    "Monel Alloy WNR 2.4360 Threaded Flanges",
                    "Monel 400 Lap Joint Flanges",
                    "400 Monel Long weld Neck Flanges",
                    "Alloy 400 Slip-On Flanges",
                    "Monel Alloy 400 Socket Weld Flanges",
                    "Monel UNS N04400 Orifice Flanges",
                    "Monel 400 Alloy Flat Flanges",
                    "400 Monel Alloy DIN Flanges",
                    "Monel 400 ANSI Flanges",
                    "ASTM A564 400 BLRF Flanges",
                    "ANSI b16.5 400 Monel Flanges",
                    "Monel 400 Forged Flanges",
                    "Alloy 400 Flanges",
                    "Monel 400 ANSI B16.5 Flanges",
                    "Monel Alloy 400 ANSI B16.47 Flanges",
                    "400 Monel SWRF Flanges",
                    "Monel 400 WNRF Flanges",
                    "Monel Alloy 400 SORF Flanges",
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
                  EXPORT DESTINATIONS FOR MONEL 400 PIPE FLANGES, ALLOY 400
                  FLANGES, MONEL ALLOY 400 SLIP ON FLANGES, ALLOY 400 BLIND
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

export default MonelAlloy400FlangesPage;
