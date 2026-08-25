import { site } from "@/lib/site";
import { services, serviceHref } from "@/lib/services";
import { regionPages } from "@/lib/locations";

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
    entry("/sss", 0.7),
    entry("/hakkimizda", 0.5),
    entry("/iletisim", 0.7),
  ];

  const servicePages = services.map((s) =>
    entry(serviceHref(s.slug), 0.85)
  );

  // Bölge sayfaları: /forklift-servisi-istanbul, /forklift-servisi-avcilar ...
  const regions = regionPages.map((r) =>
    entry(`/${r.slug}`, r.type === "city" ? 0.8 : 0.6)
  );

  return [...staticPages, ...servicePages, ...regions];
}
