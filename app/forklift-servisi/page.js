import Link from "next/link";
import { cities, otherCities, regionHref } from "@/lib/locations";
import ServiceNetwork from "@/components/ServiceNetwork";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import {
  Breadcrumbs,
  JsonLd,
  LinkChips,
  itemListJsonLd,
  webPageJsonLd,
} from "@/components/Seo";
import Icon, { ForkliftIllustration } from "@/components/Icons";

export const metadata = {
  title: "Forklift Servisi | Türkiye Geneli Yerinde Tamir ve Bakım",
  description:
    "81 ilde forklift servisi. İstanbul, Kocaeli, Bursa, Ankara, İzmir ve Marmara genelinde yerinde forklift tamiri, periyodik bakım ve yedek parça.",
  alternates: { canonical: "/forklift-servisi" },
};

export default function BolgelerPage() {
  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <Breadcrumbs
            trail={[
              { href: "/", label: "Anasayfa" },
              { href: "/forklift-servisi", label: "Bölgeler" },
            ]}
          />
          <p className="eyebrow">Servis ağı</p>
          <h1 className="h1">
            Türkiye geneli <em>forklift servisi</em>
          </h1>
          <p className="hero-lede">
            81 ilde hizmet veriyoruz. Aşağıdaki illerde düzenli servis rotamız
            bulunuyor; bölge sayfasında o ile özgü sanayi yoğunluğu, öne çıkan
            bakım kalemleri ve ilçe listesi yer alıyor.
          </p>
          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

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
