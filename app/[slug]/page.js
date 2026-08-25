import { notFound } from "next/navigation";
import { getRegionPage, regionPages, regionHref, getCity } from "@/lib/locations";
import { getService, services, serviceHref } from "@/lib/services";
import RegionView from "@/components/RegionView";
import ServiceView from "@/components/ServiceView";

// Yalnızca aşağıda üretilen adresler yayınlanır; diğerleri 404 döner.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...regionPages.map((r) => ({ slug: r.slug })),
    ...services.map((s) => ({ slug: s.slug })),
  ];
}

export function generateMetadata({ params }) {
  const region = getRegionPage(params.slug);

  if (region) {
    const title = `${region.name} Forklift Servisi`;
    const description =
      region.type === "city"
        ? `${region.name} ve ilçelerinde forklift servis ve forklift tamir hizmeti. Periyodik bakım, acil servis ve garantili onarım. Dizel, LPG ve akülü forkliftler.`
        : `${region.name} bölgesinde forklift servis ve forklift tamir hizmeti. Yerinde arıza müdahalesi, periyodik bakım ve garantili onarım desteği.`;
    const url = regionHref(
      region.type === "city" ? region.citySlug : region.districtSlug
    );
    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: { title, description, url },
    };
  }

  const service = getService(params.slug);
  if (service) {
    return {
      title: service.name,
      description: service.description,
      alternates: { canonical: serviceHref(service.slug) },
      openGraph: {
        title: service.title,
        description: service.description,
        url: serviceHref(service.slug),
      },
    };
  }

  return {};
}

export default function Page({ params }) {
  const region = getRegionPage(params.slug);
  if (region) return <RegionView region={region} />;

  const service = getService(params.slug);
  if (service) return <ServiceView service={service} />;

  notFound();
}
