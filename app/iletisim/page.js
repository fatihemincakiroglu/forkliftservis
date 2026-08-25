import { site } from "@/lib/site";
import ServiceForm from "@/components/ServiceForm";
import Icon, { ForkliftIllustration } from "@/components/Icons";

export const metadata = {
  title: "İletişim ve Servis Talebi",
  description:
    "Forklift arızası, periyodik bakım veya yedek parça talebi için bize ulaşın. Türkiye geneli yerinde servis.",
  alternates: { canonical: "/iletisim" },
};

export default function Iletisim() {
  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <p className="eyebrow">İletişim</p>
          <h1 className="h1">
            Arızayı anlatın, <em>gerisini biz yazalım</em>
          </h1>
          <p className="hero-lede">
            En hızlı yol telefon. Yazmayı tercih ederseniz aşağıdaki formu
            doldurun; bilgiler doğrudan e-posta veya WhatsApp uygulamanıza
            aktarılır.
          </p>
          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
            {site.phone2Display && (
              <a className="btn btn--outline" href={`tel:${site.phone2Href}`}>
                {site.phone2Display}
              </a>
            )}
            <a className="btn btn--outline" href={`mailto:${site.email}`}>
              E-posta gönder
            </a>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

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
    </>
  );
}
