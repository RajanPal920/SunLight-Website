import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft } from "lucide-react";
import buttweld from "../../data/productCategories/buttweld-fittings";
import buttweldImage from "../../assets/productsImage/buttweld.jpg";

const SS304HButtweldFittingsPage = () => {
  const navigate = useNavigate();

  // YOUR EXACT CONTACT DETAILS
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
    (type) => type.slug === "stainless-steel-304h-buttweld-fittings",
  );

  // SS 304H PRODUCT CONTENT (industry-standard)
  const pageContent = {
    title: "304H Stainless Steel Buttweld Fittings / SS 304H Pipe Fittings",
    subtitle:
      "304H Stainless Steel Seamless Fitting, Steel 304H Welded Pipe Fittings Manufacturer, SS 304H Buttweld Pipe Fittings, UNS S30409 Steel Elbow Supplier, 304H Steel Tee, SS 304H Pipe Cross, 304H Steel Reducers, Stainless Steel 304H Short Radius Elbow Exporter in India.",
    description1:
      "Sunlight Forge & Fitting Pvt. Ltd. is a leading manufacturer, supplier, and exporter of Stainless Steel 304H Butt Weld Fittings, which are the high-carbon version of the 304 grade. The higher carbon content (0.04% - 0.10%) provides improved high-temperature strength and creep resistance, making it ideal for elevated temperature service.",
    description2:
      "304H Stainless Steel Pipe Fittings are specifically designed for applications requiring high-temperature strength and resistance to graphitization. The increased carbon content allows the material to maintain its mechanical properties at temperatures above 800°F (425°C), making it suitable for use in heat exchangers, furnaces, and other high-temperature equipment.",
    description3:
      "Like other 304 series grades, 304H Stainless Steel Butt Weld Pipe Fittings offer excellent corrosion resistance, good weldability, and outstanding low-temperature toughness. However, the higher carbon content means these fittings are not recommended for use in environments where sensitization and intergranular corrosion may occur.",
    description4:
      'Our SS 304H buttweld fittings are available in seamless, welded, and fabricated construction. Sizes range from ½" NB to 48" NB with schedules from Sch 10 to Sch XXS. We manufacture and stock even odd sizes which is hard to find.',
  };

  // EXACT SPECIFICATIONS
  const specifications = {
    standard: "ASTM A403 / ASME SA403",
    grade: "304H Stainless Steel / UNS S30409",
    type: "Seamless / Welded / Fabricated",
    dimensions: "ANSI/ASME B16.9, B16.28, MSS-SP-43",
    size: "Seamless ½” to 24”, Welded ½” to 24”, Two Joint / Two Halve Fittings 6” to 48”",
    thickness: "Sch 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160 to Sch XXS",
  };

  // EXACT EQUIVALENT STANDARDS TABLE
  const equivalentStandards = [
    { standard: "UNS", value: "S30409" },
    { standard: "EN", value: "X6CrNi18-10" },
    { standard: "AFNOR", value: "Z6CN18-09" },
    { standard: "GOST", value: "12Х18Н10" },
    { standard: "BS", value: "304S51" },
    { standard: "JIS", value: "SUS 304H" },
    { standard: "Werkstoff Nr.", value: "1.4948" },
  ];

  // EXACT TYPES OF FITTINGS (Grid 2)
  const fittingTypesGrid2 = [
    "Stainless Steel 304H Tee",
    "304H Steel Elbow",
    "Stainless UNS S30409 Reducing Tee",
    "Steel 304H Coupling",
    "Stainless Steel 304H Long & Short Stub Band",
    "Steel 304H Reducer",
    "Steel S30409 Return Bends",
    "304H Steel Plug",
    "Steel 304H Pipe End Cap",
    "Stainless Steel 304H Collar",
    "SS 304H Cross",
  ];

  // EXACT TYPES OF FITTINGS (Grid 1 - Detailed)
  const fittingTypesGrid1 = [
    "Stainless Steel 304H Reducers",
    "Stainless 304H Concentric Reducers",
    "UNS S30409 Steel Tees",
    "304H Steel Pipe Nipples",
    "SS 304H Stub end",
    "304H Steel butt weld Tees",
    "Stainless Steel 304H Elbows",
    "304H Steel 3D Elbow",
    "UNS S30409 Steel Stub Ends",
    "Stainless 304H End Caps",
    "Steel 304H 5D Elbow",
    "304H Steel 180° SR Return Bends",
    "Stainless 304H Long Radius Elbow",
    "304H Steel Eccentric Reducers",
    "S30409 Steel Reducing Crosses",
    "Steel 304H Elbows",
    "304H Steel Crosses",
    "Stainless S30409 Couplings",
    "304H Steel Short Radius Elbow",
    "SS 304H Pipe Bends",
    "304H Steel 45° Elbows",
    "304H Steel Reducing Elbow",
    "Stainless 304H Piggable Bends",
    "304H SS 180° LR Return Bends",
  ];

  // EXPORT DESTINATIONS (same as your example)
  const exportDestinations = [
    "Italy",
    "Argentina",
    "Canada",
    "Tunisia",
    "Sri Lanka",
    "UK",
    "London",
    "Sudan",
    "Trinidad and Tobago",
    "Morocco",
    "Israel",
    "South Africa",
    "Bahrain",
    "Saudi Arabia",
    "Kazakhstan",
    "Dubai",
    "Azerbaijan",
    "UAE",
    "Thailand (Bangkok)",
    "Uganda",
    "Iran",
    "Colombia",
    "Houston",
    "Africa",
    "Brazil",
    "United States",
    "Peru",
    "Russia",
    "Malaysia",
    "Angola",
    "New Zealand",
    "Venezuela",
    "Indonesia",
    "Vietnam",
    "Egypt",
    "Kuwait",
    "Ghana",
    "Nigeria",
    "Cameroon",
    "Mozambique",
    "Iraq",
    "Turkey",
    "Australia",
    "Democratic Republic of the Congo",
    "Chine",
    "Germany",
    "Algeria",
    "Ethiopa",
    "Jordan",
    "Mexico",
  ];

  const exportCities = [
    "Maputo",
    "Pretoria",
    "Mogadishu",
    "Soweto",
    "Amman",
    "Port Elizabeth",
    "Lusaka",
    "Omdurman",
    "Fez",
    "Freetown",
    "Sharm el-Sheikh",
    "Cairo",
    "Harare",
    "Giza",
    "Kolwezi",
    "Ibadan",
    "Singapore",
    "Beirut",
    "Bamako",
    "Tel Aviv",
    "Hong Kong",
    "Bulawayo",
    "Jeddah",
    "Douala",
    "Johannesburg",
    "Lubumbashi",
    "Maiduguri",
    "Dakar",
    "Dar es Salaam",
    "Brazzaville",
    "Luanda",
    "Aqaba",
    "Accra",
    "Bethlehem",
    "Tripoli",
    "Mbuji-Mayi",
    "Ouagadougou",
    "Mecca",
    "Abu Dhabi",
    "Cape Town",
    "Khartoum",
    "Antananarivo",
    "Kano",
    "Muscat",
    "Conakry",
    "Cairo",
    "Tehran",
    "Yaoundé",
    "Istanbul",
    "Dammam",
    "Alexandria",
    "Durban",
    "Abidjan",
    "Kinshasa",
    "Dubai",
    "Algiers",
    "Jerusalem",
    "Lagos",
    "Riyadh",
    "Kaduna",
    "New York",
    "Colombo",
    "Benin",
    "Zaria",
    "Nairobi",
    "Port Harcourt",
    "Kampala",
    "Doha",
    "Byblos",
    "Rabat",
    "Casablanca",
    "Manama",
    "Subra al-Haymah",
    "Addis Ababa",
  ];

  // PRODUCT RANGE (same as your example)
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
          304H Stainless Steel Buttweld Pipe Fittings | SS 304H | Sunlight Forge
        </title>
        <meta
          name="description"
          content="304H Stainless Steel Buttweld Fittings Manufacturer. SS 304H Elbow, Tee, Reducer, Cap, Stub End, Cross. ASTM A403 WP304H, ANSI B16.9. High Carbon, High-Temperature Strength."
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
            {/* Sidebar - Same as your example */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* Use buttweld categories from your data file */}
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
                                "stainless-steel-304h-buttweld-fittings"
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

                  {/* Product Range */}
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
                      {pageContent.title}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {pageContent.subtitle}
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
                    alt="304H Stainless Steel Buttweld Pipe Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Stainless Steel 304H Buttweld Fittings
                </p>
                <p>{pageContent.description1}</p>
                <p>{pageContent.description2}</p>
                <p>{pageContent.description3}</p>
                <p>{pageContent.description4}</p>
              </div>

              {/* Types of Fittings (Grid 2) */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS S30409 Stainless Steel 304H Butt weld Pipe
                  Fittings / 304H Steel Pipe Fittings
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {fittingTypesGrid2.map((type, index) => (
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
                  UNS S30409 Stainless Concentric Reducers, 304H Steel Pipe End
                  Cap Supplier, Steel 304H Stub end, Stainless 304H Pipe Bends,
                  SS 304H Reducing Elbow, 304H Steel Eccentric Reducers, Steel
                  304H Bends Exporter in India.
                </p>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 304H Buttweld Pipe Fittings available in below
                  standard and <span className="text-[#66BB6A]">materials</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          Specification:
                        </strong>{" "}
                        {specifications.standard}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        {specifications.grade}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        {specifications.type}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Dimensions:</strong>{" "}
                        {specifications.dimensions}
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong>{" "}
                        {specifications.size}
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Thickness:</strong>{" "}
                        {specifications.thickness}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Equivalent Standards Table */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Equivalent Standards for SS 304H
                </h2>

                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Standard
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {equivalentStandards.map((item, index) => (
                        <tr
                          key={index}
                          className={`${index % 2 === 0 ? "bg-green-50" : "bg-white"}`}
                        >
                          <td className="px-4 py-2.5 text-sm text-slate-700 font-medium">
                            {item.standard}
                          </td>
                          <td className="px-4 py-2.5 text-sm text-slate-700">
                            {item.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Types of Fittings (Grid 1 - Detailed) */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of 304H Stainless Steel 304H Buttweld Fittings /
                  Stainless Steel 304H Pipe Fittings
                </h2>
                <p className="text-center text-sm text-slate-600 mb-4">
                  1/4" NB TO 32" NB. (Seamless & Welded)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {fittingTypesGrid1.map((type, index) => (
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
                  EXPORT DESTINATIONS FOR STAINLESS STEEL 304H BUTT WELD PIPE
                  FITTINGS, STEEL 304H PIPE FITTINGS, STEEL 304H SEAMLESS
                  FITTINGS, 304H STEEL WELDED PIPE FITTINGS IN INDIA
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {exportDestinations.map((country, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {exportCities.map((city, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {city}
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

export default SS304HButtweldFittingsPage;
