import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Modern Header Bileşeni - Modern Header Component
 * Scroll'da küçülen, şeffaf arka planlı, modern ve şık tasarım
 * Shrinking on scroll, transparent background, modern and elegant design
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // Scroll event listener - Kaydırma olayı dinleyicisi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigasyon menü öğeleri - Navigation menu items
  const navItems = [
    { path: '/', label: t('nav.home') },
    {
      path: language === 'tr' ? '/hakkimizda' : '/about',
      label: t('nav.about')
    },
    {
      path: language === 'tr' ? '/urunler' : '/products',
      label: t('nav.products')
    },
    {
      path: '/blog',
      label: t('nav.blog')
    },
    {
      path: language === 'tr' ? '/iletisim' : '/contact',
      label: t('nav.contact')
    }
  ];

  // Sosyal medya linkleri - Social media links
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  // Aktif link kontrolü - Active link check
  const isActive = (path) => {
    const currentPath = location.pathname;
    // Ana sayfa kontrolü
    if (path === '/' && currentPath === '/') return true;
    // Diğer sayfalar için hem Türkçe hem İngilizce URL'leri kontrol et
    if (path === '/hakkimizda' || path === '/about') {
      return currentPath === '/hakkimizda' || currentPath === '/about';
    }
    if (path === '/urunler' || path === '/products') {
      return currentPath === '/urunler' || currentPath === '/products';
    }
    if (path === '/blog') {
      return currentPath === '/blog' || currentPath.startsWith('/blog/');
    }
    if (path === '/iletisim' || path === '/contact') {
      return currentPath === '/iletisim' || currentPath === '/contact';
    }
    return currentPath === path;
  };

  // Dil değiştirme - Language toggle
  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-lg shadow-xl py-2' 
        : 'bg-white shadow-md py-0'
    }`}>
      {/* Top Info Bar - Üst Bilgi Çubuğu (Sadece scroll edilmediğinde) */}
      <div className={`bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 text-white transition-all duration-500 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0' : 'max-h-20 opacity-100'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-2.5 text-sm">
            {/* İletişim Bilgileri - Contact Info */}
            <div className="flex items-center gap-6">
              <a 
                href="tel:+902126721017" 
                className="flex items-center gap-2 hover:text-white/80 transition-all group"
              >
                <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  <Phone size={14} />
                </div>
                <span className="hidden sm:inline font-medium">(0212) 672 1017</span>
              </a>
              <a 
                href="mailto:info@ertuncpaslanmaz.com" 
                className="flex items-center gap-2 hover:text-white/80 transition-all group"
              >
                <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                  <Mail size={14} />
                </div>
                <span className="hidden md:inline font-medium">info@ertuncpaslanmaz.com</span>
              </a>
            </div>

            {/* Sosyal Medya ve Dil - Social Media and Language */}
            <div className="flex items-center gap-3">
              {/* Sosyal Medya - Social Media */}
              <div className="hidden sm:flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>

              {/* Dil Değiştirici - Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg hover:bg-white/20 hover:scale-105 transition-all font-semibold"
                aria-label="Change Language"
              >
                <Globe size={14} />
                <span>{language === 'tr' ? 'EN' : 'TR'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Ana Navigasyon */}
      <nav className={`transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Glow Effect - Işıltı Efekti */}
                <div className="absolute inset-0 bg-primary-100 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/logo-1.png"
                  alt="Ertunç Paslanmaz Logo"
                  className={`relative z-10 object-contain transition-all duration-500 ${
                    isScrolled ? 'h-10 sm:h-12' : 'h-14 sm:h-16'
                  } w-auto group-hover:scale-105`}
                />
              </div>
              <div className="transition-all duration-500">
                <h1 className={`font-bold text-gray-900 leading-tight transition-all duration-500 ${
                  isScrolled ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                }`}>
                  Ertunç Paslanmaz
                </h1>
                <p className={`text-xs text-primary-600 font-medium transition-all duration-500 ${
                  isScrolled ? 'hidden sm:block' : 'block'
                }`}>
                  {language === 'tr' ? 'Endüstriyel Çelik Çözümleri' : 'Industrial Steel Solutions'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation - Masaüstü Navigasyon */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-600/30'
                      : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA Button - Harekete Geçirici Buton (Turuncu/Sarı) */}
              <Link
                to={language === 'tr' ? '/iletisim' : '/contact'}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105 transition-all duration-300"
              >
                {language === 'tr' ? 'Teklif Al' : 'Get Quote'}
              </Link>
            </div>

            {/* Mobile Menu Button - Mobil Menü Butonu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Mobil Menü */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container-custom pb-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white'
                    : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA - Mobil CTA (Turuncu/Sarı) */}
            <Link
              to={language === 'tr' ? '/iletisim' : '/contact'}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl text-center"
            >
              {language === 'tr' ? 'Teklif Al' : 'Get Quote'}
            </Link>

            {/* Mobile Social Links - Mobil Sosyal Medya */}
            <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gray-200">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-primary-600" />
                </a>
              ))}

              {/* Mobile Language Switcher - Mobil Dil Değiştirici */}
              <button
                onClick={toggleLanguage}
                className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors"
                aria-label="Change Language"
              >
                <Globe size={18} className="text-primary-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

