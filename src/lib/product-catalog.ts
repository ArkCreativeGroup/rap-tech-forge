import uv6090s from "@/assets/rapeda-uv-6090s.png.asset.json";
import evoA600 from "@/assets/rapeda-evo-a600.png.asset.json";
import h4050 from "@/assets/rapeda-h4050.png.asset.json";

export type ProductCategory = "UV Printers" | "DTF Systems" | "Heat Presses" | "Accessories";

export type Product = {
  slug: string;
  name: string;
  cat: ProductCategory;
  img: string;
  tagline: string;
  desc: string;
  longDesc: string;
  features: string[];
  apps: string[];
  specs: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
};

export const productCatalog: Product[] = [
  {
    slug: "rapeda-uv-6090s",
    name: "Rapeda UV-6090s",
    cat: "UV Printers",
    img: uv6090s.url,
    tagline: "Industrial UV flatbed printer for premium short-run production.",
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
      { label: "Power", value: "220V / 50–60Hz" },
      { label: "Footprint", value: "1850 × 1320 × 750 mm" },
    ],
    highlights: [
      {
        title: "Built for premium substrates",
        body: "Print directly onto acrylic, wood, glass, metal, leather and rigid packaging with brilliant white and glossy varnish layers.",
      },
      {
        title: "Production-grade reliability",
        body: "Negative-pressure ink delivery, automatic head cleaning and an anti-collision Z-axis keep the machine running shift after shift.",
      },
      {
        title: "Workflow ready",
        body: "Ships with a professional RIP, color profiles for popular substrates, and remote support from the Rapeda technical team.",
      },
    ],
  },
  {
    slug: "rapeda-evo-a600",
    name: "Rapeda EVO A-600",
    cat: "DTF Systems",
    img: evoA600.url,
    tagline: "High-volume DTF production system for garment decorators.",
    desc: "Professional DTF production system engineered for high-volume garment decoration.",
    longDesc:
      "The EVO A-600 is a fully integrated direct-to-film system — printer, automatic powder shaker and curing oven — built for shops moving from sampling into serious production. Vivid color, soft hand-feel, and unattended throughput.",
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
      { label: "Film Type", value: "PET DTF film, roll-to-roll" },
      { label: "Powder System", value: "Automatic shaker + recovery" },
      { label: "Curing", value: "Integrated tunnel oven" },
      { label: "Throughput", value: "Up to 12 m²/hr" },
      { label: "Footprint", value: "2900 × 1100 × 1500 mm" },
    ],
    highlights: [
      {
        title: "End-to-end DTF in one line",
        body: "Print, powder, cure and collect in a single continuous workflow — no manual handoffs between stations.",
      },
      {
        title: "Color that pops on dark garments",
        body: "Dedicated white channel with stirring and circulation delivers consistent opacity print after print.",
      },
      {
        title: "Designed for unattended runs",
        body: "Closed powder loop, low-ink alerts and roll-to-roll handling let operators focus on finishing, not babysitting.",
      },
    ],
  },
  {
    slug: "rapeda-h4050",
    name: "Rapeda H4050",
    cat: "Heat Presses",
    img: h4050.url,
    tagline: "Heavy-duty industrial heat press for transfer application.",
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
      { label: "Pressure", value: "Manual, adjustable" },
      { label: "Heating Element", value: "Tubular, even-distribution" },
      { label: "Power", value: "1800W / 220V" },
      { label: "Frame", value: "Heavy-gauge steel" },
      { label: "Footprint", value: "700 × 600 × 750 mm" },
    ],
    highlights: [
      {
        title: "Edge-to-edge consistency",
        body: "Calibrated heating elements and a thick aluminum platen keep temperature variation within ±2 °C across the surface.",
      },
      {
        title: "Production ergonomics",
        body: "Smooth handle action, fast warm-up and clear digital controls keep operators productive over long shifts.",
      },
      {
        title: "Universal finishing tool",
        body: "Pairs with DTF, sublimation, HTV and screen-printed transfers — one press for every workflow in the shop.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productCatalog.find((p) => p.slug === slug);
}
