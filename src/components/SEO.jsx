import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * SEO Bileşeni - SEO Component
 * React Helmet kullanarak meta tags, Open Graph ve Twitter Cards ekler
 * Adds meta tags, Open Graph and Twitter Cards using React Helmet
 * 
 * @param {string} title - Sayfa başlığı - Page title
 * @param {string} description - Sayfa açıklaması - Page description
 * @param {string} keywords - Anahtar kelimeler - Keywords
 * @param {string} image - Sosyal medya paylaşım görseli - Social media share image
 * @param {string} url - Sayfa URL'i - Page URL
 */
const SEO = ({
  title,
  description,
  keywords,
  image = '/logo-1.png',
  url = window.location.href,
  type = 'website',
  article = false
}) => {
  const { language } = useLanguage();

  // Şirket adı - Company name
  const companyName = 'Ertunç Paslanmaz';

  // Tam başlık - Full title
  const fullTitle = title ? `${title} | ${companyName}` : companyName;

  // Varsayılan açıklama - Default description
  const defaultDescription = language === 'tr'
    ? 'Paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses ve paslanmaz hijyen ekipmanları üretiminde Türkiye\'nin lider firması. 15+ yıllık deneyim, 500+ tamamlanmış proje.'
    : 'Turkey\'s leading company in stainless steel mixer, stainless steel storage tank, powder mixer, storage tank, stainless steel process and stainless steel hygiene equipment production. 15+ years experience, 500+ completed projects.';

  const finalDescription = description || defaultDescription;

  // Varsayılan anahtar kelimeler - Default keywords
  const defaultKeywords = language === 'tr'
    ? 'paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses, paslanmaz hijyen ekipmanları, paslanmaz çelik tank, endüstriyel mikser, gıda tankı, ilaç tankı, kimya tankı, paslanmaz konveyör, paslanmaz çelik üretim, hijyen ekipmanları, proses tankı, karıştırıcı tank, stok tankı, depolama sistemi'
    : 'stainless steel mixer, stainless steel storage tank, powder mixer, storage tank, stainless steel process, stainless steel hygiene equipment, industrial mixer, food tank, pharmaceutical tank, chemical tank, stainless steel conveyor, hygiene equipment, process tank, mixing tank, stock tank, storage system';

  const finalKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Temel Meta Tags - Basic Meta Tags */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph Meta Tags (Facebook, LinkedIn vb. - Facebook, LinkedIn etc.) */}
      <meta property="og:type" content={article ? 'article' : type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={companyName} />
      <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />

      {/* Ek SEO Meta Tags - Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content={companyName} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content={language === 'tr' ? 'Turkish' : 'English'} />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Şirket Bilgileri - Company Information */}
      <meta property="business:contact_data:street_address" content="Esenyurt" />
      <meta property="business:contact_data:locality" content="İstanbul" />
      <meta property="business:contact_data:country_name" content="Turkey" />
      <meta property="business:contact_data:phone_number" content="+90 (212) 672 10 17" />
      <meta property="business:contact_data:email" content="info@ertuncpaslanmaz.com" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Alternatif dil linkleri - Alternate language links */}
      <link rel="alternate" hrefLang="tr" href={url.replace(/\/(en|tr)/, '/tr')} />
      <link rel="alternate" hrefLang="en" href={url.replace(/\/(en|tr)/, '/en')} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* JSON-LD Structured Data - Yapılandırılmış Veri */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": companyName,
          "url": "https://ertuncpaslanmaz.com",
          "logo": "https://ertuncpaslanmaz.com/logo-1.png",
          "description": finalDescription,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "İstanbul",
            "addressRegion": "Esenyurt",
            "addressCountry": "TR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-212-672-10-17",
            "contactType": "customer service",
            "email": "info@ertuncpaslanmaz.com",
            "availableLanguage": ["Turkish", "English"]
          },
          "sameAs": [
            "https://www.facebook.com/ertuncpaslanmaz",
            "https://www.linkedin.com/company/ertuncpaslanmaz",
            "https://www.instagram.com/ertuncpaslanmaz"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

