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
  PhoneCall,
} from "lucide-react";
import { MdOutlineWhatsapp } from "react-icons/md";
import pipesTubes from "../../data/productCategories/pipes-tubes";
import pipesTubesImage from "../../assets/productsImage/stain1.jpg";

const Stainless316Page = () => {
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

  const currentCategory = pipesTubes.categories.find(
    (cat) => cat.slug === categorySlug,
  );

  const activeCategory = currentCategory || pipesTubes.categories[0];

  const currentProduct = activeCategory.types?.find(
    (type) => type.slug === "316-stainless-steel-pipestubes",
  );

  const allDestinations = [
    "Democratic Republic of the Congo",
    "Mexico",
    "Kuwait",
    "Dubai",
    "Colombia",
    "Egypt",
    "Houston",
    "Malaysia",
    "Angola",
    "Uganda",
    "Cameroon",
    "Iran",
    "Saudi Arabia",
    "Argentina",
    "Sri Lanka",
    "Algeria",
    "Russia",
    "Chine",
    "UK",
    "Ethiopa",
    "UAE",
    "Africa",
    "Canada",
    "Australia",
    "London",
    "Trinidad and Tobago",
    "Israel",
    "Iraq",
    "Brazil",
    "Vietnam",
    "Azerbaijan",
    "New Zealand",
    "Turkey",
    "Sudan",
    "Germany",
    "Ghana",
    "United States",
    "Bahrain",
    "Thailand (Bangkok)",
    "Tunisia",
    "Jordan",
    "Peru",
    "Italy",
    "Kazakhstan",
    "Mozambique",
    "Indonesia",
    "Venezuela",
    "Nigeria",
    "Morocco",
    "South Africa",
    "Durban",
    "Mbuji-Mayi",
    "Port Harcourt",
    "Aqaba",
    "Luanda",
    "Lagos",
    "Tel Aviv",
    "Brazzaville",
    "Kolwezi",
    "Ibadan",
    "Ouagadougou",
    "Algiers",
    "Sharm el-Sheikh",
    "New York",
    "Pretoria",
    "Manama",
    "Subra al-Haymah",
    "Mecca",
    "Jeddah",
    "Harare",
    "Kaduna",
    "Bulawayo",
    "Soweto",
    "Singapore",
    "Kampala",
    "Istanbul",
    "Muscat",
    "Beirut",
    "Fez",
    "Dakar",
    "Kano",
    "Cairo",
    "Doha",
    "Benin",
    "Accra",
    "Tripoli",
    "Dar es Salaam",
    "Colombo",
    "Conakry",
    "Omdurman",
    "Yaoundé",
    "Khartoum",
    "Alexandria",
    "Casablanca",
    "Nairobi",
    "Tehran",
    "Mogadishu",
    "Giza",
    "Bamako",
    "Dubai",
    "Freetown",
    "Cairo",
    "Addis Ababa",
    "Hong Kong",
    "Johannesburg",
    "Abidjan",
    "Antananarivo",
    "Byblos",
    "Riyadh",
    "Rabat",
    "Abu Dhabi",
    "Maputo",
    "Maiduguri",
    "Kinshasa",
    "Zaria",
    "Amman",
    "Jerusalem",
    "Cape Town",
    "Dammam",
    "Lusaka",
    "Port Elizabeth",
    "Douala",
    "Bethlehem",
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
          Stainless Steel 316 Pipes & Tubes | Sunlight Forge & Fitting
        </title>
        <meta
          name="description"
          content="High Stainless Steel 316 Pipes & Tubes Manufacturer. SS UNS S31600 Seamless & Welded Pipes, Tubes. Export quality, best prices."
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
                                  type.slug === "316-stainless-steel-pipestubes"
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
              <div className="mb-4">
                <button
                  onClick={() => navigate("/products/pipes-tubes")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#46127B] text-white rounded-lg hover:bg-[#46127B]/90 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <ArrowLeft size={18} />
                  Back to Pipes & Tubes
                </button>
              </div>

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
                        "Stainless Steel 316 Pipes & Tubes"}
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

              <div className="mb-8 bg-white rounded-2xl p-4 border border-slate-200">
                <div className="flex justify-center">
                  <img
                    src={pipesTubesImage}
                    alt={
                      currentProduct?.title ||
                      "Stainless Steel 316 Pipes & Tubes"
                    }
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  {currentProduct?.title || "Stainless Steel 316 Pipes & Tubes"}
                </p>
                <p>
                  SS 316 Tubes, 316 Stainless Steel Pipes, SS UNS S31600 Pipes,
                  ASTM A312 Stainless Steel UNS S31600 Seamless Pipes & Welded
                  Tubes Supplier & Exporter in India.
                </p>
                <p>
                  <span className="font-semibold text-[#4A148C]">
                    {contactDetails.company}
                  </span>{" "}
                  are leading manufacturers of SS 316 Pipes & ss 316 Tubes for
                  Grade 316 which is the standard molybdenum-bearing grade with
                  austenitic properties. The molybdenum gives 316 better overall
                  corrosion resistant properties particularly higher resistance
                  to pitting and crevice corrosion in chloride environments. It
                  has excellent forming and welding characteristics.
                </p>
                <p>
                  These 316 pipes & tubes are developed from excellent
                  technology and are widely used in construction, oil & gas,
                  petrochemical, natural gas as well as other industries. These
                  are tested on various quality standards and are made available
                  in SEAMLESS, ERW, WELDED and FABRICATED forms.
                </p>
                <p>
                  These 316 pipes & tubes completely customized and packaged as
                  per the given specifications and esteemed demands of client's.
                  Our stainless 316 product includes tubes and pipes, SS 316
                  Pipes, SS 316 Tubes, Stainless 316 Seamless Pipes & Tubes etc.
                  These products are available at best possible prices which is
                  another important feature exhibited by our products range.
                </p>
                <p>
                  Stainless Steel 316 ERW Pipes, SS 316 Seamless Tubes, Steel
                  316 Welded Pipes, Stainless Steel 316 EFW Tubes, Stainless
                  ASTM A213 316 Seamless Pipes Manufacturer in India.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Stainless Steel 316 Seamless & Stainless Steel 316 Welded{" "}
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
                        Stainless Steel 316
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
                          Steel 316 Pipe & Tube:
                        </strong>{" "}
                        1/2" NB - 16" NB
                      </p>
                      <p>
                        <strong className="text-[#4A148C]">
                          EFW 316 Pipe & Tube:
                        </strong>{" "}
                        6" NB - 100" NB
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong className="text-[#4A148C]">
                          ERW 316 Pipe & Tube:
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
                          SS 316
                        </td>
                        <td className="px-4 py-2.5 text-sm">1.4401 / 1.4436</td>
                        <td className="px-4 py-2.5 text-sm">S31600</td>
                        <td className="px-4 py-2.5 text-sm">SUS 316</td>
                        <td className="px-4 py-2.5 text-sm">Z7CND17‐11‐02</td>
                        <td className="px-4 py-2.5 text-sm">316S31 / 316S33</td>
                        <td className="px-4 py-2.5 text-sm">-</td>
                        <td className="px-4 py-2.5 text-sm">
                          X5CrNiMo17-12-2 / X3CrNiMo17-13-3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  316 SS Pipes & Tubes{" "}
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
                        <td className="px-4 py-2.5 text-sm">8000</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Elastic Modulus (GPa)
                        </td>
                        <td className="px-4 py-2.5 text-sm">193</td>
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
                        <td className="px-4 py-2.5 text-sm">17.5</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Thermal Conductivity at 100°C (W/m.K)
                        </td>
                        <td className="px-4 py-2.5 text-sm">16.3</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 text-sm font-medium">
                          Thermal Conductivity at 500°C (W/m.K)
                        </td>
                        <td className="px-4 py-2.5 text-sm">21.5</td>
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
                        <td className="px-4 py-2.5 text-sm">740</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  316 Seamless / Welded / EFW / ERW Pipes & Tubes{" "}
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
                          316
                        </td>
                        <td className="px-4 py-2.5 text-sm">0.08 max</td>
                        <td className="px-4 py-2.5 text-sm">2.00 max</td>
                        <td className="px-4 py-2.5 text-sm">0.75 max</td>
                        <td className="px-4 py-2.5 text-sm">0.045 max</td>
                        <td className="px-4 py-2.5 text-sm">0.03 max</td>
                        <td className="px-4 py-2.5 text-sm">16.0 – 18.0</td>
                        <td className="px-4 py-2.5 text-sm">2.00 – 3.00</td>
                        <td className="px-4 py-2.5 text-sm">10.0 – 14.0</td>
                        <td className="px-4 py-2.5 text-sm">0.10 max</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Other Types of UNS S31600 Stainless Steel Pipes &{" "}
                  <span className="text-[#66BB6A]">
                    316 Stainless Steel Tubes
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCategory.types?.map((type) => (
                    <div
                      key={type.id}
                      className={`bg-green-50 rounded-xl p-5 border border-green-200 hover:border-[#66BB6A] transition-colors cursor-pointer `}
                    >
                      {/* ✅ Link removed — static text only */}
                      <p className="text-sm font-semibold text-[#4A148C]">
                        {type.title}
                      </p>
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
                  EXPORT DESTINATIONS FOR SS 316 PIPES, STEEL 316 PIPES, SS 316
                  TUBES, <br className="hidden sm:block" />
                  <span className="text-[#66BB6A]">
                    STEEL 316 SEAMLESS PIPES & TUBES
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

      {/* ===== FLOATING CALL AND WHATSAPP BUTTONS ===== */}
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

export default Stainless316Page;
