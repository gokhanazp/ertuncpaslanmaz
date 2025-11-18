import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * Hakkımızda Sayfası - About Us Page
 * Şirket bilgileri, değerler ve vizyonu içerir
 * Includes company information, values and vision
 */
const About = () => {
  const { t, language } = useLanguage();

  // Şirket değerleri - Company values
  const values = [
    {
      icon: Award,
      title: language === 'tr' ? 'Kalite' : 'Quality',
      description: language === 'tr' 
        ? 'En yüksek kalite standartlarında üretim yapıyoruz'
        : 'We manufacture to the highest quality standards'
    },
    {
      icon: Users,
      title: language === 'tr' ? 'Müşteri Odaklılık' : 'Customer Focus',
      description: language === 'tr'
        ? 'Müşteri memnuniyeti bizim önceliğimizdir'
        : 'Customer satisfaction is our priority'
    },
    {
      icon: Target,
      title: language === 'tr' ? 'Güvenilirlik' : 'Reliability',
      description: language === 'tr'
        ? 'Sözümüzün arkasında duruyoruz'
        : 'We stand behind our word'
    },
    {
      icon: TrendingUp,
      title: language === 'tr' ? 'İnovasyon' : 'Innovation',
      description: language === 'tr'
        ? 'Sürekli gelişim ve yenilikçi çözümler'
        : 'Continuous improvement and innovative solutions'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO 
        title={t('about.title')}
        description={language === 'tr'
          ? 'Ertunç Paslanmaz hakkında bilgi edinin. Kalite ve güvenilirlik odaklı endüstriyel paslanmaz çelik çözümleri.'
          : 'Learn about Ertunç Paslanmaz. Quality and reliability focused industrial stainless steel solutions.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>

        {/* Content - İçerik */}
        <div className="container-custom relative z-10 text-center text-white py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* About Content - Hakkımızda İçeriği */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Sol Taraf - Görsel - Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg"
                  alt="Ertunç Paslanmaz Fabrika"
                  className="w-full h-auto"
                />
              </div>
              {/* Dekoratif Element - Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-100 rounded-2xl -z-10"></div>
            </div>

            {/* Sağ Taraf - İçerik - Right Side - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6">
                <span className="text-sm font-semibold">
                  {language === 'tr' ? '15+ Yıllık Deneyim' : '15+ Years Experience'}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {language === 'tr' ? 'Biz Kimiz?' : 'Who We Are?'}
              </h2>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  {language === 'tr'
                    ? 'Ertunç Paslanmaz, endüstriyel paslanmaz çelik ürünler konusunda uzmanlaşmış, kalite ve güvenilirlik odaklı bir firmadır. Yılların deneyimi ile müşterilerimize en iyi hizmeti sunmayı hedefliyoruz.'
                    : 'Ertunç Paslanmaz is a company specialized in industrial stainless steel products, focused on quality and reliability. With years of experience, we aim to provide the best service to our customers.'
                  }
                </p>
                <p>
                  {language === 'tr'
                    ? 'Depolama tankları, mikser sistemleri, konveyör sistemleri ve özel tasarım ürünler başta olmak üzere geniş bir ürün yelpazesi ile hizmet vermekteyiz. Her projede müşteri memnuniyetini ön planda tutarak, ihtiyaçlara özel çözümler üretiyoruz.'
                    : 'We serve with a wide range of products including storage tanks, mixer systems, conveyor systems and custom designed products. In every project, we prioritize customer satisfaction and produce solutions tailored to needs.'
                  }
                </p>
                <p>
                  {language === 'tr'
                    ? 'Modern üretim tesisimiz ve uzman ekibimiz ile sektörde öncü konumdayız. Kalite kontrol süreçlerimiz ve müşteri odaklı yaklaşımımız ile güvenilir bir iş ortağı olarak yanınızdayız.'
                    : 'We are a leader in the industry with our modern production facility and expert team. With our quality control processes and customer-oriented approach, we are with you as a reliable business partner.'
                  }
                </p>
              </div>

              {/* İstatistikler - Statistics */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Proje' : 'Projects'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Müşteri' : 'Clients'}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                  <div className="text-sm text-gray-600">
                    {language === 'tr' ? 'Yıl' : 'Years'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Değerlerimiz Bölümü */}
      <section className="section bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
              <span className="text-sm font-semibold text-primary-600">
                {language === 'tr' ? 'Değerlerimiz' : 'Our Values'}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {language === 'tr' ? 'Başarımızın Temelleri' : 'Foundation of Our Success'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Her projede bu değerlerle hareket ediyor, müşterilerimize en iyi hizmeti sunuyoruz'
                : 'We act with these values in every project and provide the best service to our customers'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Harekete Geçirici Bölüm */}
      <section className="relative section overflow-hidden">
        {/* Background Pattern - Arka Plan Deseni */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'tr'
              ? 'Projeleriniz için bizimle iletişime geçin'
              : 'Contact us for your projects'
            }
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-50 max-w-3xl mx-auto">
            {language === 'tr'
              ? 'Uzman ekibimiz size en uygun çözümü sunmak için hazır. Hemen iletişime geçin ve projelerinizi hayata geçirelim.'
              : 'Our expert team is ready to offer you the most suitable solution. Contact us now and let\'s bring your projects to life.'
            }
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to={language === 'tr' ? '/iletisim' : '/contact'}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl hover:bg-primary-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>{t('nav.contact')}</span>
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

export default About;

