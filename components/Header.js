"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import Icon from "@/components/Icons";

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
            <a href={`mailto:${site.email}`}>
              <Icon name="eposta" size={14} />
              {site.email}
            </a>
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              <Icon name="forklift" size={26} />
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
