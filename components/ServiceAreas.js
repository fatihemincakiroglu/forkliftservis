import Link from "next/link";
import { cities, otherCities, regionHref } from "@/lib/locations";
import Icon from "@/components/Icons";

/**
 * 81 ilin tamamını gösteren servis alanı bölümü.
 * Kendi sayfası olan 16 il bağlantılı, kalan 65 il düz metindir.
 * Sayfası olmayan illere bağlantı verilmez; içi boş sayfa üretmek
 * hem kullanıcıyı yanıltır hem arama sonuçlarında zarar verir.
 */
export default function ServiceAreas({ serviceName }) {
  return (
    <>
      <div className="areas-primary">
        {cities.map((c) => (
          <Link key={c.slug} href={regionHref(c.slug)} className="area-card">
            <span className="area-card-icon">
              <Icon name="konum" size={17} />
            </span>
            <span className="area-card-text">
              <strong>{c.name}</strong>
              {c.districts?.length > 0 && (
                <span>{c.districts.length} ilçede servis</span>
              )}
            </span>
            <Icon name="ok" size={15} />
          </Link>
        ))}
      </div>

      <div className="areas-rest">
        <p className="areas-rest-label">
          <Icon name="arac" size={16} />
          {serviceName ? `${serviceName} için ` : ""}ekip yönlendirdiğimiz
          diğer iller
        </p>
        <div className="areas-rest-list">
          {otherCities.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <p className="areas-rest-note">
          Bu illerde ekip yönlendirmesi mesafeye göre planlanır, yol bedeli
          teklifte ayrıca gösterilir.
        </p>
      </div>
    </>
  );
}
