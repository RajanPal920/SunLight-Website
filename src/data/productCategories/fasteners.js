// src/data/productCategories/fasteners.js
import stain from "../../assets/productsImage/fastener.jpg";

const fasteners = {
  id: 8,
  name: "Fasteners",
  slug: "fasteners",
  shortDescription: "Complete range of industrial fasteners and hardware.",
  longDescription:
    "We manufacture and supply high-quality industrial fasteners including bolts, nuts, screws, washers, and studs in various materials and grades. Our fasteners are available in stainless steel, carbon steel, alloy steel, and nickel alloy to meet diverse industrial requirements across construction, automotive, oil & gas, and manufacturing sectors.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloy",
    grades: "4.6, 4.8, 5.6, 5.8, 8.8, 10.9, 12.9",
    form: "Bolts, Nuts, Screws, Washers, Studs",
    quality: "High-grade industrial quality",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Fasteners",
      description:
        "Premium quality fasteners available in various materials and grades for demanding industrial applications.",
      types: [
        {
          id: 1,
          title: "High Nickel Alloy Fasteners",
          slug: "high-nickel-alloy-fasteners",
          specs: [
            "Exceptional Corrosion Resistance",
            "High Temperature Strength",
            "Chemical & Marine Grade",
            "Aerospace & Nuclear Grade",
          ],
        },
        {
          id: 2,
          title: "Stainless Steel Fasteners",
          slug: "stainless-steel-fasteners",
          specs: [
            "Excellent Corrosion Resistance",
            "Durable & Reliable",
            "Pharmaceutical & Food Grade",
            "Wide Range of Grades",
          ],
        },
        {
          id: 3,
          title: "Carbon Steel Fasteners",
          slug: "carbon-steel-fasteners",
          specs: [
            "High Strength & Weldability",
            "Cost-Effective",
            "Construction & Industrial Grade",
            "Wide Range of Sizes",
          ],
        },
        {
          id: 4,
          title: "Alloy Steel Fasteners",
          slug: "alloy-steel-fasteners",
          specs: [
            "Exceptional Strength & Hardness",
            "Wear Resistant",
            "High Temperature Service",
            "Oil & Gas Grade",
          ],
        },
        {
          id: 5,
          title: "Non-Ferrous Metal Fasteners",
          slug: "non-ferrous-metal-fasteners",
          specs: [
            "Excellent Conductivity",
            "Lightweight & Corrosion Resistant",
            "Electrical & Marine Grade",
            "Specialized Applications",
          ],
        },
      ],
    },
  ],
};

export default fasteners;
