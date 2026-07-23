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
  // Importing specific icons for products
  Box,
  Activity,
  GitCommitHorizontal,
  CircleDot,
  Layers,
  Hexagon,
  Nut,
  Zap,
  ArrowLeft,
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
  "Pipes & Tubes": <Box size={16} />,
  "Sheets & Plates": <Layers size={16} />,
  "Flanges & Fittings": <CircleDot size={16} />,
  "Rods & Bars": <GitCommitHorizontal size={16} />,
  Coils: <Activity size={16} />,
  Strips: <Hexagon size={16} />,
  "Buttweld Fittings": <Zap size={16} />,
  Fasteners: <Nut size={16} />,
};

/* ───────────────── Group Products for Mega Menu ───────────────── */
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Desktop State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Mobile Drill-Down State (Only used for the "Back" to Main Menu)
  const [mobileViewStack, setMobileViewStack] = useState(["main"]);

  // Group products into columns for the Mega Menu
  const productColumns = chunkArray(products, Math.ceil(products.length / 4));

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

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    setMobileOpen(false);
    setMobileViewStack(["main"]); // Reset mobile stack on route change
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

  // Mobile handlers
  const pushMobileView = (viewId) => {
    setMobileViewStack((prev) => [...prev, viewId]);
  };

  const popMobileView = () => {
    setMobileViewStack((prev) => {
      if (prev.length > 1) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setTimeout(() => setMobileViewStack(["main"]), 300);
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
                    className="relative h-full flex items-center"
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

                    {/* ─── CENTERED 4-COLUMN MEGA MENU ─── */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[min(92vw,1050px)] bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 origin-top z-[1000] ${
                        isDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-4 pointer-events-none"
                      }`}
                    >
                      {/* Top Bar */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50 rounded-t-xl">
                        <h3 className="text-sm font-bold text-[#46127B] uppercase tracking-wide">
                          Our Product Range
                        </h3>
                        <Link
                          to="/products"
                          className="text-xs font-semibold text-[#03A58D] hover:text-[#46127B] transition-colors flex items-center gap-1"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          View All <ChevronRight size={14} />
                        </Link>
                      </div>

                      {/* 4-Column Grid with Icons */}
                      <div className="grid grid-cols-4 gap-0 p-6">
                        {productColumns.map((column, colIndex) => (
                          <div
                            key={colIndex}
                            className={`px-5 ${colIndex !== productColumns.length - 1 ? "border-r border-gray-100" : ""}`}
                          >
                            {column.map((product) => (
                              <Link
                                key={product.id}
                                to={`/products/${product.slug}`}
                                className="group flex items-center justify-between py-2.5 px-2 rounded-lg text-sm text-gray-700 hover:bg-[#46127B]/5 hover:text-[#46127B] transition-all duration-200"
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <span className="text-[#03A58D] flex-shrink-0">
                                    {productIcons[product.name] || (
                                      <Box size={16} />
                                    )}
                                  </span>
                                  <span className="font-medium truncate">
                                    {product.name}
                                  </span>
                                </div>
                                <ChevronRight
                                  size={14}
                                  className="opacity-0 group-hover:opacity-100 text-[#03A58D] transition-all duration-200 -translate-x-2 group-hover:translate-x-0 flex-shrink-0"
                                />
                              </Link>
                            ))}
                          </div>
                        ))}
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
            onClick={() => {
              setMobileOpen(!mobileOpen);
              if (!mobileOpen) setMobileViewStack(["main"]); // Reset drill-down when opening
            }}
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
      {/* MOBILE NAVIGATION & DROPDOWN (NO SUB-PAGES) */}
      {/* =============================== */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen
            ? "max-h-[calc(100vh-100px)] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 sm:px-6 py-4 sm:py-6 overflow-y-auto max-h-[calc(100vh-120px)]">
          <div className="relative flex flex-col w-full overflow-hidden min-h-[300px]">
            {/* --- Main Menu View --- */}
            <div
              className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                mobileViewStack[mobileViewStack.length - 1] === "main"
                  ? "opacity-100 translate-x-0 block"
                  : "opacity-0 translate-x-[-100%] hidden absolute top-0 left-0 w-full"
              }`}
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  if (item.hasDropdown) {
                    return (
                      <div
                        key={item.to}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <button
                          onClick={() => pushMobileView("products")}
                          className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 text-gray-700 hover:bg-gray-50"
                        >
                          <span>{item.label}</span>
                          <ChevronRight size={16} className="text-gray-400" />
                        </button>
                      </div>
                    );
                  }
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/"}
                      onClick={closeMobileMenu}
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
                  );
                })}
              </nav>
            </div>

            {/* --- Products List View --- */}
            <div
              className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${
                mobileViewStack[mobileViewStack.length - 1] === "products"
                  ? "opacity-100 translate-x-0 block"
                  : "opacity-0 translate-x-[100%] hidden absolute top-0 left-0 w-full"
              }`}
            >
              <button
                onClick={popMobileView}
                className="w-full flex items-center gap-2 px-2 py-3 text-sm font-semibold text-[#46127B] hover:bg-gray-50 rounded-lg transition-colors border-b border-gray-100"
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <div className="mt-2 space-y-1">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <Link
                      to={`/products/${product.slug}`}
                      onClick={closeMobileMenu}
                      className="w-full flex items-center justify-between px-2 py-3 rounded-lg font-medium text-sm transition-all duration-200 text-gray-700 hover:bg-[#46127B]/5"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#03A58D] flex-shrink-0">
                          {productIcons[product.name] || <Box size={16} />}
                        </span>
                        <span>{product.name}</span>
                      </div>
                      <ChevronRight size={14} className="text-gray-400" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Contact info */}
          <div className="border-t border-gray-200 mt-4 pt-4 space-y-3">
            <a
              href="tel:+919636901159"
              className="flex items-center gap-3 text-gray-700 hover:text-[#46127B] transition-colors text-sm"
            >
              <Phone size={16} className="text-[#03A58D]" />
              +91 96369 01159
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
