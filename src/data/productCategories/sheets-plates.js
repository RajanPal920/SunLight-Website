// src/data/productCategories/sheets-plates.js
import tita from "../../assets/productsImage/sheets.jpg";

const sheetsplates = {
  id: 2,
  name: "Sheets, Plates & Coils",
  slug: "sheets-plates",
  shortDescription:
    "High-quality sheets, plates, and coils for industrial applications.",
  longDescription:
    "We offer premium quality sheets, plates, and coils in various grades including Nickel Alloy, Stainless Steel, Carbon Steel, and Alloy Steel for diverse industrial applications across aerospace, marine, chemical processing, construction, oil and gas, and power generation industries.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Nickel Alloy, Stainless Steel, Carbon Steel, Alloy Steel",
    grades: "Nickel 200/201, SS 304/316, Carbon Steel, Alloy Steel",
    form: "Sheets, Plates, Coils, Flats, Strips, Rings",
    quality: "High-grade industrial quality",
  },

  categories: [
    {
      id: 1,
      image: tita,
      title: "Sheets, Plates & Coils",
      description:
        "Premium quality sheets, plates, and coils available in various grades for demanding industrial applications.",
      types: [
        {
          id: 1,
          title: "Nickel Alloy Sheets, Plates & Coils",
          slug: "nickel-alloy-sheetsplates",
          specs: [
            "Excellent Corrosion Resistance",
            "High Temperature Strength",
            "Aerospace & Marine Grade",
          ],
        },
        {
          id: 2,
          title: "Stainless Steel Sheets, Plates & Coils",
          slug: "stainless-steel-sheetsplates",
          specs: [
            "Superior Corrosion Resistance",
            "Durable & Aesthetic",
            "Pharmaceutical & Food Grade",
          ],
        },
        {
          id: 3,
          title: "Carbon Steel Sheets, Plates & Coils",
          slug: "carbon-steel-sheetsplates",
          specs: [
            "High Strength & Weldability",
            "Cost-Effective",
            "Construction & Pressure Vessel Grade",
          ],
        },
        {
          id: 4,
          title: "Alloy Steel Sheets, Plates & Coils",
          slug: "alloy-steel-sheetsplates",
          specs: [
            "Exceptional Strength & Hardness",
            "Wear Resistant",
            "Oil & Gas and Power Generation Grade",
          ],
        },
      ],
    },
  ],
};

export default sheetsplates;
