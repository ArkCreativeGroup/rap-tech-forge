import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, Zap, Target, ShieldCheck, Clock, Wrench, BookOpen, Package, ShieldAlert } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProductBySlug, productCatalog, type Product } from "@/lib/product-catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — ${p.categoryLabel} | Rapeda` : "Product | Rapeda";
    const description = p?.tagline ?? "Rapeda industrial printing equipment.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p?.img ? [{ property: "og:image", content: p.img }] : []),
        ...(p?.img ? [{ name: "twitter:image", content: p.img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <Layout>
      <section className="container-x py-32 text-center">
        <div className="eyebrow">— Not Found</div>
        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
          Product not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          We couldn't find the product you were looking for.
        </p>
        <Link to="/products" className="btn-accent mt-8 inline-flex">
          Back to Products
        </Link>
      </section>
    </Layout>
  ),
  errorComponent: ({ error, reset }) => (
    <Layout>
      <section className="container-x py-32 text-center">
        <h1 className="font-display text-3xl font-extrabold">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="btn-accent mt-6 inline-flex">
          Try again
        </button>
      </section>
    </Layout>
  ),
  component: ProductDetail,
});

const valueProps = [
  { icon: Zap, title: "High-Speed Production", body: "Engineered for continuous production runs." },
  { icon: Target, title: "Precision Output", body: "Consistent quality every print, every time." },
  { icon: ShieldCheck, title: "Industrial Reliability", body: "Built for demanding production environments." },
  { icon: Clock, title: "Workflow Efficiency", body: "Designed to maximize throughput and profit." },
];

const supportItems = [
  { icon: Wrench, title: "Installation", body: "Professional on-site installation by certified Rapeda technicians." },
  { icon: BookOpen, title: "Training & Onboarding", body: "Full operator training covering machine operation, color management and maintenance." },
  { icon: Package, title: "Spare Parts", body: "Genuine Rapeda parts available through your regional dealer." },
  { icon: ShieldAlert, title: "Warranty Coverage", body: "12-month warranty on all Rapeda machines with optional extension plans." },
];

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src={product.img}
            alt=""
            aria-hidden
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="container-x relative py-24 md:py-36">
          <div className="eyebrow uppercase">— {product.categoryLabel}</div>
          <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {product.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-accent">
              Request Quote <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/where-to-buy" className="btn-ghost">
              Find Dealer
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="border-b border-border">
        <div className="container-x grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4 md:py-12">
          {valueProps.map((v, i) => (
            <div
              key={v.title}
              className={`px-4 text-center md:px-8 ${
                i < valueProps.length - 1 ? "md:border-r md:border-border" : ""
              }`}
            >
              <v.icon className="mx-auto h-5 w-5 text-primary" />
              <h3 className="mt-3 font-display text-sm font-bold tracking-tight md:text-base">
                {v.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION GALLERY */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-x">
          <div className="eyebrow">— Application Gallery</div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            What You Can Create
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {product.gallery.map((g) => (
              <figure key={g.label} className="group flex flex-col gap-3">
                <div className="aspect-square overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={g.img}
                    alt={g.label}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="text-sm font-semibold tracking-tight">{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS + WORKFLOW */}
      <section className="border-b border-border bg-[var(--charcoal)] py-16 md:py-24">
        <div className="container-x grid gap-16 md:grid-cols-2">
          <div>
            <div className="eyebrow">— Technical Specifications</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Spec Sheet
            </h2>
            <Accordion type="single" collapsible defaultValue={product.specSheet[0]?.label} className="mt-8">
              {product.specSheet.map((s) => (
                <AccordionItem key={s.label} value={s.label} className="border-border">
                  <AccordionTrigger className="text-sm font-semibold tracking-tight hover:no-underline">
                    {s.label}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {s.value}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <div className="eyebrow">— Production Workflow</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              How It Works
            </h2>
            <ol className="mt-8 space-y-5">
              {product.workflow.map((step, i) => (
                <li key={step} className="relative flex items-start gap-5 pl-2">
                  {i < product.workflow.length - 1 && (
                    <span className="absolute left-[18px] top-7 h-full w-px bg-border" aria-hidden />
                  )}
                  <span className="relative z-10 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-sm border border-primary/40 bg-background text-[11px] font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-sm font-medium text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SUPPORT & SERVICE */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-x">
          <div className="eyebrow">— After-Sales</div>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Support & Service
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportItems.map((s) => (
              <div
                key={s.title}
                className="rounded-sm border border-border bg-card p-6 transition-all hover:border-primary/60"
              >
                <s.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-base font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--charcoal)] py-20">
        <div className="container-x text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Talk to a Rapeda Specialist
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Get pricing, availability information and expert guidance on integrating this machine into your workflow.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/contact" className="btn-accent">
              Request Quote <ChevronRight className="h-4 w-4" />
            </Link>
            <Link to="/where-to-buy" className="btn-ghost">
              Find Dealer
            </Link>
          </div>
        </div>
      </section>

      {/* hidden related list keeps catalog import meaningful for related nav in future */}
      <div className="sr-only" aria-hidden>
        {productCatalog.length} products in catalog
      </div>
    </Layout>
  );
}
