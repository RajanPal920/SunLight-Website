// src/data/productCategories/fasteners.js
import stain from "../../assets/productsImage/fastener.jpg";

const fasteners = {
  id: 8,
  name: "Fasteners",
  slug: "fasteners",
  shortDescription: "Complete range of industrial fasteners and hardware.",
  longDescription:
    "We manufacture and supply high-quality industrial fasteners including bolts, nuts, screws, washers, and studs in various materials and grades.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    material: "Stainless Steel, Carbon Steel, Alloy Steel, Nickel Alloy",
    grade: "4.6, 4.8, 5.6, 5.8, 8.8, 10.9, 12.9",
    size: "M2 to M64",
    type: "Bolts, Nuts, Screws, Washers, Studs",
  },

  categories: [
    {
      id: 1,
      image: stain,
      title: "High Nickel Alloy Fasteners",
      slug: "high-nickel-alloy-fasteners",
      description:
        "Premium high nickel alloy fasteners for demanding applications.",
      types: [
        {
          id: 1,
          title: "Nickel 200 Fasteners",
          slug: "nickel-200-fasteners",
          specs: ["ASTM B160", "Nickel Alloy", "Corrosion Resistant"],
        },
        {
          id: 2,
          title: "Nickel 201 Fasteners",
          slug: "nickel-201-fasteners",
          specs: ["ASTM B160", "Nickel Alloy", "Low Carbon"],
        },
        {
          id: 3,
          title: "Monel 400 Fasteners",
          slug: "monel-400-fasteners",
          specs: ["ASTM B164", "Monel Alloy", "Seawater Resistant"],
        },
        {
          id: 4,
          title: "Monel K500 Fasteners",
          slug: "monel-k500-fasteners",
          specs: ["ASTM B164", "Monel Alloy", "High Strength"],
        },
        {
          id: 5,
          title: "Inconel 600 Fasteners",
          slug: "inconel-600-fasteners",
          specs: ["ASTM B166", "Inconel Alloy", "Heat Resistant"],
        },
        {
          id: 6,
          title: "Inconel 601 Fasteners",
          slug: "inconel-601-fasteners",
          specs: ["ASTM B166", "Inconel Alloy", "Oxidation Resistant"],
        },
        {
          id: 7,
          title: "Inconel 625 Fasteners",
          slug: "inconel-625-fasteners",
          specs: ["ASTM B166", "Inconel Alloy", "High Strength"],
        },
        {
          id: 8,
          title: "Inconel 800 Fasteners",
          slug: "inconel-800-fasteners",
          specs: ["ASTM B166", "Inconel Alloy", "High Temperature"],
        },
        {
          id: 9,
          title: "Inconel 825 Fasteners",
          slug: "inconel-825-fasteners",
          specs: ["ASTM B166", "Inconel Alloy", "Acid Resistant"],
        },
        {
          id: 10,
          title: "Alloy 20 Fasteners",
          slug: "alloy-20-fasteners",
          specs: ["ASTM B473", "Alloy 20", "Sulfuric Acid Resistant"],
        },
        {
          id: 11,
          title: "Hastelloy C276 Fasteners",
          slug: "hastelloy-c276-fasteners",
          specs: ["ASTM B574", "Hastelloy", "Superior Corrosion Resistance"],
        },
        {
          id: 12,
          title: "Titanium Fasteners",
          slug: "titanium-fasteners",
          specs: ["ASTM B348", "Titanium", "Lightweight"],
        },
        {
          id: 13,
          title: "Aluminium Fasteners",
          slug: "aluminium-fasteners",
          specs: ["ASTM B211", "Aluminium", "Lightweight"],
        },
        {
          id: 14,
          title: "Copper Nickel Fasteners",
          slug: "copper-nickel-fasteners",
          specs: ["ASTM B160", "Copper Nickel", "Seawater Resistant"],
        },
        {
          id: 15,
          title: "Brass/ Bronze Fasteners",
          slug: "brass-bronze-fasteners",
          specs: ["ASTM B151", "Brass/Bronze", "Corrosion Resistant"],
        },
      ],
    },
    {
      id: 2,
      image: stain,
      title: "Stainless Steel Fasteners",
      slug: "stainless-steel-fasteners",
      description:
        "High-quality stainless steel fasteners for various applications.",
      types: [
        {
          id: 1,
          title: "304 Stainless Steel Fasteners",
          slug: "304-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 304", "Corrosion Resistant"],
        },
        {
          id: 2,
          title: "304L Stainless Steel Fasteners",
          slug: "304l-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 304L", "Low Carbon"],
        },
        {
          id: 3,
          title: "304H Stainless Steel Fasteners",
          slug: "304h-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 304H", "High Temperature"],
        },
        {
          id: 4,
          title: "310 Stainless Steel Fasteners",
          slug: "310-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 310", "Heat Resistant"],
        },
        {
          id: 5,
          title: "316 Stainless Steel Fasteners",
          slug: "316-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 316", "Marine Grade"],
        },
        {
          id: 6,
          title: "316L Stainless Steel Fasteners",
          slug: "316l-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 316L", "Low Carbon"],
        },
        {
          id: 7,
          title: "317 Stainless Steel Fasteners",
          slug: "317-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 317", "High Corrosion Resistant"],
        },
        {
          id: 8,
          title: "317L Stainless Steel Fasteners",
          slug: "317l-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 317L", "Low Carbon"],
        },
        {
          id: 9,
          title: "321 Stainless Steel Fasteners",
          slug: "321-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 321", "Titanium Stabilized"],
        },
        {
          id: 10,
          title: "347 Stainless Steel Fasteners",
          slug: "347-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 347", "Columbium Stabilized"],
        },
        {
          id: 11,
          title: "904L Stainless Steel Fasteners",
          slug: "904l-stainless-steel-fasteners",
          specs: ["ASTM A193", "SS 904L", "Acid Resistant"],
        },
        {
          id: 12,
          title: "Duplex 2205 Fasteners",
          slug: "duplex-2205-fasteners",
          specs: ["ASTM A193", "Duplex 2205", "High Strength"],
        },
        {
          id: 13,
          title: "Super Duplex 2507 Fasteners",
          slug: "super-duplex-2507-fasteners",
          specs: ["ASTM A193", "Super Duplex", "Superior Strength"],
        },
      ],
    },
    {
      id: 3,
      image: stain,
      title: "Carbon Steel Fasteners",
      slug: "carbon-steel-fasteners",
      description:
        "Premium carbon steel fasteners for construction and industrial applications.",
      types: [
        {
          id: 1,
          title: "ASTM A193 Grade B7 Fasteners",
          slug: "astm-a193-b7-fasteners",
          specs: ["ASTM A193 B7", "Carbon Steel", "High Strength"],
        },
        {
          id: 2,
          title: "ASTM A193 Grade B8 Fasteners",
          slug: "astm-a193-b8-fasteners",
          specs: ["ASTM A193 B8", "Carbon Steel", "Corrosion Resistant"],
        },
        {
          id: 3,
          title: "ASTM A320 Grade L7 Fasteners",
          slug: "astm-a320-l7-fasteners",
          specs: ["ASTM A320 L7", "Carbon Steel", "Low Temperature"],
        },
        {
          id: 4,
          title: "ASTM A354 Grade BC Fasteners",
          slug: "astm-a354-bc-fasteners",
          specs: ["ASTM A354 BC", "Carbon Steel", "High Strength"],
        },
        {
          id: 5,
          title: "ASTM A325 Fasteners",
          slug: "astm-a325-fasteners",
          specs: ["ASTM A325", "Carbon Steel", "Structural Grade"],
        },
        {
          id: 6,
          title: "ASTM A490 Fasteners",
          slug: "astm-a490-fasteners",
          specs: ["ASTM A490", "Carbon Steel", "High Strength Structural"],
        },
      ],
    },
    {
      id: 4,
      image: stain,
      title: "Alloy Steel Fasteners",
      slug: "alloy-steel-fasteners",
      description:
        "High-performance alloy steel fasteners for demanding applications.",
      types: [
        {
          id: 1,
          title: "ASTM A193 Grade B16 Fasteners",
          slug: "astm-a193-b16-fasteners",
          specs: ["ASTM A193 B16", "Alloy Steel", "High Temperature"],
        },
        {
          id: 2,
          title: "ASTM A194 Grade 2H Fasteners",
          slug: "astm-a194-2h-fasteners",
          specs: ["ASTM A194 2H", "Alloy Steel", "High Strength"],
        },
        {
          id: 3,
          title: "ASTM A194 Grade 4 Fasteners",
          slug: "astm-a194-4-fasteners",
          specs: ["ASTM A194 4", "Alloy Steel", "High Temperature"],
        },
        {
          id: 4,
          title: "ASTM A194 Grade 7 Fasteners",
          slug: "astm-a194-7-fasteners",
          specs: ["ASTM A194 7", "Alloy Steel", "High Strength"],
        },
        {
          id: 5,
          title: "ASTM A194 Grade 8 Fasteners",
          slug: "astm-a194-8-fasteners",
          specs: ["ASTM A194 8", "Alloy Steel", "High Temperature"],
        },
        {
          id: 6,
          title: "ASTM A194 Grade 8M Fasteners",
          slug: "astm-a194-8m-fasteners",
          specs: ["ASTM A194 8M", "Alloy Steel", "High Temperature"],
        },
      ],
    },
    {
      id: 5,
      image: stain,
      title: "Non-Ferrous Metal Fasteners",
      slug: "non-ferrous-metal-fasteners",
      description:
        "High-quality non-ferrous metal fasteners for specialized applications.",
      types: [
        {
          id: 1,
          title: "Aluminium Fasteners",
          slug: "aluminium-fasteners",
          specs: ["ASTM B211", "Aluminium", "Lightweight"],
        },
        {
          id: 2,
          title: "Copper Fasteners",
          slug: "copper-fasteners",
          specs: ["ASTM B152", "Copper", "High Conductivity"],
        },
        {
          id: 3,
          title: "Brass Fasteners",
          slug: "brass-fasteners",
          specs: ["ASTM B151", "Brass", "Corrosion Resistant"],
        },
        {
          id: 4,
          title: "Bronze Fasteners",
          slug: "bronze-fasteners",
          specs: ["ASTM B151", "Bronze", "High Strength"],
        },
        {
          id: 5,
          title: "Titanium Fasteners",
          slug: "titanium-fasteners",
          specs: ["ASTM B348", "Titanium", "Lightweight"],
        },
        {
          id: 6,
          title: "Monel Fasteners",
          slug: "monel-fasteners",
          specs: ["ASTM B164", "Monel", "Seawater Resistant"],
        },
        {
          id: 7,
          title: "Inconel Fasteners",
          slug: "inconel-fasteners",
          specs: ["ASTM B166", "Inconel", "Heat Resistant"],
        },
        {
          id: 8,
          title: "Hastelloy Fasteners",
          slug: "hastelloy-fasteners",
          specs: ["ASTM B574", "Hastelloy", "Superior Corrosion Resistance"],
        },
      ],
    },
  ],
};

export default fasteners;
