// src/data/productCategories/valves.js
import val from "../../assets/productsImage/valves.jpg";

const valves = {
  id: 14,
  name: "Valves",
  slug: "valves",
  shortDescription:
    "High-quality industrial valves for flow control in various applications.",
  longDescription:
    "We manufacture and supply premium quality industrial valves including gate valves, globe valves, ball valves, butterfly valves, check valves, and plug valves in various materials including Stainless Steel, Carbon Steel, Alloy Steel, and Nickel Alloys. Our valves are designed to provide reliable flow control, excellent corrosion resistance, and superior mechanical strength for demanding industrial applications.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloys",
    grades:
      "SS 304/316, A105, A350 LF2, Inconel 600/625, Monel 400, Hastelloy C276",
    size: '1/2" to 48" (custom sizes available)',
    type: "Gate Valves, Globe Valves, Ball Valves, Butterfly Valves, Check Valves, Plug Valves",
  },

  categories: [
    {
      id: 1,
      image: val,
      title: "Valves",
      description:
        "Premium quality valves available in various materials and grades for demanding industrial flow control applications.",
      types: [
        {
          id: 1,
          title: "Valves",
          slug: "valves",
          specs: [
            "Reliable Flow Control",
            "Excellent Corrosion Resistance",
            "High Pressure & Temperature Resistance",
            "Custom Sizes Available",
          ],
        },
      ],
    },
  ],
};

export default valves;
