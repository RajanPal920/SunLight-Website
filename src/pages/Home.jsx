// src/pages/Home/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Clock3,
  CheckCircle,
  Building2,
  Factory,
  Ship,
  Zap,
  Pill,
  Utensils,
  Waves,
  Car,
  Gauge,
  FileText,
  Download,
  Users,
  Package,
  TrendingUp,
  MapPin,
  Award,
  Truck,
  Headphones,
  Layers,
  ChevronRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Import components
import Cards from "../components/home/Cards";
import { Helmet } from "react-helmet-async";

// home images
import hero from "../assets/logo/home-hero.jpeg";
import hero2 from "../assets/logo/home-hero2.jpeg";
import hero3 from "../assets/logo/home-hero3.jpeg";
import hero4 from "../assets/logo/home-hero4.jpeg";
import hero5 from "../assets/logo/home-hero5.jpeg";

// Third-party logos
import abslogo from "../assets/thridPart-logo/abs-logo.png";
import bureaulogo from "../assets/thridPart-logo/bureau-veritas.png";
import dnvlogo from "../assets/thridPart-logo/DNV-LOGO.png";
import irclasslogo from "../assets/thridPart-logo/irclass.png";
import lloydlogo from "../assets/thridPart-logo/lloyd.jpg";
import sgslogo from "../assets/thridPart-logo/sgs.png";
import tuvlogo from "../assets/thridPart-logo/tuv-logo.png";
import uhdelogo from "../assets/thridPart-logo/UHDE.png";

// Partners logos
import partner41 from "../assets/thridPart-logo/partner-44.jpg";
import partner45 from "../assets/thridPart-logo/partner-45.jpg";
import partner48 from "../assets/thridPart-logo/partner-48.jpg";
import partner49 from "../assets/thridPart-logo/partner-49.jpg";
import partner50 from "../assets/thridPart-logo/partner-50.jpg";
import partner51 from "../assets/thridPart-logo/partner-51.jpg";
import partner53 from "../assets/thridPart-logo/partner-53.jpg";
import partner55 from "../assets/thridPart-logo/partner-55.jpg";

// Industries images
import oil from "../assets/industriesImage/oil.png";
import cement from "../assets/industriesImage/cement.png";
import energy from "../assets/industriesImage/energy.png";
import food from "../assets/industriesImage/food.png";
import pharma from "../assets/industriesImage/pharma.png";
import power from "../assets/industriesImage/power.png";
import auto from "../assets/industriesImage/auto.png";
import marine from "../assets/industriesImage/marine.png";

// Country flags mapping
const countryCodes = {
  UAE: "ae",
  "Saudi Arabia": "sa",
  Oman: "om",
  Argentina: "ar",
  Qatar: "qa",
  Kuwait: "kw",
  USA: "us",
  UK: "gb",
  Germany: "de",
  France: "fr",
  Italy: "it",
  Spain: "es",
  Netherlands: "nl",
  Belgium: "be",
  Poland: "pl",
  Norway: "no",
  Russia: "ru",
  Turkey: "tr",
  Iran: "ir",
  Japan: "jp",
  "South Korea": "kr",
  China: "cn",
  Singapore: "sg",
  Malaysia: "my",
  Thailand: "th",
  Vietnam: "vn",
  Indonesia: "id",
  Philippines: "ph",
  Australia: "au",
  Brazil: "br",
  Mexico: "mx",
  Chile: "cl",
  Colombia: "co",
  Venezuela: "ve",
  "South Africa": "za",
  Egypt: "eg",
  Nigeria: "ng",
  Morocco: "ma",
  Jordan: "jo",
  Kazakhstan: "kz",
  Greece: "gr",
  Czechia: "cz",
  Portugal: "pt",
  Ukraine: "ua",
  Canada: "ca",
  Taiwan: "tw",
  "Hong Kong": "hk",
  "Sri Lanka": "lk",
  Bangladesh: "bd",
  Myanmar: "mm",
};

const Home = () => {
  // Hero images array for slideshow
  const heroImages = [hero, hero2, hero3, hero4, hero5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Third-party logos data
  const thirdPartyLogos = [
    { id: 1, name: "ABS", logo: abslogo },
    { id: 2, name: "Bureau Veritas", logo: bureaulogo },
    { id: 3, name: "DNV", logo: dnvlogo },
    { id: 4, name: "IR Class", logo: irclasslogo },
    { id: 5, name: "Lloyd's", logo: lloydlogo },
    { id: 6, name: "SGS", logo: sgslogo },
    { id: 7, name: "TUV", logo: tuvlogo },
    { id: 8, name: "UHDE", logo: uhdelogo },
  ];

  // Partners data
  const partners = [
    partner41,
    partner45,
    partner48,
    partner49,
    partner50,
    partner51,
    partner53,
    partner55,
  ];

  // Industries data with images
  const industries = [
    { name: "Oil & Gas", image: oil, icon: Factory },
    { name: "Power Plants", image: power, icon: Zap },
    { name: "Marine", image: marine, icon: Ship },
    { name: "Renewable", image: energy, icon: Waves },
    { name: "Pharmaceutical", image: pharma, icon: Pill },
    { name: "Food Processing", image: food, icon: Utensils },
    { name: "Cement", image: cement, icon: Building2 },
    { name: "Automobile", image: auto, icon: Car },
  ];

  // Stats data
  const stats = [
    { value: "50+", label: "EXPORT COUNTRIES", icon: Globe2 },
    { value: "100+", label: "DOMESTIC HUBS", icon: MapPin },
    { value: "12", label: "HOURS RESPONSE", icon: Clock3 },
    { value: "100%", label: "QUALITY ASSURED", icon: ShieldCheck },
  ];

  // Services data
  const services = [
    {
      number: "01",
      title: "Advanced Fabrication",
      description:
        "Utilizing high-precision CNC machining and modern forging lines to deliver components with ultra-tight dimensional accuracy.",
      icon: Gauge,
    },
    {
      number: "02",
      title: "Rigorous Validation",
      description:
        "Comprehensive quality protocols including PMI testing, ultrasonic inspection, and hydrostatic checks for 100% field reliability.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Technical Consulting",
      description:
        "Our metal alloy specialists provide data-driven guidance on selecting optimal grades for extreme pressure and corrosive environments.",
      icon: Users,
    },
    {
      number: "04",
      title: "Direct Value Chain",
      description:
        "Benefit from mill-certified supply and competitive manufacturer pricing with complete batch traceability and faster lead times.",
      icon: TrendingUp,
    },
  ];

  // Domestic cities
  const domesticCities = [
    "Bengaluru",
    "Mumbai",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Pune",
    "New Delhi",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Salem",
    "Gandhinagar",
    "Bhiwandi",
    "Tiruppur",
    "Sivakasi",
    "Jamnagar",
    "Satara",
    "Rajahmundry",
    "Bhubaneswar",
    "Vijaywada",
    "Firozabad",
    "Bokaro",
    "Rajkot",
    "Bharuch",
    "Panna",
    "Raipur",
    "Cochin",
    "Ludhiana",
    "Panipat",
    "Durgapur",
    "Peenya",
    "Pimpri",
    "Channapatna",
    "Kharagpur",
    "Nashik",
    "Bareilly",
    "Varanasi",
    "Haldia",
    "Rourkela",
    "Patna",
    "Moradabad",
    "Indore",
    "Visakhapatnam",
    "Trivandrum",
    "Pithampur",
    "Dibrugarh",
    "Angul",
    "Gwalior",
    "Coimbatore",
    "Kannur",
    "Nagpur",
    "Vadodara",
    "Rudrapur",
    "Noida",
    "Agra",
    "Bhagalpur",
    "Jamshedpur",
    "Bhilai",
    "Lucknow",
    "Kanpur",
    "Thane",
    "Bhopal",
    "Navi Mumbai",
    "Vasai",
    "Bikaner",
    "Maharashtra",
  ];

  // Export countries with flags
  const exportCountries = [
    "India",
    "UAE",
    "Saudi Arabia",
    "Oman",
    "Qatar",
    "Kuwait",
    "USA",
    "UK",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Belgium",
    "Poland",
    "Norway",
    "Russia",
    "Turkey",
    "Iran",
    "Japan",
    "South Korea",
    "China",
    "Singapore",
    "Malaysia",
    "Thailand",
    "Vietnam",
    "Indonesia",
    "Philippines",
    "Australia",
    "Brazil",
    "Mexico",
    "Chile",
    "Colombia",
    "Venezuela",
    "South Africa",
    "Egypt",
    "Nigeria",
    "Morocco",
    "Jordan",
    "Kazakhstan",
    "Greece",
    "Czechia",
    "Portugal",
    "Ukraine",
    "Canada",
    "Taiwan",
    "Hong Kong",
    "Sri Lanka",
    "Bangladesh",
    "Myanmar",
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "The high-grade stainless steel flanges from Sunlight Forge & Fitting have consistently exceeded our pressure specs. Their documentation and comprehensive MTC reports are always accurate and perfectly detailed.",
      author: "Vikram Khanna",
      role: "Global Process Solutions",
      initials: "VK",
    },
    {
      quote:
        "Dimensional precision and surface integrity of their forged fittings are exceptional. Even with large-scale bulk orders, Sunlight Forge & Fitting maintains an incredible level of manufacturing consistency.",
      author: "Amit Rao",
      role: "Industrial Flow Technologies",
      initials: "AR",
    },
    {
      quote:
        "They are our most trusted partner for specialized piping hardware. Their agility in supplying exotic alloy grades on short notice has saved our project delivery timelines on multiple critical occasions.",
      author: "Nitin Sharma",
      role: "Prime Engineering Resources",
      initials: "NS",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Sunlight Forge & Fitting Pvt. Ltd. | Premium Industrial Infrastructure
          Components
        </title>
        <meta
          name="description"
          content="Premium quality stainless steel flanges, forged pipe fittings, and ferrous & non-ferrous metals for oil & gas, chemical, power, and marine industries."
        />
      </Helmet>

      {/* =============================== */}
      {/* HERO SECTION WITH SLIDESHOW */}
      {/* =============================== */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Premium Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#46127B]/80 via-[#46127B]/10 to-transparent border-none"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#03A58D]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#46127B]/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Premium Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-[#03A58D]/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full blur-2xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center min-h-[80vh]">
            {/* Premium Text Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full max-w-4xl"
            >
              {/* Premium Badge */}
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-[#03A58D] rounded-full animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                  Premium Quality
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-extrabold text-4xl uppercase sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white font-sans [text-shadow:0_4px_40px_rgba(0,0,0,0.3)]"
              >
                Engineered for
                <br />
                <span className="text-[#03A58D] [text-shadow:0_0_60px_rgba(3,165,141,0.3)]">
                  Extremes
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl mt-6 font-medium [text-shadow:0_2px_20px_rgba(0,0,0,0.2)]"
              >
                Our heavy-duty steel pipes and industrial tubing anchor critical
                energy, processing, and infrastructure frameworks globally.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4 pt-2 mt-2 font-bold"
              >
                <div className="flex items-center gap-2 text-sm text-white/90 font-sans bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#03A58D]" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90 font-sans bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <Globe2 className="w-4 h-4 text-[#03A58D]" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/90 font-sans bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  <Clock3 className="w-4 h-4 text-[#03A58D]" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#03A58D]/30 font-sans relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 font-sans backdrop-blur-sm"
                >
                  Request a Quote
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="grid grid-cols-3 gap-4 pt-6 max-w-md"
              >
                {[
                  { value: "100%", label: "Ultrasonic Tested" },
                  { value: "ISO 9001", label: "Certified" },
                  { value: "Zero", label: "Delamination Rate" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10"
                  >
                    <p className="text-2xl font-black text-[#03A58D] font-sans [text-shadow:0_0_30px_rgba(3,165,141,0.2)]">
                      {stat.value}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-white/80 font-sans">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Premium Navigation Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`transition-all duration-500 rounded-full ${
                currentImageIndex === index
                  ? "bg-[#03A58D] w-10 h-3 shadow-lg shadow-[#03A58D]/50"
                  : "bg-white/30 hover:bg-white/50 w-3 h-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Premium Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20"
          >
            <defs>
              <linearGradient
                id="premiumWave"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#46127B" />
                <stop offset="50%" stopColor="#03A58D" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#46127B" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="url(#premiumWave)"
              opacity="0.95"
            />
            <path
              d="M0,50 C300,20 600,70 900,40 C1100,20 1300,60 1440,50"
              stroke="#03A58D"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M0,55 C250,35 500,65 800,45 C1000,30 1200,55 1440,45"
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.15"
            />
          </svg>
        </div>
      </section>

      {/* =============================== */}
      {/* TICKER TAPE */}
      {/* =============================== */}
      <section className="w-full h-20 bg-[#46127B] py-3 overflow-hidden flex items-center border-y border-[#03A58D]/20 mt-10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="text-[20px] font-bold uppercase tracking-[0.25em] text-[#feffff] font-sans"
            >
              ◆ FORGING INDUSTRIAL RESILIENCE WORLDWIDE ◆
            </span>
          ))}
        </div>
      </section>

      {/* =============================== */}
      {/* FORGING STRUCTURAL ABSOLUTE INTEGRITY */}
      {/* =============================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-0.5 bg-[#03A58D]"></span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                  Operational Class: Heavy Infrastructure
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase text-[#46127B] leading-tight font-sans">
                Forging Structural
                <br />
                <span className="text-[#03A58D]">Absolute Integrity.</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg font-sans">
                Sunlight Forge & Fitting constructs high-yield component
                architectures engineered exclusively for high-pressure,
                severe-temperature environments. We cross-verify metallurgical
                structures to guarantee systemic endurance across global
                distribution networks.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-[#03A58D] font-sans">
                    100%
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                    Ultrasonic Tested
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-[#03A58D] font-sans">
                    9001
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                    ISO Certified
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-[#03A58D] font-sans">
                    Zero
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-sans">
                    Delamination Rate
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="bg-gradient-to-br from-[#46127B] to-[#320D5A] rounded-2xl p-8 text-white relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right,#fff 1px,transparent 1px),
                    linear-gradient(to bottom,#fff 1px,transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-[#03A58D]"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#03A58D] uppercase font-sans">
                    Quality Management System
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight font-sans">
                  ISO 9001:2015 Certificate
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  Verifies our strict international compliance with
                  high-integrity quality control, advanced manufacturing
                  assessments, product reliability tracking, and raw material
                  validation standards.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 font-sans"
                  >
                    <FileText size={16} />
                    View Certificate
                    <span className="text-[9px] opacity-70">PDF</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all duration-300 hover:bg-white/10 font-sans"
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <span className="flex items-center gap-1.5 text-xs text-[#03A58D] font-bold uppercase tracking-wider font-sans">
                    <CheckCircle size={14} />
                    ISO Certified
                  </span>
                  <span className="w-px h-4 bg-white/20"></span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-bold uppercase tracking-wider font-sans">
                    <ShieldCheck size={14} />
                    Quality Assured
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* PRODUCT CARDS SECTION */}
      {/* =============================== */}
      <Cards />

      {/* =============================== */}
      {/* THIRD-PARTY INSPECTION AGENCIES */}
      {/* =============================== */}
      <section className="w-full py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Quality Assurance Framework
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Approved Third-Party
              <br />
              <span className="text-[#03A58D]">Inspection Agencies</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              Our engineering components are universally verified and certified
              by global metallurgical authorities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-12 max-w-6xl mx-auto">
            {thirdPartyLogos.map((item, index) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center justify-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm
      hover:shadow-2xl hover:scale-105 hover:-translate-y-1
      transition-all duration-300 ease-out cursor-pointer"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-12 object-contain opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 grayscale"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* GLOBAL INDUSTRIAL CERTIFICATIONS */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Quality Assurance Protocol
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Global Industrial
              <br />
              <span className="text-[#03A58D]">Certifications</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              Our commitment to zero-failure performance is backed by globally
              recognized triple-standard certifications, ensuring absolute
              compliance for high-integrity industrial environments.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: "QMS 9001:2015",
                description:
                  "Ensuring consistent manufacturing precision and full material traceability across all alloy grades.",
                icon: ShieldCheck,
              },
              {
                title: "EMS 14001:2015",
                description:
                  "Strategic environmental management integrating sustainable practices into our production cycle.",
                icon: Globe2,
              },
              {
                title: "OHSMS 45001:2018",
                description:
                  "Occupational health and safety frameworks protecting our workforce in high-stakes manufacturing zones.",
                icon: Users,
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#03A58D]/40 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                  <cert.icon className="w-7 h-7 text-[#03A58D] group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-lg font-black text-[#46127B] uppercase font-sans">
                  {cert.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =============================== */}
      {/* STRATEGIC MANUFACTURER */}
      {/* =============================== */}
      <section className="w-full py-20 bg-gradient-to-br from-[#46127B] to-[#320D5A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right,#fff 1px,transparent 1px),
              linear-gradient(to bottom,#fff 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#03A58D] uppercase font-sans">
                Global Metallurgy Standards
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-tight font-sans">
              Strategic Manufacturer of
              <br />
              <span className="text-[#03A58D]">High-Yield</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-slate-300 mt-2 font-sans">
              Industrial Infrastructure Components
            </h3>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed font-sans">
              Sunlight Forge & Fitting commands systemic quality control over a
              diverse inventory of critical pipeline configurations, forged
              steel assemblies, structural fasteners, and heavy-duty plates.
              Every production run delivers enhanced structural integrity and
              precise chemical corrosion resistance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 max-w-5xl mx-auto">
            {[
              { label: "Quality Assurance", sub: "Global Quality Standards" },
              { label: "Global Export", sub: "Worldwide Documentation" },
              { label: "Traceability", sub: "100% Material Tracking" },
              { label: "Wide Range", sub: "Pipes • Flanges • Fittings" },
              { label: "Fast Delivery", sub: "Efficient Logistics" },
              { label: "Technical Support", sub: "Engineering Assistance" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-[#03A58D]/40 transition-all duration-300 hover:bg-white/10"
              >
                <CheckCircle className="w-5 h-5 text-[#03A58D] mx-auto mb-2" />
                <p className="text-xs font-bold text-white uppercase font-sans">
                  {item.label}
                </p>
                <p className="text-[9px] text-slate-400 mt-0.5 font-sans">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* INDUSTRIES WE ANCHOR - WITH IMAGES */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Global Operational Footprint
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Industries We
              <br />
              <span className="text-[#03A58D]">Anchor</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              Delivering certified industrial components to mission-critical
              sectors worldwide.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#03A58D] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#46127B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 " />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 ">
                    <p className="text-xs font-bold uppercase tracking-wider font-sans ">
                      Industry Sector
                    </p>
                  </div>
                </div>
                <div className="p-5 group-hover:bg-[#46127B]">
                  <h3 className="text-sm font-bold text-[#46127B] uppercase group-hover:text-[#03A58D]  transition-colors font-sans">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =============================== */}
      {/* PARTNERS MARQUEE */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Trusted Partners
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Our <span className="text-[#03A58D]">Partners</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              We collaborate with industry leaders to deliver exceptional value
              to our clients.
            </p>
          </div>

          {/* Infinite Moving Partners */}
          <div className="relative overflow-hidden">
            <div className="animate-partners-marquee flex items-center gap-12 w-max">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-4 hover:border-[#03A58D] transition-all duration-300 hover:shadow-md"
                >
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-48 h-24 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center p-4 hover:border-[#03A58D] transition-all duration-300 hover:shadow-md"
                >
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* SERVICES */}
      {/* =============================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Our Services
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Engineering
              <br />
              <span className="text-[#03A58D]">Excellence</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              Precision manufacturing backed by technical expertise, rigorous
              inspection, and complete supply-chain transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-[#03A58D]/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-[#46127B] flex items-center justify-center group-hover:bg-[#03A58D] transition-all duration-300">
                        <span className="text-lg font-black text-white group-hover:text-white transition-all duration-300 font-sans">
                          {service.number}
                        </span>
                      </div>
                      <Icon className="w-6 h-6 text-[#03A58D] mt-2 mx-auto" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#46127B] uppercase font-sans">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed font-sans">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* GLOBAL FOOTPRINT & DOMESTIC REACH */}
      {/* =============================== */}
      <section className="w-full py-20 bg-gradient-to-br from-[#46127B] to-[#320D5A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right,#fff 1px,transparent 1px),
              linear-gradient(to bottom,#fff 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#03A58D] uppercase font-sans">
                Supply Chain Excellence
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white leading-tight font-sans">
              Global Footprint
              <br />
              <span className="text-[#03A58D]">& Domestic Reach</span>
            </h2>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-sm leading-relaxed font-sans">
              Sunlight Forge & Fitting operates a sophisticated industrial
              supply chain, serving as a critical material partner for
              refineries, petrochemical plants, and power stations across 50+
              countries and every major industrial hub in India.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#03A58D]/40 transition-all duration-300"
            >
              <Globe2 className="w-8 h-8 text-[#03A58D] mx-auto mb-2" />
              <p className="text-3xl font-black text-white font-sans">50+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                Export Countries
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#03A58D]/40 transition-all duration-300"
            >
              <MapPin className="w-8 h-8 text-[#03A58D] mx-auto mb-2" />
              <p className="text-3xl font-black text-white font-sans">100+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                Domestic Hubs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#03A58D]/40 transition-all duration-300"
            >
              <Clock3 className="w-8 h-8 text-[#03A58D] mx-auto mb-2" />
              <p className="text-3xl font-black text-white font-sans">12</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                Hours Response
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-[#03A58D]/40 transition-all duration-300"
            >
              <ShieldCheck className="w-8 h-8 text-[#03A58D] mx-auto mb-2" />
              <p className="text-3xl font-black text-white font-sans">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-sans">
                Quality Assured
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* NATIONAL INFRASTRUCTURE SUPPORT - Box Style Cities */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                National Infrastructure Support
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Strategic Domestic
              <br />
              <span className="text-[#03A58D]">Supply</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              Sunlight Forge & Fitting serves as a critical material partner for
              India's premier industrial hubs, delivering high-integrity alloys
              for zero-failure performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {domesticCities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.35,
                  delay: (index % 10) * 0.04,
                }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 rounded-full bg-white border border-slate-200 px-4 py-3 shadow-sm hover:shadow-lg hover:border-[#03A58D] hover:bg-[#03A58D]/5 transition-all duration-300 cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-[#46127B]/10 flex items-center justify-center group-hover:bg-[#03A58D]/15 transition-all">
                  <MapPin
                    size={16}
                    className="text-[#46127B] group-hover:text-[#03A58D]"
                  />
                </div>

                <span className="text-sm font-medium text-slate-700 group-hover:text-[#46127B] font-sans">
                  {city}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* INTERNATIONAL EXPORT NETWORK - 5 Columns with Flags */}
      {/* =============================== */}
      <section className="w-full py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Global Trade Authority
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              International
              <br />
              <span className="text-[#03A58D]">Export Network</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto font-sans">
              As a premier ISO Certified manufacturer, Sunlight Forge & Fitting
              maintains a high-velocity export corridor, delivering
              precision-engineered piping solutions to over 50 countries
              worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {Object.keys(countryCodes).map((country, index) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: (index % 10) * 0.04 }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-3 py-3 shadow-sm hover:shadow-lg hover:border-[#03A58D] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <span
                    className={`fi fi-${countryCodes[country]} text-2xl`}
                  ></span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[#46127B] leading-tight font-sans">
                    {country}
                  </h3>

                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-sans">
                    Export
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* TESTIMONIALS */}
      {/* =============================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase font-sans">
                Market Trust
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] font-sans">
              Industrial
              <br />
              <span className="text-[#03A58D]">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#46127B] flex items-center justify-center text-white font-black text-xl font-sans">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#46127B] text-sm font-sans">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-[#03A58D] font-medium font-sans">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic font-sans">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#03A58D] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CTA SECTION */}
      {/* =============================== */}
      <section className="w-full py-20 bg-gradient-to-br from-[#46127B] to-[#320D5A] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right,#fff 1px,transparent 1px),
              linear-gradient(to bottom,#fff 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#03A58D] uppercase font-sans">
              Get In Touch
            </span>
            <span className="w-10 h-0.5 bg-[#03A58D]"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight font-sans">
            Ready to Build Your
            <br />
            <span className="text-[#03A58D]">Industrial Infrastructure?</span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto font-sans">
            Connect with our team of metallurgical experts for certified
            components, technical support, and global supply chain solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#03A58D]/25 font-sans"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 font-sans"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* FLOATING WHATSAPP & CALL BUTTONS */}
      {/* =============================== */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919636901159"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-green-500/40"
          aria-label="Contact us on WhatsApp"
        >
          <IoLogoWhatsapp className="h-7 w-7 text-white" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919636901159"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg hover:bg-[#053769] hover:scale-110 transition-all duration-300 shadow-[#46127B]/40"
          aria-label="Call us"
        >
          <IoIosCall className="h-7 w-7 text-white" />
        </a>
      </div>

      {/* =============================== */}
      {/* MARQUEE ANIMATION STYLES */}
      {/* =============================== */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: fit-content;
        }

        @keyframes partners-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-partners-marquee {
          animation: partners-marquee 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </>
  );
};

export default Home;
