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

const NickelAlloy201Page = () => {
  // Updated contact details
  const contactDetails = {
    phone: "+91 96369 01159",
    email: "sunlight.barmer@gmail.com",
    company: "Sunlight Forge & Fitting Pvt. Ltd.",
    address:
      "Office No. 8, Ground Floor, Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004",
    website: "www.sunlightforgefitting.com",
  };

  // Get the current category from URL params
  const { categorySlug } = useParams();

  // Find the current category data
  const currentCategory = pipesTubes.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  // If no category is selected, use the first one (Nickel Alloy)
  const activeCategory = currentCategory || pipesTubes.categories[0];

  // Find the specific product type (Nickel Alloy 201)
  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "nickel-alloy-201-pipestubes",
  );

  // All export destinations merged into a single array
  const allDestinations = [
    "Canada",
    "Uganda",
    "Australia",
    "Kuwait",
    "Ethiopa",
    "Saudi Arabia",
    "Colombia",
    "London",
    "Sri Lanka",
    "Russia",
    "Cameroon",
    "Germany",
    "Brazil",
    "Egypt",
    "Vietnam",
    "Israel",
    "Iran",
    "Azerbaijan",
    "Turkey",
    "Malaysia",
    "UK",
    "Mozambique",
    "Thailand (Bangkok)",
    "UAE",
    "Africa",
    "Morocco",
    "Sudan",
    "Tunisia",
    "Iraq",
    "Peru",
    "Ghana",
    "Indonesia",
    "Democratic Republic of the Congo",
    "Angola",
    "Kazakhstan",
    "New Zealand",
    "Italy",
    "United States",
    "Houston",
    "Venezuela",
    "Trinidad and Tobago",
    "Algeria",
    "Mexico",
    "Chine",
    "Dubai",
    "Nigeria",
    "Argentina",
    "South Africa",
    "Jordan",
    "Bahrain",
    "Dammam",
    "Luanda",
    "Cairo",
    "Hong Kong",
    "Alexandria",
    "Dar es Salaam",
    "Port Harcourt",
    "Muscat",
    "Pretoria",
    "Lusaka",
    "Johannesburg",
    "Brazzaville",
    "Byblos",
    "Rabat",
    "Conakry",
    "Fez",
    "Zaria",
    "Kaduna",
    "Ibadan",
    "Kinshasa",
    "Accra",
    "Giza",
    "Mecca",
    "Dakar",
    "Maiduguri",
    "Amman",
    "Ouagadougou",
    "Doha",
    "Port Elizabeth",
    "Lubumbashi",
    "Colombo",
    "New York",
    "Jeddah",
    "Nairobi",
    "Casablanca",
    "Maputo",
    "Tripoli",
    "Lagos",
    "Bethlehem",
    "Benin",
    "Jerusalem",
    "Abidjan",
    "Soweto",
    "Kampala",
    "Abu Dhabi",
    "Sharm el-Sheikh",
    "Douala",
    "Mbuji-Mayi",
    "Istanbul",
    "Khartoum",
    "Omdurman",
    "Singapore",
    "Freetown",
    "Antananarivo",
    "Tel Aviv",
    "Tehran",
    "Algiers",
    "Subra al-Haymah",
    "Cape Town",
    "Aqaba",
    "Bulawayo",
    "Addis Ababa",
    "Manama",
    "Mogadishu",
    "Riyadh",
    "Durban",
    "Beirut",
    "Kolwezi",
    "Kano",
    "Harare",
    "Yaoundé",
    "Bamako",
  ];

  // Product Range data
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
        <title>Nickel Alloy 201 Pipes & Tubes | Sunlight Forge & Fitting</title>
        <meta
          name="description"
          content="High Nickel Alloy 201 Pipes & Tubes Manufacturer. UNS N02201 Seamless & Welded Pipes, Tubes. Export quality, best prices."
        />
      </Helmet>

      <div className="bg-white min-h-screen">
        {/* ===== GOVERNMENT BADGE ===== */}
        <div className="bg-[#4A148C] py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="inline-block text-[#66BB6A] font-bold text-xs tracking-[0.15em] px-6 py-1 rounded-full border border-[#66BB6A] uppercase">
                {pipesTubes.badge}
              </div>
            </div>
          </div>
        </div>

        {/* ===== MAIN CONTENT WITH SIDEBAR ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* ===== SIDEBAR - PRODUCT CATEGORIES ===== */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden sticky top-4">
                <div className="bg-[#4A148C] px-5 py-4">
                  <h3 className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                    <Menu className="w-4 h-4" />
                    PRODUCT CATEGORIES
                  </h3>
                </div>

                <div className="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                  {/* Pipes & Tubes Categories */}
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
                                  type.slug === "nickel-alloy-201-pipestubes"
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

            {/* ===== MAIN CONTENT AREA ===== */}
            <div className="flex-1 min-w-0 pt-4">
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
                        "Nickel Alloy 201 Pipes & Tubes"}
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

              {/* ===== PRODUCT DESCRIPTION ===== */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title || "Nickel Alloy 201 Pipes & Tubes"}
                </p>
                <p>
                  {currentProduct?.title || "Nickel Alloy 201 Pipes & Tubes"} -
                  Manufacturers & Exporters of Nickel Alloy 201 Pipes & Tubes,
                  Nickel Alloy UNS N02201 Seamless Pipes & Seamless Tubes,
                  Nickel 201 Welded Pipes & Welded Tubes in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  is a well-known manufacturer & Exporters of Nickel 201 Pipe &
                  Tubes. Nickel 201 Pipe are usually used in industries such as
                  construction, oil extraction, medicine, food, paper,
                  machinery, chemicals, food containers and others.
                </p>
                <p>
                  Nickel Alloy 201 is technically pure nickel with good
                  mechanical properties and excellent resistance to alkali
                  hydroxides as well as organic compositions. Even when exposed
                  to high temperature. Alloy 201 retain its strength and is
                  ductile at low temperature.
                </p>
                <p>
                  The Nickel 201 Pipes & Tubes are manufactured to sustain very
                  high pressure and product warranty. The main reason being we
                  have an excellent warehousing and storage facilities for both
                  finished and semi finish goods.
                </p>
                <p>
                  Designed as per international and national standards, these
                  Nickel 201 Seamless Pipes & Tubes are offered in customized
                  length sizes and shapes to our esteemed clients. Also referred
                  as UNS N02201, we offer these Nickel Seamless Pipes & Tubes at
                  best possible rates in the market.
                </p>
                <p>
                  Our product includes tubes and pipes, Nickel 201 Pipes, Nickel
                  201 Tubes, Nickel 201 Seamless Pipes & Tubes etc. These
                  products are available at best possible prices which is
                  another important feature exhibited by our products range.
                </p>
              </div>

              {/* ===== SPECIFICATIONS ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Nickel 201 Seamless & Nickel 201 Welded{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    Pipes & Tubes Specification:
                  </span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Grade:</strong>{" "}
                        Nickel 201 (UNS N02201)
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Size:</strong>{" "}
                        Seamless 1/2" - 10", Welded 1/2" - 48"
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">Types:</strong>{" "}
                        Seamless / ERW / Welded / Fabricated / LSAW Pipes
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">Form:</strong> Round,
                        Square, Rectangular, Hydraulic Etc.
                      </p>
                      {currentProduct?.specs && (
                        <div className="mt-2">
                          <p>
                            <strong className="text-[#4A148C]">
                              Standards:
                            </strong>
                          </p>
                          <ul className="list-disc list-inside text-sm text-slate-600">
                            {currentProduct.specs.map((spec, idx) => (
                              <li key={idx}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4 pt-4 border-t border-green-200 text-sm">
                    Nickel 201 Pipes, Nickel 201 Tubes, Nickel Alloy Werkstoff
                    Nr.2.4068 Seamless Pipes & Tubes, Nickel 201 Welded Pipes
                    Supplier, Nickel Alloy 201 EFW / ERW Pipes & Tubes Exporter
                    in India.
                  </p>
                </div>
              </div>

              {/* ===== CHEMICAL COMPOSITION ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  High Nickel 201 Pipes & Tubes UNS N02201 Pipes{" "}
                  <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">Chemical Composition</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <thead>
                      <tr className="bg-[#4A148C] text-white">
                        <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
                          Element
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-bold uppercase tracking-wider">
                          % (max / min)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Ni</td>
                        <td className="px-6 py-2.5 text-sm">99.0 min</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Fe</td>
                        <td className="px-6 py-2.5 text-sm">0.4 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">C</td>
                        <td className="px-6 py-2.5 text-sm">0.02 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Mn</td>
                        <td className="px-6 py-2.5 text-sm">0.35 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Si</td>
                        <td className="px-6 py-2.5 text-sm">0.1 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Cu</td>
                        <td className="px-6 py-2.5 text-sm">0.25 max</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Mg</td>
                        <td className="px-6 py-2.5 text-sm">—</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">Ti</td>
                        <td className="px-6 py-2.5 text-sm">—</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-2.5 text-sm font-medium">S</td>
                        <td className="px-6 py-2.5 text-sm">0.01 max</td>
                      </tr>
                    </tbody>
                  </table>
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
                          Nickel 201
                        </td>
                        <td className="px-4 py-2.5 text-sm">N02201</td>
                        <td className="px-4 py-2.5 text-sm">2.4068</td>
                        <td className="px-4 py-2.5 text-sm">Ni 99.2</td>
                        <td className="px-4 py-2.5 text-sm">NA 11</td>
                        <td className="px-4 py-2.5 text-sm">НП-2</td>
                        <td className="px-4 py-2.5 text-sm">NW 2201</td>
                        <td className="px-4 py-2.5 text-sm">N-100M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== OTHER TYPES ===== */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of {activeCategory.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "nickel-alloy-200-pipestubes"
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
                  EXPORT DESTINATIONS FOR NICKEL ALLOY 201 PIPES, ALLOY 201
                  TUBES, <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    NICKEL ALLOY 201 SEAMLESS PIPES, ALLOY 201 WELDED TUBES
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

export default NickelAlloy201Page;
