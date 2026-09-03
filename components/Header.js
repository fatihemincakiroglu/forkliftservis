"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { services, serviceGroups, serviceHref } from "@/lib/services";
import Icon from "@/components/Icons";

const GROUP_LABEL = {
  Onarım: "Arıza ve onarım",
  "Makine tipi": "Makine tipine göre",
  Bakım: "Önleyici bakım",
};

const links = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz", hasMenu: true },
  { href: "/forklift-yedek-parca", label: "Yedek Parça" },
  { href: "/forklift-servisi", label: "Bölgeler" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobil menü
  const [subOpen, setSubOpen] = useState(false); // masaüstü hizmet paneli
  const [mobileSub, setMobileSub] = useState(false); // mobil hizmet listesi
  const [navTop, setNavTop] = useState(0);
  const closeTimer = useRef(null);
  const headerRef = useRef(null);

  const closeAll = () => {
    setOpen(false);
    setSubOpen(false);
    setMobileSub(false);
  };

  /* Masaüstü: fare ayrılınca kısa gecikmeyle kapat */
  const enter = () => {
    clearTimeout(closeTimer.current);
    setSubOpen(true);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setSubOpen(false), 160);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  /**
   * Mobil menü açıkken panelin başlayacağı yükseklik ölçülür ve
   * arka plandaki sayfa kaydırması kilitlenir. Panel başlığın
   * DIŞINDA render edilir; başlıktaki backdrop-filter, içindeki
   * position:fixed öğeler için kapsayıcı blok oluşturduğu için
   * panel başlığın içinde kalsaydı kaydırılamazdı.
   */
  useEffect(() => {
    if (!open) {
      document.body.classList.remove("nav-locked");
      return;
    }

    const measure = () => {
      const rect = headerRef.current?.getBoundingClientRect();
      setNavTop(rect ? Math.max(0, Math.round(rect.bottom)) : 0);
    };

    measure();
    document.body.classList.add("nav-locked");
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);

    return () => {
      document.body.classList.remove("nav-locked");
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [open]);

  /* Escape ile kapat */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Masaüstüne geçilirse mobil menüyü kapat */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1081px)");
    const onChange = (e) => e.matches && closeAll();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const serviceList = (
    <div className="nav-mega-grid">
      {serviceGroups.map((g) => (
        <div className="nav-mega-col" key={g}>
          <p className="nav-mega-title">{GROUP_LABEL[g]}</p>
          <ul>
            {services
              .filter((s) => s.group === g)
              .map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s.slug)} onClick={closeAll}>
                    <Icon name={s.icon} size={17} />
                    {s.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const serviceFoot = (
    <div className="nav-mega-foot">
      <Link href="/hizmetlerimiz" onClick={closeAll}>
        Tüm hizmetler
        <Icon name="ok" size={15} />
      </Link>
      <Link href="/forklift-yedek-parca" onClick={closeAll}>
        Forklift yedek parça
        <Icon name="ok" size={15} />
      </Link>
    </div>
  );

  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span className="topbar-note">
            <span className="topbar-dot" aria-hidden="true" />
            {site.coverage}, yerinde mobil servis
          </span>
          <span className="topbar-mail">
            <a href={`mailto:${site.email}`}>
              <Icon name="eposta" size={14} />
              {site.email}
            </a>
          </span>
        </div>
      </div>

      <header className="site-header" ref={headerRef}>
        <div className="shell header-inner">
          <Link
            href="/"
            className="brand"
            onClick={closeAll}
            aria-label={`${site.name} anasayfa`}
          >
            <Image
              src="/logo/logo.png"
              alt={site.name}
              width={1794}
              height={578}
              priority
              className="brand-logo"
            />
          </Link>

          {/* Masaüstü menüsü */}
          <nav className="nav" aria-label="Ana menü">
            {links.map((l) =>
              l.hasMenu ? (
                <div
                  key={l.href}
                  className={`nav-item${subOpen ? " is-open" : ""}`}
                  onMouseEnter={enter}
                  onMouseLeave={leave}
                >
                  <span className="nav-item-row">
                    <Link href={l.href} onClick={closeAll}>
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      className="nav-sub-toggle"
                      aria-expanded={subOpen}
                      aria-label="Hizmet listesini aç veya kapat"
                      onClick={() => setSubOpen((v) => !v)}
                    >
                      <Chevron />
                    </button>
                  </span>

                  {subOpen && (
                    <div className="nav-mega">
                      {serviceList}
                      {serviceFoot}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              )
            )}
          </nav>

          <div className="header-actions">
            <a className="nav-cta" href={`tel:${site.phoneHref}`}>
              <Icon name="telefon" size={16} />
              {site.phoneDisplay}
            </a>
            <button
              className="nav-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobil-menu"
              aria-label="Menüyü aç veya kapat"
            >
              {open ? "Kapat" : "Menü"}
            </button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------
          MOBİL MENÜ
          Başlığın dışında, doğrudan sayfa köküne yakın render edilir.
          Böylece kapsayıcı blok viewport olur ve panel kendi içinde
          sorunsuz kaydırılır.
         ------------------------------------------------------------ */}
      {open && (
        <div
          className="mobile-nav"
          id="mobil-menu"
          style={{ top: navTop }}
          role="dialog"
          aria-modal="true"
          aria-label="Menü"
        >
          <div className="mobile-nav-scroll">
            <ul className="mobile-nav-list">
              {links.map((l) =>
                l.hasMenu ? (
                  <li key={l.href} className="mobile-nav-item">
                    <div className="mobile-nav-row">
                      <Link href={l.href} onClick={closeAll}>
                        {l.label}
                      </Link>
                      <button
                        type="button"
                        className={`mobile-nav-toggle${
                          mobileSub ? " is-open" : ""
                        }`}
                        aria-expanded={mobileSub}
                        aria-label="Hizmet listesini aç veya kapat"
                        onClick={() => setMobileSub((v) => !v)}
                      >
                        <Chevron />
                      </button>
                    </div>

                    {mobileSub && (
                      <div className="mobile-nav-sub">
                        {serviceList}
                        {serviceFoot}
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={l.href} className="mobile-nav-item">
                    <div className="mobile-nav-row">
                      <Link href={l.href} onClick={closeAll}>
                        {l.label}
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>

            <a className="mobile-nav-call" href={`tel:${site.phoneHref}`}>
              <Icon name="telefon" size={18} />
              <span>
                <small>Arıza bildirimi ve 7/24 acil hat</small>
                <strong>{site.phoneDisplay}</strong>
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
