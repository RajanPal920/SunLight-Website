// src/data/productCategories/tube-sheets.js
import stain from "../../assets/productsImage/tubeSheets.jpg";

const tubeSheets = {
  id: 11,
  name: "Tube Sheets",
  slug: "tube-sheets",
  shortDescription:
    "High-quality tube sheets for heat exchangers, boilers, and pressure vessels.",
  longDescription:
    "We manufacture and supply premium quality tube sheets in various materials including Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys. Our tube sheets are designed to provide reliable performance, excellent corrosion resistance, and superior mechanical strength for heat exchangers, boilers, condensers, and pressure vessel applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys",
    grades: "SS 304/316, A36, A516 Gr.70, Inconel 600/625, Monel 400",
    size: "As per customer requirements (custom sizes available)",
    type: "Heat Exchanger Tube Sheets, Boiler Tube Sheets, Floating Tube Sheets, Fixed Tube Sheets",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Tube Sheets",
      description:
        "Premium quality tube sheets available in various materials and grades for demanding heat exchanger, boiler, and pressure vessel applications.",
      types: [
        {
          id: 1,
          title: "Tube Sheets",
          slug: "tube-sheets",
          specs: [
            "High Mechanical Strength",
            "Excellent Corrosion Resistance",
            "Precision Machined",
            "Custom Sizes Available",
          ],
        },
      ],
    },
  ],
};

export default tubeSheets;
