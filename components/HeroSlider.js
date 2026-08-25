"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import Icon, { WhatsAppIcon } from "@/components/Icons";
import LocationInput from "@/components/LocationInput";

const AUTO_MS = 7000;

export default function HeroSlider() {
  const slides = site.heroSlides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const go = useCallback(
    (i) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;

    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_MS);
    return () => clearInterval(timer.current);
  }, [paused, slides.length]);

  const active = slides[index];

  return (
    <section
      className="hero hero--slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* --- Arka plan katmanları --- */}
      <div className="hero-bg" aria-hidden="true">
        {slides.map((s, i) => (
          <div
            key={s.image + i}
            className={`hero-bg-layer${i === index ? " is-active" : ""}`}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
        <div className="hero-scrim" />
      </div>

      <div className="shell hero-slider-grid">
        {/* ---------- SOL: metin ---------- */}
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow" key={`e-${index}`}>
            {active.eyebrow}
          </p>

          <h1 className="h1">
            Forklift Servis ve <em>Forklift Tamir</em> Hizmeti
          </h1>

          <p className="hero-lede" key={`l-${index}`}>
            {active.lede}
          </p>

          <ul className="hero-features">
            {site.heroFeatures.map((f) => (
              <li key={f}>
                <span className="hero-feature-tick" aria-hidden="true">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m5 12.5 4.5 4.5L19 7" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="hero-trust">
            <span className="hero-trust-icon">
              <Icon name="konum" size={20} />
            </span>
            <span>
              <strong>81 ilde yerinde servis</strong>
              İstanbul, Kocaeli, Bursa ve İzmir hattında günlük servis rotası
            </span>
          </div>

          <div className="btn-row hero-buttons">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              <Icon name="telefon" size={17} />
              {site.phoneDisplay}
            </a>
            <Link className="btn btn--outline" href="/hizmetlerimiz">
              Hizmetlerimiz
            </Link>
          </div>

          {slides.length > 1 && (
            <div className="hero-dots" role="tablist" aria-label="Slayt seçimi">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`${i + 1}. slayt: ${s.eyebrow}`}
                  className={`hero-dot${i === index ? " is-active" : ""}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ---------- SAĞ: hızlı teklif formu ---------- */}
        <QuickForm />
      </div>
    </section>
  );
}

/* ============================================================
   Hızlı teklif formu
   Veritabanı kullanmaz; bilgileri WhatsApp veya e-posta
   uygulamasına aktarır, gönderimi kullanıcı onaylar.
   ============================================================ */

const empty = { hizmet: services[0].name, konum: "", marka: "", ad: "", telefon: "" };

function QuickForm() {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setError("");
  };

  const text = () =>
    [
      `Talep: ${form.hizmet}`,
      form.konum && `Konum: ${form.konum}`,
      form.marka && `Makine: ${form.marka}`,
      `Ad Soyad: ${form.ad}`,
      `Telefon: ${form.telefon}`,
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
      `Teklif talebi: ${form.hizmet}`
    )}&body=${encodeURIComponent(text())}`;
  };

  return (
    <div className="quote-card">
      <div className="quote-card-head">
        <span className="quote-card-icon">
          <Icon name="teshis" size={19} />
        </span>
        <div>
          <strong>Hızlı teklif alın</strong>
          <span>Bilgileri bırakın, aynı gün dönelim</span>
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
          label="Konum, ilçe veya mahalle"
          placeholder="Örn. Başakşehir"
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
              placeholder="05.. .. .."
            />
          </div>
        </div>

        {error && (
          <p className="quote-error" role="alert">
            {error}
          </p>
        )}

        <button type="button" className="quote-submit" onClick={sendWa}>
          <WhatsAppIcon size={17} />
          WhatsApp ile teklif iste
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
