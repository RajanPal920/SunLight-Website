// src/data/productCategories/index.js

import { ScrollText } from "lucide-react";
import coils from "./coils";
// import pipes from "./pipes";
// import flanges from "./flanges";
// import valves from "./valves";
// ... import all other category files

const productCategories = [
  {
    id: 3, // Match the ID from products.js
    name: "Coils",
    slug: "coils",
    icon: ScrollText,
    image: coils[0]?.image || null,
    description:
      "High-quality stainless steel coils available in various thicknesses and finishes.",
    count: coils.length,
    types: coils,
  },
  // Add more categories as you create them
];

const validCategories = productCategories.filter(
  (category) =>
    category &&
    typeof category === "object" &&
    category.id &&
    category.name &&
    category.icon &&
    Array.isArray(category.types) &&
    category.types.length > 0,
);

export default validCategories;
