// ============================================================
//  İKON SETİ
//  Tümü 24×24, çizgi tabanlı, currentColor kullanır.
//  Boyut: <Icon name="motor" size={28} />
// ============================================================

const paths = {
  // --- Teknik / servis ---
  hidrolik: (
    <>
      <path d="M12 3.5 7.5 9a6 6 0 1 0 9 0L12 3.5Z" />
      <path d="M12 17.5a3 3 0 0 1-3-3" />
    </>
  ),
  sanziman: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3" />
    </>
  ),
  motor: (
    <>
      <path d="M4 10h2V7h5l2 3h3v-2h2v2h2v6h-2v2h-2v-2h-4l-2 3H6v-3H4v-6Z" />
      <path d="M8 7V4.5M11 7V4.5" />
    </>
  ),
  elektrik: <path d="M13.5 2.5 5 13.5h5.5l-1 8L18 10.5h-5.5l1-8Z" />,
  mast: (
    <>
      <path d="M6 21V4M10 21V4M6 4h4" />
      <path d="M6 8h4M6 13h4M6 18h4" />
      <path d="M14 21v-5h6" />
    </>
  ),
  fren: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" />
    </>
  ),
  aku: (
    <>
      <rect x="2.5" y="7" width="16" height="10" rx="1.5" />
      <path d="M18.5 10.5h3v3h-3" />
      <path d="M6.5 12h3M8 10.5v3M13 12h2.5" />
    </>
  ),
  dizel: (
    <>
      <path d="M4 20V5a1.5 1.5 0 0 1 1.5-1.5h6A1.5 1.5 0 0 1 13 5v15" />
      <path d="M2.5 20h12M4 11h9" />
      <path d="M16 9.5v7a2 2 0 0 0 4 0V8l-3-3.5" />
    </>
  ),
  lpg: (
    <>
      <path d="M7 21V9a5 5 0 0 1 10 0v12H7Z" />
      <path d="M10 9V6.5a2 2 0 0 1 4 0V9" />
      <path d="M7 15h10" />
    </>
  ),
  transpalet: (
    <>
      <path d="M2.5 8h11v6h-11z" />
      <path d="M16 6v10M16 11h5" />
      <circle cx="6" cy="18" r="1.8" />
      <circle cx="13" cy="18" r="1.8" />
    </>
  ),
  istifleyici: (
    <>
      <path d="M4 21V6M8 21V6M4 6h4" />
      <path d="M4 10.5h4M4 15h4" />
      <rect x="11" y="7" width="8" height="6" rx="0.6" />
      <path d="M11 21h9" />
    </>
  ),
  bakim: (
    <>
      <path d="M14.5 6.2a4 4 0 0 0 5.3 5.3l-8 8a2.6 2.6 0 0 1-3.7-3.7l8-8Z" />
      <path d="M6.5 3.5 4 6l2.5 2.5L9 6 6.5 3.5Z" />
    </>
  ),
  forklift: (
    <>
      <path d="M3 17.5V8.5h7v9" />
      <path d="M10 10h3.5l2.5 5H10" />
      <path d="M18.5 4v11M18.5 4H21M18.5 15h3.5" />
      <circle cx="6.5" cy="19.5" r="2" />
      <circle cx="14.5" cy="19.5" r="2" />
    </>
  ),
  parca: (
    <>
      <path d="M3 8.5 12 4l9 4.5v7L12 20l-9-4.5v-7Z" />
      <path d="M3 8.5 12 13l9-4.5M12 13v7" />
    </>
  ),
  filtre: (
    <>
      <path d="M3.5 4.5h17l-6.5 8v7l-4 2v-9l-6.5-8Z" />
    </>
  ),
  lastik: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v5.5M12 15.5V21M3 12h5.5M15.5 12H21" />
    </>
  ),

  // --- Arayüz / süreç ---
  telefon: (
    <path d="M4 5c0-.6.4-1 1-1h3l1.5 4-2 1.5a12 12 0 0 0 6 6L15 13.5 19 15v3c0 .6-.4 1-1 1A14.5 14.5 0 0 1 4 5Z" />
  ),
  whatsapp: null, // ayrı bileşen, dolu ikon
  teshis: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.2 15.2 21 21" />
      <path d="M10.5 7.5v6M7.5 10.5h6" />
    </>
  ),
  arac: (
    <>
      <path d="M2.5 16.5V7h11v9.5" />
      <path d="M13.5 10h4l3 3.5v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.8" />
      <circle cx="16.5" cy="17.5" r="1.8" />
    </>
  ),
  rapor: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  garanti: (
    <>
      <path d="M12 3 4.5 6v6c0 4.4 3.1 8.2 7.5 9 4.4-.8 7.5-4.6 7.5-9V6L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  konum: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  saat: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.4l3.4 2" />
    </>
  ),
  kontrol: (
    <>
      <path d="M4 6h3.5M4 12h3.5M4 18h3.5" />
      <path d="M11 6h9M11 12h9M11 18h9" />
    </>
  ),
  ok: <path d="M4 12h15M13 6l6 6-6 6" />,
  eposta: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
};

export default function Icon({ name, size = 24, className = "", ...rest }) {
  const d = paths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {d}
    </svg>
  );
}

/* Dolu (solid) WhatsApp ikonu — marka formu gerektirir */
export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a12 12 0 0 1-5.6-4.9c-.4-.7-.9-1.6-.9-2.5 0-.9.5-1.4.7-1.6.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.1.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.6 0 1.1Z" />
    </svg>
  );
}

/* Arka plan görseli: forklift siluet çizimi (hero bölümünde filigran) */
export function ForkliftIllustration({ className = "" }) {
  return (
    <svg
      viewBox="0 0 420 300"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Direk (mast) */}
        <path d="M262 40v190M286 40v190M262 40h24" />
        <path d="M262 75h24M262 110h24M262 145h24M262 180h24" />
        {/* Çatal */}
        <path d="M286 205h70M356 205v-14" />
        <path d="M286 190h70" />
        {/* Kabin ve gövde */}
        <path d="M70 230v-70h120v70" />
        <path d="M190 175h50l22 55h-72" />
        <path d="M96 160V96h74v64" />
        <path d="M96 96h74" />
        {/* Koruma kafesi dikmeleri */}
        <path d="M110 160V104M156 160v-56" />
        {/* Tekerlekler */}
        <circle cx="110" cy="242" r="26" />
        <circle cx="110" cy="242" r="10" />
        <circle cx="222" cy="242" r="26" />
        <circle cx="222" cy="242" r="10" />
        {/* Palet */}
        <path d="M296 230h80M296 230v-18h80v18M312 212v18M344 212v18" />
        {/* Zemin */}
        <path d="M20 268h380" strokeDasharray="6 10" />
      </g>
    </svg>
  );
}
