import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, BadgeCheck, Boxes, Wrench, Sparkles } from "lucide-react";

export const Route = createFileRoute("/where-to-buy")({
  head: () => ({
    meta: [
      { title: "Where to Buy — Find an Authorized Rapeda Dealer" },
      {
        name: "description",
        content:
          "Access Rapeda products, technical support and installation services through our growing distribution network across Europe, Africa and Asia.",
      },
      { property: "og:title", content: "Find an Authorized Rapeda Dealer" },
      { property: "og:description", content: "Dealers across Europe, Africa, and Asia." },
    ],
    links: [{ rel: "canonical", href: "/where-to-buy" }],
  }),
  component: WhereToBuy,
});

const regions = [
  { name: "Europe", count: 1 },
  { name: "Africa", count: 1 },
  { name: "Asia", count: 1 },
];

const dealers = [
  {
    name: "Summit Group",
    city: "London, United Kingdom",
    phone: "+447779138580",
    email: "info@summitline.co.uk",
    badges: ["Certified Dealer", "Demo Center", "Technical Support", "Consumables Stock"],
  },
  {
    name: "247 Prints",
    city: "Lagos, Nigeria",
    phone: "+2347076230064",
    email: "info@247prints.ng",
    badges: ["Certified Dealer", "Demo Center", "Technical Support", "Consumables Stock"],
  },
  {
    name: "Guangzhou Proqure Co., Ltd",
    city: "Guangdong, China",
    phone: "+8615914419513",
    email: "hello@proqure.co",
    badges: ["Certified Dealer", "Technical Support", "Consumables Stock"],
  },
];

const badgeIcon: Record<string, typeof BadgeCheck> = {
  "Certified Dealer": BadgeCheck,
  "Demo Center": Sparkles,
  "Technical Support": Wrench,
  "Consumables Stock": Boxes,
};

function WhereToBuy() {
  return (
    <Layout>
      <PageHero
        eyebrow="— Distribution Network"
        title="Find an authorized Rapeda dealer."
        subtitle="Access Rapeda products, technical support and installation services through our growing distribution network across Europe, Africa and Asia."
      />

      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-3">
            {regions.map((r) => (
              <div
                key={r.name}
                className="group bg-card p-6 transition-colors hover:bg-[var(--charcoal)]"
              >
                <MapPin className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                <div className="mt-5 font-display text-lg font-bold">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  {r.count} {r.count === 1 ? "dealer" : "dealers"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[var(--charcoal)] py-20 md:py-28">
        <div className="container-x">
          <div className="eyebrow">— Authorized Dealers</div>
          <h2 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
            Production support, near you.
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dealers.map((d) => (
              <article
                key={d.name}
                className="group rounded-sm border border-border bg-background p-7 transition-all hover:border-primary/60"
              >
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-sm border border-border bg-[var(--charcoal)] font-display text-lg font-extrabold text-primary">
                    {d.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{d.name}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {d.city}
                </div>
                <div className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-foreground/80">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary" /> {d.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-primary" /> {d.email}
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {d.badges.map((b) => {
                    const Icon = badgeIcon[b] ?? BadgeCheck;
                    return (
                      <span
                        key={b}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-foreground/80"
                      >
                        <Icon className="h-3 w-3 text-primary" /> {b}
                      </span>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-sm border border-border bg-card p-10 md:p-16">
            <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-60" />
            <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-7">
                <div className="eyebrow">— Partnership</div>
                <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-tight md:text-5xl">
                  Grow with Rapeda.
                </h2>
                <p className="mt-5 max-w-xl text-muted-foreground">
                  Join our expanding dealer network and help deliver industrial print technology
                  across Europe, Africa and Asia.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <Link to="/contact" className="btn-accent">
                  Apply to Become a Dealer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
