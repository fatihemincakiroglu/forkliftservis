import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { brands } from "@/lib/brands";
import { cities } from "@/lib/locations";

export default function sitemap() {
  const now = new Date();
  const entry = (path, priority, freq = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority,
  });

  const staticPages = [
    entry("", 1.0, "weekly"),
    entry("/forklift-servisi", 0.9, "weekly"),
    entry("/hizmetlerimiz", 0.9),
    entry("/yedek-parca", 0.8),
    entry("/markalar", 0.8),
    entry("/sss", 0.7),
    entry("/hakkimizda", 0.5),
    entry("/iletisim", 0.7),
  ];

  const servicePages = services.map((s) => entry(`/hizmetlerimiz/${s.slug}`, 0.8));
  const brandPages = brands.map((b) => entry(`/markalar/${b.slug}`, 0.7));

  const cityPages = [];
  for (const c of cities) {
    cityPages.push(entry(`/forklift-servisi/${c.slug}`, 0.8));
    for (const d of c.districts || []) {
      cityPages.push(entry(`/forklift-servisi/${c.slug}/${d}`, 0.6));
    }
  }

  return [...staticPages, ...servicePages, ...brandPages, ...cityPages];
}
