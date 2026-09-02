"use client";

import { useEffect, useState } from "react";

/**
 * Uzun içerikli hizmet sayfaları için yan gezinme.
 * Sayfa kaydırıldıkça hangi bölümde olunduğunu vurgular
 * ve üstte ince bir okuma ilerleme çubuğu gösterir.
 */
export default function ArticleNav({ sections }) {
  const [active, setActive] = useState(sections[0]?.id);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Okuma ilerlemesi
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      // Aktif bölüm: üst kenara en yakın, henüz geçilmemiş başlık
      const line = window.scrollY + 160;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= line) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const activeLabel =
    sections.find((s) => s.id === active)?.label || sections[0]?.label;

  return (
    <>
      <div
        className="read-progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />

      <nav className={`toc${open ? " is-open" : ""}`} aria-label="Sayfa içeriği">
        <button
          type="button"
          className="toc-mobile-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span className="toc-mobile-label">
            <span>Bu sayfada</span>
            <strong>{activeLabel}</strong>
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <p className="toc-title">Bu sayfada</p>
        <ol className="toc-list">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={s.id === active ? "is-active" : ""}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
