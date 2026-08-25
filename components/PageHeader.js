import { Breadcrumbs } from "@/components/Seo";

/**
 * Anasayfa dışındaki sayfaların üst şeridi.
 * Yalnızca sayfa yolu (breadcrumb) ve H1 başlık içerir.
 */
export default function PageHeader({ trail, title }) {
  return (
    <section className="page-header">
      <div className="shell">
        <Breadcrumbs trail={trail} />
        <h1 className="h1">{title}</h1>
      </div>
    </section>
  );
}
