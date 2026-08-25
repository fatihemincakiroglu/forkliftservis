"use client";

/**
 * Kesintisiz kayan logo şeridi.
 * Şerit iki kez basılır; ilk kopya bitince ikincisi tam aynı
 * noktada devam ettiği için geçiş görünmez.
 * Fareyle üzerine gelince durur.
 */
export default function LogoMarquee({ logos }) {
  if (!logos?.length) return null;
  const track = [...logos, ...logos];

  return (
    <div className="marquee" aria-label="Referans firma logoları">
      <div className="marquee-track">
        {track.map((l, i) => (
          <div className="marquee-item" key={`${l.src}-${i}`}>
            {/* Uzak sunucudan gelen logolar; boyutları değişken
                olduğu için next/image yerine düz img kullanılıyor. */}
            <img
              src={l.src}
              alt={i < logos.length ? l.alt : ""}
              loading="lazy"
              decoding="async"
              aria-hidden={i >= logos.length}
            />
          </div>
        ))}
      </div>
      <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
      <div className="marquee-fade marquee-fade--right" aria-hidden="true" />
    </div>
  );
}
