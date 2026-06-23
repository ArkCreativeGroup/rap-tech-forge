import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight } from "lucide-react";
import uv6090s from "@/assets/rapeda-uv-6090s.png.asset.json";
import evoA600 from "@/assets/rapeda-evo-a600.png.asset.json";
import h4050 from "@/assets/rapeda-h4050.png.asset.json";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Industrial Print Equipment | Rapeda" },
      {
        name: "description",
        content:
          "Industrial UV printers, DTF systems and heat press equipment built for serious print businesses.",
      },
      { property: "og:title", content: "Rapeda Products — Production Equipment" },
      { property: "og:description", content: "Explore Rapeda's lineup of industrial printing systems." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

type Cat = "All" | "UV Printers" | "DTF Systems" | "Heat Presses" | "Accessories";

const products: {
  slug: string;
  name: string;
  cat: Exclude<Cat, "All">;
  img: string;
  desc: string;
  features: string[];
  apps: string[];
}[] = [
  {
    slug: "rapeda-uv-6090s",
    name: "Rapeda UV-6090s",
    cat: "UV Printers",
    img: uv6090s.url,
    desc: "Industrial UV flatbed printer for acrylic, packaging, leather and promotional product printing.",
    features: ["Epson i3200", "White + varnish", "Vacuum table", "High-speed output"],
    apps: ["acrylic", "tumblers", "corporate gifts", "signage"],
  },
  {
    slug: "rapeda-evo-a600",
    name: "Rapeda EVO A-600",
    cat: "DTF Systems",
    img: evoA600.url,
    desc: "Professional DTF production system engineered for high-volume garment decoration.",
    features: ["Auto powder shaker", "High-speed", "Vibrant color", "Workflow design"],
    apps: ["apparel", "merchandise", "events"],
  },
  {
    slug: "rapeda-h4050",
    name: "Rapeda H4050",
    cat: "Heat Presses",
    img: h4050.url,
    desc: "Heavy-duty heat transfer system designed for consistent industrial transfer application.",
    features: ["Digital controls", "Uniform heating", "Pressure precision", "Industrial build"],
    apps: ["apparel", "transfers"],
  },
];

const cats: Cat[] = ["All", "UV Printers", "DTF Systems", "Heat Presses", "Accessories"];

function Products() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.cat === active);

  return (
    <Layout>
      <PageHero
        eyebrow="— Production Equipment"
        title="Production equipment built for serious print businesses."
        subtitle="Explore Rapeda's lineup of industrial printing systems designed for quality output, workflow efficiency and scalable production."
      />

      <section className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur-xl md:top-20">
        <div className="container-x flex gap-1 overflow-x-auto py-4">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`whitespace-nowrap rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-primary/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-sm border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
                    {p.cat}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <ul className="grid grid-cols-2 gap-y-1.5 text-xs text-foreground/80">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {p.apps.map((a) => (
                      <span
                        key={a}
                        className="rounded-sm border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-primary"
                  >
                    View Details <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[var(--charcoal)] py-20">
        <div className="container-x text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-5xl">
            Talk to a Rapeda specialist.
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/contact" className="btn-accent">Request Quote</Link>
            <Link to="/where-to-buy" className="btn-ghost">Find Dealer</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
