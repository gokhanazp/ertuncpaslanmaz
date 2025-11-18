import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * İletişim Sayfası - Contact Page
 * İletişim formu ve iletişim bilgileri
 * Contact form and contact information
 */
const Contact = () => {
  const { t, language } = useLanguage();
  
  // Form state - Form durumu
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Form input değişikliği - Form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Form gönderimi - Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada form verilerini backend'e gönderebilirsiniz
    // Here you can send form data to backend
    
    // Simüle edilmiş gönderim - Simulated submission
    setTimeout(() => {
      setSubmitMessage(
        language === 'tr'
          ? 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
          : 'Your message has been sent successfully. We will get back to you as soon as possible.'
      );
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Mesajı 5 saniye sonra temizle - Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  // İletişim bilgileri - Contact information
  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content: 'Selahaddin Eyyubi Mahallesi 1633. Sokak No:8 Esenyurt / İstanbul',
      link: 'https://maps.google.com/?q=Selahaddin+Eyyubi+Mahallesi+1633+Sokak+No:8+Esenyurt+Istanbul'
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: '(0212) 672 1017',
      link: 'tel:+902126721017'
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: 'info@ertuncpaslanmaz.com',
      link: 'mailto:info@ertuncpaslanmaz.com'
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <SEO 
        title={t('contact.title')}
        description={language === 'tr'
          ? 'Ertunç Paslanmaz ile iletişime geçin. Sorularınız için bize ulaşın.'
          : 'Contact Ertunç Paslanmaz. Reach us for your questions.'
        }
      />

      {/* Page Header - Sayfa Başlığı */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="heading-1 mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-primary-50">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Content - İletişim İçeriği */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - İletişim Formu */}
            <div>
              <h2 className="heading-3 mb-6">
                {language === 'tr' ? 'Bize Mesaj Gönderin' : 'Send Us a Message'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder={language === 'tr' ? 'Adınız Soyadınız' : 'Your Name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder={language === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder={language === 'tr' ? '0555 555 55 55' : '+90 555 555 55 55'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="textarea"
                    placeholder={language === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? (language === 'tr' ? 'Gönderiliyor...' : 'Sending...') : t('contact.form.send')}</span>
                  <Send size={20} />
                </button>

                {submitMessage && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information - İletişim Bilgileri */}
            <div>
              <h2 className="heading-3 mb-6">
                {language === 'tr' ? 'İletişim Bilgileri' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="text-primary-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <a
                          href={info.link}
                          target={info.icon === MapPin ? '_blank' : undefined}
                          rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map - Harita */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7!2d28.6!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAyOMKwMzYnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ertunç Paslanmaz Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

