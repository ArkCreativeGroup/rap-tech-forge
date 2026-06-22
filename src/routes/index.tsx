import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Wrench,
  Truck,
  BadgeCheck,
  Zap,
  Gauge,
  Settings2,
} from "lucide-react";
import heroUv from "@/assets/hero-uv.jpg";
import catUv from "@/assets/cat-uv.jpg";
import uv6090s from "@/assets/rapeda-uv-6090s.png.asset.json";

import evoA600 from "@/assets/rapeda-evo-a600.png.asset.json";

import h4050 from "@/assets/rapeda-h4050.png.asset.json";
import appApparel from "@/assets/app-apparel.jpg";
import appPromotional from "@/assets/promotional-products.png.asset.json";
import appTumblers from "@/assets/app-tumblers.jpg";
import appAcrylic from "@/assets/app-acrylic.jpg";
import appPhone from "@/assets/app-phone.jpg";
import appPackaging from "@/assets/app-packaging.jpg";
import appLeather from "@/assets/app-leather.jpg";
import appSignage from "@/assets/signage.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rapeda — Industrial Print Technology. Built to Scale." },
      {
        name: "description",
        content:
          "Industrial UV printers, DTF systems and heat press equipment engineered for modern print businesses that demand speed, reliability and production efficiency.",
      },
      { property: "og:title", content: "Rapeda — Built for Production. Built to Scale." },
      {
        property: "og:description",
        content: "Industrial UV, DTF and heat press systems for serious print businesses.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <Categories />
      <WhyRapeda />
      <Applications />
      <FeaturedMachines />
      <Process />
      <Testimonial />
      <CtaSection />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative -mt-16 h-[100svh] min-h-[680px] overflow-hidden md:-mt-20">
      <img
        src={heroUv}
        alt="Industrial UV printer in operation"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

      <div className="container-x relative flex h-full flex-col justify-end pb-20 pt-32 md:justify-center md:pb-0">
        <div className="eyebrow anim-up">— Industrial Print Technology</div>
        <h1 className="anim-up mt-6 max-w-5xl text-balance text-5xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">
          Built for Production.
          <br />
          <span className="text-primary">
            Built to Scale.
          </span>
        </h1>
        <p className="anim-up mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Industrial UV printers, DTF systems and heat press equipment engineered for modern
          print businesses that demand speed, reliability and production efficiency.
        </p>
        <div className="anim-up mt-10 flex flex-wrap gap-3">
          <Link to="/products" className="btn-accent">
            Explore Products <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/where-to-buy" className="btn-ghost">
            Find a Dealer
          </Link>
        </div>

        <div className="absolute bottom-8 right-6 hidden flex-col items-end gap-1 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
          <span>Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}

const trust = [
  { icon: Cpu, label: "Epson i3200 Technology" },
  { icon: ShieldCheck, label: "Industrial Build Quality" },
  { icon: Wrench, label: "Technical Support" },
  { icon: BadgeCheck, label: "Warranty Coverage" },
  { icon: Truck, label: "Global Delivery" },
];

function TrustBar() {
  return (
    <section className="border-y border-border bg-[var(--charcoal)]/60">
      <div className="container-x py-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-foreground/80">
                {t.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by print shops, apparel decorators and production facilities across the World
        </p>
      </div>
    </section>
  );
}

const categories = [
  {
    img: uv6090s.url,
    eyebrow: "01 — UV Systems",
    title: "UV Printing Systems",
    copy: "Create premium prints on rigid and specialty materials including acrylic, wood, leather, packaging, glass and promotional products.",
    features: ["White ink", "Varnish capability", "High precision output", "Industrial vacuum table"],
    cta: "Explore UV Printers",
  },
  {
    img: evoA600.url,
    eyebrow: "02 — DTF Systems",
    title: "DTF Production Systems",
    copy: "High-speed direct-to-film production systems designed for vibrant color, wash durability and scalable garment decoration workflows.",
    features: ["High-speed output", "Vibrant colors", "Automated powder", "Production-ready"],
    cta: "Explore DTF Systems",
  },
  {
    img: h4050.url,
    eyebrow: "03 — Heat Press",
    title: "Heat Press Equipment",
    copy: "Reliable heat transfer equipment engineered for consistent pressure, accurate temperature control and efficient production performance.",
    features: ["Digital controls", "Uniform pressure", "Durable construction", "Production efficiency"],
    cta: "Explore Heat Presses",
  },
];

function Categories() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">— Production Equipment</div>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Three systems. Engineered for output.
            </h2>
          </div>
          <Link to="/products" className="text-sm font-semibold text-primary hover:underline">
            View all products →
          </Link>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {categories.map((c) => (
            <article
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:border-primary/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute left-5 top-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {c.eyebrow}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-7">
                <h3 className="text-2xl font-bold tracking-tight">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                <ul className="grid grid-cols-2 gap-y-2 text-xs text-foreground/80">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary"
                >
                  {c.cta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: ShieldCheck,
    title: "Industrial Reliability",
    copy: "Machines engineered for long production cycles and dependable output.",
    stat: "24/7",
    statLabel: "Uptime focused",
  },
  {
    icon: Wrench,
    title: "Technical Support",
    copy: "Professional installation, training and after-sales support.",
    stat: "48h",
    statLabel: "Response window",
  },
  {
    icon: Gauge,
    title: "Production Efficiency",
    copy: "Workflow-focused systems designed to maximize throughput and profitability.",
    stat: "3x",
    statLabel: "Output uplift",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    copy: "Advanced UV and DTF systems aligned with modern production trends.",
    stat: "i3200",
    statLabel: "Printhead tech",
  },
];

function WhyRapeda() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--charcoal)] py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container-x relative">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">— Why Rapeda</div>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              Built for serious print businesses.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Production technology, after-sales support and workflow systems that scale with
              your business — not against it.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:col-span-7 md:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="bg-[var(--charcoal)] p-7 transition-colors hover:bg-grey">
                <div className="flex items-start justify-between">
                  <p.icon className="h-6 w-6 text-primary" />
                  <div className="text-right">
                    <div className="font-display text-2xl font-extrabold text-foreground">
                      {p.stat}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.statLabel}
                    </div>
                  </div>
                </div>
                <h3 className="mt-8 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const apps = [
  { img: appApparel, label: "Custom Apparel" },
  { img: appTumblers, label: "Tumblers" },
  { img: appAcrylic, label: "Acrylic Products" },
  { img: appPhone, label: "Phone Cases" },
  { img: appPackaging, label: "Packaging" },
  { img: appLeather, label: "Leather Products" },
  { img: appPromotional.url, label: "Promotional Products" },
  { img: appSignage.url, label: "Signage" },
];

function Applications() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="eyebrow">— Applications</div>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              What can you create?
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From custom apparel to industrial signage — one production stack, endless output.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {apps.map((a, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-sm border border-border"
            >
              <img
                src={a.img}
                alt={a.label}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-base font-bold leading-tight text-foreground">
                  {a.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const machines = [
  {
    img: uv6090s.url,
    name: "Rapeda UV-6090s",
    cat: "UV Flatbed",
    desc: "Industrial UV flatbed printer for rigid substrate printing and premium promotional product production.",
    feats: ["Epson i3200 heads", "White + varnish", "Industrial vacuum platform", "High-speed production"],
  },
  {
    img: evoA600.url,
    name: "Rapeda EVO A-600",
    cat: "DTF Production",
    desc: "Professional DTF production system engineered for high-volume garment decoration.",
    feats: ["Automatic powder shaker", "High-speed output", "Vibrant textile color", "Workflow design"],
  },
  {
    img: h4050.url,
    name: "Rapeda H4050",
    cat: "Heat Transfer",
    desc: "Heavy-duty heat transfer system designed for consistent industrial transfer application.",
    feats: ["Digital control system", "Uniform heating", "Pressure precision", "Industrial construction"],
  },
];

function FeaturedMachines() {
  return (
    <section className="border-y border-border bg-[var(--charcoal)]/40 py-24 md:py-32">
      <div className="container-x">
        <div className="eyebrow">— Featured Systems</div>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Production systems doing real work.
        </h2>

        <div className="mt-14 space-y-6">
          {machines.map((m, i) => (
            <article
              key={m.name}
              className="group grid gap-0 overflow-hidden rounded-sm border border-border bg-card md:grid-cols-12"
            >
              <div
                className={`relative md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card/50 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-12">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                    {m.cat}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                    {m.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {m.feats.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 border-t border-border pt-2 text-sm text-foreground/90"
                      >
                        <Settings2 className="h-3.5 w-3.5 text-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/products" className="btn-ghost w-fit">
                  View Product <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: "01", title: "Design", copy: "Create vibrant artwork with precision color management." },
  { num: "02", title: "Produce", copy: "Scale production using industrial print systems." },
  { num: "03", title: "Deliver", copy: "Produce premium products consistently and profitably." },
];

function Process() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="eyebrow">— Workflow</div>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
          Designed around modern production workflows.
        </h2>

        <div className="relative mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="relative bg-background p-10">
              <div className="font-display text-7xl font-extrabold tracking-tighter text-grey">
                {s.num}
              </div>
              <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {s.copy}
              </p>
              <div className="absolute right-6 top-6 h-2 w-2 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--charcoal)] py-24 md:py-32">
      <div className="container-x relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow justify-center">— Customer Story</div>
          <blockquote className="mt-8 text-balance font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            “Rapeda transformed our production workflow. The print quality, machine reliability
            and support experience exceeded our expectations.”
          </blockquote>
          <div className="mt-10 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            — Production Manager · Promo Direct, Prague
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-80" />
      <div className="container-x relative text-center">
        <div className="eyebrow justify-center">— Get Started</div>
        <h2 className="mt-6 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
          Ready to scale your production?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Whether you are launching a print business or expanding an industrial workflow, Rapeda
          delivers the technology to help you produce more.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="btn-accent">
            Contact Sales <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/where-to-buy" className="btn-ghost">
            Find a Dealer
          </Link>
        </div>
      </div>
    </section>
  );
}
