import { createFileRoute } from "@tanstack/react-router";
import { flow, shipmentTypes, site } from "@/lib/site-data";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: "Hizmetler | İstanbul Çıkışlı 3 Saat Uçak Kargo" },
      {
        name: "description",
        content:
          "Motorlu ve araçlı kurye ile kapıdan alım, havalimanı operasyonu, THY uçuş planlaması ve Ankara kurum teslimatı hizmetleri.",
      },
      { property: "og:title", content: "Hizmetler | İstanbul Uçak Kargo" },
      {
        property: "og:description",
        content: "Pasaport, kimlik, çek, resmi evrak, ticari gönderi ve gıda sevkiyatı hizmetleri.",
      },
    ],
  }),
  component: Services,
});

const modules = [
  { no: "01", title: "Motorlu Kurye", text: "Standart paketlerde İstanbul genelinde kapıdan hızlı alım." },
  { no: "02", title: "Araçlı Kurye", text: "Çoklu koli ve yüksek hacimde adresinizden toplu alım." },
  { no: "03", title: "Havalimanı Operasyonu", text: "Paket kabulü, güvenlik ve uçuş öncesi koordinasyon." },
  { no: "04", title: "Teslimat Koordinasyonu", text: "Varış şehrinde kapıda veya kurum teslimi planlaması." },
];

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler • Yurt İçi Uçak Kargo"
        title={
          <>
            İstanbul Çıkışlı
            <br />3 Saat Teslimat
          </>
        }
        lead="Motorlu ve araçlı kurye filomuz gönderinizi kapınızdan alır, havalimanı operasyonuna aktarır ve Türk Hava Yolları uçuşlarıyla Türkiye genelinde uçak kargo ile ulaştırır."
        stats={[
          { value: "Türkiye Geneli", label: "Havalimanı Ağı" },
          { value: "3 Saat", label: "Teslimat" },
          { value: "7/24", label: "Operasyon İletişimi" },
        ]}
      />

      <Section>
        <SectionHead eyebrow="Operasyonel Hız" title="Operasyon Modülleri" />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m.no} className="bg-background p-7">
              <div className="font-display text-sm font-bold text-accent">{m.no}</div>
              <h3 className="mt-3 text-lg font-semibold text-primary">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <SectionHead
            eyebrow="Uçuş Planlaması"
            title="Türkiye'nin Geniş Havayolu Ağı Üzerinden Operasyon"
            text="Gönderilerimiz Türk Hava Yolları uçuş programı üzerinden yapılır. Şehirler arası uçak kargo operasyonlarında uygun uçuş ve aktarma seçenekleri değerlendirilerek rota planlaması gerçekleştirilir."
          />
          <ul className="grid gap-px self-start overflow-hidden rounded-lg border border-border bg-border">
            {[
              "Geniş yurt içi uçuş frekansı",
              "Havalimanı aktarma imkânı",
              "Şehirler arası hızlı transit",
              "Operasyonel rota esnekliği",
            ].map((t) => (
              <li key={t} className="bg-background px-6 py-4 text-sm font-medium text-primary">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Gönderi Türleri"
          title="Hangi Gönderiyi Göndermek İstiyorsunuz?"
          text="Her hizmet modülü; ne gönderildiğini, kimlerin kullandığını ve neden uçak kargonun tercih edildiğini açıkça anlatır."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shipmentTypes.map((s) => (
            <article
              key={s.no}
              className="rounded-lg border border-border bg-background p-7 transition-shadow hover:shadow-[0_12px_40px_-24px_oklch(0.34_0.15_264/0.6)]"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-bold text-accent">{s.no}</span>
                <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
              </div>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Ne gönderilir?
                  </dt>
                  <dd className="mt-1 text-foreground/85">{s.what}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Kimler kullanır?
                  </dt>
                  <dd className="mt-1 text-foreground/85">{s.who}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Neden uçak kargo?
                  </dt>
                  <dd className="mt-1 text-foreground/85">{s.why}</dd>
                </div>
              </dl>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex text-sm font-semibold text-accent hover:underline"
              >
                3 Saat Teklif Al →
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="surface" className="scroll-mt-24">
        <div id="ankara-devlet" className="scroll-mt-28">
          <SectionHead
            eyebrow="Özel Operasyon"
            title="Ankara Kurum & Resmi Daire Teslimatı"
            text="Çek, resmi evrak ve kurumsal belgelerin Ankara'daki bakanlık, kamu kurumu ve resmi dairelere teslimatı için özel operasyon koordinasyonu sunuyoruz. Bu hizmet, standart kargo sürecinden ayrı planlanır."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {["Bakanlıklar", "Kamu Kurumları", "Resmi Daireler", "Kurumsal Evrak Teslimleri"].map(
              (t, i) => (
                <div key={t} className="bg-background p-6">
                  <div className="font-display text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-sm font-medium text-primary">{t}</div>
                </div>
              ),
            )}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Süreç"
          title="Gönderiniz Nasıl İlerler?"
          text="Talepten teslimata kadar her adım tek operasyon ekibi tarafından koordine edilir."
        />
        <ol className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-5">
          {flow.map((f) => (
            <li key={f.step} className="bg-background p-6">
              <div className="font-display text-2xl font-bold text-accent/80">{f.step}</div>
              <h3 className="mt-3 text-sm font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Gönderiniz için doğru operasyonu birlikte seçelim"
        text="Acil teslimat, kurum koordinasyonu veya özel gönderi — operasyon ekibimiz ihtiyacınıza uygun hizmeti yönlendirir."
      />
    </>
  );
}
