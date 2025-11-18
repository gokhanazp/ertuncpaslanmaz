import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * Blog Sayfası - Blog Page
 * Blog yazıları ve kategoriler
 * Blog posts and categories
 */
const Blog = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Blog kategorileri - Blog categories
  const categories = [
    { id: 'all', name: language === 'tr' ? 'Tümü' : 'All' },
    { id: 'industry', name: language === 'tr' ? 'Endüstri' : 'Industry' },
    { id: 'technology', name: language === 'tr' ? 'Teknoloji' : 'Technology' },
    { id: 'maintenance', name: language === 'tr' ? 'Bakım' : 'Maintenance' },
    { id: 'news', name: language === 'tr' ? 'Haberler' : 'News' }
  ];

  // Blog yazıları - Blog posts
  const blogPosts = [
    {
      id: 1,
      slug: language === 'tr' ? 'paslanmaz-celik-tanklarin-bakimi-ve-temizligi' : 'maintenance-and-cleaning-of-stainless-steel-tanks',
      title: language === 'tr'
        ? 'Paslanmaz Çelik Tankların Bakımı ve Temizliği'
        : 'Maintenance and Cleaning of Stainless Steel Tanks',
      excerpt: language === 'tr'
        ? 'Paslanmaz çelik tankların uzun ömürlü olması için düzenli bakım ve temizlik çok önemlidir. Bu yazıda doğru bakım yöntemlerini anlatıyoruz.'
        : 'Regular maintenance and cleaning is very important for the longevity of stainless steel tanks. In this article, we explain the correct maintenance methods.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
      category: 'maintenance',
      date: '2025-01-15',
      author: 'Ertunç Paslanmaz',
      readTime: language === 'tr' ? '5 dk okuma' : '5 min read'
    },
    {
      id: 2,
      slug: language === 'tr' ? 'gida-endustrisinde-hijyen-standartlari' : 'hygiene-standards-in-food-industry',
      title: language === 'tr'
        ? 'Gıda Endüstrisinde Hijyen Standartları'
        : 'Hygiene Standards in Food Industry',
      excerpt: language === 'tr'
        ? 'Gıda üretiminde hijyen standartları ve paslanmaz çelik ekipmanların önemi hakkında bilmeniz gerekenler.'
        : 'What you need to know about hygiene standards in food production and the importance of stainless steel equipment.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg',
      category: 'industry',
      date: '2025-01-10',
      author: 'Ertunç Paslanmaz',
      readTime: language === 'tr' ? '6 dk okuma' : '6 min read'
    },
    {
      id: 3,
      slug: language === 'tr' ? 'mikser-sistemlerinde-verimlilik-artirma' : 'increasing-efficiency-in-mixer-systems',
      title: language === 'tr'
        ? 'Mikser Sistemlerinde Verimlilik Artırma'
        : 'Increasing Efficiency in Mixer Systems',
      excerpt: language === 'tr'
        ? 'Endüstriyel mikser sistemlerinde verimliliği artırmak için uygulayabileceğiniz pratik yöntemler.'
        : 'Practical methods you can apply to increase efficiency in industrial mixer systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      category: 'technology',
      date: '2025-01-05',
      author: 'Ertunç Paslanmaz',
      readTime: language === 'tr' ? '7 dk okuma' : '7 min read'
    },
    {
      id: 4,
      slug: language === 'tr' ? 'paslanmaz-celik-kalite-standartlari' : 'stainless-steel-quality-standards',
      title: language === 'tr'
        ? 'Paslanmaz Çelik Kalite Standartları'
        : 'Stainless Steel Quality Standards',
      excerpt: language === 'tr'
        ? 'Paslanmaz çelik malzemelerde kalite standartları ve sertifikasyonlar hakkında detaylı bilgi.'
        : 'Detailed information about quality standards and certifications in stainless steel materials.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070',
      category: 'industry',
      date: '2024-12-28',
      author: 'Ertunç Paslanmaz',
      readTime: language === 'tr' ? '8 dk okuma' : '8 min read'
    },
    {
      id: 5,
      slug: language === 'tr' ? 'konveyor-sistemlerinde-otomasyon' : 'automation-in-conveyor-systems',
      title: language === 'tr'
        ? 'Konveyör Sistemlerinde Otomasyon'
        : 'Automation in Conveyor Systems',
      excerpt: language === 'tr'
        ? 'Modern konveyör sistemlerinde otomasyon teknolojileri ve avantajları.'
        : 'Automation technologies and advantages in modern conveyor systems.',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070',
      category: 'technology',
      date: '2024-12-20',
      author: 'Ertunç Paslanmaz',
      readTime: language === 'tr' ? '6 dk okuma' : '6 min read'
    },
    {
      id: 6,
      slug: language === 'tr' ? 'yeni-fabrika-acilisimiz' : 'our-new-factory-opening',
      title: language === 'tr'
        ? 'Yeni Fabrika Açılışımız'
        : 'Our New Factory Opening',
      excerpt: language === 'tr'
        ? 'Esenyurt\'taki yeni üretim tesisimiz hizmete açıldı. Modern teknoloji ve geniş üretim kapasitesi.'
        : 'Our new production facility in Esenyurt has been opened. Modern technology and wide production capacity.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg',
      category: 'news',
      date: '2024-12-15',
      author: 'Ertunç Paslanmaz',
      readTime: language === 'tr' ? '4 dk okuma' : '4 min read'
    }
  ];

  // Filtreleme - Filtering
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Tarih formatlama - Date formatting
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return language === 'tr'
      ? date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })
      : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title={language === 'tr' ? 'Blog - Paslanmaz Mikser, Tank, Hijyen Ekipmanları' : 'Blog - Stainless Steel Mixer, Tank, Hygiene Equipment'}
        description={language === 'tr'
          ? 'Paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses ve hijyen ekipmanları hakkında uzman blog yazıları. Bakım, temizlik, kalite standartları ve endüstri haberleri.'
          : 'Expert blog posts about stainless steel mixer, storage tank, powder mixer, storage tank, stainless steel process and hygiene equipment. Maintenance, cleaning, quality standards and industry news.'
        }
        keywords={language === 'tr'
          ? 'paslanmaz mikser blog, paslanmaz tank bakımı, depolama tankı temizliği, hijyen standartları, paslanmaz çelik kalite, mikser verimliliği, konveyör otomasyon, paslanmaz proses, endüstri haberleri'
          : 'stainless steel mixer blog, stainless steel tank maintenance, storage tank cleaning, hygiene standards, stainless steel quality, mixer efficiency, conveyor automation, stainless steel process, industry news'
        }
      />

      {/* Page Header - Sayfa Başlığı */}
      <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden pt-28 md:pt-32">
        {/* Background Image - Arka Plan Resmi */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg)',
          }}
        ></div>

        {/* Dark Overlay - Koyu Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80"></div>
        
        {/* Content - İçerik */}
        <div className="container-custom relative z-10 text-center text-white py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            {language === 'tr' ? 'Blog' : 'Blog'}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {language === 'tr'
              ? 'Endüstri, teknoloji ve paslanmaz çelik hakkında güncel yazılar'
              : 'Latest articles about industry, technology and stainless steel'
            }
          </p>
        </div>
      </section>

      {/* Search and Filter - Arama ve Filtreleme */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Search Bar - Arama Çubuğu */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={language === 'tr' ? 'Blog yazılarında ara...' : 'Search blog posts...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200"
              />
            </div>

            {/* Category Filter - Kategori Filtresi */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid - Blog Yazıları Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Post Image - Yazı Görseli */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Category Badge - Kategori Rozeti */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                      <Tag size={14} />
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>

                {/* Post Content - Yazı İçeriği */}
                <div className="p-6">
                  {/* Meta Info - Meta Bilgiler */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Title - Başlık */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt - Özet */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Button - Devamını Oku Butonu */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
                  >
                    <span>{language === 'tr' ? 'Devamını Oku' : 'Read More'}</span>
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results - Sonuç Yok */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'tr' ? 'Sonuç Bulunamadı' : 'No Results Found'}
              </h3>
              <p className="text-gray-600">
                {language === 'tr'
                  ? 'Arama kriterlerinize uygun blog yazısı bulunamadı.'
                  : 'No blog posts found matching your search criteria.'
                }
              </p>
            </div>
          )}
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
              ? 'Uzman ekibimiz size en uygun çözümü sunmak için hazır.'
              : 'Our expert team is ready to offer you the most suitable solution.'
            }
          </p>
          <Link
            to={language === 'tr' ? '/iletisim' : '/contact'}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl hover:bg-primary-50 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span>{language === 'tr' ? 'İletişime Geçin' : 'Contact Us'}</span>
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;


