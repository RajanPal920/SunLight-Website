// src/components/layout/Header.jsx

import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import {
  Phone,
  Menu,
  X,
  Mail,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Box,
  Activity,
  GitCommitHorizontal,
  CircleDot,
  Layers,
  Hexagon,
  Nut,
  Zap,
} from "lucide-react";

import logo from "../../assets/logo/logo.webp";
import products from "../../data/products";

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
      className="h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 xl:h-20"
    />
  </Link>
);

/* ───────────────── Navigation Links ───────────────── */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products", hasDropdown: true },
  { label: "Certifications", to: "/certifications" },
  { label: "Contact", to: "/contact" },
];

/* ───────────────── Product Icons Map ───────────────── */
const productIcons = {
  "Pipes & Tubes": <Box size={18} />,
  "Sheets & Plates": <Layers size={18} />,
  "Flanges & Fittings": <CircleDot size={18} />,
  "Rods & Bars": <GitCommitHorizontal size={18} />,
  Coils: <Activity size={18} />,
  Strips: <Hexagon size={18} />,
  "Buttweld Fittings": <Zap size={18} />,
  Fasteners: <Nut size={18} />,
};

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Mobile Accordion State
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const y = window.scrollY;
          return prev ? y > 8 : y > 40;
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location]);

  // Desktop Hover Logic
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  // Desktop Link Classes
  const desktopNavClass = ({ isActive }) =>
    `relative font-semibold text-sm lg:text-base transition-all duration-300 py-1
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#46127B]
     after:transition-all after:duration-300
     ${
       isActive
         ? "text-[#46127B] after:w-full"
         : "text-gray-700 hover:text-[#46127B] after:w-0 hover:after:w-full"
     }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      {/* =============================== */}
      {/* TOP BAR - Fully Responsive */}
      {/* =============================== */}
      <div className="border-b border-[#03A58D]/20 bg-gradient-to-r from-[#46127B] via-[#46127B]/90 to-[#03A58D]/80">
        <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-2.5">
          {/* ─── MOBILE TOP BAR ─── */}
          <div className="flex md:hidden flex-col items-center gap-0.5">
            <div className="flex items-center justify-center gap-2 xs:gap-3 flex-wrap">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-[10px] xs:text-[11px] font-medium"
              >
                <Phone size={12} className="text-[#03A58D] flex-shrink-0" />
                +91 96369 01159
              </a>
              <span className="text-white/30 text-[10px]">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1 text-white/90 hover:text-white transition-colors text-[10px] xs:text-[11px] font-medium"
              >
                <Phone size={12} className="text-[#03A58D] flex-shrink-0" />
                +91 98332 86629
              </a>
            </div>
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors text-[9px] xs:text-[10px] font-medium"
            >
              <Mail size={12} className="text-[#03A58D] flex-shrink-0" />
              sunlight.barmer@gmail.com
            </a>
          </div>

          {/* ─── TABLET & DESKTOP TOP BAR ─── */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center gap-3 lg:gap-4 flex-wrap">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs lg:text-sm font-medium"
              >
                <Phone
                  size={14}
                  className="lg:size-[15px] text-[#03A58D] flex-shrink-0"
                />
                +91 96369 01159
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-xs lg:text-sm font-medium"
              >
                <Phone
                  size={14}
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
                  size={14}
                  className="lg:size-[15px] text-[#03A58D] flex-shrink-0"
                />
                sunlight.barmer@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2 lg:gap-3">
              <a
                href="https://www.facebook.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-[#1877F2] hover:via-[#166FE5] hover:to-[#0D5BD7]"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={14}
                  className="lg:size-[16px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
                aria-label="Instagram"
              >
                <RiInstagramFill
                  size={14}
                  className="lg:size-[16px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-7 w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-[#f54646] hover:via-[#c81d1d]"
                aria-label="YouTube"
              >
                <FaYoutube
                  size={14}
                  className="lg:size-[16px] text-white/80 group-hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =============================== */}
      {/* MAIN HEADER */}
      {/* =============================== */}
      <div className="w-full px-3 sm:px-5 lg:px-8 py-2 md:py-2.5">
        <div className="flex items-center justify-between">
          {/* ================= Mobile / Tablet ================= */}
          <div className="flex lg:hidden items-center flex-1 min-w-0 gap-2">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-[#46127B] font-extrabold leading-tight text-[10px] xs:text-[11px] sm:text-xs truncate">
                SUNLIGHT FORGE & FITTING PVT. LTD.
              </h2>
              <p className="text-[#03A58D] uppercase font-semibold text-[6px] xs:text-[7px] sm:text-[8px] tracking-[1px] sm:tracking-[1.5px] truncate">
                ISO 9001:2015 Certified Company
              </p>
            </div>
          </div>

          {/* ================= Desktop ================= */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <Logo />
            <div>
              <h2 className="text-[#46127B] font-black text-base xl:text-lg 2xl:text-xl leading-tight">
                SUNLIGHT FORGE & FITTING PVT. LTD.
              </h2>
              <p className="text-[#03A58D] text-[10px] xl:text-xs uppercase font-semibold tracking-[2px] xl:tracking-[2.5px]">
                ISO 9001:2015 Certified Company
              </p>
            </div>
          </div>

          {/* ================= Desktop Navigation ================= */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 relative">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.to}
                    ref={dropdownRef}
                    className="relative h-full flex items-center py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `relative font-semibold text-sm lg:text-base transition-all duration-300 flex items-center gap-1 py-1
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#46127B]
                         after:transition-all after:duration-300
                         ${isActive ? "text-[#46127B] after:w-full" : "text-gray-700 hover:text-[#46127B] after:w-0 hover:after:w-full"}`
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </NavLink>

                    {/* ─── NEW SPLIT-PANEL MEGA MENU WITH 70% HEIGHT ─── */}
                    <div
                      className={`absolute right-0 top-[110%] w-[750px] max-h-[70vh] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-gray-100 transition-all duration-300 origin-top z-[1000] overflow-hidden flex flex-col ${
                        isDropdownOpen
                          ? "opacity-100 visible translate-y-0 scale-100"
                          : "opacity-0 invisible translate-y-4 scale-95 pointer-events-none"
                      }`}
                    >
                      {/* Scrollable content wrapper */}
                      <div className="flex flex-1 overflow-hidden">
                        {/* Left Sidebar Call to action */}
                        <div className="w-1/3 bg-gradient-to-br from-[#46127B] to-[#2E0B52] p-8 text-white flex flex-col justify-between relative overflow-hidden">
                          {/* Decorative circle */}
                          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#03A58D] rounded-full blur-3xl opacity-20"></div>

                          <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-3 leading-tight">
                              Premium Industrial Solutions
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                              Explore our ISO-certified range of high-quality
                              forged fittings, flanges, and more built for
                              extreme durability.
                            </p>
                          </div>
                          <Link
                            to="/products"
                            onClick={() => setIsDropdownOpen(false)}
                            className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-[#03A58D] hover:text-white transition-colors group w-max"
                          >
                            View Full Catalog
                            <ArrowRight
                              size={16}
                              className="transform group-hover:translate-x-1 transition-transform"
                            />
                          </Link>
                        </div>

                        {/* Right Grid - Products */}
                        <div className="w-2/3 p-6 bg-gray-50/50 overflow-y-auto">
                          <div className="grid grid-cols-2 gap-3">
                            {products.map((product) => (
                              <Link
                                key={product.id}
                                to={`/products/${product.slug}`}
                                onClick={() => setIsDropdownOpen(false)}
                                className="group flex items-center p-3 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-200 transition-all duration-300"
                              >
                                <div className="w-10 h-10 rounded-lg bg-[#46127B]/5 flex items-center justify-center text-[#03A58D] group-hover:bg-[#03A58D] group-hover:text-white transition-colors shrink-0">
                                  {productIcons[product.name] || (
                                    <Box size={18} />
                                  )}
                                </div>
                                <div className="ml-4 min-w-0">
                                  <span className="block font-semibold text-gray-800 group-hover:text-[#46127B] text-sm truncate transition-colors">
                                    {product.name}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={desktopNavClass}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* ================= Mobile Menu Button ================= */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#46127B]/10 transition-colors duration-300 flex-shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-[#46127B]" />
            ) : (
              <Menu className="w-5 h-5 text-[#46127B]" />
            )}
          </button>
        </div>
      </div>

      {/* =============================== */}
      {/* MOBILE OVERLAY-STYLE MENU WITH GRID */}
      {/* =============================== */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen
            ? "max-h-[calc(100vh-100px)] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto max-h-[calc(100vh-120px)]">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.to}
                    className="flex flex-col border-b border-gray-100 last:border-0 overflow-hidden"
                  >
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 text-gray-700 hover:bg-[#46127B]/5"
                    >
                      <span
                        className={
                          mobileProductsOpen ? "text-[#46127B] font-bold" : ""
                        }
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          mobileProductsOpen
                            ? "rotate-180 text-[#46127B]"
                            : "text-gray-400"
                        }`}
                      />
                    </button>

                    {/* Mobile Products Grid Dropdown - Clean UI */}
                    <div
                      className={`grid grid-cols-2 gap-2 transition-all duration-300 ease-in-out origin-top ${
                        mobileProductsOpen
                          ? "max-h-[600px] opacity-100 p-2 mb-2 scale-100"
                          : "max-h-0 opacity-0 m-0 p-0 scale-95"
                      }`}
                    >
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/products/${product.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#03A58D]/30 hover:bg-[#03A58D]/5 transition-all"
                        >
                          <span className="text-[#03A58D] mb-1.5 bg-white p-2 rounded-lg shadow-sm">
                            {productIcons[product.name] || <Box size={16} />}
                          </span>
                          <span className="text-[11px] font-semibold text-gray-700 leading-tight">
                            {product.name}
                          </span>
                        </Link>
                      ))}
                      <Link
                        to="/products"
                        onClick={() => setMobileOpen(false)}
                        className="col-span-2 mt-2 py-2.5 flex items-center justify-center gap-2 text-xs font-bold text-[#46127B] bg-[#46127B]/5 rounded-xl hover:bg-[#46127B]/10 transition-colors"
                      >
                        Browse All Products <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-lg font-medium text-sm transition-all duration-200 border-b border-gray-100 last:border-0 ${
                      isActive
                        ? "bg-[#46127B] text-white border-transparent"
                        : "text-gray-700 hover:bg-[#46127B]/5"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Contact Action Bar - Enhanced */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-3 px-2 text-gray-700 hover:text-[#46127B] transition-colors text-sm font-medium"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#03A58D]/10 flex items-center justify-center">
                  <Phone size={14} className="text-[#03A58D]" />
                </div>
                +91 96369 01159
              </a>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="flex items-center gap-3 px-2 text-gray-700 hover:text-[#46127B] transition-colors text-sm font-medium break-all"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#03A58D]/10 flex items-center justify-center">
                  <Mail size={14} className="text-[#03A58D]" />
                </div>
                sunlight.barmer@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
