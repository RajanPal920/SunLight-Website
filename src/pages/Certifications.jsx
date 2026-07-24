// src/pages/Certifications/Certifications.jsx

import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  FileCheck,
  Globe2,
  Building2,
  CheckCircle2,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

// Import certificate files
import registration from "../assets/certificate/registeration.pdf";
import udyam from "../assets/certificate/udyam.pdf";

// Import hero image (same as Contact for consistency)
import certHeroBg from "../assets/about/about-hero.jpg";

const Certifications = () => {
  // Animation variants (same as Contact.jsx)
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

  // Certificates data (only 2)
  const certificates = [
    {
      id: 1,
      title: "Company Registration",
      description:
        "Official certificate of incorporation for Sunlight Forge & Fitting Pvt. Ltd.",
      file: registration,
      icon: Building2,
      category: "Company Registration",
    },
    {
      id: 2,
      title: "UDYAM Registration",
      description:
        "Government of India UDYAM registration for Micro, Small & Medium Enterprises.",
      file: udyam,
      icon: FileCheck,
      category: "Government Registration",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Certifications | Sunlight Forge & Fitting Pvt. Ltd.</title>
        <meta
          name="description"
          content="Explore the quality certifications and government registrations held by Sunlight Forge & Fitting Pvt. Ltd., including UDYAM and Company Registration."
        />
      </Helmet>

      {/* =============================== */}
      {/* HERO SECTION */}
      {/* =============================== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${certHeroBg})`,
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
                Certifications
              </span>
              <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            </div>

            <span className="inline-block bg-[#03A58D] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              ISO 9001:2015 | UDYAM Registered
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
              Quality <span className="text-[#03A58D]">Certifications</span>
            </h1>

            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Explore the quality certifications and government registrations
              that demonstrate our commitment to excellence, compliance, and
              international standards.
            </p>
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
      {/* CERTIFICATES GRID (2 COLUMNS) */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-[#f7f9fb]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div variants={fadeUp}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-10 h-0.5 bg-[#03A58D]"></span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                  Our Credentials
                </span>
                <span className="w-10 h-0.5 bg-[#03A58D]"></span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
                Certificates &amp;{" "}
                <span className="text-[#03A58D]">Registrations</span>
              </h2>
              <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
                We are proud to hold these certifications and registrations that
                validate our commitment to quality, compliance, and excellence.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  variants={fadeUp}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#03A58D] transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[#03A58D]/10 group-hover:bg-[#03A58D] transition-all duration-300 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#03A58D] group-hover:text-white transition-all duration-300" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#46127B] group-hover:text-[#03A58D] transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#03A58D] hover:text-[#46127B] transition-colors group/btn"
                  >
                    <Download
                      size={16}
                      className="group-hover/btn:-translate-y-0.5 transition-transform"
                    />
                    View Certificate
                    <ExternalLink size={14} className="opacity-50" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* =============================== */}
      {/* WHY CERTIFICATIONS MATTER */}
      {/* =============================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeLeft} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-0.5 bg-[#03A58D]"></span>
                <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
                  Why It Matters
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B] leading-tight">
                Commitment to <span className="text-[#03A58D]">Excellence</span>
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Our certifications are more than just documents — they are a
                testament to our unwavering commitment to quality, safety, and
                regulatory compliance. From ISO 9001:2015 to government
                registrations, every credential reflects our dedication to
                delivering world-class products and services.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#03A58D]/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#03A58D]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#46127B]">Quality</p>
                    <p className="text-xs text-slate-500">ISO 9001:2015</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#03A58D]/10 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-5 h-5 text-[#03A58D]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#46127B]">
                      Compliance
                    </p>
                    <p className="text-xs text-slate-500">
                      Government Registered
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#03A58D]/10 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-[#03A58D]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#46127B]">
                      Excellence
                    </p>
                    <p className="text-xs text-slate-500">Industry Standards</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#03A58D]/10 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-[#03A58D]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#46127B]">Trust</p>
                    <p className="text-xs text-slate-500">Global Recognition</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="relative bg-gradient-to-br from-[#46127B] to-[#320D5A] rounded-2xl p-8 text-white overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#03A58D]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-white/5 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Quality Assured</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Every product we deliver undergoes rigorous quality checks and
                  compliance verification to ensure it meets the highest
                  international standards.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#03A58D] flex-shrink-0" />
                    <span className="text-sm">ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#03A58D] flex-shrink-0" />
                    <span className="text-sm">UDYAM Registered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#03A58D] flex-shrink-0" />
                    <span className="text-sm">GST & IEC Compliant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#03A58D] flex-shrink-0" />
                    <span className="text-sm">MSME Registered</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Certifications;
