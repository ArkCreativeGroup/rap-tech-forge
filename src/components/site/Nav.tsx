import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/rapeda-logo-white.png";

const links = [
  { to: "/products", label: "Products" },
  { to: "/supplies", label: "Supplies" },
  { to: "/about", label: "About" },
  { to: "/where-to-buy", label: "Where To Buy" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center" aria-label="Rapeda home">
          <img src={logoWhite} alt="Rapeda" className="h-4 w-auto md:h-5" />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/contact" className="btn-accent">
            Request Quote
          </Link>
        </div>

        <button
          className="rounded-sm p-2 text-foreground md:hidden"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-base font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-accent mt-3" onClick={() => setOpen(false)}>
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
