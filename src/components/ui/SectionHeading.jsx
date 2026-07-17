import React from 'react';

/**
 * SectionHeading — standardized brand heading with optional accent bar and subtitle.
 * align: 'left' | 'center'
 * theme: 'dark' | 'light' (text color context)
 */
const SectionHeading = ({
  eyebrow,
  heading,
  subheading,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#1F2430]';
  const eyebrowColor = theme === 'dark' ? 'text-[#03A58D]' : 'text-[#03A58D]';
  const subColor = theme === 'dark' ? 'text-white/70' : 'text-[#1F2430]/60';

  return (
    <div className={`flex flex-col ${alignClass} gap-3 ${className}`}>
      {eyebrow && (
        <span className={`font-poppins font-semibold text-sm tracking-widest uppercase ${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-poppins font-bold text-3xl md:text-4xl leading-tight ${textColor}`}>
        {heading}
      </h2>
      {/* Accent bar */}
      <div className={`flex gap-1.5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <span className="block h-1 w-10 rounded-full bg-[#46127B]" />
        <span className="block h-1 w-4 rounded-full bg-[#03A58D]" />
      </div>
      {subheading && (
        <p className={`font-poppins text-base md:text-lg max-w-2xl leading-relaxed ${subColor}`}>
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
