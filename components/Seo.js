import Link from "next/link";
import { site } from "@/lib/site";

/* Derleme anının tarihi. Her yayında güncellenir,
   dateModified alanı bu değeri kullanır. */
const BUILD_DATE = new Date().toISOString().slice(0, 10);

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
    inLanguage: "tr-TR",
    author: { "@id": `${site.url}/#author` },
    publisher: { "@id": `${site.url}/#organization` },
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
      "@id": `${site.url}/#organization`,
      name: site.name,
      telephone: site.phoneHref,
      url: site.url,
      logo: `${site.url}/logo/logo-tam.png`,
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

/** Yazar kimliği. Diğer şemalar bu düğüme @id ile bağlanır. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/#author`,
    name: site.author.name,
    url: site.author.url,
    jobTitle: site.author.jobTitle,
    sameAs: [site.author.url],
  };
}

/** Kuruluş kimliği. Her sayfada yayınlanır */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo/logo-tam.png`,
      width: 1561,
      height: 434,
    },
    image: `${site.url}/logo/logo-tam.png`,
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
    author: { "@id": `${site.url}/#author` },
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
    author: { "@id": `${site.url}/#author` },
    publisher: { "@id": `${site.url}/#organization` },
    datePublished: site.contentPublished,
    dateModified: BUILD_DATE,
  };
}

/**
 * Uzun içerikli sayfalar için makale şeması.
 * Google'ın "Author / Publisher eksik" uyarısını karşılar.
 */
export function articleJsonLd({
  headline,
  description,
  url,
  image,
  section,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${site.url}${url}#article`,
    headline,
    description,
    url: `${site.url}${url}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}${url}` },
    inLanguage: "tr-TR",
    articleSection: section,
    image: image ? `${site.url}${image}` : `${site.url}/logo/logo-tam.png`,
    author: {
      "@type": "Person",
      "@id": `${site.url}/#author`,
      name: site.author.name,
      url: site.author.url,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/logo/logo-tam.png`,
        width: 1561,
        height: 434,
      },
    },
    datePublished: site.contentPublished,
    dateModified: BUILD_DATE,
    isPartOf: { "@id": `${site.url}/#website` },
  };
}
