// src/pages/Contact/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Truck,
  Headphones,
  ArrowRight,
  X,
  Loader2,
  MessageCircle,
  Calendar,
  Briefcase,
  FileText,
  Home,
  Navigation,
} from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// Import images
import contactHeroBg from "../assets/about/about-hero.jpg";


const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "",
    productRequirement: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = `Inquiry from ${formData.fullName} - Sunlight Forge & Fitting`;
      const body =
        `%0A%0A` +
        `---------- INQUIRY DETAILS ----------%0A%0A` +
        `Name: ${formData.fullName}%0A` +
        `Company: ${formData.companyName || "N/A"}%0A` +
        `Email: ${formData.email}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Country: ${formData.country || "N/A"}%0A` +
        `Product Requirement: ${formData.productRequirement || "N/A"}%0A%0A` +
        `---------- MESSAGE ----------%0A%0A` +
        `${formData.message}%0A%0A` +
        `---------- %0A` +
        `This inquiry was sent from the Sunlight Forge & Fitting Website Contact Form`;

      const mailtoLink = `mailto:sunlight.barmer@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailtoLink;

      setShowSuccess(true);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        country: "",
        productRequirement: "",
        message: "",
      });

      setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Leadership team data
  const leadership = [
    { name: "K. V. Dhaka", role: "Founder", phone: "+91 98336 36665" },
    {
      name: "Jayesh Bishnoi",
      role: "Managing Director",
      phone: "+91 98332 86629",
    },
    { name: "J. D. Dhaka", role: "CEO", phone: "+91 95820 14911" },
    { name: "Santosh Bishnoi", role: "Director", phone: "+91 96369 01159" },
    { name: "P. Bishnoi", role: "COO", phone: "+91 98696 07575" },
    { name: "Kamlesh Jani", role: "Chief Executive", phone: "+91 87692 37329" },
    { name: "Vijay Dhaka", role: "Marketing Chief", phone: "" },
  ];

  // Business information
  const businessInfo = [
    { label: "Company Name", value: "Sunlight Forge & Fitting Pvt. Ltd." },
    { label: "Established", value: "2017" },
    { label: "Parent Company", value: "Sunlight Metal Industries (2006)" },
    { label: "GSTIN", value: "27AAWCS7415G1ZT" },
    { label: "PAN", value: "AAWCS7415G" },
    { label: "MSME", value: "MH19B0008390" },
    { label: "IEC", value: "0316973211" },
    { label: "CIN", value: "U27310MH2016PTC272167" },
    { label: "Bank", value: "Bank of Baroda" },
  ];

  // Branch offices
  const branchOffices = [
    { city: "Mumbai", emoji: "📍" },
    { city: "Barmer", emoji: "📍" },
    { city: "New Delhi", emoji: "📍" },
    { city: "Bangalore", emoji: "📍" },
    { city: "Ahmedabad", emoji: "📍" },
  ];

  // Why choose us
  const whyChooseUs = [
    {
      icon: Clock3,
      title: "Fast Response",
      description: "Quick turnaround on inquiries and quotations",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Expert guidance for your specific requirements",
    },
    {
      icon: Globe2,
      title: "Global Export",
      description: "Serving clients across 50+ countries worldwide",
    },
    {
      icon: ShieldCheck,
      title: "Custom Manufacturing",
      description: "Tailored solutions for your unique needs",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sunlight Forge & Fitting Pvt. Ltd. | Contact Us</title>
        <meta
          name="description"
          content="Contact Sunlight Forge & Fitting for premium forged fittings, flanges, pipes, and industrial solutions. Get a quote or technical assistance today."
        />
      </Helmet>

      {/* =============================== */}
      {/* HERO BANNER */}
      {/* =============================== */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${contactHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#46127B]/85 via-[#320D5A]/80 to-[#1F2430]/90"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#03A58D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#46127B]/20 rounded-full blur-3xl" />
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
          <div className="flex items-center min-h-[40vh] py-12">
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
                    Contact Us
                  </span>
                  <span className="w-10 h-0.5 bg-[#03A58D]"></span>
                </div>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white"
              >
                Get in <span className="text-[#03A58D]">Touch</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mt-6"
              >
                We are committed to delivering premium forged fittings, flanges,
                pipes, and industrial solutions worldwide. Contact our team for
                quotations, technical assistance, or business inquiries.
              </motion.p>
            </motion.div>
          </div>
        </div>

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
      {/* SUCCESS TOAST */}
      {/* =============================== */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg mx-4"
        >
          <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-2xl p-5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center border border-green-200">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-green-800 uppercase tracking-wider">
                  Email Prepared Successfully!
                </h4>
                <p className="text-sm text-green-700 mt-1 leading-relaxed">
                  Your inquiry has been prepared. Please check your email client
                  to send the message.
                </p>
              </div>
              <button
                onClick={() => setShowSuccess(false)}
                className="flex-shrink-0 p-1 hover:bg-green-200/50 rounded-lg transition-colors text-green-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* =============================== */}
      {/* CONTACT INFORMATION CARDS */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#03A58D] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-sm font-bold text-[#46127B] uppercase mb-2">
                Registered Office
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Office No. 8, Ground Floor,
                <br />
                Earth Enclave, V.P. Road,
                <br />
                Girgaon, Mumbai – 400004,
                <br />
                Maharashtra, India
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#03A58D] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-sm font-bold text-[#46127B] uppercase mb-2">
                Manufacturing Facility
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plot No. 1053, Steel Market,
                <br />
                Kalamboli, Raigad,
                <br />
                Navi Mumbai – 410218,
                <br />
                Maharashtra, India
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#03A58D] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-sm font-bold text-[#46127B] uppercase mb-2">
                Phone Numbers
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+919636901159"
                  className="block text-sm text-slate-600 hover:text-[#03A58D] transition-colors"
                >
                  +91 96369 01159
                </a>
                <a
                  href="tel:+919833286629"
                  className="block text-sm text-slate-600 hover:text-[#03A58D] transition-colors"
                >
                  +91 98332 86629
                </a>
                <a
                  href="mailto:sunlight.barmer@gmail.com"
                  className="block text-sm text-slate-600 hover:text-[#03A58D] transition-colors break-all"
                >
                  sunlight.barmer@gmail.com
                </a>
                <a
                  href="https://sunlightmetal.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-[#03A58D] hover:underline"
                >
                  https://sunlightmetal.in
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* COMPANY LEADERSHIP */}
      {/* =============================== */}
      <section className="w-full py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Leadership
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Company <span className="text-[#03A58D]">Leadership</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:border-[#03A58D] transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-[#46127B]/10 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-[#46127B]" />
                </div>
                <h4 className="text-sm font-bold text-[#46127B]">
                  {leader.name}
                </h4>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                  {leader.role}
                </p>
                {leader.phone && (
                  <a
                    href={`tel:${leader.phone}`}
                    className="text-xs text-[#03A58D] hover:underline mt-1 block"
                  >
                    {leader.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* BUSINESS INFORMATION */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Business Information
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Corporate <span className="text-[#03A58D]">Details</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {businessInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {info.label}
                </p>
                <p className="text-sm font-medium text-[#46127B] mt-1 break-all">
                  {info.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* BRANCH OFFICES */}
      {/* =============================== */}
      <section className="w-full py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Branch Offices
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Our <span className="text-[#03A58D]">Locations</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {branchOffices.map((branch, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl px-6 py-4 border border-slate-200 hover:border-[#03A58D] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <span className="text-lg mr-2">{branch.emoji}</span>
                <span className="text-sm font-medium text-[#46127B]">
                  {branch.city}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CONTACT FORM + GOOGLE MAP */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Send Inquiry
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Get a <span className="text-[#03A58D]">Quote</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="+91 00000 00000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="India"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Product Requirement
                    </label>
                    <input
                      type="text"
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="Flanges, Pipes, Fittings..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-[#03A58D] focus:bg-white focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#03A58D]/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Preparing Email...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="space-y-4"
            >
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2345!2d72.812345!3d18.923456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzI0LjUiTiA3MsKwNDgnNDQuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full"
                  title="Sunlight Forge & Fitting Location"
                />
              </div>
              <div className="bg-[#46127B] rounded-2xl p-4 text-white text-center">
                <p className="text-sm font-medium">
                  📍 Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* WORKING HOURS */}
      {/* =============================== */}
      <section className="w-full py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="bg-white rounded-2xl p-8 border border-slate-200 text-center shadow-sm"
            >
              <Clock3 className="w-12 h-12 text-[#03A58D] mx-auto mb-4" />
              <h3 className="text-xl font-black text-[#46127B] uppercase">
                Working Hours
              </h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="font-bold text-[#46127B]">Monday - Saturday</p>
                  <p className="text-slate-600">9:00 AM – 7:00 PM</p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-bold text-[#46127B]">Sunday</p>
                  <p className="text-red-500 font-semibold">Closed</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="bg-gradient-to-br from-[#46127B] to-[#320D5A] rounded-2xl p-8 text-white text-center"
            >
              <Calendar className="w-12 h-12 text-[#03A58D] mx-auto mb-4" />
              <h3 className="text-xl font-black uppercase">Need Help?</h3>
              <p className="text-slate-300 mt-2">
                Our team is ready to assist you with your industrial
                requirements.
              </p>
              <a
                href="tel:+919636901159"
                className="inline-block mt-6 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* WHY CHOOSE US */}
      {/* =============================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                Why Choose Us
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Trusted <span className="text-[#03A58D]">Partner</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                  className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-200 hover:border-[#03A58D] transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#03A58D] group-hover:text-white transition-all duration-300" />
                  </div>
                  <h4 className="text-sm font-black text-[#46127B] uppercase">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CTA BANNER */}
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
              Get Started
            </span>
            <span className="w-10 h-0.5 bg-[#03A58D]"></span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
            Need Industrial <br />
            <span className="text-[#03A58D]">Forged Fittings?</span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            Our experienced team is ready to help you choose the right products
            for your application.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="tel:+919636901159"
              className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#03A58D]/25"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

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
      `}</style>
    </>
  );
};

export default Contact;
