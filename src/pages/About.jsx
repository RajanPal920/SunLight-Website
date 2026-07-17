// src/pages/About/About.jsx
import React from "react";
import { Link } from "react-router-dom";
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
  Target,
  Lightbulb,
  Eye,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Import components
import oil from "../assets/industriesImage/oil.png";
import cement from "../assets/industriesImage/cement.png";
import energy from "../assets/industriesImage/energy.png";
import food from "../assets/industriesImage/food.png";
import pharma from "../assets/industriesImage/pharma.png";
import power from "../assets/industriesImage/power.png";
import auto from "../assets/industriesImage/auto.png";
import marine from "../assets/industriesImage/marine.png";

// Industries data
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

// Images
import aboutHeroBg from "../assets/about/team.jpg";
import facilityImage from "../assets/about/facility.jpg";

const About = () => {
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

  // Company values
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality First",
      description:
        "We adhere to the highest quality standards, ensuring every product meets or exceeds international specifications.",
    },
    {
      icon: Users,
      title: "Customer Centric",
      description:
        "Our customers are at the heart of everything we do. We build lasting partnerships through trust and reliability.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate our processes and products to stay ahead of industry demands and technological advancements.",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description:
        "With a presence in 50+ countries, we deliver world-class industrial solutions to diverse markets worldwide.",
    },
  ];

  // Stats data
  const stats = [
    { value: "25+", label: "YEARS OF EXCELLENCE", icon: Award },
    { value: "50+", label: "COUNTRIES SERVED", icon: Globe2 },
    { value: "5000+", label: "DELIVERIES", icon: Package },
    { value: "100%", label: "QUALITY ASSURED", icon: ShieldCheck },
  ];

  // Milestones data
  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description:
        "Sunlight Forge & Fitting Pvt. Ltd. was established with a vision to provide premium quality industrial components.",
    },
    {
      year: "2005",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001 certification, marking our commitment to international quality standards.",
    },
    {
      year: "2010",
      title: "Global Expansion",
      description:
        "Expanded our operations to serve clients across 30+ countries worldwide.",
    },
    {
      year: "2015",
      title: "Advanced Manufacturing",
      description:
        "Invested in state-of-the-art CNC machining and forging facilities.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Integrated advanced quality control systems and digital supply chain management.",
    },
    {
      year: "2024",
      title: "Global Leadership",
      description:
        "Now serving 50+ countries with a reputation for excellence in industrial infrastructure components.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Sunlight Forge & Fitting Pvt. Ltd. | About Us – Industrial Excellence
          Since 1998
        </title>
        <meta
          name="description"
          content="Sunlight Forge & Fitting Pvt. Ltd. is a premier manufacturer of stainless steel flanges, forged pipe fittings, and industrial infrastructure components since 1998."
        />
      </Helmet>

      {/* =============================== */}
      {/* HERO SECTION */}
      {/* =============================== */}
      <section
        className="relative min-h-[70vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${aboutHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#46127B]/85 via-[#320D5A]/80 to-[#1F2430]/50"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#03A58D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#46127B]/20 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `
        linear-gradient(to right, #fff 1px, transparent 1px),
        linear-gradient(to bottom, #fff 1px, transparent 1px)
      `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center min-h-[50vh] py-12">
            {/* Left - Text Content - Full Width */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="w-full max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeUp}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-10 h-0.5 bg-[#03A58D]"></span>
                  <span className="text-xs font-bold tracking-[0.25em] text-[#03A58D] uppercase">
                    About Us
                  </span>
                  <span className="w-10 h-0.5 bg-[#03A58D]"></span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white"
              >
                Building Industrial
                <br />
                <span className="text-[#03A58D]">Excellence</span>
                <br />
                Since 1998
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mt-6"
              >
                Sunlight Forge & Fitting Pvt. Ltd. is a premier manufacturer of
                stainless steel flanges, forged pipe fittings, and industrial
                infrastructure components for critical applications worldwide.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-4 pt-4 mt-2"
              >
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <ShieldCheck className="w-4 h-4 text-[#03A58D]" />
                  <span>ISO Certified</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Globe2 className="w-4 h-4 text-[#03A58D]" />
                  <span>Global Reach</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2 text-sm text-white/60">
                  <Clock3 className="w-4 h-4 text-[#03A58D]" />
                  <span>24/7 Support</span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#03A58D]/30"
                >
                  Explore Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12 sm:h-16"
          >
            <path
              d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
              fill="#ffffff"
            />
            <path
              d="M0,50 C300,20 600,70 900,40 C1100,20 1300,60 1440,50"
              stroke="#03A58D"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>
      </section>

      {/* =============================== */}
      {/* OUR STORY SECTION */}
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
                <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black uppercase text-[#46127B] leading-tight">
                Forging Industrial
                <br />
                <span className="text-[#03A58D]">Legacy Since 1998</span>
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Sunlight Forge & Fitting Pvt. Ltd. has been at the forefront of
                industrial manufacturing for over two decades. We specialize in
                producing premium quality stainless steel flanges, forged pipe
                fittings, and ferrous & non-ferrous metals for critical
                applications worldwide.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Our journey began with a vision to provide uncompromising
                quality to the oil & gas, chemical processing, power generation,
                and marine industries. Today, we serve as a trusted partner to
                global contractors and engineering firms, delivering components
                that meet the most stringent international standards.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-[#03A58D]">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Quality Assured
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-[#03A58D]">50+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Countries Served
                  </p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-2xl font-black text-[#03A58D]">25+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Years Experience
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#46127B] to-[#320D5A] rounded-2xl p-1">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src={facilityImage}
                    alt="Sunlight Forge & Fitting Facility"
                    className="w-full h-[400px] object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800";
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-xl px-5 py-3 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#03A58D]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#03A58D]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">
                      Certified Excellence
                    </p>
                    <p className="text-sm font-bold text-[#46127B]">
                      ISO 9001:2015
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* OUR VALUES */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Core Values
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              What Drives
              <br />
              <span className="text-[#03A58D]">Our Excellence</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
              Our core values guide every decision we make and every product we
              deliver.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-[#03A58D]/40 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#03A58D] group-hover:text-white transition-all duration-300" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#46127B] uppercase group-hover:text-[#03A58D] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =============================== */}
      {/* STATS SECTION */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-[#03A58D]/10 rounded-full flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-[#03A58D]" />
                </div>
                <p className="text-3xl md:text-4xl font-black text-[#46127B]">
                  {stat.value}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* MILESTONES / TIMELINE */}
      {/* =============================== */}
      <section className="w-full py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Our Journey
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Milestones
              <br />
              <span className="text-[#03A58D]">of Excellence</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#03A58D]/30 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <span className="text-2xl font-black text-[#03A58D]">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-black text-[#46127B] uppercase mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#03A58D] border-4 border-white shadow-md"></div>
                  </div>

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
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
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Global Operational Footprint
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Industries We
              <br />
              <span className="text-[#03A58D]">Anchor</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#46127B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="text-xs font-bold uppercase tracking-wider">
                      Industry Sector
                    </p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-bold text-[#46127B] uppercase group-hover:text-[#03A58D] transition-colors">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <span className="text-xs font-bold tracking-[0.25em] text-[#03A58D] uppercase">
              Get In Touch
            </span>
            <span className="w-10 h-0.5 bg-[#03A58D]"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            Ready to Work with
            <br />
            <span className="text-[#03A58D]">
              India's Premier Manufacturer?
            </span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Connect with our team to discuss your industrial component
            requirements and discover how we can support your projects.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#03A58D]/25"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
