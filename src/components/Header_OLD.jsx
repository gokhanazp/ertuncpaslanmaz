import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { availableLanguages } from '../i18n/translations';

/**
 * Header Bileşeni - Header Component
 * Modern ve şık header tasarımı, üst bilgi çubuğu ve navigasyon içerir
 * Modern and elegant header design with top info bar and navigation
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // Navigasyon menü öğeleri - Navigation menu items
  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/contact', label: t('nav.contact') }
  ];

  // Sosyal medya linkleri - Social media links
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  // Aktif link kontrolü - Active link check
  const isActive = (path) => location.pathname === path;

  // Dil değiştirme fonksiyonu - Language change function
  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Info Bar - Üst Bilgi Çubuğu */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between py-2 text-sm">
            {/* İletişim Bilgileri - Contact Info */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="tel:+902126721017"
                className="flex items-center gap-2 hover:text-primary-100 transition-colors duration-200"
              >
                <Phone size={16} />
                <span className="hidden sm:inline">(0212) 672 1017</span>
              </a>
              <a
                href="mailto:info@ertuncpaslanmaz.com"
                className="flex items-center gap-2 hover:text-primary-100 transition-colors duration-200"
              >
                <Mail size={16} />
                <span className="hidden md:inline">info@ertuncpaslanmaz.com</span>
              </a>
            </div>

            {/* Sosyal Medya ve Dil - Social Media and Language */}
            <div className="flex items-center gap-4">
              {/* Sosyal Medya İkonları - Social Media Icons */}
              <div className="hidden sm:flex items-center gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-100 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>

              {/* Dil Seçici - Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 hover:text-primary-100 transition-colors duration-200 px-2 py-1 rounded"
                  aria-label="Change Language"
                >
                  <Globe size={16} />
                  <span className="font-medium text-xs">{language.toUpperCase()}</span>
                </button>

                {/* Language Dropdown - Dil Dropdown Menüsü */}
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors duration-200 ${
                          language === lang.code ? 'bg-primary-50 text-primary-600 font-semibold' : 'text-gray-700'
                        }`}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Ana Navigasyon */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Daha büyük ve belirgin */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-100 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/logo-1.png"
                  alt="Ertunç Paslanmaz Logo"
                  className="h-14 w-auto relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="hidden lg:block">
                <div className="text-xl font-bold text-gray-900 leading-tight">
                  Ertunç Paslanmaz
                </div>
                <div className="text-xs text-primary-600 font-medium">
                  {language === 'tr' ? 'Endüstriyel Çelik Çözümleri' : 'Industrial Steel Solutions'}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Masaüstü Navigasyon */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 font-semibold rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA Button - Harekete Geçirici Buton */}
              <Link
                to="/contact"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {language === 'tr' ? 'Teklif Al' : 'Get Quote'}
              </Link>
            </div>

            {/* Mobile Menu Button - Mobil Menü Butonu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation - Mobil Navigasyon */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-4 font-semibold rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA Button */}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg text-center"
              >
                {language === 'tr' ? 'Teklif Al' : 'Get Quote'}
              </Link>

              {/* Mobile Social Links - Mobil Sosyal Medya */}
              <div className="flex items-center justify-center gap-4 pt-4 mt-4 border-t border-gray-100">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

