// src/data/productCategories/ferrule-fittings.js
import stain from "../../assets/productsImage/ferrule-fittings.jpg";

const ferruleFittings = {
  id: 12,
  name: "Ferrule Fittings",
  slug: "ferrule-fittings", // ✅ Correct slug
  shortDescription:
    "High-quality ferrule fittings for instrumentation, hydraulic, and pneumatic systems.",
  longDescription:
    "We manufacture and supply premium quality ferrule fittings including single ferrule and double ferrule fittings in various materials including Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys. Our ferrule fittings are designed to provide leak-proof connections, reliable performance, and superior corrosion resistance for instrumentation, hydraulic, pneumatic, and process control applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys",
    grades: "SS 304/316, Monel 400, Inconel 600/625, Hastelloy C276",
    size: '1/8" to 2" (custom sizes available)',
    type: "Single Ferrule Fittings, Double Ferrule Fittings, Tube Fittings, Compression Fittings",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Ferrule Fittings",
      description:
        "Premium quality ferrule fittings available in various materials and grades for demanding instrumentation, hydraulic, and pneumatic applications.",
      types: [
        {
          id: 1,
          title: "Ferrule Fittings",
          slug: "ferrule-fittings", 
          specs: [
            "Leak-Proof Connections",
            "Excellent Corrosion Resistance",
            "Precision Machined",
            "High Pressure & Temperature Resistance",
          ],
        },
      ],
    },
  ],
};

export default ferruleFittings;
