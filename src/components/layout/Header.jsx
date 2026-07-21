// src/components/layout/Header.jsx

import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { Phone, Menu, X, Mail, ChevronDown } from "lucide-react";

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

/* ───────────────── Navigation ───────────────── */
const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products", hasDropdown: true },
  { label: "Quality & Certifications", to: "/quality" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Handle scroll effect (throttled with rAF + hysteresis to prevent flicker)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled((prev) => {
          const y = window.scrollY;
          if (prev) {
            return y > 8;
          } else {
            return y > 40;
          }
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

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  // Handle hover with delay for better UX
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

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
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.to}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `relative font-semibold text-sm lg:text-base transition-all duration-300 flex items-center gap-1
                         after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#46127B]
                         after:transition-all after:duration-300
                         ${
                           isActive
                             ? "text-[#46127B] after:w-full"
                             : "text-gray-700 hover:text-[#46127B] after:w-0 hover:after:w-full"
                         }`
                      }
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </NavLink>

                    {/* Horizontal Dropdown Menu - centered under trigger, width clamped to viewport */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[min(92vw,1100px)] bg-white rounded-lg shadow-2xl border border-gray-100 transition-all duration-300 origin-top z-[1000] ${
                        isDropdownOpen
                          ? "opacity-100 visible scale-100"
                          : "opacity-0 invisible scale-95"
                      }`}
                      style={{
                        maxHeight: "500px",
                        overflowY: "auto",
                      }}
                    >
                      <div className="p-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
                          <h3 className="text-lg font-bold text-gray-800">
                            Our Products
                          </h3>
                          <Link
                            to="/products"
                            className="text-sm text-[#46127B] font-medium hover:underline"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            View All →
                          </Link>
                        </div>

                        {/* Product Grid - Horizontal Layout */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                          {products.map((product) => (
                            <Link
                              key={product.id}
                              to={`/products/${product.slug}`}
                              className="px-3 py-2 text-sm text-gray-700 hover:bg-[#46127B] hover:text-white rounded-lg transition-colors duration-200 text-center border border-transparent hover:border-[#46127B]/20"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              {product.name}
                            </Link>
                          ))}
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
      {/* MOBILE NAVIGATION */}
      {/* =============================== */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 z-[999] transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "max-h-[calc(100vh-100px)] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto max-h-[calc(100vh-120px)] shadow-xl">
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

          {/* Mobile Products Grid */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Our Products
            </p>
            <div className="grid grid-cols-2 gap-1">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-[#46127B] hover:text-white rounded-lg transition-colors duration-200 text-center"
                >
                  {product.name}
                </Link>
              ))}
            </div>
            <Link
              to="/products"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center text-[#46127B] font-medium text-sm hover:underline"
            >
              View All Products →
            </Link>
          </div>

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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
