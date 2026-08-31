import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/otogar-kargo")({
  head: () => ({
    meta: [
      { title: "Otogar Kargo | Ekonomik Şehirler Arası Gönderi" },
      {
        name: "description",
        content:
          "Planlı sevkiyatlar için ekonomik otogar kargo: kapıdan alım, otobüs hattı sevkiyatı ve varışta adrese teslim.",
      },
      { property: "og:title", content: "Otogar Kargo | İstanbul Uçak Kargo" },
      {
        property: "og:description",
        content: "Bütçe dostu, planlı şehirler arası otogar kargo operasyonu.",
      },
    ],
  }),
  component: OtogarPage,
});

const advantages = [
  {
    title: "Ekonomik Maliyet",
    text: "Planlı şehirler arası gönderilerinizde kontrollü operasyon ve bütçe dostu fiyatlandırma. Kapıdan kapıya hizmet kalitesi korunur.",
    tag: "Bütçe dostu · planlı sevkiyat",
  },
  {
    title: "Kapıdan Alım",
    text: "Motorlu veya araçlı kurye ile adresinizden teslim alınır. Paketinizi otogara siz getirmek zorunda kalmazsınız.",
    tag: "Motorlu & araçlı filo",
  },
  {
    title: "Geniş Otobüs Ağı",
    text: "Türkiye genelinde otogar çıkışlı ve varışlı hatlarda planlı kargo aktarımı. Güvenilir sefer planlaması ile koordinasyon.",
    tag: "Geniş erişim · 81 il",
  },
  {
    title: "Kontrollü Operasyon",
    text: "Alım, otobüs sevkiyatı ve varış teslimatı tek operasyon ekibi tarafından uçtan uca koordine edilir.",
    tag: "Tek ekip · uçtan uca",
  },
];

const steps = [
  { no: "01", t: "Talep & Fiyat", d: "WhatsApp veya telefonla gönderi bilgilerinizi paylaşın." },
  { no: "02", t: "Kapıdan Alım", d: "Kurye gönderinizi adresinizden teslim alır." },
  { no: "03", t: "Otogar Aktarım", d: "Paket otobüse yüklenir, hat sevkiyatına hazırlanır." },
  { no: "04", t: "Otobüs Sevkiyatı", d: "Planlanan seferle varış şehrine taşınır." },
  { no: "05", t: "Kapıya Teslim", d: "Varışta kurye ile adrese teslim edilir." },
];

function OtogarPage() {
  return (
    <>
      <PageHero
        eyebrow="Otogar Kargo • Planlı & Ekonomik"
        title="Ekonomik Şehirler Arası Otogar Kargo"
        lead="Zamana duyarlı olmayan planlı gönderileriniz için bütçe dostu otogar kargo çözümü. Kapıdan alım, otobüs hattı sevkiyatı ve varışta adrese teslim tek operasyonla yönetilir."
      />

      <Section>
        <SectionHead eyebrow="Avantajlar" title="Neden Otogar Kargo?" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="bg-background p-7">
              <h3 className="text-lg font-semibold text-primary">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              <div className="mt-4 text-xs uppercase tracking-[0.14em] text-accent">{a.tag}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead eyebrow="Adım Adım" title="Talepten Teslimata" />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {steps.map((s) => (
            <li key={s.no} className="bg-background p-6">
              <div className="font-display text-2xl font-bold text-accent/80">{s.no}</div>
              <h3 className="mt-3 text-sm font-semibold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-surface p-8">
            <h3 className="font-display text-xl font-bold text-primary">Otogar Kargo</h3>
            <p className="mt-1 text-sm text-accent">Planlı & Ekonomik</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                "Kapıdan kapıya operasyon",
                "Motorlu / araçlı kapıdan alım",
                "Güvenilir hat planlaması",
                "Türkiye geneli otobüs ağı",
                "Maliyet avantajlı taşıma",
              ].map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-background p-8">
            <h3 className="font-display text-xl font-bold text-primary">Uçak Kargo</h3>
            <p className="mt-1 text-sm text-accent">Hızlı & Acil</p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                "3 saat teslimat hedefi",
                "Havalimanı operasyonu",
                "THY uçuş planlaması",
                "Zamana duyarlı acil gönderiler",
              ].map((t) => (
                <li key={t}>· {t}</li>
              ))}
            </ul>
            <Link
              to="/hizmetler"
              className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline"
            >
              Acil gönderiler için Uçak Kargo →
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Otogar kargo teklifi alın"
        text="Gönderi ölçüsü, çıkış ve varış noktası bilgilerinizi paylaşın; en uygun planı hızlıca iletelim."
      />
    </>
  );
}
