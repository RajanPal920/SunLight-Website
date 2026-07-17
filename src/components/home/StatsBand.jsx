import React from 'react';
import { Calendar, ShieldCheck, Layers, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: '2006',
    label: 'Established',
    sub: 'Two decades of precision manufacturing',
  },
  {
    icon: ShieldCheck,
    value: 'ISO 9000:2015',
    label: 'Certified',
    sub: 'Internationally recognised quality system',
  },
  {
    icon: Layers,
    value: '6+',
    label: 'Product Categories',
    sub: 'Flanges · Fittings · Pipes · Plates & more',
  },
  {
    icon: MapPin,
    value: 'Pan-India',
    label: 'Branch Network',
    sub: 'Mumbai · Delhi · Bangalore · Ahmedabad · Barmer',
  },
];

const StatsBand = () => {
  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #46127B 0%, #320D5A 50%, #03A58D 100%)',
      }}
      aria-label="Company statistics"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center gap-4 py-8 px-6
                           ${idx < stats.length - 1
                             ? 'border-b lg:border-b-0 lg:border-r border-white/15'
                             : ''
                           }`}
              >
                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={24} className="text-white" strokeWidth={1.8} aria-hidden="true" />
                </div>

                {/* Value */}
                <div>
                  <p className="font-poppins font-bold text-3xl text-white leading-none">
                    {stat.value}
                  </p>
                  <p className="font-poppins font-semibold text-sm text-[#03A58D] mt-1">
                    {stat.label}
                  </p>
                  <p className="font-poppins text-xs text-white/50 mt-1 leading-relaxed">
                    {stat.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBand;
