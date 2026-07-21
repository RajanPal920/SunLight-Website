// src/data/products.js

// Images
import flangesImg from "../assets/productsImage/flanges.jpg";
import pipesImg from "../assets/productsImage/pipes.jpg";
import tubesImg from "../assets/productsImage/tubes.jpg";
import buttweldImg from "../assets/productsImage/buttweld.jpg";
import socketWeldImg from "../assets/productsImage/forged-fittings.jpg";
import fastenersImg from "../assets/productsImage/fastener.jpg";
import anchorFastenerImg from "../assets/productsImage/anchor-fastener.jpg";
import angleChannelsImg from "../assets/productsImage/angle-channels.jpg";
import tubeSheetsImg from "../assets/productsImage/tubeSheets.jpg";
import ferruleImg from "../assets/productsImage/ferrule-fittings.jpg";
import claddedImg from "../assets/productsImage/cladded-plates.jpg";
import oletsImg from "../assets/productsImage/olets.jpg";
import valvesImg from "../assets/productsImage/valves.jpg";
import bronzeBushImg from "../assets/productsImage/graphite-bronze-bush.jpg";
import billetsImg from "../assets/productsImage/billets.jpg";
import sheetsImg from "../assets/productsImage/sheets.jpg";
import roundBarsImg from "../assets/productsImage/round-bars.jpg";

// Import category data
import { pipesTubes, sheetsPlates } from "./productCategories";

const products = [
  {
    id: 1,
    name: "Pipes & Tubes",
    slug: "pipes-tubes",
    image: pipesImg,
    shortDescription: "Seamless and welded pipes and tubes in multiple grades.",
    categoryData: pipesTubes, // Link to detailed category data
  },
  {
    id: 2,
    name: "Sheets & Plates",
    slug: "sheets-plates",
    image: sheetsImg,
    shortDescription: "High-quality stainless steel sheets and plates.",
    categoryData: sheetsPlates, // Link to detailed category data
  },
  {
    id: 3,
    name: "Round Bars",
    slug: "round-bars",
    image: roundBarsImg,
    shortDescription: "Precision engineered round bars and rods.",
  },
  {
    id: 4,
    name: "Flanges",
    slug: "flanges",
    image: flangesImg,
    shortDescription:
      "Premium quality industrial flanges in various materials.",
  },
  {
    id: 5,
    name: "Buttweld Fittings",
    slug: "buttweld-fittings",
    image: buttweldImg,
    shortDescription: "High-quality buttweld fittings for pipe connections.",
  },
  {
    id: 6,
    name: "Socketweld Fittings",
    slug: "socketweld-fittings",
    image: socketWeldImg,
    shortDescription: "Durable socketweld fittings for secure pipe joining.",
  },
  {
    id: 7,
    name: "Fasteners",
    slug: "fasteners",
    image: fastenersImg,
    shortDescription: "Complete range of industrial fasteners and hardware.",
  },
  {
    id: 8,
    name: "Refractory Fixings & Anchors",
    slug: "refractory-fixings",
    image: anchorFastenerImg,
    shortDescription: "Heavy-duty refractory fixings and anchors.",
  },
  {
    id: 9,
    name: "Angles & Channels",
    slug: "angles-channels",
    image: angleChannelsImg,
    shortDescription: "Structural angles and channels for construction.",
  },
  {
    id: 10,
    name: "Tube Sheets",
    slug: "tube-sheets",
    image: tubeSheetsImg,
    shortDescription: "Precision tube sheets for heat exchangers.",
  },
  {
    id: 11,
    name: "Ferrule Fittings",
    slug: "ferrule-fittings",
    image: ferruleImg,
    shortDescription: "High-quality ferrule fittings for secure connections.",
  },
  {
    id: 12,
    name: "Cladded Plates",
    slug: "cladded-plates",
    image: claddedImg,
    shortDescription: "Premium cladded plates for industrial applications.",
  },
  {
    id: 13,
    name: "Olets",
    slug: "olets",
    image: oletsImg,
    shortDescription: "Complete range of olets for branch connections.",
  },
  {
    id: 14,
    name: "Valves",
    slug: "valves",
    image: valvesImg,
    shortDescription: "Reliable industrial valves for flow control.",
  },
  {
    id: 15,
    name: "Graphite Filled Bronze Bush",
    slug: "graphite-bronze-bush",
    image: bronzeBushImg,
    shortDescription: "Graphite filled bronze bushes for industrial use.",
  },
  {
    id: 16,
    name: "Billets",
    slug: "billets",
    image: billetsImg,
    shortDescription: "High-quality billets for manufacturing.",
  },
];

export default products;
