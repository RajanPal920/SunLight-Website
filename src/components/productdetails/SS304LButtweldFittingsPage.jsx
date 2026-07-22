import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft } from "lucide-react";
import buttweld from "../../data/productCategories/buttweld-fittings";
import buttweldImage from "../../assets/productsImage/buttweld.jpg";

const SS304LButtweldFittingsPage = () => {
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
    (type) => type.slug === "stainless-steel-304l-buttweld-fittings",
  );

  // EXACT CONTENT FROM NEON ALLOYS 304L PAGE (as pasted by you)
  const pageContent = {
    title: "304L Stainless Steel Buttweld Fittings / SS 304L Pipe Fittings",
    subtitle:
      "304L Stainless Steel Seamless Fitting, Steel 304L Welded Pipe Fittings Manufacturer, SS 304L Buttweld Pipe Fittings, UNS S30403 Steel Elbow Supplier, 304L Steel Tee, SS 304L Pipe Cross, 304L Steel Reducers, Stainless Steel 304L Short Radius Elbow Exporter in India.",
    description1:
      "Neon Alloys is one of the well-known dealers and stockiest of Stainless Steel 304L Butt Weld Fittings, which is used in cookware, cutlery, household hardware. Its resistance to corrosion and staining, low maintenance, and familiar lustre makes it an ideal material for many applications.",
    description2:
      "This iron oxide film (the rust) is active and accelerates corrosion by making Stainless Steel 304L Pipe Fittings easier for more iron oxide to form. Since iron oxide has lower density than steel, the film expands and tends to flake and fall away.",
    description3:
      "High oxidation resistance of Alloy 304L Butt Weld Pipe Fittings in air at ambient temperature is normally achieved with addition of a minimum of 13 % (by weight) chromium, and up to 26 % is used for harsh environments. The chromium forms a passivation layer of chromium oxide when exposed to oxygen.",
    description4:
      "The layer in Alloy 304L Butt Weld Fittings is too thin to be visible, and the metal remains lustrous and smooth. The layer is impervious to water and air, protecting the metal beneath, and this layer quickly reforms when the surface is scratched. When Alloy 304L Pipe Fittings are forced together, the oxide layer can be scraped off, allowing the parts to weld together. When forcibly disassembled, the welded material may be torn and pitted, a destructive effect known as galling. In comparison, 304L Stainless Steel Pipe Fittings contain sufficient chromium to undergo passivation, forming an inert film of chromium oxide on the surface.",
  };

  // EXACT SPECIFICATIONS FROM THE PAGE
  const specifications = {
    standard: "ASTM A403 / ASME SA403",
    grade: "304L Stainless Steel",
    type: "Seamless / Welded / Fabricated",
    dimensions: "ANSI/ASME B16.9, B16.28, MSS-SP-43",
    size: "Seamless ½” to 24”, Welded ½” to 24”, Two Joint / Two Halve Fittings 6” to 48”",
    thickness: "Sch 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160 to Sch XXS",
  };

  // EXACT EQUIVALENT STANDARDS TABLE
  const equivalentStandards = [
    { standard: "UNS", value: "S30403" },
    { standard: "EN", value: "X2CrNi18-9 / X2CrNi19-11" },
    { standard: "AFNOR", value: "Z3CN18‐10" },
    { standard: "GOST", value: "03Х18Н11" },
    { standard: "BS", value: "304S11" },
    { standard: "JIS", value: "SUS 304L" },
    { standard: "Werkstoff Nr.", value: "1.4306 / 1.4307" },
  ];

  // EXACT TYPES OF FITTINGS (from the page)
  const fittingTypesGrid1 = [
    "Stainless Steel 304L Reducers",
    "Stainless 304L Concentric Reducers",
    "UNS S30403 Steel Tees",
    "304L Steel Pipe Nipples",
    "SS 304L Stub end",
    "304L Steel butt weld Tees",
    "Stainless Steel 304L Elbows",
    "304L Steel 3D Elbow",
    "UNS S30403 Steel Stub Ends",
    "Stainless 304L End Caps",
    "Steel 304L 5D Elbow",
    "304L Steel 180° SR Return Bends",
    "Stainless 304L Long Radius Elbow",
    "304L Steel Eccentric Reducers",
    "S30403 Steel Reducing Crosses",
    "Steel 304L Elbows",
    "304L Steel Crosses",
    "Stainless S30403 Couplings",
    "304L Steel Short Radius Elbow",
    "SS 304L Pipe Bends",
    "304L Steel 45° Elbows",
    "304L Steel Reducing Elbow",
    "Stainless 304L Piggable Bends",
    "304L SS 180° LR Return Bends",
  ];

  // EXACT FITTING TYPES (first grid)
  const fittingTypesGrid2 = [
    "Stainless Steel 304L Tee",
    "304L Steel Elbow",
    "Stainless UNS S30403 Reducing Tee",
    "Steel 304L Coupling",
    "Stainless Steel 304L Long & Short Stub Band",
    "Steel 304L Reducer",
    "Steel S30403 Return Bends",
    "304L Steel Plug",
    "Steel 304L Pipe End Cap",
    "Stainless Steel 304L Collar",
    "SS 304L Cross",
  ];

  // EXACT EXPORT DESTINATIONS
  const exportDestinations = [
    "Argentina",
    "UK",
    "Sri Lanka",
    "Brazil",
    "Ethiopa",
    "Dubai",
    "Sudan",
    "Azerbaijan",
    "Egypt",
    "Mexico",
    "Chine",
    "Colombia",
    "Iran",
    "Democratic Republic of the Congo",
    "Malaysia",
    "Bahrain",
    "Uganda",
    "United States",
    "New Zealand",
    "Israel",
    "Cameroon",
    "Turkey",
    "Angola",
    "Kazakhstan",
    "Canada",
    "Mozambique",
    "Indonesia",
    "Iraq",
    "Germany",
    "Nigeria",
    "Peru",
    "UAE",
    "Trinidad and Tobago",
    "Russia",
    "London",
    "Ghana",
    "South Africa",
    "Houston",
    "Africa",
    "Venezuela",
    "Kuwait",
    "Tunisia",
    "Vietnam",
    "Australia",
    "Italy",
    "Saudi Arabia",
    "Morocco",
    "Algeria",
    "Jordan",
    "Thailand (Bangkok)",
  ];

  const exportCities = [
    "Accra",
    "Fez",
    "Colombo",
    "Sharm el-Sheikh",
    "Kolwezi",
    "Abu Dhabi",
    "Port Elizabeth",
    "Alexandria",
    "Kampala",
    "Bethlehem",
    "Lusaka",
    "Lagos",
    "Kaduna",
    "Port Harcourt",
    "Yaoundé",
    "Algiers",
    "Dubai",
    "Conakry",
    "Mogadishu",
    "Bulawayo",
    "Kano",
    "Jeddah",
    "Aqaba",
    "Abidjan",
    "Tripoli",
    "Jerusalem",
    "Doha",
    "Nairobi",
    "Tehran",
    "Maputo",
    "Singapore",
    "Muscat",
    "Mecca",
    "Ouagadougou",
    "Freetown",
    "Manama",
    "Benin",
    "Dar es Salaam",
    "Pretoria",
    "Lubumbashi",
    "Soweto",
    "Khartoum",
    "New York",
    "Johannesburg",
    "Zaria",
    "Durban",
    "Giza",
    "Istanbul",
    "Douala",
    "Harare",
    "Dammam",
    "Kinshasa",
    "Riyadh",
    "Omdurman",
    "Maiduguri",
    "Dakar",
    "Byblos",
    "Subra al-Haymah",
    "Beirut",
    "Cairo",
    "Casablanca",
    "Addis Ababa",
    "Amman",
    "Brazzaville",
    "Rabat",
    "Cairo",
    "Hong Kong",
    "Cape Town",
    "Antananarivo",
    "Ibadan",
    "Tel Aviv",
    "Luanda",
    "Bamako",
    "Mbuji-Mayi",
  ];

  // PRODUCT RANGE (same as your Brass/Bronze example)
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
          304L Stainless Steel Buttweld Pipe Fittings | SS 304L | Sunlight Forge
        </title>
        <meta
          name="description"
          content="304L Stainless Steel Buttweld Fittings Manufacturer. SS 304L Elbow, Tee, Reducer, Cap, Stub End, Cross. ASTM A403 WP304L, ANSI B16.9. Low Carbon, Excellent Weldability."
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
            {/* Sidebar - Same as your Brass/Bronze example */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* Use buttweld categories from your data file - same as Brass/Bronze example */}
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
                                "stainless-steel-304l-buttweld-fittings"
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

                  {/* Product Range - Same as your Brass/Bronze example */}
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
                    alt="304L Stainless Steel Buttweld Pipe Fittings"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Stainless Steel 304L Buttweld Fittings
                </p>
                <p>{pageContent.description1}</p>
                <p>{pageContent.description2}</p>
                <p>{pageContent.description3}</p>
                <p>{pageContent.description4}</p>
              </div>

              {/* Types of Fittings (Grid 2) */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of UNS S30403 Stainless Steel 304L Butt weld Pipe
                  Fittings / 304L Steel Pipe Fittings
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
                  UNS S30403 Stainless Concentric Reducers, 304L Steel Pipe End
                  Cap Supplier, Steel 304L Stub end, Stainless 304L Pipe Bends,
                  SS 304L Reducing Elbow, 304L Steel Eccentric Reducers, Steel
                  304L Bends Exporter in India.
                </p>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 304L Buttweld Pipe Fittings available in below
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
                  Equivalent Standards for SS 304L
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
                  Types of 304L Stainless Steel 304L Buttweld Fittings /
                  Stainless Steel 304L Pipe Fittings
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
                  EXPORT DESTINATIONS FOR STAINLESS STEEL 304L BUTT WELD PIPE
                  FITTINGS, STEEL 304L PIPE FITTINGS, STEEL 304L SEAMLESS
                  FITTINGS, 304L STEEL WELDED PIPE FITTINGS IN INDIA
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

export default SS304LButtweldFittingsPage;
