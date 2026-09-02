import Link from "next/link";
import { site, partCategories } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import Icon from "@/components/Icons";
import Figure from "@/components/Figure";
import PageHeader from "@/components/PageHeader";
import { JsonLd, itemListJsonLd, serviceJsonLd } from "@/components/Seo";

export const metadata = {
  title: "Forklift Yedek Parça",
  description:
    "Forklift yedek parça: hidrolik, motor, şanzıman, elektrik ve mast grubu parçaları, filtre, akü, lastik. Orijinal ve muadil seçenekler, Türkiye geneli kargo.",
  alternates: { canonical: "/forklift-yedek-parca" },
};

export default function YedekParca() {
  return (
    <>
      <PageHeader
        trail={[
          { href: "/", label: "Anasayfa" },
          { href: "/forklift-yedek-parca", label: "Yedek Parça" },
        ]}
        title="Forklift yedek parça"
      />


      {/* Kategoriler */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Katalog</p>
            <h2 className="h2">Parça grupları</h2>
          </div>

          <div className="rows">
            {partCategories.map((c) => (
              <div className="row" key={c.code}>
                <span className="row-icon">
                  <Icon name={c.icon} size={24} />
                </span>
                <span className="row-title">{c.title}</span>
                <span className="row-detail">{c.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orijinal / muadil */}
      <section className="section section--dark">
        <div className="shell split">
          <div>
            <p className="eyebrow">Seçenekler</p>
            <h2 className="h2">Orijinal mi, muadil mi?</h2>
            <p className="lede">
              İkisini de tedarik ediyoruz ve hangisini önerdiğimizi gerekçesiyle
              söylüyoruz. Kritik güvenlik parçalarında (fren, kaldırma zinciri,
              hidrolik silindir) orijinal tercih ediyoruz; filtre ve sarf
              malzemede kaliteli muadil çoğu zaman yeterli.
            </p>
          </div>

          <div>
            <Figure
              src="/gorseller/forklift-yedek-parca.webp"
              alt="Forklift yedek parça ve mast grubu"
              width={1200}
              height={1200}
              caption="Parça talebinde marka, model ve seri numarası belirleyicidir"
              className="mb-24"
            />
          <div className="plate">
            <div className="plate-head">
              <span>Talep formu bilgileri</span>
              <span className="plate-rivets" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Marka</span>
              <span className="plate-val">Örn. Toyota, Linde, Still</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Model</span>
              <span className="plate-val">Künye tablasındaki tam model kodu</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Seri no</span>
              <span className="plate-val">Şasi üzerindeki seri numarası</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Parça</span>
              <span className="plate-val">
                Parça adı veya OEM parça numarası
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Adet</span>
              <span className="plate-val">İhtiyaç duyulan miktar</span>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Sevkiyat */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Sevkiyat</p>
            <h2 className="h2">Türkiye’nin her yerine</h2>
          </div>
          <div className="grid grid--3">
            <article className="card">
              <span className="card-icon">
                <Icon name="parca" size={26} />
              </span>
              <span className="card-code">Stok</span>
              <h3 className="h3">Hızlı hareket eden parçalar</h3>
              <p>
                Filtre, balata, keçe takımı, hidrolik hortum ve yaygın elektrik
                parçaları depomuzda hazır bulunur.
              </p>
            </article>
            <article className="card">
              <span className="card-icon">
                <Icon name="saat" size={26} />
              </span>
              <span className="card-code">Tedarik</span>
              <h3 className="h3">Özel sipariş parçalar</h3>
              <p>
                Stokta olmayan parçalarda tedarik süresini tahmin değil, teyitli
                olarak bildiririz.
              </p>
            </article>
            <article className="card">
              <span className="card-icon">
                <Icon name="arac" size={26} />
              </span>
              <span className="card-code">Kargo</span>
              <h3 className="h3">Aynı gün çıkış</h3>
              <p>
                Saat 15:00’e kadar onaylanan stoklu siparişler aynı gün kargoya
                verilir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand title="Aradığınız parçayı bulalım" note="Parça talebi ve teklif" />

      <JsonLd
        data={serviceJsonLd({
          name: "Forklift Yedek Parça",
          description:
            "Forklift yedek parça: hidrolik, motor, şanzıman, elektrik ve mast grubu parçaları, filtre, akü, lastik.",
          url: "/forklift-yedek-parca",
        })}
      />
      <JsonLd
        data={itemListJsonLd({
          name: "Forklift yedek parça grupları",
          items: partCategories.map((c) => ({
            name: c.title,
            href: "/forklift-yedek-parca",
          })),
        })}
      />
    </>
  );
}
