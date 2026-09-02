"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import Icon, { WhatsAppIcon } from "@/components/Icons";
import LocationInput from "@/components/LocationInput";

const EMPTY = {
  hizmet: services[0].name,
  konum: "",
  ad: "",
  telefon: "",
  not: "",
};

/**
 * Kısa servis talep formu.
 * Veritabanı kullanmaz; bilgileri WhatsApp veya e-posta uygulamasına
 * aktarır, gönderimi kullanıcı onaylar.
 *
 * withNote: açıklama alanını da gösterir (iletişim sayfası için).
 */
export default function QuickForm({
  withNote = false,
  title = "Hızlı teklif alın",
  subtitle = "Bilgileri bırakın, aynı gün dönelim",
}) {
  const [form, setForm] = useState(EMPTY);
  const [error, setError] = useState("");

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setError("");
  };

  const text = () =>
    [
      `Talep: ${form.hizmet}`,
      form.konum && `Konum: ${form.konum}`,
      `Ad Soyad: ${form.ad}`,
      `Telefon: ${form.telefon}`,
      form.not && `\n${form.not}`,
    ]
      .filter(Boolean)
      .join("\n");

  const valid = () => {
    if (!form.ad.trim() || !form.telefon.trim()) {
      setError("Size dönebilmemiz için ad soyad ve telefon gerekli.");
      return false;
    }
    return true;
  };

  const sendWa = () => {
    if (!valid()) return;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const sendMail = () => {
    if (!valid()) return;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Servis talebi: ${form.hizmet}`
    )}&body=${encodeURIComponent(text())}`;
  };

  return (
    <div className="quote-card">
      <div className="quote-card-head">
        <span className="quote-card-icon">
          <Icon name="teshis" size={19} />
        </span>
        <div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
      </div>

      <div className="quote-body">
        <div className="field">
          <label htmlFor="q-hizmet">Hizmet türü</label>
          <select id="q-hizmet" value={form.hizmet} onChange={set("hizmet")}>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Forklift Yedek Parça</option>
          </select>
        </div>

        <LocationInput
          id="q-konum"
          value={form.konum}
          onChange={(v) => setForm((f) => ({ ...f, konum: v }))}
          label="Makinenin konumu"
          placeholder="İlçe veya mahalle yazın"
        />

        <div className="field-pair">
          <div className="field">
            <label htmlFor="q-ad">Ad soyad</label>
            <input
              id="q-ad"
              value={form.ad}
              onChange={set("ad")}
              placeholder="Adınız"
            />
          </div>
          <div className="field">
            <label htmlFor="q-tel">Telefon</label>
            <input
              id="q-tel"
              type="tel"
              inputMode="tel"
              value={form.telefon}
              onChange={set("telefon")}
              placeholder="05.. ... .. .."
            />
          </div>
        </div>

        {withNote && (
          <div className="field">
            <label htmlFor="q-not">Arıza açıklaması</label>
            <textarea
              id="q-not"
              rows={3}
              value={form.not}
              onChange={set("not")}
              placeholder="Belirtiler, makinenin markası ve modeli"
            />
          </div>
        )}

        {error && (
          <p className="quote-error" role="alert">
            {error}
          </p>
        )}

        <button type="button" className="quote-submit" onClick={sendWa}>
          <WhatsAppIcon size={17} />
          WhatsApp ile gönder
        </button>

        <button type="button" className="quote-alt" onClick={sendMail}>
          E-posta ile gönder
        </button>

        <p className="quote-note">
          Bilgiler sitede saklanmaz, doğrudan uygulamanıza aktarılır.
        </p>
      </div>
    </div>
  );
}
