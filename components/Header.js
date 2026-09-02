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
  const [subOpen, setSubOpen] = useState(false); // hizmetler alt menüsü
  const closeTimer = useRef(null);

  const closeAll = () => {
    setOpen(false);
    setSubOpen(false);
  };

  // Masaüstünde fare ayrılınca kısa gecikmeyle kapat,
  // kullanıcı panele giderken menü kaybolmasın.
  const enter = () => {
    clearTimeout(closeTimer.current);
    setSubOpen(true);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setSubOpen(false), 160);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAll();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

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

      <header className="site-header">
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
              width={1409}
              height={326}
              priority
              className="brand-logo"
            />
          </Link>

          <nav className={open ? "nav nav--open" : "nav"}>
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
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </span>

                  {subOpen && (
                    <div className="nav-mega">
                      <div className="nav-mega-grid">
                        {serviceGroups.map((g) => (
                          <div className="nav-mega-col" key={g}>
                            <p className="nav-mega-title">{GROUP_LABEL[g]}</p>
                            <ul>
                              {services
                                .filter((s) => s.group === g)
                                .map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      href={serviceHref(s.slug)}
                                      onClick={closeAll}
                                    >
                                      <Icon name={s.icon} size={17} />
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        ))}
                      </div>

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
                    </div>
                  )}
                </div>
              ) : (
                <Link key={l.href} href={l.href} onClick={closeAll}>
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
              aria-label="Menüyü aç veya kapat"
            >
              {open ? "Kapat" : "Menü"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
