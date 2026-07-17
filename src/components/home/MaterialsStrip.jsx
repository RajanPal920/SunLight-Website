import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const materials = [
  { label: 'Stainless Steel', grades: 'AISI 304 / 304L / 316 / 316L / 317 / 321 / 347 / 310' },
  { label: 'Carbon Steel', grades: 'All standard grades' },
  { label: 'Alloy Steel', grades: 'Chrome-Moly & more' },
  { label: 'Monel', grades: 'Monel 400 / K-500' },
  { label: 'Inconel', grades: '600 / 625 / 800 / 825' },
  { label: 'Hastelloy', grades: 'C-276 / C-22 / B2' },
  { label: 'Copper', grades: 'C10100 / C11000' },
  { label: 'Brass', grades: 'C26000 / C36000' },
];

const MaterialsStrip = () => {
  return (
    <section
      className="py-16 overflow-hidden"
      style={{ background: '#DCEFE4' }}
      aria-labelledby="materials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          eyebrow="Materials We Work With"
          heading="Extensive Metallurgical Range"
          subheading="From common grades to exotic alloys — we supply the right material for your exact process requirement."
          align="center"
          className="mb-10"
        />

        {/* Material pills grid */}
        <div
          className="flex flex-wrap justify-center gap-4"
          role="list"
          aria-label="Materials and metal grades"
        >
          {materials.map((mat) => (
            <div
              key={mat.label}
              role="listitem"
              className="flex flex-col gap-1 px-6 py-4 rounded-2xl min-w-[160px] text-center
                         bg-white border-2 border-[#46127B]/15
                         hover:border-[#46127B]/40 hover:-translate-y-1
                         hover:shadow-[0_8px_32px_rgba(70,18,123,0.12)]
                         transition-all duration-300 cursor-default"
            >
              <span className="font-poppins font-bold text-sm text-[#46127B]">
                {mat.label}
              </span>
              <span className="font-poppins text-xs text-[#1F2430]/50 leading-relaxed">
                {mat.grades}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center font-poppins text-sm text-[#1F2430]/50">
          Available in multiple forms: Sheets, Plates, Coils, Rods, Pipes, Flanges &amp; Fittings · Custom grades on request
        </p>
      </div>
    </section>
  );
};

export default MaterialsStrip;
