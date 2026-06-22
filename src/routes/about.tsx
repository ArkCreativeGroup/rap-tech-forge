import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight, Target, Globe, Users, Award } from "lucide-react";
import heroUv from "@/assets/hero-uv.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rapeda — Industrial Print Technology" },
      {
        name: "description",
        content:
          "Learn about Rapeda's mission to deliver industrial UV, DTF and heat press systems that empower print businesses worldwide.",
      },
      { property: "og:title", content: "About Rapeda" },
      { property: "og:description", content: "Industrial print technology built for production." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero
        eyebrow="— About Rapeda"
        title="Engineered for production. Designed for growth."
        subtitle="We build industrial print systems that help businesses scale — from independent print shops to high-volume production facilities across the globe."
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border">
              <img
                src={heroUv}
                alt="Rapeda industrial UV printer"
                loading="lazy"
                width={1280}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:col-span-7">
            <div className="eyebrow">— Our story</div>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Built by people who understand production.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Rapeda was founded on a simple belief: print businesses deserve equipment that works as hard as they do.
              We design and engineer industrial UV flatbed printers, DTF production systems and heat press equipment
              for operators who refuse to compromise on speed, quality or reliability.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From our headquarters in Munich, Germany, we serve a growing network of print shops, apparel decorators,
              promotional product manufacturers and creative agencies across Europe, Africa and beyond.
              Every system we ship is backed by technical support, professional training and a commitment to uptime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="eyebrow">— Our Mission</div>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Industrial print technology, everywhere it's needed.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Too many businesses in high-growth markets have been underserved by the global print industry — offered consumer-grade equipment when they need production-grade solutions.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Rapeda exists to close that gap. We bring the same machines powering production floors in Europe and Asia to ambitious print businesses everywhere — backed by real technical support and a network that understands production.
            </p>
          </div>
          <div className="flex items-center md:col-span-6">
            <div className="border-t-2 border-primary bg-[var(--charcoal)] p-8 md:p-10">
              <p className="text-xl font-bold leading-relaxed text-foreground md:text-2xl">
                "We believe every serious print business deserves access to the machines that make production possible."
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Rapeda Founding Principle
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--charcoal)] py-16 md:py-24">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">— What we stand for</div>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Our principles
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-[var(--charcoal)] p-8 md:p-10 transition-colors hover:bg-grey">
                <v.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-6 text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="text-center">
            <div className="eyebrow">— By the numbers</div>
            <h2 className="mt-4 text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Trusted by production teams worldwide.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-card p-8 text-center">
                <div className="font-display text-4xl font-extrabold text-foreground md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--charcoal)]/40 py-16 md:py-24">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">— Work with us</div>
              <h2 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
                Ready to scale your print operations?
              </h2>
            </div>
            <Link to="/contact" className="btn-accent">
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

const values = [
  {
    icon: Target,
    title: "Production-First Design",
    copy: "Every machine is engineered around real-world workflows — not spec sheets. We build for operators who run shifts, hit deadlines and scale output.",
  },
  {
    icon: Award,
    title: "Reliability Without Compromise",
    copy: "Industrial-grade components, rigorous testing and warranty coverage that matches the demands of continuous production environments.",
  },
  {
    icon: Users,
    title: "Support That Shows Up",
    copy: "From installation and training to remote diagnostics and spare parts — our technical team is invested in keeping your line running.",
  },
  {
    icon: Globe,
    title: "Global Reach, Local Presence",
    copy: "We work with a growing dealer network to bring Rapeda systems, service and supplies to print businesses in every market we serve.",
  },
];

const stats = [
  { value: "15+", label: "Countries served" },
  { value: "500+", label: "Systems installed" },
  { value: "24/7", label: "Support coverage" },
  { value: "48h", label: "Response time" },
];
