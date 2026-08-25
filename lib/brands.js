// ============================================================
//  MARKA SAYFALARI  →  /markalar/[slug]
//  SIKÇA SORULAN SORULAR  →  /sss ve anasayfa (FAQPage schema)
// ============================================================

export const brands = [
  {
    slug: "toyota",
    name: "Toyota",
    note: "Türkiye'deki en yaygın forklift markalarından biri. 8FG/8FD serisinde en sık karşılaştığımız kalemler LPG regülatör ayarı ve SAS sistemi sensör arızalarıdır.",
  },
  {
    slug: "linde",
    name: "Linde",
    note: "Hidrostatik tahrik sistemi klasik tork konvertörlü yapıdan farklıdır; teşhis ve yağ tipi seçimi bu farkı bilmeyi gerektirir. H serisi ve E serisinde parça temini düzenli.",
  },
  {
    slug: "still",
    name: "Still",
    note: "Akülü modellerde elektronik kontrol mimarisi gelişmiştir. RX ve EGV serilerinde hata kodu okuma ve parametre ayarı, parça değişiminden önce çoğu arızayı çözer.",
  },
  {
    slug: "hyster",
    name: "Hyster",
    note: "Ağır tonaj ve liman uygulamalarında yaygın. H serisi dizel modellerde soğutma sistemi ve turbo bakımı öncelikli kontrol kalemleridir.",
  },
  {
    slug: "yale",
    name: "Yale",
    note: "Hyster ile paylaşılan birçok bileşen sayesinde parça temini görece kolaydır. GDP ve GLP serilerinde şanzıman ve fren grubu bakımı öne çıkar.",
  },
  {
    slug: "caterpillar",
    name: "Caterpillar",
    note: "Dayanıklı şasi yapısına karşılık ağır kullanımda hidrolik hat ve mast makara aşınması izlenmelidir. DP ve GP serilerine servis veriyoruz.",
  },
  {
    slug: "komatsu",
    name: "Komatsu",
    note: "FG ve FD serilerinde motor grubu sağlamdır; bakım odağı genellikle şanzıman yağı rejimi ve mast zinciri gerginliğidir.",
  },
  {
    slug: "jungheinrich",
    name: "Jungheinrich",
    note: "Depo içi akülü ekipmanda güçlü. EFG ve ETV serilerinde kontrol kartı teşhisi ve akü şarj rejimi, makine ömrünü doğrudan belirler.",
  },
  {
    slug: "clark",
    name: "Clark",
    note: "Türkiye'de geniş bir parkı vardır ve muadil parça bulunabilirliği yüksektir. C ve GTS serilerinde hidrolik ve fren grubu bakımı öne çıkar.",
  },
  {
    slug: "doosan",
    name: "Doosan",
    note: "Fiyat-performans dengesiyle tercih edilir. D ve G serilerinde yakıt sistemi temizliği ve enjektör bakımı düzenli yapılmalıdır.",
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    note: "Son yıllarda parkı hızla büyüyen markalardan. 9 serisi modellerde elektronik gösterge üzerinden hata kodu okunabilir, bu teşhis süresini kısaltır.",
  },
  {
    slug: "nissan",
    name: "Nissan",
    note: "Uzun ömürlü motor grubuna sahiptir. Yaşlanan parkta odak noktası şanzıman revizyonu ve mast grubu yenilemedir.",
  },
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    note: "FG ve FD serilerinde motor ve şanzıman uyumu iyidir. Bakımda hidrolik yağ tipi seçimine dikkat edilmesi gerekir.",
  },
  {
    slug: "crown",
    name: "Crown",
    note: "Depo içi akülü ekipmanda uzmanlaşmıştır. Sipariş toplayıcı ve reach truck modellerinde emniyet sensörleri düzenli test edilmelidir.",
  },
  {
    slug: "tcm",
    name: "TCM",
    note: "Türkiye'de köklü bir parkı vardır. Yaşlanmış makinelerde mast makarası, zincir ve fren grubu öncelikli yenileme kalemleridir.",
  },
  {
    slug: "heli",
    name: "Heli",
    note: "Uygun maliyetli çözüm arayan işletmelerde yaygın. Parça temini hızlıdır; bakım disiplini korunduğunda ekonomik ömrü uzar.",
  },
  {
    slug: "baoli",
    name: "Baoli",
    note: "Giriş segmentinde yaygın kullanılır. Yağ ve filtre değişim aralığına sadık kalınması, bu segmentte arıza sıklığını belirgin biçimde düşürür.",
  },
  {
    slug: "hangcha",
    name: "Hangcha",
    note: "Hem dizel hem akülü modellerde geniş ürün yelpazesi vardır. Akülü serilerde kontrol kartı ve şarj cihazı bakımı öncelikli.",
  },
  {
    slug: "ep",
    name: "EP",
    note: "Lityum akülü modelleriyle öne çıkar. Lityum akü sistemlerinde şarj yönetimi ve BMS okuması, kurşun-asit akülerden farklı bir yaklaşım gerektirir.",
  },
  {
    slug: "manitou",
    name: "Manitou",
    note: "Arazi tipi ve teleskopik modellerde yaygın. Açık saha kullanımı nedeniyle hidrolik hat, mast pimi ve fren bakımı sıklaştırılmalıdır.",
  },
];

export function getBrand(slug) {
  return brands.find((b) => b.slug === slug);
}

// ------------------------------------------------------------
//  SIKÇA SORULAN SORULAR
//  Google'ın soru-cevap kutusunda çıkabilmesi için FAQPage
//  yapısal verisi olarak da yayınlanır.
// ------------------------------------------------------------

export const faqs = [
  {
    q: "Forklift arızasında ne kadar sürede geliyorsunuz?",
    a: "Arıza bildirimini aldıktan sonra aynı gün içinde planlama yapıyoruz. İstanbul, Kocaeli ve Bursa hattında müdahale genellikle aynı gün gerçekleşir. Diğer illerde mesafeye göre 24–48 saat aralığında ekip yönlendiriyoruz. Bakım sözleşmeli müşteriler arıza sırasına girmez.",
  },
  {
    q: "Forklift servis ücreti nasıl belirleniyor?",
    a: "Ücret üç kalemden oluşur: işçilik, kullanılan yedek parça ve yol. Yerinde teşhisten sonra bu üç kalemi ayrı ayrı gösteren bir teklif iletiyoruz. Onayınız olmadan hiçbir işleme başlanmaz ve teklifte olmayan bir kalem faturaya eklenmez.",
  },
  {
    q: "Forklift ne kadar sürede bir bakıma girmeli?",
    a: "Genel kural, tek vardiya çalışan bir makinede 250 çalışma saatinde bir periyodik bakımdır. Tozlu, sıcak veya üç vardiya çalışılan ortamlarda bu aralığın kısaltılması gerekir. Makinenin saat sayacına göre size hatırlatma yapıyoruz.",
  },
  {
    q: "Hangi forklift markalarına servis veriyorsunuz?",
    a: "Toyota, Linde, Still, Hyster, Yale, Caterpillar, Komatsu, Jungheinrich, Clark, Doosan, Hyundai, Nissan, Mitsubishi, Crown, TCM, Heli, Baoli, Hangcha, EP ve Manitou başta olmak üzere marka ayrımı yapmıyoruz. Belirleyici olan marka değil, makinenin künye tablasındaki model ve seri numarasıdır.",
  },
  {
    q: "Makineyi servise götürmem gerekiyor mu?",
    a: "Çoğu durumda hayır. Servis aracımız gerekli takım ve parçayla tesisinize gelir; işlerin büyük bölümü makine yerinden kaldırılmadan çözülür. Yalnızca komple motor veya şanzıman revizyonu gibi ağır işlerde makinenin atölyeye alınması gerekir.",
  },
  {
    q: "Orijinal parça mı kullanıyorsunuz, muadil mi?",
    a: "İkisini de tedarik ediyoruz ve hangisini önerdiğimizi gerekçesiyle söylüyoruz. Fren, kaldırma zinciri ve hidrolik silindir gibi güvenlik açısından kritik parçalarda orijinal tercih ediyoruz. Filtre ve sarf malzemede kaliteli muadil çoğu zaman yeterlidir; seçim size aittir.",
  },
  {
    q: "Yapılan işlemde garanti veriyor musunuz?",
    a: "Evet. İşçilik ve değişen parça için verilen garanti süresi servis raporunda yazılı olarak belirtilir. Sökülen parçalar talep etmeniz hâlinde size teslim edilir.",
  },
  {
    q: "Akülü forkliftin kart arızasında kartı değiştirmek şart mı?",
    a: "Çoğu zaman değil. Zayıflamış bir akü veya oksitlenmiş bir soket, kart arızası gibi görünen belirtiler üretebilir. Teşhise akü yük testi ve bağlantı kontrolüyle başlıyoruz; gerçekten kart kaynaklı arızalarda ise önce onarım imkânını değerlendiriyoruz.",
  },
  {
    q: "Türkiye'nin her yerine servis veriyor musunuz?",
    a: "Evet, 81 ilde hizmet veriyoruz. İstanbul, Kocaeli, Bursa, Tekirdağ, Sakarya, Ankara ve İzmir hattında düzenli servis rotamız bulunuyor. Diğer illerde ekip yönlendirmesi mesafeye göre planlanır ve yol bedeli teklifte ayrıca gösterilir.",
  },
  {
    q: "Bakım sözleşmesi yaptırmanın avantajı ne?",
    a: "Üç makineden büyük filolar için sabit fiyatlı yıllık sözleşme yapıyoruz. Bakım takvimini biz takip ediyor, zamanı geldiğinde sizi arıyoruz. Sözleşmeli müşteriler arıza çağrılarında öncelik alır, işçilik ücreti yıl boyunca değişmez ve parça fiyatlarında sözleşmede belirtilen iskonto uygulanır.",
  },
];
