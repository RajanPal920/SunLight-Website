import React from 'react';
import { ShieldCheck, Calendar, Layers, MapPin } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const stats = [
  {
    icon: Calendar,
    value: '2006',
    label: 'Year Established',
    detail: 'Operating as Sunlight Metal Industries, incorporated as Pvt. Ltd. in 2017',
    color: '#46127B',
    bg: '#46127B',
  },
  {
    icon: ShieldCheck,
    value: 'ISO 9000:2015',
    label: 'Certified Quality',
    detail: 'Internationally certified quality management system',
    color: '#03A58D',
    bg: '#03A58D',
  },
  {
    icon: Layers,
    value: '6+',
    label: 'Product Categories',
    detail: 'Flanges, fittings, pipes, tube fittings, plates, coils & more',
    color: '#46127B',
    bg: '#46127B',
  },
  {
    icon: MapPin,
    value: '4+',
    label: 'Branch Offices',
    detail: 'Mumbai · Delhi · Bangalore · Ahmedabad · Barmer',
    color: '#03A58D',
    bg: '#03A58D',
  },
];

const AboutSnapshot = () => {
  return (
    <section
      className="py-20 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: text + stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Company Summary */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="About Us"
              heading="India's Trusted Forge & Fitting Manufacturer"
              align="left"
            />
            <div className="space-y-4 text-[#1F2430]/65 font-poppins text-base leading-relaxed">
              <p>
                Founded in 2006 as <strong className="text-[#46127B] font-semibold">Sunlight Metal Industries</strong> and incorporated as <strong className="text-[#46127B] font-semibold">Sunlight Forge & Fitting Pvt. Ltd.</strong> in 2017, we are a leading Indian manufacturer and supplier of precision steel flanges, forged pipe fittings, and industrial raw materials.
              </p>
              <p>
                As an <strong className="text-[#03A58D] font-semibold">ISO 9000:2015 certified company</strong>, we maintain stringent quality standards across every product we manufacture — serving India's most demanding industries including refineries, chemical plants, power sector, fertilizer companies, and distilleries.
              </p>
              <p>
                With our Head Office in Mumbai and a factory in Navi Mumbai, backed by a pan-India branch network, we deliver world-class industrial products with reliability and precision.
              </p>
            </div>

            {/* Inline certification badge */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-[#46127B]/15 bg-[#46127B]/4">
                <ShieldCheck size={28} className="text-[#46127B]" />
                <div>
                  <p className="font-poppins font-bold text-sm text-[#46127B]">ISO 9000:2015</p>
                  <p className="font-poppins text-xs text-[#1F2430]/50">Certified Quality Management</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-5 py-3 rounded-xl border-2 border-[#03A58D]/15 bg-[#03A58D]/4">
                <Calendar size={28} className="text-[#03A58D]" />
                <div>
                  <p className="font-poppins font-bold text-sm text-[#03A58D]">Est. 2006</p>
                  <p className="font-poppins text-xs text-[#1F2430]/50">Two Decades of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-[#F5F6F8]
                             bg-white shadow-[0_4px_24px_rgba(70,18,123,0.07)]
                             hover:shadow-[0_12px_40px_rgba(70,18,123,0.14)]
                             hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${stat.bg}18` }}
                  >
                    <Icon size={22} style={{ color: stat.color }} />
                  </div>

                  {/* Value */}
                  <div>
                    <p
                      className="font-poppins font-bold text-2xl leading-none mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="font-poppins font-semibold text-sm text-[#1F2430]">
                      {stat.label}
                    </p>
                    <p className="font-poppins text-xs text-[#1F2430]/50 mt-1 leading-relaxed">
                      {stat.detail}
                    </p>
                  </div>

                  {/* Accent corner */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 rounded-bl-[60px] opacity-5 transition-opacity duration-300 group-hover:opacity-10"
                    style={{ background: stat.color }}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
