/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "vinc.net" },
      { protocol: "https", hostname: "www.vinc.net" },
    ],
  },

  // Eski URL yapısından yenisine kalıcı yönlendirme.
  // Google eski adresleri taradıysa değeri yeni adrese aktarır.
  async redirects() {
    return [
      // /forklift-servisi/istanbul/avcilar  ->  /forklift-servisi-avcilar
      {
        source: "/forklift-servisi/:sehir/:ilce",
        destination: "/forklift-servisi-:ilce",
        permanent: true,
      },
      // /forklift-servisi/istanbul  ->  /forklift-servisi-istanbul
      {
        source: "/forklift-servisi/:sehir",
        destination: "/forklift-servisi-:sehir",
        permanent: true,
      },
      // /hizmetlerimiz/forklift-motor-tamiri  ->  /forklift-motor-tamiri
      {
        source: "/hizmetlerimiz/:slug",
        destination: "/:slug",
        permanent: true,
      },
      // /lpgli-forklift-servisi  ->  /lpg-forklift-servisi
      {
        source: "/lpgli-forklift-servisi",
        destination: "/lpg-forklift-servisi",
        permanent: true,
      },
      // /yedek-parca  ->  /forklift-yedek-parca
      {
        source: "/yedek-parca",
        destination: "/forklift-yedek-parca",
        permanent: true,
      },
      // Kaldırılan marka sayfaları
      {
        source: "/markalar",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/markalar/:slug",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
