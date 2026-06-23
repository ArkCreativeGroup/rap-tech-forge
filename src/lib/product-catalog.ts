import uv6090s from "@/assets/rapeda-uv-6090s.png.asset.json";
import evoA600 from "@/assets/rapeda-evo-a600.png.asset.json";
import h4050 from "@/assets/rapeda-h4050.png.asset.json";
import promoProducts from "@/assets/promotional-products.png.asset.json";
import signageAsset from "@/assets/signage.png.asset.json";
import appPackaging from "@/assets/app-packaging.jpg";
import appTumblers from "@/assets/app-tumblers.jpg";
import appAcrylic from "@/assets/app-acrylic.jpg";
import appTshirt from "@/assets/app-tshirt.jpg";
import appTote from "@/assets/app-tote.jpg";
import appHoodie from "@/assets/app-hoodie.jpg";
import appCap from "@/assets/app-cap.jpg";
import appBag from "@/assets/app-bag.jpg";
import appMousepad from "@/assets/app-mousepad.jpg";

export type ProductCategory = "UV Printers" | "DTF Systems" | "Heat Presses" | "Accessories";

export type GalleryItem = { label: string; img: string };
export type SpecItem = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  cat: ProductCategory;
  categoryLabel: string;
  img: string;
  tagline: string;
  desc: string;
  longDesc: string;
  features: string[];
  apps: string[];
  specs: SpecItem[];
  specSheet: SpecItem[];
  workflow: string[];
  gallery: GalleryItem[];
  highlights: { title: string; body: string }[];
};

export const productCatalog: Product[] = [
  {
    slug: "rapeda-uv-6090s",
    name: "Rapeda UV-6090s",
    cat: "UV Printers",
    categoryLabel: "UV Printer",
    img: uv6090s.url,
    tagline: "Industrial UV flatbed printer for acrylic, packaging, leather and promotional product printing.",
    desc: "Industrial UV flatbed printer for acrylic, packaging, leather and promotional product printing.",
    longDesc:
      "The UV-6090s is engineered for shops that need flawless full-color, white and varnish output on rigid and flexible substrates. A precision-machined vacuum table, dual Epson i3200 printheads and an intelligent ink-circulation system keep production consistent across long shifts.",
    features: [
      "Dual Epson i3200 printheads",
      "CMYK + White + Varnish",
      "Vacuum hold-down table",
      "Anti-collision Z-axis",
      "Negative-pressure ink system",
      "LED-UV instant cure",
    ],
    apps: ["acrylic", "tumblers", "corporate gifts", "signage", "packaging", "leather"],
    specs: [
      { label: "Print Area", value: "600 × 900 mm" },
      { label: "Max Substrate Height", value: "150 mm" },
      { label: "Printheads", value: "2 × Epson i3200" },
      { label: "Ink Channels", value: "CMYK + W + V" },
      { label: "Resolution", value: "Up to 2400 dpi" },
      { label: "Cure System", value: "Water-cooled LED-UV" },
    ],
    specSheet: [
      { label: "Printhead", value: "Epson i3200-U1 ×3" },
      { label: "Ink Configuration", value: "CMYK + White + Varnish, negative-pressure circulation" },
      { label: "Media Size / Build Area", value: "600 × 900 mm print area, up to 150 mm substrate height" },
      { label: "Production Speed", value: "Up to 6 m²/hr in production mode" },
      { label: "Power Requirements", value: "220V / 50–60Hz, single phase, ~3.5kW" },
      { label: "Machine Dimensions", value: "1850 × 1320 × 750 mm" },
      { label: "Software Compatibility", value: "Professional RIP included, ICC profiles for popular substrates" },
    ],
    workflow: [
      "Design",
      "Prepare substrate",
      "Print (UV cure inline)",
      "Varnish (optional)",
      "Deliver",
    ],
    gallery: [
      { label: "Promotional Products", img: promoProducts.url },
      { label: "Signage", img: signageAsset.url },
      { label: "Packaging", img: appPackaging },
      { label: "Tumblers", img: appTumblers },
      { label: "Acrylic Products", img: appAcrylic },
    ],
    highlights: [
      { title: "Built for premium substrates", body: "Print directly onto acrylic, wood, glass, metal, leather and rigid packaging with brilliant white and glossy varnish layers." },
      { title: "Production-grade reliability", body: "Negative-pressure ink delivery, automatic head cleaning and an anti-collision Z-axis keep the machine running shift after shift." },
      { title: "Workflow ready", body: "Ships with a professional RIP, color profiles for popular substrates, and remote support from the Rapeda technical team." },
    ],
  },
  {
    slug: "rapeda-evo-a600",
    name: "Rapeda EVO-A600",
    cat: "DTF Systems",
    categoryLabel: "DTF System",
    img: evoA600.url,
    tagline: "Professional DTF production system engineered for high-volume garment decoration.",
    desc: "Professional DTF production system engineered for high-volume garment decoration.",
    longDesc:
      "The EVO-A600 is a fully integrated direct-to-film system — printer, automatic powder shaker and curing oven — built for shops moving from sampling into serious production.",
    features: [
      "Integrated printer + shaker + oven",
      "Auto powder application",
      "Vivid CMYK + White",
      "Continuous roll-to-roll",
      "Closed powder recovery",
      "Touchscreen control",
    ],
    apps: ["apparel", "merchandise", "events", "team uniforms", "fashion"],
    specs: [
      { label: "Print Width", value: "600 mm" },
      { label: "Printheads", value: "2 × Epson i3200" },
      { label: "Ink Channels", value: "CMYK + White" },
      { label: "Throughput", value: "Up to 12 m²/hr" },
    ],
    specSheet: [
      { label: "Printhead", value: "Dual Epson i3200" },
      { label: "Ink Configuration", value: "CMYK + White, stirred and circulated for opacity" },
      { label: "Media Size / Build Area", value: "600 mm print width, roll-to-roll PET DTF film" },
      { label: "Production Speed", value: "Up to 12 m²/hr" },
      { label: "Power Requirements", value: "220V / 50–60Hz, ~5kW (incl. shaker + oven)" },
      { label: "Machine Dimensions", value: "2900 × 1100 × 1500 mm" },
      { label: "Software Compatibility", value: "DTF RIP with white-channel ink saving and color management" },
    ],
    workflow: [
      "Design",
      "Print on film",
      "Apply powder",
      "Cure (oven)",
      "Heat transfer to garment",
    ],
    gallery: [
      { label: "T-shirts", img: appTshirt },
      { label: "Tote Bags", img: appTote },
      { label: "Hoodies", img: appHoodie },
      { label: "Caps", img: appCap },
      { label: "Bags", img: appBag },
    ],
    highlights: [
      { title: "End-to-end DTF in one line", body: "Print, powder, cure and collect in a single continuous workflow — no manual handoffs between stations." },
      { title: "Color that pops on dark garments", body: "Dedicated white channel with stirring and circulation delivers consistent opacity print after print." },
      { title: "Designed for unattended runs", body: "Closed powder loop, low-ink alerts and roll-to-roll handling let operators focus on finishing, not babysitting." },
    ],
  },
  {
    slug: "rapeda-h4050",
    name: "Rapeda H4050",
    cat: "Heat Presses",
    categoryLabel: "Heat Press",
    img: h4050.url,
    tagline: "Heavy-duty heat transfer system designed for consistent industrial transfer application.",
    desc: "Heavy-duty heat transfer system designed for consistent industrial transfer application.",
    longDesc:
      "The H4050 delivers uniform heat and pressure across a generous platen, making it the ideal finishing partner for DTF transfers, sublimation and heat-applied graphics in any production shop.",
    features: [
      "40 × 50 cm aluminum platen",
      "Digital time + temperature",
      "Uniform heat distribution",
      "Adjustable pressure",
      "Industrial-grade frame",
      "Auto-open option",
    ],
    apps: ["apparel", "transfers", "sublimation", "team wear"],
    specs: [
      { label: "Platen Size", value: "400 × 500 mm" },
      { label: "Temperature Range", value: "0–250 °C" },
      { label: "Time Range", value: "0–999 sec" },
      { label: "Power", value: "1800W / 220V" },
    ],
    specSheet: [
      { label: "Operation Type", value: "Pneumatic (air-powered pressure)" },
      { label: "Station Design", value: "Dual Platen (features two separate work platforms)" },
      { label: "Media Size / Build Area", value: "400 × 500 mm aluminum platen" },
      { label: "Production Speed", value: "250 garments per hour" },
      { label: "Power Requirements", value: "220V (2700W)" },
      { label: "Machine Dimensions", value: "700 × 600 × 750 mm" },
      { label: "Software Compatibility", value: "Standalone digital controller — no PC required" },
    ],
    workflow: [
      "Pre-press garment",
      "Position transfer",
      "Apply heat + pressure",
      "Peel film",
      "Quality check",
    ],
    gallery: [
      { label: "T-shirts", img: appTshirt },
      { label: "Tote Bags", img: appTote },
      { label: "Mouse Pads", img: appMousepad },
      { label: "Hoodies", img: appHoodie },
      { label: "Bags", img: appBag },
    ],
    highlights: [
      { title: "Edge-to-edge consistency", body: "Calibrated heating elements and a thick aluminum platen keep temperature variation within ±2 °C across the surface." },
      { title: "Production ergonomics", body: "Smooth handle action, fast warm-up and clear digital controls keep operators productive over long shifts." },
      { title: "Universal finishing tool", body: "Pairs with DTF, sublimation, HTV and screen-printed transfers — one press for every workflow in the shop." },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productCatalog.find((p) => p.slug === slug);
}
