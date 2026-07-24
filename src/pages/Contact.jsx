// src/pages/Contact/Contact.jsx

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  CheckCircle,
  Globe2,
  Building2,
  Factory,
  Users,
  Award,
  ShieldCheck,
  Headphones,
  X,
  Loader2,
  Calendar,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  Smartphone,
  Briefcase,
  Settings,
  Bolt,
  Wrench,
  Globe,
  Sliders,
  CheckCircle as CheckCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

// Import your hero image (or keep the one from the HTML)
import heroBg from "../assets/about/about-hero.jpg";

const Contact = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission - opens mailto with form data
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build mailto link
    const subject = `Inquiry from ${formData.fullName} - Sunlight Forge & Fitting`;
    const body = `
      Name: ${formData.fullName}
      Company: ${formData.company || "N/A"}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Country: ${formData.country || "N/A"}
      
      --- MESSAGE ---
      
      ${formData.message}
      
      ---
      Sent from Sunlight Forge & Fitting Website Contact Form
    `;

    const mailtoLink = `mailto:sunlight.barmer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mailto
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  // Handle Request a Catalog
  const handleRequestCatalog = () => {
    const subject = "Catalog Request - Sunlight Forge & Fitting";
    const body =
      "Hello Sunlight Forge & Fitting Team,\n\nI would like to request your latest product catalog. Please provide details on your range of forged fittings, flanges, and pipes.\n\nThank you.";
    window.location.href = `mailto:sunlight.barmer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Handle Speak to an Expert
  const handleSpeakToExpert = () => {
    window.location.href = "tel:+919636901159";
  };

  // Handle Urgent Technical Assist
  const handleUrgentAssist = () => {
    const subject =
      "URGENT: Technical Assistance Required - Sunlight Forge & Fitting";
    const body =
      "URGENT - I require immediate technical assistance for an industrial project. Please contact me at your earliest convenience.";
    window.location.href = `mailto:sunlight.barmer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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

  // Leadership team data (updated from PDF)
  const leadership = [
    {
      name: "K. V. Dhaka",
      role: "Founder",
      phone: "+91 98336 36665",
      image: null,
    },
    {
      name: "Jayesh Bishnoi",
      role: "Managing Director",
      phone: "+91 98332 86629",
      image: null,
    },
    {
      name: "J. D. Dhaka",
      role: "CEO",
      phone: "+91 95820 14911",
      image: null,
    },
    {
      name: "Santosh Bishnoi",
      role: "Director",
      phone: "+91 96369 01159",
      image: null,
    },
    {
      name: "P. Bishnoi",
      role: "COO",
      phone: "+91 98696 07575",
      image: null,
    },
    {
      name: "Kamlesh Jani",
      role: "Chief Executive",
      phone: "+91 87692 37329",
      image: null,
    },
    {
      name: "Vijay Dhaka",
      role: "Marketing Chief",
      phone: "",
      image: null,
    },
  ];

  // Corporate details (updated from PDF)
  const corporateDetails = [
    { label: "GSTIN", value: "27AAWCS7415G1ZT" },
    { label: "CIN", value: "U27310MH2016PTC272167" },
    { label: "PAN", value: "AAWCS7415G" },
    { label: "MSME", value: "MH19B0008390" },
    { label: "IEC Code", value: "0316973211" },
    { label: "Established", value: "2006 (Unit I) / 2017 (Unit II)" },
    {
      label: "Banking Partner",
      value: "Bank of Baroda",
      span: "md:col-span-2",
    },
  ];

  // Branch offices (updated from PDF)
  const branches = ["Barmer (RJ)", "New Delhi", "Bangalore", "Ahmedabad"];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Bolt,
      title: "Fast Response",
      description:
        "Swift turnaround for quotations and feasibility studies on urgent project requirements.",
    },
    {
      icon: Wrench,
      title: "Expert Support",
      description:
        "Direct interaction with metallurgy experts for design and material selection optimization.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Robust logistics for export deliveries to 40+ countries across the global energy map.",
    },
    {
      icon: Sliders,
      title: "Bespoke Forging",
      description:
        "Custom-engineered solutions manufactured to your precise drawings and specifications.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Sunlight Forge & Fitting Pvt. Ltd.</title>
        <meta
          name="description"
          content="Discuss your industrial forged fitting requirements with Sunlight Forge & Fitting Pvt. Ltd. Leading the sector with precision engineering excellence."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* =============================== */}
      {/* HERO SECTION */}
      {/* =============================== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        ></div>
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

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4 mt-10">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#03A58D] uppercase">
                Contact Us
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <span className="inline-block bg-[#03A58D] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Established 2006 | ISO 9001:2015
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              Get in Touch
            </h1>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Discuss your industrial forged fitting requirements with Sunlight
              Forge & Fitting Pvt. Ltd. Leading the sector with precision
              engineering excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-2 bg-[#03A58D] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <Phone size={20} /> Call +91 96369 01159
              </a>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                <Mail size={20} /> Email Us
              </a>
            </div>
          </motion.div>
        </motion.div>

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
      {/* CONTACT INFO CARDS */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-[#f7f9fb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Registered Office */}
            <motion.div variants={fadeUp}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#03A58D] transition-colors group">
                <div className="w-14 h-14 bg-[#03A58D]/10 rounded-2xl flex items-center justify-center mb-6 text-[#03A58D] group-hover:bg-[#03A58D] group-hover:text-white transition-colors">
                  <Building2 size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-[#46127B] mb-4">
                  Registered Office
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Office No. 8, Ground Floor, Earth Enclave,
                  <br />
                  VP Road, Girgaon, Mumbai - 400004
                </p>
              </div>
            </motion.div>

            {/* Manufacturing Unit */}
            <motion.div variants={fadeUp} transition={{ delay: 0.1 }}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#03A58D] transition-colors group">
                <div className="w-14 h-14 bg-[#03A58D]/10 rounded-2xl flex items-center justify-center mb-6 text-[#03A58D] group-hover:bg-[#03A58D] group-hover:text-white transition-colors">
                  <Factory size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-[#46127B] mb-4">
                  Manufacturing Unit
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Plot No. 1053, Steel Market,
                  <br />
                  Kalamboli, Raigad, Navi Mumbai - 410218
                </p>
              </div>
            </motion.div>

            {/* Contact Channels */}
            <motion.div variants={fadeUp} transition={{ delay: 0.2 }}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-[#03A58D] transition-colors group">
                <div className="w-14 h-14 bg-[#03A58D]/10 rounded-2xl flex items-center justify-center mb-6 text-[#03A58D] group-hover:bg-[#03A58D] group-hover:text-white transition-colors">
                  <Settings size={32} />
                </div>
                <h3 className="text-2xl font-semibold text-[#46127B] mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919636901159"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#03A58D] transition-colors"
                  >
                    <Phone size={20} /> +91 96369 01159
                  </a>
                  <a
                    href="tel:+919833286629"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#03A58D] transition-colors"
                  >
                    <Smartphone size={20} /> +91 98332 86629
                  </a>
                  <a
                    href="mailto:sunlight.barmer@gmail.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#03A58D] transition-colors"
                  >
                    <Mail size={20} /> sunlight.barmer@gmail.com
                  </a>
                  <a
                    href="https://sunlightmetal.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#03A58D] transition-colors"
                  >
                    <Globe2 size={20} /> sunlightmetal.in
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* INQUIRY FORM & MAP */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-[#eceef0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
                <div className="mb-10">
                  <h2 className="text-3xl font-bold text-[#46127B] mb-2">
                    Request Technical Info
                  </h2>
                  <p className="text-gray-600">
                    Our engineering team will respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-sm text-gray-600 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#f7f9fb] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-sm text-gray-600 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#f7f9fb] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-sm text-gray-600 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#f7f9fb] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-sm text-gray-600 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#f7f9fb] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-sm text-gray-600 mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full bg-[#f7f9fb] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                    >
                      <option>India</option>
                      <option>UAE</option>
                      <option>USA</option>
                      <option>Germany</option>
                      <option>UK</option>
                      <option>Australia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-sm text-gray-600 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full bg-[#f7f9fb] px-4 py-3 rounded-xl border border-gray-200 focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none resize-none"
                      placeholder="Detail your project specifications..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || submitSuccess}
                    className={`w-full py-4 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                      submitSuccess
                        ? "bg-emerald-600 text-white"
                        : "bg-[#03A58D] text-white hover:opacity-90"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : submitSuccess ? (
                      <>
                        <CheckCircleIcon className="w-5 h-5" />
                        Inquiry Sent!
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-[620px] overflow-hidden rounded-3xl border border-gray-200 shadow-xl"
            >
              {/* Google Map */}
              <div className="absolute inset-0">
                <iframe
                  title="Sunlight Forge & Fitting Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.659974154432!2d72.818321!3d18.948212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce090333d839%3A0x6334585f949c5!2sCharni%20Road%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714480000000!5m2!1sen!2sin"
                  className="h-full w-full lg:grayscale lg:hover:grayscale-0 transition-all duration-700"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* LEADERSHIP TEAM */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#46127B] mb-3">
              Executive Leadership
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The visionaries driving industrial excellence at Sunlight Forge &
              Fitting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.slice(0, 4).map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="bg-[#f7f9fb] p-6 rounded-2xl border border-gray-200 text-center hover:border-[#03A58D] transition-all group"
              >
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden border-2 border-white shadow-sm">
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <Users size={32} className="text-gray-500" />
                  </div>
                </div>
                <h4 className="font-bold text-[#46127B] text-lg">
                  {leader.name}
                </h4>
                <p className="text-[#03A58D] text-sm font-semibold uppercase tracking-wide">
                  {leader.role}
                </p>
                {leader.phone && (
                  <a
                    href={`tel:${leader.phone}`}
                    className="text-xs text-[#03A58D] hover:underline mt-2 block"
                  >
                    {leader.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {leadership.slice(4).map((leader, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="bg-[#f7f9fb] p-6 rounded-2xl border border-gray-200 text-center hover:border-[#03A58D] transition-all"
              >
                <h4 className="font-bold text-[#46127B] text-lg">
                  {leader.name}
                </h4>
                <p className="text-[#03A58D] text-sm font-semibold uppercase tracking-wide">
                  {leader.role}
                </p>
                {leader.phone && (
                  <a
                    href={`tel:${leader.phone}`}
                    className="text-xs text-[#03A58D] hover:underline mt-2 block"
                  >
                    {leader.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* CORPORATE DETAILS */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-[#46127B] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">Corporate Credentials</h2>
            <p className="text-white/70">
              Parent Company: Sunlight Metal Industries (Est. 2006)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateDetails.map((detail, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
                className={`bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm ${
                  detail.span || ""
                }`}
              >
                <p className="text-[#03A58D] font-bold text-sm uppercase tracking-wider mb-2">
                  {detail.label}
                </p>
                <p className="text-xl font-semibold">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* BRANCH OFFICES */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={fadeUp}>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
              Our Presence
            </h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
              >
                <span
                  className={`px-8 py-3 rounded-full border-2 ${
                    index === 0
                      ? "border-[#03A58D] bg-[#03A58D]/5 text-[#46127B] font-bold"
                      : "border border-gray-200 bg-[#f7f9fb] text-gray-600 hover:border-[#03A58D]"
                  } transition-all cursor-default`}
                >
                  {branch}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* WORKING HOURS & WHY CHOOSE US */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-[#eceef0]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Working Hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="lg:col-span-4 bg-[#46127B] text-white rounded-3xl p-10 flex flex-col justify-between shadow-xl"
            >
              <div>
                <h2 className="text-3xl font-bold mb-8">Working Hours</h2>
                <ul className="space-y-6">
                  <li className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold">Mon - Fri</span>
                    <span>09:00 AM - 07:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold">Saturday</span>
                    <span>09:00 AM - 05:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2">
                    <span className="font-bold">Sunday</span>
                    <span className="text-[#03A58D] font-bold">Closed</span>
                  </li>
                </ul>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-lg opacity-80 mb-6">
                  Support for critical plant operations available 24/7.
                </p>
                <button
                  onClick={handleUrgentAssist}
                  className="text-[#03A58D] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform"
                >
                  Urgent Technical Assist <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: index * 0.08 }}
                    className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow"
                  >
                    <div className="text-[#03A58D]">
                      <Icon size={40} />
                    </div>
                    <h4 className="text-2xl font-semibold text-[#46127B]">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* FINAL CTA */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#46127B] rounded-[2.5rem] p-16 text-center relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 10% 20%, #03A58D 0%, transparent 40%)",
              }}
            ></div>
            <h2 className="relative z-10 text-4xl sm:text-5xl font-black text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="relative z-10 text-lg text-white/80 max-w-2xl mx-auto mb-12">
              Connect with Sunlight Forge & Fitting today for expert
              consultation and a competitive quote.
            </p>
            <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <button
                onClick={handleRequestCatalog}
                className="bg-[#03A58D] text-white px-12 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl text-lg"
              >
                Request a Catalog
              </button>
              <button
                onClick={handleSpeakToExpert}
                className="bg-white text-[#46127B] px-12 py-5 rounded-2xl font-bold hover:bg-[#f7f9fb] transition-all text-lg"
              >
                Speak to an Expert
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;
