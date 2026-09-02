import Link from "next/link";
import { cities, otherCities, regionHref, titleize } from "@/lib/locations";
import { services, serviceHref } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import {
  JsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icons";

export const metadata = {
  title: "Forklift Servisi Verdiğimiz Bölgeler",
  description:
    "81 ilde forklift servisi. İstanbul, Kocaeli, Bursa, Ankara ve İzmir hattında günlük servis rotası; ilçe bazında yerinde forklift tamiri ve periyodik bakım.",
  alternates: { canonical: "/forklift-servisi" },
};

const REGION_ORDER = [
  "Marmara",
  "Ege",
  "İç Anadolu",
  "Akdeniz",
  "Güneydoğu Anadolu",
];

export default function BolgelerPage() {
  const istanbul = cities.find((c) => c.slug === "istanbul");
  const districtTotal = cities.reduce(
    (n, c) => n + (c.districts?.length || 0),
    0
  );

  const grouped = REGION_ORDER.map((r) => ({
    region: r,
    list: cities.filter((c) => c.region === r),
  })).filter((g) => g.list.length);

  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/forklift-servisi", label: "Bölgeler" },
        ]}
        title="Forklift servisi verdiğimiz bölgeler"
      />

      {/* ---------- Kapsam şeridi ---------- */}
      <section className="coverage">
        <div className="shell coverage-grid">
          <div className="coverage-intro">
            <p className="eyebrow">Servis ağı</p>
            <h2 className="h2">Makinenin bulunduğu yere geliyoruz</h2>
            <p className="lede">
              Servis aracımız gerekli takım ve olası parçayla birlikte yola
              çıkar. Marmara hattında günlük rotamız bulunuyor; diğer illerde
              ekip yönlendirmesi mesafeye göre planlanır ve yol bedeli teklifte
              ayrıca gösterilir.
            </p>
            <div className="btn-row">
              <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                <Icon name="telefon" size={17} />
                {site.phoneDisplay}
              </a>
              <Link className="btn btn--outline" href="/iletisim">
                Bölgenizi sorun
              </Link>
            </div>
          </div>

          <ul className="coverage-stats">
            <li>
              <span className="coverage-num">81</span>
              <span className="coverage-label">ilde hizmet</span>
            </li>
            <li>
              <span className="coverage-num">{cities.length}</span>
              <span className="coverage-label">ilde günlük rota</span>
            </li>
            <li>
              <span className="coverage-num">{districtTotal}</span>
              <span className="coverage-label">ilçe sayfası</span>
            </li>
            <li>
              <span className="coverage-num">Aynı gün</span>
              <span className="coverage-label">planlama</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- Öne çıkan: İstanbul ---------- */}
      {istanbul && (
        <section className="section">
          <div className="shell">
            <div className="feature-region">
              <div className="feature-region-head">
                <div>
                  <p className="eyebrow">En yoğun bölgemiz</p>
                  <h2 className="h2">İstanbul forklift servisi</h2>
                  <p className="lede">{istanbul.note}</p>
                </div>
                <Link
                  className="btn btn--signal"
                  href={regionHref(istanbul.slug)}
                >
                  İstanbul sayfası
                  <Icon name="ok" size={16} />
                </Link>
              </div>

              <div className="feature-region-districts">
                <p className="feature-region-label">
                  <Icon name="konum" size={16} />
                  {istanbul.districts.length} ilçede servis
                </p>
                <div className="district-chips">
                  {istanbul.districts.map((d) => (
                    <Link key={d} href={regionHref(d)}>
                      {titleize(d)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---------- Bölgeler ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bölgelere göre</p>
            <h2 className="h2">Günlük servis rotamızın bulunduğu iller</h2>
            <p className="lede">
              Her il sayfasında o bölgeye özgü sanayi yoğunluğu, öne çıkan bakım
              kalemleri ve ilçe listesi yer alıyor.
            </p>
          </div>

          <div className="region-blocks">
            {grouped.map((g) => (
              <div className="region-block" key={g.region}>
                <div className="region-block-head">
                  <h3>{g.region}</h3>
                  <span>{g.list.length} il</span>
                </div>
                <div className="region-block-list">
                  {g.list.map((c) => (
                    <Link key={c.slug} href={regionHref(c.slug)}>
                      <span className="region-block-name">
                        {c.name}
                        {c.districts?.length > 0 && (
                          <em>{c.districts.length} ilçe</em>
                        )}
                      </span>
                      <span className="region-block-sectors">{c.sectors}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Nasıl çalışıyor ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bölge dışı çağrılar</p>
            <h2 className="h2">Rotamızın dışındaysanız nasıl ilerliyoruz</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span className="step-num">01</span>
              <span className="step-icon">
                <Icon name="telefon" size={22} />
              </span>
              <h3>Konum ve makine bilgisi</h3>
              <p>
                İl, ilçe, makinenin markası ve künye numarasını alıyoruz. Bu
                bilgiler parça hazırlığını belirliyor.
              </p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <span className="step-icon">
                <Icon name="teshis" size={22} />
              </span>
              <h3>Telefonda ön teşhis</h3>
              <p>
                Belirtileri dinleyip olası arızayı daraltıyoruz. Yerinde
                çözülebilecek bir iş mi, atölye gerekiyor mu netleşiyor.
              </p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <span className="step-icon">
                <Icon name="saat" size={22} />
              </span>
              <h3>Süre ve yol bedeli</h3>
              <p>
                Ekip yönlendirme tarihini ve yol bedelini yazılı bildiriyoruz.
                Onayınız olmadan yola çıkılmıyor.
              </p>
            </div>
            <div className="step">
              <span className="step-num">04</span>
              <span className="step-icon">
                <Icon name="rapor" size={22} />
              </span>
              <h3>Yerinde müdahale</h3>
              <p>
                İşlem sonunda değişen parçalar ve bir sonraki bakım tarihi
                raporla teslim ediliyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Diğer iller ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Türkiye geneli</p>
            <h2 className="h2">Ekip yönlendirdiğimiz diğer iller</h2>
          </div>
          <div className="areas-rest-list">
            {otherCities.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className="region-services">
            <p className="region-services-title">
              Her bölgede verdiğimiz servis kalemleri
            </p>
            <div className="region-services-grid">
              {services.map((x) => (
                <Link key={x.slug} href={serviceHref(x.slug)}>
                  <Icon name={x.icon} size={18} />
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Bölgenizde servis var mı, telefonla öğrenin" />

      <JsonLd
        data={webPageJsonLd({
          type: "CollectionPage",
          name: "Forklift servisi verdiğimiz bölgeler",
          description:
            "81 ilde forklift servisi. Günlük servis rotamızın bulunduğu iller ve ilçeler.",
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
