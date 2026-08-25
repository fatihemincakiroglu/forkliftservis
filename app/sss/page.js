import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { Breadcrumbs, FaqList } from "@/components/Seo";
import { ForkliftIllustration } from "@/components/Icons";

export const metadata = {
  title: "Sıkça Sorulan Sorular | Forklift Servisi",
  description:
    "Forklift servis ücreti, müdahale süresi, bakım aralığı, garanti ve yedek parça hakkında en çok sorulan soruların yanıtları.",
  alternates: { canonical: "/sss" },
};

export default function SssPage() {
  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <Breadcrumbs
            trail={[
              { href: "/", label: "Anasayfa" },
              { href: "/sss", label: "S.S.S." },
            ]}
          />
          <p className="eyebrow">Sıkça sorulan sorular</p>
          <h1 className="h1">
            Telefonda <em>en çok sorulanlar</em>
          </h1>
          <p className="hero-lede">
            Ücretlendirme, müdahale süresi, bakım aralığı ve garanti hakkında en
            sık gelen soruların yanıtları. Aradığınızı bulamazsanız arayın,
            telefonda anlatalım.
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
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
