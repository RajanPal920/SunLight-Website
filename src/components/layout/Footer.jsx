import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

/* ─── Brand Logo (compact version for footer) ─────────────────── */
const FooterLogo = () => (
  <div className="flex items-center gap-3">
    <svg width="44" height="44" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="26" cy="24" rx="23" ry="20" stroke="#46127B" strokeWidth="2" fill="none" />
      <text x="26" y="30" textAnchor="middle" fontFamily="'Playfair Display', serif" fontStyle="italic" fontWeight="700" fontSize="22" fill="#46127B">S</text>
      <path d="M 8 38 Q 26 48 44 38" stroke="#03A58D" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
    <div className="flex flex-col leading-tight">
      <span className="text-white font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '1.35rem' }}>
        Sunlight
      </span>
      <span className="text-white/50 font-semibold uppercase leading-tight" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.48rem', letterSpacing: '0.12em' }}>
        Forge &amp; Fitting Pvt. Ltd.
      </span>
    </div>
  </div>
);

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Quality & Certifications', to: '/quality' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1F2430] text-white overflow-hidden">
      {/* Purple/Teal Wave — top edge */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <defs>
            <linearGradient id="footerWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#46127B" />
              <stop offset="55%" stopColor="#320D5A" />
              <stop offset="100%" stopColor="#03A58D" />
            </linearGradient>
          </defs>
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill="url(#footerWaveGrad)"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Col 1: Logo + Tagline */}
            <div className="lg:col-span-1">
              <FooterLogo />
              <p className="mt-4 text-white/60 text-sm leading-relaxed font-poppins max-w-xs">
                World Class Products for World Class Industries. ISO 9000:2015 certified manufacturer of precision steel flanges and fittings.
              </p>
              <div className="mt-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#03A58D]/40 text-[#03A58D] text-xs font-semibold font-poppins">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#03A58D] animate-pulse" />
                  ISO 9000:2015 Certified
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="font-poppins font-semibold text-sm uppercase tracking-widest text-[#03A58D] mb-5">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-sm text-white/60 hover:text-[#03A58D] transition-colors font-poppins group"
                    >
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h3 className="font-poppins font-semibold text-sm uppercase tracking-widest text-[#03A58D] mb-5">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+919636901159"
                    className="flex items-start gap-3 text-sm text-white/60 hover:text-[#03A58D] transition-colors font-poppins"
                    aria-label="Phone: +91 96369 01159"
                  >
                    <Phone size={15} className="text-[#03A58D] mt-0.5 flex-shrink-0" />
                    <span>+91 96369 01159<br />+91 98332 86629</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:sunlight.barmer@gmail.com"
                    className="flex items-start gap-3 text-sm text-white/60 hover:text-[#03A58D] transition-colors font-poppins"
                    aria-label="Email: sunlight.barmer@gmail.com"
                  >
                    <Mail size={15} className="text-[#03A58D] mt-0.5 flex-shrink-0" />
                    sunlight.barmer@gmail.com
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-white/60 font-poppins">
                    <MapPin size={15} className="text-[#03A58D] mt-0.5 flex-shrink-0" />
                    <span>Office No. 8, Ground Floor,<br />Earth Enclave, VP Road,<br />Girgaon, Mumbai – 400004</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Col 4: Offices */}
            <div>
              <h3 className="font-poppins font-semibold text-sm uppercase tracking-widest text-[#03A58D] mb-5">
                Our Offices
              </h3>
              <ul className="space-y-4 text-sm text-white/60 font-poppins">
                <li>
                  <p className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-1">Head Office</p>
                  <p>Girgaon, Mumbai – 400004</p>
                </li>
                <li>
                  <p className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-1">Factory</p>
                  <p>Steel Market, Kalamboli,<br />Raigad, Navi Mumbai – 410218</p>
                </li>
                <li>
                  <p className="text-white/80 font-semibold text-xs uppercase tracking-wider mb-1">Branch Offices</p>
                  <p>Barmer (RJ) · New Delhi<br />Bangalore · Ahmedabad</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs font-poppins text-center sm:text-left">
              © {year} Sunlight Forge &amp; Fitting Pvt. Ltd. All rights reserved.
            </p>
            <p className="text-white/30 text-xs font-poppins">
              Established 2006 · ISO 9000:2015 Certified
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
