// src/data/productCategories/billets.js
import bill from "../../assets/productsImage/billets.jpg";

const billets = {
  id: 7,
  name: "Billets",
  slug: "billets",
  shortDescription: "High-quality billets for manufacturing.",
  longDescription:
    "We offer premium quality billets in various grades including LCC/LCB, 4A/5A/6A, C12A, and GR 900 for diverse industrial applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Carbon Steel, Alloy Steel",
    grade: "LCC/LCB, 4A/5A/6A, C12A, GR 900",
    form: "Billets",
    quality: "High-grade industrial quality",
  },

  categories: [
    {
      id: 1,
      image: bill,
      title: "Billets",
      description:
        "High-quality billets for manufacturing various industrial components.",
      types: [
        {
          id: 1,
          title: "LCC/LCB Billets",
          slug: "lcc-lcb-billets",
          specs: ["Low Carbon Steel", "High Strength", "Excellent Formability"],
        },
        {
          id: 2,
          title: "4A/5A/6A Billets",
          slug: "4-5-6-billets",
          specs: ["Alloy Steel", "High Temperature Resistance", "Durable"],
        },
        {
          id: 3,
          title: "C12A Billets",
          slug: "c12a-billets",
          specs: ["Chrome Alloy", "High Hardness", "Wear Resistant"],
        },
        {
          id: 4,
          title: "GR 900 Billets",
          slug: "gr900-billets",
          specs: ["High Grade Alloy", "Superior Strength", "Heat Treatable"],
        },
      ],
    },
  ],
};

export default billets;
