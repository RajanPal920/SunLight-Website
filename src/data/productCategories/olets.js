// src/data/productCategories/olets.js
import stain from "../../assets/productsImage/olets.jpg";

const olets = {
  id: 14,
  name: "Olets",
  slug: "olets",
  shortDescription:
    "High-quality olets (branch connections) for industrial piping systems requiring reliable branch connections.",
  longDescription:
    "We manufacture and supply premium quality olets including weldolet, sockolet, threadolet, elbolet, latrolet, and sweepolet in various materials including Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys. Our olets are designed to provide reliable branch connections, excellent corrosion resistance, and superior mechanical strength for demanding industrial piping applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys",
    grades:
      "SS 304/316, A105, A350 LF2, Inconel 600/625, Monel 400, Hastelloy C276",
    size: '1/2" to 24" (custom sizes available)',
    type: "Weldolet, Sockolet, Threadolet, Elbolet, Latrolet, Sweepolet",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Olets",
      description:
        "Premium quality olets available in various materials and grades for demanding industrial piping applications.",
      types: [
        {
          id: 1,
          title: "Olets",
          slug: "olets",
          specs: [
            "Reliable Branch Connections",
            "Excellent Corrosion Resistance",
            "High Pressure & Temperature Resistance",
            "Custom Sizes Available",
          ],
        },
      ],
    },
  ],
};

export default olets;
