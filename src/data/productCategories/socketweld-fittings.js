// src/data/productCategories/socketweldfittings.js
import sock from "../../assets/productsImage/forged-fittings.jpg";

const socketweldfittings = {
  id: 6,
  name: "Socketweld Fittings",
  slug: "socketweld-fittings",
  shortDescription:
    "High-quality socketweld fittings for industrial piping systems.",
  longDescription:
    "We offer premium quality socketweld fittings in various grades including High Nickel Alloy, Stainless Steel, Carbon Steel, and Alloy Steel for diverse industrial applications across chemical processing, oil & gas, marine, and aerospace industries.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Nickel Alloy, Stainless Steel, Carbon Steel, Alloy Steel",
    grades:
      "Inconel 600/625, Monel 400, Hastelloy C276, SS 304/316, Carbon Steel, Alloy Steel",
    form: "Socketweld Fittings (Elbow, Tee, Coupling, Union, Cross, Cap, Plug)",
    quality: "High-grade industrial quality",
  },

  categories: [
    {
      id: 1,
      image: sock,
      title: "Socketweld Fittings",
      description:
        "Premium quality socketweld fittings available in various grades for demanding industrial applications.",
      types: [
        {
          id: 1,
          title: "High Nickel Alloy Socketweld Fittings",
          slug: "high-nickel-alloy-socketweld-fittings",
          image: sock,
          description:
            "Premium nickel alloy socketweld fittings offering exceptional corrosion resistance, high-temperature strength, and superior performance in demanding applications.",
          specs: [
            "Exceptional Corrosion Resistance",
            "High Temperature Strength",
            "Chemical & Marine Grade",
          ],
        },
        {
          id: 2,
          title: "Stainless Steel Socketweld Fittings",
          slug: "stainless-steel-socketweld-fittings",
          image: sock,
          description:
            "High-quality stainless steel socketweld fittings providing excellent corrosion resistance, durability, and reliability.",
          specs: [
            "Superior Corrosion Resistance",
            "Durable & Reliable",
            "Pharmaceutical & Food Grade",
          ],
        },
        {
          id: 3,
          title: "Carbon Steel Socketweld Fittings",
          slug: "carbon-steel-socketweld-fittings",
          image: sock,
          description:
            "Premium carbon steel socketweld fittings offering outstanding strength, excellent weldability, and cost-effectiveness.",
          specs: [
            "High Strength & Weldability",
            "Cost-Effective",
            "Oil & Gas Grade",
          ],
        },
        {
          id: 4,
          title: "Alloy Steel Socketweld Fittings",
          slug: "alloy-steel-socketweld-fittings",
          image: sock,
          description:
            "High-performance alloy steel socketweld fittings delivering exceptional strength, hardness, and wear resistance.",
          specs: [
            "Exceptional Strength & Hardness",
            "Wear Resistant",
            "High Temperature Service",
          ],
        },
      ],
    },
  ],
};

export default socketweldfittings;
