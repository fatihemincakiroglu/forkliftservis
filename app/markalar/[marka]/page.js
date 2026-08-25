import Link from "next/link";
import { notFound } from "next/navigation";
import { brands, getBrand } from "@/lib/brands";
import { services } from "@/lib/services";
import { cities } from "@/lib/locations";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, JsonLd, LinkChips, serviceJsonLd } from "@/components/Seo";
import { ForkliftIllustration } from "@/components/Icons";

export function generateStaticParams() {
  return brands.map((b) => ({ marka: b.slug }));
}

export function generateMetadata({ params }) {
  const b = getBrand(params.marka);
  if (!b) return {};
  const title = `${b.name} Forklift Servisi`;
  const description = `${b.name} forklift tamiri, periyodik bakımı ve yedek parça tedariki. Türkiye genelinde yerinde servis, yazılı garanti.`;
  return {
    title: `${title} | Tamir, Bakım ve Yedek Parça`,
    description,
    alternates: { canonical: `/markalar/${b.slug}` },
    openGraph: { title, description },
  };
}

export default function BrandPage({ params }) {
  const b = getBrand(params.marka);
  if (!b) notFound();
  const others = brands.filter((x) => x.slug !== b.slug);

  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <Breadcrumbs
            trail={[
              { href: "/", label: "Anasayfa" },
              { href: "/markalar", label: "Markalar" },
              { href: `/markalar/${b.slug}`, label: b.name },
            ]}
          />
          <p className="eyebrow">Marka servisi</p>
          <h1 className="h1">
            {b.name} <em>Forklift Servisi</em>
          </h1>
          <p className="hero-lede">{b.note}</p>
          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
            <Link className="btn btn--outline" href="/iletisim">
              Parça veya servis talebi
            </Link>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <section className="section">
        <div className="shell split">
          <div className="longform prose">
            <p className="eyebrow">Kapsam</p>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              {b.name} makinelerinde ne yapıyoruz
            </h2>
            <p>
              {b.name} forkliftlerde tamir, periyodik bakım ve yedek parça
              tedariki yapıyoruz. Dizel, LPG ve akülü modellerin tamamı kapsam
              içinde; transpalet ve istif makineleri de dahil.
            </p>
            <p>
              Parça talebinde bize markanın yanı sıra model kodunu ve şasi seri
              numarasını iletin. {b.name} modellerinde de aynı model içinde
              üretim yılına göre parça farklılaşabiliyor; künye numarası bu
              karışıklığı ortadan kaldırıyor.
            </p>
            <p>
              Orijinal ve muadil parçanın ikisini de tedarik ediyor, hangisini
              önerdiğimizi gerekçesiyle söylüyoruz. Güvenlik açısından kritik
              parçalarda orijinal tercih ediyoruz.
            </p>
          </div>

          <div>
            <p className="eyebrow">{b.name} için servis kalemleri</p>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <span>
                    <Link href={`/hizmetlerimiz/${s.slug}`} style={{ textDecoration: "none" }}>
                      {s.name}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bölgeler</p>
            <h2 className="h2">{b.name} servisi verdiğimiz iller</h2>
          </div>
          <LinkChips
            items={cities.map((c) => ({
              href: `/forklift-servisi/${c.slug}`,
              label: `${c.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Diğer markalar</p>
            <h2 className="h2">Servis verdiğimiz diğer markalar</h2>
          </div>
          <LinkChips
            items={others.map((x) => ({
              href: `/markalar/${x.slug}`,
              label: `${x.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      <CtaBand title={`${b.name} forklift servisi için arayın`} />

      <JsonLd
        data={serviceJsonLd({
          name: `${b.name} Forklift Servisi`,
          description: `${b.name} forklift tamiri, periyodik bakımı ve yedek parça tedariki.`,
          url: `/markalar/${b.slug}`,
        })}
      />
    </>
  );
}
