import Link from "next/link";
import { services, serviceHref } from "@/lib/services";
import { cities, regionHref } from "@/lib/locations";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd, LinkChips, serviceJsonLd } from "@/components/Seo";
import Icon from "@/components/Icons";
import Figure from "@/components/Figure";
import PageHeader from "@/components/PageHeader";

export default function ServiceView({ service: s }) {

  const others = services.filter((x) => x.slug !== s.slug).slice(0, 8);

  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
          { href: serviceHref(s.slug), label: s.name },
        ]}
        title={s.title}
      />


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
            {s.image && (
              <Figure
                src={s.image.src}
                alt={s.image.alt}
                width={s.image.width}
                height={s.image.height}
                caption={s.image.caption}
                priority
                className="mb-24"
              />
            )}
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
              href: regionHref(c.slug),
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
              href: serviceHref(o.slug),
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
          url: serviceHref(s.slug),
        })}
      />
    </>
  );
}
