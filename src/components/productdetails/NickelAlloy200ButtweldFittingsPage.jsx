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
// Assuming you have a butt-weld fittings data file similar to roundbars
import buttweld from "../../data/productCategories/buttweld-fittings";
import buttweldImage from "../../assets/productsImage/buttweld.jpg";

const NickelAlloy200ButtweldFittingsPage = () => {
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

  const currentCategory = buttweld.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || buttweld.categories?.[0];

  const currentProduct = activeCategory?.types?.find(
    (type) => type.slug === "nickel-alloy-200-buttweld-fittings",
  );

  const allDestinations = [
    "Malaysia",
    "Kuwait",
    "Africa",
    "Jordan",
    "Turkey",
    "Bahrain",
    "Italy",
    "United States",
    "Chine",
    "Tunisia",
    "Germany",
    "Saudi Arabia",
    "Russia",
    "Peru",
    "Indonesia",
    "Canada",
    "Colombia",
    "Argentina",
    "Azerbaijan",
    "London",
    "UAE",
    "Ghana",
    "Kazakhstan",
    "UK",
    "Venezuela",
    "Cameroon",
    "Thailand (Bangkok)",
    "Angola",
    "South Africa",
    "Sudan",
    "Iraq",
    "New Zealand",
    "Uganda",
    "Iran",
    "Vietnam",
    "Brazil",
    "Egypt",
    "Australia",
    "Ethiopa",
    "Mexico",
    "Dubai",
    "Algeria",
    "Morocco",
    "Israel",
    "Nigeria",
    "Mozambique",
    "Democratic Republic of the Congo",
    "Sri Lanka",
    "Houston",
    "Trinidad and Tobago",
    "Abu Dhabi",
    "Riyadh",
    "Istanbul",
    "Jerusalem",
    "Mogadishu",
    "Yaoundé",
    "Lusaka",
    "Jeddah",
    "Lubumbashi",
    "Pretoria",
    "Zaria",
    "Soweto",
    "Addis Ababa",
    "Maputo",
    "Durban",
    "New York",
    "Cairo",
    "Rabat",
    "Cape Town",
    "Bamako",
    "Accra",
    "Freetown",
    "Tel Aviv",
    "Sharm el-Sheikh",
    "Benin",
    "Mecca",
    "Ouagadougou",
    "Antananarivo",
    "Kaduna",
    "Abidjan",
    "Bulawayo",
    "Harare",
    "Dubai",
    "Luanda",
    "Doha",
    "Subra al-Haymah",
    "Johannesburg",
    "Byblos",
    "Kano",
    "Dar es Salaam",
    "Amman",
    "Ibadan",
    "Kampala",
    "Brazzaville",
    "Bethlehem",
    "Mbuji-Mayi",
    "Khartoum",
    "Giza",
    "Conakry",
    "Port Elizabeth",
    "Beirut",
    "Muscat",
    "Port Harcourt",
    "Singapore",
    "Casablanca",
    "Alexandria",
    "Colombo",
    "Maiduguri",
    "Algiers",
    "Kinshasa",
    "Hong Kong",
    "Nairobi",
    "Tehran",
    "Manama",
    "Fez",
    "Lagos",
    "Aqaba",
    "Omdurman",
    "Dammam",
    "Douala",
    "Kolwezi",
    "Tripoli",
    "Cairo",
    "Dakar",
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
          High Nickel Alloy 200 Buttweld Fittings, Alloy 200 Seamless Fittings,
          Nickel 200 Welded Pipe Fittings Manufacturer, Nickel Alloy 200
          Buttweld Pipe Fittings, Nickel Alloy 200 Elbow, 200 Nickel Tee, Alloy
          200 Pipe Cross, Nickel 200 Reducers, Alloy 200 Short Radius Elbow
          Exporters in India.
        </title>
        <meta
          name="description"
          content="High Nickel Alloy 200 Buttweld Fittings, Alloy 200 Seamless Fittings, Nickel 200 Welded Pipe Fittings Manufacturer, Nickel Alloy 200 Buttweld Pipe Fittings, Nickel Alloy 200 Elbow, 200 Nickel Tee, Alloy 200 Pipe Cross, Nickel 200 Reducers, Alloy 200 Short Radius Elbow Exporters in India."
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
                  {/* Use buttweld categories here */}
                  {buttweld.categories?.map((category) => (
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
                                type.slug ===
                                "nickel-alloy-200-buttweld-fittings"
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
                              item.slug === "buttweld-fittings"
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
                  onClick={() => navigate("/products/buttweld-fittings")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Buttweld Fittings
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${buttweldImage || activeCategory?.image})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Nickel Alloy 200 Buttweld Fittings
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Alloy 200 Seamless Fittings, Nickel 200 Welded Pipe
                      Fittings Manufacturer, Nickel Alloy 200 Buttweld Pipe
                      Fittings, Nickel Alloy 200 Elbow, 200 Nickel Tee, Alloy
                      200 Pipe Cross, Nickel 200 Reducers, Alloy 200 Short
                      Radius Elbow Exporters in India.
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
                    src={buttweldImage}
                    alt="Nickel Alloy 200 Buttweld Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  High Nickel Alloy 200 Buttweld Fittings
                </p>
                <p>
                  200 Alloy Welded Buttweld Fittings, High Nickel Alloy Pipe
                  Buttweld Fittings, High Nickel Seamless Pipe Buttweld Fittings
                </p>
                <p>
                  Neon Alloys is one of the pioneer supplier and dealer of
                  Nickel 200 Butt Weld Pipe Fittings,which contain nickel with
                  copper and small amounts of iron and manganese. This nickel
                  copper alloys contains 63 % nickel minimum, 28 % – 34 %
                  copper, and a maximum of 2 % manganese and 2.5 % iron.
                </p>
                <p>
                  These Nickel 200 Butt Weld Fittings are used where a higher
                  strength is required compared to pure nickel. There are also a
                  small number of impurities kept at limited values to ensure
                  the metal's properties are not harmed.
                </p>
                <p>
                  These Nickel 200 Pipe Fittings have a wider range of
                  environments where they resist corrosion but in some
                  specialised applications, such as strong alkali contaminant,
                  nickel or commercially pure nickel would be superior.
                </p>
                <p>
                  Because of good thermal conductivity of these alloys, these
                  Nickel Alloy 200 Butt Weld Fittings is frequently used for
                  heat exchangers where sea water is one of the fluids
                  concerned. Nickel alloys find wide application in oil refining
                  and marine applications where long corrosion - free life is
                  required. These Nickel Alloy 200 Pipe Fittings doesn't require
                  post - weld toughening as is widely utilized as a part of
                  substantial gage segments (over around 6mm). These Nickel
                  Alloy Butt Weld Pipe Fittings are extensively used in
                  different application industries such as pharmaceutical, oil &
                  gas, nuclear power, cement, sugar, chemical, etc. We offer the
                  same in market leading prices.
                </p>
              </div>

              {/* Types of Fittings */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of 200 Nickel Alloy Pipe{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {[
                    "Alloy 200 Tee",
                    "Nickel Alloy 200 Elbow",
                    "200 Alloy Reducing Tee",
                    "Nickel Alloy 200 Coupling",
                    "200 Alloy Long & Short Stub Band",
                    "Nickel 200 Reducer",
                    "Alloy 200 Return Bends",
                    "Nickel Alloy 200 Plug",
                    "Alloy 200 Union",
                    "Nickel Alloy 200 Pipe End Cap",
                    "200 Alloy Collar",
                    "200 Nickel Cross",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-3 border border-green-200 hover:border-[#66BB6A] transition-colors text-center"
                    >
                      <p className="text-sm font-medium text-[#4A148C]">
                        {type}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-slate-600 mt-4">
                  Alloy 200 Reducer, Nickel Alloy 200 Pipe End Cap Supplier,
                  Alloy 200 Stub end, Nickel 200 Pipe Bends, 200 Alloy Reducing
                  Elbow, Nickel 200 Pipe Bends Exporter in India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  High Nickel Alloy 200 Butt weld Pipe Fittings available in
                  standard and <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        ASTM A366, ASME SB366
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Nickel Alloy 200 (UNS N02200)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / Welded / Fabricated
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimensions:</strong>{" "}
                        ANSI/ASME B16.9, B16.28, MSS-SP-43
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong>{" "}
                        Seamless ½” to 24”, Welded ½” to 24”, Two Joint / Two
                        Halve Fittings 6” to 48”
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        Sch 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160, Sch
                        XXS
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
                          EN
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          GOST
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          EN
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          AFNOR
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          BS
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          JIS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Nickel 200
                        </td>
                        <td className="px-4 py-2.5 text-sm">N02200</td>
                        <td className="px-4 py-2.5 text-sm">Ni 99.2</td>
                        <td className="px-4 py-2.5 text-sm">НП-2</td>
                        <td className="px-4 py-2.5 text-sm">Ni 99.2</td>
                        <td className="px-4 py-2.5 text-sm">N-100M</td>
                        <td className="px-4 py-2.5 text-sm">2.4066</td>
                        <td className="px-4 py-2.5 text-sm">NA 11</td>
                        <td className="px-4 py-2.5 text-sm">NW 2200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Fittings - Detailed */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS N02200 High Nickel Alloy 200 Buttweld{" "}
                  <span className="text-[#66BB6A]">Fittings</span>
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  Available Size – 1/4" NB TO 32" NB. (Seamless & Welded)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "High Nickel Alloy 200 Reducers",
                    "Nickel Alloy 200 Concentric Reducers",
                    "Nickel Alloy 200 Tees",
                    "Nickel Alloy 200 Pipe Nipples",
                    "High Nickel 200 Stub end",
                    "Nickel Alloy 200 Tees",
                    "Nickel Alloy 200 Elbows",
                    "200 Alloy 3D Elbow",
                    "Nickel Alloy 200 Stub Ends",
                    "UNS N02200 Nickel End Caps",
                    "High Nickel 200 5D Elbow",
                    "200 Alloy 180° SR Return Bends",
                    "Nickel 200 Long Radius Elbow",
                    "Alloy 200 Eccentric Reducers",
                    "Nickel Alloy 200 Reducing Crosses",
                    "Nickel Alloy 200 Steel Elbows",
                    "200 Nickel Alloy Crosses",
                    "Nickel Alloy 200 Couplings",
                    "Nickel 200 Short Radius Elbow",
                    "200 Alloy ASME B16.9 Pipe Bends",
                    "200 High Nickel 45° Elbows",
                    "Nickel Alloy 200 Reducing Elbow",
                    "200 Nickel Alloy Piggable Bends",
                    "200 Alloy 180° LR Return Bends",
                    "UNS N02200 Nickel Welded Fittings",
                    "Nickel 200 Seamless Fittings",
                    "200 ASTM A366 Butt weld Fittings",
                    "Nickel 200 Pipe Fittings",
                    "Nickel Alloy 200 Pipe Fittings",
                    "Alloy 200 Welded Pipe Fittings",
                  ].map((type, index) => (
                    <div
                      key={index}
                      className="bg-green-50 rounded-xl p-3 border border-green-200 hover:border-[#66BB6A] transition-colors text-center"
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
                  EXPORT DESTINATIONS FOR NICKEL ALLOY 200 BUTT WELD PIPE
                  FITTINGS, NICKEL 200 PIPE FITTINGS, ALLOY 200 SEAMLESS
                  FITTINGS, NICKEL 200 WELDED PIPE FITTINGS IN INDIA
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

export default NickelAlloy200ButtweldFittingsPage;
