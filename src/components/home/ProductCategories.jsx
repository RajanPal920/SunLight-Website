import React from 'react';
import { Link } from 'react-router-dom';
import { Disc, GitMerge, Wrench, AlignJustify, SlidersHorizontal, LayoutGrid, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const categories = [
  {
    id: 'flanges',
    icon: Disc,
    name: 'Flanges',
    tagline: 'Weld Neck · Slip-On · Socket Weld · Blind · Lap Joint · Ring Joint',
    desc: 'Precision-forged flanges in Class 150–2500 ratings across all standard types. Stainless, carbon & alloy steel.',
    accent: '#46127B',
  },
  {
    id: 'butt-weld-fittings',
    icon: GitMerge,
    name: 'Butt Weld Fittings',
    tagline: 'Elbows · Tees · Reducers · Caps · Stub-Ends',
    desc: 'High-integrity butt weld fittings for seamless high-pressure piping systems in critical applications.',
    accent: '#03A58D',
  },
  {
    id: 'forged-fittings',
    icon: Wrench,
    name: 'Screwed & Forged Fittings',
    tagline: 'Elbows · Tees · Unions · Couplings · Nipples · Plugs',
    desc: 'Threaded and socket-weld forged fittings for compact, high-pressure systems. Full accessory range.',
    accent: '#46127B',
  },
  {
    id: 'pipes',
    icon: AlignJustify,
    name: 'Pipes',
    tagline: 'Seamless & Welded · SS / CS / Alloy Steel',
    desc: 'Industrial-grade seamless and welded pipes in stainless, carbon, and alloy steel for all process requirements.',
    accent: '#03A58D',
  },
  {
    id: 'tube-fittings',
    icon: SlidersHorizontal,
    name: 'Tube Fittings',
    tagline: 'Compression · Adaptors · Unions · Ferrules',
    desc: 'Precision tube fittings for instrument and process tubing — leak-free connections for demanding environments.',
    accent: '#46127B',
  },
  {
    id: 'sheets-plates',
    icon: LayoutGrid,
    name: 'Sheets, Plates, Coils & Rods',
    tagline: 'Stainless Steel · Non-Ferrous Metal Stock',
    desc: 'Full range of SS sheets, plates, coils, and rods in all standard grades for fabrication and machining.',
    accent: '#03A58D',
  },
];

const ProductCategories = () => {
  return (
    <section
      className="py-20"
      style={{ background: '#F5F6F8' }}
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          eyebrow="Our Products"
          heading="Complete Range of Industrial Products"
          subheading="From precision flanges to industrial raw materials — we supply what your plant needs, in the grade you require."
          align="center"
          className="mb-14"
        />

        {/* 6-card grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Product categories"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <article
                key={cat.id}
                role="listitem"
                className="group relative flex flex-col gap-5 p-7 rounded-2xl bg-white
                           border border-transparent
                           shadow-[0_2px_16px_rgba(70,18,123,0.07)]
                           hover:shadow-[0_16px_48px_rgba(70,18,123,0.15)]
                           hover:-translate-y-1.5 hover:border-[#03A58D]/30
                           transition-all duration-300 cursor-default"
              >
                {/* Top: icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center
                             transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${cat.accent}14` }}
                >
                  <Icon
                    size={26}
                    style={{ color: cat.accent }}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* Name + tagline */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-poppins font-bold text-lg text-[#1F2430] group-hover:text-[#46127B] transition-colors">
                    {cat.name}
                  </h3>
                  <p
                    className="font-poppins font-medium text-xs uppercase tracking-wider transition-colors duration-300"
                    style={{ color: cat.accent }}
                  >
                    {cat.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="font-poppins text-sm text-[#1F2430]/60 leading-relaxed flex-1">
                  {cat.desc}
                </p>

                {/* Hover CTA link */}
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold font-poppins
                             opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0
                             transition-all duration-300"
                  style={{ color: cat.accent }}
                  aria-label={`View ${cat.name} products`}
                >
                  View Products <ArrowRight size={13} />
                </Link>

                {/* Teal accent bottom border on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full
                             scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  style={{ background: `linear-gradient(90deg, ${cat.accent}, transparent)` }}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

        {/* CTA row */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            id="view-all-products-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                       font-poppins font-semibold text-base
                       bg-[#46127B] text-white border-2 border-[#46127B]
                       hover:bg-[#320D5A] hover:border-[#320D5A]
                       transition-all duration-200 active:scale-[0.98]"
          >
            View Full Product Range
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
