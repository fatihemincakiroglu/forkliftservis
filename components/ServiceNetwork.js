import Link from "next/link";
import { cities, regionHref, titleize } from "@/lib/locations";
import Icon from "@/components/Icons";

const REGION_ICON = {
  Marmara: "arac",
  Ege: "konum",
  "İç Anadolu": "forklift",
  Akdeniz: "konum",
  "Güneydoğu Anadolu": "forklift",
};

/**
 * Servis ağı bölümü.
 * showDistricts: İstanbul ilçe panelini de gösterir (anasayfa için).
 */
export default function ServiceNetwork({ showDistricts = true }) {
  const grouped = cities.reduce((acc, c) => {
    (acc[c.region] ||= []).push(c);
    return acc;
  }, {});

  const istanbul = cities.find((c) => c.slug === "istanbul");

  return (
    <>
      <div className="region-groups">
        {Object.entries(grouped).map(([region, list]) => (
          <div className="region-group" key={region}>
            <div className="region-group-head">
              <span className="region-group-icon">
                <Icon name={REGION_ICON[region] || "konum"} size={21} />
              </span>
              <span className="region-group-title">{region}</span>
              <span className="region-group-count">{list.length} il</span>
            </div>

            <ul className="region-list">
              {list.map((c) => (
                <li key={c.slug}>
                  <Link href={regionHref(c.slug)}>
                    <Icon name="konum" size={17} />
                    {c.name} forklift servisi
                    {c.districts?.length > 0 && (
                      <span className="region-badge">
                        {c.districts.length} ilçe
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {showDistricts && istanbul && (
        <div className="district-panel">
          <div className="district-panel-head">
            <span className="region-group-icon">
              <Icon name="forklift" size={21} />
            </span>
            <div>
              <h3>İstanbul ilçelerinde forklift servisi</h3>
              <p>
                Avrupa ve Anadolu yakasının tamamında düzenli servis rotamız
                bulunuyor
              </p>
            </div>
            <span
              className="region-group-count"
              style={{ background: "rgba(255,255,255,.08)", color: "#a9bccf" }}
            >
              {istanbul.districts.length} ilçe
            </span>
          </div>

          <div className="district-grid">
            {istanbul.districts.map((d) => (
              <Link key={d} href={regionHref(d)}>
                {titleize(d)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
