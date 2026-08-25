import { site } from "@/lib/site";
import ServiceForm from "@/components/ServiceForm";
import Icon from "@/components/Icons";
import PageHeader from "@/components/PageHeader";
import { JsonLd, webPageJsonLd } from "@/components/Seo";

export const metadata = {
  title: "İletişim ve Servis Talebi",
  description:
    "Forklift arızası, periyodik bakım veya yedek parça talebi için bize ulaşın. Türkiye geneli yerinde servis.",
  alternates: { canonical: "/iletisim" },
};

export default function Iletisim() {
  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/iletisim", label: "İletişim" },
        ]}
        title="İletişim ve servis talebi"
      />


      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Servis talep formu</p>
            <h2 className="h2" style={{ marginBottom: 28 }}>
              Talebinizi iletin
            </h2>
            <ServiceForm />
          </div>

          <div>
            <p className="eyebrow">Doğrudan erişim</p>
            <dl className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">
                  <Icon name="telefon" size={20} />
                </span>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
                  </dd>
                </div>
              </div>
              {site.phone2Display && (
                <div className="contact-item">
                  <span className="contact-icon">
                    <Icon name="telefon" size={20} />
                  </span>
                  <div>
                    <dt>Acil hat</dt>
                    <dd>
                      <a href={`tel:${site.phone2Href}`}>{site.phone2Display}</a>
                    </dd>
                  </div>
                </div>
              )}
              <div className="contact-item">
                <span className="contact-icon">
                  <Icon name="eposta" size={20} />
                </span>
                <div>
                  <dt>E-posta</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Icon name="konum" size={20} />
                </span>
                <div>
                  <dt>Adres</dt>
                  <dd>
                    <a
                      href={site.address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.district} /{" "}
                      {site.address.city}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Icon name="saat" size={20} />
                </span>
                <div>
                  <dt>Çalışma saatleri</dt>
                  <dd>
                    {site.hours.weekday}
                    <br />
                    <span style={{ color: "var(--yellow-dark)" }}>
                      {site.hours.emergency}
                    </span>
                  </dd>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">
                  <Icon name="arac" size={20} />
                </span>
                <div>
                  <dt>Servis alanı</dt>
                  <dd>{site.coverage}</dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <JsonLd
        data={webPageJsonLd({
          type: "ContactPage",
          name: "İletişim ve Servis Talebi",
          description:
            "Forklift arızası, periyodik bakım veya yedek parça talebi için iletişim bilgileri.",
          url: "/iletisim",
        })}
      />
    </>
  );
}
