import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { site } from "@/lib/site";
import { JsonLd, organizationJsonLd, websiteJsonLd } from "@/components/Seo";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Forklift Servis ve Forklift Tamir Hizmeti",
    template: `%s | ${site.titleSuffix}`,
  },
  description:
    "Uzman forklift servis ve forklift tamir hizmeti ile arızalara hızlı çözüm sunuyoruz. Periyodik bakım, acil servis ve garantili onarım desteği.",
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
    title: "Forklift Servis ve Forklift Tamir Hizmeti",
    description:
      "Uzman forklift servis ve forklift tamir hizmeti ile arızalara hızlı çözüm sunuyoruz. Periyodik bakım, acil servis ve garantili onarım desteği.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#15263C",
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
      "LPG forklift servisi",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <JsonLd data={jsonLd} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
