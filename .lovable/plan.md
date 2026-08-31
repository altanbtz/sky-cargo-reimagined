# İstanbul Uçak Kargo — Yeni Kurumsal Site + WordPress Teması

Mevcut sitedeki tüm içerik, iletişim bilgileri ve rota yapısı korunur; tasarım sıfırdan, tamamen farklı ve açık/kurumsal bir yönde kurgulanır. Önce Lovable önizlemesinde tasarım onaylanır, sonra aynı tasarım WordPress teması olarak paketlenip zip dosyası teslim edilir.

## Tasarım yönü

- Palet: beyaz (#FFFFFF), buz grisi yüzey (#F4F7FB), lacivert (#0B3D91), canlı mavi (#1E6FD9) — açık, ferah, kurumsal.
- Mevcut siteden farklılaşma: koyu/hero-ağırlıklı "operasyon paneli" görünümü yerine; geniş beyaz alan, ince çizgili kart sistemi, sol hizalı editoryal tipografi, yatay rota şeritleri ve sade ikonografi.
- Tipografi: başlıklarda geometrik sans (Urbanist), gövdede okunaklı sans (Epilogue/Inter benzeri), net hiyerarşi.
- Hareket: yumuşak fade/slide, hover'da kart yükselmesi; abartısız kurumsal ritim.

## Sayfalar ve içerik (mevcut siteden alınır)

- Anasayfa: hero (İstanbul merkezli, motor kurye ile alım, 3 saat teslimat), kapıdan alım (motorlu/araçlı), taşınan gönderi sınıfları (8 madde), popüler rotalar, operasyon akışı (Talep → Alım → Havalimanı → Uçuş → Teslimat), müşteri yorumları, teklif CTA.
- Hakkımızda: kurumsal kimlik, operasyon felsefesi, metrikler (Motor kurye, 3 saat, THY, Türkiye geneli).
- Hizmetler: 4 operasyon modülü, THY uçuş planlaması, gönderi türleri (pasaport, kimlik, çek, evrak, gıda, e-ticaret vb.), Ankara devlet daireleri teslimat bölümü.
- Rotalar: arama kutulu rota listesi (18+ hat: Ankara, İzmir, Antalya, Bodrum, Dalaman, Milas, Hatay, Siirt, Batman, Alanya, Konya, Kayseri, Şanlıurfa, Diyarbakır, Gaziantep, Mardin, Şişli...).
- Blog: liste + tekil yazı şablonu.
- İletişim: kanallar, adres, harita bölümü, hızlı teklif.
- Otogar Kargo: ekonomik alternatif sayfası.

İletişim bilgileri (her sayfa alt bilgisi ve iletişim sayfasında):
- Adres: Perpa Ticaret Merkezi A Blok Kat:6 No:602 Şişli / İSTANBUL
- Telefon: 0 212 234 00 70 · Telefon 2: 0535 622 02 02
- WhatsApp: 0535 509 20 20 · E-posta: info@istanbulucakkargo.com

## Aşama 1 — Lovable önizlemesi

TanStack rotaları olarak tüm sayfalar kurulur (/, /hakkimizda, /hizmetler, /rotalar, /blog, /iletisim, /otogar-kargo), paylaşılan header/footer, sabit WhatsApp butonu, her sayfaya kendi SEO başlık/açıklaması. Amaç: tasarımı canlı görüp onaylamanız.

## Aşama 2 — WordPress teması (zip)

Onaydan sonra aynı tasarım klasik bir WordPress teması olarak yazılır:

- `style.css` (tema başlığı), `functions.php` (menü, logo, özelleştirici alanları), `header.php`, `footer.php`, `front-page.php`, `page.php`, `index.php`, `single.php`, `archive.php`, `search.php`, `404.php`, `assets/` (css, js, ikonlar).
- Sayfa şablonları: Hakkımızda, Hizmetler, Rotalar, İletişim, Otogar Kargo — mevcut WP sayfalarınıza atanabilir; içerik WordPress'te kalır (demo içerik gömülmez).
- Rotalar listesi mevcut rota sayfalarını otomatik listeler (sayfa/CPT sorgusu + JS arama kutusu).
- Customizer alanları: telefon, WhatsApp numarası, e-posta, adres, logo — kod düzenlemeden değiştirilebilir.
- Menü konumları: birincil menü + alt bilgi menüsü. Blog/yorum/sayfalama WP standartlarına uygun.
- Türkçe içerik, responsive, temiz semantik HTML, hızlı yükleme (harici bağımlılık yok, fontlar tema içinde).

Çıktı: `/mnt/documents` altında yüklemeye hazır `istanbul-ucak-kargo-tema.zip`, kurulum notlarıyla birlikte.

## Teknik notlar

- Tema klasik PHP teması olarak yazılır (blok tema değil) — WordPress 6.x uyumlu, Elementor vb. gerektirmez.
- Zip paketlenmeden önce şablonlar PHP söz dizimi açısından kontrol edilir ve ekran görüntüleriyle görsel doğrulama yapılır.
- Mevcut sitedeki içerik metinleri birebir korunur; yalnızca yerleşim ve görsel dil değişir.
