import Link from "next/link";
import { site } from "@/lib/site";
import Icon, { WhatsAppIcon, ForkliftIllustration } from "@/components/Icons";

/**
 * Sayfa sonu çağrı bloğu.
 * Tam genişlik renk bandı yerine, iki sütuna oturan kart yapısı.
 */
export function CtaBand({
  title = "Makineniz durduysa vakit kaybetmeyin",
  note = "Arıza bildiriminden sonra aynı gün planlama yapıyoruz. Servis aracımız takım ve olası parçayla birlikte tesisinize gelir.",
}) {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Merhaba, forklift servisi için bilgi almak istiyorum."
  )}`;

  return (
    <section className="cta">
      <div className="shell">
        <div className="cta-card">
          <ForkliftIllustration className="cta-art" />

          <div className="cta-main">
            <p className="cta-eyebrow">
              <span className="cta-pulse" aria-hidden="true" />
              Arıza bildirimi ve 7/24 acil hat
            </p>
            <h2 className="cta-title">{title}</h2>
            <p className="cta-text">{note}</p>

            <ul className="cta-points">
              <li>
                <Icon name="saat" size={17} />
                Aynı gün planlama
              </li>
              <li>
                <Icon name="arac" size={17} />
                Yerinde müdahale
              </li>
              <li>
                <Icon name="garanti" size={17} />
                Yazılı garanti
              </li>
            </ul>
          </div>

          <div className="cta-actions">
            <a className="cta-phone" href={`tel:${site.phoneHref}`}>
              <span className="cta-phone-icon">
                <Icon name="telefon" size={22} />
              </span>
              <span>
                <small>Hemen arayın</small>
                <strong>{site.phoneDisplay}</strong>
              </span>
            </a>

            <div className="cta-secondary">
              <a
                className="cta-wa"
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={17} />
                WhatsApp
              </a>
              <Link className="cta-form" href="/iletisim">
                Teklif formu
                <Icon name="ok" size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
