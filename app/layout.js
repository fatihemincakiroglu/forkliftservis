import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Forklift Servisi | Türkiye Geneli Forklift Tamiri ve Bakımı",
    template: `%s — ${site.name}`,
  },
  description:
    "Türkiye genelinde forklift tamiri, periyodik bakım ve orijinal yedek parça. Dizel, LPG ve akülü forkliftler için yerinde mobil servis.",
  keywords: [
    "forklift servis",
    "forklift servisi",
    "forklift tamiri",
    "forklift bakım",
    "forklift yedek parça",
    "forklift tamircisi",
    "akülü forklift servisi",
    "dizel forklift servisi",
    "transpalet servisi",
    "istif makinesi bakımı",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.url,
    siteName: site.name,
    title: "Forklift Servisi | Türkiye Geneli Forklift Tamiri ve Bakımı",
    description:
      "Türkiye genelinde yerinde forklift tamiri, periyodik bakım ve yedek parça tedariki.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#16181C",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    email: site.email,
    telephone: site.phoneHref,
    description: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.district,
      addressRegion: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "Country", name: "Türkiye" },
    knowsAbout: [
      "Forklift tamiri",
      "Forklift periyodik bakımı",
      "Forklift yedek parça",
      "Akülü forklift servisi",
      "Dizel forklift servisi",
      "LPG'li forklift servisi",
      "Transpalet servisi",
      "İstif makinesi servisi",
    ],
    openingHours: "Mo-Sa 08:30-18:30",
    priceRange: "$$",
  };

  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;700;800&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
