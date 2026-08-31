import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { routes } from "@/lib/site-data";
import { CtaBand, PageHero, Section, SectionHead } from "@/components/site/ui";

export const Route = createFileRoute("/rotalar")({
  head: () => ({
    meta: [
      { title: "Rotalar | İstanbul Çıkışlı Uçak Kargo Hatları" },
      {
        name: "description",
        content:
          "İstanbul çıkışlı aktif uçak kargo rotaları: Ankara, İzmir, Antalya, Bodrum, Dalaman, Gaziantep, Diyarbakır ve Türkiye geneli hatlar.",
      },
      { property: "og:title", content: "Rotalar | İstanbul Uçak Kargo" },
      {
        property: "og:description",
        content: "İstanbul çıkışlı şehirler arası uçak kargo hatlarını keşfedin.",
      },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () => routes.filter((r) => r.city.toLocaleLowerCase("tr").includes(q.toLocaleLowerCase("tr"))),
    [q],
  );

  return (
    <>
      <PageHero
        eyebrow="Rotalar • Yurt İçi Uçak Kargo"
        title={
          <>
            Aktif Hatlar ve
            <br />
            Şehirler Arası Rotalar
          </>
        }
        lead="İstanbul çıkışlı şehirler arası uçak kargo rotalarımızı keşfedin. Her hatta motorlu kurye alımı, havalimanı operasyonu ve 3 saat teslimat hedefi geçerlidir."
        stats={[
          { value: "THY", label: "Uçuş Partneri" },
          { value: "3 Saat", label: "Teslimat" },
          { value: "7/24", label: "Operasyon" },
        ]}
      />

      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead
            eyebrow="Operasyon Hatları"
            title="İstanbul Çıkışlı Aktif Rotalar"
            text="Şehir adıyla arayın; yeni eklenen hatlar otomatik olarak listeye dahil edilir."
          />
          <label className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Rota ara (örn. Ankara)"
              className="w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none focus:border-accent"
            />
          </label>
        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {list.length} rota listeleniyor
        </p>

        <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <article key={r.slug} className="group bg-background p-6">
              <div className="flex items-center gap-3 font-display text-sm font-bold text-primary">
                <span className="rounded border border-border bg-surface px-2 py-1">IST</span>
                <span className="h-px flex-1 bg-border" />
                <span className="rounded border border-border bg-surface px-2 py-1">{r.code}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-primary">İstanbul → {r.city}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                İstanbul {r.city} Uçak Kargo · Aktif Hat
              </p>
              <span className="mt-4 inline-block rounded-full bg-surface px-3 py-1 text-xs font-medium text-accent">
                3 Saat Teslimat
              </span>
            </article>
          ))}
          {list.length === 0 && (
            <div className="bg-background p-8 text-sm text-muted-foreground">
              Rota bulunamadı. Farklı bir şehir adı deneyin.
            </div>
          )}
        </div>
      </Section>

      <CtaBand
        title="Rotanızı hemen planlayın"
        text="Çıkış ve varış noktanızı paylaşın; alım, uçuş ve 3 saat içinde teslimat için operasyon planınızı birlikte oluşturalım."
      />
    </>
  );
}
