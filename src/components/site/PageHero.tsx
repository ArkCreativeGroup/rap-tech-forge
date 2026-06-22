import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-70" />
      <div className="container-x relative py-24 md:py-32">
        <div className="eyebrow anim-up">{eyebrow}</div>
        <h1 className="anim-up mt-6 max-w-5xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="anim-up mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
        {children && <div className="anim-up mt-10">{children}</div>}
      </div>
    </section>
  );
}
