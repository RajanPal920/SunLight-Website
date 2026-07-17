import React from 'react';
import { ShieldCheck, Microscope, Globe, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    id: 'quality-control',
    icon: ShieldCheck,
    title: 'Strict Quality Control',
    desc: 'Every product undergoes rigorous multi-stage inspection — from raw material verification to dimensional checks and pressure testing — before leaving our facility.',
    color: '#46127B',
    bgGrad: 'from-[#46127B]/10 to-[#46127B]/4',
  },
  {
    id: 'iso-certified',
    icon: CheckCircle,
    title: 'ISO 9000:2015 Certified',
    desc: 'Our ISO certification reflects our commitment to a globally recognised quality management system, ensuring consistency and traceability across every order.',
    color: '#03A58D',
    bgGrad: 'from-[#03A58D]/10 to-[#03A58D]/4',
  },
  {
    id: 'material-range',
    icon: Microscope,
    title: 'Wide Material Range',
    desc: 'We work across Stainless Steel (304/316/321/310), Carbon Steel, Alloy Steel, Monel, Inconel, Hastelloy, Copper, and Brass — a full-spectrum metallurgical capability.',
    color: '#46127B',
    bgGrad: 'from-[#46127B]/10 to-[#46127B]/4',
  },
  {
    id: 'pan-india',
    icon: Globe,
    title: 'Pan-India Reach',
    desc: 'Trusted by refineries, fertilizer companies, power plants, chemical companies, and distilleries across India. Branches in Mumbai, Delhi, Bangalore, Ahmedabad & Barmer.',
    color: '#03A58D',
    bgGrad: 'from-[#03A58D]/10 to-[#03A58D]/4',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <SectionHeading
          eyebrow="Why Choose Us"
          heading="Built on Quality. Backed by Experience."
          subheading="We combine two decades of manufacturing expertise with rigorous quality standards to deliver fittings and flanges that perform under the most demanding industrial conditions."
          align="center"
          className="mb-14"
        />

        {/* 4-column features */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
          role="list"
          aria-label="Why choose Sunlight Forge"
        >
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                role="listitem"
                className="group flex flex-col gap-5 p-7 rounded-2xl
                           border border-[#F5F6F8] bg-[#F5F6F8]
                           hover:bg-white hover:border-[#46127B]/15
                           hover:shadow-[0_12px_40px_rgba(70,18,123,0.10)]
                           hover:-translate-y-1 transition-all duration-300"
              >
                {/* Number + icon */}
                <div className="flex items-start gap-3">
                  <span
                    className="font-poppins font-bold text-4xl leading-none opacity-15 select-none"
                    style={{ color: feat.color }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                               transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${feat.color}14` }}
                  >
                    <Icon size={22} style={{ color: feat.color }} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-poppins font-bold text-base text-[#1F2430] leading-tight
                             group-hover:text-[#46127B] transition-colors"
                >
                  {feat.title}
                </h3>

                {/* Desc */}
                <p className="font-poppins text-sm text-[#1F2430]/60 leading-relaxed flex-1">
                  {feat.desc}
                </p>

                {/* Accent line */}
                <div
                  className="h-0.5 w-10 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${feat.color}, transparent)` }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
