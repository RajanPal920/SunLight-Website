import React from 'react';

/**
 * Reusable Button component with brand variants.
 * Variants: 'primary' | 'secondary' | 'outline' | 'outline-teal'
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  href,
  onClick,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-poppins font-semibold
    rounded-md cursor-pointer border-2 transition-all duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
  `;

  const sizeMap = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantMap = {
    primary: `
      bg-[#46127B] border-[#46127B] text-white
      hover:bg-[#320D5A] hover:border-[#320D5A]
      focus-visible:ring-[#46127B]
      active:scale-[0.98]
    `,
    secondary: `
      bg-[#03A58D] border-[#03A58D] text-white
      hover:bg-[#028773] hover:border-[#028773]
      focus-visible:ring-[#03A58D]
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent border-[#46127B] text-[#46127B]
      hover:bg-[#46127B] hover:text-white
      focus-visible:ring-[#46127B]
      active:scale-[0.98]
    `,
    'outline-teal': `
      bg-transparent border-[#03A58D] text-[#03A58D]
      hover:bg-[#03A58D] hover:text-white
      focus-visible:ring-[#03A58D]
      active:scale-[0.98]
    `,
    'outline-white': `
      bg-transparent border-white text-white
      hover:bg-white hover:text-[#46127B]
      focus-visible:ring-white
      active:scale-[0.98]
    `,
  };

  const Element = href ? 'a' : Tag;
  const elementProps = href ? { href, ...props } : { onClick, ...props };

  return (
    <Element
      className={`${baseStyles} ${sizeMap[size]} ${variantMap[variant]} ${className}`}
      {...elementProps}
    >
      {children}
    </Element>
  );
};

export default Button;
