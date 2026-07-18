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
  Headphones,
  X,
  Loader2,
  Calendar,
  MessageCircle,
  ArrowRight,
  ChevronRight,
  ExternalLink,
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
    { city: "Mumbai", emoji: "🏢" },
    { city: "Barmer", emoji: "🏢" },
    { city: "New Delhi", emoji: "🏢" },
    { city: "Bangalore", emoji: "🏢" },
    { city: "Ahmedabad", emoji: "🏢" },
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
        <title>Contact Us | Sunlight Forge & Fitting Pvt. Ltd.</title>
        <meta
          name="description"
          content="Contact Sunlight Forge & Fitting for premium forged fittings, flanges, pipes, and industrial solutions. Get a quote or technical assistance today."
        />
      </Helmet>

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

      {/* Error Toast */}
      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg mx-4"
        >
          <div className="relative bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl shadow-2xl p-5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-500"></div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-200">
                  <X className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-red-800 uppercase tracking-wider">
                  Something Went Wrong
                </h4>
                <p className="text-sm text-red-700 mt-1 leading-relaxed">
                  Please try again or contact us directly via email or phone.
                </p>
              </div>
              <button
                onClick={() => setShowError(false)}
                className="flex-shrink-0 p-1 hover:bg-red-200/50 rounded-lg transition-colors text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* =============================== */}
      {/* HERO BANNER */}
      {/* =============================== */}
      <section
        className="relative min-h-[66vh] flex items-center overflow-hidden pt-[110px] sm:pt-[120px] md:pt-[130px] lg:pt-[140px]"
        style={{
          backgroundImage: `url(${contactHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#46127B]/90 via-[#320D5A]/85 to-[#1F2430]/95"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#03A58D]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#46127B]/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center min-h-[35vh] py-8 sm:py-12">
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
                className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
              >
                Get in <span className="text-[#03A58D]">Touch</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mt-4"
              >
                We're here to help you with your industrial requirements. Reach
                out to our team for quotes, technical support, or any inquiries.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center justify-center gap-3 mt-6"
              >
                <a
                  href="tel:+919636901159"
                  className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="mailto:sunlight.barmer@gmail.com"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </motion.div>
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
      {/* QUICK CONTACT CARDS */}
      {/* =============================== */}
      <section className="w-full mt-8 relative z-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:border-[#03A58D] transition-all duration-300 group hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-sm font-bold text-[#46127B] uppercase mb-2">
                Registered Office
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Office No. 8, Ground Floor, Earth Enclave,
                <br />
                V.P. Road, Girgaon, Mumbai – 400004
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:border-[#03A58D] transition-all duration-300 group hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                <Factory className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-sm font-bold text-[#46127B] uppercase mb-2">
                Manufacturing Facility
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plot No. 1053, Steel Market, Kalamboli,
                <br />
                Raigad, Navi Mumbai – 410218
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100 hover:border-[#03A58D] transition-all duration-300 group hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-sm font-bold text-[#46127B] uppercase mb-2">
                Contact
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
                  href="https://www.sunlightforgefitting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#03A58D] hover:underline transition-colors font-medium mt-1"
                >
                  www.sunlightforgefitting.com
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* FORM + MAP SECTION */}
      {/* =============================== */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#46127B] uppercase">
                Send Inquiry
              </span>
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Get a <span className="text-[#03A58D]">Quote</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200"
              >
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
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
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
                      placeholder="India"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                      Product
                    </label>
                    <input
                      type="text"
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none"
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
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-[#03A58D] focus:ring-2 focus:ring-[#03A58D]/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#03A58D]/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Preparing...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  We respect your privacy. Your information will not be shared
                  with third parties.
                </p>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              className="space-y-4"
            >
              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 h-[400px] sm:h-[450px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2345!2d72.812345!3d18.923456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU1JzI0LjUiTiA3MsKwNDgnNDQuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full"
                  title="Sunlight Forge & Fitting Location"
                />
              </div>
              <div className="bg-[#46127B] rounded-2xl p-4 sm:p-5 text-white text-center">
                <p className="text-sm font-medium">
                  📍 Earth Enclave, V.P. Road, Girgaon, Mumbai – 400004
                </p>
                <a
                  href="https://www.google.com/maps/dir//Earth+Enclave,+V.P.+Road,+Girgaon,+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#03A58D] hover:underline text-sm mt-1.5"
                >
                  Get Directions
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* LEADERSHIP TEAM */}
      {/* =============================== */}
      <section className="w-full py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#46127B] uppercase">
                Leadership
              </span>
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Company <span className="text-[#03A58D]">Leadership</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 text-center hover:border-[#03A58D] transition-all duration-300 hover:shadow-md"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#46127B]/10 flex items-center justify-center mb-3">
                  <Users className="w-7 h-7 text-[#46127B]" />
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
                    className="text-xs text-[#03A58D] hover:underline mt-2 block"
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
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#46127B] uppercase">
                Business Info
              </span>
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Corporate <span className="text-[#03A58D]">Details</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {businessInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.04 }}
                className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#03A58D] transition-all duration-300"
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
      <section className="w-full py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#46127B] uppercase">
                Branch Offices
              </span>
              <span className="w-8 h-0.5 bg-[#03A58D]"></span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
              Our <span className="text-[#03A58D]">Locations</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {branchOffices.map((branch, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl px-5 py-3 sm:px-6 sm:py-4 border border-slate-200 hover:border-[#03A58D] transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <span>{branch.emoji}</span>
                <span className="text-sm font-medium text-[#46127B]">
                  {branch.city}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* WORKING HOURS + WHY CHOOSE US */}
      {/* =============================== */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Working Hours */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 text-center"
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

            {/* Why Choose Us */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-black text-[#46127B] uppercase">
                  Why Choose <span className="text-[#03A58D]">Us</span>
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
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
                      className="bg-slate-50 rounded-xl p-4 sm:p-5 text-center border border-slate-200 hover:border-[#03A58D] transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-[#03A58D] group-hover:text-white transition-all duration-300" />
                      </div>
                      <h4 className="text-xs font-black text-[#46127B] uppercase">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =============================== */}
      {/* CTA BANNER */}
      {/* =============================== */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-[#46127B] to-[#320D5A] relative overflow-hidden">
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

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-0.5 bg-[#03A58D]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#03A58D] uppercase">
              Ready to Work Together?
            </span>
            <span className="w-8 h-0.5 bg-[#03A58D]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
            Need Industrial <br />
            <span className="text-[#03A58D]">Forged Fittings?</span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm">
            Our experienced team is ready to help you choose the right products
            for your application.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="tel:+919636901159"
              className="inline-flex items-center gap-2 bg-[#03A58D] hover:bg-[#028773] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#03A58D]/25"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
