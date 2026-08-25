import Link from "next/link";
import { site, faults, process, maintenanceScope } from "@/lib/site";
import { services } from "@/lib/services";
import { brands, faqs } from "@/lib/brands";
import { cities, titleize } from "@/lib/locations";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, LinkChips } from "@/components/Seo";

export const metadata = {
  title: `Forklift Servisi | Türkiye Geneli Forklift Tamiri ve Bakımı`,
  description:
    "Türkiye genelinde forklift servisi: yerinde forklift tamiri, periyodik bakım ve yedek parça. Dizel, LPG ve akülü forkliftler. Aynı gün planlama, yazılı garanti.",
  alternates: { canonical: "/" },
};

const istanbul = cities.find((c) => c.slug === "istanbul");

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">{site.coverage} · yerinde mobil servis</p>
            <h1 className="h1">
              Türkiye geneli <em>forklift servisi</em>
            </h1>
            <p className="hero-lede">
              Duran forklift, duran depo demektir. {site.foundedYear} yılından bu
              yana dizel, LPG ve akülü forkliftlerde tamir, periyodik bakım ve
              yedek parça tedariki yapıyoruz. Servis aracımız parçayla birlikte
              gelir; işlerin büyük bölümü makine tesisinizden çıkmadan çözülür.
            </p>
            <div className="btn-row">
              <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                {site.phoneDisplay}
              </a>
              <Link className="btn btn--outline" href="/iletisim">
                Arıza bildir
              </Link>
            </div>
          </div>

          {/* İmza bileşen: forkliftin künye tablası */}
          <div className="plate">
            <div className="plate-head">
              <span>Servis Künyesi</span>
              <span className="plate-rivets" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Kapsam</span>
              <span className="plate-val">Tamir · Periyodik bakım · Yedek parça</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Saha</span>
              <span className="plate-val">{site.coverage}</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Makine tipi</span>
              <span className="plate-val">
                Dizel, LPG, akülü forklift · transpalet · istif makinesi
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Müdahale</span>
              <span className="plate-val">
                Arıza bildiriminden sonra aynı gün planlama
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Garanti</span>
              <span className="plate-val">
                İşçilik ve değişen parçada yazılı garanti
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Acil hat</span>
              <span className="plate-val">
                <a
                  href={`tel:${site.phoneHref}`}
                  style={{
                    color: "#FFC61E",
                    textDecoration: "none",
                    fontFamily: "var(--mono)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {site.phoneDisplay}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      {/* ---------- İKİ ANA HİZMET ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Ne yapıyoruz</p>
            <h2 className="h2">İki iş yapıyoruz, ikisini de tam yapıyoruz</h2>
            <p className="lede">
              Forklift satmıyoruz, kiralamıyoruz. Bütün mesaimiz makinenizi
              çalışır durumda tutmaya gidiyor.
            </p>
          </div>

          <div className="grid grid--2">
            <article className="card">
              <span className="card-code">A · Servis</span>
              <h3 className="h3">Forklift tamiri ve periyodik bakım</h3>
              <p>
                Hidrolik, motor, şanzıman, elektrik ve mast grubunda arıza
                tespiti ve onarım. Yıllık bakım sözleşmesiyle plansız duruşları
                büyük ölçüde ortadan kaldırıyoruz.
              </p>
              <Link className="card-link" href="/hizmetlerimiz">
                Servis kapsamına bak →
              </Link>
            </article>

            <article className="card">
              <span className="card-code">B · Parça</span>
              <h3 className="h3">Forklift yedek parça</h3>
              <p>
                Orijinal ve muadil parça. Hızlı hareket eden filtre, balata,
                keçe ve hidrolik parçalar stoktan; özel parçalar için tedarik
                süresi baştan yazılı bildirilir.
              </p>
              <Link className="card-link" href="/yedek-parca">
                Parça kataloğuna bak →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- ARIZA KALEMLERİ ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Müdahale ettiğimiz gruplar</p>
            <h2 className="h2">Hangi arızaya bakıyoruz</h2>
          </div>

          <div className="rows">
            {faults.map((f) => (
              <div className="row" key={f.code}>
                <span className="row-code">{f.code}</span>
                <span className="row-title">{f.title}</span>
                <span className="row-detail">{f.detail}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 36 }}>
            <LinkChips
              items={services.map((s) => ({
                href: `/hizmetlerimiz/${s.slug}`,
                label: s.name,
              }))}
            />
          </div>
        </div>
      </section>

      {/* ---------- SÜREÇ ---------- */}
      <section className="section section--dark" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bir arıza çağrısı nasıl ilerler</p>
            <h2 className="h2">Telefondan raporlamaya</h2>
          </div>

          <div className="steps">
            {process.map((p) => (
              <div className="step" key={p.step}>
                <span className="step-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PERİYODİK BAKIM ---------- */}
      <section className="section section--concrete">
        <div className="shell split">
          <div>
            <p className="eyebrow">Periyodik bakım</p>
            <h2 className="h2">Duruşun çoğu önceden görülebilir</h2>
            <p className="lede">
              Plansız arızaların büyük bölümü, zamanında yapılmamış bir filtre
              değişimine ya da fark edilmemiş bir hidrolik kaçağa dayanır.
              Periyodik bakımda her makine için aynı kontrol listesi uygulanır ve
              sonuç yazılı raporlanır.
            </p>
            <div className="btn-row">
              <Link className="btn btn--signal" href="/hizmetlerimiz/forklift-periyodik-bakim">
                Bakım kapsamını gör
              </Link>
            </div>
          </div>

          <ul className="checklist">
            {maintenanceScope.map((m) => (
              <li key={m}>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- BÖLGELER ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Servis ağı</p>
            <h2 className="h2">Nerede forklift servisi veriyoruz</h2>
            <p className="lede">
              81 ilde hizmet veriyoruz. Aşağıdaki illerde düzenli servis rotamız
              bulunuyor; bölge sayfasında o ile özgü sanayi yoğunluğu ve öne
              çıkan bakım kalemleri yer alıyor.
            </p>
          </div>
          <LinkChips
            items={cities.map((c) => ({
              href: `/forklift-servisi/${c.slug}`,
              label: `${c.name} forklift servisi`,
            }))}
          />

          {istanbul && (
            <>
              <p className="eyebrow" style={{ marginTop: 44 }}>
                İstanbul ilçeleri
              </p>
              <LinkChips
                items={istanbul.districts.map((d) => ({
                  href: `/forklift-servisi/istanbul/${d}`,
                  label: titleize(d),
                }))}
              />
            </>
          )}
        </div>
      </section>

      {/* ---------- MARKALAR ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Servis verdiğimiz markalar</p>
            <h2 className="h2">Marka fark etmez, künye numarası yeter</h2>
            <p className="lede">
              Aşağıdaki markaların yanı sıra listede olmayan modeller için de
              arayın; parça temini mümkünse net bir süre veririz.
            </p>
          </div>
          <LinkChips
            items={brands.map((b) => ({
              href: `/markalar/${b.slug}`,
              label: `${b.name} forklift servisi`,
            }))}
          />
        </div>
      </section>

      {/* ---------- SSS ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Sıkça sorulan sorular</p>
            <h2 className="h2">Telefonda en çok sorulanlar</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
