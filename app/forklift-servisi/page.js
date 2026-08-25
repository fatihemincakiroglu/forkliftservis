import Link from "next/link";
import { cities, otherCities, titleize } from "@/lib/locations";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, LinkChips } from "@/components/Seo";

export const metadata = {
  title: "Forklift Servisi | Türkiye Geneli Yerinde Tamir ve Bakım",
  description:
    "81 ilde forklift servisi. İstanbul, Kocaeli, Bursa, Ankara, İzmir ve Marmara genelinde yerinde forklift tamiri, periyodik bakım ve yedek parça.",
  alternates: { canonical: "/forklift-servisi" },
};

export default function BolgelerPage() {
  const grouped = cities.reduce((acc, c) => {
    (acc[c.region] ||= []).push(c);
    return acc;
  }, {});

  return (
    <>
      <section className="hero">
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

      {Object.entries(grouped).map(([region, list], i) => (
        <section
          key={region}
          className={i % 2 === 0 ? "section" : "section section--concrete"}
        >
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">{region} Bölgesi</p>
              <h2 className="h2">{region}’da forklift servisi</h2>
            </div>
            <div className="grid grid--3">
              {list.map((c) => (
                <article className="card" key={c.slug}>
                  <span className="card-code">{c.region}</span>
                  <h3 className="h3">{c.name} Forklift Servisi</h3>
                  <p>{c.sectors}</p>
                  {c.districts?.length > 0 && (
                    <p style={{ fontSize: "0.88rem" }}>
                      {c.districts.length} ilçede servis:{" "}
                      {c.districts.slice(0, 4).map(titleize).join(", ")}…
                    </p>
                  )}
                  <Link
                    className="card-link"
                    href={`/forklift-servisi/${c.slug}`}
                  >
                    {c.name} sayfasına git →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

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
    </>
  );
}
