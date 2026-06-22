import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Beaker, Layers, Sparkles, Droplets, Wrench, ArrowUpRight } from "lucide-react";
import suppliesHero from "@/assets/supplies-hero.jpg";

export const Route = createFileRoute("/supplies")({
  head: () => ({
    meta: [
      { title: "Supplies & Consumables — Inks, Films, Powder | Rapeda" },
      {
        name: "description",
        content:
          "Premium UV inks, DTF films, powders and cleaning solutions engineered for reliable production output.",
      },
      { property: "og:title", content: "Rapeda Supplies — Production-grade consumables" },
      { property: "og:description", content: "Inks, films, powder, cleaning and spare parts for industrial production." },
    ],
    links: [{ rel: "canonical", href: "/supplies" }],
  }),
  component: Supplies,
});

const supplies = [
  { icon: Droplets, name: "UV Inks", desc: "High-performance UV-curable inks designed for vibrant color and durable adhesion.", accent: "primary" },
  { icon: Layers, name: "DTF Films", desc: "Hot peel and cold peel transfer films optimized for production efficiency.", accent: "accent" },
  { icon: Sparkles, name: "DTF Powder", desc: "Reliable adhesive powder engineered for durability and wash resistance.", accent: "primary" },
  { icon: Beaker, name: "Cleaning Solutions", desc: "Maintenance products designed to improve machine performance and extend printhead lifespan.", accent: "accent" },
  { icon: Wrench, name: "Spare Parts", desc: "Production-critical components and replacement parts.", accent: "primary" },
];

const resources = [
  { title: "What is UV DTF?", copy: "Understand the technology behind UV DTF transfers and where it fits in production." },
  { title: "DTF vs UV Printing", copy: "Compare workflows, output and ROI between DTF and UV printing systems." },
  { title: "Choosing the right transfer film", copy: "Hot peel vs cold peel — pick the film that matches your workflow." },
  { title: "Maintaining industrial print systems", copy: "Daily, weekly and monthly maintenance for maximum uptime." },
  { title: "Heat press optimization", copy: "Temperature, pressure and dwell time tuning for consistent transfers." },
  { title: "Color management essentials", copy: "ICC profiles and calibration for predictable, vibrant output." },
];

function Supplies() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={suppliesHero}
          alt="Production supplies"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
        <div className="container-x relative py-24 md:py-32">
          <div className="eyebrow anim-up">— Consumables</div>
          <h1 className="anim-up mt-6 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Production starts with the right consumables.
          </h1>
          <p className="anim-up mt-6 max-w-2xl text-lg text-muted-foreground">
            Premium inks, films, powders and accessories engineered for reliable output and
            efficient production workflows.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {supplies.map((s) => (
              <div
                key={s.name}
                className="group relative overflow-hidden bg-card p-8 transition-colors hover:bg-[var(--charcoal)]"
              >
                <s.icon
                  className={`h-7 w-7 ${s.accent === "primary" ? "text-primary" : "text-accent"}`}
                />
                <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Request supply <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            ))}
            <div className="bg-[var(--gradient-uv)] p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/80">
                Bundle
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold">Production Starter Kit</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                Inks, films, powder and cleaning — everything you need to ship your first orders.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-background px-4 py-2 text-xs font-semibold uppercase tracking-wider text-foreground"
              >
                Order Kit <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--charcoal)] py-24 md:py-28">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">— Resources</div>
              <h2 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
                Learn the production craft.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Technical guides, comparisons and workflow tips from the Rapeda engineering team.
            </p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <article
                key={r.title}
                className="group relative overflow-hidden rounded-sm border border-border bg-background p-7 transition-all hover:border-primary/60"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  Guide · 0{i + 1}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.copy}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Read Article <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
