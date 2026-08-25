// ============================================================
//  TÜM FİRMA BİLGİLERİ BU DOSYADADIR.
//  Site genelindeki telefon, e-posta, adres vb. bilgileri
//  değiştirmek için SADECE bu dosyayı düzenlemeniz yeterli.
// ============================================================

export const site = {
  // --- Kimlik ---
  name: "Forklift Servis",
  legalName: "Örnek Forklift Servis San. ve Tic. Ltd. Şti.",
  tagline: "Türkiye geneli forklift tamiri, periyodik bakım ve yedek parça",
  domain: "forkliftservis.net",
  url: "https://forkliftservis.net",
  foundedYear: 2008,

  // --- İletişim (BURAYI KENDİ BİLGİLERİNİZLE DEĞİŞTİRİN) ---
  phoneDisplay: "0850 000 00 00",
  phoneHref: "+908500000000",
  phone2Display: "0532 000 00 00",
  phone2Href: "+905320000000",
  whatsapp: "905320000000", // ülke kodu + numara, başında + ve boşluk olmadan
  email: "info@forkliftservis.net",

  address: {
    street: "Örnek Sanayi Sitesi, 1234. Sokak No: 5",
    district: "Başakşehir",
    city: "İstanbul",
    postalCode: "34000",
    country: "TR",
    mapsUrl: "https://maps.google.com/?q=forklift+servis",
  },

  hours: {
    weekday: "Pazartesi – Cumartesi, 08:30 – 18:30",
    emergency: "Acil arıza hattı 7/24 açık",
  },

  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  // --- Servis kapsamı ---
  coverage: "Türkiye geneli · 81 il",

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
    title: "Hidrolik sistem",
    detail: "Pompa, valf, hidrolik silindir, hortum ve kaçak onarımı",
  },
  {
    code: "TRN",
    title: "Şanzıman ve tork konvertörü",
    detail: "Vites geçiş arızaları, kavrama, diferansiyel revizyonu",
  },
  {
    code: "ENG",
    title: "Dizel ve LPG motorlar",
    detail: "Motor revizyonu, enjektör, turbo, LPG karbüratör ayarı",
  },
  {
    code: "ELC",
    title: "Elektrik ve akü sistemleri",
    detail: "Kontaktör, kontrol kartı, şarj cihazı, akü bakımı ve testi",
  },
  {
    code: "MST",
    title: "Direk, zincir ve çatal",
    detail: "Mast revizyonu, zincir gerginlik ayarı, çatal aşınma ölçümü",
  },
  {
    code: "BRK",
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
    title: "Hidrolik parçalar",
    items: "Pompa, valf bloğu, silindir, keçe takımı, hortum ve rekor",
  },
  {
    code: "02",
    title: "Motor parçaları",
    items: "Piston, segman, gömlek, conta takımı, su ve yakıt pompası",
  },
  {
    code: "03",
    title: "Şanzıman ve aktarma",
    items: "Balata seti, tork konvertörü, diferansiyel dişlisi, aks",
  },
  {
    code: "04",
    title: "Elektrik grubu",
    items: "Kontaktör, kontrol kartı, şarj cihazı, marş, şarj dinamosu",
  },
  {
    code: "05",
    title: "Mast grubu",
    items: "Çatal, zincir, makara, mast kızağı, kaldırma silindiri",
  },
  {
    code: "06",
    title: "Sarf ve filtre",
    items: "Yağ, yakıt, hava ve hidrolik filtre, hidrolik yağı, gres",
  },
  {
    code: "07",
    title: "Akü ve şarj",
    items: "Traksiyoner akü, akü kabloları, soket, şarj redresörü",
  },
  {
    code: "08",
    title: "Lastik ve jant",
    items: "Dolgu lastik, havalı lastik, poliüretan bandaj, jant",
  },
];

// --- Süreç adımları ---
export const process = [
  {
    step: "01",
    title: "Arıza bildirimi",
    detail:
      "Telefon veya WhatsApp ile arayın. Makinenin markası, modeli ve künye numarası ilk kaydı hızlandırır.",
  },
  {
    step: "02",
    title: "Telefonda ön teşhis",
    detail:
      "Teknik ekip belirtileri dinler, olası arızayı daraltır ve gerekli parçayı servis aracına yükler.",
  },
  {
    step: "03",
    title: "Yerinde müdahale",
    detail:
      "Mobil servis aracımız tesisinize gelir. İşlerin büyük bölümü makine yerinden kaldırılmadan çözülür.",
  },
  {
    step: "04",
    title: "Rapor ve garanti",
    detail:
      "Yapılan işlem, değişen parçalar ve bir sonraki bakım tarihi yazılı raporla teslim edilir.",
  },
];
