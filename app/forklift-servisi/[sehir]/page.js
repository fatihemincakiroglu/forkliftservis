import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity, titleize } from "@/lib/locations";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, JsonLd, LinkChips, serviceJsonLd } from "@/components/Seo";

export function generateStaticParams() {
  return cities.map((c) => ({ sehir: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCity(params.sehir);
  if (!c) return {};
  const title = `${c.name} Forklift Servisi`;
  const description = `${c.name} ve ilçelerinde yerinde forklift tamiri, periyodik bakım ve yedek parça. Dizel, LPG ve akülü forkliftler. Aynı gün planlama, yazılı garanti.`;
  return {
    title: `${title} | Yerinde Tamir ve Bakım`,
    description,
    alternates: { canonical: `/forklift-servisi/${c.slug}` },
    openGraph: { title, description },
  };
}

export default function CityPage({ params }) {
  const c = getCity(params.sehir);
  if (!c) notFound();

  const districts = c.districts || [];
  const otherCities = cities.filter((x) => x.slug !== c.slug);

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
              ]}
            />
            <p className="eyebrow">{c.region} Bölgesi</p>
            <h1 className="h1">
              {c.name} <em>Forklift Servisi</em>
            </h1>
            <p className="hero-lede">
              {c.name} genelinde yerinde forklift tamiri, periyodik bakım ve
              yedek parça tedariki. Servis aracımız gerekli takım ve parçayla
              tesisinize gelir; işlerin büyük bölümü makine yerinden
              kaldırılmadan çözülür.
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
              <span>{c.name} servis künyesi</span>
              <span className="plate-rivets" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Bölge</span>
              <span className="plate-val">{c.region}</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Sektörler</span>
              <span className="plate-val">{c.sectors}</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Kapsam</span>
              <span className="plate-val">
                Tamir · Periyodik bakım · Yedek parça
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Makine</span>
              <span className="plate-val">
                Dizel, LPG, akülü forklift · transpalet · istif makinesi
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Müdahale</span>
              <span className="plate-val">Aynı gün planlama</span>
            </div>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      {/* İle özgü içerik */}
      <section className="section">
        <div className="shell split">
          <div className="longform prose">
            <p className="eyebrow">Sahadan not</p>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              {c.name}’da nelere dikkat ediyoruz
            </h2>
            <p>{c.note}</p>
            <p>
              Bölgedeki yoğun sektörler {c.sectors.toLocaleLowerCase("tr-TR")}{" "}
              olduğu için servis aracımızda bu kullanım biçimlerine uygun sarf
              malzeme ve hızlı hareket eden parçaları hazır bulunduruyoruz. Bu,
              tek gelişte kapanan iş oranını belirgin biçimde yükseltiyor.
            </p>
            <p>
              Makinenizin markası, modeli ve künye tablasındaki seri numarasını
              telefonda ilettiğinizde, ekip yola çıkmadan önce olası parçayı
              belirleyip araca yüklüyoruz.
            </p>
          </div>

          <div>
            <p className="eyebrow">Bu ilde verdiğimiz hizmetler</p>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <span>
                    <Link
                      href={`/hizmetlerimiz/${s.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      {s.name} — {c.name}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* İlçeler */}
      {districts.length > 0 && (
        <section className="section section--dark">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">İlçeler</p>
              <h2 className="h2">{c.name} ilçelerinde forklift servisi</h2>
              <p className="lede">
                Aşağıdaki ilçelerde düzenli servis rotamız bulunuyor. İlçe
                sayfasında o bölgeye özgü sanayi yoğunluğu ve iletişim bilgileri
                yer alıyor.
              </p>
            </div>
            <ul className="linkcols">
              {districts.map((d) => (
                <li key={d}>
                  <Link href={`/forklift-servisi/${c.slug}/${d}`}>
                    {titleize(d)} forklift servisi
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Markalar */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Markalar</p>
            <h2 className="h2">{c.name}’da servis verdiğimiz markalar</h2>
            <p className="lede">
              Marka ayrımı yapmıyoruz. Listede olmayan modeller için de arayın;
              parça temini mümkünse net bir süre veririz.
            </p>
          </div>
          <LinkChips
            items={brands.map((b) => ({
              href: `/markalar/${b.slug}`,
              label: `${b.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      {/* Diğer iller */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Diğer bölgeler</p>
            <h2 className="h2">Türkiye geneli servis ağı</h2>
          </div>
          <LinkChips
            items={otherCities.map((x) => ({
              href: `/forklift-servisi/${x.slug}`,
              label: `${x.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      <CtaBand title={`${c.name} forklift servisi için arayın`} />

      <JsonLd
        data={serviceJsonLd({
          name: `${c.name} Forklift Servisi`,
          description: `${c.name} ve ilçelerinde yerinde forklift tamiri, periyodik bakım ve yedek parça.`,
          areaName: c.name,
          url: `/forklift-servisi/${c.slug}`,
        })}
      />
    </>
  );
}
