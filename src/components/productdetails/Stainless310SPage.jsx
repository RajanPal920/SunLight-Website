import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Factory,
  ExternalLink,
  Menu,
  Globe,
  ChevronRight,
} from "lucide-react";
import pipesTubes from "../../data/productCategories/pipes-tubes";

const Stainless310SPage = () => {
  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
    address:
      "Office No. 8, Ground Floor, Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004",
    website: "www.sunlightforgefitting.com",
  };

  const { categorySlug } = useParams();

  const currentCategory = pipesTubes.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || pipesTubes.categories[0];

  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "310s-stainless-steel-pipestubes",
  );

  const allDestinations = [
    "Venezuela",
    "Indonesia",
    "Cameroon",
    "Germany",
    "Morocco",
    "Dubai",
    "Egypt",
    "Uganda",
    "Jordan",
    "Brazil",
    "Bahrain",
    "Democratic Republic of the Congo",
    "Angola",
    "New Zealand",
    "Algeria",
    "Colombia",
    "Australia",
    "Argentina",
    "Sri Lanka",
    "South Africa",
    "Sudan",
    "Malaysia",
    "Trinidad and Tobago",
    "Iran",
    "Italy",
    "Houston",
    "Turkey",
    "Canada",
    "Russia",
    "United States",
    "Nigeria",
    "Mozambique",
    "Mexico",
    "UAE",
    "Israel",
    "Tunisia",
    "Kazakhstan",
    "Iraq",
    "Thailand (Bangkok)",
    "Saudi Arabia",
    "Vietnam",
    "Africa",
    "Chine",
    "Kuwait",
    "Peru",
    "London",
    "Ethiopa",
    "Ghana",
    "Azerbaijan",
    "UK",
    "Lagos",
    "Benin",
    "Jerusalem",
    "Bethlehem",
    "Abidjan",
    "Kano",
    "Kampala",
    "Subra al-Haymah",
    "Cairo",
    "Ibadan",
    "Singapore",
    "Port Elizabeth",
    "Luanda",
    "Kolwezi",
    "Cape Town",
    "New York",
    "Byblos",
    "Dammam",
    "Mecca",
    "Bulawayo",
    "Omdurman",
    "Accra",
    "Maputo",
    "Sharm el-Sheikh",
    "Khartoum",
    "Port Harcourt",
    "Istanbul",
    "Beirut",
    "Maiduguri",
    "Algiers",
    "Kinshasa",
    "Addis Ababa",
    "Riyadh",
    "Dakar",
    "Zaria",
    "Dar es Salaam",
    "Antananarivo",
    "Douala",
    "Harare",
    "Fez",
    "Tel Aviv",
    "Conakry",
    "Soweto",
    "Rabat",
    "Colombo",
    "Pretoria",
    "Manama",
    "Muscat",
    "Alexandria",
    "Hong Kong",
    "Tehran",
    "Cairo",
    "Abu Dhabi",
    "Kaduna",
    "Johannesburg",
    "Durban",
    "Lubumbashi",
    "Aqaba",
    "Freetown",
    "Tripoli",
    "Ouagadougou",
    "Mbuji-Mayi",
    "Nairobi",
    "Brazzaville",
    "Bamako",
    "Lusaka",
    "Jeddah",
    "Giza",
    "Mogadishu",
    "Doha",
    "Amman",
    "Dubai",
    "Yaoundé",
    "Casablanca",
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
          Stainless Steel 310S Pipes & Tubes | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Stainless Steel 310S Pipes & Tubes Manufacturer. SS UNS S31008 Seamless & Welded Pipes, Tubes. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {pipesTubes.badge}
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
                  <div>
                    <h4 className="text-xs font-bold text-[#4A148C] uppercase tracking-wider mb-2 border-b-2 border-[#66BB6A] pb-1">
                      PIPES & TUBES
                    </h4>
                    {pipesTubes.categories.map((category) => (
                      <div key={category.id} className="mb-2">
                        <h5 className="text-xs font-semibold text-[#4A148C] ml-2 mb-1">
                          {category.title}
                        </h5>
                        <ul className="space-y-0.5 ml-4">
                          {category.types?.map((type) => (
                            <li key={type.id}>
                              <Link
                                to={`/products/${category.slug}/${type.slug}`}
                                className={`text-xs text-slate-600 hover:text-[#66BB6A] hover:bg-green-50 transition-all duration-200 block py-1 px-2 rounded ${
                                  type.slug ===
                                  "310s-stainless-steel-pipestubes"
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
                  </div>

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
                              item.slug === "pipes-tubes"
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
                        "Stainless Steel 310S Pipes & Tubes"}
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      {activeCategory.description}
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

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title ||
                    "Stainless Steel 310S Pipes & Tubes"}
                </p>
                <p>
                  SS 310S Tubes, 310S Stainless Steel Pipes, SS UNS S31008
                  Pipes, ASTM A312 Stainless Steel werkstoff nr. 1.4845 Seamless
                  Pipes & Welded Tubes Supplier & Exporter in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  are one of the leading exporter & supplier of stainless steel
                  310S pipe & tubes. Our goal is to fulfill the highest
                  expectations of our customers for delivery and product quality
                  of 310S Stainless Steel Pipes & Tubes.
                </p>
                <p>
                  310S is an austenitic heat resistant alloy with excellent
                  resistance to oxidation under mildly cyclic conditions through
                  2000ºF. Its high chromium and nickel contents provide
                  comparable corrosion resistance, superior resistance to
                  oxidation and the retention of a larger fraction of room
                  temperature strength than the common austenitic alloys like
                  304.
                </p>
                <p>
                  310 Stainless Steel Seamless Pipes & Tubes & OCTG, CRA
                  (Corrosion-Resistant Alloy) Seamless Tubes, Stainless Steel,
                  Super Duplex, Duplex, Welded & Seamless, Carbon Steel Seamless
                  Pipes, Tubes, Capillary Pipes & 'U' Tubes.
                </p>
                <p>
                  These 310S SS Pipes & 310S SS Tubes are used in oil & gas,
                  LNG, Thermal & Nuclear Power Plants, Chemical Industries,
                  Fertilizers Plants, (petro) chemical, shipbuilding,
                  desalination, water treatment, energy industries, EPC and
                  Pipes for General Engineering Purpose.
                </p>
                <p>
                  Stainless Steel 310S ERW Pipes, SS 310S Seamless Tubes, Steel
                  310S Welded Pipes, Stainless Steel 310S EFW Tubes, Stainless
                  ASTM A213 310S Seamless Pipes Manufacturer in India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 310S Seamless & Stainless Steel 310S Welded{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    Pipes & Tubes Specifications:
                  </span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Stainless Steel 310S
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Standard:</strong>{" "}
                        ASTM / ASME SA213 / A249 / A269 / A312 / A358 CL. I to V
                        ASTM A789/A790
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong> 1/8″NB
                        TO 30″NB IN
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          Steel 310S Pipe & Tube:
                        </strong>{" "}
                        1/2" NB - 16" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          EFW 310S Pipe & Tube:
                        </strong>{" "}
                        6" NB - 100" NB
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          ERW 310S Pipe & Tube:
                        </strong>{" "}
                        1/2" NB - 24" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Rectangular, Hydraulic Etc
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Type:</strong>{" "}
                        Seamless / ERW / Welded / Fabricated / EFW
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Schedule:</strong>{" "}
                        SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH80,
                        SCH120, SCH140, SCH160, XXS
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">End:</strong> Plain
                        End, Beveled End, Treaded
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Length:</strong>{" "}
                        Single Random, Double Random & Cut Length.
                      </p>
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
                          SS 310S
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4845</td>
                        <td className="px-4 py-2.5 text-sm">S31008</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  310S SS Pipes & Tubes{" "}
                  <span className="text-[#66BB6A]">Physical Properties</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Property
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Value
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Density (kg/m³)
                        </td>
                        <td className="px-4 py-2.5 text-sm">7750</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Elastic Modulus (GPa)
                        </td>
                        <td className="px-4 py-2.5 text-sm">200</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Mean Coefficient of Thermal Expansion (m/m/°C) 0-100°C
                        </td>
                        <td className="px-4 py-2.5 text-sm">15.9</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Mean Coefficient of Thermal Expansion (m/m/°C) 0-315°C
                        </td>
                        <td className="px-4 py-2.5 text-sm">16.2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Mean Coefficient of Thermal Expansion (m/m/°C) 0-538°C
                        </td>
                        <td className="px-4 py-2.5 text-sm">17.0</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Thermal Conductivity at 100°C (W/m.K)
                        </td>
                        <td className="px-4 py-2.5 text-sm">14.2</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Thermal Conductivity at 500°C (W/m.K)
                        </td>
                        <td className="px-4 py-2.5 text-sm">18.7</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Specific Heat 0-100°C (J/kg.K)
                        </td>
                        <td className="px-4 py-2.5 text-sm">500</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Electrical Resistivity (n.m)
                        </td>
                        <td className="px-4 py-2.5 text-sm">720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  310S Seamless / Welded / EFW / ERW Pipes & Tubes{" "}
                  <span className="text-[#66BB6A]">Chemical Composition</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Grade
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          C
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Mn
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Si
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          P
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          S
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Cr
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Mo
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          Ni
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          N
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          310S
                        </td>
                        <td className="px-4 py-2.5 text-sm">0.08 max</td>
                        <td className="px-4 py-2.5 text-sm">2.00 max</td>
                        <td className="px-4 py-2.5 text-sm">1.50 max</td>
                        <td className="px-4 py-2.5 text-sm">0.045 max</td>
                        <td className="px-4 py-2.5 text-sm">0.030 max</td>
                        <td className="px-4 py-2.5 text-sm">24.0 – 26.0</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">19.0 – 22.0</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of UNS S31008 Stainless Steel Pipes &{" "}
                  <span className="text-[#66BB6A]">
                    310S Stainless Steel Tubes
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "310s-stainless-steel-pipestubes"
                          ? "border-[#66BB6A] bg-green-100"
                          : "border-green-200"
                      }`}
                    >
                      <Link
                        to={`/products/${activeCategory.slug}/${type.slug}`}
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
                  EXPORT DESTINATIONS FOR SS 310S PIPES, STEEL 310S PIPES, SS
                  310S TUBES, <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    STEEL 310S SEAMLESS PIPES & TUBES
                  </span>
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

export default Stainless310SPage;
