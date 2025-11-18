import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle, CheckCircle } from 'lucide-react';
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
          ? 'Ertunç Paslanmaz ile iletişime geçin. Paslanmaz mikser, stok tank, toz mikseri ve depolama tankı için teklif alın. İstanbul Esenyurt.'
          : 'Contact Ertunç Paslanmaz. Get a quote for stainless steel mixer, storage tank, powder mixer. Istanbul Esenyurt.'
        }
        keywords={language === 'tr'
          ? 'ertunç paslanmaz iletişim, paslanmaz tank teklif, mikser fiyat, istanbul paslanmaz, esenyurt paslanmaz, paslanmaz çelik üretici'
          : 'ertunc paslanmaz contact, stainless steel tank quote, mixer price, istanbul stainless steel, esenyurt stainless steel'
        }
      />

      {/* Hero Section - Header altında kalmayacak şekilde pt-32 */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden">
        {/* Background Pattern - Arka Plan Deseni */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-8">
              {t('contact.subtitle')}
            </p>

            {/* Quick Stats - Hızlı İstatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-8 h-8 mx-auto mb-3 text-orange-400 flex items-center justify-center">
                  <Clock className="w-8 h-8" />
                </div>
                <p className="text-sm text-primary-100">
                  {language === 'tr' ? '24 Saat İçinde' : 'Within 24 Hours'}
                </p>
                <p className="text-lg font-semibold">
                  {language === 'tr' ? 'Hızlı Yanıt' : 'Quick Response'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-8 h-8 mx-auto mb-3 text-orange-400 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <p className="text-sm text-primary-100">
                  {language === 'tr' ? 'Ücretsiz' : 'Free'}
                </p>
                <p className="text-lg font-semibold">
                  {language === 'tr' ? 'Teknik Danışmanlık' : 'Technical Consulting'}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="w-8 h-8 mx-auto mb-3 text-orange-400 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p className="text-sm text-primary-100">
                  {language === 'tr' ? 'Detaylı' : 'Detailed'}
                </p>
                <p className="text-lg font-semibold">
                  {language === 'tr' ? 'Fiyat Teklifi' : 'Price Quote'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content - İletişim İçeriği */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form - İletişim Formu */}
            <div>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {language === 'tr' ? 'Bize Mesaj Gönderin' : 'Send Us a Message'}
                  </h2>
                  <p className="text-gray-600">
                    {language === 'tr'
                      ? 'Formu doldurun, en kısa sürede size dönüş yapalım.'
                      : 'Fill out the form and we will get back to you as soon as possible.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.name')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
                      placeholder={language === 'tr' ? 'Adınız Soyadınız' : 'Your Name'}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.email')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
                        placeholder={language === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none"
                        placeholder={language === 'tr' ? '0555 555 55 55' : '+90 555 555 55 55'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contact.form.message')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-200 outline-none resize-none"
                      placeholder={language === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    <span className="text-lg">
                      {isSubmitting ? (language === 'tr' ? 'Gönderiliyor...' : 'Sending...') : t('contact.form.send')}
                    </span>
                    <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  {submitMessage && (
                    <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl text-green-800 flex items-start gap-3 animate-fade-in">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="font-medium">{submitMessage}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information - İletişim Bilgileri */}
            <div className="space-y-8">
              {/* Contact Cards - İletişim Kartları */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target={info.icon === MapPin ? '_blank' : undefined}
                      rel={info.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-primary-500"
                    >
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Icon className="text-white" size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {info.title}
                          </h3>
                          <p className="text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Working Hours - Çalışma Saatleri */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8 border-2 border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Clock className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'tr' ? 'Çalışma Saatleri' : 'Working Hours'}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {language === 'tr' ? 'Pazartesi - Cuma' : 'Monday - Friday'}
                    </span>
                    <span className="text-gray-900 font-bold">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {language === 'tr' ? 'Cumartesi' : 'Saturday'}
                    </span>
                    <span className="text-gray-900 font-bold">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {language === 'tr' ? 'Pazar' : 'Sunday'}
                    </span>
                    <span className="text-red-600 font-bold">
                      {language === 'tr' ? 'Kapalı' : 'Closed'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map - Harita */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.7!2d28.6!3d41.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzAwLjAiTiAyOMKwMzYnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ertunç Paslanmaz Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Harekete Geçirici Bölüm */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'tr'
                ? 'Projeniz İçin Hemen Teklif Alın'
                : 'Get a Quote for Your Project Now'}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {language === 'tr'
                ? 'Uzman ekibimiz, ihtiyaçlarınıza özel çözümler sunmak için hazır.'
                : 'Our expert team is ready to provide customized solutions for your needs.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+902126721017"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-700 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone size={24} />
                <span>(0212) 672 1017</span>
              </a>
              <a
                href="mailto:info@ertuncpaslanmaz.com"
                className="inline-flex items-center justify-center gap-3 bg-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Mail size={24} />
                <span>info@ertuncpaslanmaz.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

