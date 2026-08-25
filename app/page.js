import Link from "next/link";
import { site, faults, process, maintenanceScope } from "@/lib/site";
import { services, serviceHref } from "@/lib/services";
import { faqs } from "@/lib/faqs";
import ServiceNetwork from "@/components/ServiceNetwork";
import { CtaBand } from "@/components/CtaBand";
import { FaqList, LinkChips } from "@/components/Seo";
import Icon, { ForkliftIllustration } from "@/components/Icons";
import Figure, { FigureStrip } from "@/components/Figure";

export const metadata = {
  // absolute: layout'taki "%s — Site Adı" şablonunu atlar,
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
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
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

            <div className="hero-badges">
              <span className="hero-badge">
                <Icon name="arac" size={20} />
                Yerinde mobil servis
              </span>
              <span className="hero-badge">
                <Icon name="saat" size={20} />
                Aynı gün planlama
              </span>
              <span className="hero-badge">
                <Icon name="garanti" size={20} />
                Yazılı garanti
              </span>
              <span className="hero-badge">
                <Icon name="konum" size={20} />
                81 ilde hizmet
              </span>
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

      {/* ---------- GÜVEN ŞERİDİ ---------- */}
      <section className="section" style={{ paddingBlock: "clamp(40px,5vw,60px)" }}>
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
                Dizel, LPG ve akülü forklift · transpalet · istif makinesi
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
              <span className="card-icon">
                <Icon name="bakim" size={26} />
              </span>
              <span className="card-code">A · Servis</span>
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
              <span className="card-code">B · Parça</span>
              <h3 className="h3">Forklift yedek parça</h3>
              <p>
                Orijinal ve muadil parça. Hızlı hareket eden filtre, balata,
                keçe ve hidrolik parçalar stoktan; özel parçalar için tedarik
                süresi baştan yazılı bildirilir.
              </p>
              <Link className="card-link" href="/yedek-parca">
                Parça kataloğuna bak <Icon name="ok" size={16} />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- MAKİNE TİPLERİ ---------- */}
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
                caption: "3 ton dizel — depo ve üretim tesisleri",
              },
              {
                src: "/gorseller/dizel-forklift-5-ton.webp",
                alt: "5 tonluk dizel forklift bakımı",
                width: 990,
                height: 590,
                caption: "5 ton dizel — açık saha ve sanayi",
              },
              {
                src: "/gorseller/dizel-forklift-7-ton.webp",
                alt: "7 tonluk ağır tonaj forklift tamiri",
                width: 990,
                height: 590,
                caption: "7 ton ve üzeri — liman ve ağır yük",
              },
            ]}
          />
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

          <div style={{ marginTop: 36 }}>
            <LinkChips
              items={services.map((s) => ({
                href: serviceHref(s.slug),
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
              <Link className="btn btn--signal" href="/forklift-periyodik-bakim">
                Bakım kapsamını gör
              </Link>
            </div>
          </div>

          <div>
            <Figure
              src="/gorseller/forklift-mast-hidrolik-bakim.webp"
              alt="Forklift mast ve hidrolik sistem periyodik bakımı"
              width={1200}
              height={1200}
              caption="Mast grubu, hidrolik hatlar ve emniyet etiketlerinin kontrolü"
              className="mb-24"
            />
            <ul className="checklist" style={{ gridTemplateColumns: "1fr" }}>
              {maintenanceScope.map((m) => (
                <li key={m}>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- BÖLGELER ---------- */}
      <section className="section section--concrete">
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

      {/* ---------- SSS ---------- */}
      <section className="section">
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
