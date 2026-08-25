import { site } from "@/lib/site";
import { CtaBand } from "@/components/CtaBand";
import Icon, { ForkliftIllustration } from "@/components/Icons";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Forklift servis ve yedek parça alanında saha deneyimi. Türkiye genelinde mobil servis ekibiyle çalışıyoruz.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Hakkimizda() {
  return (
    <>
      <section className="hero">
        <ForkliftIllustration className="hero-art" />
        <div className="shell">
          <p className="eyebrow">Hakkımızda</p>
          <h1 className="h1">
            Sahada <em>{new Date().getFullYear() - site.foundedYear} yıl</em>
          </h1>
          <p className="hero-lede">
            {site.foundedYear} yılında bir servis aracıyla başladık. Bugün
            Türkiye genelinde depo, fabrika, liman ve lojistik merkezlerinde
            forklift bakımı ve onarımı yapıyoruz.
          </p>
        </div>
      </section>

      <div className="hazard" aria-hidden="true" />

      <section className="section">
        <div className="shell split">
          <div className="prose">
            <p className="eyebrow">Nasıl çalışıyoruz</p>
            <h2 className="h2">Makine değil, duruş süresi yönetiyoruz</h2>
            <p>
              Bir forklift arızalandığında asıl maliyet parçada değil, o
              makinenin çalışmadığı saatlerdedir. İş akışımızın tamamı bu süreyi
              kısaltmak üzerine kurulu: telefonda ön teşhis yapıyor, olası
              parçayı araca yükleyip çıkıyor ve tek gelişte kapatmayı
              hedefliyoruz.
            </p>
            <p>
              Onarım öncesi işlem kalemlerini ve parça listesini paylaşıyoruz.
              Onayınız olmadan hiçbir kaleme başlanmıyor, iş bitiminde yazılı
              servis raporu bırakılıyor.
            </p>
          </div>

          <div className="plate">
            <div className="plate-head">
              <span>Firma künyesi</span>
              <span className="plate-rivets" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Unvan</span>
              <span className="plate-val">{site.legalName}</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Kuruluş</span>
              <span className="plate-val">{site.foundedYear}</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Faaliyet</span>
              <span className="plate-val">
                Forklift tamiri, periyodik bakım, yedek parça satışı
              </span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Saha</span>
              <span className="plate-val">{site.coverage}</span>
            </div>
            <div className="plate-row">
              <span className="plate-key">Merkez</span>
              <span className="plate-val">
                {site.address.district} / {site.address.city}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">Çalışma ilkelerimiz</p>
            <h2 className="h2">Dört madde</h2>
          </div>
          <div className="grid grid--4">
            <article
              className="card"
              style={{ background: "var(--steel)", borderColor: "var(--steel-line)" }}
            >
              <span className="card-icon">
                <Icon name="rapor" size={26} />
              </span>
              <span className="card-code">01</span>
              <h3 className="h3" style={{ color: "var(--concrete)" }}>
                Onaysız işlem yok
              </h3>
              <p style={{ color: "var(--mute-dark)" }}>
                Fiyat ve kapsam yazılı olarak onaylanmadan hiçbir parça
                değişmez.
              </p>
            </article>
            <article
              className="card"
              style={{ background: "var(--steel)", borderColor: "var(--steel-line)" }}
            >
              <span className="card-icon">
                <Icon name="saat" size={26} />
              </span>
              <span className="card-code">02</span>
              <h3 className="h3" style={{ color: "var(--concrete)" }}>
                Gerçekçi süre
              </h3>
              <p style={{ color: "var(--mute-dark)" }}>
                Tutmayacak bir tarih vermek yerine net ve teyitli tarih veririz.
              </p>
            </article>
            <article
              className="card"
              style={{ background: "var(--steel)", borderColor: "var(--steel-line)" }}
            >
              <span className="card-icon">
                <Icon name="parca" size={26} />
              </span>
              <span className="card-code">03</span>
              <h3 className="h3" style={{ color: "var(--concrete)" }}>
                Değişen parça iade
              </h3>
              <p style={{ color: "var(--mute-dark)" }}>
                Sökülen parçalar talep edilmesi hâlinde size teslim edilir.
              </p>
            </article>
            <article
              className="card"
              style={{ background: "var(--steel)", borderColor: "var(--steel-line)" }}
            >
              <span className="card-icon">
                <Icon name="garanti" size={26} />
              </span>
              <span className="card-code">04</span>
              <h3 className="h3" style={{ color: "var(--concrete)" }}>
                Yazılı garanti
              </h3>
              <p style={{ color: "var(--mute-dark)" }}>
                İşçilik ve parça garantisi servis raporunda belirtilir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
