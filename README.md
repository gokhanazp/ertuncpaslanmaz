# Ertunç Paslanmaz Web Sitesi

Modern, SEO uyumlu ve çok dilli React web sitesi.

## 🚀 Özellikler

- ✅ **React 18** - Modern React ile geliştirildi
- ✅ **Vite** - Hızlı geliştirme ve build
- ✅ **Tailwind CSS** - Modern ve responsive tasarım
- ✅ **Lucide React** - Yeni nesil modern ikonlar
- ✅ **SEO Optimizasyonu** - React Helmet ile meta tags, Open Graph, Twitter Cards
- ✅ **Çok Dilli Destek** - Türkçe ve İngilizce (kolay genişletilebilir)
- ✅ **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ✅ **Modern UI/UX** - Kullanıcı dostu arayüz

## 📁 Proje Yapısı

```
ertuncpaslanmaz/
├── src/
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── Header.jsx      # Üst menü ve navigasyon
│   │   ├── Footer.jsx      # Alt bilgi
│   │   └── SEO.jsx         # SEO meta tags bileşeni
│   ├── pages/              # Sayfa bileşenleri
│   │   ├── Home.jsx        # Anasayfa
│   │   ├── About.jsx       # Hakkımızda
│   │   ├── Products.jsx    # Ürünler
│   │   └── Contact.jsx     # İletişim
│   ├── i18n/               # Çok dilli destek
│   │   ├── translations.js # Çeviri dosyası
│   │   └── LanguageContext.jsx # Dil context'i
│   ├── App.jsx             # Ana uygulama
│   ├── main.jsx            # Giriş noktası
│   └── index.css           # Global stiller
├── public/
│   └── logo-1.png          # Logo dosyası
├── index.html              # HTML şablonu
├── package.json            # Bağımlılıklar
├── vite.config.js          # Vite yapılandırması
├── tailwind.config.js      # Tailwind yapılandırması
└── postcss.config.js       # PostCSS yapılandırması
```

## 🛠️ Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Build'i önizle
npm run preview
```

## 🌐 Sayfalar

- **Anasayfa** (`/`) - Hero, Hizmetler ve Referanslar
- **Hakkımızda** (`/about`) - Şirket bilgileri ve değerler
- **Ürünler** (`/products`) - Ürün ve hizmet detayları
- **İletişim** (`/contact`) - İletişim formu ve bilgileri

## 🌍 Çok Dilli Destek

Yeni bir dil eklemek için:

1. `src/i18n/translations.js` dosyasını açın
2. Yeni dil kodunu ekleyin (örn: `de` Almanca için)
3. Tüm çevirileri ekleyin
4. `availableLanguages` dizisine yeni dili ekleyin

Örnek:
```javascript
export const translations = {
  tr: { /* Türkçe çeviriler */ },
  en: { /* İngilizce çeviriler */ },
  de: { /* Almanca çeviriler - YENİ */ }
};

export const availableLanguages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' } // YENİ
];
```

## 🎨 Tema Özelleştirme

Renkleri özelleştirmek için `tailwind.config.js` dosyasındaki `colors` bölümünü düzenleyin:

```javascript
colors: {
  primary: {
    // Logo renklerinize göre özelleştirin
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

## 📱 İletişim Bilgileri

- **Adres:** Selahaddin Eyyubi Mahallesi 1633. Sokak No:8 Esenyurt / İstanbul
- **Telefon:** (0212) 672 1017
- **E-posta:** info@ertuncpaslanmaz.com

## 🔧 Teknolojiler

- React 18.3.1
- Vite 5.3.1
- Tailwind CSS 3.4.4
- React Router DOM 6.26.0
- React Helmet Async 2.0.5
- Lucide React 0.400.0

## 📄 Lisans

© 2024 Ertunç Paslanmaz. Tüm hakları saklıdır.

