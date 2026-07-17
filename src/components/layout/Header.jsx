import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

/* ─── Brand Logo (uses real logo image) ─────────────────────── */
const Logo = () => (
  <Link
    to="/"
    aria-label="Sunlight Forge & Fitting Pvt. Ltd. — Home"
    className="flex items-center flex-shrink-0"
  >
    <img
      src="/images/logo.webp"
      alt="Sunlight Forge & Fitting Pvt. Ltd."
      className="h-20 w-auto object-contain"
      loading="eager"
    />
  </Link>
);


/* ─── Nav Links Data ─────────────────────────────────────────── */
const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Quality & Certifications', to: '/quality' },
  { label: 'Contact', to: '/contact' },
];

/* ─── Header Component ───────────────────────────────────────── */
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `font-poppins font-medium text-sm transition-colors duration-200 relative
     after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-200
     ${isActive
       ? 'text-[#46127B] after:w-full after:bg-[#46127B]'
       : 'text-[#1F2430]/70 hover:text-[#46127B] after:w-0 hover:after:w-full after:bg-[#46127B]'
     }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-[0_2px_24px_rgba(70,18,123,0.10)] py-2'
            : 'bg-white/95 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={navLinkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-2 text-sm font-medium text-[#1F2430]/70 hover:text-[#46127B] transition-colors"
                aria-label="Call us at +91 96369 01159"
              >
                <Phone size={15} strokeWidth={2.2} className="text-[#03A58D]" />
                <span className="font-poppins">+91 96369 01159</span>
              </a>
              <Button
                as={Link}
                href="/contact"
                variant="primary"
                size="sm"
              >
                Get a Quote
                <ChevronRight size={15} strokeWidth={2.5} />
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2 rounded-md text-[#46127B] hover:bg-[#DCEFE4] transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="bg-white border-t border-[#DCEFE4] px-4 py-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-poppins font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-[#46127B]/8 text-[#46127B] font-semibold'
                      : 'text-[#1F2430]/70 hover:bg-[#DCEFE4] hover:text-[#46127B]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 pt-3 border-t border-[#DCEFE4] flex flex-col gap-3">
              <a
                href="tel:+919636901159"
                className="flex items-center gap-2 px-4 text-sm font-medium text-[#1F2430]/70"
              >
                <Phone size={15} className="text-[#03A58D]" />
                +91 96369 01159
              </a>
              <Button
                as={Link}
                href="/contact"
                variant="primary"
                size="sm"
                className="mx-4"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
