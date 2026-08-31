import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="hidden border-b border-border bg-surface md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs text-muted-foreground">
          <span>{site.tagline}</span>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="hover:text-primary">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-primary">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-x flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-md bg-primary font-display text-sm font-bold tracking-tight text-primary-foreground">
            İUK
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-bold text-primary">
              İstanbul Uçak Kargo
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Hava Kargo Operasyonu
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-primary"
              activeProps={{ className: "text-primary bg-surface" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener"
            className="hidden rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-surface sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
          >
            <Phone className="size-4" />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Ara</span>
          </a>
          <button
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-x flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
