import Link from "next/link";
import { site, faults, process, maintenanceScope } from "@/lib/site";
import { services, serviceHref } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import {
  opening,
  openingHighlight,
  onSite,
  diagnosis,
  fuelTypes,
  earlySigns,
  whyQuestions,
  maintenanceValue,
  pricing,
  requestInfo,
  extraFaqs,
} from "@/lib/homeContent";
import ServiceNetwork from "@/components/ServiceNetwork";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, JsonLd, webPageJsonLd } from "@/components/Seo";
import Icon from "@/components/Icons";
import HeroSlider from "@/components/HeroSlider";
import Figure, { FigureStrip } from "@/components/Figure";

export const metadata = {
  // absolute: layout'taki "%s | Forklift Servis" şablonunu atlar,
  // başlık tam olarak aşağıda yazdığı gibi görünür.
  title: { absolute: "Forklift Servis ve Forklift Tamir Hizmeti" },
  description:
    "Uzman forklift servis ve forklift tamir hizmeti ile arızalara hızlı çözüm sunuyoruz. Periyodik bakım, acil servis ve garantili onarım desteği.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Forklift Servis ve Forklift Tamir Hizmeti",
    description:
      "Uzman forklift servis ve forklift tamir hizmeti ile arızalara hızlı çözüm sunuyoruz. Periyodik bakım, acil servis ve garantili onarım desteği.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSlider />

      <div className="hazard" aria-hidden="true" />

      {/* ---------- GÜVEN ŞERİDİ ---------- */}
      <section
        className="section"
        style={{ paddingBlock: "clamp(40px,5vw,60px)" }}
      >
        <div className="shell">
          <div className="stats">
            <div className="stat">
              <span className="stat-icon">
                <Icon name="arac" size={22} />
              </span>
              <span className="stat-value">Yerinde servis</span>
              <span className="stat-label">
                Servis aracımız parçayla birlikte tesisinize gelir
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <Icon name="forklift" size={22} />
              </span>
              <span className="stat-value">Tüm markalar</span>
              <span className="stat-label">
                Dizel, LPG ve akülü forklift, transpalet, istif makinesi
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <Icon name="rapor" size={22} />
              </span>
              <span className="stat-value">Yazılı rapor</span>
              <span className="stat-label">
                Yapılan işlem, değişen parça ve sonraki bakım tarihi
              </span>
            </div>
            <div className="stat">
              <span className="stat-icon">
                <Icon name="garanti" size={22} />
              </span>
              <span className="stat-value">Onaysız işlem yok</span>
              <span className="stat-label">
                Fiyat ve kapsam onaylanmadan hiçbir parça değişmez
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AÇILIŞ METNİ ---------- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="intro-block">
            <div className="intro-text">
              <p className="eyebrow">Forklift servis, bakım ve tamir</p>
              {opening.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="intro-aside">
              <span className="intro-aside-icon">
                <Icon name="garanti" size={22} />
              </span>
              <p>{openingHighlight}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- İKİ ANA HİZMET ---------- */}
      <section className="section section--concrete">
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
              <span className="card-icon">
                <Icon name="bakim" size={26} />
              </span>
              <span className="card-code">Servis</span>
              <h3 className="h3">Forklift tamiri ve periyodik bakım</h3>
              <p>
                Hidrolik, motor, şanzıman, elektrik ve mast grubunda arıza
                tespiti ve onarım. Yıllık bakım sözleşmesiyle plansız duruşları
                büyük ölçüde ortadan kaldırıyoruz.
              </p>
              <Link className="card-link" href="/hizmetlerimiz">
                Servis kapsamına bak <Icon name="ok" size={16} />
              </Link>
            </article>

            <article className="card">
              <span className="card-icon">
                <Icon name="parca" size={26} />
              </span>
              <span className="card-code">Yedek Parça</span>
              <h3 className="h3">Forklift yedek parça</h3>
              <p>
                Orijinal ve muadil parça. Hızlı hareket eden filtre, balata,
                keçe ve hidrolik parçalar stoktan; özel parçalar için tedarik
                süresi baştan yazılı bildirilir.
              </p>
              <Link className="card-link" href="/forklift-yedek-parca">
                Parça kataloğuna bak <Icon name="ok" size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- YERİNDE SERVİS ---------- */}
      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Yerinde forklift servisi</p>
            <h2 className="h2">Makineyi taşımak yerine ekibi gönderiyoruz</h2>
            {onSite.intro.map((p, i) => (
              <p className="lede" key={i}>
                {p}
              </p>
            ))}
          </div>

          <div className="onsite-card">
            <p className="onsite-title">
              <Icon name="arac" size={17} />
              Yerinde servisin avantaj sağladığı durumlar
            </p>
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {onSite.advantages.map((a) => (
                <li key={a}>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <p className="onsite-note">{onSite.note}</p>
          </div>
        </div>
      </section>

      {/* ---------- MAKİNE PARKI ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Makine tipleri</p>
            <h2 className="h2">Her tonajda ve her yakıt tipinde servis</h2>
            <p className="lede">
              1,5 tonluk depo içi makinelerden 7 ton ve üzeri ağır tonaj
              forkliftlere kadar; dizel, LPG ve akülü modellerin tamamında.
            </p>
          </div>

          <FigureStrip
            items={[
              {
                src: "/gorseller/dizel-forklift-3-ton.webp",
                alt: "3 tonluk dizel forklift servisi",
                width: 990,
                height: 590,
                caption: "3 ton dizel, depo ve üretim tesisleri",
              },
              {
                src: "/gorseller/dizel-forklift-5-ton.webp",
                alt: "5 tonluk dizel forklift bakımı",
                width: 990,
                height: 590,
                caption: "5 ton dizel, açık saha ve sanayi",
              },
              {
                src: "/gorseller/dizel-forklift-7-ton.webp",
                alt: "7 tonluk ağır tonaj forklift tamiri",
                width: 990,
                height: 590,
                caption: "7 ton ve üzeri, liman ve ağır yük",
              },
            ]}
          />
        </div>
      </section>

      {/* ---------- YAKIT TİPİNE GÖRE ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Yakıt tipine göre servis</p>
            <h2 className="h2">Elektrikli, dizel ve LPG forkliftler</h2>
            <p className="lede">
              Üç grubun arıza dağılımı birbirinden farklıdır. Bu yüzden bakım
              listesi de makinenin yakıt tipine göre değişir.
            </p>
          </div>

          <div className="fuel-grid">
            {fuelTypes.map((f) => (
              <article className="fuel-card" key={f.slug}>
                <span className="fuel-icon">
                  <Icon name={f.icon} size={26} />
                </span>
                <h3 className="h3">{f.name}</h3>
                <p className="fuel-lede">{f.lede}</p>
                <p className="fuel-detail">{f.detail}</p>
                <p className="fuel-points-title">Kontrol edilen bölümler</p>
                <ul className="fuel-points">
                  {f.points.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
                <Link className="card-link" href={`/${f.slug}`}>
                  Ayrıntılara bak <Icon name="ok" size={16} />
                </Link>
              </article>
            ))}
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
                <span className="row-icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <span className="row-title">{f.title}</span>
                <span className="row-detail">{f.detail}</span>
              </div>
            ))}
          </div>

          <div className="svc-links">
            <p className="svc-links-title">Tüm servis kalemleri</p>
            <div className="svc-links-grid">
              {services.map((x) => (
                <Link key={x.slug} href={serviceHref(x.slug)}>
                  <span className="svc-links-icon">
                    <Icon name={x.icon} size={18} />
                  </span>
                  {x.name}
                  <Icon name="ok" size={15} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ARIZA TESPİTİ ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Arıza tespiti</p>
            <h2 className="h2">Belirti her zaman arızanın kaynağı değildir</h2>
            {diagnosis.intro.map((x, i) => (
              <p className="lede" key={i}>
                {x}
              </p>
            ))}
          </div>

          <div className="diag-grid">
            <div className="diag-table">
              <div className="diag-table-head">
                <span>Belirti</span>
                <span>Olası kontrol alanı</span>
              </div>
              {diagnosis.table.map((r) => (
                <div className="diag-row" key={r.s}>
                  <span className="diag-symptom">{r.s}</span>
                  <span className="diag-zone">{r.z}</span>
                </div>
              ))}
              <p className="diag-note">{diagnosis.note}</p>
            </div>

            <div className="early-card">
              <p className="early-title">
                <Icon name="teshis" size={17} />
                Erken uyarı belirtileri
              </p>
              <p className="early-intro">{earlySigns.intro}</p>
              <ul className="early-list">
                {earlySigns.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="early-note">{earlySigns.note}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SÜREÇ ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Bir arıza çağrısı nasıl ilerler</p>
            <h2 className="h2">Telefondan raporlamaya</h2>
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

      {/* ---------- PERİYODİK BAKIM ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Periyodik bakım</p>
            <h2 className="h2">Duruşun çoğu önceden görülebilir</h2>
            <p className="lede">
              Plansız arızaların büyük bölümü zamanında yapılmamış bir filtre
              değişimine ya da fark edilmemiş bir hidrolik kaçağa dayanır.
              Periyodik bakımda her makine için aynı kontrol listesi uygulanır,
              ölçüm değerleri yazılı raporla teslim edilir.
            </p>
          </div>

          <div className="maint-grid">
            <div className="maint-visual">
              <Figure
                src="/gorseller/forklift-mast-hidrolik-bakim.webp"
                alt="Forklift mast ve hidrolik sistem periyodik bakımı"
                width={1200}
                height={1200}
                caption="Mast grubu, hidrolik hatlar ve emniyet etiketlerinin kontrolü"
              />
              <div className="maint-cta">
                <div>
                  <strong>Bakım aralığı nasıl belirlenir?</strong>
                  <span>
                    Tek vardiyada 250 saat, ağır koşullarda daha kısa aralık
                  </span>
                </div>
                <Link
                  className="btn btn--signal"
                  href="/forklift-periyodik-bakim"
                >
                  Bakım kapsamını gör
                </Link>
              </div>
            </div>

            <div className="maint-list">
              <p className="maint-list-title">
                <Icon name="kontrol" size={17} />
                Her bakımda uygulanan kontrol listesi
              </p>
              <ol>
                {maintenanceScope.map((m, i) => (
                  <li key={m}>
                    <span className="maint-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BAKIMIN FAYDASI ---------- */}
      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">İşletmeye katkısı</p>
            <h2 className="h2">Planlı bakım neyi değiştirir</h2>
            <p className="lede">{maintenanceValue.intro}</p>
          </div>

          <div className="value-grid">
            {maintenanceValue.items.map((v, i) => (
              <div className="value-item" key={v.t}>
                <span className="value-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{v.t}</strong>
                  <span>{v.d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- NEDEN SORULARI ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">En sık gelen sorular</p>
            <h2 className="h2">Telefonda ilk sorulan dört soru</h2>
          </div>

          <div className="why-grid">
            {whyQuestions.map((w) => (
              <article className="why-card" key={w.q}>
                <span className="why-icon">
                  <Icon name={w.icon} size={24} />
                </span>
                <h3 className="why-q">{w.q}</h3>
                <p className="why-a">{w.a}</p>
                <Link className="card-link" href={w.href}>
                  {w.label} <Icon name="ok" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FİYATLANDIRMA ---------- */}
      <section className="section section--concrete">
        <div className="shell split">
          <div>
            <p className="eyebrow">Servis fiyatları</p>
            <h2 className="h2">Fiyatı belirleyen beş etken</h2>
            <p className="lede">{pricing.intro}</p>

            <div className="price-note">
              <Icon name="garanti" size={19} />
              <p>{pricing.note}</p>
            </div>
          </div>

          <div className="price-list">
            {pricing.factors.map((f) => (
              <div className="price-item" key={f.t}>
                <strong>{f.t}</strong>
                <span>{f.d}</span>
              </div>
            ))}
          </div>
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
          <ServiceNetwork />
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
          <div className="brands">
            {site.brands.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- SERVİS TALEBİ ---------- */}
      <section className="section section--concrete">
        <div className="shell">
          <div className="request-card">
            <div className="request-text">
              <p className="eyebrow">Servis talebi</p>
              <h2 className="h2">Ararken elinizde şunlar olsun</h2>
              <p className="lede">
                Aşağıdaki bilgileri baştan iletirseniz ekip yola çıkmadan önce
                olası parçayı belirleyip araca yükleyebiliyoruz. Bu, tek gelişte
                kapanan iş oranını belirgin biçimde yükseltiyor.
              </p>
              <div className="btn-row">
                <a className="btn btn--signal" href={`tel:${site.phoneHref}`}>
                  <Icon name="telefon" size={17} />
                  {site.phoneDisplay}
                </a>
                <Link className="btn btn--outline" href="/iletisim">
                  Teklif formu
                </Link>
              </div>
            </div>

            <ol className="request-list">
              {requestInfo.map((r, i) => (
                <li key={r}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {r}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- SSS ---------- */}
      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Sıkça sorulan sorular</p>
            <h2 className="h2">Telefonda en çok sorulanlar</h2>
          </div>
          <FaqList items={[...faqs, ...extraFaqs]} />
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={webPageJsonLd({
          name: "Forklift Servis ve Forklift Tamir Hizmeti",
          description:
            "Türkiye genelinde forklift servis ve forklift tamir hizmeti, periyodik bakım ve yedek parça.",
          url: "/",
        })}
      />
    </>
  );
}
