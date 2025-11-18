import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage } from './translations';

// Dil Context'i - Language Context
const LanguageContext = createContext();

// Dil Context Provider - Language Context Provider
export const LanguageProvider = ({ children }) => {
  // LocalStorage'dan dil tercihini al veya varsayılan dili kullan
  // Get language preference from localStorage or use default language
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || defaultLanguage;
  });

  // Dil değiştiğinde localStorage'a kaydet
  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // HTML lang attribute'unu güncelle (SEO için önemli)
    // Update HTML lang attribute (important for SEO)
    document.documentElement.lang = language;
  }, [language]);

  // Çeviri fonksiyonu - Translation function
  // Kullanım örneği: t('nav.home') -> 'Anasayfa' veya 'Home'
  // Usage example: t('nav.home') -> 'Anasayfa' or 'Home'
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Çeviri bulunamazsa key'i döndür - Return key if translation not found
      }
    }
    
    return value || key;
  };

  const value = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook - Dil context'ini kullanmak için
// Custom hook - To use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

