import Link from "next/link";
import { notFound } from "next/navigation";
import {
  cities,
  getCity,
  getDistrict,
  getRegionPage,
  regionPages,
  regionHref,
  titleize,
} from "@/lib/locations";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, JsonLd, LinkChips, serviceJsonLd } from "@/components/Seo";
import { ForkliftIllustration } from "@/components/Icons";

// Yalnızca aşağıdaki adresler üretilir; başka bir şey 404 döner.
export const dynamicParams = false;

export function generateStaticParams() {
  return regionPages.map((r) => ({ bolge: r.slug }));
}

export function generateMetadata({ params }) {
  const r = getRegionPage(params.bolge);
  if (!r) return {};

  const title = `${r.name} Forklift Servisi`;
  const description =
    r.type === "city"
      ? `${r.name} ve ilçelerinde forklift servis ve forklift tamir hizmeti. Periyodik bakım, acil servis ve garantili onarım. Dizel, LPG ve akülü forkliftler.`
      : `${r.name} bölgesinde forklift servis ve forklift tamir hizmeti. Yerinde arıza müdahalesi, periyodik bakım ve garantili onarım desteği.`;

  return {
    title: { absolute: `${title} | Forklift Tamiri ve Bakımı` },
    description,
    alternates: { canonical: regionHref(r.type === "city" ? r.citySlug : r.districtSlug) },
    openGraph: { title, description },
  };
}

export default function RegionPage({ params }) {
  const r = getRegionPage(params.bolge);
  if (!r) notFound();

  const city = getCity(r.citySlug);
  const district =
    r.type === "district" ? getDistrict(r.citySlug, r.districtSlug) : null;

  const isCity = r.type === "city";
  const otherCities = cities.filter((c) => c.slug !== r.citySlug);
  const siblings = (city.districts || []).filter((d) => d !== r.districtSlug);

  const trail = [
    { href: "/", label: "Anasayfa" },
    { href: "/forklift-servisi", label: "Bölgeler" },
  ];
  if (!isCity) trail.push({ href: regionHref(city.slug), label: city.name });
  trail.push({
    href: regionHref(isCity ? city.slug : r.districtSlug),
    label: r.name,
  });

  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell hero-grid">
          <div>
            <Breadcrumbs trail={trail} />
            <p className="eyebrow">
              {isCity
                ? `${city.region} Bölgesi`
                : `${city.name}${district?.side ? ` · ${district.side} Yakası` : ""}`}
            </p>
            <h1 className="h1">
              {r.name} <em>Forklift Servisi</em>
            </h1>
            <p className="hero-lede">
              {r.name} {isCity ? "genelinde" : "ve çevresinde"} yerinde forklift
              tamiri, periyodik bakım ve yedek parça. Servis aracımız gerekli
              takım ve parçayla tesisinize gelir; işlerin büyük bölümü makine
              yerinden kaldırılmadan çözülür.
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
              <span>{r.name} servis künyesi</span>
              <span className="plate-rivets" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>

            {isCity ? (
              <>
                <div className="plate-row">
                  <span className="plate-key">Bölge</span>
                  <span className="plate-val">{city.region}</span>
                </div>
                <div className="plate-row">
                  <span className="plate-key">Sektörler</span>
                  <span className="plate-val">{city.sectors}</span>
                </div>
              </>
            ) : (
              <>
                <div className="plate-row">
                  <span className="plate-key">İl</span>
                  <span className="plate-val">
                    <Link
                      href={regionHref(city.slug)}
                      style={{ color: "#dde6ef" }}
                    >
                      {city.name}
                    </Link>
                  </span>
                </div>
                {district?.side && (
                  <div className="plate-row">
                    <span className="plate-key">Yaka</span>
                    <span className="plate-val">{district.side} Yakası</span>
                  </div>
                )}
                {district?.zone && (
                  <div className="plate-row">
                    <span className="plate-key">Sanayi</span>
                    <span className="plate-val">{district.zone}</span>
                  </div>
                )}
              </>
            )}

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
              <span className="plate-key">Acil hat</span>
              <span className="plate-val">
                <a
                  href={`tel:${site.phoneHref}`}
                  style={{ color: "#f5b301", textDecoration: "none", fontWeight: 600 }}
                >
                  {site.phoneDisplay}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      {/* Bölgeye özgü içerik */}
      <section className="section">
        <div className="shell split">
          <div className="longform prose">
            <p className="eyebrow">{isCity ? "Sahadan not" : "Bölge notu"}</p>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              {r.name}’da forklift servisi
            </h2>

            {!isCity && district?.zone && (
              <p>
                {r.name} bölgesinde ağırlıklı olarak{" "}
                {district.zone.toLocaleLowerCase("tr-TR")} çevresinde
                çalışıyoruz. Servis aracımız bu hatta düzenli olarak bulunduğu
                için müdahale süresi kısa.
              </p>
            )}

            <p>{city.note}</p>

            {isCity && (
              <p>
                Bölgedeki yoğun sektörler{" "}
                {city.sectors.toLocaleLowerCase("tr-TR")} olduğu için servis
                aracımızda bu kullanım biçimlerine uygun sarf malzeme ve hızlı
                hareket eden parçaları hazır bulunduruyoruz. Bu, tek gelişte
                kapanan iş oranını belirgin biçimde yükseltiyor.
              </p>
            )}

            <p>
              Arıza bildirirken makinenin markası, modeli ve künye tablasındaki
              seri numarasını iletmeniz süreci hızlandırır. Bu bilgilerle ekip
              yola çıkmadan önce olası parçayı belirleyip araca yükleyebiliyoruz.
            </p>
          </div>

          <div>
            <p className="eyebrow">{r.name} için servis kalemleri</p>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <span>
                    <Link href={`/hizmetlerimiz/${s.slug}`}>{s.name}</Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* İl sayfasında ilçe listesi */}
      {isCity && (city.districts || []).length > 0 && (
        <section className="section section--dark">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">İlçeler</p>
              <h2 className="h2">{city.name} ilçelerinde forklift servisi</h2>
              <p className="lede">
                Aşağıdaki ilçelerde düzenli servis rotamız bulunuyor. İlçe
                sayfasında o bölgeye özgü sanayi yoğunluğu yer alıyor.
              </p>
            </div>
            <ul className="linkcols">
              {city.districts.map((d) => (
                <li key={d}>
                  <Link href={regionHref(d)}>{titleize(d)} forklift servisi</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* İlçe sayfasında komşu ilçeler */}
      {!isCity && siblings.length > 0 && (
        <section className="section section--dark">
          <div className="shell">
            <div className="section-head">
              <p className="eyebrow">Yakın bölgeler</p>
              <h2 className="h2">{city.name}’un diğer ilçeleri</h2>
            </div>
            <LinkChips
              items={siblings.map((d) => ({
                href: regionHref(d),
                label: titleize(d),
              }))}
            />
          </div>
        </section>
      )}

      {/* Diğer iller */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Diğer bölgeler</p>
            <h2 className="h2">Türkiye geneli servis ağı</h2>
          </div>
          <LinkChips
            items={otherCities.map((c) => ({
              href: regionHref(c.slug),
              label: `${c.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      <CtaBand title={`${r.name} forklift servisi için arayın`} />

      <JsonLd
        data={serviceJsonLd({
          name: `${r.name} Forklift Servisi`,
          description: `${r.name} bölgesinde forklift servis ve forklift tamir hizmeti, periyodik bakım ve yedek parça.`,
          areaName: isCity ? city.name : `${r.name}, ${city.name}`,
          url: regionHref(isCity ? city.slug : r.districtSlug),
        })}
      />
    </>
  );
}
