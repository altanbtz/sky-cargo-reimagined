import type { ReactNode } from "react";
import { site } from "@/lib/site-data";

export function Section({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface";
}) {
  return (
    <section
      className={`${tone === "surface" ? "bg-surface" : "bg-background"} border-b border-border py-16 md:py-24 ${className}`}
    >
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{text}</p>}
    </div>
  );
}

export function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "mt-8"}`}>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
      >
        WhatsApp'tan Teklif Al
      </a>
      <a
        href={site.phoneHref}
        className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface"
      >
        Hemen Ara · {site.phone}
      </a>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  stats,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  stats?: { value: string; label: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40" />
      <div className="container-x relative py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.08] text-primary md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
        <CtaButtons />
        {stats && (
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-background px-6 py-5">
                <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="border-b border-border bg-primary py-16 text-primary-foreground md:py-20">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            WhatsApp'tan Teklif Al
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp ile yazın"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
    >
      <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
        <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.2s-.7 1-.9 1.2c-.2.2-.3.2-.6.1-1.7-.9-2.8-1.6-3.9-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.6s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.6 5.6 4.9 2.1.8 2.9.9 3.9.8.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
      </svg>
      WhatsApp
    </a>
  );
}
