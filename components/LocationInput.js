"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { cities } from "@/lib/locations";

/* ============================================================
   Türkçe uyumlu arama normalizasyonu.
   "basaksehir" yazınca "Başakşehir" bulunsun diye
   Türkçe harfler ASCII karşılıklarına indirgenir.
   ============================================================ */
const MAP = {
  İ: "i", I: "i", ı: "i", Ğ: "g", ğ: "g", Ü: "u", ü: "u",
  Ş: "s", ş: "s", Ö: "o", ö: "o", Ç: "c", ç: "c",
};

function norm(s) {
  return (s || "")
    .split("")
    .map((c) => MAP[c] || c)
    .join("")
    .toLowerCase()
    .trim();
}

/* Düzenli servis rotamızın bulunduğu iller arama sonuçlarında öne alınır */
const ONCELIKLI = new Set(cities.map((c) => c.slug));

/* Veri yalnızca bir kez indirilir, sonraki kullanımlarda bellekten okunur */
let ilceCache = null;
const mahalleCache = {};

async function loadIlceler() {
  if (ilceCache) return ilceCache;
  const res = await fetch("/data/ilceler.json");
  ilceCache = await res.json();
  return ilceCache;
}

async function loadMahalle(ilSlug) {
  if (mahalleCache[ilSlug]) return mahalleCache[ilSlug];
  const res = await fetch(`/data/mahalle/${ilSlug}.json`);
  mahalleCache[ilSlug] = await res.json();
  return mahalleCache[ilSlug];
}

export default function LocationInput({
  value,
  onChange,
  label = "Konum, ilçe",
  placeholder = "İlçe veya mahalle yazın",
  id,
}) {
  const autoId = useId();
  const inputId = id || `loc-${autoId}`;

  const [ilceler, setIlceler] = useState(null);
  const [mahalleler, setMahalleler] = useState([]); // [{n, d, p}]
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(-1);
  const [loading, setLoading] = useState(false);

  const boxRef = useRef(null);
  const listRef = useRef(null);

  /* Alana ilk odaklanıldığında ilçe indeksini indir (yaklaşık 6 KB sıkıştırılmış) */
  const ensureIlceler = async () => {
    if (ilceler) return;
    setLoading(true);
    try {
      setIlceler(await loadIlceler());
    } catch {
      setIlceler([]);
    } finally {
      setLoading(false);
    }
  };

  /* Dışarı tıklanınca listeyi kapat */
  useEffect(() => {
    const onDoc = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const q = norm(value);

  /* ---------- Sonuçları hesapla ---------- */
  const results = useMemo(() => {
    if (q.length < 2) return [];

    const out = [];

    // 1) İlçeler
    if (ilceler) {
      const scored = [];
      for (const r of ilceler) {
        const nd = norm(r.d);
        const np = norm(r.p);

        // Düşük puan = üstte. İlçe adıyla başlayan eşleşmeler en değerlisi.
        let score;
        if (nd === q) score = 0;
        else if (nd.startsWith(q)) score = 1;
        else if (np.startsWith(q)) score = 3;
        else if (nd.includes(q)) score = 4;
        else continue;

        // Servis rotamızdaki iller öne alınır
        if (ONCELIKLI.has(r.s)) score -= 0.5;

        scored.push({ r, score });
      }

      scored.sort(
        (a, b) => a.score - b.score || a.r.d.localeCompare(b.r.d, "tr")
      );

      for (const { r } of scored.slice(0, 6)) {
        out.push({
          type: "ilce",
          label: `${r.d}, ${r.p}`,
          sub: "İlçe",
          ilSlug: r.s,
          ilce: r.d,
        });
      }
    }

    // 2) Yüklenmiş il dosyalarındaki mahalleler
    for (const m of mahalleler) {
      if (out.length >= 12) break;
      if (norm(m.n).startsWith(q) || norm(m.n).includes(q)) {
        out.push({
          type: "mahalle",
          label: `${m.n}, ${m.d}, ${m.p}`,
          sub: "Mahalle",
        });
      }
    }

    return out.slice(0, 12);
  }, [q, ilceler, mahalleler]);

  /* ---------- Bir ilçe seçilince o ilin mahallelerini yükle ---------- */
  const pickIlce = async (item) => {
    onChange(item.label);
    setOpen(true);
    setCursor(-1);
    setLoading(true);
    try {
      const data = await loadMahalle(item.ilSlug);
      const ilAdi = item.label.split(", ").pop();
      const list = (data[item.ilce] || []).map((n) => ({
        n,
        d: item.ilce,
        p: ilAdi,
      }));
      setMahalleler(list);
    } catch {
      setMahalleler([]);
    } finally {
      setLoading(false);
    }
  };

  const pick = (item) => {
    if (item.type === "ilce") {
      pickIlce(item);
    } else {
      onChange(item.label);
      setOpen(false);
      setCursor(-1);
    }
  };

  const onKeyDown = (e) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c <= 0 ? results.length - 1 : c - 1));
    } else if (e.key === "Enter" && cursor >= 0) {
      e.preventDefault();
      pick(results[cursor]);
    } else if (e.key === "Escape") {
      setOpen(false);
      setCursor(-1);
    }
  };

  /* Seçili öğeyi görünür tut */
  useEffect(() => {
    if (cursor < 0 || !listRef.current) return;
    const el = listRef.current.children[cursor];
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  const showList = open && (results.length > 0 || (loading && q.length >= 2));

  return (
    <div className="field loc-field" ref={boxRef}>
      <label htmlFor={inputId}>{label}</label>

      <div className="loc-wrap">
        <input
          id={inputId}
          type="text"
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          role="combobox"
          aria-expanded={showList}
          aria-autocomplete="list"
          aria-controls={`${inputId}-list`}
          onFocus={() => {
            ensureIlceler();
            setOpen(true);
          }}
          onChange={(e) => {
            onChange(e.target.value);
            setOpen(true);
            setCursor(-1);
          }}
          onKeyDown={onKeyDown}
        />
        {loading && <span className="loc-spinner" aria-hidden="true" />}
      </div>

      {showList && (
        <ul className="loc-list" id={`${inputId}-list`} role="listbox" ref={listRef}>
          {results.map((r, i) => (
            <li
              key={r.label + i}
              role="option"
              aria-selected={i === cursor}
              className={`loc-item${i === cursor ? " is-active" : ""}`}
              onMouseEnter={() => setCursor(i)}
              onMouseDown={(e) => {
                e.preventDefault();
                pick(r);
              }}
            >
              <span className={`loc-badge loc-badge--${r.type}`}>{r.sub}</span>
              <span className="loc-label">{r.label}</span>
            </li>
          ))}

          {results.length === 0 && loading && (
            <li className="loc-empty">Aranıyor</li>
          )}
        </ul>
      )}

      {q.length > 0 && q.length < 2 && open && (
        <p className="loc-hint">En az iki harf yazın</p>
      )}
    </div>
  );
}
