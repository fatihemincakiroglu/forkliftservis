import Link from "next/link";
import Image from "next/image";
import { serviceHref } from "@/lib/services";
import Icon from "@/components/Icons";

/**
 * İlgili hizmet kartları.
 * Hizmetin lib/services.js içinde "image" alanı varsa görsel,
 * yoksa ikon paneli gösterilir. Görsel eklemek için ilgili
 * hizmete image: { src, width, height, alt } yazmanız yeterli.
 */
export default function RelatedServices({ items }) {
  return (
    <div className="rel-grid">
      {items.map((s) => (
        <Link key={s.slug} href={serviceHref(s.slug)} className="rel-card">
          <span className="rel-media">
            {s.image ? (
              <Image
                src={s.image.src}
                alt={s.image.alt || s.name}
                width={s.image.width}
                height={s.image.height}
                sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 380px"
              />
            ) : (
              <span className="rel-media-fallback" aria-hidden="true">
                <Icon name={s.icon} size={40} />
              </span>
            )}
            <span className="rel-tag">{s.group}</span>
          </span>

          <span className="rel-body">
            <strong className="rel-title">{s.name}</strong>
            <span className="rel-lede">{s.lede}</span>
            <span className="rel-more">
              İncele
              <Icon name="ok" size={15} />
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
