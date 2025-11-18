import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

/**
 * URL Yönlendirici - URL Router
 * Dil değiştiğinde URL'leri günceller
 * Updates URLs when language changes
 */
function LanguageRouter() {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // URL mapping - Türkçe ve İngilizce URL'ler
  const urlMap = {
    tr: {
      '/': '/',
      '/hakkimizda': '/hakkimizda',
      '/urunler': '/urunler',
      '/iletisim': '/iletisim'
    },
    en: {
      '/': '/',
      '/about': '/about',
      '/products': '/products',
      '/contact': '/contact'
    }
  };

  // Ters mapping - URL'den sayfa bulma
  const reverseMap = {
    '/hakkimizda': { tr: '/hakkimizda', en: '/about' },
    '/about': { tr: '/hakkimizda', en: '/about' },
    '/urunler': { tr: '/urunler', en: '/products' },
    '/products': { tr: '/urunler', en: '/products' },
    '/blog': { tr: '/blog', en: '/blog' },
    '/iletisim': { tr: '/iletisim', en: '/contact' },
    '/contact': { tr: '/iletisim', en: '/contact' }
  };

  useEffect(() => {
    const currentPath = location.pathname;

    // Eğer mevcut URL dil ile uyumlu değilse, yönlendir
    if (reverseMap[currentPath]) {
      const correctPath = reverseMap[currentPath][language];
      if (currentPath !== correctPath) {
        navigate(correctPath, { replace: true });
      }
    }
  }, [language, location.pathname, navigate]);

  return null;
}

/**
 * Ana Uygulama Bileşeni - Main Application Component
 * Routing, dil desteği ve SEO yapılandırması içerir
 * Includes routing, language support and SEO configuration
 */
function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <LanguageRouter />

      {/* Header - Üst Menü */}
      <Header />

      {/* Main Content - Ana İçerik */}
      <main className="flex-grow">
        <Routes>
          {/* Anasayfa - Home */}
          <Route path="/" element={<Home />} />

          {/* Hakkımızda - About */}
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/about" element={<About />} />

          {/* Ürünler - Products */}
          <Route path="/urunler" element={<Products />} />
          <Route path="/products" element={<Products />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* İletişim - Contact */}
          <Route path="/iletisim" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer - Alt Bilgi */}
      <Footer />
    </div>
  );
}

export default App;

