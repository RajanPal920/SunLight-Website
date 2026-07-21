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

const StainlessSteel316LFlangesPage = () => {
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
    (type) => type.slug === "stainless-steel-316l-flanges",
  );

  const allDestinations = [
    "Uganda",
    "Australia",
    "Russia",
    "Cameroon",
    "Brazil",
    "Israel",
    "Algeria",
    "Kuwait",
    "Kazakhstan",
    "Mexico",
    "Morocco",
    "Jordan",
    "Nigeria",
    "Egypt",
    "Peru",
    "United States",
    "Iraq",
    "Canada",
    "Thailand (Bangkok)",
    "Sudan",
    "Saudi Arabia",
    "Democratic Republic of the Congo",
    "Germany",
    "Italy",
    "London",
    "UK",
    "Vietnam",
    "Angola",
    "Mozambique",
    "Azerbaijan",
    "Sri Lanka",
    "Trinidad and Tobago",
    "Ghana",
    "Chine",
    "Venezuela",
    "Indonesia",
    "Argentina",
    "New Zealand",
    "Houston",
    "Turkey",
    "Dubai",
    "UAE",
    "South Africa",
    "Tunisia",
    "Ethiopa",
    "Iran",
    "Malaysia",
    "Africa",
    "Bahrain",
    "Colombia",
    "Ouagadougou",
    "Tel Aviv",
    "Istanbul",
    "Mbuji-Mayi",
    "Lagos",
    "Port Harcourt",
    "Dakar",
    "Dubai",
    "Kaduna",
    "Benin",
    "Bethlehem",
    "Dar es Salaam",
    "Soweto",
    "Subra al-Haymah",
    "Khartoum",
    "New York",
    "Lusaka",
    "Brazzaville",
    "Fez",
    "Kinshasa",
    "Doha",
    "Jeddah",
    "Jerusalem",
    "Durban",
    "Alexandria",
    "Accra",
    "Singapore",
    "Luanda",
    "Zaria",
    "Maiduguri",
    "Conakry",
    "Dammam",
    "Cairo",
    "Mecca",
    "Freetown",
    "Tehran",
    "Bamako",
    "Port Elizabeth",
    "Omdurman",
    "Harare",
    "Pretoria",
    "Ibadan",
    "Beirut",
    "Cairo",
    "Giza",
    "Sharm el-Sheikh",
    "Kano",
    "Hong Kong",
    "Mogadishu",
    "Nairobi",
    "Colombo",
    "Lubumbashi",
    "Kolwezi",
    "Manama",
    "Riyadh",
    "Maputo",
    "Douala",
    "Tripoli",
    "Aqaba",
    "Bulawayo",
    "Yaoundé",
    "Addis Ababa",
    "Abu Dhabi",
    "Muscat",
    "Amman",
    "Casablanca",
    "Abidjan",
    "Cape Town",
    "Rabat",
    "Antananarivo",
    "Algiers",
    "Byblos",
    "Kampala",
    "Johannesburg",
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
          Stainless Steel 316L Pipe Flanges Manufacturer, SS 316L Slip on
          Flanges Exporter, Steel 316L Socket weld Flange, Stainless 316L Blind
          Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Stainless Steel 316L Pipe Flanges Manufacturer, SS 316L Slip on Flanges Exporter, Steel 316L Socket weld Flange, Stainless 316L Blind Flanges Suppliers. ASTM A182 / A240, ASME SA182 / SA240 SS 316L (UNS S31603) Flanges."
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
                                type.slug === "stainless-steel-316l-flanges"
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
                      Stainless Steel 316L Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Manufacturer & Supplier of Stainless Steel 316L Pipe
                      Flanges, SS 316L Slip on Flanges, Steel UNS S31603 Lap
                      Joint Flanges, Stainless 316L Blind Flanges Exporter in
                      India.
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
                    alt="Stainless Steel 316L Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Stainless Steel 316L Pipe Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Stainless
                  Steel Flanges
                </p>
                <p>
                  We, Neon Alloys are Manufacturer & Exporters of Stainless
                  Steel 316L Flanges that are fabricated from high quality of
                  standard raw materials. These are used in various industrial
                  purposes and majorly used to join the pipes. Our offered SS
                  316L Flanges range is precisely manufactured by our qualified
                  and experienced professionals by making use of cutting-edge
                  technology and quality-tested stainless steel in compliance
                  with set universal norms.
                </p>
                <p>
                  These SS 316L Pipe Flanges range is highly demanded in the
                  market for its brilliant features in form of SS 316L Flat
                  Faced Flanges, SS 316L SORF Flanges, SS 316L Slip On Flanges,
                  SS 316L Weld Neck Flanges, SS 316L WNRF Flanges, SS 316L Lap
                  Joint Flanges, SS 316L Blind Flanges, SS 316L Plate Flanges,
                  SS 316L Forge Flanges, SS 316L Socket Weld Flanges.
                </p>
                <p>
                  These Stainless Steel 316L Flanges offered by us meets the
                  specific process needs of various industries like Chemical,
                  Refinery and Oil & Gas industry and other industrial
                  applications etc.
                </p>
                <p>
                  Stainless Steel 316L Flanges Manufacturer, SS 316L Plate
                  Flanges, Steel WNR 1.4404 DIN/ASME Pipe Flanges, SS UNS S31603
                  Socket weld Flanges Suppliers in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 316L Flanges available in below standard and{" "}
                  <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        ASTM A182 / A240, ASME SA182 / SA240
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Stainless Steel 316L
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
                        <strong className="text-[#4A148C]">
                          Flanges Types:
                        </strong>{" "}
                        Blind Flanges, Slip on Flanges, Reducing Flanges, Socket
                        weld Flanges, Weld Neck Flanges, Orifice Flanges, Lap
                        Joint Flanges, Threaded Flanges, Plate Flanges,
                        Industrial Flanges, etc
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
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          JIS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          AFNOR
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          BS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          GOST
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          EN
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          SS 316L
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4404 / 1.4435</td>
                        <td className="px-4 py-2.5 text-sm">S31603</td>
                        <td className="px-4 py-2.5 text-sm">SUS 316L</td>
                        <td className="px-4 py-2.5 text-sm">
                          Z3CND17-11-02 / Z3CND18-14-03
                        </td>
                        <td className="px-4 py-2.5 text-sm">316S11 / 316S13</td>
                        <td className="px-4 py-2.5 text-sm">
                          03Ch17N14M3 / 03Ch17N14M2
                        </td>
                        <td className="px-4 py-2.5 text-sm">
                          X2CrNiMo17-12-2 / X2CrNiMo18-14-3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS S31603 Stainless Steel 316L{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Stainless Steel 316L Blind Flanges",
                    "Stainless 316L Plate Flanges",
                    "Stainless Steel 316L ASME Flanges",
                    "Steel 316L Reducing Flanges",
                    "SS 316L Weld Neck Flanges",
                    "UNS S31603 Industrial Flanges",
                    "SS 316L Threaded Flanges",
                    "Stainless 316L Lap Joint Flanges",
                    "Steel WNR 1.4404 Long weld Neck Flanges",
                    "316L Steel Slip-On Flanges",
                    "UNS S31603 Socket Weld Flanges",
                    "Stainless Orifice Flanges",
                    "316L Stainless Flat Flanges",
                    "SS 316L DIN Pipe Flanges",
                    "Steel 316L ANSI Flanges",
                    "Stainless 316L Pipe Flanges",
                    "Steel 316L Flanges",
                    "SS 316L WNR 1.4404 Forged Flanges",
                    "ASTM A182 316L Pipe Flanges",
                    "Steel 316L ANSI B16.5 Flanges",
                    "Stainless 316L ANSI B16.47 Flanges",
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
                  EXPORT DESTINATIONS FOR SS 316L FLANGES, STEEL 316L FLANGES,
                  STAINLESS STEEL 316L PIPE FLANGES, SS 316L PIPE FLANGES
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

export default StainlessSteel316LFlangesPage;
