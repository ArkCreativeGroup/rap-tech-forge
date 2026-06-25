import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, ArrowUpRight, Wrench, ShieldCheck, Headphones } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rapeda — Request a Quote or Technical Support" },
      {
        name: "description",
        content:
          "Talk to a Rapeda specialist. Request a quote, book a demo or reach technical support for industrial UV, DTF and heat press systems.",
      },
      { property: "og:title", content: "Contact Rapeda" },
      { property: "og:description", content: "Request a quote or speak with a print production specialist." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email sales@rapeda.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero
        eyebrow="— Get in touch"
        title="Talk to the Rapeda Team."
        subtitle="Whether you're ready to order, book a live demo, exploring your options, or want to become a dealer — our team is here to help."
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-sm border border-border bg-card p-8 md:p-10">
              <h2 className="font-display text-2xl font-bold tracking-tight">Send a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your production needs and a specialist will reach out.
              </p>

              {sent ? (
                <div className="mt-8 rounded-sm border border-primary/40 bg-primary/10 p-6 text-sm">
                  Thanks — your request has been received. A specialist will be in touch shortly.
                </div>
              ) : (
                <form
                  name="contact"
                  data-netlify="true"
                  method="POST"
                  className="mt-8 grid gap-5"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Full Name" name="name" required />
                    <Field label="Company" name="company" />
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Interest
                    </label>
                    <select
                      name="interest"
                      className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a product line</option>
                      <option>UV Printing Systems</option>
                      <option>DTF Production Systems</option>
                      <option>Heat Press Equipment</option>
                      <option>Supplies & Consumables</option>
                      <option>Dealer Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      placeholder="Tell us about your production needs..."
                    />
                  </div>
                  {error ? <div className="text-sm text-destructive">{error}</div> : null}
                  <button type="submit" className="btn-accent w-fit" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"} <ArrowUpRight className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-sm border border-border bg-[var(--charcoal)] p-8">
              <div className="eyebrow">— Direct contact</div>
              <div className="mt-6 space-y-5">
                <Info icon={Mail} label="Sales" value="sales@rapeda.com" />
                <Info icon={Phone} label="Phone" value="+1 800 RAPEDA" />
                <Info icon={MapPin} label="HQ" value="Munich, Germany" />
              </div>
            </div>

            <div className="mt-5 grid gap-px overflow-hidden rounded-sm bg-border">
              {[
                { icon: Wrench, title: "Technical Support", copy: "Installation, training and on-site service." },
                { icon: ShieldCheck, title: "Warranty", copy: "Coverage on industrial production systems." },
                { icon: Headphones, title: "After-sales", copy: "Spare parts, consumables and remote diagnostics." },
              ].map((b) => (
                <div key={b.title} className="bg-card p-6">
                  <b.icon className="h-5 w-5 text-primary" />
                  <div className="mt-4 font-display text-base font-bold">{b.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{b.copy}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 place-items-center rounded-sm border border-border bg-background">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 font-medium">{value}</div>
      </div>
    </div>
  );
}
