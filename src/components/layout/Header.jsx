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
      className="h-24 lg:h-28 w-auto object-contain transition-all duration-300"
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
    `relative font-semibold text-bold transition-all duration-300
     after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-[#46127B]
     after:transition-all after:duration-300
     ${
       isActive
         ? "text-[#46127B] after:w-full"
         : "text-gray-700 hover:text-[#46127B] after:w-0 hover:after:w-full"
     }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-40 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-1"
          : "bg-white/95 backdrop-blur-md py-1"
      }`}
    >
      {/* Top Bar - Social Media, Phone, Email */}
      <div className="border-b border-[#03A58D]/20 bg-gradient-to-r from-[#46127B] via-[#46127B]/90 to-[#03A58D]/80">
        <div className="w-full mx-auto px-4 lg:px-8 h-14 flex items-center">
          <div className="flex items-center justify-between w-full">
            {/* Left Side - Phone & Email */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone size={18} className="text-[#03A58D]" />
                <span>+91 96369 01159</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:+919833286629"
                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                <Phone size={18} className="text-[#03A58D]" />
                <span>+91 98332 86629</span>
              </a>
              <span className="text-white/30 hidden sm:inline">|</span>
              <a
                href="mailto:sunlight.barmer@gmail.com"
                className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-white transition-colors text-sm font-medium"
              >
                <Mail size={18} className="text-[#03A58D]" />
                <span>sunlight.barmer@gmail.com</span>
              </a>
            </div>

            {/* Right Side - Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-br hover:from-[#1877F2] hover:via-[#166FE5] hover:to-[#0D5BD7]"
                aria-label="Facebook"
              >
                <FaFacebook
                  size={30}
                  className="text-black group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.instagram.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]"
                aria-label="Instagram"
              >
                <RiInstagramFill
                  size={30}
                  className="text-black group-hover:text-white transition-colors duration-300"
                />
              </a>
              <a
                href="https://www.youtube.com/sunlightforge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-125 hover:bg-gradient-to-tr hover:from-[#f54646] hover:via-[#c81d1d]"
                aria-label="YouTube"
              >
                <FaYoutube
                  size={33}
                  className="text-black group-hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className=" w-full mx-auto px-4 lg:px-8 ">
        <div className="flex items-center justify-between py-1">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
            <div className="hidden lg:block">
              <p className="text-[#46127B] font-extrabold text-xl leading-tight tracking-wide">
                SUNLIGHT FORGE & FITTING PVT. LTD.
              </p>
              <p className="text-[#03A58D] text-sm font-bold tracking-[3px] uppercase">
                AN ISO 9000:2015 CERTIFIED CO.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 ">
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
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="text-[#46127B] " size={24} />
            ) : (
              <Menu className="text-[#46127B]" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="bg-white border-t px-5 py-5 flex flex-col gap-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#46127B] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="border-t mt-3 pt-4">
            <a
              href="tel:+919636901159"
              className="flex items-center gap-2 mb-2 text-gray-700"
            >
              <Phone size={16} className="text-[#03A58D]" />
              +91 96369 01159
            </a>
            <a
              href="tel:+919833286629"
              className="flex items-center gap-2 mb-2 text-gray-700"
            >
              <Phone size={16} className="text-[#03A58D]" />
              +91 98332 86629
            </a>
            <a
              href="mailto:sunlight.barmer@gmail.com"
              className="flex items-center gap-2 mb-4 text-gray-700 text-sm break-all"
            >
              <Mail size={16} className="text-[#03A58D]" />
              sunlight.barmer@gmail.com
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
