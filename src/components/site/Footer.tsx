import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, routes, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-lg font-bold text-primary">{site.name}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Türkiye genelinde şehirler arası uçak kargo operasyonları. Aynı gün teslimat, güvenli
            taşıma ve hızlı rota desteği.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            İletişim
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
                <br />
                <a href={site.phone2Href} className="hover:text-primary">
                  {site.phone2}
                </a>
                <br />
                <a href={site.whatsappHref} className="hover:text-primary">
                  WhatsApp: {site.whatsapp}
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-primary">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Hızlı Bağlantılar
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Popüler Rotalar
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {routes.slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link to="/rotalar" className="hover:text-primary">
                  İstanbul → {r.city}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/rotalar" className="font-medium text-primary">
                Tüm Rotalar →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
