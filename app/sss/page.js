import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, JsonLd, webPageJsonLd } from "@/components/Seo";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Sıkça Sorulan Sorular",
  description:
    "Forklift servis ücreti, müdahale süresi, bakım aralığı, garanti ve yedek parça hakkında en çok sorulan soruların yanıtları.",
  alternates: { canonical: "/sss" },
};

export default function SssPage() {
  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/sss", label: "S.S.S." },
        ]}
        title="Sıkça sorulan sorular"
      />


      <section className="section">
        <div className="shell">
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={webPageJsonLd({
          type: "QAPage",
          name: "Sıkça Sorulan Sorular",
          description:
            "Forklift servis ücreti, müdahale süresi, bakım aralığı, garanti ve yedek parça hakkında en çok sorulan soruların yanıtları.",
          url: "/sss",
        })}
      />
    </>
  );
}
