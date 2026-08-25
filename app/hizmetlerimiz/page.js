import Link from "next/link";
import { services, serviceGroups } from "@/lib/services";
import { site, process } from "@/lib/site";
import { cities, regionHref } from "@/lib/locations";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, LinkChips } from "@/components/Seo";
import Icon, { ForkliftIllustration } from "@/components/Icons";

export const metadata = {
  title: "Forklift Tamiri ve Periyodik Bakım | Hizmetlerimiz",
  description:
    "Forklift motor, şanzıman, hidrolik ve elektronik kart tamiri; akülü, dizel ve LPG'li forklift servisi ile periyodik bakım. Türkiye geneli yerinde servis.",
  alternates: { canonical: "/hizmetlerimiz" },
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <Breadcrumbs
            trail={[
              { href: "/", label: "Anasayfa" },
              { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
            ]}
          />
          <p className="eyebrow">Hizmetlerimiz</p>
          <h1 className="h1">
            Forklift tamiri ve <em>periyodik bakım</em>
          </h1>
          <p className="hero-lede">
            Arıza çıktığında onarım, arıza çıkmadan önce bakım. Dizel, LPG ve
            akülü forkliftlerin tamamında; transpalet ve istif makineleri dahil.
          </p>
          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
            <Link className="btn btn--outline" href="/iletisim">
              Servis talebi
            </Link>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      {serviceGroups.map((group, i) => {
        const list = services.filter((s) => s.group === group);
        const label =
          group === "Onarım"
            ? "Arıza grupları"
            : group === "Makine tipi"
            ? "Makine tipine göre servis"
            : "Önleyici bakım";
        return (
          <section
            key={group}
            className={i % 2 === 0 ? "section" : "section section--concrete"}
          >
            <div className="shell">
              <div className="section-head">
                <p className="eyebrow">{group}</p>
                <h2 className="h2">{label}</h2>
              </div>
              <div className="grid grid--3">
                {list.map((s) => (
                  <article className="card" key={s.slug}>
                    <span className="card-icon">
                      <Icon name={s.icon} size={26} />
                    </span>
                    <span className="card-code">{s.group}</span>
                    <h3 className="h3">{s.name}</h3>
                    <p>{s.lede}</p>
                    <Link className="card-link" href={`/hizmetlerimiz/${s.slug}`}>
                      Ayrıntılara bak <Icon name="ok" size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bir arıza çağrısı nasıl ilerler</p>
            <h2 className="h2">Dört adım</h2>
          </div>
          <div className="steps">
            {process.map((p) => (
              <div className="step" key={p.step}>
                <span className="step-num">{p.step}</span>
                <span className="step-icon">
                  <Icon name={p.icon} size={22} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bölgeler</p>
            <h2 className="h2">Nerede hizmet veriyoruz</h2>
          </div>
          <LinkChips
            items={cities.map((c) => ({
              href: regionHref(c.slug),
              label: `${c.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      <CtaBand title="Bakım takviminizi birlikte kuralım" />
    </>
  );
}
