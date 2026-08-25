import Link from "next/link";
import { cities, otherCities, regionHref } from "@/lib/locations";
import ServiceNetwork from "@/components/ServiceNetwork";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import {
  JsonLd,
  LinkChips,
  itemListJsonLd,
  webPageJsonLd,
} from "@/components/Seo";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Forklift Servisi | Türkiye Geneli Yerinde Tamir ve Bakım",
  description:
    "81 ilde forklift servisi. İstanbul, Kocaeli, Bursa, Ankara, İzmir ve Marmara genelinde yerinde forklift tamiri, periyodik bakım ve yedek parça.",
  alternates: { canonical: "/forklift-servisi" },
};

export default function BolgelerPage() {
  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/forklift-servisi", label: "Bölgeler" },
        ]}
        title="Türkiye geneli forklift servisi"
      />


      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bölgeler</p>
            <h2 className="h2">Düzenli servis rotamızın bulunduğu iller</h2>
          </div>
          <ServiceNetwork />
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Diğer iller</p>
            <h2 className="h2">Servis verdiğimiz diğer bölgeler</h2>
            <p className="lede">
              Aşağıdaki illerde de servis veriyoruz. Ekip yönlendirmesi mesafeye
              göre planlanır ve yol bedeli teklifte ayrıca gösterilir.
            </p>
          </div>
          <LinkChips
            items={[...new Set(otherCities)].sort((a, b) =>
              a.localeCompare(b, "tr")
            ).map((c) => ({ href: "/iletisim", label: c }))}
          />
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={webPageJsonLd({
          type: "CollectionPage",
          name: "Türkiye geneli forklift servisi",
          description:
            "81 ilde forklift servisi. Düzenli servis rotamızın bulunduğu iller ve ilçeler.",
          url: "/forklift-servisi",
        })}
      />
      <JsonLd
        data={itemListJsonLd({
          name: "Forklift servisi verilen iller",
          items: cities.map((c) => ({
            name: `${c.name} Forklift Servisi`,
            href: regionHref(c.slug),
          })),
        })}
      />
    </>
  );
}
