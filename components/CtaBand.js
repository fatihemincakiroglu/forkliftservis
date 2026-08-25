import { site } from "@/lib/site";
import Icon, { WhatsAppIcon } from "@/components/Icons";

export function CtaBand({
  title = "Forklift durduysa vakit kaybetmeyin",
  note = "Arıza bildirimi · 7/24 acil hat",
}) {
  return (
    <section className="cta-band">
      <div className="shell cta-inner">
        <h2 className="h2">{title}</h2>
        <div>
          <a className="cta-phone" href={`tel:${site.phoneHref}`}>
            <Icon name="telefon" size={30} strokeWidth="2" />
            {site.phoneDisplay}
          </a>
          <p className="cta-note">{note}</p>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppButton() {
  const text = encodeURIComponent(
    "Merhaba, forklift arızası için servis talep etmek istiyorum."
  );
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${site.whatsapp}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon size={18} />
      WhatsApp
    </a>
  );
}
