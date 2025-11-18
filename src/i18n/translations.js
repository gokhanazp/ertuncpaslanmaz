// Çok dilli destek sistemi - Yeni dil eklemek için bu dosyaya yeni bir dil objesi ekleyin
// Multi-language support system - To add a new language, add a new language object to this file

export const translations = {
  tr: {
    // Navigation - Navigasyon
    nav: {
      home: 'Anasayfa',
      about: 'Hakkımızda',
      products: 'Ürünler',
      blog: 'Blog',
      contact: 'İletişim'
    },
    
    // Home Page - Anasayfa
    home: {
      hero: {
        title: 'Endüstriyel Paslanmaz Çelik Çözümlerinde Uzman',
        subtitle: 'Kalite ve güvenilirlik odaklı, özel tasarım paslanmaz çelik ürünler',
        cta: 'Hizmetlerimizi Keşfedin'
      },
      services: {
        title: 'Hizmetlerimiz',
        subtitle: 'Endüstriyel ihtiyaçlarınız için kapsamlı çözümler',
        items: {
          tanks: {
            title: 'Depolama Tankları',
            description: 'Hijyenik ve dayanıklı paslanmaz çelik depolama tankları'
          },
          mixers: {
            title: 'Mikser ve Karıştırıcı Sistemleri',
            description: 'Yüksek performanslı karıştırma ve homojenizasyon sistemleri'
          },
          washing: {
            title: 'Karıştırıcı ve Yıkama Sistemleri',
            description: 'Endüstriyel temizlik ve yıkama çözümleri'
          },
          process: {
            title: 'Proses Elemanları',
            description: 'Özel tasarım proses ekipmanları ve bileşenleri'
          },
          conveyor: {
            title: 'Konveyör Sistemleri',
            description: 'Verimli malzeme taşıma ve transfer sistemleri'
          },
          platforms: {
            title: 'Platform ve Merdivenler',
            description: 'Güvenli erişim platformları ve endüstriyel merdivenler'
          },
          custom: {
            title: 'Özel Tasarımlar',
            description: 'İhtiyaçlarınıza özel mühendislik çözümleri'
          }
        }
      },
      references: {
        title: 'Referanslarımız',
        subtitle: 'Güvenilir iş ortaklarımız'
      }
    },
    
    // About Page - Hakkımızda
    about: {
      title: 'Hakkımızda',
      subtitle: 'Kalite ve güvenilirlik odaklı çözümler',
      content: 'Ertunç Paslanmaz, endüstriyel paslanmaz çelik ürünler konusunda uzman bir firmadır.'
    },
    
    // Products Page - Ürünler
    products: {
      title: 'Ürünlerimiz',
      subtitle: 'Geniş ürün yelpazesi ile hizmetinizdeyiz'
    },
    
    // Contact Page - İletişim
    contact: {
      title: 'İletişim',
      subtitle: 'Bizimle iletişime geçin',
      form: {
        name: 'Adınız Soyadınız',
        email: 'E-posta Adresiniz',
        phone: 'Telefon Numaranız',
        message: 'Mesajınız',
        send: 'Gönder'
      },
      info: {
        address: 'Adres',
        phone: 'Telefon',
        email: 'E-posta'
      }
    },
    
    // Footer
    footer: {
      rights: 'Tüm hakları saklıdır.',
      description: 'Endüstriyel paslanmaz çelik çözümlerinde güvenilir iş ortağınız'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      blog: 'Blog',
      contact: 'Contact'
    },
    
    // Home Page
    home: {
      hero: {
        title: 'Expert in Industrial Stainless Steel Solutions',
        subtitle: 'Quality and reliability focused, custom designed stainless steel products',
        cta: 'Discover Our Services'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive solutions for your industrial needs',
        items: {
          tanks: {
            title: 'Storage Tanks',
            description: 'Hygienic and durable stainless steel storage tanks'
          },
          mixers: {
            title: 'Mixer and Agitator Systems',
            description: 'High performance mixing and homogenization systems'
          },
          washing: {
            title: 'Mixing and Washing Systems',
            description: 'Industrial cleaning and washing solutions'
          },
          process: {
            title: 'Process Elements',
            description: 'Custom designed process equipment and components'
          },
          conveyor: {
            title: 'Conveyor Systems',
            description: 'Efficient material handling and transfer systems'
          },
          platforms: {
            title: 'Platforms and Stairs',
            description: 'Safe access platforms and industrial stairs'
          },
          custom: {
            title: 'Custom Designs',
            description: 'Engineering solutions tailored to your needs'
          }
        }
      },
      references: {
        title: 'Our References',
        subtitle: 'Our trusted business partners'
      }
    },
    
    // About Page
    about: {
      title: 'About Us',
      subtitle: 'Quality and reliability focused solutions',
      content: 'Ertunç Paslanmaz is a company specialized in industrial stainless steel products.'
    },
    
    // Products Page
    products: {
      title: 'Our Products',
      subtitle: 'At your service with a wide range of products'
    },
    
    // Contact Page
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Your Phone',
        message: 'Your Message',
        send: 'Send'
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email'
      }
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved.',
      description: 'Your trusted partner in industrial stainless steel solutions'
    }
  }
};

// Varsayılan dil - Default language
export const defaultLanguage = 'tr';

// Mevcut diller - Available languages
export const availableLanguages = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

