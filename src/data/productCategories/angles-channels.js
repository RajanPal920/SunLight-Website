// src/data/productCategories/angle-channels.js
import stain from "../../assets/productsImage/angle-channels.jpg";

const angleChannels = {
  id: 10,
  name: "Angles & Channels",
  slug: "angles-channels",
  shortDescription:
    "High-quality angles and channels for structural and industrial applications.",
  longDescription:
    "We manufacture and supply premium quality angles and channels in various materials including Stainless Steel, Carbon Steel, and Alloy Steel. Our products are designed to provide reliable structural support and durability for construction, industrial, and engineering applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel",
    grades: "SS 304, SS 316, A36, A572, A588",
    size: "As per customer requirements (custom sizes available)",
    type: "Equal Angles, Unequal Angles, Channels, C-Channels, U-Channels",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Angles & Channels",
      description:
        "Premium quality angles and channels available in various materials and grades for demanding structural and industrial applications.",
      types: [
        {
          id: 1,
          title: "Angles & Channels",
          slug: "angles-channels",
          specs: [
            "High Structural Strength",
            "Excellent Corrosion Resistance",
            "Superior Mechanical Properties",
            "Custom Sizes Available",
          ],
        },
      ],
    },
  ],
};

export default angleChannels;
