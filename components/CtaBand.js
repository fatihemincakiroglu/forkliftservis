import { site } from "@/lib/site";

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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.6-4.9c-.4-.7-.9-1.6-.9-2.5 0-.9.5-1.4.7-1.6.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.6 0 1.1Z" />
      </svg>
      WhatsApp
    </a>
  );
}
