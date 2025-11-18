import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * Ürünler Sayfası - Products Page
 * Tüm ürün ve hizmetlerin detaylı listesi
 * Detailed list of all products and services
 */
const Products = () => {
  const { t, language } = useLanguage();

  // Ürünler verisi - Products data (ikonlar ile)
  const products = [
    {
      id: 'tanks',
      icon: '/img/paslanmaz_tank-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Tank' : 'Stainless Steel Tank',
      description: t('home.services.items.tanks.description'),
      features: language === 'tr'
        ? ['Hijyenik tasarım', 'Dayanıklı yapı', 'Özel kapasite seçenekleri', 'Kolay temizlenebilir']
        : ['Hygienic design', 'Durable structure', 'Custom capacity options', 'Easy to clean']
    },
    {
      id: 'mixers',
      icon: '/img/paslanmaz_mikser_karistirici_sistem-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/MikserTanki-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Mikser ve Karıştırıcı Sistemleri' : 'Stainless Steel Mixer and Agitator Systems',
      description: t('home.services.items.mixers.description'),
      features: language === 'tr'
        ? ['Yüksek performans', 'Homojen karışım', 'Enerji verimliliği', 'Sessiz çalışma']
        : ['High performance', 'Homogeneous mixing', 'Energy efficiency', 'Quiet operation']
    },
    {
      id: 'process',
      icon: '/img/paslanmaz_tank-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/PaslanmazIslemElemanlari-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Proses Elemanları' : 'Stainless Steel Process Elements',
      description: t('home.services.items.process.description'),
      features: language === 'tr'
        ? ['Özel tasarım', 'Yüksek kalite', 'Uzun ömürlü', 'Kolay montaj']
        : ['Custom design', 'High quality', 'Long lasting', 'Easy installation']
    },
    {
      id: 'conveyor',
      icon: '/img/konveyor_sistem-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/Konveyor.jpg',
      title: language === 'tr' ? 'Konveyör Sistemleri' : 'Conveyor Systems',
      description: t('home.services.items.conveyor.description'),
      features: language === 'tr'
        ? ['Verimli taşıma', 'Modüler yapı', 'Düşük bakım', 'Güvenli çalışma']
        : ['Efficient transport', 'Modular structure', 'Low maintenance', 'Safe operation']
    },
    {
      id: 'washing',
      icon: '/img/paslanmaz_hijyen-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/2-scaled.jpg',
      title: language === 'tr' ? 'Paslanmaz Hijyen ve Yıkama Sistemleri' : 'Stainless Steel Hygiene and Washing Systems',
      description: t('home.services.items.washing.description'),
      features: language === 'tr'
        ? ['Etkili temizlik', 'Su tasarrufu', 'Otomatik kontrol', 'Hijyenik yıkama']
        : ['Effective cleaning', 'Water saving', 'Automatic control', 'Hygienic washing']
    },
    {
      id: 'platforms',
      icon: '/img/platform_merdiven-150x150.png',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/PaslanmazMerdivenVePlatform.jpg',
      title: language === 'tr' ? 'Platform ve Merdivenler' : 'Platforms and Stairs',
      description: t('home.services.items.platforms.description'),
      features: language === 'tr'
        ? ['Güvenli erişim', 'Sağlam yapı', 'Korozyona dayanıklı', 'Özel ölçüler']
        : ['Safe access', 'Solid structure', 'Corrosion resistant', 'Custom sizes']
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={language === 'tr' ? 'Paslanmaz Mikser, Stok Tank, Toz Mikseri - Ürünlerimiz' : 'Stainless Steel Mixer, Storage Tank, Powder Mixer - Our Products'}
        description={language === 'tr'
          ? 'Paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses elemanları, paslanmaz hijyen ekipmanları ve konveyör sistemleri. Gıda, ilaç, kimya endüstrisi için özel çözümler. ISO 9001 sertifikalı üretim.'
          : 'Stainless steel mixer, storage tank, powder mixer, storage tank, stainless steel process elements, hygiene equipment and conveyor systems. Custom solutions for food, pharmaceutical, chemical industries. ISO 9001 certified production.'
        }
        keywords={language === 'tr'
          ? 'paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses, paslanmaz hijyen ekipmanları, gıda tankı, ilaç tankı, kimya tankı, karıştırıcı tank, stok tankı, proses tankı, konveyör sistemi, hijyen ekipmanları, paslanmaz çelik ürünler, endüstriyel tank, mikser sistemi'
          : 'stainless steel mixer, storage tank, powder mixer, storage tank, stainless steel process, hygiene equipment, food tank, pharmaceutical tank, chemical tank, mixing tank, stock tank, process tank, conveyor system, hygiene equipment, stainless steel products, industrial tank, mixer system'
        }
      />

      {/* Page Header - Sayfa Başlığı */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image - Arka Plan Resmi */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg)',
          }}
        ></div>

        {/* Dark Overlay - Koyu Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80"></div>

        {/* Animated Background Patterns - Animasyonlu Arka Plan Desenleri */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float-delayed"></div>
        </div>

        {/* Content - İçerik */}
        <div className="container-custom relative z-10 text-center text-white py-20">
          <div className="inline-block px-4 py-2 bg-primary-600/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-primary-400/30 animate-fade-in">
            {language === 'tr' ? '🏭 Ürün Kataloğu' : '🏭 Product Catalog'}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('products.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('products.subtitle')}
          </p>

          {/* Stats - İstatistikler */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-400">7+</div>
              <div className="text-sm text-gray-300 mt-1">
                {language === 'tr' ? 'Ürün Kategorisi' : 'Product Categories'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-gray-300 mt-1">
                {language === 'tr' ? 'Tamamlanan Proje' : 'Completed Projects'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-400">100%</div>
              <div className="text-sm text-gray-300 mt-1">
                {language === 'tr' ? 'Kalite Garantisi' : 'Quality Guarantee'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-400">15+</div>
              <div className="text-sm text-gray-300 mt-1">
                {language === 'tr' ? 'Yıllık Deneyim' : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Ürünler Listesi */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Görsel Tarafı - Image Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative group">
                    {/* Dekoratif Arka Plan - Decorative Background */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${
                      index % 2 === 0
                        ? 'from-primary-200 to-primary-300'
                        : 'from-orange-200 to-amber-300'
                    } rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>

                    <img
                      src={product.image}
                      alt={product.title}
                      className="relative rounded-2xl shadow-2xl w-full h-96 object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Ürün Numarası Badge - Product Number Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg font-bold text-primary-600">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* İçerik Tarafı - Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  {/* İkon ve Başlık - Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${
                      index % 2 === 0
                        ? 'from-primary-500 to-primary-600'
                        : 'from-orange-500 to-amber-600'
                    } rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <img
                        src={product.icon}
                        alt={product.title}
                        className="w-10 h-10 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.title}</h2>
                      <div className={`h-1 w-20 bg-gradient-to-r ${
                        index % 2 === 0
                          ? 'from-primary-600 to-primary-400'
                          : 'from-orange-500 to-amber-500'
                      } rounded-full`}></div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">{product.description}</p>

                  {/* Özellikler - Features */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2 mb-4">
                      <div className={`w-2 h-2 rounded-full ${
                        index % 2 === 0 ? 'bg-primary-600' : 'bg-orange-500'
                      }`}></div>
                      {language === 'tr' ? 'Özellikler' : 'Features'}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-orange-50 transition-all duration-300 group"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                            index % 2 === 0
                              ? 'bg-primary-100 text-primary-600'
                              : 'bg-orange-100 text-orange-600'
                          } group-hover:scale-110 transition-transform duration-300`}>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Harekete Geçirici Bölüm */}
      <section className="relative section overflow-hidden">
        {/* Background Pattern - Arka Plan Deseni */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
            {language === 'tr' ? '💬 Bizimle İletişime Geçin' : '💬 Contact Us'}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'tr'
              ? 'Ürünlerimiz hakkında daha fazla bilgi almak ister misiniz?'
              : 'Would you like to learn more about our products?'
            }
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-primary-50 max-w-3xl mx-auto">
            {language === 'tr'
              ? 'Uzman ekibimiz size en uygun çözümü sunmak için hazır. Projeleriniz için bizimle iletişime geçin.'
              : 'Our expert team is ready to offer you the most suitable solution. Contact us for your projects.'
            }
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={language === 'tr' ? '/iletisim' : '/contact'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl hover:bg-primary-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>{language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}</span>
              <ArrowRight size={24} />
            </Link>
            <a
              href="tel:+902126721017"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              <span>{language === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

