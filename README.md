# forkliftservis.net

Next.js 15 (App Router) ile hazırlanmış, veritabanı gerektirmeyen kurumsal forklift servisi sitesi. Tüm sayfalar statik olarak üretilir (SSG), Vercel'de ücretsiz planda sorunsuz çalışır.

---

## 1. İlk yapılacak: firma bilgilerini girin

Sitedeki telefon, e-posta, adres ve içerik listelerinin tamamı tek dosyadadır:

**`lib/site.js`**

Buradaki şu alanları kendi bilgilerinizle değiştirin:

| Alan | Açıklama |
|---|---|
| `name`, `legalName` | Firma adı ve resmî unvan |
| `phoneDisplay` / `phoneHref` | Ekranda görünen numara / `tel:` bağlantısı (`+90...`) |
| `phone2Display` / `phone2Href` | İkinci (acil) numara |
| `whatsapp` | Ülke kodu + numara, artı ve boşluk olmadan: `905320000000` |
| `email` | İletişim e-postası |
| `address` | Açık adres ve Google Maps bağlantısı |
| `foundedYear` | Kuruluş yılı (Hakkımızda'da otomatik hesaplanır) |
| `brands` | Servis verdiğiniz markalar |

Aynı dosyadaki `faults`, `maintenanceScope`, `partCategories` ve `process` dizileri sayfalardaki listeleri besler — ekleyip çıkarabilirsiniz.

---

## 2. Bilgisayarınızda çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıdan `http://localhost:3000` adresini açın.

---

## 3. GitHub'a yükleme

GitHub'da **boş** bir repo açın (README eklemeyin), sonra:

```bash
git init
git add .
git commit -m "İlk sürüm"
git branch -M main
git remote add origin https://github.com/KULLANICI-ADINIZ/REPO-ADI.git
git push -u origin main
```

---

## 4. Vercel'de yayınlama

1. [vercel.com](https://vercel.com) → GitHub hesabınızla giriş yapın.
2. **Add New → Project** → repoyu seçin → **Import**.
3. Framework otomatik olarak **Next.js** algılanır. Hiçbir ayarı değiştirmeyin, ortam değişkeni de gerekmez.
4. **Deploy**.

Bundan sonra `main` dalına yaptığınız her `git push` otomatik olarak yayına alınır.

---

## 5. forkliftservis.net alan adını bağlama

Vercel'de: **Project → Settings → Domains → Add** → `forkliftservis.net` yazın.

Vercel size iki kayıt gösterecek. Alan adınızı aldığınız firmanın (Natro, İsimtescil, GoDaddy, Cloudflare vb.) DNS paneline şunları girin:

| Tip | Ad | Değer |
|---|---|---|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

> Vercel panelinde gösterilen değerler bunlardan farklıysa **panelde yazan değerleri** kullanın.

DNS yayılması genellikle 5 dakika – 2 saat sürer. SSL sertifikası Vercel tarafından otomatik ve ücretsiz kurulur.

---

## 5.1 SEO

Site 205 sayfalık bir yerel SEO yapısıyla geliyor (il, ilçe, hizmet ve marka sayfaları). Ayrıntılar ve yayın sonrası yapılacaklar için **SEO-PLANI.md** dosyasına bakın.

İçerik dosyaları:

| Dosya | Ne üretir |
|---|---|
| `lib/locations.js` | İl ve ilçe sayfaları (`/forklift-servisi/...`) |
| `lib/services.js` | Hizmet sayfaları (`/hizmetlerimiz/...`) |
| `lib/brands.js` | Marka sayfaları (`/markalar/...`) ve S.S.S. |

Bu dosyalara satır eklediğinizde sayfa, menü bağlantıları ve `sitemap.xml` otomatik oluşur.

---

## 6. Sık yapılacak düzenlemeler

**Yeni sayfa eklemek:** `app/` altında klasör açın, içine `page.js` koyun. `app/hakkimizda/page.js` dosyasını örnek alabilirsiniz. Menüye eklemek için `components/Header.js` içindeki `links` dizisine bir satır ekleyin, `app/sitemap.js` içindeki `routes` dizisine de adresi yazın.

**Renk ve yazı tipi:** `app/globals.css` dosyasının en üstündeki `:root` bloğu. Sarı vurgu rengi `--signal` değişkenidir.

**Logo:** `components/Header.js` içindeki `.brand-mark` SVG'si. Kendi logonuzu `public/logo.svg` olarak koyup `<img src="/logo.svg" />` ile değiştirebilirsiniz.

**Sosyal medya paylaşım görseli:** 1200×630 px bir görseli `app/opengraph-image.png` olarak kaydedin; Next.js otomatik kullanır.

---

## 7. İletişim formu hakkında

Form veritabanı kullanmaz. Doldurulan bilgileri kullanıcının kendi e-posta veya WhatsApp uygulamasına aktarır, gönderimi kullanıcı onaylar. Hiçbir veri sitede saklanmaz.

Formun doğrudan gelen kutunuza düşmesini isterseniz (yine veritabanı olmadan) ücretsiz bir form servisi ekleyebilirsiniz — örneğin [Web3Forms](https://web3forms.com) veya [Formspree](https://formspree.io). Bu durumda `components/ServiceForm.js` içindeki `sendMail` fonksiyonunu servisin verdiği `fetch` isteğiyle değiştirmeniz yeterlidir.

---

## 8. Yayına almadan önce kontrol listesi

- [ ] `lib/site.js` içindeki tüm örnek bilgiler değiştirildi
- [ ] `site.url` gerçek alan adı olarak ayarlandı (SEO ve sitemap bunu kullanır)
- [ ] Telefon numaraları mobilde tıklanınca doğru numarayı açıyor
- [ ] WhatsApp butonu doğru numaraya gidiyor
- [ ] `legalName`, adres ve vergi bilgileri doğru
- [ ] Google Search Console'a `forkliftservis.net` eklendi ve `sitemap.xml` gönderildi
