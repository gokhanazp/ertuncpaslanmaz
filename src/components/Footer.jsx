import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight, Award, Users, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Footer Bileşeni - Footer Component
 * İletişim bilgileri, sosyal medya linkleri ve telif hakkı bilgisi içerir
 * Includes contact information, social media links and copyright information
 */
const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // İletişim bilgileri - Contact information
  const contactInfo = {
    address: 'Selahaddin Eyyubi Mahallesi 1633. Sokak No:8 Esenyurt / İstanbul',
    phone: '(0212) 672 1017',
    email: 'info@ertuncpaslanmaz.com'
  };

  // Navigasyon linkleri - Navigation links
  const navLinks = [
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

  // Ürünler - Products
  const products = [
    {
      name: language === 'tr' ? 'Paslanmaz Mikser' : 'Stainless Steel Mixer',
      path: language === 'tr' ? '/urunler' : '/products'
    },
    {
      name: language === 'tr' ? 'Paslanmaz Stok Tank' : 'Stainless Steel Storage Tank',
      path: language === 'tr' ? '/urunler' : '/products'
    },
    {
      name: language === 'tr' ? 'Paslanmaz Toz Mikseri' : 'Powder Mixer',
      path: language === 'tr' ? '/urunler' : '/products'
    },
    {
      name: language === 'tr' ? 'Depolama Tankı' : 'Storage Tank',
      path: language === 'tr' ? '/urunler' : '/products'
    },
    {
      name: language === 'tr' ? 'Hijyen Ekipmanları' : 'Hygiene Equipment',
      path: language === 'tr' ? '/urunler' : '/products'
    }
  ];

  // Sosyal medya linkleri - Social media links (örnek - example)
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  // Özellikler - Features
  const features = [
    {
      icon: Award,
      text: language === 'tr' ? 'ISO 9001 Sertifikalı' : 'ISO 9001 Certified'
    },
    {
      icon: Users,
      text: language === 'tr' ? '500+ Mutlu Müşteri' : '500+ Happy Customers'
    },
    {
      icon: Clock,
      text: language === 'tr' ? '15+ Yıl Deneyim' : '15+ Years Experience'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white overflow-hidden">
      {/* Background Pattern - Arka Plan Deseni */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content - Ana Footer İçeriği */}
      <div className="container-custom relative z-10">
        {/* Top Section with Features - Özellikler Bölümü */}
        <div className="py-12 border-b border-secondary-700/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{feature.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Grid - Ana Footer Grid */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Şirket Bilgisi - Company Info (4 columns) */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <img
                  src="/logo-1.png"
                  alt="Ertunç Paslanmaz Logo"
                  className="h-16 w-auto brightness-0 invert mb-4"
                />
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Ertunç Paslanmaz
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('footer.description')}
                </p>
              </div>

              {/* Sosyal Medya - Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-orange-500"></span>
                  {language === 'tr' ? 'Sosyal Medya' : 'Social Media'}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-12 h-12 bg-secondary-800 rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        aria-label={social.label}
                      >
                        <Icon size={22} className="group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Hızlı Linkler - Quick Links (2 columns) */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-orange-500"></span>
                {language === 'tr' ? 'Hızlı Linkler' : 'Quick Links'}
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                    >
                      <ArrowRight size={16} className="text-primary-500 group-hover:translate-x-1 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ürünler - Products (3 columns) */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-orange-500"></span>
                {language === 'tr' ? 'Ürünlerimiz' : 'Our Products'}
              </h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <Link
                      to={product.path}
                      className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-200"
                    >
                      <CheckCircle size={16} className="text-orange-500 group-hover:scale-110 transition-transform" />
                      <span className="text-sm">{product.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* İletişim Bilgileri - Contact Information (3 columns) */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-primary-500 to-orange-500"></span>
                {t('contact.title')}
              </h4>
              <ul className="space-y-4">
                <li className="group">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all">
                      <MapPin size={20} className="text-primary-400" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed">{contactInfo.address}</span>
                  </div>
                </li>
                <li className="group">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/30 group-hover:to-orange-600/30 transition-all">
                      <Phone size={20} className="text-orange-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{contactInfo.phone}</span>
                  </a>
                </li>
                <li className="group">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all">
                      <Mail size={20} className="text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{contactInfo.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Alt Bar */}
        <div className="border-t border-secondary-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="font-semibold text-white">Ertunç Paslanmaz</span>. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to={language === 'tr' ? '/hakkimizda' : '/about'} className="hover:text-white transition-colors">
                {language === 'tr' ? 'Hakkımızda' : 'About Us'}
              </Link>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <Link to={language === 'tr' ? '/iletisim' : '/contact'} className="hover:text-white transition-colors">
                {language === 'tr' ? 'İletişim' : 'Contact'}
              </Link>
              <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
              <Link to="/blog" className="hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

