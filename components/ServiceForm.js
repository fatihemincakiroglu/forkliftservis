"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const empty = {
  ad: "",
  firma: "",
  telefon: "",
  eposta: "",
  konu: "Arıza / tamir",
  marka: "",
  model: "",
  mesaj: "",
};

export default function ServiceForm() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setError("");
  };

  const buildText = () =>
    [
      `Konu: ${form.konu}`,
      `Ad Soyad: ${form.ad}`,
      form.firma && `Firma: ${form.firma}`,
      `Telefon: ${form.telefon}`,
      form.eposta && `E-posta: ${form.eposta}`,
      form.marka && `Makine markası: ${form.marka}`,
      form.model && `Model / seri no: ${form.model}`,
      "",
      form.mesaj,
    ]
      .filter(Boolean)
      .join("\n");

  const validate = () => {
    if (!form.ad.trim() || !form.telefon.trim() || !form.mesaj.trim()) {
      setError(
        "Ad soyad, telefon ve açıklama alanlarını doldurun; bu üçü olmadan size dönemiyoruz."
      );
      return false;
    }
    return true;
  };

  const sendMail = () => {
    if (!validate()) return;
    const subject = encodeURIComponent(
      `${form.konu} | ${form.firma || form.ad}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(
      buildText()
    )}`;
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildText())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="form">
      <div className="field-pair">
        <div className="field">
          <label htmlFor="ad">Ad soyad *</label>
          <input id="ad" value={form.ad} onChange={update("ad")} />
        </div>
        <div className="field">
          <label htmlFor="firma">Firma</label>
          <input id="firma" value={form.firma} onChange={update("firma")} />
        </div>
      </div>

      <div className="field-pair">
        <div className="field">
          <label htmlFor="telefon">Telefon *</label>
          <input
            id="telefon"
            type="tel"
            inputMode="tel"
            value={form.telefon}
            onChange={update("telefon")}
          />
        </div>
        <div className="field">
          <label htmlFor="eposta">E-posta</label>
          <input
            id="eposta"
            type="email"
            value={form.eposta}
            onChange={update("eposta")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="konu">Talep konusu</label>
        <select id="konu" value={form.konu} onChange={update("konu")}>
          <option>Arıza / tamir</option>
          <option>Periyodik bakım</option>
          <option>Yıllık bakım sözleşmesi</option>
          <option>Yedek parça</option>
          <option>Diğer</option>
        </select>
      </div>

      <div className="field-pair">
        <div className="field">
          <label htmlFor="marka">Makine markası</label>
          <input
            id="marka"
            placeholder="Örn. Toyota"
            value={form.marka}
            onChange={update("marka")}
          />
        </div>
        <div className="field">
          <label htmlFor="model">Model / seri no</label>
          <input
            id="model"
            placeholder="Künye tablasından"
            value={form.model}
            onChange={update("model")}
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="mesaj">Arıza veya talep açıklaması *</label>
        <textarea
          id="mesaj"
          value={form.mesaj}
          onChange={update("mesaj")}
          placeholder="Belirtiler, ne zaman başladı, makinenin bulunduğu il ve ilçe."
        />
      </div>

      {error && (
        <p
          role="alert"
          style={{
            margin: 0,
            padding: "12px 14px",
            background: "#fff4d6",
            borderLeft: "3px solid var(--signal-deep)",
            fontSize: "0.92rem",
          }}
        >
          {error}
        </p>
      )}

      <div className="btn-row" style={{ marginTop: 4 }}>
        <button type="button" className="btn btn--signal" onClick={sendMail}>
          E-posta ile gönder
        </button>
        <button type="button" className="btn btn--outline" onClick={sendWhatsApp}>
          WhatsApp ile gönder
        </button>
      </div>

      <p className="form-note">
        Form, bilgileri e-posta veya WhatsApp uygulamanıza aktarır; gönderimi siz
        onaylarsınız. Hiçbir veri sitede saklanmaz.
      </p>
    </div>
  );
}
