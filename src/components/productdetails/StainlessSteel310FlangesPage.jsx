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

const StainlessSteel310FlangesPage = () => {
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
    (type) => type.slug === "stainless-steel-310-flanges",
  );

  const allDestinations = [
    "Vietnam",
    "London",
    "Azerbaijan",
    "Turkey",
    "Cameroon",
    "Jordan",
    "Australia",
    "Iran",
    "Peru",
    "Italy",
    "Argentina",
    "Kuwait",
    "Canada",
    "Dubai",
    "Kazakhstan",
    "Germany",
    "Indonesia",
    "Israel",
    "Iraq",
    "Mexico",
    "Saudi Arabia",
    "Tunisia",
    "Democratic Republic of the Congo",
    "Algeria",
    "Houston",
    "Ghana",
    "Ethiopa",
    "Africa",
    "UAE",
    "Uganda",
    "Brazil",
    "United States",
    "Bahrain",
    "Sri Lanka",
    "Angola",
    "Venezuela",
    "New Zealand",
    "South Africa",
    "Mozambique",
    "UK",
    "Russia",
    "Malaysia",
    "Morocco",
    "Sudan",
    "Trinidad and Tobago",
    "Nigeria",
    "Chine",
    "Colombia",
    "Thailand (Bangkok)",
    "Egypt",
    "Nairobi",
    "Casablanca",
    "Omdurman",
    "Lagos",
    "Byblos",
    "Beirut",
    "Conakry",
    "Yaoundé",
    "Singapore",
    "Abu Dhabi",
    "Addis Ababa",
    "Luanda",
    "Ouagadougou",
    "Riyadh",
    "Ibadan",
    "Antananarivo",
    "Kano",
    "Dar es Salaam",
    "Tripoli",
    "Durban",
    "Subra al-Haymah",
    "Dubai",
    "Alexandria",
    "Pretoria",
    "Johannesburg",
    "Jeddah",
    "Soweto",
    "Cairo",
    "Mecca",
    "Cape Town",
    "Bulawayo",
    "Istanbul",
    "Mbuji-Mayi",
    "Brazzaville",
    "Maiduguri",
    "Kinshasa",
    "Douala",
    "Rabat",
    "Accra",
    "Hong Kong",
    "Benin",
    "Dammam",
    "Tehran",
    "Doha",
    "Kaduna",
    "Kolwezi",
    "Lusaka",
    "Colombo",
    "New York",
    "Sharm el-Sheikh",
    "Aqaba",
    "Amman",
    "Algiers",
    "Bethlehem",
    "Freetown",
    "Bamako",
    "Harare",
    "Abidjan",
    "Giza",
    "Tel Aviv",
    "Maputo",
    "Manama",
    "Muscat",
    "Cairo",
    "Dakar",
    "Khartoum",
    "Port Harcourt",
    "Jerusalem",
    "Port Elizabeth",
    "Kampala",
    "Zaria",
    "Fez",
    "Mogadishu",
    "Lubumbashi",
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
          Stainless Steel 310 Pipe Flanges Manufacturer, SS 310 Slip on Flanges
          Exporter, Steel 310 Socket weld Flange, Stainless 310 Blind Flanges
          Suppliers
        </title>
        <meta
          name="description"
          content="Stainless Steel 310 Pipe Flanges Manufacturer, SS 310 Slip on Flanges Exporter, Steel 310 Socket weld Flange, Stainless 310 Blind Flanges Suppliers. ASTM A182 / A240, ASME SA182 / SA240 SS 310 / 310S (UNS S31000 / S31008) Flanges."
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
                                type.slug === "stainless-steel-310-flanges"
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
                      Stainless Steel 310 Flanges
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Manufacturer & Supplier of Stainless Steel 310 Pipe
                      Flanges, SS 310 Slip on Flanges, Steel UNS S31000 Lap
                      Joint Flanges, Stainless 310 Blind Flanges Exporter in
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
                    alt="Stainless Steel 310 Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Stainless Steel 310 Pipe Flanges
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Stainless
                  Steel Flanges
                </p>
                <p>
                  We Neon Alloys are a pioneer manufacturer & exporter to bring
                  up a fine consortium of Stainless Steel 310 Flanges to the
                  patrons worldwide. To meet the stringent quality parameters of
                  the industry, we make sure to work in tandem to accomplish all
                  the tasks in a well defined manner. The offered SS 310 Flanges
                  are stringently examined under the supervision of our skilled
                  professionals against the exquisite parameters of quality to
                  ensure hassle free range to our clients.
                </p>
                <p>
                  Pertaining to the clients' requirements, we have been
                  committed to manufacture and export a wide range of Stainless
                  Steel Flanges.
                </p>
                <p>
                  These flanges are manufactured using superior quality
                  stainless steel and other materials in order to meet the
                  international quality standards. We are offering these flanges
                  in different grades, sizes and specifications as per the needs
                  of clients. These Stainless Steel Flanges are extensively used
                  for various industries like chemical, heavy duty and
                  construction.
                </p>
                <p>
                  Stainless Steel 310 Flanges Manufacturer, SS 310S Plate
                  Flanges, Steel WNR 1.4841 DIN/ASME Pipe Flanges, SS UNS S31000
                  Socket weld Flanges Suppliers in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 310 Flanges available in below standard and{" "}
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
                        Stainless Steel 310
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
                          Standard
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Werkstoff Nr.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          SS 310
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4841</td>
                        <td className="px-4 py-2.5 text-sm">S31000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          SS 310S
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4845</td>
                        <td className="px-4 py-2.5 text-sm">S31008</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS S31000 Stainless Steel 310{" "}
                  <span className="text-[#66BB6A]">Flanges</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Sizes – 1/2" NB TO 24" NB.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Stainless Steel 310 Blind Flanges",
                    "Stainless 310 Plate Flanges",
                    "Stainless Steel 310 ASME Flanges",
                    "Steel 310 Reducing Flanges",
                    "SS 310 Weld Neck Flanges",
                    "UNS S31000 Industrial Flanges",
                    "SS 310S Threaded Flanges",
                    "Stainless 310 Lap Joint Flanges",
                    "Steel WNR 1.4841 Long weld Neck Flanges",
                    "310 Steel Slip-On Flanges",
                    "UNS S31000 Socket Weld Flanges",
                    "Stainless Orifice Flanges",
                    "310 Stainless Flat Flanges",
                    "SS 310 DIN Pipe Flanges",
                    "Steel 310S ANSI Flanges",
                    "Stainless 310 Pipe Flanges",
                    "Steel 310 Flanges",
                    "SS 310 WNR 1.4841 Forged Flanges",
                    "ASTM A182 310 Pipe Flanges",
                    "Steel 310S ANSI B16.5 Flanges",
                    "Stainless 310 ANSI B16.47 Flanges",
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
                  EXPORT DESTINATIONS FOR SS 310 FLANGES, STEEL 310 FLANGES,
                  STAINLESS STEEL 310 PIPE FLANGES, SS 310 PIPE FLANGES
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

export default StainlessSteel310FlangesPage;
