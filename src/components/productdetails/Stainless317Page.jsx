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

const Stainless317Page = () => {
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
    (type) => type.slug === "317-stainless-steel-pipestubes",
  );

  const allDestinations = [
    "Russia",
    "Democratic Republic of the Congo",
    "Ethiopa",
    "Houston",
    "Thailand (Bangkok)",
    "Tunisia",
    "Azerbaijan",
    "Nigeria",
    "Dubai",
    "Saudi Arabia",
    "Kuwait",
    "Ghana",
    "Iran",
    "Vietnam",
    "Malaysia",
    "Turkey",
    "Trinidad and Tobago",
    "Sudan",
    "Mozambique",
    "London",
    "Israel",
    "Egypt",
    "Jordan",
    "Italy",
    "Peru",
    "Morocco",
    "UK",
    "New Zealand",
    "Indonesia",
    "Uganda",
    "Sri Lanka",
    "Africa",
    "Kazakhstan",
    "Algeria",
    "United States",
    "Australia",
    "Venezuela",
    "South Africa",
    "Chine",
    "Cameroon",
    "UAE",
    "Iraq",
    "Bahrain",
    "Germany",
    "Argentina",
    "Angola",
    "Colombia",
    "Brazil",
    "Mexico",
    "Canada",
    "Byblos",
    "Douala",
    "Manama",
    "Benin",
    "Luanda",
    "Yaoundé",
    "Conakry",
    "Addis Ababa",
    "Nairobi",
    "Alexandria",
    "Pretoria",
    "Brazzaville",
    "Lagos",
    "Doha",
    "Abidjan",
    "Khartoum",
    "Cairo",
    "Abu Dhabi",
    "Dar es Salaam",
    "Soweto",
    "Kolwezi",
    "Tehran",
    "Kaduna",
    "Fez",
    "Sharm el-Sheikh",
    "Subra al-Haymah",
    "Antananarivo",
    "Freetown",
    "Kampala",
    "Harare",
    "Mbuji-Mayi",
    "Kano",
    "Dammam",
    "Lusaka",
    "Muscat",
    "Lubumbashi",
    "Kinshasa",
    "Jerusalem",
    "Cairo",
    "Giza",
    "Casablanca",
    "Johannesburg",
    "Mogadishu",
    "Maiduguri",
    "New York",
    "Omdurman",
    "Colombo",
    "Port Elizabeth",
    "Durban",
    "Bethlehem",
    "Dubai",
    "Bamako",
    "Riyadh",
    "Dakar",
    "Cape Town",
    "Port Harcourt",
    "Aqaba",
    "Jeddah",
    "Amman",
    "Ibadan",
    "Tel Aviv",
    "Mecca",
    "Algiers",
    "Ouagadougou",
    "Hong Kong",
    "Maputo",
    "Istanbul",
    "Beirut",
    "Rabat",
    "Zaria",
    "Bulawayo",
    "Tripoli",
    "Singapore",
    "Accra",
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
          Stainless Steel 317 Pipes & Tubes | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Stainless Steel 317 Pipes & Tubes Manufacturer. SS UNS S31700 Seamless & Welded Pipes, Tubes. Export quality, best prices."
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
                                  type.slug === "317-stainless-steel-pipestubes"
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
                        "Stainless Steel 317 Pipes & Tubes"}
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
                  {currentProduct?.title || "Stainless Steel 317 Pipes & Tubes"}
                </p>
                <p>
                  SS 317 Tubes, 317 Stainless Steel Pipes, SS UNS S31700 Pipes,
                  ASTM A312 Stainless Steel WRN 1.4449 Seamless Pipes & Welded
                  Tubes Supplier & Exporter in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  manufacturer & export Stainless Steel 317 Pipes and Tubes for
                  engineering purpose, ERW pipes & tubes for water, gas &
                  sewerage and various automotive & industrial applications.
                </p>
                <p>
                  These 317 pipes & tubes are tested on different quality
                  parameters and are available in SEAMLESS, ERW, WELDED and
                  FABRICATED forms. We strictly follow the set industrial
                  standards and norms in order to come up with high-grade AISI
                  317 Stainless Steel Seamless Pipes & Tubes. Our SS 317 pipes
                  and tubes can easily withstand corrosion, extreme temperature
                  and chemicals.
                </p>
                <p>
                  These pipes & tubes are used across different industries like
                  construction, plumbing, etc. & are capable of offering
                  excellent performance in the most adverse environments. These
                  pipes & tubes are available in various sizes, shapes as per
                  the requirements of our clients. These pipes & Tubes are
                  offered at very reasonable rates to our clients.
                </p>
                <p>
                  Our stainless steel 317 products includes tubes and pipes, SS
                  317 Pipes, SS 317 Tubes, Stainless 317 Seamless Pipes & Tubes
                  etc. These products are available at best possible prices
                  which is another important feature exhibited by our products
                  range.
                </p>
                <p>
                  Stainless Steel 317 ERW Pipes, SS 317 Seamless Tubes, Steel
                  317 Welded Pipes, Stainless Steel 317 EFW Tubes, Stainless
                  ASTM A213 317 Seamless Pipes Manufacturer in India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 317 Seamless & Stainless Steel 317 Welded{" "}
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
                        Stainless Steel 317
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
                          Steel 317 Pipe & Tube:
                        </strong>{" "}
                        1/2" NB - 16" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          EFW 317 Pipe & Tube:
                        </strong>{" "}
                        6" NB - 100" NB
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          ERW 317 Pipe & Tube:
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
                          STANDARD
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          WERKSTOFF NR.
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">
                          UNS
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-bold text-[#4A148C]">
                          SS 317
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4449</td>
                        <td className="px-4 py-2.5 text-sm">S31700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  317 SS Pipes & Tubes{" "}
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
                          Specific Heat (0-100°C)
                        </td>
                        <td className="px-4 py-2.5 text-sm">500 J.kg⁻¹.°K⁻¹</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Thermal Conductivity
                        </td>
                        <td className="px-4 py-2.5 text-sm">14.6 W.m⁻¹.°K⁻¹</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Thermal Expansion
                        </td>
                        <td className="px-4 py-2.5 text-sm">16.5 mm/m/°C</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Modulus Elasticity
                        </td>
                        <td className="px-4 py-2.5 text-sm">193 GPa</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Electrical Resistivity
                        </td>
                        <td className="px-4 py-2.5 text-sm">7.4 μohm/cm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Density
                        </td>
                        <td className="px-4 py-2.5 text-sm">7.99 g/cm³</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  317 Seamless / Welded / EFW / ERW Pipes & Tubes{" "}
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
                          317
                        </td>
                        <td className="px-4 py-2.5 text-sm">0.08 max</td>
                        <td className="px-4 py-2.5 text-sm">2.00 max</td>
                        <td className="px-4 py-2.5 text-sm">1.00 max</td>
                        <td className="px-4 py-2.5 text-sm">0.040 max</td>
                        <td className="px-4 py-2.5 text-sm">0.03 max</td>
                        <td className="px-4 py-2.5 text-sm">18.0 – 20.0</td>
                        <td className="px-4 py-2.5 text-sm">3.0 – 4.0</td>
                        <td className="px-4 py-2.5 text-sm">11.0 – 14.0</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of UNS S31700 Stainless Steel Pipes &{" "}
                  <span className="text-[#66BB6A]">
                    317 Stainless Steel Tubes
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border ${
                        type.slug === "317-stainless-steel-pipestubes"
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
                  EXPORT DESTINATIONS FOR SS 317 PIPES, STEEL 317 PIPES, SS 317
                  TUBES, <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    STEEL 317 SEAMLESS PIPES & TUBES
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

export default Stainless317Page;
