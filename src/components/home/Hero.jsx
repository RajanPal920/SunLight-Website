import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

/* ─── Abstract SVG Flange/Pipe Illustration ───────────────────── */
const FlangeIllustration = () => (
  <svg
    viewBox="0 0 480 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-xl mx-auto"
    aria-label="Abstract illustration of industrial flanges and pipe fittings"
    role="img"
  >
    <defs>
      <linearGradient id="purpleTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#46127B" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#03A58D" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#03A58D" />
        <stop offset="100%" stopColor="#028773" />
      </linearGradient>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#46127B" />
        <stop offset="100%" stopColor="#320D5A" />
      </linearGradient>
      <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#03A58D" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#03A58D" stopOpacity="0" />
      </radialGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#03A58D" floodOpacity="0.25" />
      </filter>
    </defs>

    {/* Background subtle glow */}
    <ellipse cx="240" cy="210" rx="180" ry="150" fill="url(#glowGrad)" />

    {/* Main Weld-Neck Flange — large center */}
    {/* Outer ring */}
    <circle cx="240" cy="200" r="130" stroke="url(#purpleTealGrad)" strokeWidth="18" fill="none" filter="url(#shadow)" />
    {/* Bolt hole ring */}
    <circle cx="240" cy="200" r="110" stroke="#03A58D" strokeWidth="1.5" fill="none" strokeDasharray="6 5" />
    {/* Inner bore */}
    <circle cx="240" cy="200" r="68" fill="url(#purpleGrad)" />
    <circle cx="240" cy="200" r="58" stroke="#03A58D" strokeWidth="2" fill="none" />
    <circle cx="240" cy="200" r="44" fill="#320D5A" />
    <circle cx="240" cy="200" r="36" stroke="#03A58D" strokeWidth="1" fill="none" />

    {/* Bolt holes — 8 equally spaced */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x = 240 + 95 * Math.cos(rad);
      const y = 200 + 95 * Math.sin(rad);
      return (
        <circle key={i} cx={x} cy={y} r="7" fill="#1F2430" stroke="#03A58D" strokeWidth="1.5" />
      );
    })}

    {/* Center detail lines — raised neck simulation */}
    <circle cx="240" cy="200" r="28" stroke="#46127B" strokeWidth="2.5" fill="none" />
    <circle cx="240" cy="200" r="18" fill="url(#tealGrad)" opacity="0.6" />

    {/* Small flange — top left */}
    <g transform="translate(60, 65) scale(0.42)">
      <circle cx="100" cy="100" r="85" stroke="#46127B" strokeWidth="15" fill="none" />
      <circle cx="100" cy="100" r="55" fill="#320D5A" />
      <circle cx="100" cy="100" r="42" stroke="#03A58D" strokeWidth="2" fill="none" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 70 * Math.cos(rad);
        const y = 100 + 70 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="6" fill="#1F2430" stroke="#03A58D" strokeWidth="1.2" />;
      })}
    </g>

    {/* Small flange — bottom right */}
    <g transform="translate(310, 290) scale(0.38)">
      <circle cx="100" cy="100" r="85" stroke="#03A58D" strokeWidth="12" fill="none" />
      <circle cx="100" cy="100" r="52" fill="#46127B" />
      <circle cx="100" cy="100" r="38" stroke="#DCEFE4" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      {[0, 90, 180, 270].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 100 + 68 * Math.cos(rad);
        const y = 100 + 68 * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="7" fill="#320D5A" stroke="#03A58D" strokeWidth="1.5" />;
      })}
    </g>

    {/* Pipe section — horizontal */}
    <rect x="34" y="188" width="90" height="24" rx="4" fill="url(#purpleGrad)" />
    <rect x="34" y="193" width="90" height="14" rx="3" fill="#03A58D" opacity="0.25" />

    {/* Pipe section — right */}
    <rect x="356" y="188" width="90" height="24" rx="4" fill="url(#tealGrad)" />
    <rect x="356" y="193" width="90" height="14" rx="3" fill="#46127B" opacity="0.2" />

    {/* Elbow fitting hint — top right */}
    <path
      d="M380 80 Q420 80 420 120 L420 160"
      stroke="#03A58D"
      strokeWidth="18"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M380 80 Q420 80 420 120 L420 160"
      stroke="#DCEFE4"
      strokeWidth="6"
      fill="none"
      strokeLinecap="round"
      opacity="0.3"
    />

    {/* Label: ISO certified badge */}
    <g transform="translate(15, 320)">
      <rect x="0" y="0" width="130" height="34" rx="17" fill="#03A58D" opacity="0.15" />
      <rect x="0" y="0" width="130" height="34" rx="17" stroke="#03A58D" strokeWidth="1" fill="none" />
      <text x="65" y="14" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="600" fontSize="9" fill="#03A58D">ISO 9000:2015</text>
      <text x="65" y="26" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontSize="7.5" fill="#03A58D" opacity="0.8">CERTIFIED MANUFACTURER</text>
    </g>

    {/* Dimension lines decoration */}
    <line x1="240" y1="60" x2="240" y2="80" stroke="#03A58D" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    <line x1="240" y1="320" x2="240" y2="340" stroke="#03A58D" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    <line x1="100" y1="200" x2="120" y2="200" stroke="#03A58D" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
    <line x1="360" y1="200" x2="380" y2="200" stroke="#03A58D" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
  </svg>
);

/* ─── Hero Component ──────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero — World class products for world class industries"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #320D5A 0%, #46127B 40%, #1F2430 100%)',
        }}
        aria-hidden="true"
      />

      {/* Radial teal accent */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 20%, #03A58D 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Dotted grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-6">


            {/* Main Headline */}
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
              World Class Products<br />
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(90deg, #03A58D, #DCEFE4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                for World Class
              </span>
              <br />Industries.
            </h1>

            {/* Sub-copy */}
            <p className="font-poppins text-lg text-white/70 leading-relaxed max-w-lg">
              Precision-engineered <strong className="text-white font-semibold">S.S. & M.S. Flanges</strong>, <strong className="text-white font-semibold">Forged Pipe Fittings</strong>, and <strong className="text-white font-semibold">Ferrous & Non-Ferrous Metals</strong> — manufactured to exacting international standards.
            </p>

            {/* Industry tags */}
            <div className="flex flex-wrap gap-2">
              {['Refineries', 'Chemical Plants', 'Power Sector', 'Fertilizer Companies', 'Distilleries'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-poppins font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                as={Link}
                href="/products"
                variant="secondary"
                size="lg"
              >
                Explore Products
                <ArrowRight size={18} />
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="outline-white"
                size="lg"
              >
                Request a Quote
              </Button>
            </div>


          </div>

          {/* Right: SVG Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Glow backdrop */}
              <div
                className="absolute inset-8 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #03A58D, #46127B)' }}
                aria-hidden="true"
              />
              <FlangeIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20"
        >
          <defs>
            <linearGradient id="heroWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#46127B" />
              <stop offset="50%" stopColor="#03A58D" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#46127B" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C360,100 720,20 1080,60 C1260,80 1380,70 1440,60 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
          <path
            d="M0,70 C300,40 600,90 900,60 C1100,40 1300,80 1440,70"
            stroke="url(#heroWaveGrad)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>


    </section>
  );
};

export default Hero;
