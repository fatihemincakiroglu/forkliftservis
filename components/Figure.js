import Image from "next/image";

/**
 * Görsel bloğu. next/image kullanır; Vercel'de otomatik olarak
 * cihaz boyutuna göre yeniden ölçekler ve tembel yükler.
 */
export default function Figure({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  className = "",
}) {
  return (
    <figure className={`figure ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 980px) 100vw, 560px"
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/** Üç görselli şerit */
export function FigureStrip({ items }) {
  return (
    <div className="figure-strip">
      {items.map((i) => (
        <figure className="figure" key={i.src}>
          <Image
            src={i.src}
            alt={i.alt}
            width={i.width}
            height={i.height}
            sizes="(max-width: 760px) 100vw, (max-width: 980px) 50vw, 33vw"
          />
          {i.caption && <figcaption>{i.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
