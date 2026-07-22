
import stain from "../../assets/productsImage/refractory-anchor.jpg";

const refractoryAnchors = {
  id: 9,
  name: "Refractory Fixings & Anchors",
  slug: "refractory-fixings-anchors",
  shortDescription:
    "High-quality refractory fixings and anchors for high-temperature industrial applications.",
  longDescription:
    "We manufacture and supply premium quality refractory fixings and anchors including V-anchors, Y-anchors, ceramic anchors, and stainless steel anchors for furnace lining, kiln construction, and high-temperature industrial applications. Our products are designed to provide reliable performance in extreme heat environments.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Ceramic",
    grades: "SS 304, SS 310, SS 316, Inconel 600, Hastelloy C276, Alloy Steel",
    size: "As per customer requirements (custom sizes available)",
    type: "V-Anchors, Y-Anchors, C-Anchors, Ceramic Anchors, Welding Anchors",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Refractory Fixings & Anchors",
      description:
        "Premium quality refractory fixings and anchors available in various materials and grades for demanding high-temperature industrial applications.",
      types: [
        {
          id: 1,
          title: "Refractory Fixings & Anchors",
          slug: "refractory-fixings-anchors",
          specs: [
            "High Temperature Resistance (up to 1200°C)",
            "Excellent Corrosion Resistance",
            "Superior Mechanical Strength",
            "Custom Sizes Available",
          ],
        },
      ],
    },
  ],
};

export default refractoryAnchors;
