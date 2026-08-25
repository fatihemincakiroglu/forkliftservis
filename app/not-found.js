import Link from "next/link";

export const metadata = { title: "Sayfa bulunamadı" };

export default function NotFound() {
  return (
    <section className="hero" style={{ minHeight: "58vh", display: "grid", alignItems: "center" }}>
      <div className="shell">
        <p className="eyebrow">Hata 404</p>
        <h1 className="h1">
          Bu sayfa <em>yerinde değil</em>
        </h1>
        <p className="hero-lede">
          Aradığınız adres taşınmış veya hiç var olmamış olabilir. Anasayfadan
          devam edin ya da doğrudan servis talebi oluşturun.
        </p>
        <div className="btn-row">
          <Link className="btn btn--signal" href="/">Anasayfaya dön</Link>
          <Link className="btn btn--outline" href="/iletisim">Servis talebi</Link>
        </div>
      </div>
    </section>
  );
}
