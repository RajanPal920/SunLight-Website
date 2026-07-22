// src/data/productCategories/index.js
import pipesTubes from "./pipes-tubes";
import sheetsPlates from "./sheets-plates";
import billets from "./billets";
import buttweldfittings from "./buttweld-fittings";
import fasteners from "./fasteners";
import flanges from "./flanges";
import roundbars from "./round-bars";
import socketweldfittings from "./socketweld-fittings";
import refractoryAnchors from "./refractory-fittings";
import angleChannels from "./angles-channels";
import tubeSheets from "./tube-sheets";
import ferruleFittings from "./ferrule-fittings";
import claddedPlates from "./cladded-plates";
import olets from "./olets";
import valves from "./valves";
import graphiteFilledBronzeBush from "./graphite-filled-bronze-bush";

// Map for quick lookup by slug (using object, not array)
export const categoryDataMap = {
  "pipes-tubes": pipesTubes,
  "sheets-plates": sheetsPlates,
  billets: billets,
  flanges: flanges,
  fasteners: fasteners,
  "round-bars": roundbars,
  "buttweld-fittings": buttweldfittings,
  "socketweld-fittings": socketweldfittings,
  "refractory-fixings-anchors": refractoryAnchors,
  "angles-channels": angleChannels,
  "tube-sheets": tubeSheets,
  "ferrule-fittings": ferruleFittings,
  "cladded-plates": claddedPlates,
  olets: olets,
  valves: valves,
  "graphite-filled-bronze-bush": graphiteFilledBronzeBush,
};

// Export all individual category data
export {
  pipesTubes,
  sheetsPlates,
  billets,
  flanges,
  fasteners,
  roundbars,
  buttweldfittings,
  socketweldfittings,
  refractoryAnchors,
  angleChannels,
  tubeSheets,
  ferruleFittings,
  claddedPlates,
  olets,
  valves,
  graphiteFilledBronzeBush,
};

// Get all categories as an array
export const getAllCategories = () => {
  return Object.values(categoryDataMap);
};

// Get category by slug
export const getCategoryBySlug = (slug) => {
  return categoryDataMap[slug] || null;
};

// Get all products from all categories (flattened)
export const getAllProducts = () => {
  const allProducts = [];
  Object.values(categoryDataMap).forEach((category) => {
    // Check if category has categories array (like pipes-tubes)
    if (category.categories && Array.isArray(category.categories)) {
      category.categories.forEach((subCategory) => {
        if (subCategory.types) {
          subCategory.types.forEach((type) => {
            allProducts.push({
              ...type,
              categorySlug: category.slug,
              categoryName: category.name,
              subCategoryTitle: subCategory.title,
            });
          });
        }
      });
    }
    // Check if category is an array (like sheets-plates)
    else if (Array.isArray(category)) {
      category.forEach((item) => {
        allProducts.push({
          ...item,
          categorySlug: item.slug,
          categoryName: item.title,
        });
      });
    }
  });
  return allProducts;
};

// Default export for backward compatibility
export default {
  pipesTubes,
  sheetsPlates,
  billets,
  socketweldfittings,
  categoryDataMap,
  getAllCategories,
  getCategoryBySlug,
  getAllProducts,
};
