import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog | Uçak Kargo ve Lojistik Rehberi" },
      {
        name: "description",
        content:
          "Uçak kargo süreçleri, acil evrak gönderimi, rota planlaması ve şehirler arası lojistik hakkında rehber yazılar.",
      },
      { property: "og:title", content: "Blog | İstanbul Uçak Kargo" },
      {
        property: "og:description",
        content: "Uçak kargo operasyonları ve lojistik süreçleri hakkında rehber içerikler.",
      },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "Acil Evrak Gönderiminde Uçak Kargo Nasıl Çalışır?",
    excerpt:
      "Pasaport, kimlik ve resmi evrak gönderimlerinde alım, havalimanı kabulü ve teslimat adımlarının nasıl planlandığını anlatıyoruz.",
    cat: "Operasyon",
  },
  {
    title: "Şehirler Arası Kargoda 3 Saat Teslimat Mümkün mü?",
    excerpt:
      "Uçuş frekansı, kapıdan alım süresi ve varış koordinasyonunun teslim süresine etkisini inceliyoruz.",
    cat: "Rehber",
  },
  {
    title: "Ticari Sevkiyatta Doğru Kurye Filosunu Seçmek",
    excerpt:
      "Motorlu kurye ile araçlı kurye arasındaki farklar, çoklu koli sevkiyatlarında operasyon planlaması.",
    cat: "Lojistik",
  },
  {
    title: "Çek ve Finansal Evrak Taşımada Güvenlik",
    excerpt:
      "Değerli evrak gönderilerinde kontrollü taşıma, kurum teslim protokolleri ve Ankara koordinasyonu.",
    cat: "Kurumsal",
  },
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog • Bilgi Merkezi"
        title="Uçak Kargo ve Lojistik Rehberi"
        lead="Operasyon süreçleri, rota planlaması ve acil gönderi yönetimi hakkında hazırladığımız rehber içerikler."
      />

      <Section>
        <SectionHead eyebrow="Yazılar" title="Son İçerikler" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-lg border border-border bg-background p-7 transition-shadow hover:shadow-[0_12px_40px_-24px_oklch(0.34_0.15_264/0.6)]"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                {p.cat}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Not: WordPress temasında bu alan sitenizdeki gerçek blog yazılarını otomatik olarak
          listeler.
        </p>
      </Section>

      <CtaBand
        title="Gönderi planınız için bize yazın"
        text="Operasyon ekibimiz gönderinize uygun rota ve teslimat planını hızlıca oluşturur."
      />
    </>
  );
}
