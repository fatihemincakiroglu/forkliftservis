// ============================================================
//  BÖLGE VERİSİ
//  /forklift-servisi/[sehir] ve /forklift-servisi/[sehir]/[ilce]
//  sayfalarını besler. Yeni bir il/ilçe eklemek için buraya
//  bir satır eklemeniz yeterli — sayfa, menü ve sitemap otomatik oluşur.
//
//  ÖNEMLİ: Her ilin "note" alanı o ile özgü olmalıdır. Aynı metni
//  kopyalayıp il adını değiştirmek Google tarafından "kapı sayfası"
//  olarak değerlendirilir ve sıralamayı düşürür.
// ============================================================

export const cities = [
  {
    slug: "istanbul",
    name: "İstanbul",
    region: "Marmara",
    note: "Türkiye'deki forklift parkının en yoğun olduğu il. İkitelli, Dudullu, Hadımköy ve Tuzla hattındaki depolarda üç vardiya çalışan makinelerde arıza sıklığı yüksek; bu bölgelerde günlük servis rotamız bulunuyor.",
    sectors: "Tekstil, lojistik depoları, gıda dağıtım, mobilya, ambalaj",
    districts: [
      "kadikoy", "umraniye", "atasehir", "maltepe", "kartal", "pendik",
      "tuzla", "sancaktepe", "sultanbeyli", "cekmekoy", "beykoz", "uskudar",
      "sile", "adalar", "bagcilar", "bahcelievler", "bakirkoy", "basaksehir",
      "bayrampasa", "besiktas", "beylikduzu", "beyoglu", "buyukcekmece",
      "catalca", "esenler", "esenyurt", "eyupsultan", "fatih", "gaziosmanpasa",
      "gungoren", "kagithane", "kucukcekmece", "sariyer", "silivri", "sisli",
      "sultangazi", "zeytinburnu", "avcilar", "arnavutkoy",
    ],
  },
  {
    slug: "kocaeli",
    name: "Kocaeli",
    region: "Marmara",
    note: "Gebze ve Dilovası organize sanayi bölgelerinde ağır tonajlı forkliftler yoğun. Liman ve konteyner sahalarında çalışan makinelerde tuzlu hava nedeniyle elektrik aksamı ve gövde korozyonu daha hızlı ilerliyor; bakım aralıklarını buna göre planlıyoruz.",
    sectors: "Otomotiv yan sanayi, kimya, liman ve konteyner, kağıt",
    districts: ["gebze", "korfez", "izmit", "cayirova", "darica", "dilovasi", "golcuk", "kartepe", "derince", "basiskele"],
  },
  {
    slug: "bursa",
    name: "Bursa",
    region: "Marmara",
    note: "Otomotiv yan sanayinde çalışan forkliftler genellikle dar koridorlarda ve sık manevrayla kullanılıyor. Bu kullanım biçiminde direksiyon aksı, arka teker göbeği ve mast makaraları normalden erken aşınıyor.",
    sectors: "Otomotiv yan sanayi, tekstil, gıda, makine",
    districts: ["nilufer", "osmangazi", "yildirim", "inegol", "gemlik", "mudanya", "kestel", "gursu", "karacabey", "orhangazi"],
  },
  {
    slug: "ankara",
    name: "Ankara",
    region: "İç Anadolu",
    note: "Ostim ve İvedik sanayi bölgelerinde küçük ve orta ölçekli işletmelerde çoğunlukla 1,5–3 ton kapasiteli makineler kullanılıyor. Bu segmentte en sık karşılaştığımız kalem LPG karbüratör ayarı ve hidrolik kaçak.",
    sectors: "Makine imalatı, savunma sanayi, gıda, inşaat malzemesi",
    districts: ["sincan", "etimesgut", "yenimahalle", "kecioren", "cankaya", "mamak", "polatli", "kazan", "akyurt", "golbasi"],
  },
  {
    slug: "izmir",
    name: "İzmir",
    region: "Ege",
    note: "Kemalpaşa ve Çiğli organize sanayi bölgeleri ile Alsancak Limanı çevresinde yoğun çalışıyoruz. Limanda ve açık sahada çalışan makinelerde dolgu lastik aşınması ve fren sistemi bakımı öne çıkıyor.",
    sectors: "Gıda ve içecek, liman lojistiği, tarım makineleri, tekstil",
    districts: ["kemalpasa", "cigli", "bornova", "gaziemir", "torbali", "menemen", "buca", "aliaga", "karabaglar", "bayrakli"],
  },
  {
    slug: "tekirdag",
    name: "Tekirdağ",
    region: "Marmara",
    note: "Çorlu ve Çerkezköy hattındaki tekstil ve ambalaj tesislerinde forkliftler genellikle kesintisiz çalışıyor. Toz yoğunluğunun yüksek olduğu bu tesislerde hava filtresi ve radyatör temizliği standart bakımdan daha sık gerekiyor.",
    sectors: "Tekstil, ambalaj, kimya, cam",
    districts: ["corlu", "cerkezkoy", "kapakli", "ergene", "suleymanpasa", "malkara", "hayrabolu", "saray"],
  },
  {
    slug: "sakarya",
    name: "Sakarya",
    region: "Marmara",
    note: "Otomotiv ana sanayi ve yan tedarikçilerinde vardiyalı çalışan akülü forklift sayısı yüksek. Bu makinelerde akü şarj rejimi ve redresör bakımı, motor bakımı kadar belirleyici.",
    sectors: "Otomotiv, beyaz eşya yan sanayi, orman ürünleri",
    districts: ["adapazari", "arifiye", "hendek", "sapanca", "akyazi", "karasu", "serdivan", "pamukova"],
  },
  {
    slug: "manisa",
    name: "Manisa",
    region: "Ege",
    note: "Manisa OSB'deki elektronik ve beyaz eşya tesislerinde temiz oda ve montaj hatlarına yakın çalışan akülü makineler ağırlıkta. Egzoz gazı istenmeyen bu alanlarda dizel yerine akülü forklift bakımı öne çıkıyor.",
    sectors: "Beyaz eşya, elektronik, gıda, tarım ürünleri işleme",
    districts: ["yunusemre", "sehzadeler", "turgutlu", "salihli", "akhisar", "soma", "alasehir"],
  },
  {
    slug: "konya",
    name: "Konya",
    region: "İç Anadolu",
    note: "Konya Organize Sanayi'de makine imalatı ve tahıl depolamada kullanılan forkliftler açık sahada çok çalışıyor. Tozlu ve sıcak ortamda hidrolik yağ sıcaklığı kritik; yağ ve filtre değişim aralığını kısaltmayı öneriyoruz.",
    sectors: "Makine imalatı, tarım ekipmanı, tahıl ve un, döküm",
    districts: ["selcuklu", "karatay", "meram", "eregli", "aksehir", "cumra", "beysehir"],
  },
  {
    slug: "gaziantep",
    name: "Gaziantep",
    region: "Güneydoğu Anadolu",
    note: "Halı ve tekstil tesislerinde forkliftler ağır bobin taşıyor. Kapasite sınırında sürekli çalışan makinelerde mast zinciri, kaldırma silindiri ve tork konvertörü öncelikli kontrol kalemleri.",
    sectors: "Halı ve tekstil, gıda, plastik, ambalaj",
    districts: ["sehitkamil", "sahinbey", "nizip", "islahiye", "oguzeli"],
  },
  {
    slug: "adana",
    name: "Adana",
    region: "Akdeniz",
    note: "Yaz aylarında ortam sıcaklığının uzun süre yüksek kalması, forklift soğutma sistemini zorluyor. Bu bölgede radyatör, termostat ve hidrolik yağ soğutucusu kontrolünü bakım listesinin başına alıyoruz.",
    sectors: "Gıda ve tarım ürünleri, tekstil, plastik, lojistik",
    districts: ["seyhan", "yuregir", "cukurova", "saricam", "ceyhan", "kozan"],
  },
  {
    slug: "kayseri",
    name: "Kayseri",
    region: "İç Anadolu",
    note: "Mobilya ve metal sanayinde ataşmanlı forklift kullanımı yaygın. Rotator, sıkıştırıcı ve uzatma çatal gibi ataşmanlar ek hidrolik hat gerektirdiği için bu hatların kaçak kontrolünü ayrı bir kalem olarak yapıyoruz.",
    sectors: "Mobilya, metal ve çelik, kablo, gıda",
    districts: ["melikgazi", "kocasinan", "talas", "develi", "incesu"],
  },
  {
    slug: "denizli",
    name: "Denizli",
    region: "Ege",
    note: "Tekstil ve mermer sektörü aynı ilde iki farklı forklift ihtiyacı yaratıyor: hafif bobin taşımada 2 tonluk makineler, mermer sahasında 5 ton ve üzeri ağır tonajlı makineler. İki grubun bakım programı ayrı yürütülüyor.",
    sectors: "Tekstil, mermer ve doğal taş, kablo, gıda",
    districts: ["merkezefendi", "pamukkale", "cal", "honaz", "saraykoy"],
  },
  {
    slug: "antalya",
    name: "Antalya",
    region: "Akdeniz",
    note: "Sera üretimi, soğuk hava depoları ve turizm tedarik lojistiğinde forklift kullanımı sezonluk olarak zirveye çıkıyor. Sezon öncesi toplu bakım yaptırmak, hasat döneminde duruş riskini belirgin biçimde düşürüyor.",
    sectors: "Yaş sebze meyve, soğuk hava deposu, turizm lojistiği",
    districts: ["kepez", "muratpasa", "konyaalti", "aksu", "dosemealti", "alanya", "manavgat", "serik"],
  },
  {
    slug: "mersin",
    name: "Mersin",
    region: "Akdeniz",
    note: "Liman sahasında çalışan forkliftler tuzlu ve nemli havaya sürekli maruz kalıyor. Elektrik tesisatında oksitlenme, şasi ve mast profilinde korozyon bu bölgeye özgü, önceden görülebilir arızalar.",
    sectors: "Liman ve konteyner lojistiği, gıda, kimya, tarım ürünleri",
    districts: ["akdeniz", "yenisehir", "toroslar", "mezitli", "tarsus", "erdemli", "silifke"],
  },
  {
    slug: "eskisehir",
    name: "Eskişehir",
    region: "İç Anadolu",
    note: "Havacılık, raylı sistem ve beyaz eşya tesislerinde kalibrasyon ve kayıt gereksinimi yüksek. Bu tesisler için her bakımda ölçüm değerlerini içeren ayrıntılı servis raporu düzenliyoruz.",
    sectors: "Havacılık, raylı sistemler, beyaz eşya, seramik",
    districts: ["odunpazari", "tepebasi", "sivrihisar", "cifteler"],
  },
];

// İstanbul ilçelerinin yaka bilgisi ve sanayi notu
export const districtMeta = {
  // Anadolu Yakası
  kadikoy: { side: "Anadolu", zone: "Perakende ve gıda depoları" },
  umraniye: { side: "Anadolu", zone: "Dudullu Organize Sanayi Bölgesi" },
  atasehir: { side: "Anadolu", zone: "Ofis ve lojistik ara depolar" },
  maltepe: { side: "Anadolu", zone: "Küçük sanayi siteleri" },
  kartal: { side: "Anadolu", zone: "Metal işleme ve sanayi siteleri" },
  pendik: { side: "Anadolu", zone: "Kurtköy sanayi bölgesi ve lojistik depolar" },
  tuzla: { side: "Anadolu", zone: "Tuzla Organize Sanayi ve tersaneler" },
  sancaktepe: { side: "Anadolu", zone: "Samandıra sanayi bölgesi" },
  sultanbeyli: { side: "Anadolu", zone: "Küçük ve orta ölçekli imalat" },
  cekmekoy: { side: "Anadolu", zone: "Depo ve dağıtım merkezleri" },
  beykoz: { side: "Anadolu", zone: "Gıda ve ambalaj tesisleri" },
  uskudar: { side: "Anadolu", zone: "Şehir içi dağıtım depoları" },
  sile: { side: "Anadolu", zone: "Tarım ve gıda işleme" },
  adalar: { side: "Anadolu", zone: "Sınırlı ölçekli lojistik" },
  // Avrupa Yakası
  bagcilar: { side: "Avrupa", zone: "Tekstil ve matbaa yoğunluğu" },
  bahcelievler: { side: "Avrupa", zone: "Toptan gıda ve ambalaj" },
  bakirkoy: { side: "Avrupa", zone: "Perakende ve havalimanı lojistiği" },
  basaksehir: { side: "Avrupa", zone: "İkitelli Organize Sanayi Bölgesi" },
  bayrampasa: { side: "Avrupa", zone: "Toptancı halleri ve gıda depoları" },
  besiktas: { side: "Avrupa", zone: "Şehir içi dağıtım" },
  beylikduzu: { side: "Avrupa", zone: "Beysan ve Birlik sanayi siteleri" },
  beyoglu: { side: "Avrupa", zone: "Şehir içi ara depolar" },
  buyukcekmece: { side: "Avrupa", zone: "Mermer, mobilya ve lojistik depolar" },
  catalca: { side: "Avrupa", zone: "Hadımköy hattı üretim tesisleri" },
  esenler: { side: "Avrupa", zone: "Tekstil ve ambalaj" },
  esenyurt: { side: "Avrupa", zone: "Depo ve dağıtım merkezleri" },
  eyupsultan: { side: "Avrupa", zone: "Metal işleme ve imalat" },
  fatih: { side: "Avrupa", zone: "Toptan tekstil ve gıda" },
  gaziosmanpasa: { side: "Avrupa", zone: "Küçük sanayi siteleri" },
  gungoren: { side: "Avrupa", zone: "Tekstil ve konfeksiyon" },
  kagithane: { side: "Avrupa", zone: "Matbaa ve hafif imalat" },
  kucukcekmece: { side: "Avrupa", zone: "İkitelli ve Sefaköy sanayi hattı" },
  sariyer: { side: "Avrupa", zone: "Gıda ve içecek dağıtımı" },
  silivri: { side: "Avrupa", zone: "Gıda üretimi ve soğuk hava depoları" },
  sisli: { side: "Avrupa", zone: "Şehir içi dağıtım depoları" },
  sultangazi: { side: "Avrupa", zone: "Plastik ve metal imalat" },
  zeytinburnu: { side: "Avrupa", zone: "Deri, tekstil ve ambalaj" },
  avcilar: { side: "Avrupa", zone: "Ambarlı Limanı ve depo tesisleri" },
  arnavutkoy: { side: "Avrupa", zone: "Hadımköy sanayi bölgesi ve lojistik üsler" },
};

// Bireysel sayfası olmayan ancak servis verilen diğer iller
export const otherCities = [
  "Adıyaman", "Afyonkarahisar", "Aksaray", "Amasya", "Ardahan", "Artvin",
  "Aydın", "Balıkesir", "Bartın", "Batman", "Bayburt", "Bilecik", "Bingöl",
  "Bitlis", "Bolu", "Burdur", "Çanakkale", "Çankırı", "Çorum", "Diyarbakır",
  "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Giresun", "Gümüşhane",
  "Hakkâri", "Hatay", "Iğdır", "Isparta", "Kahramanmaraş", "Karabük",
  "Karaman", "Kars", "Kastamonu", "Kırıkkale", "Kırklareli", "Kırşehir",
  "Kilis", "Kütahya", "Malatya", "Mardin", "Muğla", "Muş", "Nevşehir",
  "Niğde", "Ordu", "Osmaniye", "Rize", "Samsun", "Siirt", "Sinop", "Sivas",
  "Şanlıurfa", "Şırnak", "Tokat", "Trabzon", "Tunceli", "Uşak", "Van",
  "Yalova", "Yozgat", "Zonguldak", "Bingöl", "Ağrı",
];

// --- Yardımcılar ---

export function getCity(slug) {
  return cities.find((c) => c.slug === slug);
}

export function getDistrict(citySlug, districtSlug) {
  const city = getCity(citySlug);
  if (!city || !city.districts?.includes(districtSlug)) return null;
  return {
    slug: districtSlug,
    name: titleize(districtSlug),
    ...(districtMeta[districtSlug] || {}),
  };
}

const SPECIAL = {
  kadikoy: "Kadıköy",
  umraniye: "Ümraniye",
  atasehir: "Ataşehir",
  cekmekoy: "Çekmeköy",
  uskudar: "Üsküdar",
  sile: "Şile",
  bagcilar: "Bağcılar",
  bahcelievler: "Bahçelievler",
  bakirkoy: "Bakırköy",
  basaksehir: "Başakşehir",
  bayrampasa: "Bayrampaşa",
  besiktas: "Beşiktaş",
  beylikduzu: "Beylikdüzü",
  beyoglu: "Beyoğlu",
  buyukcekmece: "Büyükçekmece",
  catalca: "Çatalca",
  esenyurt: "Esenyurt",
  eyupsultan: "Eyüpsultan",
  gaziosmanpasa: "Gaziosmanpaşa",
  gungoren: "Güngören",
  kagithane: "Kâğıthane",
  kucukcekmece: "Küçükçekmece",
  sariyer: "Sarıyer",
  sisli: "Şişli",
  sultangazi: "Sultangazi",
  avcilar: "Avcılar",
  arnavutkoy: "Arnavutköy",
  korfez: "Körfez",
  cayirova: "Çayırova",
  darica: "Darıca",
  dilovasi: "Dilovası",
  golcuk: "Gölcük",
  nilufer: "Nilüfer",
  yildirim: "Yıldırım",
  inegol: "İnegöl",
  gursu: "Gürsu",
  karacabey: "Karacabey",
  orhangazi: "Orhangazi",
  kecioren: "Keçiören",
  cankaya: "Çankaya",
  golbasi: "Gölbaşı",
  cigli: "Çiğli",
  kemalpasa: "Kemalpaşa",
  torbali: "Torbalı",
  aliaga: "Aliağa",
  karabaglar: "Karabağlar",
  bayrakli: "Bayraklı",
  corlu: "Çorlu",
  cerkezkoy: "Çerkezköy",
  suleymanpasa: "Süleymanpaşa",
  adapazari: "Adapazarı",
  sehzadeler: "Şehzadeler",
  alasehir: "Alaşehir",
  selcuklu: "Selçuklu",
  eregli: "Ereğli",
  aksehir: "Akşehir",
  cumra: "Çumra",
  beysehir: "Beyşehir",
  sehitkamil: "Şehitkâmil",
  sahinbey: "Şahinbey",
  oguzeli: "Oğuzeli",
  yuregir: "Yüreğir",
  cukurova: "Çukurova",
  saricam: "Sarıçam",
  melikgazi: "Melikgazi",
  merkezefendi: "Merkezefendi",
  cal: "Çal",
  saraykoy: "Sarayköy",
  konyaalti: "Konyaaltı",
  dosemealti: "Döşemealtı",
  yenisehir: "Yenişehir",
  odunpazari: "Odunpazarı",
  tepebasi: "Tepebaşı",
  cifteler: "Çifteler",
  ciftelerx: "Çifteler",
};

export function titleize(slug) {
  if (SPECIAL[slug]) return SPECIAL[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toLocaleUpperCase("tr-TR") + w.slice(1))
    .join(" ");
}

// ============================================================
//  DÜZ URL YAPISI
//  Tüm bölge sayfaları tek düzeyde yayınlanır:
//    /forklift-servisi-istanbul
//    /forklift-servisi-avcilar
//  Aşağıdaki kayıt, hem il hem ilçe sayfalarını üretir.
// ============================================================

export const REGION_PREFIX = "forklift-servisi-";

export function regionSlug(slug) {
  return `${REGION_PREFIX}${slug}`;
}

export function regionHref(slug) {
  return `/${REGION_PREFIX}${slug}`;
}

/** Tüm bölge sayfalarının düz listesi (il + ilçe) */
export const regionPages = (() => {
  const list = [];
  for (const c of cities) {
    list.push({
      slug: regionSlug(c.slug),
      type: "city",
      citySlug: c.slug,
      name: c.name,
    });
    for (const d of c.districts || []) {
      list.push({
        slug: regionSlug(d),
        type: "district",
        citySlug: c.slug,
        districtSlug: d,
        name: titleize(d),
      });
    }
  }
  return list;
})();

/** URL parçasından bölge kaydını bulur */
export function getRegionPage(slug) {
  return regionPages.find((r) => r.slug === slug) || null;
}
