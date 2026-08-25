"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import Icon, { WhatsAppIcon } from "@/components/Icons";

const WA_TEXT = encodeURIComponent(
  "Merhaba, forklift servisi hakkında bilgi almak istiyorum."
);

export default function FloatingContact() {
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Mesaj bulutu sayfa açıldıktan kısa süre sonra belirir
  useEffect(() => {
    const t = setTimeout(() => setBubbleOpen(true), 2200);
    return () => clearTimeout(t);
  }, []);

  const waHref = `https://wa.me/${site.whatsapp}?text=${WA_TEXT}`;
  const telHref = `tel:${site.phoneHref}`;

  return (
    <>
      {/* ---------- MASAÜSTÜ: sağ alt köşe ---------- */}
      <div className="float-contact">
        {bubbleOpen && !dismissed && (
          <div className="float-bubble" role="status">
            <button
              type="button"
              className="float-bubble-close"
              onClick={() => setDismissed(true)}
              aria-label="Mesajı kapat"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <strong>Size yardımcı olalım</strong>
            <p>
              Forklift servis hizmetimiz için yardımcı olmak isteriz. Arıza,
              periyodik bakım veya yedek parça — yazın ya da arayın.
            </p>
            <a
              className="float-bubble-cta"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={16} />
              WhatsApp’tan yazın
            </a>
          </div>
        )}

        <div className="float-actions">
          <a
            className="float-btn float-btn--tel"
            href={telHref}
            aria-label={`Telefonla ara: ${site.phoneDisplay}`}
          >
            <Icon name="telefon" size={22} />
            <span className="float-tip">{site.phoneDisplay}</span>
          </a>

          <a
            className="float-btn float-btn--wa"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ile yazın"
            onClick={() => setDismissed(true)}
          >
            <WhatsAppIcon size={26} />
            <span className="float-tip">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ---------- MOBİL: ekranın altında yüzen çubuk ---------- */}
      <div className="mobile-bar">
        <div className="mobile-bar-inner">
          <a className="mobile-bar-btn mobile-bar-btn--tel" href={telHref}>
            <span className="mobile-bar-icon">
              <Icon name="telefon" size={17} />
            </span>
            <span className="mobile-bar-text">
              <span className="mobile-bar-label">Hemen Ara</span>
              <span className="mobile-bar-sub">{site.phoneDisplay}</span>
            </span>
          </a>

          <a
            className="mobile-bar-btn mobile-bar-btn--wa"
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mobile-bar-icon">
              <WhatsAppIcon size={17} />
            </span>
            <span className="mobile-bar-text">
              <span className="mobile-bar-label">WhatsApp</span>
              <span className="mobile-bar-sub">Mesaj gönderin</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
