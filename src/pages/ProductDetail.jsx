import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * Ürün Detay Sayfası - Product Detail Page
 * Paslanmaz Tank ve diğer ürünler için detaylı bilgi sayfası
 * SEO-friendly URL slugs that change with language
 */
const ProductDetail = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // URL Slug Mapping - Türkçe ve İngilizce slug'lar
  // Turkish and English URL slugs for SEO
  const slugMapping = {
    'paslanmaz-tank': {
      tr: 'paslanmaz-tank',
      en: 'stainless-steel-tank',
      id: 'tanks'
    },
    'stainless-steel-tank': {
      tr: 'paslanmaz-tank',
      en: 'stainless-steel-tank',
      id: 'tanks'
    }
  };

  // Mevcut slug'dan ürün ID'sini bul - Find product ID from current slug
  const currentProduct = slugMapping[slug];

  // Dil değiştiğinde URL'yi güncelle - Update URL when language changes
  useEffect(() => {
    if (currentProduct) {
      const correctSlug = currentProduct[language];
      const basePath = language === 'tr' ? '/urunler' : '/products';
      const correctPath = `${basePath}/${correctSlug}`;

      // Eğer mevcut URL doğru değilse, yönlendir
      // If current URL is not correct, redirect
      if (location.pathname !== correctPath) {
        navigate(correctPath, { replace: true });
      }
    }
  }, [language, slug, currentProduct, navigate, location.pathname]);

  // Paslanmaz Tank İçeriği - Stainless Steel Tank Content
  const paslanmazTankContent = {
    slugTr: 'paslanmaz-tank',
    slugEn: 'stainless-steel-tank',
    title: language === 'tr' ? 'Paslanmaz Tank' : 'Stainless Steel Tank',
    mainImage: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
    description: language === 'tr'
      ? 'ERTUNÇ PASLANMAZ MAKİNE SAN.VE DIŞ TİC.AŞ. olarak paslanmaz tank imalatında Sanayi, Kozmetik, Kimya, İlaç ve Gıda gibi çeşitli sektörlerin ihtiyaç duyacağı dikey ve yatay silindirik, üstü açık ve üstü kapalı; düz taban, koni taban, eğim taban ve çanak taban şekillerde paslanmaz tank imalatı yapmaktayız.'
      : 'As ERTUNÇ PASLANMAZ MAKİNE SAN.VE DIŞ TİC.AŞ., we manufacture stainless steel tanks in vertical and horizontal cylindrical, open top and closed top; flat bottom, cone bottom, slope bottom and dish bottom shapes for various sectors such as Industry, Cosmetics, Chemistry, Pharmaceuticals and Food.',
    features: language === 'tr' ? [
      'Her sektöre uygun AISI 304-316 kalite paslanmaz çelikten sacdan imal edilebilmektedir.',
      'Dikey veya yatay şekillerde cidarlı veya cidarsız imal edilebilmektedir.',
      'Sızdırma yapmaz, paslanmaya ve korozyona karşı dayanıklıdır.',
      'İstenilen boyutlarda paslanmaz tank imalatı yapılabilmektedir.',
      'Birden fazla tank arası bağlantıya uygundur, sorunsuz şekilde bir arada çalışabilir.',
      'Tank girişlerine istenilen ölçülerde menhol koyulabilir.',
      'İstenilen yerde imalat yapılabilir.',
      'Seviye göstergesi ve tank çıkışları mevcuttur.'
    ] : [
      'Can be manufactured from AISI 304-316 quality stainless steel sheet suitable for every sector.',
      'Can be manufactured vertically or horizontally with or without jacket.',
      'Does not leak, resistant to rust and corrosion.',
      'Stainless steel tank manufacturing can be done in desired sizes.',
      'Suitable for connection between multiple tanks, can work together without problems.',
      'Manholes of desired sizes can be placed at tank entrances.',
      'Can be manufactured at the desired location.',
      'Level indicator and tank outlets are available.'
    ],
    variants: language === 'tr' ? [
      {
        name: 'Paslanmaz Stoklama Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Endüstriyel stoklama için ideal paslanmaz tank çözümü'
      },
      {
        name: 'Paslanmaz Depolama Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Güvenli ve hijyenik depolama için paslanmaz tank'
      },
      {
        name: 'Paslanmaz Yağ Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Yağ depolama ve işleme için özel tasarım tank'
      },
      {
        name: 'Paslanmaz Su Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Hijyenik su depolama için paslanmaz çelik tank'
      },
      {
        name: 'Paslanmaz Su Depolama Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Büyük kapasiteli su depolama çözümü'
      },
      {
        name: 'Paslanmaz Oksidan Hazırlama Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Kimyasal oksidan hazırlama için özel tank'
      },
      {
        name: 'Paslanmaz Solvent Hazırlama Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Solvent hazırlama ve depolama tankı'
      },
      {
        name: 'Paslanmaz Yağ Eritme Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Yağ eritme işlemleri için ısıtmalı tank'
      },
      {
        name: 'Paslanmaz Yağ Ayırma Tankı',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Yağ-su ayırma işlemleri için özel tank'
      }
    ] : [
      {
        name: 'Stainless Steel Storage Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Ideal stainless steel tank solution for industrial storage'
      },
      {
        name: 'Stainless Steel Storage Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Stainless steel tank for safe and hygienic storage'
      },
      {
        name: 'Stainless Steel Oil Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Special design tank for oil storage and processing'
      },
      {
        name: 'Stainless Steel Water Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Stainless steel tank for hygienic water storage'
      },
      {
        name: 'Stainless Steel Water Storage Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Large capacity water storage solution'
      },
      {
        name: 'Stainless Steel Oxidant Preparation Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Special tank for chemical oxidant preparation'
      },
      {
        name: 'Stainless Steel Solvent Preparation Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Solvent preparation and storage tank'
      },
      {
        name: 'Stainless Steel Oil Melting Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Heated tank for oil melting processes'
      },
      {
        name: 'Stainless Steel Oil Separation Tank',
        image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
        description: 'Special tank for oil-water separation processes'
      }
    ]
  };

  // Ürün bulunamadı kontrolü - Product not found check
  if (!currentProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Ürün Bulunamadı' : 'Product Not Found'}
          </h1>
          <Link
            to={language === 'tr' ? '/urunler' : '/products'}
            className="text-primary-600 hover:text-primary-700 font-semibold"
          >
            {language === 'tr' ? 'Ürünler Sayfasına Dön' : 'Back to Products'}
          </Link>
        </div>
      </div>
    );
  }

  const product = paslanmazTankContent;

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={product.title}
        description={product.description}
        keywords={language === 'tr'
          ? 'paslanmaz tank, stoklama tankı, depolama tankı, yağ tankı, su tankı, oksidan tankı, solvent tankı, paslanmaz çelik tank'
          : 'stainless steel tank, storage tank, oil tank, water tank, oxidant tank, solvent tank'
        }
      />

      {/* Hero Section - Ürün Başlığı */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-28 md:pt-32">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${product.mainImage})`,
            backgroundPosition: 'center 40%',
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80"></div>

        <div className="container-custom relative z-10 text-center text-white py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {product.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            {language === 'tr'
              ? 'Endüstriyel Paslanmaz Çelik Tank Çözümleri'
              : 'Industrial Stainless Steel Tank Solutions'}
          </p>
        </div>
      </section>

      {/* Ana İçerik - Main Content */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          {/* Geri Dön Butonu - Back Button */}
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>{language === 'tr' ? 'Geri Dön' : 'Go Back'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Sol Taraf - Ürün Görseli */}
            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Sağ Taraf - Ürün Açıklaması */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {language === 'tr' ? 'Ürün Açıklaması' : 'Product Description'}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Özellikler - Features */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {language === 'tr' ? 'Paslanmaz Tank Özellikleri' : 'Stainless Steel Tank Features'}
                </h3>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <p className="text-gray-700 leading-relaxed flex-1">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Butonları - CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="tel:+902126721017"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-4 px-6 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone size={20} />
                  <span>{language === 'tr' ? 'Hemen Ara' : 'Call Now'}</span>
                </a>
                <Link
                  to={language === 'tr' ? '/iletisim' : '/contact'}
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail size={20} />
                  <span>{language === 'tr' ? 'Teklif Al' : 'Get Quote'}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tank Çeşitleri - Tank Variants */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {language === 'tr'
                  ? 'Firmamızın Üretmiş Olduğu Paslanmaz Tank Çeşitleri'
                  : 'Our Stainless Steel Tank Varieties'}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {language === 'tr'
                  ? 'Her sektörün ihtiyacına uygun özel tasarım paslanmaz tank çözümleri'
                  : 'Custom designed stainless steel tank solutions suitable for every sector'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.variants.map((variant, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {variant.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {variant.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Harekete Geçirici Bölüm */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-orange-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {language === 'tr'
              ? 'Projeniz İçin Özel Çözüm mü Arıyorsunuz?'
              : 'Looking for a Custom Solution for Your Project?'}
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            {language === 'tr'
              ? 'Uzman ekibimiz size en uygun paslanmaz tank çözümünü sunmak için hazır.'
              : 'Our expert team is ready to offer you the most suitable stainless steel tank solution.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+902126721017"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Phone size={24} />
              <span>(0212) 672 1017</span>
            </a>
            <Link
              to={language === 'tr' ? '/iletisim' : '/contact'}
              className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Mail size={24} />
              <span>{language === 'tr' ? 'Teklif İste' : 'Request Quote'}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

