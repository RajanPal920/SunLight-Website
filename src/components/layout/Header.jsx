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
      className="h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24"
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
      {/* TOP BAR - Fully Responsive */}
      {/* =============================== */}
      <div className="border-b border-[#03A58D]/20 bg-gradient-to-r from-[#46127B] via-[#46127B]/90 to-[#03A58D]/80">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-4">
          {/* ─── MOBILE TOP BAR ─── */}
          <div className="flex md:hidden flex-col items-center gap-0.5">
            {/* Row 1: Phone numbers */}
            <div className="flex items-center justify-center gap-2 xs:gap-3">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1 xs:gap-1.5 text-white/90 hover:text-white transition-colors text-[9px] xs:text-[10px] font-medium whitespace-nowrap"
              >
                <Phone
                  size={15}
                  className="xs:size-[12px] text-[#03A58D] flex-shrink-0"
                />
                <span className="text-xm">+91 96369 01159</span>
              </a>
              <span className="text-white/30 text-[10px]">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1 xs:gap-1.5 text-white/90 hover:text-white transition-colors text-[9px] xs:text-[10px] font-medium whitespace-nowrap"
              >
                <Phone
                  size={15}
                  className="xs:size-[12px] text-[#03A58D] flex-shrink-0"
                />
                <span className="text-xm">+91 98332 86629</span>
              </a>
            </div>
            {/* Row 2: Email */}
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="flex items-center gap-1 xs:gap-1.5 text-white/80 hover:text-white transition-colors text-[8px] xs:text-[9px] font-medium"
            >
              <Mail
                size={18}
                className="xs:size-[10px] text-[#03A58D] flex-shrink-0"
              />
              <span className="text-sm">sunlight.barmer@gmail.com</span>
            </a>
          </div>

          {/* ─── TABLET & DESKTOP TOP BAR ─── */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Left Side */}
            <div className="flex items-center gap-3 lg:gap-4">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
              >
                <Phone
                  size={16}
                  className="lg:size-[15px] text-[#03A58D] flex-shrink-0"
                />
                +91 96369 01159
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs lg:text-sm font-medium whitespace-nowrap"
              >
                <Phone
                  size={16}
                  className="lg:size-[15px] text-[#03A58D] flex-shrink-0"
                />
                +91 98332 86629
              </a>
              <span className="text-white/30 hidden xl:inline">|</span>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="hidden xl:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs lg:text-sm font-medium"
              >
                <Mail
                  size={18}
                  className="lg:size-[15px] text-[#03A58D] flex-shrink-0"
                />
                sunlight.barmer@gmail.com
              </a>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex items-center gap-2 lg:gap-3">
              <a
                href="https://www.facebook.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-7 w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-br hover:from-[#1877F2] hover:via-[#166FE5] hover:to-[#0D5BD7]"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={15}
                  className="lg:size-[18px] xl:size-[22px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-7 w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
                aria-label="Instagram"
              >
                <RiInstagramFill
                  size={15}
                  className="lg:size-[18px] xl:size-[22px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-7 w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-tr hover:from-[#f54646] hover:via-[#c81d1d]"
                aria-label="YouTube"
              >
                <FaYoutube
                  size={16}
                  className="lg:size-[20px] xl:size-[24px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =============================== */}
      {/* MAIN HEADER */}
      {/* =============================== */}
      <div className="w-full px-4 sm:px-5 lg:px-8 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* ================= Mobile / Tablet ================= */}
          <div className="flex lg:hidden items-center justify-start w-[75%] gap-2">
            <div className="flex-shrink-0">
              <Logo />
            </div>

            <div className="flex-1 min-w-0 pr-2">
              <h2
                className="text-[#46127B] font-extrabold leading-tight
                       text-[10px] xs:text-xs sm:text-sm"
              >
                SUNLIGHT FORGE & FITTING PVT. LTD.
              </h2>

              <p
                className="text-[#03A58D] uppercase font-semibold
                      text-[7px] xs:text-[8px] sm:text-[10px]
                      tracking-[1px] sm:tracking-[2px]"
              >
                ISO 9001:2015 Certified Company
              </p>
            </div>
          </div>

          {/* ================= Desktop ================= */}
          <div className="hidden lg:flex items-center gap-4 h-20">
            <Logo />

            <div>
              <h2
                className="text-[#46127B] font-black
                       text-xl xl:text-2xl 2xl:text-3xl
                       leading-tight"
              >
                SUNLIGHT FORGE & FITTING PVT. LTD.
              </h2>

              <p
                className="text-[#03A58D]
                      text-xs xl:text-sm
                      uppercase
                      font-semibold
                      tracking-[3px]"
              >
                ISO 9001:2015 Certified Company
              </p>
            </div>
          </div>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
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

          {/* ================= Mobile Menu Button ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-start w-11 h-11 rounded-lg hover:bg-[#46127B]/10 transition-colors duration-300 flex-shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#46127B]" />
            ) : (
              <Menu className="w-6 h-6 text-[#46127B]" />
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
