import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { cities } from "@/lib/locations";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, JsonLd, LinkChips, serviceJsonLd } from "@/components/Seo";
import Icon, { ForkliftIllustration } from "@/components/Icons";

export function generateStaticParams() {
  return services.map((s) => ({ hizmet: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.hizmet);
  if (!s) return {};
  return {
    title: `${s.title} | Türkiye Geneli Yerinde Servis`,
    description: s.description,
    alternates: { canonical: `/hizmetlerimiz/${s.slug}` },
    openGraph: { title: s.title, description: s.description },
  };
}

export default function ServicePage({ params }) {
  const s = getService(params.hizmet);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 8);

  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <Breadcrumbs
            trail={[
              { href: "/", label: "Anasayfa" },
              { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
              { href: `/hizmetlerimiz/${s.slug}`, label: s.name },
            ]}
          />
          <p className="eyebrow">{s.group}</p>
          <span className="card-icon" style={{ background: "rgba(245,179,1,.14)", color: "#f5b301", marginBottom: 18 }}>
            <Icon name={s.icon} size={28} />
          </span>
          <h1 className="h1">{s.title}</h1>
          <p className="hero-lede">{s.lede}</p>
          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
            <Link className="btn btn--outline" href="/iletisim">
              Arıza bildir
            </Link>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <section className="section">
        <div className="shell split">
          <div className="longform prose">
            <p className="eyebrow">Bu iş hakkında</p>
            <h2 className="h2" style={{ marginBottom: 24 }}>
              Neye bakıyoruz
            </h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div>
            <p className="eyebrow">İşlem kapsamı</p>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {s.scope.map((x) => (
                <li key={x}>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell split">
          <div>
            <p className="eyebrow">Ne zaman aramalı</p>
            <h2 className="h2">Bu belirtiler varsa bekletmeyin</h2>
            <p className="lede">
              Aşağıdaki belirtilerden biri görüldüğünde makineyi çalıştırmaya
              devam etmek, onarım maliyetini genellikle katlar.
            </p>
            <div className="btn-row">
              <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                Hemen ara
              </a>
            </div>
          </div>
          <ul className="signs">
            {s.signs.map((x) => (
              <li key={x}>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Nerede hizmet veriyoruz</p>
            <h2 className="h2">{s.name} — bölgeler</h2>
            <p className="lede">
              Türkiye genelinde yerinde servis veriyoruz. Bulunduğunuz ildeki
              servis ayrıntıları için bölge sayfasına bakabilirsiniz.
            </p>
          </div>
          <LinkChips
            items={cities.map((c) => ({
              href: `/forklift-servisi/${c.slug}`,
              label: `${c.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">İlgili hizmetler</p>
            <h2 className="h2">Diğer servis kalemleri</h2>
          </div>
          <LinkChips
            items={others.map((o) => ({
              href: `/hizmetlerimiz/${o.slug}`,
              label: o.name,
            }))}
          />
        </div>
      </section>

      <CtaBand title={`${s.name} için hemen teklif alın`} />

      <JsonLd
        data={serviceJsonLd({
          name: s.title,
          description: s.description,
          url: `/hizmetlerimiz/${s.slug}`,
        })}
      />
    </>
  );
}
