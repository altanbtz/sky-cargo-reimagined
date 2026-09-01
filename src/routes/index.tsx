import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bike, Clock, PackageCheck, Plane, Truck } from "lucide-react";
import { cargoClasses, flow, routes, site, testimonials } from "@/lib/site-data";
import { CtaBand, CtaButtons, Eyebrow, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "İstanbul Uçak Kargo | Türkiye Geneli Aynı Gün Hava Kargo" },
      {
        name: "description",
        content:
          "İstanbul merkezli uçak kargo: motor kurye ile kapıdan alım, THY uçuş planlaması ve alım sonrası 3 saat içinde kapıda teslimat. Türkiye geneli 16+ rota.",
      },
      { property: "og:title", content: "İstanbul Uçak Kargo | Aynı Gün Hava Kargo" },
      {
        property: "og:description",
        content:
          "Kapıdan alım, havalimanı koordinasyonu ve Türkiye geneli uçak kargo operasyonu. 3 saat içinde teslimat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pickup = [
  {
    icon: Bike,
    title: "Motorlu Kurye ile Alım",
    text: "Evrak, pasaport, kimlik ve küçük hacimli acil gönderiler için İstanbul içi motor kurye alımı.",
  },
  {
    icon: Truck,
    title: "Araçlı Filo ile Alım",
    text: "Koli, ticari sevkiyat ve hacimli gönderiler için araçlı ekip yönlendirmesi yapılır.",
  },
  {
    icon: Plane,
    title: "THY Uçuş Planlaması",
    text: "Gönderiniz en yakın uygun uçuşa göre planlanır, havalimanı kabul süreci koordine edilir.",
  },
  {
    icon: Clock,
    title: "3 Saat İçinde Teslimat",
    text: "Alım sonrası hedef şehirde kapıda teslimat; süreç boyunca bilgilendirme yapılır.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 hairline-grid opacity-40" />
        <div className="container-x relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <Eyebrow>İstanbul Merkezli Hava Kargo</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] text-primary md:text-[3.4rem]">
              Şehirler arası acil gönderileriniz{" "}
              <span className="text-accent">aynı gün havada</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              İstanbul'un her noktasından motor kurye ile kapınızdan alıyor, uçuş planlamasını
              yapıyor ve alım sonrası 3 saat içinde hedef şehirde teslim ediyoruz.
            </p>
            <CtaButtons />
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {[
                { v: "3 Saat", l: "Kapıda Teslimat" },
                { v: "16+", l: "Aktif Rota" },
                { v: "7/24", l: "Operasyon Desteği" },
              ].map((s) => (
                <div key={s.l} className="bg-background px-6 py-5">
                  <div className="font-display text-2xl font-bold text-primary">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Popüler Rotalar
            </div>
            <ul className="mt-5 divide-y divide-border">
              {routes.slice(0, 7).map((r) => (
                <li key={r.slug} className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm font-semibold text-primary">İstanbul → {r.city}</span>
                  <span className="rounded border border-border bg-background px-2 py-0.5 font-display text-[11px] font-bold tracking-wider text-muted-foreground">
                    {r.code}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/rotalar"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              Tüm rotaları görüntüle <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Kapıdan Alım"
          title="Alımdan teslimata tek operasyon zinciri"
          text="Gönderinizin türüne göre motorlu veya araçlı ekip yönlendirilir; uçuş ve teslimat aynı ekip tarafından takip edilir."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {pickup.map((p) => (
            <div key={p.title} className="bg-background p-6 transition-colors hover:bg-surface">
              <p.icon className="size-6 text-accent" />
              <h3 className="mt-4 text-base font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHead
            eyebrow="Gönderi Sınıfları"
            title="Taşıdığımız gönderi türleri"
            text="Resmi evraktan ticari sevkiyata kadar geniş bir gönderi yelpazesinde uçak kargo planlaması yapıyoruz."
          />
          <ul className="grid gap-px self-start overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {cargoClasses.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 bg-background px-5 py-4 text-sm font-medium text-foreground/85"
              >
                <PackageCheck className="size-4 shrink-0 text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow="Operasyon Akışı" title="Beş adımda uçak kargo süreci" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {flow.map((f) => (
            <div key={f.step} className="bg-background p-6">
              <div className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                {f.step}
              </div>
              <h3 className="mt-3 text-base font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Müşteri Yorumları" title="Bizimle çalışanlar ne diyor?" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-lg border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-primary">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Gönderiniz için hemen teklif alın"
        text={`${site.address} adresindeki operasyon merkezimizden Türkiye geneline uçak kargo planlaması yapıyoruz.`}
      />
    </>
  );
}
