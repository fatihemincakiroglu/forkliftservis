// ============================================================
//  TÜM FİRMA BİLGİLERİ BU DOSYADADIR.
//  Site genelindeki telefon, e-posta, adres vb. bilgileri
//  değiştirmek için SADECE bu dosyayı düzenlemeniz yeterli.
// ============================================================

export const site = {
  // --- Kimlik ---
  name: "Express Forklift Servis",
  legalName: "Express Vinç Hizmetleri ve Nak. Ltd. Şti.",
  // Meta başlıkların sonuna eklenen marka adı: "Kategori | Forklift Servis"
  titleSuffix: "Forklift Servis",
  tagline: "Türkiye geneli forklift tamiri, periyodik bakım ve yedek parça",
  domain: "forkliftservis.net",
  url: "https://forkliftservis.net",
  foundedYear: 2008, // ← KURULUŞ YILINIZI YAZIN (Hakkımızda sayfasında kullanılıyor)

  // --- İletişim ---
  phoneDisplay: "0532 303 90 89",
  phoneHref: "+905323039089",
  phone2Display: "", // ikinci numaranız varsa yazın, boş bırakılırsa gösterilmez
  phone2Href: "",
  whatsapp: "905323039089", // ülke kodu + numara, başında + ve boşluk olmadan
  email: "info@vinc.net",

  address: {
    street:
      "İkitelli OSB, Giyim Sanatkarları İş ve Ticaret Merkezi, 4. Ada A Blok, Kat: 1 D: 112",
    district: "Başakşehir",
    city: "İstanbul",
    postalCode: "34490",
    country: "TR",
    mapsUrl: "https://maps.app.goo.gl/JXCzUwRJANU6cKvZ9",
  },

  hours: {
    weekday: "Pazartesi ile Cumartesi, 08:30 / 18:30",
    emergency: "Acil arıza hattı 7/24 açık",
  },

  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  // --- Anasayfa slider ---
// Yeni slayt eklemek için diziye bir nesne ekleyin.
// image: /public/gorseller/ altındaki dosya yolu.
// Gerçek saha fotoğraflarınız hazır olduğunda buradaki
// yolları değiştirmeniz yeterli, başka bir şey yapmanıza gerek yok.
heroSlides: [
    {
      eyebrow: "Türkiye geneli yerinde forklift servisi",
      lede: "Duran forklift, duran depo demektir. Dizel, LPG ve akülü forkliftlerde tamir, periyodik bakım ve yedek parça. Servis aracımız parçayla birlikte gelir, işlerin büyük bölümü makine tesisinizden çıkmadan çözülür.",
      image: "/gorseller/forklift-mast-hidrolik-bakim.webp",
    },
    {
      eyebrow: "Periyodik bakım ve bakım sözleşmesi",
      lede: "Plansız arızaların büyük bölümü önceden görülebilir. Her makinede aynı kontrol listesini uyguluyor, ölçüm değerlerini yazılı raporla teslim ediyoruz. Bakım zamanı geldiğinde sizi biz arıyoruz.",
      image: "/gorseller/forklift-mast-hidrolik-bakim.webp",
    },
    {
      eyebrow: "Orijinal ve muadil yedek parça",
      lede: "Filtre, balata, keçe takımı ve hidrolik parçalar stoktan çıkar. Saat 15:00'e kadar onaylanan siparişler aynı gün kargoya verilir, özel parçalarda süreyi tahmin değil teyit alarak bildiririz.",
      image: "/gorseller/lpg-forklift-servisi.webp",
    },
  ],

  // Hero bölümündeki güven rozetleri
  heroFeatures: [
    "7/24 acil arıza hattı",
    "Yerinde mobil servis",
    "Deneyimli teknisyen kadrosu",
    "İşçilik ve parçada yazılı garanti",
  ],

  // --- Servis kapsamı ---
  coverage: "Türkiye geneli 81 ilde hizmet",

  brands: [
    "Toyota",
    "Linde",
    "Still",
    "Hyster",
    "Yale",
    "Caterpillar",
    "Komatsu",
    "Jungheinrich",
    "Clark",
    "Doosan",
    "Hyundai",
    "Nissan",
    "Mitsubishi",
    "Crown",
    "TCM",
    "Heli",
  ],
};

// --- Bakım & tamir kalemleri ---
export const faults = [
  {
    code: "HYD",
    icon: "hidrolik",
    title: "Hidrolik sistem",
    detail: "Pompa, valf, hidrolik silindir, hortum ve kaçak onarımı",
  },
  {
    code: "TRN",
    icon: "sanziman",
    title: "Şanzıman ve tork konvertörü",
    detail: "Vites geçiş arızaları, kavrama, diferansiyel revizyonu",
  },
  {
    code: "ENG",
    icon: "motor",
    title: "Dizel ve LPG motorlar",
    detail: "Motor revizyonu, enjektör, turbo, LPG karbüratör ayarı",
  },
  {
    code: "ELC",
    icon: "elektrik",
    title: "Elektrik ve akü sistemleri",
    detail: "Kontaktör, kontrol kartı, şarj cihazı, akü bakımı ve testi",
  },
  {
    code: "MST",
    icon: "mast",
    title: "Direk, zincir ve çatal",
    detail: "Mast revizyonu, zincir gerginlik ayarı, çatal aşınma ölçümü",
  },
  {
    code: "BRK",
    icon: "fren",
    title: "Fren ve direksiyon",
    detail: "Balata, fren merkezi, direksiyon aksı ve rot onarımı",
  },
];

// --- Periyodik bakım paketi içeriği ---
export const maintenanceScope = [
  "Motor yağı, yağ filtresi, yakıt ve hava filtresi değişimi",
  "Hidrolik yağ seviyesi, kaçak ve basınç kontrolü",
  "Fren, el freni ve direksiyon sistemi testi",
  "Mast, zincir, çatal ve makara aşınma ölçümü",
  "Akü yoğunluk ölçümü, şarj cihazı ve kablo kontrolü",
  "Lastik, jant ve tekerlek göbeği kontrolü",
  "Korna, far, flaşör ve emniyet ekipmanı testi",
  "Yazılı bakım raporu ve bir sonraki bakım planı",
];

// --- Yedek parça kategorileri ---
export const partCategories = [
  {
    code: "01",
    icon: "hidrolik",
    title: "Hidrolik parçalar",
    items: "Pompa, valf bloğu, silindir, keçe takımı, hortum ve rekor",
  },
  {
    code: "02",
    icon: "motor",
    title: "Motor parçaları",
    items: "Piston, segman, gömlek, conta takımı, su ve yakıt pompası",
  },
  {
    code: "03",
    icon: "sanziman",
    title: "Şanzıman ve aktarma",
    items: "Balata seti, tork konvertörü, diferansiyel dişlisi, aks",
  },
  {
    code: "04",
    icon: "elektrik",
    title: "Elektrik grubu",
    items: "Kontaktör, kontrol kartı, şarj cihazı, marş, şarj dinamosu",
  },
  {
    code: "05",
    icon: "mast",
    title: "Mast grubu",
    items: "Çatal, zincir, makara, mast kızağı, kaldırma silindiri",
  },
  {
    code: "06",
    icon: "filtre",
    title: "Sarf ve filtre",
    items: "Yağ, yakıt, hava ve hidrolik filtre, hidrolik yağı, gres",
  },
  {
    code: "07",
    icon: "aku",
    title: "Akü ve şarj",
    items: "Traksiyoner akü, akü kabloları, soket, şarj redresörü",
  },
  {
    code: "08",
    icon: "lastik",
    title: "Lastik ve jant",
    items: "Dolgu lastik, havalı lastik, poliüretan bandaj, jant",
  },
];

// --- Süreç adımları ---
export const process = [
  {
    step: "01",
    icon: "telefon",
    title: "Arıza bildirimi",
    detail:
      "Telefon veya WhatsApp ile arayın. Makinenin markası, modeli ve künye numarası ilk kaydı hızlandırır.",
  },
  {
    step: "02",
    icon: "teshis",
    title: "Telefonda ön teşhis",
    detail:
      "Teknik ekip belirtileri dinler, olası arızayı daraltır ve gerekli parçayı servis aracına yükler.",
  },
  {
    step: "03",
    icon: "arac",
    title: "Yerinde müdahale",
    detail:
      "Mobil servis aracımız tesisinize gelir. İşlerin büyük bölümü makine yerinden kaldırılmadan çözülür.",
  },
  {
    step: "04",
    icon: "rapor",
    title: "Rapor ve garanti",
    detail:
      "Yapılan işlem, değişen parçalar ve bir sonraki bakım tarihi yazılı raporla teslim edilir.",
  },
];
