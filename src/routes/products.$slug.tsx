import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { getProductBySlug, productCatalog, type Product } from "@/lib/product-catalog";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — ${p.cat} | Rapeda` : "Product | Rapeda";
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

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const related = productCatalog.filter((p) => p.slug !== product.slug);

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-60" />
        <div className="container-x relative py-12 md:py-16">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            All Products
          </Link>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-x grid gap-10 py-12 md:grid-cols-2 md:py-20">
          <div className="relative overflow-hidden rounded-sm border border-border bg-card">
            <img
              src={product.img}
              alt={product.name}
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute left-4 top-4 rounded-sm border border-border bg-background/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
              {product.cat}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="eyebrow">— {product.cat}</div>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {product.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              {product.longDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-1.5">
              {product.apps.map((a) => (
                <span
                  key={a}
                  className="rounded-sm border border-border px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-accent">
                Request a Quote
              </Link>
              <Link to="/where-to-buy" className="btn-ghost">
                Find a Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-16 md:py-24">
        <div className="container-x">
          <div className="eyebrow">— Why this machine</div>
          <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-extrabold tracking-tight md:text-5xl">
            Built for the realities of production.
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {product.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-sm border border-border bg-card p-6 transition-all hover:border-primary/60"
              >
                <h3 className="font-display text-lg font-bold tracking-tight">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--charcoal)] py-16 md:py-24">
        <div className="container-x grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="eyebrow">— Features</div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Engineered to keep producing.
            </h2>
            <ul className="mt-8 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow">— Specifications</div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              Technical specs.
            </h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {product.specs.map((s) => (
                <div key={s.label} className="grid grid-cols-[1fr_1.4fr] gap-4 py-3">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="text-sm text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">— Also in the lineup</div>
              <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                Other Rapeda machines.
              </h2>
            </div>
            <Link
              to="/products"
              className="hidden items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary md:inline-flex"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group flex overflow-hidden rounded-sm border border-border bg-card transition-all hover:border-primary/60"
              >
                <div className="aspect-square w-40 flex-shrink-0 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-2 p-5">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {p.cat}
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{p.name}</h3>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition group-hover:text-primary">
                    View Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
