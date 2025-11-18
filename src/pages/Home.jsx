import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, Mail, Award, Users, Wrench, MessageCircle, HelpCircle, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * Anasayfa Bileşeni - Home Page Component
 * Hero, Hizmetler ve Referanslar bölümlerini içerir
 * Includes Hero, Services and References sections
 */
const Home = () => {
  const { t, language } = useLanguage();

  // References Slider state - Referanslar Slider durumu
  const [currentSlide, setCurrentSlide] = useState(0);

  // FAQ state - SSS durumu
  const [openFaq, setOpenFaq] = useState(null);

  // Hizmetler verisi - Services data (ikonlar ile)
  const services = [
    {
      id: 'tanks',
      icon: '/img/paslanmaz_tank-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Tank' : 'Stainless Steel Tank',
      description: t('home.services.items.tanks.description')
    },
    {
      id: 'mixers',
      icon: '/img/paslanmaz_mikser_karistirici_sistem-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/MikserTanki-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Mikser ve Karıştırıcı Sistemleri' : 'Stainless Steel Mixer and Agitator Systems',
      description: t('home.services.items.mixers.description')
    },
    {
      id: 'process',
      icon: '/img/paslanmaz_tank-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/PaslanmazIslemElemanlari-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Proses Elemanları' : 'Stainless Steel Process Elements',
      description: t('home.services.items.process.description')
    },
    {
      id: 'conveyor',
      icon: '/img/konveyor_sistem-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/Konveyor.jpg',
      title: language === 'tr' ? 'Konveyör Sistemleri' : 'Conveyor Systems',
      description: t('home.services.items.conveyor.description')
    },
    {
      id: 'washing',
      icon: '/img/paslanmaz_hijyen-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/2-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Hijyen ve Yıkama Sistemleri' : 'Stainless Steel Hygiene and Washing Systems',
      description: t('home.services.items.washing.description')
    },
    {
      id: 'platforms',
      icon: '/img/platform_merdiven-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/PaslanmazMerdivenVePlatform.jpg',
      title: language === 'tr' ? 'Platform ve Merdivenler' : 'Platforms and Stairs',
      description: t('home.services.items.platforms.description')
    }
  ];

  // Referanslar verisi - References data
  const references = [
    { name: 'Morfose', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/morfose-logo.png' },
    { name: 'Diversey', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/diversey-logo.png' },
    { name: 'Seyidoğlu', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/seyidoglu-logo.png' },
    { name: 'Ecolab', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/Ecolab-logo.png' },
    { name: 'Tunfer', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/tunfer-logo.png' },
    { name: 'United Cosmetic', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/unitedCosmetic-logo.svg' },
    { name: 'Meryem Deniz', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/Meryem-deniz-sat-1.jpg' },
    { name: 'Kırmızı Gül', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/kirmizigul-logo-1024x298.jpg' },
    { name: 'Reference 1', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2024/05/ref01-2-1024x248.png' },
    { name: 'Reference 4', logo: 'https://ertuncpaslanmaz.com/wp-content/uploads/2024/05/ref04-1-1024x248.png' }
  ];

  // Sıkça Sorulan Sorular - FAQ data
  const faqs = language === 'tr' ? [
    {
      question: 'Hangi sektörlere hizmet veriyorsunuz?',
      answer: 'Gıda, kozmetik, kimya, ilaç ve temizlik ürünleri sektörlerine endüstriyel paslanmaz çelik çözümleri sunuyoruz.'
    },
    {
      question: 'Özel tasarım ürün yapabiliyor musunuz?',
      answer: 'Evet, müşterilerimizin ihtiyaçlarına özel tasarım ve imalat hizmeti sunuyoruz. Uzman mühendislik ekibimiz projeleriniz için en uygun çözümü üretir.'
    },
    {
      question: 'Ürünlerinizin garantisi var mı?',
      answer: 'Tüm ürünlerimiz kalite garantisi ile birlikte gelir. Garanti süreleri ürün tipine göre değişiklik gösterir.'
    },
    {
      question: 'Montaj hizmeti veriyor musunuz?',
      answer: 'Evet, tüm ürünlerimiz için profesyonel montaj ve devreye alma hizmeti sunuyoruz.'
    },
    {
      question: 'Teslimat süresi ne kadar?',
      answer: 'Teslimat süresi ürün tipine ve özel tasarım gereksinimlerine göre değişir. Standart ürünler için ortalama 2-4 hafta, özel tasarımlar için 4-8 hafta sürmektedir.'
    }
  ] : [
    {
      question: 'Which sectors do you serve?',
      answer: 'We provide industrial stainless steel solutions to food, cosmetics, chemical, pharmaceutical and cleaning products sectors.'
    },
    {
      question: 'Can you make custom designed products?',
      answer: 'Yes, we offer custom design and manufacturing services tailored to our customers needs. Our expert engineering team produces the most suitable solution for your projects.'
    },
    {
      question: 'Do your products have warranty?',
      answer: 'All our products come with quality warranty. Warranty periods vary depending on the product type.'
    },
    {
      question: 'Do you provide installation service?',
      answer: 'Yes, we offer professional installation and commissioning services for all our products.'
    },
    {
      question: 'What is the delivery time?',
      answer: 'Delivery time varies depending on product type and custom design requirements. Average 2-4 weeks for standard products, 4-8 weeks for custom designs.'
    }
  ];

  // Slider otomatik geçiş - Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(references.length / 5));
    }, 3000);
    return () => clearInterval(timer);
  }, [references.length]);

  // Slider kontrolleri - Slider controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(references.length / 5));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(references.length / 5)) % Math.ceil(references.length / 5));
  };

  // FAQ toggle
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={language === 'tr' ? 'Paslanmaz Mikser, Stok Tank, Toz Mikseri, Depolama Tankı Üretimi' : 'Stainless Steel Mixer, Storage Tank, Powder Mixer Production'}
        description={language === 'tr'
          ? 'Paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses ve paslanmaz hijyen ekipmanları üretiminde Türkiye\'nin lider firması. 15+ yıllık deneyim, 500+ tamamlanmış proje, %100 müşteri memnuniyeti.'
          : 'Turkey\'s leading company in stainless steel mixer, storage tank, powder mixer, storage tank, stainless steel process and hygiene equipment production. 15+ years experience, 500+ completed projects, 100% customer satisfaction.'
        }
        keywords={language === 'tr'
          ? 'paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses, paslanmaz hijyen ekipmanları, paslanmaz çelik tank, endüstriyel mikser, gıda tankı, ilaç tankı, kimya tankı, paslanmaz konveyör, karıştırıcı tank, stok tankı, depolama sistemi, hijyen ekipmanları, proses tankı, paslanmaz çelik üretim, istanbul paslanmaz tank, türkiye paslanmaz mikser'
          : 'stainless steel mixer, stainless steel storage tank, powder mixer, storage tank, stainless steel process, stainless steel hygiene equipment, industrial mixer, food tank, pharmaceutical tank, chemical tank, stainless steel conveyor, mixing tank, stock tank, storage system, hygiene equipment, process tank, stainless steel production, istanbul stainless steel tank, turkey stainless steel mixer'
        }
      />

      {/* Hero Section - Ana Bölüm */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Arka Plan Resmi */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg)',
          }}
        ></div>

        {/* Dark Overlay - Koyu Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80"></div>

        {/* Animated Background Pattern - Animasyonlu Arka Plan Deseni */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10 py-20 pt-28 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - İçerik - Left Side - Content */}
            <div className="text-white animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                {language === 'tr' ? 'Paslanmaz Çelik Çözümlerinde' : 'Leader in Stainless Steel Solutions'}
                <span className="block text-primary-300 mt-2">
                  {language === 'tr' ? 'Öncü Firma' : 'Innovation & Quality'}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                {language === 'tr'
                  ? 'Endüstriyel paslanmaz çelik ekipman üretiminde 15 yılı aşkın deneyimimizle, kalite ve güvenilirliğin adresi.'
                  : 'With over 15 years of experience in industrial stainless steel equipment manufacturing, we are the address of quality and reliability.'
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={language === 'tr' ? '/urunler' : '/products'}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300"
                >
                  <span>{language === 'tr' ? 'Ürünlerimiz' : 'Our Products'}</span>
                  <ArrowRight size={24} />
                </Link>
                <Link
                  to={language === 'tr' ? '/iletisim' : '/contact'}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
                >
                  <span>{language === 'tr' ? 'İletişim' : 'Contact'}</span>
                </Link>
              </div>
            </div>

            {/* Sağ Taraf - İstatistikler - Right Side - Statistics */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary-300 mb-2">15+</div>
                <div className="text-gray-200 font-medium">
                  {language === 'tr' ? 'Yıllık Deneyim' : 'Years Experience'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary-300 mb-2">500+</div>
                <div className="text-gray-200 font-medium">
                  {language === 'tr' ? 'Tamamlanan Proje' : 'Completed Projects'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary-300 mb-2">100+</div>
                <div className="text-gray-200 font-medium">
                  {language === 'tr' ? 'Mutlu Müşteri' : 'Happy Clients'}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary-300 mb-2">7/24</div>
                <div className="text-gray-200 font-medium">
                  {language === 'tr' ? 'Destek Hizmeti' : 'Support Service'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Icons - Hızlı Hizmetler İkonları */}
      <section className="relative -mt-20 z-30">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  to={language === 'tr' ? '/urunler' : '/products'}
                  className="group flex flex-col items-center text-center"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* İkon - Icon */}
                  <div className="relative mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    {/* Dekoratif Nokta - Decorative Dot */}
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Başlık - Title (Tam metin, 2 satır) */}
                  <h3 className="text-xs md:text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight line-clamp-2 px-1">
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Hizmetler Bölümü (Temiz Tasarım) */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
              <Wrench size={18} className="text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">
                {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
              </span>
            </div>
            <h2 className="heading-2 mb-4">{t('home.services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('home.services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={language === 'tr' ? '/urunler' : '/products'}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Görsel - Image (Üstte, daha büyük) */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Numara Badge - Number Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Başlık - Title (Görsel üzerinde) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* İçerik - Content */}
                <div className="p-6">
                  {/* Açıklama - Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Alt Çizgi - Bottom Line */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-primary-600 font-semibold">
                      {language === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
                    </span>
                    <div className="w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300">
                      <ArrowRight size={18} className="text-primary-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect - Hover Kenarlık Efekti */}
                <div className="absolute inset-0 border-2 border-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Hakkımızda Bölümü */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sol Taraf - Görsel - Left Side - Image */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-50"></div>
              <div className="relative grid grid-cols-2 gap-4">
                <img
                  src="https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg"
                  alt="Ertunç Paslanmaz"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/MikserTanki-scaled.jpg"
                  alt="Ertunç Paslanmaz"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
                <img
                  src="https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/PaslanmazIslemElemanlari-scaled.jpg"
                  alt="Ertunç Paslanmaz"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover -mt-8"
                />
                <img
                  src="https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/Konveyor.jpg"
                  alt="Ertunç Paslanmaz"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Sağ Taraf - İçerik - Right Side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
                <Award size={18} className="text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">
                  {language === 'tr' ? 'Hakkımızda' : 'About Us'}
                </span>
              </div>

              <h2 className="heading-2 mb-6">
                {language === 'tr'
                  ? 'Endüstriyel Paslanmaz Çelik Çözümlerinde Güvenilir İş Ortağınız'
                  : 'Your Reliable Partner in Industrial Stainless Steel Solutions'
                }
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {language === 'tr'
                  ? 'Ertunç Paslanmaz, yılların deneyimi ile endüstriyel paslanmaz çelik ürünler konusunda uzmanlaşmış, kalite ve güvenilirlik odaklı bir firmadır.'
                  : 'Ertunç Paslanmaz is a company specialized in industrial stainless steel products with years of experience, focused on quality and reliability.'
                }
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {language === 'tr'
                  ? 'Depolama tankları, mikser sistemleri, konveyör sistemleri ve özel tasarım ürünler başta olmak üzere geniş bir ürün yelpazesi ile hizmet vermekteyiz. Her projede müşteri memnuniyetini ön planda tutarak, ihtiyaçlara özel çözümler üretiyoruz.'
                  : 'We serve with a wide range of products including storage tanks, mixer systems, conveyor systems and custom designed products. In every project, we prioritize customer satisfaction and produce solutions tailored to needs.'
                }
              </p>

              {/* Özellikler - Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <CheckCircle size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Yüksek Kalite' : 'High Quality'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'tr' ? 'En iyi malzemeler' : 'Best materials'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Uzman Ekip' : 'Expert Team'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'tr' ? 'Deneyimli profesyoneller' : 'Experienced professionals'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Wrench size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Özel Çözümler' : 'Custom Solutions'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'tr' ? 'İhtiyaca özel tasarım' : 'Tailored design'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Garanti' : 'Warranty'}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {language === 'tr' ? 'Kalite garantisi' : 'Quality guarantee'}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to={language === 'tr' ? '/hakkimizda' : '/about'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>{language === 'tr' ? 'Daha Fazla Bilgi' : 'Learn More'}</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* References Section - Referanslar Bölümü (Slider) */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
              <Award size={18} className="text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">
                {language === 'tr' ? 'Referanslarımız' : 'Our References'}
              </span>
            </div>
            <h2 className="heading-2 mb-4">{t('home.references.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.references.subtitle')}</p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(references.length / 5) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center px-4">
                      {references.slice(slideIndex * 5, (slideIndex + 1) * 5).map((reference, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 transform hover:scale-105"
                        >
                          <img
                            src={reference.logo}
                            alt={reference.name}
                            className="max-h-16 w-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Navigasyon Butonları */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-200 z-10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator - Nokta Göstergesi */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(references.length / 5) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Sıkça Sorulan Sorular */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sol Taraf - FAQ */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
                <HelpCircle size={18} className="text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">
                  {language === 'tr' ? 'Sıkça Sorulan Sorular' : 'FAQ'}
                </span>
              </div>

              <h2 className="heading-2 mb-6">
                {language === 'tr'
                  ? 'Merak Ettikleriniz'
                  : 'Frequently Asked Questions'
                }
              </h2>

              <p className="text-gray-600 mb-8">
                {language === 'tr'
                  ? 'En çok sorulan sorulara yanıtlar. Daha fazla bilgi için bizimle iletişime geçebilirsiniz.'
                  : 'Answers to the most frequently asked questions. Contact us for more information.'
                }
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <div className={`flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}>
                        {openFaq === index ? (
                          <Minus size={18} className="text-primary-600" />
                        ) : (
                          <Plus size={18} className="text-primary-600" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ Taraf - Hızlı İletişim */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-4">
                <MessageCircle size={18} className="text-primary-600" />
                <span className="text-sm font-semibold text-primary-600">
                  {language === 'tr' ? 'Hızlı İletişim' : 'Quick Contact'}
                </span>
              </div>

              <h2 className="heading-2 mb-6">
                {language === 'tr'
                  ? 'Bizimle İletişime Geçin'
                  : 'Get In Touch'
                }
              </h2>

              <p className="text-gray-600 mb-8">
                {language === 'tr'
                  ? 'Projeleriniz için en uygun çözümü birlikte bulalım. Uzman ekibimiz size yardımcı olmak için hazır.'
                  : 'Let\'s find the best solution for your projects together. Our expert team is ready to help you.'
                }
              </p>

              {/* İletişim Kartları - Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Telefon */}
                <a
                  href="tel:+902126721017"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Telefon' : 'Phone'}
                    </h4>
                    <p className="text-primary-600 font-semibold text-lg">
                      (0212) 672 1017
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'tr' ? 'Hemen arayın' : 'Call now'}
                    </p>
                  </div>
                </a>

                {/* E-posta */}
                <a
                  href="mailto:info@ertuncpaslanmaz.com"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'E-posta' : 'Email'}
                    </h4>
                    <p className="text-primary-600 font-semibold">
                      info@ertuncpaslanmaz.com
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {language === 'tr' ? 'Mesaj gönderin' : 'Send message'}
                    </p>
                  </div>
                </a>

                {/* Adres */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl">
                  <div className="flex-shrink-0 w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {language === 'tr' ? 'Adres' : 'Address'}
                    </h4>
                    <p className="text-gray-700">
                      Selahaddin Eyyubi Mahallesi<br />
                      1633. Sokak No:8<br />
                      Esenyurt / İstanbul
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to={language === 'tr' ? '/iletisim' : '/contact'}
                className="block w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {language === 'tr' ? 'İletişim Formu' : 'Contact Form'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

