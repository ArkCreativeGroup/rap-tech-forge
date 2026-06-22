import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logoWhite from "@/assets/rapeda-logo-white.png";

const cols = [
  {
    title: "Products",
    items: [
      { label: "UV Printers", to: "/products" },
      { label: "DTF Printers", to: "/products" },
      { label: "Heat Presses", to: "/products" },
      { label: "Supplies", to: "/supplies" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Technical Support", to: "/contact" },
      { label: "Warranty", to: "/contact" },
      { label: "Installation", to: "/contact" },
      { label: "Resources", to: "/supplies" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Rapeda", to: "/about" },
      { label: "Dealer Network", to: "/where-to-buy" },
      { label: "Contact", to: "/contact" },
      { label: "Careers", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[var(--charcoal)]">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link to="/" className="inline-flex items-center" aria-label="Rapeda home">
              <img src={logoWhite} alt="Rapeda" className="h-7 w-auto" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Industrial print technology engineered for production businesses that demand speed,
              reliability and scalable output.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-sm border border-border text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <Link
                      to={it.to}
                      className="text-sm text-foreground/80 transition hover:text-primary"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© 2026 Rapeda. All Rights Reserved.</div>
          <div className="flex gap-5">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
