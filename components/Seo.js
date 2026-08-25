import Link from "next/link";
import { site } from "@/lib/site";

/* --------- Yapısal veri (JSON-LD) --------- */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* --------- Breadcrumb + BreadcrumbList schema --------- */
export function Breadcrumbs({ trail }) {
  // trail: [{ href, label }] — son eleman aktif sayfadır
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.label,
      item: `${site.url}${t.href}`,
    })),
  };

  return (
    <>
      <nav className="crumbs" aria-label="Sayfa yolu">
        {trail.map((t, i) => (
          <span key={t.href}>
            {i > 0 && <span className="crumbs-sep">/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page">{t.label}</span>
            ) : (
              <Link href={t.href}>{t.label}</Link>
            )}
          </span>
        ))}
      </nav>
      <JsonLd data={data} />
    </>
  );
}

/* --------- SSS listesi + FAQPage schema --------- */
export function FaqList({ items, withSchema = true }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <div className="faq">
        {items.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      {withSchema && <JsonLd data={data} />}
    </>
  );
}

/* --------- Etiket bulutu şeklinde iç bağlantı listesi --------- */
export function LinkChips({ items }) {
  return (
    <div className="chips">
      {items.map((i) => (
        <Link key={i.href} href={i.href}>
          {i.label}
        </Link>
      ))}
    </div>
  );
}

/* --------- Servis alanı yapısal verisi --------- */
export function serviceJsonLd({ name, description, areaName, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${site.url}${url}`,
    provider: {
      "@type": "AutoRepair",
      name: site.name,
      telephone: site.phoneHref,
      url: site.url,
    },
    areaServed: areaName
      ? { "@type": "Place", name: areaName }
      : { "@type": "Country", name: "Türkiye" },
  };
}
