import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { services, serviceHref } from "@/lib/services";
import { cities, regionHref } from "@/lib/locations";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid footer-grid--wide">
          <div>
            <Image
              src="/logo/logo-tam-beyaz.png"
              alt={site.name}
              width={1794}
              height={578}
              className="footer-logo"
            />
            <p style={{ margin: "0 0 16px", maxWidth: "34ch" }}>
              {site.tagline}. Dizel, LPG ve akülü tüm forklift tiplerinde
              yerinde servis.
            </p>
            <p style={{ margin: "0 0 14px" }}>
              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.district} /{" "}
                {site.address.city}
              </a>
            </p>
            <p style={{ margin: 0 }}>
              <a href={`tel:${site.phoneHref}`} style={{ color: "#FFC61E" }}>
                {site.phoneDisplay}
              </a>
              {site.phone2Display && (
                <>
                  <br />
                  <a href={`tel:${site.phone2Href}`} style={{ color: "#FFC61E" }}>
                    {site.phone2Display}
                  </a>
                </>
              )}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <div>
            <p className="footer-title">Hizmetler</p>
            <ul className="footer-list">
              {services.slice(0, 8).map((s) => (
                <li key={s.slug}>
                  <Link href={serviceHref(s.slug)}>{s.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/forklift-yedek-parca">Forklift Yedek Parça</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-title">Bölgeler</p>
            <ul className="footer-list">
              {cities.slice(0, 9).map((c) => (
                <li key={c.slug}>
                  <Link href={regionHref(c.slug)}>
                    {c.name} Forklift Servisi
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/forklift-servisi">Tüm bölgeler →</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-title">Kurumsal</p>
            <ul className="footer-list">
              <li>
                <Link href="/">Anasayfa</Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link href="/referanslar">Referanslarımız</Link>
              </li>
              <li>
                <Link href="/sss">Sıkça Sorulan Sorular</Link>
              </li>
              <li>
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/iletisim">İletişim</Link>
              </li>
              <li style={{ marginTop: 10 }}>{site.hours.weekday}</li>
              <li style={{ color: "#FFC61E" }}>{site.hours.emergency}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <span>Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
