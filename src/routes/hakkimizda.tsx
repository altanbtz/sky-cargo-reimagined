import { createFileRoute } from "@tanstack/react-router";
import { cargoClasses } from "@/lib/site-data";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: "Hakkımızda | İstanbul Uçak Kargo Operasyonu" },
      {
        name: "description",
        content:
          "İstanbul merkezli uçak kargo operasyonu: motor kurye ile kapıdan alım, THY uçuş planlaması ve 3 saat içinde kapıda teslimat.",
      },
      { property: "og:title", content: "Hakkımızda | İstanbul Uçak Kargo" },
      {
        property: "og:description",
        content: "Kapıdan alım, havalimanı koordinasyonu ve Türkiye geneli uçak kargo operasyonu.",
      },
    ],
  }),
  component: About,
});

const metrics = [
  { k: "Alım", v: "Motor", l: "Kurye Filosu" },
  { k: "Teslimat", v: "3 Saat", l: "Kapıda Teslimat" },
  { k: "Uçuş", v: "THY", l: "Uçuş Planlaması" },
  { k: "Kapsam", v: "TR", l: "Türkiye Geneli" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="İstanbul Merkezli • Motor Kurye ile Alım"
        title={
          <>
            İstanbul Merkezli
            <br />
            Uçak Kargo Operasyonu
          </>
        }
        lead="İstanbul merkezli operasyonumuzda motorlu ve araçlı kurye filomuz gönderinizi kapınızdan teslim alır, havalimanı operasyonuna aktarır ve Türk Hava Yolları uçuşlarıyla Türkiye genelinde uçak kargo ile ulaştırır. Alım sonrası 3 saat içinde kapıda teslimat."
        stats={[
          { value: "3 Saat", label: "Teslimat" },
          { value: "THY", label: "Uçuş Partneri" },
          { value: "7/24", label: "Operasyon" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHead
              eyebrow="Kurumsal Kimlik"
              title="İstanbul Uçak Kargo Hakkında"
              text="İstanbul Uçak Kargo; İstanbul merkezli kapıdan alım, havalimanı koordinasyonu ve şehirler arası uçak kargo operasyonlarında uzmanlaşmış bir markadır."
            />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Operasyon anlayışımız yalnızca gönderi taşımak değildir. Her gönderi; rota planlaması,
              uçuş koordinasyonu, operasyon takibi, müşteri bilgilendirmesi ve teslimat sürecinin
              eksiksiz yönetimi ile ele alınır.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Motorlu veya araçlı kurye ile kapıdan alım, Türk Hava Yolları uçuşlarıyla aktarım ve
              alım sonrası 3 saat içinde kapıda teslimat; Ankara, İzmir, Antalya ve Türkiye
              genelindeki şehirler arası hatlarda aynı operasyon disipliniyle yürütülür.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Motor Kurye ile Alım",
                "THY Uçuş Planlaması",
                "3 Saat Kapıda Teslimat",
                "7/24 WhatsApp Desteği",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-px self-start overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {metrics.map((m) => (
              <div key={m.k} className="bg-background p-6">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {m.k}
                </div>
                <div className="mt-3 font-display text-3xl font-bold text-primary">{m.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{m.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHead
          eyebrow="Operasyonel Kapsam"
          title="Taşınan Gönderi Sınıfları"
          text="İstanbul merkezli uçak kargo operasyonlarımızda her gönderi; içerik sınıfı, güvenlik gereksinimi ve teslimat önceliğine göre planlanır."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {cargoClasses.map((c, i) => (
            <div key={c} className="bg-background p-6">
              <div className="font-display text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="mt-2 text-sm font-medium text-primary">{c}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Operasyon Felsefesi"
          title="Operasyonun Merkezinde Güven Var"
          text="Acil gönderilerde müşteriler yalnızca hız aramaz; sürecin kontrol altında olduğunu bilmek ister. Bu yüzden alım, uçuş ve teslimat aşamalarının tamamı tek ekip tarafından koordine edilir ve süreç boyunca bilgilendirme yapılır."
        />
      </Section>

      <CtaBand
        title="Gönderiniz için operasyon planı oluşturalım"
        text="Gönderi bilgilerinizi paylaşın; en uygun rota ve teslimat planı için hızlıca dönüş yapalım."
      />
    </>
  );
}
