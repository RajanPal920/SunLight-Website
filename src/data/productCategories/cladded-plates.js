// src/data/productCategories/cladded-plates.js
import stain from "../../assets/productsImage/cladded-plates.jpg";

const claddedPlates = {
  id: 13,
  name: "Cladded Plates",
  slug: "cladded-plates",
  shortDescription:
    "High-quality cladded plates for industrial applications requiring corrosion resistance and strength.",
  longDescription:
    "We manufacture and supply premium quality cladded plates including stainless steel cladded plates, nickel alloy cladded plates, and copper cladded plates. Our cladded plates are designed to provide superior corrosion resistance, excellent mechanical strength, and reliable performance for pressure vessels, heat exchangers, chemical processing, and offshore applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Nickel Alloys, Copper, Titanium",
    grades:
      "SS 304/316/310, Inconel 600/625, Monel 400, Hastelloy C276, Copper",
    size: "As per customer requirements (custom sizes available)",
    type: "Stainless Steel Cladded Plates, Nickel Alloy Cladded Plates, Copper Cladded Plates, Titanium Cladded Plates",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "Cladded Plates",
      description:
        "Premium quality cladded plates available in various materials and grades for demanding industrial applications.",
      types: [
        {
          id: 1,
          title: "Cladded Plates",
          slug: "cladded-plates",
          specs: [
            "Superior Corrosion Resistance",
            "High Mechanical Strength",
            "Excellent Bonding Quality",
            "Custom Sizes Available",
          ],
        },
      ],
    },
  ],
};

export default claddedPlates;
