import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity, getDistrict, titleize } from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, JsonLd, LinkChips, serviceJsonLd } from "@/components/Seo";

export function generateStaticParams() {
  const params = [];
  for (const c of cities) {
    for (const d of c.districts || []) {
      params.push({ sehir: c.slug, ilce: d });
    }
  }
  return params;
}

export function generateMetadata({ params }) {
  const c = getCity(params.sehir);
  const d = getDistrict(params.sehir, params.ilce);
  if (!c || !d) return {};
  const title = `${d.name} Forklift Servisi`;
  const description = `${d.name} bölgesinde yerinde forklift tamiri, periyodik bakım ve yedek parça. Dizel, LPG ve akülü forkliftler için aynı gün servis planlaması.`;
  return {
    title: `${title} | ${c.name} Forklift Tamiri`,
    description,
    alternates: { canonical: `/forklift-servisi/${c.slug}/${d.slug}` },
    openGraph: { title, description },
  };
}

export default function DistrictPage({ params }) {
  const c = getCity(params.sehir);
  const d = getDistrict(params.sehir, params.ilce);
  if (!c || !d) notFound();

  const siblings = (c.districts || []).filter((x) => x !== d.slug);

  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <Breadcrumbs
              trail={[
                { href: "/", label: "Anasayfa" },
                { href: "/forklift-servisi", label: "Bölgeler" },
                { href: `/forklift-servisi/${c.slug}`, label: c.name },
                {
                  href: `/forklift-servisi/${c.slug}/${d.slug}`,
                  label: d.name,
                },
              ]}
            />
            <p className="eyebrow">
              {c.name}
              {d.side ? ` · ${d.side} Yakası` : ""}
            </p>
            <h1 className="h1">
              {d.name} <em>Forklift Servisi</em>
            </h1>
            <p className="hero-lede">
              {d.name} ve çevresinde yerinde forklift tamiri, periyodik bakım ve
              yedek parça. Arıza bildiriminden sonra aynı gün planlama yapıyor,
              işlerin büyük bölümünü makine tesisinizden çıkmadan kapatıyoruz.
            </p>
            <div className="btn-row">
              <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                {site.phoneDisplay}
              </a>
              <Link className="btn btn--outline" href="/iletisim">
                Arıza bildir
              </Link>
            </div>
          </div>

          <div className="plate">
            <div className="plate-head">
              <span>{d.name} servis künyesi</span>
              <span className="plate-rivets" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">İl</span>
              <span className="plate-val">
                <Link
                  href={`/forklift-servisi/${c.slug}`}
                  style={{ color: "var(--concrete)" }}
                >
                  {c.name}
                </Link>
              </span>
            </div>
            {d.side && (
              <div className="plate-row">
                <span className="plate-key">Yaka</span>
                <span className="plate-val">{d.side} Yakası</span>
              </div>
            )}
            {d.zone && (
              <div className="plate-row">
                <span className="plate-key">Sanayi</span>
                <span className="plate-val">{d.zone}</span>
              </div>
            )}
            <div className="plate-row">
              <span className="plate-key">Kapsam</span>
              <span className="plate-val">
                Tamir · Periyodik bakım · Yedek parça
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Acil hat</span>
              <span className="plate-val">
                <a
                  href={`tel:${site.phoneHref}`}
                  style={{
                    color: "#FFC61E",
                    textDecoration: "none",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {site.phoneDisplay}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <section className="section">
        <div className="shell split">
          <div className="longform prose">
            <p className="eyebrow">Bölge notu</p>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              {d.name}’da forklift servisi
            </h2>
            {d.zone && (
              <p>
                {d.name} bölgesinde ağırlıklı olarak {d.zone.toLocaleLowerCase("tr-TR")}{" "}
                çevresinde çalışıyoruz. Servis aracımız bu hatta düzenli olarak
                bulunduğu için müdahale süresi kısa.
              </p>
            )}
            <p>{c.note}</p>
            <p>
              Arıza bildirirken makinenin markası, modeli ve künye tablasındaki
              seri numarasını iletmeniz süreci hızlandırır. Bu bilgilerle ekip
              yola çıkmadan önce olası parçayı belirleyip araca yükleyebiliyoruz.
            </p>
          </div>

          <div>
            <p className="eyebrow">{d.name} için servis kalemleri</p>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <span>
                    <Link
                      href={`/hizmetlerimiz/${s.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      {s.name}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="section section--dark">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">Yakın bölgeler</p>
              <h2 className="h2">{c.name}’un diğer ilçeleri</h2>
            </div>
            <LinkChips
              items={siblings.map((x) => ({
                href: `/forklift-servisi/${c.slug}/${x}`,
                label: titleize(x),
              }))}
            />
          </div>
        </section>
      )}

      <CtaBand title={`${d.name} forklift servisi için arayın`} />

      <JsonLd
        data={serviceJsonLd({
          name: `${d.name} Forklift Servisi`,
          description: `${d.name} bölgesinde yerinde forklift tamiri, periyodik bakım ve yedek parça.`,
          areaName: `${d.name}, ${c.name}`,
          url: `/forklift-servisi/${c.slug}/${d.slug}`,
        })}
      />
    </>
  );
}
