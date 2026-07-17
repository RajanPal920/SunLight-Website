import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #46127B 0%, #320D5A 45%, #03A58D 100%)',
        }}
        aria-hidden="true"
      />

      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff 0px,
            #ffffff 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
        aria-hidden="true"
      />

      {/* Teal radial glow — right */}
      <div
        className="absolute right-0 top-0 w-96 h-96 opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 30%, #03A58D, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span className="inline-block font-poppins font-semibold text-xs uppercase tracking-widest text-[#03A58D] mb-4">
          Get In Touch
        </span>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5"
        >
          Looking for Reliable<br />
          <span style={{ color: '#DCEFE4' }}>Flanges & Fittings Suppliers?</span>
        </h2>

        {/* Sub-copy */}
        <p className="font-poppins text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Get precise specifications, competitive pricing, and fast delivery — backed by ISO 9000:2015 certified manufacturing. Speak to our technical team today.
        </p>

        {/* Contact cards row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {/* Phone card */}
          <a
            href="tel:+919636901159"
            id="cta-phone-link"
            className="group flex items-center gap-4 px-7 py-5 rounded-2xl bg-white/10
                       border border-white/20 hover:bg-white/20
                       transition-all duration-200 text-left"
            aria-label="Call +91 96369 01159"
          >
            <div className="w-12 h-12 rounded-xl bg-[#03A58D]/30 flex items-center justify-center flex-shrink-0">
              <Phone size={22} className="text-white" />
            </div>
            <div>
              <p className="font-poppins text-xs text-white/50 uppercase tracking-wider">Call Us</p>
              <p className="font-poppins font-semibold text-white">+91 96369 01159</p>
              <p className="font-poppins text-xs text-white/60">+91 98332 86629</p>
            </div>
          </a>

          {/* Email card */}
          <a
            href="mailto:sunlight.barmer@gmail.com"
            id="cta-email-link"
            className="group flex items-center gap-4 px-7 py-5 rounded-2xl bg-white/10
                       border border-white/20 hover:bg-white/20
                       transition-all duration-200 text-left"
            aria-label="Email sunlight.barmer@gmail.com"
          >
            <div className="w-12 h-12 rounded-xl bg-[#46127B]/40 flex items-center justify-center flex-shrink-0">
              <Mail size={22} className="text-white" />
            </div>
            <div>
              <p className="font-poppins text-xs text-white/50 uppercase tracking-wider">Email Us</p>
              <p className="font-poppins font-semibold text-white">sunlight.barmer</p>
              <p className="font-poppins text-xs text-white/60">@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Primary CTA */}
        <Link
          to="/contact"
          id="cta-contact-btn"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl
                     bg-white text-[#46127B] font-poppins font-bold text-base
                     hover:bg-[#DCEFE4] hover:shadow-[0_8px_40px_rgba(255,255,255,0.25)]
                     transition-all duration-200 active:scale-[0.98]"
        >
          Contact Us — Get a Free Quote
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
