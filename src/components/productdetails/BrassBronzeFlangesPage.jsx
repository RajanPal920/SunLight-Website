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

const BrassBronzeFlangesPage = () => {
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
    (type) => type.slug === "brass-bronze-flanges",
  );

  const allDestinations = [
    "Ghana",
    "Israel",
    "Thailand (Bangkok)",
    "Iran",
    "Malaysia",
    "Mozambique",
    "South Africa",
    "London",
    "Uganda",
    "Tunisia",
    "Sudan",
    "Algeria",
    "Colombia",
    "United States",
    "Argentina",
    "Russia",
    "New Zealand",
    "Cameroon",
    "Africa",
    "Peru",
    "Venezuela",
    "Saudi Arabia",
    "Canada",
    "Sri Lanka",
    "Germany",
    "Vietnam",
    "Australia",
    "Azerbaijan",
    "Angola",
    "Brazil",
    "Kazakhstan",
    "Turkey",
    "Houston",
    "Morocco",
    "UAE",
    "Democratic Republic of the Congo",
    "Jordan",
    "Egypt",
    "Mexico",
    "Italy",
    "Chine",
    "Kuwait",
    "Dubai",
    "Iraq",
    "Indonesia",
    "Bahrain",
    "Nigeria",
    "Trinidad and Tobago",
    "UK",
    "Ethiopa",
    "Dakar",
    "Abidjan",
    "Khartoum",
    "Port Harcourt",
    "Yaoundé",
    "Maputo",
    "Omdurman",
    "Luanda",
    "Brazzaville",
    "Addis Ababa",
    "Kampala",
    "Johannesburg",
    "Tel Aviv",
    "Algiers",
    "Sharm el-Sheikh",
    "Singapore",
    "New York",
    "Accra",
    "Bulawayo",
    "Colombo",
    "Tripoli",
    "Cape Town",
    "Mogadishu",
    "Fez",
    "Casablanca",
    "Durban",
    "Kaduna",
    "Alexandria",
    "Harare",
    "Manama",
    "Tehran",
    "Conakry",
    "Mecca",
    "Aqaba",
    "Kano",
    "Dar es Salaam",
    "Cairo",
    "Mbuji-Mayi",
    "Antananarivo",
    "Bamako",
    "Benin",
    "Amman",
    "Dammam",
    "Giza",
    "Dubai",
    "Kolwezi",
    "Freetown",
    "Istanbul",
    "Jerusalem",
    "Douala",
    "Subra al-Haymah",
    "Maiduguri",
    "Nairobi",
    "Lusaka",
    "Lagos",
    "Cairo",
    "Beirut",
    "Doha",
    "Ibadan",
    "Abu Dhabi",
    "Muscat",
    "Riyadh",
    "Byblos",
    "Port Elizabeth",
    "Hong Kong",
    "Jeddah",
    "Rabat",
    "Soweto",
    "Pretoria",
    "Lubumbashi",
    "Kinshasa",
    "Ouagadougou",
    "Bethlehem",
    "Zaria",
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
          Brass Flanges Manufacturer, Bronze Slip on Flanges Exporter, Brass
          Alloy Blind Flanges Suppliers
        </title>
        <meta
          name="description"
          content="Brass Flanges Manufacturer, Bronze Slip on Flanges Exporter, Brass Alloy Blind Flanges Suppliers. Brass & Bronze Flanges for construction and automobile industry."
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
                                type.slug === "brass-bronze-flanges"
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
                      Brass Flanges / Bronze Flange
                    </h1>
                    <p className="mt-3 text-white/80 text-sm sm:text-base">
                      Brass Pipe Flanges, Bronze Slip on Flanges, Brass Blind
                      Flanges, Threaded Flange, Bronze Plates Flanges
                      Manufacturer in India.
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
                    alt="Brass and Bronze Flanges"
                    className="w-full max-w-2xl h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Product Description */}
              <div className="space-y-4 text-slate-700 leading-relaxed bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
                <p className="text-lg font-semibold text-[#4A148C]">
                  Brass Flanges / Bronze Flange
                </p>
                <p>
                  leader Manufacturers and Exporters of high quality Brass
                  Flanges
                </p>
                <p>
                  We are one of the leading manufacturers & exporter of Bronze &
                  Brass flanges, we made of Bronze & Brass flanges with include
                  forging and casting. Also, we can produce as per your drawings
                  and specifications. These Bronze & Brass flanges are
                  manufactured by making use of quality-approved components
                  under the observation of highly experience technocrats in
                  accordance to quality standards.
                </p>
                <p>
                  These products are rigidly tested on various quality
                  parameters to provide a defect free range in the market.
                  Offered range is applicable for construction and automobile
                  industry.
                </p>
                <p>
                  Brass Flanges, Bronze Orifice Flanges, Bronze Forged Flanges,
                  Brass Socket weld Flanges, Bronze Reducing Flanges Supplier in
                  India.
                </p>
              </div>

              {/* Specification Section */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Brass Flanges & Bronze Pipe Flange{" "}
                  <span className="text-[#66BB6A]">Specifications</span>
                </h2>

                <div className="bg-green-50 rounded-2xl p-6 sm:p-8 border border-green-200">
                  <div className="space-y-3">
                    <p className="font-semibold text-[#4A148C]">
                      Brass parts for Water solar heater collector panel
                      manufacturing
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p>
                          <strong>Open flange</strong>
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
                          <li>Thickness - 3 mm / 3.5 mm / 4 mm</li>
                          <li>Matl- brass / aluminum /mild steel</li>
                        </ul>
                      </div>
                      <div>
                        <p>
                          <strong>Close flange</strong>
                        </p>
                        <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
                          <li>Thickness - 3 mm / 3.5 mm</li>
                          <li>Matl- brass / aluminum /mild steel</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p>
                        <strong>Threaded flange</strong>
                      </p>
                      <ul className="list-disc list-inside text-sm text-slate-600 ml-2">
                        <li>Size - 1" / 1/2" / 3/4"</li>
                        <li>Matl- brass / aluminum /mild steel</li>
                      </ul>
                    </div>
                    <p>
                      <strong>Ratings:</strong> PN16, CL150.{" "}
                      <strong>Face:</strong> R/F, F/F.
                    </p>
                  </div>
                </div>
              </div>

              {/* Types of Flanges */}
              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#4A148C] text-center mb-6">
                  Types of Brass Flanges &{" "}
                  <span className="text-[#66BB6A]">Bronze Flange</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    "Brass Blind Flanges",
                    "Bronze Plate Flanges",
                    "Brass ASME Flanges",
                    "Brass Reducing Flanges",
                    "Bronze Weld Neck Flanges",
                    "Brass Industrial Flanges",
                    "Brass Threaded Flanges",
                    "Brass Lap Joint Flanges",
                    "Bronze Long weld Neck Flanges",
                    "Brass Slip-On Flanges",
                    "Brass Socket Weld Flanges",
                    "Bronze Orifice Flanges",
                    "Brass Alloy Flat Flanges",
                    "Bronze DIN Flanges",
                    "Bronze ANSI Flanges",
                    "Brass BLRF Flanges",
                    "Bronze Flanges",
                    "Brass Forged Flanges",
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
                  EXPORT DESTINATIONS FOR BRASS FLANGES, BRONZE PIPE FLANGES
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

export default BrassBronzeFlangesPage;
