import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Phone, Mail, Menu, Globe, ArrowLeft, PhoneCall } from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import refractoryAnchors from "../../data/productCategories/refractory-fittings";
import anchorImage from "../../assets/productsImage/fastener.jpg";

const RefractoryFixingsAnchorsPage = () => {
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

  // Get all refractory anchor products from the structured data
  const allAnchorProducts = refractoryAnchors.categories?.[0]?.types || [];

  // Find the current product by slug
  const currentProduct = allAnchorProducts.find(
    (item) => item.slug === "refractory-fixings-anchors",
  );

  // All anchor products for the sidebar
  const anchorProducts = allAnchorProducts;

  const allDestinations = [
    "Kuwait",
    "Sri Lanka",
    "United States",
    "Mexico",
    "Algeria",
    "UAE",
    "Israel",
    "Ghana",
    "Nigeria",
    "Bahrain",
    "London",
    "Canada",
    "Malaysia",
    "Kazakhstan",
    "Australia",
    "UK",
    "Houston",
    "Uganda",
    "Peru",
    "Italy",
    "South Africa",
    "Dubai",
    "Thailand (Bangkok)",
    "Jordan",
    "Democratic Republic of the Congo",
    "Vietnam",
    "Germany",
    "Africa",
    "Chine",
    "Indonesia",
    "Venezuela",
    "Angola",
    "Egypt",
    "Morocco",
    "Mozambique",
    "Tunisia",
    "Cameroon",
    "Colombia",
    "New Zealand",
    "Brazil",
    "Azerbaijan",
    "Sudan",
    "Trinidad and Tobago",
    "Ethiopa",
    "Iraq",
    "Saudi Arabia",
    "Turkey",
    "Russia",
  ];

  const allCities = [
    "Tel Aviv",
    "Lagos",
    "Accra",
    "Conakry",
    "Subra al-Haymah",
    "Kaduna",
    "Kampala",
    "Sharm el-Sheikh",
    "Giza",
    "Brazzaville",
    "Bulawayo",
    "Ibadan",
    "Soweto",
    "Mbuji-Mayi",
    "Manama",
    "Alexandria",
    "Cairo",
    "Durban",
    "Douala",
    "Mogadishu",
    "Fez",
    "Addis Ababa",
    "Luanda",
    "Benin",
    "Jeddah",
    "Kano",
    "Hong Kong",
    "Bethlehem",
    "Cairo",
    "Abu Dhabi",
    "Istanbul",
    "Cape Town",
    "Singapore",
    "Khartoum",
    "Dakar",
    "Kinshasa",
    "Johannesburg",
    "Mecca",
    "Rabat",
    "Zaria",
    "Lubumbashi",
    "Harare",
    "New York",
    "Omdurman",
    "Algiers",
    "Maiduguri",
    "Tehran",
    "Dubai",
    "Antananarivo",
    "Pretoria",
    "Freetown",
    "Muscat",
    "Doha",
    "Port Elizabeth",
    "Tripoli",
    "Amman",
    "Byblos",
    "Beirut",
    "Riyadh",
    "Ouagadougou",
    "Colombo",
    "Bamako",
    "Jerusalem",
    "Maputo",
    "Dar es Salaam",
    "Casablanca",
    "Port Harcourt",
    "Abidjan",
    "Yaoundé",
    "Nairobi",
    "Kolwezi",
    "Lusaka",
    "Aqaba",
    "Dammam",
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

  // Floating button styles
  const floatingStyles = {
    container: {
      position: "fixed",
      bottom: "30px",
      right: "30px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      zIndex: 9999,
    },
    button: {
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "none",
      textDecoration: "none",
      color: "white",
      fontSize: "24px",
    },
    call: {
      backgroundColor: "blue",
    },
    whatsapp: {
      backgroundColor: "#25D366",
    },
  };

  return (
    <>
      <Helmet>
        <title>
          Refractory Fixings & Anchors | High-Temperature Anchors | Sunlight
          Forge
        </title>
        <meta
          name="description"
          content="Refractory Fixings & Anchors Manufacturer. Stainless Steel Refractory Anchors, SS Refractory Anchors, Mild Steel Refractory Anchors, SS Spiral Y Anchors, Stainless Steel U Anchors, Steel Crook Anchors. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {refractoryAnchors.badge ||
                  "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* ===== REFRACTORY FIXINGS & ANCHORS SECTION ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      REFRACTORY FIXINGS & ANCHORS
                    </h4>
                    <ul className="space-y-0.5">
                      {anchorProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/refractory-fixings-anchors/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "refractory-fixings-anchors"
                                ? "text-[#66BB6A] font-semibold bg-green-50 border-l-2 border-[#66BB6A]"
                                : ""
                            }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ===== PRODUCT RANGE SECTION ===== */}
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
                              item.slug === "refractory-fixings-anchors"
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
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={() =>
                    navigate("/products/refractory-fixings-anchors")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Refractory Fixings & Anchors
                </button>
              </div>

              {/* Hero Section */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#4A148C] to-[#2E0A5E] mb-8">
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${anchorImage})`,
                    }}
                  ></div>
                </div>
                <div className="relative p-8 sm:p-12 text-white">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      Refractory Fixings & Anchors
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Stainless Steel Refractory Anchors, SS Refractory Anchors,
                      Mild Steel Refractory Anchors, SS Spiral Y Anchors,
                      Stainless Steel U Anchors, Steel Crook Anchors Supplier &
                      Exporter in India.
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
                    src={anchorImage}
                    alt="Refractory Fixings & Anchors"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Material Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Material
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    We can supply refractory anchors and libra fixing systems to
                    exacting tolerances in a wide range of stainless steel and
                    higher alloys. Standard fixings are available in stainless
                    steel grade (304) and grade (310), & Inconel 601. Other
                    grades of stainless steel, mild steels and alloys are
                    available to suit requirements, including Stainless Steel
                    grade (316).
                  </p>
                </div>
              </div>

              {/* Stainless Steel At Elevated Temperatures Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel At Elevated Temperatures
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Standard Stainless Steels provide corrosion resistance in a
                    number of aggressive situations. They also provide very good
                    oxidation and scaling resistance at elevated temperatures.
                    In situations where standard steels reach their temperature
                    limits, higher alloy and specially designed stainless steels
                    provide a combination of increased strength and oxidation
                    resistance, extending the useful working range up to higher
                    temperatures around 1200°C.
                  </p>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Specification
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 304
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 310
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Inconel™ Alloy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Nearest Werkstoff
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4301
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4845
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Maximum service temp. under certain conditions
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          800°C
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1100°C
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1150 - 1230°C
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Melting point
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1440°C
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1490°C
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1300-1375°C
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Material Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Material Specification
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 mb-2">
                    Refractory fixings are available in a range of stainless
                    steels and higher alloys:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-bold text-[#4A148C]">
                        Grade 1.4301 (304) (18/8)
                      </p>
                      <p className="text-sm text-slate-700">
                        The most widely used stainless steel grade containing
                        typically 18% Chromium and 8% Nickel as the main
                        alloying elements. This grade has excellent welding
                        properties and is easily formed and fabricated.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-bold text-[#4A148C]">
                        Grade 310
                      </p>
                      <p className="text-sm text-slate-700">
                        A heat resisting steel that combines excellent
                        resistance to both corrosion and oxidation at elevated
                        temperatures. It is resistant to moderate thermal shock
                        and shows high strength at high temperatures.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-bold text-[#4A148C]">
                        Inconel Alloy 601
                      </p>
                      <p className="text-sm text-slate-700">
                        Inconel 601 has an outstanding resistance to corrosion
                        and to high temperature oxidation. The material also has
                        good resistance to aqueous corrosion and high mechanical
                        strength.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-bold text-[#4A148C]">
                        Other Grades
                      </p>
                      <p className="text-sm text-slate-700">
                        Refractory fixings can be supplied in other grades on
                        request, including Stainless Steel grade 1.4401 (316).
                        Please contact us for more details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Using Stainless Steel At High Temperatures Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Using Stainless Steel At High Temperatures
                </h2>
                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    The resistance to oxidation of stainless steel depends
                    largely on the chromium content. Two other alloying
                    elements, nickel and silicon, can also be instrumental in
                    enhancing the oxidation resistance of the steels. Nickel in
                    the alloy minimizes oxide spalling. Silicon increases
                    oxidation resistance by improving the compaction of the
                    scale formed and thereby allows the steel to be used at
                    higher operating temperatures. Corrosion in air or steam
                    occurs relatively slowly due to the formation of a compact
                    adherent chromium oxide based scale.
                  </p>
                </div>
              </div>

              {/* Detailed Specification Table */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Detailed Specifications
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Specification
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 304
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 310
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Inconel Alloy 601
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 309
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 316
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Type 321
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          330 Alloy
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          600 Alloy
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          800H Alloy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Werkstoff
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4301
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4845
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4833
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4401
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.4878
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          C
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.040
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.050
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.500
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.060
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.040
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.050
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.060
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.050
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.060
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Si
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.20-1.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.20 -1.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.500
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.750
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.500
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.000
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Mn
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.50-2.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.50-2.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          2.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          2.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          2.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          2.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.500
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          P (Max)
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.045
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.045
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.045
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.045
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.045
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.400
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.015
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          S (Max)
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.030
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.030
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.015
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.030
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.030
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.030
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.300
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.015
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Cr
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          18.30
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          25.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          21.00-24.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          22.50
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          16.80
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          17.30
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          19.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          14.00-17.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          19.00-23.00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Ni
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          8.70
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          20.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          58.00-63.00
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          12.50
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          10.70
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          9.20
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          35.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          72.000
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          30.00-35.00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Al
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          1.00-1.70
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.15-0.80
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Mo
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          2.20
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Ti
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.500
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          0.10-0.60
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium text-slate-700">
                          Others
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          Cu 0.5 Bal Fe
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          Ti less than/equal to 5 x C
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          -
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          Cu 0.5
                        </td>
                        <td className="px-4 py-2.5 text-sm text-slate-700">
                          Cu 0.75 max S=0.015 max Al+Ti=0.85-1.20
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contact Box */}
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
                  EXPORT DESTINATIONS FOR STEEL REFRACTORY FIXINGS ANCHORS,
                  STEEL Y SHAPE ANCHORS, ZIG ZAG ANCHORS, SPIRAL Y ANCHORS,
                  CROOK ANCHORS
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="flex flex-wrap gap-2 justify-center mb-3">
                    {allDestinations.map((country, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-white text-slate-700 text-xs px-3 py-1.5 rounded-full border border-green-200 hover:bg-[#66BB6A] hover:text-white hover:border-[#66BB6A] transition-all duration-200 cursor-default shadow-sm"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {allCities.map((city, idx) => (
                      <span
                        key={idx}
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

      {/* Floating Call and WhatsApp Buttons */}
      <div style={floatingStyles.container}>
        {/* Call Button */}
        <a
          href={`tel:${contactDetails.phone}`}
          style={{
            ...floatingStyles.button,
            backgroundColor: floatingStyles.call.backgroundColor,
          }}
          className="hover:scale-110 transition-transform duration-300"
          aria-label="Call us"
        >
          <PhoneCall size={28} />
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${contactDetails.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...floatingStyles.button,
            backgroundColor: floatingStyles.whatsapp.backgroundColor,
          }}
          className="hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MdOutlineWhatsapp size={28} />
        </a>
      </div>
    </>
  );
};

export default RefractoryFixingsAnchorsPage;
