import Link from "next/link";
import { brands } from "@/lib/brands";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs } from "@/components/Seo";

export const metadata = {
  title: "Forklift Markaları | Servis Verdiğimiz Markalar",
  description:
    "Toyota, Linde, Still, Hyster, Caterpillar, Komatsu, Jungheinrich, Clark, Doosan ve diğer forklift markalarına yerinde servis, bakım ve yedek parça.",
  alternates: { canonical: "/markalar" },
};

export default function MarkalarPage() {
  return (
    <>
      <section className="hero">
        <div className="shell">
          <Breadcrumbs
            trail={[
              { href: "/", label: "Anasayfa" },
              { href: "/markalar", label: "Markalar" },
            ]}
          />
          <p className="eyebrow">Markalar</p>
          <h1 className="h1">
            Marka fark etmez, <em>künye numarası</em> yeter
          </h1>
          <p className="hero-lede">
            Aşağıdaki markaların tamamına servis veriyoruz. Belirleyici olan
            marka değil, künye tablasındaki model ve seri numarasıdır — aynı
            model içinde bile üretim yılına göre parça değişir.
          </p>
          <div className="btn-row">
            <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <section className="section">
        <div className="shell">
          <div className="grid grid--3">
            {brands.map((b) => (
              <article className="card" key={b.slug}>
                <span className="card-code">{b.name}</span>
                <h2 className="h3">{b.name} Forklift Servisi</h2>
                <p>{b.note}</p>
                <Link className="card-link" href={`/markalar/${b.slug}`}>
                  Ayrıntılara bak →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
