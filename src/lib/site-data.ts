export const site = {
  name: "İstanbul Uçak Kargo",
  tagline: "Türkiye Geneli Şehirler Arası Uçak Kargo",
  phone: "0 212 234 00 70",
  phoneHref: "tel:+902122340070",
  phone2: "0535 622 02 02",
  phone2Href: "tel:+905356220202",
  whatsapp: "0535 509 20 20",
  whatsappHref: "https://wa.me/905355092020",
  email: "info@istanbulucakkargo.com",
  address: "Perpa Ticaret Merkezi A Blok Kat:6 No:602 Şişli / İSTANBUL",
};

export const nav = [
  { label: "Anasayfa", to: "/" as const },
  { label: "Hakkımızda", to: "/hakkimizda" as const },
  { label: "Hizmetler", to: "/hizmetler" as const },
  { label: "Rotalar", to: "/rotalar" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "İletişim", to: "/iletisim" as const },
  { label: "Otogar Kargo", to: "/otogar-kargo" as const },
];

export const routes = [
  { city: "Ankara", code: "ESB", slug: "istanbul-ankara-ucak-kargo" },
  { city: "İzmir", code: "ADB", slug: "istanbul-izmir-ucak-kargo" },
  { city: "Antalya", code: "AYT", slug: "istanbul-antalya-ucak-kargo" },
  { city: "Bodrum", code: "BJV", slug: "istanbul-bodrum-ucak-kargo" },
  { city: "Dalaman", code: "DLM", slug: "istanbul-dalaman-ucak-kargo" },
  { city: "Milas", code: "MLS", slug: "istanbul-milas-ucak-kargo" },
  { city: "Gaziantep", code: "GZT", slug: "istanbul-gaziantep-ucak-kargo" },
  { city: "Diyarbakır", code: "DIY", slug: "istanbul-diyarbakir-ucak-kargo" },
  { city: "Şanlıurfa", code: "GNY", slug: "istanbul-sanliurfa-ucak-kargo" },
  { city: "Kayseri", code: "ASR", slug: "istanbul-kayseri-ucak-kargo" },
  { city: "Konya", code: "KYA", slug: "istanbul-konya-ucak-kargo" },
  { city: "Alanya", code: "ALA", slug: "istanbul-alanya-ucak-kargo" },
  { city: "Batman", code: "BTM", slug: "istanbul-batman-ucak-kargo" },
  { city: "Siirt", code: "SXZ", slug: "istanbul-siirt-ucak-kargo" },
  { city: "Hatay", code: "HTY", slug: "istanbul-hatay-ucak-kargo" },
  { city: "Mardin", code: "MQM", slug: "istanbul-mardin-ucak-kargo" },
];

export const cargoClasses = [
  "Kurumsal ve Ticari Sevkiyat",
  "Bireysel Acil Gönderiler",
  "Periyodik Operasyon Gönderileri",
  "Resmi Kimlik ve Pasaport Evrakları",
  "Değerli ve Gizli Evrak",
  "Gıda Gönderileri",
  "Perakende ve E-ticaret Ürünleri",
  "Çek ve Finansal Evrak",
];

export const flow = [
  { step: "01", title: "Talep", text: "WhatsApp veya telefonla hızlı teklif alın." },
  { step: "02", title: "Kapıdan Alım", text: "Motorlu veya araçlı filo yönlendirmesi yapılır." },
  { step: "03", title: "Havalimanı", text: "Paket kabulü ve uçuş koordinasyonu tamamlanır." },
  { step: "04", title: "Uçuş", text: "Türkiye geneli uçak kargo aktarımı gerçekleşir." },
  { step: "05", title: "Teslimat", text: "Alım sonrası 3 saat içinde kapıda teslimat." },
];

export const shipmentTypes = [
  {
    no: "01",
    title: "Pasaport Gönderimi",
    what: "Pasaport, vize evrakı ve seyahat belgelerinin şehirler arası aktarımı.",
    who: "Bireysel müşteriler, seyahat acenteleri ve insan kaynakları ekipleri.",
    why: "Randevu ve uçuş saatine yetişmek için kısa transit süresi kritik önem taşır.",
  },
  {
    no: "02",
    title: "Kimlik Gönderimi",
    what: "Kimlik fotokopisi, nüfus kayıt örneği ve kişisel resmi belgeler.",
    who: "Bireysel müşteriler ve kurumsal insan kaynakları birimleri.",
    why: "Acil işlem ve başvuru süreçlerinde 3 saat içinde teslimat ihtiyacını karşılar.",
  },
  {
    no: "03",
    title: "Çek Gönderimi",
    what: "Çek, senet ve banka evrakının güvenli şehirler arası taşınması.",
    who: "Şirketler, mali müşavirler ve finans departmanları.",
    why: "Finansal evraklarda hız ve kontrollü teslimat; Ankara kurum koordinasyonu mümkün.",
  },
  {
    no: "04",
    title: "Resmi Evrak Teslimatı",
    what: "Resmi yazı, ihale dosyası, sözleşme ve kurumsal belge sevkiyatı.",
    who: "Kamu kurumları, hukuk büroları ve ihale ekipleri.",
    why: "Son teslim saatine yetişmesi gereken evraklarda uçak hattı belirleyici avantaj sağlar.",
  },
  {
    no: "05",
    title: "Ticari Gönderiler",
    what: "Yedek parça, mağaza transferi ve kurumsal paket sevkiyatları.",
    who: "Üretim, perakende ve distribütör firmalar.",
    why: "Üretim hattı ve satış operasyonunu durdurmadan hızlı şehirler arası lojistik.",
  },
  {
    no: "06",
    title: "Acil İş Gönderileri",
    what: "Sözleşme, teklif, proje dosyası ve gün içinde yetişmesi gereken iş paketleri.",
    who: "Satış, proje yönetimi ve operasyon ekipleri.",
    why: "Toplantı ve imza saatine yetişmek için 3 saat içinde uçak kargo planı.",
  },
  {
    no: "07",
    title: "Numune Gönderileri",
    what: "Ürün numunesi, test materyali ve kalite kontrol örnekleri.",
    who: "Üretim, Ar-Ge ve tedarik zinciri ekipleri.",
    why: "Numunenin gecikmesi üretim kararını durdurur; uçak kargo süreyi kısaltır.",
  },
  {
    no: "08",
    title: "Gıda Gönderileri",
    what: "Paketli gıda, özel ürün ve şehirler arası gıda sevkiyatları.",
    who: "Restoran, market, üretici ve bireysel müşteriler.",
    why: "Kısa transit süresi ile gıda gönderilerinde hızlı ve kontrollü taşıma planı.",
  },
];

export const testimonials = [
  {
    name: "Beraat Aral",
    text: "Niğde'ye gönderdiğimiz acil kargo beklediğimizden çok daha hızlı teslim edildi. Operasyon süreci boyunca bilgilendirme aldık ve tüm süreç profesyonel şekilde yönetildi.",
  },
  {
    name: "Oğuzhan Zenginoğlu",
    text: "Ankara'ya göndermemiz gereken acil evrak ve numune kargomuz vardı. Süreç beklediğimden hızlı ilerledi; uçuş ve teslimat adımları net şekilde paylaşıldı.",
  },
  {
    name: "Yakup Karaarslan",
    text: "Gönderimizin zamanında ulaşması bizim için çok kritikti. Süreç sorunsuz ilerledi ve tüm operasyon profesyonel şekilde yönetildi.",
  },
  {
    name: "Murat Yıldırım",
    text: "İstanbul çıkışlı gönderimiz aynı gün içerisinde teslim edildi. Hız, iletişim ve operasyon kalitesi beklentimizin üzerindeydi.",
  },
  {
    name: "Elif Demir",
    text: "Kurumsal gönderilerimiz için düzenli olarak hizmet alıyoruz. Süreçlerin planlı ilerlemesi ve hızlı geri dönüş almamız büyük avantaj sağlıyor.",
  },
  {
    name: "Merve Aydın",
    text: "Operasyon planlaması ve müşteri iletişimi oldukça başarılıydı. Gönderimiz sorunsuz şekilde teslim edildi.",
  },
];
