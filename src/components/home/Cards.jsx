// src/components/home/Cards.jsx
import React from "react";
import { Link } from "react-router-dom";

import buttweld from "../../assets/productsImage/buttweld.jpg";
import coils from "../../assets/productsImage/coils.jpg";
import flanges from "../../assets/productsImage/flanges.jpg";
import pipes from "../../assets/productsImage/pipes.jpg";
import roundBars from "../../assets/productsImage/round-bars.jpg";
import sheets from "../../assets/productsImage/sheets.jpg";
import strips from "../../assets/productsImage/strips.jpg";
import wires from "../../assets/productsImage/wires.jpg";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      title: "PIPES & TUBES",
      image: pipes,
      description:
        "Premium quality pipes and tubes for industrial applications",
      link: "/products/pipes-tubes",
    },
    {
      id: 2,
      title: "SHEETS & PLATES",
      image: sheets,
      description: "High-grade sheets and plates for heavy engineering",
      link: "/products/sheets-plates",
    },
    {
      id: 3,
      title: "FLANGES & FITTINGS",
      image: flanges,
      description: "High-strength flanges and fittings for secure connections",
      link: "/products/flanges",
    },
    {
      id: 4,
      title: "RODS & BARS",
      image: roundBars,
      description: "Precision rods and bars for critical applications",
      link: "/products/round-bars",
    },
    {
      id: 5,
      title: "COILS",
      image: coils,
      description:
        "High-quality coils for continuous processing and manufacturing",
      link: "/products/coils",
    },
    {
      id: 6,
      title: "STRIPS",
      image: strips,
      description: "Precision strips for specialized industrial applications",
      link: "/products/strips",
    },
    {
      id: 7,
      title: "BUTTWELD FITTINGS",
      image: buttweld,
      description: "Precision buttweld fittings for piping systems",
      link: "/products/socketweld-fittings",
    },
    {
      id: 8,
      title: "WIRES & MESH",
      image: wires,
      description: "Industrial wires and mesh for filtration and reinforcement",
      link: "/products/wires",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#03A58D]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#46127B] uppercase">
              Product Manifest
            </span>
            <span className="w-10 h-0.5 bg-[#03A58D]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-[#46127B]">
            Industrial Product
            <br />
            <span className="text-[#03A58D]">Classifications</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
            Premium quality industrial components engineered for critical
            applications across global industries
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
                margin: "0px 0px -50px 0px",
              }}
              variants={fadeUp}
              transition={{ delay: index * 0.08 }}
              className="h-full"
            >
              <Link
                to={card.link}
                className="group block bg-white rounded-2xl overflow-hidden border-2 border-slate-200 hover:border-[#46127B] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageVariants}
                    transition={{ delay: index * 0.08 + 0.1 }}
                  />
                  {/* Image Overlay - Purple gradient on hover */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-[#46127B]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
                </div>

                {/* Content */}
                <div className="p-6 bg-white group-hover:bg-[#46127B] transition-colors duration-300">
                  <h3 className="text-lg font-black text-[#46127B] uppercase group-hover:text-white transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-white/80 mt-2 leading-relaxed transition-colors duration-300">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-[#03A58D] font-semibold text-sm group-hover:text-white group-hover:gap-3 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
