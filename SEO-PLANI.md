# forkliftservis.net — SEO Eylem Planı

Rakip siteler incelendi, siteye 205 sayfalık bir yapı kuruldu. Bu belge iki bölümden oluşuyor: **sitede yapılanlar** ve **sitenin yapamayacağı, sizin yapmanız gerekenler.**

---

## Bölüm 1 — Sitede yapılanlar

### 1.1 Sayfa yapısı (205 statik sayfa)

| Sayfa grubu | Adet | Örnek adres | Hedef arama |
|---|---|---|---|
| Anasayfa | 1 | `/` | forklift servisi, forklift servis |
| Bölge — il | 16 | `/forklift-servisi/istanbul` | istanbul forklift servisi |
| Bölge — ilçe | 149 | `/forklift-servisi/istanbul/umraniye` | ümraniye forklift servisi |
| Hizmet | 12 | `/hizmetlerimiz/forklift-sanziman-tamiri` | forklift şanzıman tamiri |
| Marka | 20 | `/markalar/toyota` | toyota forklift servisi |
| Diğer | 7 | `/sss`, `/yedek-parca`, `/iletisim` … | forklift servis ücreti |

Bu, Prolift'in sıralamadaki asıl gücünün kaynağıydı: **her ilçe için ayrı sayfa.** Aynı yapıyı kurduk, ama içeriği kopyalamadan.

### 1.2 Neden içerikleri kopyalamadım

Prolift'in "Alfa Forklift Servisi Üsküdar / Asimato Forklift Servisi Üsküdar / …" biçiminde 100 marka listelediği bölüm, klasik anahtar kelime doldurmasıdır. 2010'larda çalışıyordu; bugün Google'ın *spam policies* belgesinde açıkça "keyword stuffing" ve "doorway pages" başlıkları altında yaptırıma bağlanmış durumda.

Aynı riski almamak için:

- **Her ilin metni farklı yazıldı.** İstanbul'da İkitelli-Dudullu hattı, Kocaeli'de liman korozyonu, Antalya'da sezonluk yoğunluk, Adana'da soğutma sistemi. Bunlar il adı değiştirilerek çoğaltılmış aynı metin değil.
- **Her ilçenin sanayi bölgesi bilgisi ayrı girildi** (`lib/locations.js` → `districtMeta`).
- **Hizmet sayfaları gerçek teknik içerik taşıyor** — belirtiler, işlem kapsamı, neden olduğu. Google'ın "helpful content" değerlendirmesinde ölçtüğü tam olarak bu.

> **Uyarı:** `lib/locations.js` dosyasına yeni il eklerken `note` alanını mutlaka o ile özgü yazın. Kopyala-yapıştır yapıp sadece il adını değiştirirseniz, tüm sayfa grubunun değeri düşer.

### 1.3 Teknik SEO

Hepsi kurulu ve çalışır durumda:

- **Title ve meta description** her sayfada ayrı, hedef kelime başta
- **Yapısal veri (schema.org):** `AutoRepair` (işletme), `Service` (her hizmet/bölge sayfası), `BreadcrumbList` (sayfa yolu), `FAQPage` (anasayfa ve S.S.S.)
- **FAQPage** sayesinde Google sonuçlarında açılır soru-cevap kutusu çıkabilir — Atılım'ın yaptığı buydu
- **sitemap.xml** 205 adresi otomatik listeliyor, yeni sayfa eklediğinizde kendi güncelleniyor
- **robots.txt**, canonical etiketler, Open Graph
- **İç bağlantı ağı:** her sayfa ilgili hizmet, marka ve bölge sayfalarına bağlanıyor — Google'ın site içinde dolaşmasını ve sayfa değerini dağıtmasını sağlar
- **Tamamen statik (SSG)** — sayfa açılış hızı Core Web Vitals için en iyi senaryo

### 1.4 Sitenin hız avantajı

Rakiplerin çoğu WordPress + Elementor (Atılım) veya Joomla (Prolift, forkliftservisi.gen.tr) kullanıyor. Bu sistemler her istekte veritabanı sorgusu çalıştırır. Sizin siteniz önceden üretilmiş HTML dosyası olarak sunuluyor; mobil hız skorunda kalıcı bir üstünlük sağlar.

---

## Bölüm 2 — Sitenin yapamayacağı, sizin yapmanız gerekenler

Bu bölüm en önemlisi. Açık konuşayım: **"forklift servisi" aramasında birinci çıkmak site içeriğiyle olmaz.** Site iyi olmadan olmaz, ama tek başına da yetmez. Sıralamayı belirleyen üç şey daha var ve üçü de sitenin dışında.

### 2.1 Google İşletme Profili — en büyük kaldıraç

"Forklift servisi" gibi yerel hizmet aramalarında Google, sonuçların üstünde bir **harita kutusu** gösterir. Bu kutuda çıkan üç işletme, tıklamaların çok büyük bölümünü alır. Oraya girmenin yolu web sitesi değil, **Google İşletme Profili**dir.

Yapılacaklar:

1. [google.com/business](https://www.google.com/business) adresinden kayıt açın
2. Kategori: **"Forklift satıcısı"** veya **"Tamir servisi"** (tam eşleşen kategori seçin)
3. Adres, telefon ve çalışma saatlerini **sitedekiyle harfi harfine aynı** yazın — bu tutarlılığa NAP denir ve Google doğrulama için kullanır
4. Hizmet alanı olarak servis verdiğiniz illeri tek tek ekleyin
5. Servis aracınızın, ekibin ve atölyenin **gerçek fotoğraflarını** yükleyin — stok fotoğraf değil
6. Web sitesi alanına `https://forkliftservis.net` yazın

### 2.2 Google değerlendirmeleri (yorumlar)

Harita kutusundaki sıralamayı belirleyen en güçlü ikinci etken. Rakiplerinizin çoğunun 10-30 arası yorumu var — bu aşılabilir bir sayı.

Yöntem: her tamamlanan iş sonrası servis raporuyla birlikte **QR kodlu bir kart** bırakın, doğrudan yorum sayfanıza gitsin. Depo sorumlusu makine çalışır hâlde teslim aldığı anda yorum bırakma olasılığı en yüksek noktadadır. Ayda 3-4 yorum, altı ayda fark yaratır.

### 2.3 Bağlantılar (backlink)

Google, size link veren siteleri güven işareti sayar. Ücretsiz ve meşru kaynaklar:

- Sanayi ve ticaret odası üye rehberi
- Organize sanayi bölgesi firma listeleri (İkitelli, Dudullu, Gebze, Tuzla OSB)
- Sektörel dizinler: sanayi rehberleri, B2B platformları
- Tedarikçilerinizin "yetkili servis" veya "iş ortağı" sayfaları
- Yerel haber sitelerinde firma tanıtımı

**Yapmayın:** Link satın almak, link ağı sitelerine kayıt olmak. Google bunları tespit ediyor ve cezası sıralama kaybıdır.

### 2.4 Google Search Console

Site yayına girdikten hemen sonra:

1. [search.google.com/search-console](https://search.google.com/search-console) → Mülk ekle → `forkliftservis.net`
2. Doğrulama için DNS TXT kaydı ekleyin (alan adı panelinizden)
3. **Site Haritaları** bölümüne `sitemap.xml` girin
4. İki hafta sonra **Performans** sekmesinden hangi kelimelerde göründüğünüzü izleyin

Bu sekme size gerçek veriyi verir: "hangi ilçe sayfası çalışıyor, hangisi çalışmıyor". Buna göre içerik güçlendirirsiniz.

---

## Bölüm 3 — Gerçekçi zaman çizelgesi

| Süre | Beklenti |
|---|---|
| 0–2 hafta | Google sayfaları taramaya başlar, marka aramasında (`forkliftservis.net`) çıkarsınız |
| 1–2 ay | Uzun kuyruklu aramalarda görünürlük: "ümraniye forklift şanzıman tamiri", "toyota forklift kart arızası" |
| 3–6 ay | İl ve ilçe aramalarında ilk sayfaya yaklaşma: "istanbul forklift servisi" |
| 6–12 ay | Ana kelime rekabeti: "forklift servisi" |

Bunu hızlandıran tek şey, Bölüm 2'deki adımların ne kadar erken tamamlandığıdır.

**Sizin avantajınız:** `forkliftservis.net` tam eşleşen alan adı. Rakiplerin çoğu firma adıyla yarışıyor (Prolift, Kural, Canbey); siz arama teriminin kendisiyle. Bu tek başına sıralama getirmez ama tıklama oranını yükseltir ve tıklama oranı sıralamayı besler.

---

## Bölüm 4 — Sürdürmek için ayda 1 saat

Google, güncellenen siteleri güncellenmeyenlere tercih eder. Ayda bir kez:

- `lib/locations.js` dosyasına yeni bir il ekleyin (özgün `note` metniyle)
- `lib/services.js` dosyasına yeni bir arıza türü ekleyin
- `lib/brands.js` dosyasındaki `faqs` dizisine telefonda gelen yeni bir soruyu ekleyin

Her ekleme yeni bir sayfa ya da yeni içerik demek ve sitemap kendini güncelliyor. Kod bilgisi gerekmiyor — dosyalar düz metin listesi hâlinde hazırlandı.

---

## Kontrol listesi

**Yayın öncesi**
- [ ] `lib/site.js` içindeki tüm örnek bilgiler değiştirildi
- [ ] Telefon numaraları mobilde doğru çalışıyor
- [ ] `site.url` gerçek alan adı
- [ ] Firma unvanı ve adres doğru

**Yayından sonraki ilk hafta**
- [ ] Google Search Console'a eklendi, `sitemap.xml` gönderildi
- [ ] Google İşletme Profili açıldı ve doğrulandı
- [ ] Bing Webmaster Tools'a eklendi (küçük ama bedava trafik)
- [ ] Sanayi/ticaret odası rehberine kayıt yapıldı

**İlk üç ay**
- [ ] En az 10 Google değerlendirmesi toplandı
- [ ] En az 5 dış bağlantı (dizin, oda, OSB listesi) alındı
- [ ] Search Console verisine göre 2-3 yeni içerik eklendi
