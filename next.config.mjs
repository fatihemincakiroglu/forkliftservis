/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,

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
