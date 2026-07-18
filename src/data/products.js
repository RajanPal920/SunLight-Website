// src/data/products.js

import {
  Circle,
  Settings,
  Cylinder,
  Nut,
  GaugeCircle,
  Square,
  ScrollText,
  Cable,
  Network,
  LayoutGrid,
  Columns3,
  Wrench,
} from "lucide-react";

// Images
import flangesImg from "../assets/productsImage/flanges.jpg";
import pipesImg from "../assets/productsImage/pipes.jpg";
import tubesImg from "../assets/productsImage/tubes.jpg";
import fittingsImg from "../assets/productsImage/buttweld.jpg";
import fastenersImg from "../assets/productsImage/fastener.jpg";
import valvesImg from "../assets/productsImage/valves.jpg";
import sheetsImg from "../assets/productsImage/sheets.jpg";
import coilsImg from "../assets/productsImage/coils.jpg";
import platesImg from "../assets/productsImage/plates.jpg";
import roundBarsImg from "../assets/productsImage/round-bars.jpg";
import wireMeshImg from "../assets/productsImage/wire-mesh.jpg";
import angleChannelsImg from "../assets/productsImage/angle-channels.jpg";

// Import coil types from productCategories
import productCategories from "./productCategories";

const products = [
  {
    id: 1,
    name: "Sheets, Plates & Coils",
    slug: "sheets-plates-coils",
    image: sheetsImg,
    icon: Square,
    category: "Flat Products",
    shortDescription:
      "Stainless Steel Sheets, Plates, Coils, Strips, Patta Patti, Circles and Flat Products.",
    types: [], // Will be populated from productCategories
  },
  {
    id: 2,
    name: "Pipes & Tubes",
    slug: "pipes-tubes",
    image: pipesImg,
    icon: Cylinder,
    category: "Pipes",
    shortDescription:
      "Seamless Pipes, Welded Pipes, Instrumentation Tubes, Heat Exchanger Tubes and more.",
    types: [],
  },
  {
    id: 3,
    name: "Industrial Fittings",
    slug: "industrial-fittings",
    image: fittingsImg,
    icon: Wrench,
    category: "Pipe Fittings",
    shortDescription:
      "Buttweld Fittings, Forged Fittings, Dairy Fittings and Pharma Fittings.",
    types: [],
  },
  {
    id: 4,
    name: "Fasteners",
    slug: "fasteners",
    image: fastenersImg,
    icon: Nut,
    category: "Fasteners",
    shortDescription:
      "Bolts, Nuts, Washers, Studs, Screws and Industrial Fasteners.",
    types: [],
  },
  {
    id: 5,
    name: "Industrial Valves",
    slug: "industrial-valves",
    image: valvesImg,
    icon: GaugeCircle,
    category: "Valves",
    shortDescription: "Industrial Valves, Dairy Valves and Pharma Valves.",
    types: [],
  },
  {
    id: 6,
    name: "Industrial Flanges",
    slug: "industrial-flanges",
    image: flangesImg,
    icon: Settings,
    category: "Flanges",
    shortDescription:
      "Slip-On, Blind, Weld Neck, Socket Weld, Threaded and Lap Joint Flanges.",
    types: [],
  },
  {
    id: 7,
    name: "Round Bars & Rods",
    slug: "round-bars",
    image: roundBarsImg,
    icon: Circle,
    category: "Bars",
    shortDescription:
      "Round Bars, Bright Bars, Hex Bars and Stainless Steel Rods.",
    types: [],
  },
  {
    id: 8,
    name: "Wire & Wire Mesh",
    slug: "wire-wiremesh",
    image: wireMeshImg,
    icon: Network,
    category: "Wire Products",
    shortDescription:
      "Stainless Steel Wire, Binding Wire and Wire Mesh Products.",
    types: [],
  },
  {
    id: 9,
    name: "Angles, Channels & Flats",
    slug: "angles-channels-flats",
    image: angleChannelsImg,
    icon: Columns3,
    category: "Structural Steel",
    shortDescription: "Angles, Channels, Flats and Structural Steel Products.",
    types: [],
  },
  {
    id: 10,
    name: "Plates",
    slug: "plates",
    image: platesImg,
    icon: LayoutGrid,
    category: "Plates",
    shortDescription:
      "Industrial Stainless Steel Plates in multiple grades and sizes.",
    types: [],
  },
  {
    id: 11,
    name: "Coils",
    slug: "coils",
    image: coilsImg,
    icon: ScrollText,
    category: "Coils",
    shortDescription:
      "Cold Rolled, Hot Rolled and Precision Stainless Steel Coils.",
    types: [], // Will be populated from productCategories
  },
  {
    id: 12,
    name: "Tubes",
    slug: "tubes",
    image: tubesImg,
    icon: Cylinder,
    category: "Tubes",
    shortDescription: "Seamless Tubes, Welded Tubes and Instrumentation Tubes.",
    types: [],
  },
];

// Populate types from productCategories
productCategories.forEach((category) => {
  const mainProduct = products.find((p) => p.slug === category.slug);
  if (mainProduct) {
    mainProduct.types = category.types || [];
    // Update the image to use the first product image if available
    if (
      category.types &&
      category.types.length > 0 &&
      category.types[0].image
    ) {
      mainProduct.image = category.types[0].image;
    }
  }
});

export default products;
