import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site-data";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: "İletişim | İstanbul Uçak Kargo Operasyon Merkezi" },
      {
        name: "description",
        content:
          "Perpa Ticaret Merkezi Şişli merkezli operasyon ekibimize ulaşın. Telefon 0 212 234 00 70, WhatsApp 0535 509 20 20, info@istanbulucakkargo.com.",
      },
      { property: "og:title", content: "İletişim | İstanbul Uçak Kargo" },
      {
        property: "og:description",
        content: "Teklif, rota planlama ve acil gönderi koordinasyonu için bize ulaşın.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsapp,
      note: "Hızlı teklif ve operasyon bilgisi için.",
      href: site.whatsappHref,
    },
    {
      icon: Phone,
      label: "Telefon",
      value: site.phone,
      note: "Operasyon ekibiyle doğrudan görüşün.",
      href: site.phoneHref,
    },
    {
      icon: Phone,
      label: "Telefon (2)",
      value: site.phone2,
      note: "Alternatif operasyon hattı.",
      href: site.phone2Href,
    },
    {
      icon: Mail,
      label: "E-Posta",
      value: site.email,
      note: "Kurumsal talepler ve detaylı bilgi için.",
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="İletişim • Operasyon Merkezi"
        title="Operasyon Ekibimizle İletişime Geçin"
        lead="Türkiye geneli uçak kargo, aynı gün teslimat ve şehirler arası acil gönderiler için operasyon ekibimizle hızlıca iletişime geçin."
        stats={[
          { value: "3 Saat", label: "Teslimat" },
          { value: "THY", label: "Uçuş Partneri" },
          { value: "7/24", label: "Operasyon" },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="İletişim Kanalları"
          title="Operasyon Ekibine Ulaşın"
          text="Teklif, rota planlama ve acil gönderi koordinasyonu için aşağıdaki kanallardan bize ulaşabilirsiniz."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a key={c.label} href={c.href} className="group bg-background p-7 hover:bg-surface">
              <c.icon className="size-5 text-accent" />
              <div className="mt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 font-display text-lg font-bold text-primary">{c.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.note}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead
              eyebrow="Konum"
              title="İstanbul Merkezli Operasyon Noktası"
              text="Perpa Ticaret Merkezi merkezli operasyon yapımızla İstanbul çıkışlı Türkiye geneli uçak kargo taleplerinizi koordine ediyoruz."
            />
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
                <span className="text-foreground/85">{site.address}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Türkiye Geneli Operasyon",
                  "Aynı Gün Değerlendirme",
                  "Motorlu / Araçlı Kurye Alımı",
                  "7/24 İletişim",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-background">
            <iframe
              title="Perpa Ticaret Merkezi konum haritası"
              src="https://www.google.com/maps?q=Perpa%20Ticaret%20Merkezi%20A%20Blok%20%C5%9Ei%C5%9Fli%20%C4%B0stanbul&output=embed"
              loading="lazy"
              className="h-80 w-full border-0"
            />
          </div>
        </div>
      </Section>

      <CtaBand
        title="Acil gönderiniz için anında bağlantı"
        text="Motorlu kurye alımı, havalimanı operasyonu ve aynı gün teslimat değerlendirmesi için WhatsApp hattımız en hızlı kanaldır."
      />
    </>
  );
}
