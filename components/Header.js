"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/yedek-parca", label: "Yedek Parça" },
  { href: "/markalar", label: "Markalar" },
  { href: "/forklift-servisi", label: "Bölgeler" },
  { href: "/sss", label: "S.S.S." },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span className="topbar-note">
            <span className="topbar-dot" aria-hidden="true" />
            {site.coverage} · yerinde mobil servis
          </span>
          <span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 17.5h11M4.5 17.5V8h6.5v9.5M11 9.5h3l2.5 5H11"
                  stroke="#FFC61E"
                  strokeWidth="1.7"
                  strokeLinecap="square"
                />
                <path d="M18.5 4v10.5M18.5 4H21" stroke="#FFC61E" strokeWidth="1.7" />
                <circle cx="7" cy="19.4" r="1.9" stroke="#E7E8E4" strokeWidth="1.4" />
                <circle cx="15" cy="19.4" r="1.9" stroke="#E7E8E4" strokeWidth="1.4" />
              </svg>
            </span>
            <span>
              <span className="brand-name">{site.name}</span>
              <br />
              <span className="brand-sub">{site.domain}</span>
            </span>
          </Link>

          <nav className={open ? "nav nav--open" : "nav"}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a className="nav-cta" href={`tel:${site.phoneHref}`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 5c0-.6.4-1 1-1h3l1.5 4-2 1.5a12 12 0 0 0 6 6L15 13.5 19 15v3c0 .6-.4 1-1 1A14.5 14.5 0 0 1 4 5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
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
