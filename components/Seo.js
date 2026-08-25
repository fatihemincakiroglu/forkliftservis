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

/* ============================================================
   EK YAPISAL VERİ ÜRETİCİLERİ
   Google'ın sayfayı doğru sınıflandırması için kullanılır.
   ============================================================ */

/** Kuruluş kimliği — her sayfada yayınlanır */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneHref,
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneHref,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish"],
    },
  };
}

/** Site kimliği */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

/** Liste sayfaları için sıralı bağlantı listesi */
export function itemListJsonLd({ name, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${site.url}${it.href}`,
    })),
  };
}

/** Hizmet kataloğu — hizmetler sayfası için */
export function offerCatalogJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phoneHref,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Forklift servis hizmetleri",
      itemListElement: items.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${site.url}/${s.slug}`,
        },
      })),
    },
  };
}

/** Genel sayfa tipi (İletişim, Hakkımızda, S.S.S. vb.) */
export function webPageJsonLd({ type = "WebPage", name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${site.url}${url}`,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${site.url}/#website` },
    publisher: { "@id": `${site.url}/#organization` },
  };
}
