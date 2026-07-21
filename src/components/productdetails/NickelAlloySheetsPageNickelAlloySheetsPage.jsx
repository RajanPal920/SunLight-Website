import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  ExternalLink,
  Menu,
  Globe,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import sheetsPlates from "../../data/productCategories/sheets-plates";
import nickelSheetImage from "../../assets/productsImage/sheets.jpg";

const NickelAlloySheetsPage = () => {
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

  const currentCategory = sheetsPlates.categories?.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory =
    currentCategory || sheetsPlates.categories?.[0] || sheetsPlates;

  // Get the current product from the sheets array
  const currentProduct = sheetsPlates.find(
    (item) => item.slug === "nickel-alloy-sheetsplates",
  );

  // All sheet products for the "Other Types" section
  const sheetProducts = [
    {
      id: 1,
      slug: "nickel-alloy-sheetsplates",
      title: "Nickel Alloy Sheets, Plates & Coils",
      description:
        "Premium nickel alloy sheets, plates, and coils offering exceptional strength, superior corrosion resistance, and excellent performance in extreme temperatures.",
    },
    {
      id: 2,
      slug: "stainless-steel-sheetsplates",
      title: "Stainless Steel Sheets, Plates & Coils",
      description:
        "High-quality stainless steel sheets, plates, and coils providing excellent corrosion resistance, durability, and aesthetic appeal.",
    },
    {
      id: 3,
      slug: "carbon-steel-sheetsplates",
      title: "Carbon Steel Sheets, Plates & Coils",
      description:
        "Premium carbon steel sheets, plates, and coils offering outstanding strength, excellent weldability, and cost-effectiveness.",
    },
    {
      id: 4,
      slug: "alloy-steel-sheetsplates",
      title: "Alloy Steel Sheets, Plates & Coils",
      description:
        "High-performance alloy steel sheets, plates, and coils delivering exceptional strength, hardness, and wear resistance.",
    },
  ];

  const allDestinations = [
    "Bahrain",
    "Australia",
    "Saudi Arabia",
    "Chine",
    "Colombia",
    "Dubai",
    "Iraq",
    "Ethiopa",
    "Russia",
    "Sudan",
    "Democratic Republic of the Congo",
    "United States",
    "Kazakhstan",
    "Algeria",
    "Mozambique",
    "Africa",
    "Malaysia",
    "Brazil",
    "Angola",
    "Houston",
    "Israel",
    "London",
    "Jordan",
    "Ghana",
    "Kuwait",
    "Azerbaijan",
    "Vietnam",
    "Cameroon",
    "Tunisia",
    "South Africa",
    "Mexico",
    "Morocco",
    "Indonesia",
    "Uganda",
    "Sri Lanka",
    "Germany",
    "UK",
    "Iran",
    "Argentina",
    "Trinidad and Tobago",
    "Peru",
    "UAE",
    "Turkey",
    "Egypt",
    "Thailand (Bangkok)",
    "Venezuela",
    "Italy",
    "New Zealand",
    "Nigeria",
    "Canada",
    "Cairo",
    "Freetown",
    "Douala",
    "Colombo",
    "Nairobi",
    "Mogadishu",
    "Port Harcourt",
    "Accra",
    "Harare",
    "Brazzaville",
    "Singapore",
    "Istanbul",
    "Rabat",
    "Kampala",
    "Kaduna",
    "Giza",
    "Kolwezi",
    "Abidjan",
    "Maputo",
    "Benin",
    "Aqaba",
    "Pretoria",
    "Jeddah",
    "Algiers",
    "Sharm el-Sheikh",
    "Soweto",
    "Abu Dhabi",
    "Dammam",
    "Zaria",
    "Conakry",
    "Durban",
    "Alexandria",
    "Bulawayo",
    "Byblos",
    "Lagos",
    "Dakar",
    "Omdurman",
    "Kano",
    "Khartoum",
    "Beirut",
    "Tripoli",
    "Ouagadougou",
    "Mecca",
    "Dar es Salaam",
    "Cairo",
    "Tehran",
    "Tel Aviv",
    "Manama",
    "Jerusalem",
    "Casablanca",
    "Fez",
    "Subra al-Haymah",
    "Lusaka",
    "Antananarivo",
    "Luanda",
    "Kinshasa",
    "Riyadh",
    "Lubumbashi",
    "Amman",
    "Bethlehem",
    "Johannesburg",
    "Ibadan",
    "Yaoundé",
    "Maiduguri",
    "Dubai",
    "Port Elizabeth",
    "Addis Ababa",
    "New York",
    "Muscat",
    "Mbuji-Mayi",
    "Cape Town",
    "Hong Kong",
    "Bamako",
    "Doha",
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
          Nickel Alloy Sheets, Plates & Coils | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Nickel Alloy Sheets, Plates & Coils Manufacturer. Nickel Alloy 200/201, Inconel, Monel, Hastelloy Sheets & Plates. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {sheetsPlates.badge ||
                  "GOVERNMENT RECOGNISED STAR EXPORT HOUSE"}
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
                  {/* ===== SHEETS, PLATES & COILS SECTION - ABOVE PRODUCT RANGE ===== */}
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      SHEETS, PLATES & COILS
                    </h4>
                    <ul className="space-y-0.5">
                      {sheetProducts.map((item) => (
                        <li key={item.slug}>
                          <Link
                            to={`/products/sheets-plates/${item.slug}`}
                            className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                              item.slug === "nickel-alloy-sheetsplates"
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
                              item.slug === "sheets-plates"
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
              {/* ===== BACK BUTTON - Navigate to Parent Route ===== */}
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/sheets-plates")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Sheets & Plates
                </button>
              </div>

              {/* ===== HERO IMAGE & HEADING ===== */}
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
                        "Nickel Alloy Sheets, Plates & Coils"}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {currentProduct?.shortDescription ||
                        "We manufacture & Export wide range of steel Sheets, Plates & Coils for quality end results."}
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

              {/* ===== PRODUCT IMAGE ===== */}
              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={nickelSheetImage}
                    alt="Nickel Alloy Sheets, Plates & Coils"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Nickel Alloy Sheets, Plates & Coils"}
                </p>
                <p>
                  Nickel Alloy Sheets, Nickel Alloy 200 / 201 Plates & Coils,
                  Nickel 200 Strip, Nickel Alloy 201 Flats Manufacturer &
                  Exporters from India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a Leading Manufacturer and Exporter of Nickel Alloy Sheets
                  & Plates from Mumbai.
                </p>
                <p>
                  The Sheets made from specially selected Nickel Alloy that we
                  bring forth are sourced from the prominent manufacturers.
                  Also, the entire wide range of our offerings complies with the
                  highest quality standards. Thus, while Buying Nickel Alloy
                  fabricated Sheets from us, buyers need not worry. We have
                  always been delivering and continue to deliver the best that
                  absolutely meets the requirements of the buyers as well as is
                  within their budget too.
                </p>
                <p>
                  Nickel Alloy Plates, Nickel sheets, Nickel alloy coils are
                  manufactured with the use of quality tested material available
                  in various grades. Nickel Alloy sheets are used for making
                  flanges, pipes and rods for chemical industries, civil
                  engineering and water treatment plants.
                </p>
                <p>
                  Nickel, long used as an alloying element in thousands of
                  alloys, is produced by an extensive range of companies
                  worldwide. Neon Alloys wide-ranging inventory of nickel alloy
                  sheets, plates, coils is available to meet applications that
                  entail excellent strength, even at soaring temperature, and
                  exceptional resistance to sternly corrosive environments.
                </p>
                <p>
                  Heat exchangers, Vessels, pipes, pumps, scrubbers, valves and
                  other equipment components used in the chemical,
                  petrochemical, marine engineering, hydrocarbon, oil and gas
                  extraction, thermal and food processing, pollution control and
                  power generation industries are some of the major applications
                  for these high-performance alloys.
                </p>
                <p>
                  Monel 400/K500 Plate, Inconel 600/625 Sheets, Incoloy 800/825
                  Sheets & Plates, Hastelloy B2/C22/C276 Coils, Flats & Rings,
                  Alloy 20 Hot & Cold Rolled Plates Supplier & Exporter in
                  India.
                </p>
              </div>

              {/* ===== GRADES LIST ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  High Nickel Alloy Sheets, Nickel Alloy Plates &{" "}
                  <span className="text-[#66BB6A]">
                    Nickel Alloy Coils/Flats/Rings
                  </span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 163 UNS 2200 (NICKEL 200)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 163 UNS 2201 (NICKEL 201)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 163 / 165 UNS 4400 (MONEL 400)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 464 UNS 8020 (ALLOY 20 / 20 CB 3)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 704/705 UNS 8825 INCONEL (825)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 167 / 517 UNS 6600 (INCONEL 600)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 167 UNS 6601 (INCONEL 601)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 704 /705 UNS 6625 (INCONEL 625)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#66BB6A] font-bold">•</span>
                      ASTM / ASME SB 619/622/626 UNS 10276 (HASTELLOY C 276)
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  High Nickel Alloy Sheets, Plates & Coils{" "}
                  <span className="text-[#66BB6A]">Specification</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 15NB
                        to 150NB In
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong> Sheet,
                        Plates, Coils, Flat, Strips, Profile, Blank, Circle,
                        Ring etc.
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Finish:</strong> Hot
                        rolled plate (HR), Cold rolled sheet (CR), 2B, 2D, BA
                        NO(8), SATIN (Met with Plastic Coated)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Coils,
                        Foils, Rolls, Plain Sheet, Strip, Flats, Blank (Circle),
                        Ring (Flange) etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== STANDARDS TABLE ===== */}
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
                          Nickel 200
                        </td>
                        <td className="px-4 py-2.5 text-sm">2.4066</td>
                        <td className="px-4 py-2.5 text-sm">N02200</td>
                        <td className="px-4 py-2.5 text-sm">NW 2200</td>
                        <td className="px-4 py-2.5 text-sm">N-100M</td>
                        <td className="px-4 py-2.5 text-sm">NA 11</td>
                        <td className="px-4 py-2.5 text-sm">НП-2</td>
                        <td className="px-4 py-2.5 text-sm">Ni 99.2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          Nickel 201
                        </td>
                        <td className="px-4 py-2.5 text-sm">2.4068</td>
                        <td className="px-4 py-2.5 text-sm">N02201</td>
                        <td className="px-4 py-2.5 text-sm">NW 2201</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">NA 12</td>
                        <td className="px-4 py-2.5 text-sm">НП-2</td>
                        <td className="px-4 py-2.5 text-sm">LC-Ni 99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of High Nickel Alloy Sheets &{" "}
                  <span className="text-[#66BB6A]">
                    Nickel Alloy Plates & Coils
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sheetsPlates.categories?.[0]?.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "nickel-alloy-sheets-plates-coils"
                          ? "border-[#66BB6A] bg-green-100"
                          : "border-green-200"
                      }`}
                    >
                      <Link
                        to={`/products/${activeCategory?.slug || "sheets-plates"}/${type.slug}`}
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
                  )) || (
                    <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                      <p className="text-sm text-slate-600">
                        Nickel Alloy 200 Sheets
                      </p>
                    </div>
                  )}
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Nickel Alloy 201 Plates
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Nickel Alloy 200 Coils
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Nickel Alloy 200 Flats
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">Nickel 200 Plates</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">Nickel 201 Sheets</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Monel 400/K500 Rings
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Inconel 600/625 Strip
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Inconel 800/825 Sheets
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Hastelloy B2/C22/C276 Plates
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Hastelloy B2/C22/C276 Circle
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5 border border-green-200">
                    <p className="text-sm text-slate-600">
                      Alloy 20 Sheets & Plates
                    </p>
                  </div>
                </div>
              </div>

              {/* ===== CONTACT BOX ===== */}
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

              {/* ===== EXPORT DESTINATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  EXPORT DESTINATIONS FOR NICKEL ALLOY SHEETS, NICKEL ALLOY
                  PLATES, NICKEL ALLOY COILS
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

export default NickelAlloySheetsPage;
