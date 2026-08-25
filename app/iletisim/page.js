import { site } from "@/lib/site";
import ServiceForm from "@/components/ServiceForm";

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
            <a className="btn btn--outline" href={`tel:${site.phone2Href}`}>
              {site.phone2Display}
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
                <dt>Telefon</dt>
                <dd>
                  <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
                </dd>
              </div>
              <div className="contact-item">
                <dt>Acil hat</dt>
                <dd>
                  <a href={`tel:${site.phone2Href}`}>{site.phone2Display}</a>
                </dd>
              </div>
              <div className="contact-item">
                <dt>E-posta</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div className="contact-item">
                <dt>Adres</dt>
                <dd>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.district} /{" "}
                  {site.address.city}
                </dd>
              </div>
              <div className="contact-item">
                <dt>Çalışma saatleri</dt>
                <dd>
                  {site.hours.weekday}
                  <br />
                  <span style={{ color: "var(--signal-deep)" }}>
                    {site.hours.emergency}
                  </span>
                </dd>
              </div>
              <div className="contact-item">
                <dt>Servis alanı</dt>
                <dd>{site.coverage}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
