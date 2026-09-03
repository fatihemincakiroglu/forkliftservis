// ============================================================
//  ANASAYFA UZUN İÇERİĞİ
//  Metinlerin tamamı burada tutulur. Bir bölümü düzenlemek
//  için yalnızca bu dosyayı değiştirmeniz yeterli.
//  Sayfa yapısı app/page.js içindedir.
// ============================================================

/* --- Açılış metni --- */
export const opening = [
  "Forkliftler depo, fabrika, lojistik merkezi ve üretim tesislerinde yük taşıma ve istifleme süreçlerinin en önemli ekipmanıdır. Bu yüzden bir forkliftte çıkan arıza yalnızca teknik bir problem değil, işletmenin çalışma düzenini doğrudan etkileyen operasyonel bir sorundur.",
  "Forkliftin çalışmaması, yük kaldırmaması, güç kaybetmesi veya hidrolik sisteminde problem oluşması sevkiyat ve üretim akışını yavaşlatır. Yoğun çalışan tesislerde kısa süreli bir duruş bile ciddi zaman kaybına dönüşür.",
  "Elektrikli, dizel ve LPG forkliftler için arıza tespiti, periyodik bakım, mekanik onarım, elektrik ve elektronik kontrol, hidrolik sistem müdahalesi ve yedek parça değişimi yapıyoruz. Her forkliftin markası, modeli, çalışma saati ve kullanım ortamı farklı olduğu için servis sürecini tek tip bir işlem olarak değil, makinenin mevcut durumuna göre planlıyoruz.",
];

export const openingHighlight =
  "Hedefimiz yalnızca mevcut arızayı gidermek değil, arızanın kaynağını doğru belirleyerek makinenin daha sağlıklı ve verimli çalışmasını sağlamaktır.";

/* --- Yerinde servis --- */
export const onSite = {
  intro: [
    "Forkliftin servis alanına taşınması her zaman pratik değildir. Özellikle yüksek tonajlı makinelerde nakliye süreci ek maliyet ve zaman kaybı yaratır.",
    "Bu yüzden uygun arızalarda yerinde servis veriyoruz. Mobil servis ekibimiz makinenin bulunduğu tesise gelir ve gerekli ilk kontrolleri yapar. Arıza sahada giderilebilecek durumdaysa bakım, tamir veya parça değişimi makinenin bulunduğu noktada tamamlanır.",
  ],
  advantages: [
    "Küçük ve orta ölçekli arızalarda",
    "Periyodik bakım işlemlerinde",
    "Elektrik ve hidrolik kontrollerde",
    "Akü ve şarj sistemi sorunlarında",
  ],
  note: "Kapsamlı motor, şanzıman veya mekanik revizyon gereken durumlarda makinenin servis alanına alınması gerekebilir. Bu ayrımı telefonda yaptığımız ön teşhiste netleştiriyoruz.",
};

/* --- Arıza tespiti --- */
export const diagnosis = {
  intro: [
    "Doğru tamirin ilk aşaması doğru arıza tespitidir. Forkliftte görülen belirti, arızanın gerçek kaynağını her zaman doğrudan göstermez.",
    "Forklift çalışmıyorsa problem yalnızca aküden kaynaklanmayabilir; marş motoru, elektrik tesisatı, yakıt sistemi veya elektronik kontrol ünitesi de aynı sonuca yol açar. Yük kaldırmıyorsa hidrolik pompayı suçlamak yerine yağ seviyesi, valf grubu, silindirler ve sensörler birlikte kontrol edilmelidir.",
    "Arıza tespitinde makinenin çalışma davranışı, operatörün gözlemleri ve varsa hata kodları birlikte değerlendirilir.",
  ],
  table: [
    { s: "Forklift çalışmıyor", z: "Akü, marş, elektrik sistemi, yakıt sistemi" },
    { s: "Forklift yük kaldırmıyor", z: "Hidrolik yağ, pompa, valf, silindir" },
    { s: "Forklift güçten düşüyor", z: "Motor, yakıt sistemi, akü, yürüyüş sistemi" },
    { s: "Direksiyon sertleşiyor", z: "Hidrolik veya direksiyon sistemi" },
    { s: "Akü çabuk bitiyor", z: "Akü hücreleri, şarj cihazı, elektrik sistemi" },
    { s: "Forklift yağ kaçırıyor", z: "Hidrolik sistem, motor veya şanzıman" },
  ],
  note: "Bu belirtiler yalnızca ilk kontrol için fikir verir. Kesin arıza tespiti teknik inceleme sonrasında yapılır.",
};

/* --- Yakıt tipine göre servis --- */
export const fuelTypes = [
  {
    slug: "akulu-forklift-servisi",
    icon: "aku",
    name: "Elektrikli forklift servisi",
    lede: "Kapalı alan, depo ve lojistik merkezlerinde sessiz çalışma ve düşük emisyon avantajıyla tercih edilir.",
    detail:
      "Akünün çalışma süresinin azalması, güç kaybı veya şarj süresinin uzaması sistemde problem olduğunu gösterir. Bu durumda yalnızca aküyü değiştirmek doğru yaklaşım değildir; şarj cihazı, bağlantılar, kontaktörler ve elektrik motorları da kontrol edilmelidir.",
    points: [
      "Akü ve hücre durumu",
      "Şarj cihazı",
      "Elektrik motorları",
      "Kontaktör ve sensörler",
      "Kablo ve soket bağlantıları",
    ],
  },
  {
    slug: "dizel-forklift-servisi",
    icon: "dizel",
    name: "Dizel forklift servisi",
    lede: "Açık alan ve ağır yük operasyonlarında yaygın kullanılır. Güçlü yapısı yoğun çalışma koşullarına uygundur.",
    detail:
      "Uzun çalışma saatleri, tozlu ortam ve ağır yük motor sisteminin daha hızlı yıpranmasına yol açar. Zor çalışma, siyah duman, yüksek yakıt tüketimi veya çekiş kaybı görüldüğünde motor, yakıt sistemi, filtreler ve soğutma sistemi birlikte değerlendirilir.",
    points: [
      "Motor yağı ve filtreler",
      "Yakıt sistemi",
      "Hava filtresi",
      "Radyatör ve soğutma sistemi",
      "Marş motoru ve alternatör",
    ],
  },
  {
    slug: "lpg-forklift-servisi",
    icon: "lpg",
    name: "LPG forklift servisi",
    lede: "Motor sistemine ek olarak gaz besleme ve ateşleme sistemlerinin düzenli kontrolünü gerektirir.",
    detail:
      "Geç çalışma, düzensiz rölanti, performans kaybı veya yakıt tüketiminde artış LPG sisteminde problem olabileceğini gösterir. LPG sistemleri güvenlik açısından hassas olduğu için bu bölümdeki işlemler teknik bilgi gerektirir.",
    points: [
      "Regülatör ve buharlaştırıcı",
      "Gaz hortumları ve bağlantılar",
      "Ateşleme sistemi",
      "Buji ve bobin",
      "Motor bağlantıları",
    ],
  },
];

/* --- Erken uyarı belirtileri --- */
export const earlySigns = {
  intro:
    "Forkliftler çoğu zaman tamamen arızalanmadan önce sinyal verir. Operatörün bu değişiklikleri fark etmesi daha büyük arızaların önüne geçer.",
  items: [
    "Normalden farklı sesler",
    "Hidrolik hareketlerde yavaşlama",
    "Direksiyon tepkisinde değişiklik",
    "Akünün daha hızlı boşalması",
    "Motor sıcaklığının artması",
    "Zeminde yağ kaçağı izi",
  ],
  note: "Bu belirtiler görüldüğünde makineyi uzun süre kullanmaya devam etmek yerine teknik kontrol yapılması daha doğrudur.",
};

/* --- "Neden" soruları --- */
export const whyQuestions = [
  {
    icon: "hidrolik",
    q: "Forklift neden yük kaldırmaz?",
    a: "En temel neden hidrolik yağ seviyesinin düşük olmasıdır. Bunun dışında pompa arızası, valf problemi veya kaldırma silindirindeki kaçaklar da kaldırma fonksiyonunu etkiler. Elektronik forkliftlerde sensör ve kontrol sistemi arızaları da aynı belirtiye yol açar. Bu yüzden tek bir parçaya odaklanmak yerine kaldırma sisteminin tamamı kontrol edilir.",
    href: "/forklift-hidrolik-tamiri",
    label: "Hidrolik tamiri",
  },
  {
    icon: "elektrik",
    q: "Forklift neden çalışmaz?",
    a: "Elektrikli forkliftlerde akü, ana bağlantılar ve elektronik sistemler ilk kontrol edilen bölümlerdir. Dizel forkliftlerde akü, marş motoru ve yakıt sistemi değerlendirilir. LPG forkliftlerde ise ateşleme ve gaz besleme sistemi de incelenir. Kesin arıza tespiti yapılmadan parça değiştirmek doğru değildir.",
    href: "/forklift-elektronik-kart-tamiri",
    label: "Kart tamiri",
  },
  {
    icon: "motor",
    q: "Forklift neden hararet yapar?",
    a: "Radyatör tıkanıklığı, soğutma sıvısının azalması veya fan sisteminde problem hararete neden olur. Ağır yük altında uzun süre çalışma da soğutma sistemini zorlar. Hararet yapan forklift kullanılmaya devam edilirse motorda daha büyük hasar oluşur; sıcaklık göstergesindeki olağandışı değişiklik dikkate alınmalıdır.",
    href: "/forklift-motor-tamiri",
    label: "Motor tamiri",
  },
  {
    icon: "sanziman",
    q: "Forklift neden yağ kaçırır?",
    a: "Yağ kaçağı motor, şanzıman veya hidrolik sistemden kaynaklanabilir. Kaçağın rengi ve bulunduğu bölge ilk fikri verir, ancak kesin teşhis için bağlantılar, hortumlar ve keçeler kontrol edilmelidir. Kaçağın kaynağı bulunmadan sadece yağ eklemek kalıcı çözüm değildir.",
    href: "/forklift-sanziman-tamiri",
    label: "Şanzıman tamiri",
  },
];

/* --- Bakımın işletmeye faydası --- */
export const maintenanceValue = {
  intro:
    "Düzenli bakım yalnızca teknik açıdan değil, işletme yönetimi açısından da avantaj sağlar. Planlı bakımla servis işlemleri üretim ve sevkiyat programına göre organize edilebilir.",
  items: [
    {
      t: "Plansız duruş azalır",
      d: "Beklenmedik arızaların azalması iş akışının daha düzenli ilerlemesini sağlar.",
    },
    {
      t: "Büyük onarım maliyeti önlenir",
      d: "Erken fark edilen aşınma, kapsamlı revizyona dönüşmeden çözülür.",
    },
    {
      t: "Servis geçmişi kayıtlı kalır",
      d: "Kayıt altına alınan işlemler gelecekteki arızaların değerlendirilmesini kolaylaştırır.",
    },
    {
      t: "Filo yönetimi düzenlenir",
      d: "Birden fazla makinesi olan işletmelerde bakım kayıtları planlamayı kolaylaştırır.",
    },
    {
      t: "İş güvenliği riski erken görülür",
      d: "Fren, mast ve zincir gibi kritik parçalardaki aşınma zamanında tespit edilir.",
    },
    {
      t: "Makine ömrü uzar",
      d: "Bakım aralığına sadık kalınan makineler belirgin biçimde daha uzun çalışır.",
    },
  ],
};

/* --- Fiyatlandırma etkenleri --- */
export const pricing = {
  intro:
    "Servis fiyatı yapılan işleme göre değişir. Basit bir bakım işlemiyle motor veya şanzıman onarımının maliyeti aynı değildir. Net bedel için önce yapılacak işlemin belirlenmesi gerekir.",
  factors: [
    {
      t: "Arızanın türü",
      d: "Yerinde çözülebilen bir kalem ile revizyon gerektiren iş farklı fiyatlanır.",
    },
    {
      t: "İşçilik süresi",
      d: "Söküm gerektiren işlemler daha uzun sürer ve işçilik kalemini yükseltir.",
    },
    {
      t: "Kullanılacak yedek parça",
      d: "Orijinal ve muadil seçenek arasındaki fark teklifte ayrı gösterilir.",
    },
    {
      t: "Marka ve model",
      d: "Parça bulunabilirliği ve teknik yapı markaya göre değişir.",
    },
    {
      t: "Yerinde servis gereksinimi",
      d: "Mesafeye göre yol bedeli teklifte ayrıca belirtilir.",
    },
  ],
  note: "Onayınız olmadan hiçbir kaleme başlanmaz, teklifte olmayan bir kalem faturaya eklenmez.",
};

/* --- Servis talebinde istediğimiz bilgiler --- */
export const requestInfo = [
  "Forkliftin markası ve modeli",
  "Makinenin bulunduğu il ve ilçe",
  "Yaşanan problemin kısa tarifi",
  "Varsa gösterge panelindeki hata kodu",
  "Mümkünse arızaya ait fotoğraf veya kısa video",
];

/* --- Anasayfaya eklenen ek sorular (mevcut SSS listesine eklenir) --- */
export const extraFaqs = [
  {
    q: "Forklift servisi yerinde yapılabilir mi?",
    a: "Birçok arıza ve bakım işlemi makinenin bulunduğu işletmede gerçekleştirilebilir. Servis aracımız gerekli takım ve olası parçayla birlikte gelir. Kapsamlı motor veya şanzıman onarımlarında makinenin servis alanına alınması gerekebilir; bu ayrımı telefonda yapılan ön teşhiste netleştiriyoruz.",
  },
  {
    q: "Forklift neden sürekli arıza yapar?",
    a: "Tekrarlayan arızalar üç sebepten kaynaklanır: bakım eksikliği, yanlış kullanım veya arızanın temel nedeninin tam olarak giderilmemesi. Aynı arızanın kısa aralıklarla tekrar etmesi, önceki müdahalede kök nedene ulaşılmadığını gösterir. Bu durumda parça değiştirmek yerine sistemin tamamını ölçümle yeniden değerlendiriyoruz.",
  },
  {
    q: "Forklift neden hareket etmez?",
    a: "Şanzıman, yürüyüş motoru, elektrik sistemi veya sensör arızaları makinenin hareket etmemesine neden olabilir. Kaldırma çalışırken yürümenin çalışmaması genellikle yön kontaktörü veya kontrol kartı kaynaklıdır. Kapsamlı şanzıman onarımına başlamadan önce yürüyüş sisteminin tamamı değerlendirilir.",
  },
];
