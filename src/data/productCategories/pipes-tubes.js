// src/data/productCategories/pipes-tubes.js
import nic from "../../assets/productsImage/steel-pipes.jpg";
import cop from "../../assets/productsImage/steel-pipes.jpg";
import stain from "../../assets/productsImage/steel-pipes.jpg";
import dup from "../../assets/productsImage/steel-pipes.jpg";
import car from "../../assets/productsImage/steel-pipes.jpg";
import alloy from "../../assets/productsImage/steel-pipes.jpg";

const pipesTubes = {
  id: 1,
  name: "Pipes & Tubes",
  slug: "pipes-tubes",
  shortDescription: "Seamless and welded pipes and tubes in multiple grades.",
  longDescription:
    "These pipes are fabricated from qualitative raw material as per global demand and ensures accurate precision.",
  badge: "GOVERNMENT RECOGNISED STAR EXPORT HOUSE",

  specifications: {
    range:
      "15 NB UP TO 1200 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
    form: "SEAMLESS / ERW / WELDED IN ROUND & SQUARE.",
  },

  // Main categories with their sub-types
  categories: [
    {
      id: 1,
      image: nic,
      title: "Nickel Alloy Pipes & Tubes",
      slug: "nickel-alloy-pipes-tubes",
      description:
        "Adopting the highest industry standards, we manufacture finest range of nickel alloy pipes. These pipes are fabricated from qualitative raw material as per global demand and ensures accurate precision.",
      types: [
        {
          id: 1,
          title: "Nickel Alloy 200 Pipes & Tubes",
          slug: "nickel-alloy-200-pipestubes",
          specs: ["ASTM / ASME SB 163 UNS 2200 (NICKEL 200)"],
        },
        {
          id: 2,
          title: "Nickel Alloy 201 Pipes & Tubes",
          slug: "nickel-alloy-201-pipestubes",
          specs: ["ASTM / ASME SB 163 UNS 2201 (NICKEL 201)"],
        },
        {
          id: 3,
          title: "Monel 400 Pipes & Tubes",
          slug: "monel-400-pipestubes",
          specs: ["ASTM / ASME SB 163 / 165 UNS 4400 (MONEL 400)"],
        },
        {
          id: 4,
          title: "Monel K500 Pipes & Tubes",
          slug: "monel-k500-pipestubes",
          specs: ["ASTM / ASME SB 163 / 165 UNS 4400 K500"],
        },
        {
          id: 5,
          title: "Inconel 600 Pipes & Tubes",
          slug: "inconel-600-pipestubes",
          specs: ["ASTM / ASME SB 167 / 517 UNS 6600 (INCONEL 600)"],
        },
        {
          id: 6,
          title: "Inconel 601 Pipes & Tubes",
          slug: "inconel-601-pipestubes",
          specs: ["ASTM / ASME SB 167 UNS 6601 (INCONEL 601)"],
        },
        {
          id: 7,
          title: "Inconel 625 Pipes & Tubes",
          slug: "inconel-625-pipestubes",
          specs: ["ASTM / ASME SB 704 /705 UNS 6625 (INCONEL 625)"],
        },
        {
          id: 8,
          title: "Inconel 800 Pipes & Tubes",
          slug: "inconel-800-pipestubes",
          specs: ["ASTM / ASME SB 704/705 UNS 8800"],
        },
        {
          id: 9,
          title: "Inconel 825 Pipes & Tubes",
          slug: "inconel-825-pipestubes",
          specs: ["ASTM / ASME SB 704/705 UNS 8825 INCONEL (825)"],
        },
        {
          id: 10,
          title: "Alloy 20 Pipes & Tubes",
          slug: "alloy-20-pipestubes",
          specs: ["ASTM / ASME SB 464 UNS 8020 (ALLOY 20 / 20 CB 3)"],
        },
        {
          id: 11,
          title: "Hastelloy C276 Pipes & Tubes",
          slug: "hastelloy-c276-pipestubes",
          specs: ["ASTM / ASME SB 619/622/626 UNS 10276 (HASTELLOY C 276)"],
        },
      ],
    },
    {
      id: 2,
      image: cop,
      title: "Copper Alloy Pipes & Tubes",
      slug: "copper-alloy-pipes-tubes",
      description:
        "We manufacture finest range of copper alloy pipes. Available in wide range of technical specifications, our comprehensive range is highly acknowledged in Indian as well as overseas market for their attributes of high strength, excellent finish, and complete reliability in services.",
      types: [
        {
          id: 1,
          title: "Cu-Ni 90/10 Pipes & Tubes",
          slug: "cu-ni-90-pipestubes",
          specs: [
            "ASTM / ASME SB 111 UNS NO. C 70600 (CU-NI-90/10)",
            "ASTM / ASME SB 466 UNS NO. C 70600",
          ],
        },
        {
          id: 2,
          title: "Cu-Ni 70/30 Pipes & Tubes",
          slug: "cu-ni-70-pipestubes",
          specs: [
            "ASTM / ASME SB 111 UNS NO. C 71500 (CU-NI-70/30)",
            "ASTM / ASME SB 466 UNS NO. C 71500",
          ],
        },
      ],
    },
    {
      id: 3,
      image: stain,
      title: "Stainless Steel Pipes & Tubes",
      slug: "stainless-steel-pipes-tubes",
      description:
        "High quality pipes are stainless because of a protective layer on their surfaces which reduces the rate of corrosion to almost negligible levels. Available in different grades and dimensions, these stainless steel pipes are widely used in various industries.",
      types: [
        {
          id: 1,
          title: "304 Stainless Steel Pipes & Tubes",
          slug: "304-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 304"],
        },
        {
          id: 2,
          title: "304L Stainless Steel Pipes & Tubes",
          slug: "304l-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 304L"],
        },
        {
          id: 3,
          title: "304H Stainless Steel Pipes & Tubes",
          slug: "304h-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 304H"],
        },
        {
          id: 4,
          title: "309S Stainless Steel Pipes & Tubes",
          slug: "309s-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 309S"],
        },
        {
          id: 5,
          title: "309H Stainless Steel Pipes & Tubes",
          slug: "309h-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 309H"],
        },
        {
          id: 6,
          title: "310S Stainless Steel Pipes & Tubes",
          slug: "310s-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 310S"],
        },
        {
          id: 7,
          title: "310H Stainless Steel Pipes & Tubes",
          slug: "310h-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 310H"],
        },
        {
          id: 8,
          title: "316 Stainless Steel Pipes & Tubes",
          slug: "316-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 316"],
        },
        // {
        //   id: 9,
        //   title: "316L Stainless Steel Pipes & Tubes",
        //   slug: "316l-stainless-steel-pipestubes",
        //   specs: ["ASTM / ASME SA 312 GR. TP 316L"],
        // },
        {
          id: 10,
          title: "316Ti Stainless Steel Pipes & Tubes",
          slug: "316ti-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 316Ti"],
        },
        {
          id: 11,
          title: "316H Stainless Steel Pipes & Tubes",
          slug: "316h-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 316H"],
        },
        {
          id: 12,
          title: "316LN Stainless Steel Pipes & Tubes",
          slug: "316ln-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 316LN"],
        },
        {
          id: 13,
          title: "317 Stainless Steel Pipes & Tubes",
          slug: "317-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 317"],
        },
        {
          id: 14,
          title: "317L Stainless Steel Pipes & Tubes",
          slug: "317l-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 317L"],
        },
        {
          id: 15,
          title: "321 Stainless Steel Pipes & Tubes",
          slug: "321-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 321"],
        },
        {
          id: 16,
          title: "321H Stainless Steel Pipes & Tubes",
          slug: "321h-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 321H"],
        },
        {
          id: 17,
          title: "347 Stainless Steel Pipes & Tubes",
          slug: "347-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 347"],
        },
        {
          id: 18,
          title: "347H Stainless Steel Pipes & Tubes",
          slug: "347h-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 347H"],
        },
        {
          id: 19,
          title: "904L Stainless Steel Pipes & Tubes",
          slug: "904l-stainless-steel-pipestubes",
          specs: ["ASTM / ASME SA 312 GR. TP 904L"],
        },
      ],
    },
    {
      id: 4,
      image: dup,
      title: "Duplex Steel Pipes & Tubes",
      slug: "duplex-steel-pipes-tubes",
      description:
        "Duplex steel pipes offer excellent strength and corrosion resistance. Available in different grades and dimensions, these pipes are widely used in various industries.",
      types: [
        {
          id: 1,
          title: "Duplex S31803 Pipes & Tubes",
          slug: "duplex-s31803-pipestubes",
          specs: ["ASTM / ASME SA 790 UNS NO:31803"],
        },
        {
          id: 2,
          title: "Duplex S32760 Pipes & Tubes",
          slug: "duplex-s32760-pipestubes",
          specs: ["ASTM / ASME SA 790 UNS NO:32760"],
        },
      ],
    },
    {
      id: 5,
      image: car,
      title: "Carbon Steel Pipes & Tubes",
      slug: "carbon-steel-pipes-tubes",
      description:
        "We are one of the most trusted manufacturers for offering finest range of Carbon Steel pipes. Used in different industries for diverse applications, these pipes can be availed in standard as well as customized dimensions.",
      types: [
        {
          id: 1,
          title: "Carbon Steel ASTM A53 Gr.A/B Pipes & Tubes",
          slug: "carbon-steel-a53-pipestubes",
          specs: ["ASTM / ASME A53 GR.A & B"],
        },
        {
          id: 2,
          title: "Carbon Steel ASTM A106 Gr.A/B/C Pipes & Tubes",
          slug: "carbon-steel-a106-pipestubes",
          specs: ["ASTM A106 GR A,B & C"],
        },
        {
          id: 3,
          title: "API 5L Gr.B PSL 1 / PSL 2 Line Pipe",
          slug: "api-5l-linepipe",
          specs: ["API 5L GR B"],
        },
        {
          id: 4,
          title: "API 5L X42 PSL 1 / PSL 2 Line Pipe",
          slug: "api-x42-linepipe",
          specs: ["API 5L X42"],
        },
        {
          id: 5,
          title: "API 5L X46 PSL 1 / PSL 2 Line Pipe",
          slug: "api-x46-linepipe",
          specs: ["API 5L X46"],
        },
        {
          id: 6,
          title: "API 5L X52 PSL 1 / PSL 2 Line Pipe",
          slug: "api-x52-linepipe",
          specs: ["API 5L X52"],
        },
        {
          id: 7,
          title: "API 5L X60 PSL 1 / PSL 2 Line Pipe",
          slug: "api-x60-linepipe",
          specs: ["API 5L X60"],
        },
        {
          id: 8,
          title: "API 5L X65 PSL 1 / PSL 2 Line Pipe",
          slug: "api-x65-linepipe",
          specs: ["API 5L X65"],
        },
        {
          id: 9,
          title: "API 5L X70 PSL 1 / PSL 2 Line Pipe",
          slug: "api-x70-linepipe",
          specs: ["API 5L X70"],
        },
        {
          id: 10,
          title: "ASTM A333 Gr1, Gr6 Low Temperature Pipes & Tubes",
          slug: "astm-a333-pipestubes",
          specs: ["ASTM A333 GR 1, GR 6"],
        },
      ],
    },
    {
      id: 6,
      image: alloy,
      title: "Alloy Steel Pipes & Tubes",
      slug: "alloy-steel-pipes-tubes",
      description:
        "We offer finest range of Alloy Steel pipes. These pipes are appreciated for their sturdy and precise construction. We are known for offering our product range at reasonable prices.",
      types: [
        {
          id: 1,
          title: "ASTM A335 P1 Pipes",
          slug: "astm-a335-p1-pipes",
          specs: ["ASTM/ASME A335 GR P1"],
        },
        {
          id: 2,
          title: "ASTM A335 P2 Pipes & ASTM A213 T2 Tubes",
          slug: "astm-a335-p2-pipes",
          specs: ["ASTM/ASME A335 GR P2", "ASTM/ASME A213 T2"],
        },
        {
          id: 3,
          title: "ASTM A335 P5/5b/5c Pipes & ASTM A213 T5/5B/5C Tubes",
          slug: "astm-a335-p5-pipes",
          specs: ["ASTM/ASME A335 GR P5", "ASTM/ASME A213 T5"],
        },
        {
          id: 4,
          title: "ASTM A335 P9 Pipes & ASTM A213 T9 Tubes",
          slug: "astm-a335-p9-pipes",
          specs: ["ASTM/ASME A335 GR P9", "ASTM/ASME A213 T9"],
        },
        {
          id: 5,
          title: "ASTM A335 P11 Pipes & ASTM A213 T11 Tubes",
          slug: "astm-a335-p11-pipes",
          specs: ["ASTM/ASME A335 GR P11", "ASTM/ASME A213 T11"],
        },
        {
          id: 6,
          title: "ASTM A335 P12 Pipes & ASTM A213 T12 Tubes",
          slug: "astm-a335-p12-pipes",
          specs: ["ASTM/ASME A335 GR P12", "ASTM/ASME A213 T12"],
        },
        {
          id: 7,
          title: "ASTM A335 P22 Pipes & ASTM A213 T22 Tubes",
          slug: "astm-a335-p22-pipes",
          specs: ["ASTM/ASME A335 GR P22", "ASTM/ASME A213 T22"],
        },
        {
          id: 8,
          title: "ASTM A335 P23 Pipes & ASTM A213 T23 Tubes",
          slug: "astm-a335-p23-pipes",
          specs: ["ASTM/ASME A335 GR P23", "ASTM/ASME A213 T23"],
        },
        {
          id: 9,
          title: "ASTM A335 P91 Pipes & ASTM A213 T91 Tubes",
          slug: "astm-a335-p91-pipes",
          specs: ["ASTM/ASME A335 GR P91", "ASTM/ASME A213 T91"],
        },
        {
          id: 10,
          title: "ASTM A335 P92 Pipes & ASTM A213 T92 Tubes",
          slug: "astm-a335-p92-pipes",
          specs: ["ASTM/ASME A335 GR P92", "ASTM/ASME A213 T92"],
        },
        {
          id: 11,
          title: "ASTM A691 Gr 1CR Pipes",
          slug: "astm-a691-1cr-pipes",
          specs: ["ASTM/ASME A691 GR 1CR"],
        },
        {
          id: 12,
          title: "ASTM A691 Gr 1 1/4 CR Pipes",
          slug: "astm-a691-1-1-4cr-pipes",
          specs: ["ASTM/ASME A691 GR 1 1/4CR"],
        },
        {
          id: 13,
          title: "ASTM A691 Gr 2 1/4 CR Pipes",
          slug: "astm-a691-2-1-4cr-pipes",
          specs: ["ASTM/ASME A691 GR 2 1/4CR"],
        },
      ],
    },
  ],
};

export default pipesTubes;
