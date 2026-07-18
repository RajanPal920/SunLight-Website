// src/components/layout/Header.jsx

import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { Phone, Menu, X, ChevronRight, Mail } from "lucide-react";
import Button from "../ui/Button";

import logo from "../../assets/logo/logo.webp";

/* ───────────────── Logo ───────────────── */
const Logo = () => (
  <Link
    to="/"
    className="flex items-center flex-shrink-0"
    aria-label="Sunlight Forge & Fitting Pvt. Ltd."
  >
    <img
      src={logo}
      alt="Sunlight Forge & Fitting Pvt. Ltd."
      className="h-14 xs:h-16 sm:h-18 md:h-20 lg:h-20 xl:h-24 w-auto object-contain transition-all duration-300"
    />
  </Link>
);

/* ───────────────── Navigation ───────────────── */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Quality & Certifications", to: "/quality" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopNavClass = ({ isActive }) =>
    `relative font-semibold text-sm lg:text-base transition-all duration-300
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#46127B]
     after:transition-all after:duration-300
     ${
       isActive
         ? "text-[#46127B] after:w-full"
         : "text-gray-700 hover:text-[#46127B] after:w-0 hover:after:w-full"
     }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-0"
          : "bg-white/95 backdrop-blur-md py-0"
      }`}
    >
      {/* =============================== */}
      {/* TOP BAR - Mobile Optimized */}
      {/* =============================== */}
      <div className="border-b border-[#03A58D]/20 bg-gradient-to-r from-[#46127B] via-[#46127B]/90 to-[#03A58D]/80">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4 flex flex-col items-center">
          {/* Mobile View - Phone numbers in a row, email below */}
          <div className="flex flex-col items-center w-full md:hidden">
            <div className="flex items-center justify-center gap-3">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs font-medium"
              >
                <Phone size={15} className="text-[#03A58D]" />
                <span>+91 96369 01159</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs font-medium"
              >
                <Phone size={15} className="text-[#03A58D]" />
                <span>+91 98332 86629</span>
              </a>
            </div>
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-[10px] font-medium mt-0.5"
            >
              <Mail size={18} className="text-[#03A58D]" />
              <span className="text-sm">sunlight.barmer@gmail.com</span>
            </a>
          </div>

          {/* Tablet & Desktop View */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Side - Phone & Email */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1 xs:gap-1.5 text-white/90 hover:text-white transition-colors text-[10px] xs:text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap"
              >
                <Phone
                  size={13}
                  className="xs:size-[13px] sm:size-[14px] md:size-[15px] lg:size-[16px] text-[#03A58D] flex-shrink-0"
                />
                <span>+91 96369 01159</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1 xs:gap-1.5 text-white/90 hover:text-white transition-colors text-[10px] xs:text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap"
              >
                <Phone
                  size={13}
                  className="xs:size-[13px] sm:size-[14px] md:size-[15px] lg:size-[16px] text-[#03A58D] flex-shrink-0"
                />
                <span>+91 98332 86629</span>
              </a>
              <span className="text-white/30 hidden sm:inline">|</span>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="hidden sm:flex items-center gap-1 xs:gap-1.5 text-white/90 hover:text-white transition-colors text-[10px] xs:text-[10px] sm:text-xs md:text-sm font-medium"
              >
                <Mail
                  size={13}
                  className="xs:size-[13px] sm:size-[14px] md:size-[15px] lg:size-[16px] text-[#03A58D] flex-shrink-0"
                />
                <span>sunlight.barmer@gmail.com</span>
              </a>
            </div>

            {/* Right Side - Social Media (Hidden on Mobile) */}
            <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
              <a
                href="https://www.facebook.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-br hover:from-[#1877F2] hover:via-[#166FE5] hover:to-[#0D5BD7]"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={14}
                  className="xs:size-[15px] sm:size-[17px] md:size-[19px] lg:size-[22px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
                aria-label="Instagram"
              >
                <RiInstagramFill
                  size={14}
                  className="xs:size-[15px] sm:size-[17px] md:size-[19px] lg:size-[22px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 md:h-8 md:w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-tr hover:from-[#f54646] hover:via-[#c81d1d]"
                aria-label="YouTube"
              >
                <FaYoutube
                  size={15}
                  className="xs:size-[16px] sm:size-[18px] md:size-[20px] lg:size-[24px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =============================== */}
      {/* MAIN HEADER - Mobile Optimized */}
      {/* =============================== */}
      <div className="w-full mx-auto px-3 xs:px-4 sm:px-4 md:px-6 lg:px-8 py-2 xs:py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-4">
        <div className="flex items-center justify-between h-15">
          {/* Logo & Company Name - Mobile (Logo on top, Name below) */}
          <div className="flex lg:hidden items-center flex-1 min-w-0">
            <Logo />

            <div className="flex flex-col ml-2 min-w-0">
              <span className="font-extrabold text-[#46127B] text-[10px] leading-tight truncate">
                SUNLIGHT FORGE & FITTING PVT. LTD
              </span>

              <span className="text-[#03A58D] text-[8px] font-bold uppercase truncate">
                ISO 9001:2015 CERTIFIED
              </span>
            </div>
          </div>

          {/* Logo & Company Name - Desktop */}
          <div className="hidden lg:flex items-center gap-4 min-w-[360px]">
            <Logo />

            <div>
              <h2 className="text-[#46127B] font-black text-xl xl:text-2xl leading-tight">
                SUNLIGHT FORGE & FITTING PVT. LTD
              </h2>
              <p className="text-[#03A58D] text-sm tracking-[3px] uppercase font-semibold mt-1">
                ISO 9001 : 2015 Certified Company
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={desktopNavClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 xs:p-2 rounded-md hover:bg-[#46127B]/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="text-[#46127B]" size={24} />
            ) : (
              <Menu className="text-[#46127B]" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* =============================== */}
      {/* MOBILE NAVIGATION */}
      {/* =============================== */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 sm:px-6 py-4 sm:py-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#46127B] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-gray-200 mt-4 pt-4 space-y-3">
            <a
              href="tel:+919636901159"
              className="flex items-center gap-3 text-gray-700 hover:text-[#46127B] transition-colors text-sm"
            >
              <Phone size={16} className="text-[#03A58D]" />
              +91 96369 01159
            </a>
            <a
              href="tel:+919833286629"
              className="flex items-center gap-3 text-gray-700 hover:text-[#46127B] transition-colors text-sm"
            >
              <Phone size={16} className="text-[#03A58D]" />
              +91 98332 86629
            </a>
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-[#46127B] transition-colors text-sm break-all"
            >
              <Mail size={16} className="text-[#03A58D]" />
              sunlight.barmer@gmail.com
            </a>

            <Button
              as={Link}
              to="/contact"
              variant="primary"
              size="sm"
              className="w-full bg-[#46127B] hover:bg-[#32105d] text-white mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
