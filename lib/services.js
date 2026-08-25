// ============================================================
//  HİZMET SAYFALARI
//  /hizmetlerimiz/[slug] adreslerini oluşturur.
//  Yeni hizmet eklemek için diziye bir nesne ekleyin;
//  sayfa, menü bağlantıları ve sitemap otomatik güncellenir.
// ============================================================

export const services = [
  {
    slug: "forklift-motor-tamiri",
    icon: "motor",
    group: "Onarım",
    name: "Forklift Motor Tamiri",
    title: "Forklift Motor Tamiri ve Revizyonu",
    description:
      "Dizel ve LPG'li forkliftlerde motor revizyonu, enjektör bakımı, turbo onarımı ve kompresyon ölçümü. Yerinde arıza tespiti, yazılı garanti.",
    lede: "Dizel ve LPG'li forkliftlerde motor revizyonu, üst takım yenileme, enjektör ve turbo onarımı.",
    body: [
      "Forklift motorları, otomobil motorlarından farklı olarak uzun süre sabit devirde ve yüksek yük altında çalışır. Bu çalışma biçimi, aşınmanın belirli noktalarda yoğunlaşmasına yol açar: silindir gömleğinin üst bölgesi, supap yatakları ve turbo yatak burçları.",
      "Motor arızası çoğu zaman ani değildir. Egzozdan gelen mavi veya siyah duman, soğukta zor çalışma, güç kaybı ve yağ tüketimindeki artış aylar öncesinden uyarı verir. Bu belirtiler ortaya çıktığında yapılan kompresyon ölçümü, revizyonun kapsamını ve maliyetini büyük ölçüde belirler.",
    ],
    scope: [
      "Kompresyon ve silindir basınç ölçümü",
      "Üst takım revizyonu: supap, külbütör, silindir kapağı planyası",
      "Alt takım revizyonu: piston, segman, gömlek, kol ve ana yatak",
      "Enjektör ve enjeksiyon pompası bakımı, püskürtme testi",
      "Turbo şarj onarımı veya değişimi",
      "Soğutma sistemi: radyatör temizliği, termostat ve devirdaim kontrolü",
      "LPG'li motorlarda karbüratör ve regülatör ayarı",
    ],
    signs: [
      "Egzozdan mavi (yağ yakma) veya yoğun siyah duman",
      "Soğuk havada zor çalışma, marş süresinin uzaması",
      "Yüklü çalışmada belirgin güç kaybı",
      "Yağ seviyesinin bakımlar arasında hızlı düşmesi",
      "Rölantide düzensiz çalışma veya titreme",
    ],
  },
  {
    slug: "forklift-sanziman-tamiri",
    icon: "sanziman",
    group: "Onarım",
    name: "Forklift Şanzıman Tamiri",
    title: "Forklift Şanzıman ve Tork Konvertörü Tamiri",
    description:
      "Forklift şanzıman revizyonu, tork konvertörü onarımı, vites geçiş arızaları ve diferansiyel bakımı. Yerinde teşhis, sökümlü revizyon.",
    lede: "Vites geçmeme, gecikmeli hareket ve tork konvertörü kaynaklı güç kayıplarının onarımı.",
    body: [
      "Forklift şanzımanları çoğunlukla otomatik ve tork konvertörlüdür. Makine gün içinde yüzlerce kez ileri-geri yön değiştirdiği için, konvertör yağı ve balata setleri bu sistemde en hızlı yorulan parçalardır.",
      "Şanzıman arızalarının önemli bir kısmı aslında yağ kaynaklıdır. Seviye düşüklüğü, yanmış yağ veya yanlış tip yağ kullanımı, gerçek bir mekanik arıza gibi görünen belirtiler üretir. Bu yüzden sökme işlemine geçmeden önce mutlaka yağ durumu ve hat basıncı ölçülür.",
    ],
    scope: [
      "Şanzıman yağı seviye, renk ve koku kontrolü",
      "Hat basıncı ölçümü ve valf bloğu testi",
      "Tork konvertörü onarımı veya değişimi",
      "İleri-geri balata seti yenileme",
      "Diferansiyel ve planet grubu revizyonu",
      "Şanzıman keçe ve conta değişimi, kaçak giderme",
      "Yön değiştirme (F/R) kolu ve solenoid arızaları",
    ],
    signs: [
      "Vitese takıldıktan sonra hareketin gecikmesi",
      "İleri ya da geri yönlerden birinin tutmaması",
      "Yüklü rampada makinenin geri kaçması",
      "Şanzıman bölgesinden gelen uğultu veya metalik ses",
      "Makine altında kırmızı-kahverengi yağ birikmesi",
    ],
  },
  {
    slug: "forklift-hidrolik-tamiri",
    icon: "hidrolik",
    group: "Onarım",
    name: "Forklift Hidrolik Tamiri",
    title: "Forklift Hidrolik Sistem Tamiri",
    description:
      "Hidrolik pompa, valf bloğu ve silindir onarımı, keçe değişimi, hidrolik kaçak tespiti ve hortum imalatı. Yerinde servis.",
    lede: "Kaldırma gücü kaybı, yükün kendiliğinden inmesi ve hidrolik kaçaklarının giderilmesi.",
    body: [
      "Hidrolik sistem, forkliftin asıl işini yapan bölümdür. Kaldırma, eğim ve ataşman hareketlerinin tamamı buradan geçer. Sistemdeki küçük bir kaçak bile önce performans düşüklüğü, sonra pompa hasarı olarak geri döner.",
      "En sık karşılaştığımız hata, yükün yukarıda tutulamayıp yavaşça inmesidir. Bunun kaynağı çoğunlukla kaldırma silindiri keçesi ya da valf bloğundaki iç kaçaktır; ikisi farklı işlemlerdir ve doğru ayrımı yapmak için basınç testi gerekir.",
    ],
    scope: [
      "Hidrolik pompa onarımı ve debi ölçümü",
      "Valf bloğu bakımı, emniyet valfi basınç ayarı",
      "Kaldırma ve eğim silindiri keçe takımı değişimi",
      "Yerinde hidrolik hortum imalatı ve rekor değişimi",
      "Hidrolik yağ ve filtre değişimi, sistem yıkama",
      "Ataşman hattı ekleme ve kaçak kontrolü",
      "Hidrolik yağ sıcaklık ve kirlilik analizi",
    ],
    signs: [
      "Yükün yukarıda durmayıp yavaşça inmesi",
      "Kaldırma hızının belirgin şekilde düşmesi",
      "Silindir gövdesinde veya çatal altında yağ izi",
      "Kaldırma sırasında pompadan gelen tiz ses",
      "Direksiyonun ağırlaşması",
    ],
  },
  {
    slug: "forklift-elektronik-kart-tamiri",
    icon: "elektrik",
    group: "Onarım",
    name: "Forklift Kart Tamiri",
    title: "Forklift Elektronik Kart Tamiri",
    description:
      "Akülü forkliftlerde kontrol kartı, sürücü kartı ve kontaktör arızaları. Kart tamiri, hata kodu okuma ve parametre ayarı.",
    lede: "Akülü forkliftlerde kontrol kartı, sürücü ünitesi ve kontaktör arızalarının teşhisi ve onarımı.",
    body: [
      "Akülü forkliftlerde arızaların büyük bölümü mekanik değil elektroniktir. Kontrol kartı, sürücü ünitesi ve kontaktörler bu sistemin merkezinde yer alır ve hata kodu ekranda göründüğünde parçayı doğrudan değiştirmek çoğu zaman gereksiz masraf yaratır.",
      "Kart arızası ile besleme arızasını ayırmak kritik. Zayıflamış bir akü ya da oksitlenmiş bir soket, kartın hatalı olduğunu düşündüren belirtiler üretebilir. Teşhise her zaman akü yük testi ve kablo bağlantı kontrolüyle başlıyoruz.",
    ],
    scope: [
      "Hata kodu okuma ve arıza kayıt geçmişi analizi",
      "Kontrol kartı ve sürücü ünitesi onarımı",
      "Ana ve yön kontaktörü değişimi, kontak temizliği",
      "Gaz ve fren potansiyometresi ayarı",
      "Parametre programlama ve hız/ivme ayarı",
      "Kablo tesisatı, soket ve rekor oksit temizliği",
      "Şarj cihazı (redresör) arıza tespiti",
    ],
    signs: [
      "Gösterge panelinde tekrar eden hata kodu",
      "Makinenin kendiliğinden durması veya kilitlenmesi",
      "Hareket komutuna gecikmeli tepki",
      "Kaldırma çalışırken yürümenin çalışmaması",
      "Kontaktörden gelen sürekli tıkırtı sesi",
    ],
  },
  {
    slug: "forklift-mast-catal-zincir",
    icon: "mast",
    group: "Onarım",
    name: "Mast, Zincir ve Çatal",
    title: "Forklift Mast, Zincir ve Çatal Onarımı",
    description:
      "Forklift direk (mast) revizyonu, kaldırma zinciri gerginlik ayarı ve değişimi, çatal aşınma ölçümü ve düzeltme.",
    lede: "Direk revizyonu, kaldırma zinciri değişimi ve çatal aşınma ölçümü.",
    body: [
      "Mast grubu, forkliftin güvenlik açısından en kritik bölümüdür. Kaldırma zincirinin kopması veya çatalın kırılması, doğrudan yaralanmayla sonuçlanabilecek bir arızadır ve önceden ölçülebilir.",
      "Çatal kalınlığı üretim ölçüsünün %10'undan fazla azaldığında çatal kullanım dışı bırakılmalıdır. Bu ölçümü periyodik bakımların her birinde kumpasla yapıyor ve değeri servis raporuna yazıyoruz.",
    ],
    scope: [
      "Mast kızak, makara ve yan kılavuz değişimi",
      "Kaldırma zinciri gerginlik ayarı ve uzama ölçümü",
      "Zincir seti değişimi (çift zincir birlikte)",
      "Çatal kalınlık ve topuk açısı ölçümü",
      "Çatal kilidi ve taşıyıcı plaka onarımı",
      "Eğim silindiri ve mast pimi bakımı",
      "Serbest kaldırma silindiri revizyonu",
    ],
    signs: [
      "Kaldırma sırasında takılma veya sarsıntı",
      "Mastın öne-arkaya boşluk yapması",
      "Zincir baklalarında gözle görülür uzama veya pas",
      "Çatal ucunda incelme, topuk bölgesinde çatlak",
      "Yükün bir tarafa yatık taşınması",
    ],
  },
  {
    slug: "forklift-fren-direksiyon",
    icon: "fren",
    group: "Onarım",
    name: "Fren ve Direksiyon",
    title: "Forklift Fren ve Direksiyon Sistemi Onarımı",
    description:
      "Forklift fren balatası değişimi, fren merkezi onarımı, el freni ayarı ve direksiyon aksı, rot, hidrolik direksiyon bakımı.",
    lede: "Fren balatası, fren merkezi, el freni ve hidrolik direksiyon sistemi onarımı.",
    body: [
      "Forkliftte fren sistemi, aracın kendi ağırlığına ek olarak taşınan yükü de durdurmak zorundadır. Yüklü çalışan bir makinede fren mesafesinin uzaması, boş makinedekine göre çok daha erken fark edilmelidir.",
      "Arka aks direksiyonu forklifte özgü bir yapıdır ve dar alanda sürekli tam kilit manevra yapan makinelerde rot başları ile aks pimleri hızlı aşınır. Bu aşınma önce direksiyonda boşluk, sonra lastikte tek taraflı yenme olarak kendini gösterir.",
    ],
    scope: [
      "Fren balatası ve kampana kontrolü, değişimi",
      "Fren merkezi ve teker silindiri onarımı",
      "Fren hidroliği değişimi ve hava alma",
      "El freni tel ayarı ve mekanizma bakımı",
      "Hidrolik direksiyon (orbitrol) onarımı",
      "Rot başı, aks pimi ve burç değişimi",
      "Direksiyon silindiri keçe takımı yenileme",
    ],
    signs: [
      "Fren pedalının dibe kadar gitmesi veya sertleşmesi",
      "Frenlemede makinenin bir tarafa çekmesi",
      "El freninin rampada tutmaması",
      "Direksiyonda boşluk veya tek yöne zor dönme",
      "Arka lastiklerde tek taraflı aşınma",
    ],
  },
  {
    slug: "akulu-forklift-servisi",
    icon: "aku",
    group: "Makine tipi",
    name: "Akülü Forklift Servisi",
    title: "Akülü Forklift Servisi ve Bakımı",
    description:
      "Akülü (elektrikli) forklift servisi: kontrol kartı, kontaktör, traksiyoner akü bakımı, şarj cihazı arızaları ve periyodik bakım.",
    lede: "Elektrikli forkliftlerde kart, kontaktör, akü ve şarj cihazı odaklı servis.",
    body: [
      "Akülü forkliftlerin işletme maliyetinin belirleyicisi akü ömrüdür ve bu ömür büyük ölçüde şarj alışkanlığına bağlıdır. Yarım deşarj olmuş bir aküyü sürekli şarja takmak veya tam boşalmadan bırakmak, akünün kapasitesini beklenenden çok daha erken düşürür.",
      "Gıda, ilaç ve elektronik üretimi gibi egzoz gazının kabul edilmediği tesislerde akülü forklift zorunlu tercihtir. Bu tesislerde bakım planını üretim duruşuna denk getirerek yapıyoruz.",
    ],
    scope: [
      "Traksiyoner akü yoğunluk ve gerilim ölçümü, hücre testi",
      "Akü su seviyesi kontrolü ve kutup başı temizliği",
      "Şarj cihazı (redresör) test ve onarımı",
      "Kontrol kartı, sürücü ünitesi ve kontaktör bakımı",
      "Sürüş ve kaldırma motoru kömür değişimi, kollektör bakımı",
      "Hata kodu okuma ve parametre ayarı",
      "Kablo tesisatı ve soket oksit temizliği",
    ],
    signs: [
      "Şarj süresinin kısalması, vardiyayı çıkaramama",
      "Kaldırma gücünün akü doldukça değişmesi",
      "Gösterge panelinde hata kodu",
      "Akü üzerinde beyaz tuzlanma",
      "Şarj sırasında aşırı ısınma veya koku",
    ],
  },
  {
    slug: "dizel-forklift-servisi",
    icon: "dizel",
    group: "Makine tipi",
    name: "Dizel Forklift Servisi",
    title: "Dizel Forklift Servisi ve Bakımı",
    description:
      "Dizel forklift bakımı ve tamiri: motor revizyonu, enjektör, turbo, yakıt sistemi, soğutma ve egzoz bakımı.",
    lede: "Açık saha ve ağır tonaj kullanımındaki dizel forkliftlerin bakım ve onarımı.",
    body: [
      "Dizel forkliftler ağır tonaj ve açık saha çalışması için tercih edilir. Bu çalışma koşulu, hava filtresi ve radyatör peteklerinin beklenenden hızlı tıkanmasına yol açar; toz yoğun ortamlarda filtre değişim aralığının kısaltılması gerekir.",
      "Yakıt kalitesi dizel forkliftlerde doğrudan enjektör ömrünü belirler. Su ve tortu içeren yakıt, önce enjektörde püskürtme bozukluğu, ardından pompa hasarı yaratır. Yakıt filtresi ve su ayırıcının düzenli boşaltılması en ucuz koruma yöntemidir.",
    ],
    scope: [
      "Motor yağı, yağ ve yakıt filtresi değişimi",
      "Hava filtresi kontrolü ve radyatör petek temizliği",
      "Enjektör püskürtme testi ve bakımı",
      "Turbo kontrolü, kaçak ve yatak boşluğu ölçümü",
      "Yakıt deposu ve su ayırıcı temizliği",
      "Egzoz ve karbon birikintisi temizliği",
      "Soğutma suyu ve antifriz kontrolü",
    ],
    signs: [
      "Egzozdan yoğun siyah duman",
      "Motorun hararet yapması",
      "Yakıt tüketiminde belirgin artış",
      "Yüklemede güç kaybı ve devir düşmesi",
      "Marşta zorlanma, çalıştıktan sonra düzensiz rölanti",
    ],
  },
  {
    slug: "lpgli-forklift-servisi",
    icon: "lpg",
    group: "Makine tipi",
    name: "LPG'li Forklift Servisi",
    title: "LPG'li Forklift Servisi ve Bakımı",
    description:
      "LPG'li forklift servisi: karbüratör ve regülatör ayarı, buharlaştırıcı bakımı, tüp bağlantı ve gaz kaçağı kontrolü.",
    lede: "LPG'li forkliftlerde karbüratör ayarı, regülatör bakımı ve gaz kaçağı kontrolü.",
    body: [
      "LPG'li forkliftler kapalı alanda dizele göre daha temiz çalıştığı için depo içi kullanımda yaygındır. Buna karşılık gaz sisteminin düzenli kontrolü, bu makinelerde bir performans meselesi olmanın ötesinde doğrudan güvenlik meselesidir.",
      "En sık görülen şikâyet, soğuk havada zor çalışma ve rölantide stop etmedir. Bunun kaynağı çoğunlukla buharlaştırıcıya giden sıcak su hattının tıkanması ya da regülatör diyaframının yorulmasıdır; ikisi de yerinde çözülebilen kalemlerdir.",
    ],
    scope: [
      "Karbüratör ayarı ve temizliği",
      "Regülatör ve buharlaştırıcı bakımı, diyafram değişimi",
      "Tüp bağlantı hortumu ve rekor kontrolü",
      "Gaz kaçağı testi (köpük ve dedektör ile)",
      "Emniyet valfi ve kapama solenoidi kontrolü",
      "Buji, buji kablosu ve ateşleme bobini bakımı",
      "Egzoz emisyon kontrolü",
    ],
    signs: [
      "Soğukta zor çalışma, ısındıktan sonra düzelme",
      "Rölantide sık sık stop etme",
      "Tüp bağlantı bölgesinde gaz kokusu",
      "Gaz tüketiminde artış",
      "Ani devir yükselmeleri veya tekleme",
    ],
  },
  {
    slug: "transpalet-servisi",
    icon: "transpalet",
    group: "Makine tipi",
    name: "Transpalet Servisi",
    title: "Transpalet Servisi ve Tamiri",
    description:
      "Manuel ve akülü transpalet tamiri: pompa ünitesi, teker ve makara değişimi, akü ve kontrol kartı bakımı.",
    lede: "Manuel ve akülü transpaletlerde pompa, teker ve elektrik aksamı onarımı.",
    body: [
      "Transpaletler basit görünür ama depo içi iş akışının en yoğun kullanılan ekipmanıdır. Manuel modellerde neredeyse tüm arızalar tek bir yerde toplanır: pompa ünitesi ve indirme valfi.",
      "Akülü transpaletlerde ise arıza dağılımı forklifte benzer — kontrol kartı, kontaktör ve akü. Küçük olmaları bu makineleri servis dışı bırakmayı gerektirmez; yerinde müdahaleyle çoğu iş aynı gün kapanır.",
    ],
    scope: [
      "Hidrolik pompa ünitesi onarımı ve keçe değişimi",
      "İndirme valfi ayarı ve kaçak giderme",
      "Çeki ve yük tekerleri, makara değişimi",
      "Akülü modellerde kart, kontaktör ve akü bakımı",
      "Kumanda kolu (timon) mikro şalter değişimi",
      "Çatal düzeltme ve şasi kaynak onarımı",
      "Fren ve emniyet düğmesi kontrolü",
    ],
    signs: [
      "Pompalamaya rağmen çatalın yükselmemesi",
      "Yükün kendiliğinden inmesi",
      "İndirme kolunun tepki vermemesi",
      "Tekerlerde düzleşme veya aşırı gürültü",
      "Akülü modelde hareket etmeme veya kısa şarj ömrü",
    ],
  },
  {
    slug: "istif-makinesi-servisi",
    icon: "istifleyici",
    group: "Makine tipi",
    name: "İstif Makinesi Servisi",
    title: "İstif Makinesi Servisi ve Bakımı",
    description:
      "Akülü ve yarı akülü istif makinesi bakımı, reach truck servisi, mast ve hidrolik sistem onarımı.",
    lede: "Akülü istifleyici ve reach truck bakımı, mast ve hidrolik onarımı.",
    body: [
      "İstif makineleri ve reach trucklar dar koridorlu depolar için tasarlanmıştır ve yüksek raflara çalıştıkları için mast grubu forklifte göre daha uzun ve daha hassastır. Mast kızak ayarındaki küçük bir sapma, yüksek irtifada belirgin salınım yaratır.",
      "Bu makinelerde bakım aralığını çalışma saatine göre değil, kaldırma sayısına göre planlamak daha doğru sonuç verir. Sipariş toplama yoğunluğu yüksek depolarda mast bakımını standart aralığın altında öneriyoruz.",
    ],
    scope: [
      "Mast kızak, makara ve kılavuz ayarı",
      "Kaldırma zinciri ve serbest kaldırma silindiri bakımı",
      "Reach (uzatma) mekanizması ve kızak bakımı",
      "Hidrolik pompa, valf ve hortum kontrolü",
      "Akü, şarj cihazı ve kontrol kartı bakımı",
      "Sürüş ve kaldırma motoru bakımı",
      "Emniyet sensörleri ve yükseklik sınırlayıcı testi",
    ],
    signs: [
      "Yüksekte belirgin salınım veya titreme",
      "Kaldırma hızının kademeli düşmesi",
      "Uzatma mekanizmasının takılması",
      "Direksiyonda tepki gecikmesi",
      "Emniyet sensörünün hatalı devreye girmesi",
    ],
  },
  {
    slug: "forklift-periyodik-bakim",
    icon: "bakim",
    group: "Bakım",
    name: "Periyodik Bakım",
    title: "Forklift Periyodik Bakım",
    description:
      "Kontrol listesine dayalı forklift periyodik bakımı. Yağ ve filtre değişimi, mast ve fren kontrolü, yazılı bakım raporu.",
    lede: "Her makinede aynı kontrol listesi, her bakımda yazılı rapor.",
    body: [
      "Plansız arızaların büyük bölümü, zamanında yapılmamış bir filtre değişimine veya fark edilmemiş bir hidrolik kaçağa dayanır. Periyodik bakımın amacı arızayı onarmak değil, ortaya çıkmadan önce yakalamaktır.",
      "Bakım aralığı çalışma saatine göre belirlenir. Tek vardiya çalışan bir makinede genellikle 250 saatte bir yeterliyken; tozlu, sıcak veya üç vardiya çalışılan ortamlarda bu aralığın kısaltılması gerekir.",
    ],
    scope: [
      "Motor yağı, yağ filtresi, yakıt ve hava filtresi değişimi",
      "Hidrolik yağ seviyesi, kaçak ve basınç kontrolü",
      "Fren, el freni ve direksiyon sistemi testi",
      "Mast, zincir, çatal ve makara aşınma ölçümü",
      "Akü yoğunluk ölçümü, şarj cihazı ve kablo kontrolü",
      "Lastik, jant ve tekerlek göbeği kontrolü",
      "Korna, far, flaşör ve emniyet ekipmanı testi",
      "Yazılı bakım raporu ve bir sonraki bakım planı",
    ],
    signs: [
      "Son bakımın üzerinden 250 çalışma saatinden fazla geçmesi",
      "Bakım kayıtlarının tutulmuyor olması",
      "İkinci el alınmış ve geçmişi bilinmeyen makine",
      "Aynı arızanın kısa aralıklarla tekrar etmesi",
      "İş güvenliği denetimi öncesi kayıt ihtiyacı",
    ],
  },
];

export const serviceGroups = ["Onarım", "Makine tipi", "Bakım"];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
