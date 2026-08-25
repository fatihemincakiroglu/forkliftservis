import Link from "next/link";
import { site } from "@/lib/site";
import { references, referenceLogos, initial } from "@/lib/references";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, itemListJsonLd, webPageJsonLd } from "@/components/Seo";
import PageHeader from "@/components/PageHeader";
import LogoMarquee from "@/components/LogoMarquee";
import Icon from "@/components/Icons";

export const metadata = {
  title: "Referanslarımız",
  description:
    "Sanayi tesisleri, lojistik depoları, inşaat firmaları ve kurumsal işletmeler dahil olmak üzere hizmet verdiğimiz firmalar.",
  alternates: { canonical: "/referanslar" },
};

export default function ReferanslarPage() {
  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/referanslar", label: "Referanslarımız" },
        ]}
        title="Referanslarımız"
      />

      {/* ---------- Logo şeridi ---------- */}
      <section className="section section--concrete" style={{ paddingBlock: "clamp(36px,4.5vw,56px)" }}>
        <div className="shell">
          <div className="section-head" style={{ marginBottom: 28 }}>
            <p className="eyebrow">Öne çıkan referanslar</p>
            <h2 className="h2">Birlikte çalıştığımız kurumlar</h2>
          </div>
        </div>
        <LogoMarquee logos={referenceLogos} />
      </section>

      {/* ---------- Özet ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Neden bize güveniyorlar</p>
            <h2 className="h2">
              {references.length} kurumsal firma listesinde yer alıyor
            </h2>
            <p className="lede">
              Sanayi tesisleri, lojistik depoları, inşaat şirketleri, gıda
              üreticileri ve kamu kurumları dahil geniş bir müşteri profiline
              hizmet veriyoruz. Her iş yazılı teklifle başlıyor, yazılı raporla
              kapanıyor.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="stat-icon">
                <Icon name="arac" size={22} />
              </span>
              <span className="stat-value">Yerinde servis</span>
              <span className="stat-label">
                Tesisinize gelen mobil ekip, tek gelişte çözüm
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <Icon name="rapor" size={22} />
              </span>
              <span className="stat-value">Yazılı rapor</span>
              <span className="stat-label">
                Yapılan işlem, değişen parça ve sonraki bakım tarihi
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <Icon name="garanti" size={22} />
              </span>
              <span className="stat-value">Yazılı garanti</span>
              <span className="stat-label">
                İşçilik ve değişen parça servis raporunda güvence altında
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <Icon name="konum" size={22} />
              </span>
              <span className="stat-value">81 ilde hizmet</span>
              <span className="stat-label">
                Marmara hattında günlük servis rotası
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Firma listesi ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Firma listesi</p>
            <h2 className="h2">Hizmet verdiğimiz firmalar</h2>
          </div>

          <div className="ref-grid">
            {references.map((r) => (
              <div className="ref-item" key={r}>
                <span className="ref-initial" aria-hidden="true">
                  {initial(r)}
                </span>
                <span className="ref-name">{r}</span>
              </div>
            ))}
          </div>

          <p className="ref-note">
            Listede yer almayan birçok firmaya da hizmet veriyoruz. Referans
            talebiniz olursa memnuniyetle paylaşırız.
          </p>

          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              <Icon name="telefon" size={17} />
              {site.phoneDisplay}
            </a>
            <Link className="btn btn--outline" href="/iletisim">
              Teklif isteyin
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Siz de referanslarımız arasına katılın" />

      <JsonLd
        data={webPageJsonLd({
          type: "CollectionPage",
          name: "Referanslarımız",
          description:
            "Forklift servis ve bakım hizmeti verdiğimiz kurumsal firmalar.",
          url: "/referanslar",
        })}
      />
      <JsonLd
        data={itemListJsonLd({
          name: "Referans firmalar",
          items: references.map((r) => ({ name: r, href: "/referanslar" })),
        })}
      />
    </>
  );
}
