import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Tag, Share2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

/**
 * Blog Detay Sayfası - Blog Post Detail Page
 * Tek bir blog yazısının detaylı içeriği
 * Detailed content of a single blog post
 */
const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Blog kategorileri - Blog categories
  const categories = {
    maintenance: language === 'tr' ? 'Bakım' : 'Maintenance',
    industry: language === 'tr' ? 'Endüstri' : 'Industry',
    technology: language === 'tr' ? 'Teknoloji' : 'Technology',
    news: language === 'tr' ? 'Haberler' : 'News'
  };

  // Blog içerikleri - Blog contents
  const blogContents = {
    'paslanmaz-celik-tanklarin-bakimi-ve-temizligi': {
      title: 'Paslanmaz Çelik Tankların Bakımı ve Temizliği',
      excerpt: 'Paslanmaz çelik tankların uzun ömürlü olması için düzenli bakım ve temizlik çok önemlidir.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
      category: 'maintenance',
      date: '2025-01-15',
      author: 'Ertunç Paslanmaz',
      readTime: '5 dk okuma',
      content: `
        <h2>Paslanmaz Çelik Tankların Önemi</h2>
        <p>Paslanmaz çelik tanklar, gıda, ilaç, kimya ve birçok endüstride kullanılan kritik ekipmanlardır. Bu tankların hijyenik ve güvenli bir şekilde çalışması için düzenli bakım ve temizlik şarttır.</p>
        
        <h2>Düzenli Temizlik Neden Önemlidir?</h2>
        <p>Paslanmaz çelik tankların düzenli temizliği, ürün kalitesini korumak, kontaminasyonu önlemek ve ekipman ömrünü uzatmak için kritik öneme sahiptir. Özellikle gıda ve ilaç endüstrisinde hijyen standartları çok yüksektir.</p>
        
        <h3>Temizlik Adımları:</h3>
        <ul>
          <li><strong>Ön Yıkama:</strong> Tank içindeki kalıntıların temiz su ile uzaklaştırılması</li>
          <li><strong>Deterjan Uygulaması:</strong> Uygun temizlik maddelerinin kullanılması</li>
          <li><strong>Fırçalama:</strong> Yumuşak fırçalarla mekanik temizlik</li>
          <li><strong>Durulama:</strong> Temizlik maddelerinin tamamen uzaklaştırılması</li>
          <li><strong>Dezenfeksiyon:</strong> Mikroorganizmaların yok edilmesi</li>
          <li><strong>Son Durulama:</strong> Steril su ile son yıkama</li>
        </ul>
        
        <h2>Bakım Programı</h2>
        <p>Düzenli bakım programı oluşturmak, tankların uzun ömürlü olmasını sağlar:</p>
        
        <h3>Günlük Kontroller:</h3>
        <ul>
          <li>Görsel muayene</li>
          <li>Sızıntı kontrolü</li>
          <li>Vana ve bağlantı kontrolü</li>
        </ul>
        
        <h3>Haftalık Bakım:</h3>
        <ul>
          <li>Detaylı temizlik</li>
          <li>Conta ve keçe kontrolü</li>
          <li>Basınç testleri</li>
        </ul>
        
        <h3>Aylık Bakım:</h3>
        <ul>
          <li>Kaynak noktalarının kontrolü</li>
          <li>Yüzey pürüzlülük kontrolü</li>
          <li>Korozyon kontrolü</li>
        </ul>
        
        <h2>Kullanılacak Temizlik Maddeleri</h2>
        <p>Paslanmaz çelik için uygun temizlik maddeleri kullanmak çok önemlidir:</p>
        <ul>
          <li><strong>Alkali Temizleyiciler:</strong> Yağ ve protein kalıntıları için</li>
          <li><strong>Asit Temizleyiciler:</strong> Mineral birikintileri için</li>
          <li><strong>Nötr Temizleyiciler:</strong> Genel temizlik için</li>
        </ul>
        
        <blockquote>
          <p><strong>Önemli Not:</strong> Klor bazlı temizleyiciler paslanmaz çelikte korozyona neden olabilir. Kullanımından kaçınılmalıdır.</p>
        </blockquote>
        
        <h2>Sonuç</h2>
        <p>Düzenli bakım ve doğru temizlik yöntemleri ile paslanmaz çelik tanklar yıllarca sorunsuz çalışabilir. Profesyonel destek almak, hem hijyen standartlarını korumak hem de ekipman ömrünü uzatmak için önemlidir.</p>
        
        <p>Ertunç Paslanmaz olarak, paslanmaz çelik tank bakımı ve temizliği konusunda uzman ekibimizle hizmetinizdeyiz.</p>
      `
    },
    'maintenance-and-cleaning-of-stainless-steel-tanks': {
      title: 'Maintenance and Cleaning of Stainless Steel Tanks',
      excerpt: 'Regular maintenance and cleaning is very important for the longevity of stainless steel tanks.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/4-scaled.jpg',
      category: 'maintenance',
      date: '2025-01-15',
      author: 'Ertunç Paslanmaz',
      readTime: '5 min read',
      content: `
        <h2>Importance of Stainless Steel Tanks</h2>
        <p>Stainless steel tanks are critical equipment used in food, pharmaceutical, chemical and many industries. Regular maintenance and cleaning is essential for these tanks to operate hygienically and safely.</p>
        
        <h2>Why is Regular Cleaning Important?</h2>
        <p>Regular cleaning of stainless steel tanks is critical to maintain product quality, prevent contamination and extend equipment life. Hygiene standards are particularly high in the food and pharmaceutical industries.</p>
        
        <h3>Cleaning Steps:</h3>
        <ul>
          <li><strong>Pre-wash:</strong> Removal of residues in the tank with clean water</li>
          <li><strong>Detergent Application:</strong> Use of appropriate cleaning agents</li>
          <li><strong>Brushing:</strong> Mechanical cleaning with soft brushes</li>
          <li><strong>Rinsing:</strong> Complete removal of cleaning agents</li>
          <li><strong>Disinfection:</strong> Elimination of microorganisms</li>
          <li><strong>Final Rinse:</strong> Final wash with sterile water</li>
        </ul>
        
        <h2>Maintenance Program</h2>
        <p>Creating a regular maintenance program ensures long tank life:</p>
        
        <h3>Daily Checks:</h3>
        <ul>
          <li>Visual inspection</li>
          <li>Leak check</li>
          <li>Valve and connection check</li>
        </ul>
        
        <h3>Weekly Maintenance:</h3>
        <ul>
          <li>Detailed cleaning</li>
          <li>Gasket and seal check</li>
          <li>Pressure tests</li>
        </ul>
        
        <h3>Monthly Maintenance:</h3>
        <ul>
          <li>Weld point inspection</li>
          <li>Surface roughness check</li>
          <li>Corrosion check</li>
        </ul>
        
        <h2>Cleaning Agents to Use</h2>
        <p>Using appropriate cleaning agents for stainless steel is very important:</p>
        <ul>
          <li><strong>Alkaline Cleaners:</strong> For oil and protein residues</li>
          <li><strong>Acid Cleaners:</strong> For mineral deposits</li>
          <li><strong>Neutral Cleaners:</strong> For general cleaning</li>
        </ul>
        
        <blockquote>
          <p><strong>Important Note:</strong> Chlorine-based cleaners can cause corrosion in stainless steel. Should be avoided.</p>
        </blockquote>
        
        <h2>Conclusion</h2>
        <p>With regular maintenance and proper cleaning methods, stainless steel tanks can operate trouble-free for years. Getting professional support is important both to maintain hygiene standards and to extend equipment life.</p>
        
        <p>As Ertunç Stainless Steel, we are at your service with our expert team on stainless steel tank maintenance and cleaning.</p>
      `
    },
    'gida-endustrisinde-hijyen-standartlari': {
      title: 'Gıda Endüstrisinde Hijyen Standartları',
      excerpt: 'Gıda üretiminde hijyen standartları ve paslanmaz çelik ekipmanların önemi.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg',
      category: 'industry',
      date: '2025-01-10',
      author: 'Ertunç Paslanmaz',
      readTime: '6 dk okuma',
      content: `
        <h2>Gıda Güvenliği ve Hijyen</h2>
        <p>Gıda endüstrisinde hijyen, tüketici sağlığı ve ürün kalitesi açısından en kritik faktördür. Paslanmaz çelik ekipmanlar, hijyenik üretim için ideal malzemelerdir.</p>

        <h2>Paslanmaz Çeliğin Avantajları</h2>
        <ul>
          <li><strong>Korozyona Dayanıklı:</strong> Asit ve nem ortamlarında bozulmaz</li>
          <li><strong>Kolay Temizlenebilir:</strong> Düz yüzeyler bakterilerin tutunmasını engeller</li>
          <li><strong>Hijyenik:</strong> Gözeneksiz yapısı mikroorganizma üremesini önler</li>
          <li><strong>Dayanıklı:</strong> Uzun ömürlü ve ekonomiktir</li>
        </ul>

        <h2>Uluslararası Hijyen Standartları</h2>
        <h3>HACCP</h3>
        <p>Gıda güvenliği yönetim sistemi olarak dünya çapında kabul görmüştür.</p>

        <h3>ISO 22000</h3>
        <p>Gıda güvenliği yönetim sistemi standardıdır.</p>

        <h2>Sonuç</h2>
        <p>Gıda endüstrisinde hijyen standartlarına uyum kritiktir. Paslanmaz çelik ekipmanlar en uygun seçenektir.</p>
      `
    },
    'hygiene-standards-in-food-industry': {
      title: 'Hygiene Standards in Food Industry',
      excerpt: 'Hygiene standards in food production and the importance of stainless steel equipment.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg',
      category: 'industry',
      date: '2025-01-10',
      author: 'Ertunç Paslanmaz',
      readTime: '6 min read',
      content: `
        <h2>Food Safety and Hygiene</h2>
        <p>In the food industry, hygiene is the most critical factor in terms of consumer health and product quality. Stainless steel equipment is ideal material for hygienic production.</p>

        <h2>Advantages of Stainless Steel</h2>
        <ul>
          <li><strong>Corrosion Resistant:</strong> Does not deteriorate in acidic and humid environments</li>
          <li><strong>Easy to Clean:</strong> Smooth surfaces prevent bacteria adhesion</li>
          <li><strong>Hygienic:</strong> Non-porous structure prevents microorganism growth</li>
          <li><strong>Durable:</strong> Long-lasting and economical</li>
        </ul>

        <h2>International Hygiene Standards</h2>
        <h3>HACCP</h3>
        <p>Recognized worldwide as a food safety management system.</p>

        <h3>ISO 22000</h3>
        <p>Food safety management system standard.</p>

        <h2>Conclusion</h2>
        <p>Compliance with hygiene standards in the food industry is critical. Stainless steel equipment is the most suitable option.</p>
      `
    },
    'mikser-sistemlerinde-verimlilik-artirma': {
      title: 'Mikser Sistemlerinde Verimlilik Artırma',
      excerpt: 'Endüstriyel mikser sistemlerinde verimliliği artırmak için uygulayabileceğiniz pratik yöntemler.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      category: 'technology',
      date: '2025-01-05',
      author: 'Ertunç Paslanmaz',
      readTime: '7 dk okuma',
      content: `
        <h2>Mikser Sistemlerinin Önemi</h2>
        <p>Endüstriyel mikser sistemleri, gıda, kimya, ilaç ve kozmetik sektörlerinde kritik bir rol oynar. Verimli çalışan bir mikser sistemi, ürün kalitesini artırır ve üretim maliyetlerini düşürür.</p>

        <h2>Verimlilik Artırma Yöntemleri</h2>

        <h3>1. Doğru Mikser Seçimi</h3>
        <p>Her ürün için uygun mikser tipi seçilmelidir:</p>
        <ul>
          <li><strong>Paddle Mikserler:</strong> Yüksek viskoziteli ürünler için</li>
          <li><strong>Turbin Mikserler:</strong> Düşük viskoziteli sıvılar için</li>
          <li><strong>Anchor Mikserler:</strong> Çok yüksek viskoziteli ürünler için</li>
          <li><strong>Propeller Mikserler:</strong> Hızlı karışım gereken uygulamalar için</li>
        </ul>

        <h3>2. Optimum Hız Ayarı</h3>
        <p>Karıştırma hızı, ürün özelliklerine göre ayarlanmalıdır. Çok yüksek hız enerji israfına, çok düşük hız ise yetersiz karışıma neden olur.</p>

        <h3>3. Düzenli Bakım</h3>
        <p>Mikser sistemlerinin düzenli bakımı verimliliği artırır:</p>
        <ul>
          <li>Rulman kontrolü ve yağlama</li>
          <li>Conta ve keçe değişimi</li>
          <li>Motor ve redüktör kontrolü</li>
          <li>Pervane ve karıştırıcı elemanların kontrolü</li>
        </ul>

        <h2>Enerji Verimliliği</h2>
        <p>Enerji tüketimini azaltmak için:</p>
        <ul>
          <li>Değişken hız sürücüleri (VFD) kullanın</li>
          <li>Optimum karıştırma süresini belirleyin</li>
          <li>Gereksiz boşta çalışmayı önleyin</li>
          <li>Enerji verimli motorlar tercih edin</li>
        </ul>

        <h2>Otomasyon ve Kontrol</h2>
        <p>Modern otomasyon sistemleri ile:</p>
        <ul>
          <li>Karıştırma parametrelerini otomatik kontrol edin</li>
          <li>Viskozite ve sıcaklık sensörleri kullanın</li>
          <li>PLC tabanlı kontrol sistemleri entegre edin</li>
          <li>Uzaktan izleme ve kontrol sağlayın</li>
        </ul>

        <blockquote>
          <p><strong>İpucu:</strong> Mikser sistemlerinde %20-30 verimlilik artışı, yıllık enerji maliyetlerinde önemli tasarruf sağlar.</p>
        </blockquote>

        <h2>Sonuç</h2>
        <p>Doğru ekipman seçimi, optimum ayarlar ve düzenli bakım ile mikser sistemlerinde önemli verimlilik artışı sağlanabilir. Ertunç Paslanmaz olarak, mikser sistemlerinizin verimliliğini artırmak için danışmanlık hizmeti sunuyoruz.</p>
      `
    },
    'increasing-efficiency-in-mixer-systems': {
      title: 'Increasing Efficiency in Mixer Systems',
      excerpt: 'Practical methods you can apply to increase efficiency in industrial mixer systems.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070',
      category: 'technology',
      date: '2025-01-05',
      author: 'Ertunç Paslanmaz',
      readTime: '7 min read',
      content: `
        <h2>Importance of Mixer Systems</h2>
        <p>Industrial mixer systems play a critical role in food, chemical, pharmaceutical and cosmetic sectors. An efficiently operating mixer system increases product quality and reduces production costs.</p>

        <h2>Efficiency Improvement Methods</h2>

        <h3>1. Correct Mixer Selection</h3>
        <p>Appropriate mixer type should be selected for each product:</p>
        <ul>
          <li><strong>Paddle Mixers:</strong> For high viscosity products</li>
          <li><strong>Turbine Mixers:</strong> For low viscosity liquids</li>
          <li><strong>Anchor Mixers:</strong> For very high viscosity products</li>
          <li><strong>Propeller Mixers:</strong> For applications requiring fast mixing</li>
        </ul>

        <h3>2. Optimum Speed Setting</h3>
        <p>Mixing speed should be adjusted according to product characteristics. Too high speed causes energy waste, too low speed causes insufficient mixing.</p>

        <h3>3. Regular Maintenance</h3>
        <p>Regular maintenance of mixer systems increases efficiency:</p>
        <ul>
          <li>Bearing inspection and lubrication</li>
          <li>Gasket and seal replacement</li>
          <li>Motor and gearbox inspection</li>
          <li>Impeller and mixing element inspection</li>
        </ul>

        <h2>Energy Efficiency</h2>
        <p>To reduce energy consumption:</p>
        <ul>
          <li>Use variable frequency drives (VFD)</li>
          <li>Determine optimum mixing time</li>
          <li>Prevent unnecessary idle operation</li>
          <li>Prefer energy efficient motors</li>
        </ul>

        <h2>Automation and Control</h2>
        <p>With modern automation systems:</p>
        <ul>
          <li>Automatically control mixing parameters</li>
          <li>Use viscosity and temperature sensors</li>
          <li>Integrate PLC-based control systems</li>
          <li>Provide remote monitoring and control</li>
        </ul>

        <blockquote>
          <p><strong>Tip:</strong> 20-30% efficiency increase in mixer systems provides significant savings in annual energy costs.</p>
        </blockquote>

        <h2>Conclusion</h2>
        <p>Significant efficiency increase can be achieved in mixer systems with correct equipment selection, optimum settings and regular maintenance. As Ertunç Stainless Steel, we offer consultancy services to increase the efficiency of your mixer systems.</p>
      `
    },
    'paslanmaz-celik-kalite-standartlari': {
      title: 'Paslanmaz Çelik Kalite Standartları',
      excerpt: 'Paslanmaz çelik malzemelerde kalite standartları ve sertifikasyonlar hakkında detaylı bilgi.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070',
      category: 'industry',
      date: '2024-12-28',
      author: 'Ertunç Paslanmaz',
      readTime: '8 dk okuma',
      content: `
        <h2>Paslanmaz Çelik Nedir?</h2>
        <p>Paslanmaz çelik, en az %10.5 krom içeren, korozyona karşı dirençli çelik alaşımıdır. Krom, yüzeyde oksijen ile reaksiyona girerek koruyucu bir tabaka oluşturur.</p>

        <h2>Paslanmaz Çelik Tipleri</h2>

        <h3>304 Kalite (18/8)</h3>
        <p>En yaygın kullanılan paslanmaz çelik türüdür:</p>
        <ul>
          <li>%18 Krom, %8 Nikel içerir</li>
          <li>Gıda endüstrisi için idealdir</li>
          <li>Kolay işlenebilir ve kaynaklanabilir</li>
          <li>Maliyet-performans dengesi mükemmeldir</li>
        </ul>

        <h3>316 Kalite (18/10)</h3>
        <p>Daha yüksek korozyon direnci sunar:</p>
        <ul>
          <li>%18 Krom, %10 Nikel, %2-3 Molibden içerir</li>
          <li>Deniz suyu ve kimyasal ortamlara dayanıklıdır</li>
          <li>İlaç ve kimya endüstrisi için tercih edilir</li>
          <li>304'e göre daha pahalıdır</li>
        </ul>

        <h3>430 Kalite</h3>
        <p>Ferritik paslanmaz çelik:</p>
        <ul>
          <li>%17 Krom içerir, nikel içermez</li>
          <li>Manyetik özelliğe sahiptir</li>
          <li>Daha ekonomiktir</li>
          <li>Dekoratif uygulamalar için uygundur</li>
        </ul>

        <h2>Uluslararası Standartlar</h2>

        <h3>AISI (American Iron and Steel Institute)</h3>
        <p>Amerika'da kullanılan standart sistem. Örnek: AISI 304, AISI 316</p>

        <h3>EN (European Norm)</h3>
        <p>Avrupa standardı. Örnek: EN 1.4301 (304), EN 1.4401 (316)</p>

        <h3>DIN (Deutsches Institut für Normung)</h3>
        <p>Alman standardı. Örnek: DIN X5CrNi18-10 (304)</p>

        <h2>Kalite Kontrol Testleri</h2>

        <h3>Kimyasal Analiz</h3>
        <p>Malzemenin kimyasal bileşimini doğrular. Spektrometre ile yapılır.</p>

        <h3>Mekanik Testler</h3>
        <ul>
          <li><strong>Çekme Testi:</strong> Mukavemet ve uzama değerlerini ölçer</li>
          <li><strong>Sertlik Testi:</strong> Malzeme sertliğini belirler</li>
          <li><strong>Darbe Testi:</strong> Kırılma direncini test eder</li>
        </ul>

        <h3>Korozyon Testleri</h3>
        <ul>
          <li><strong>Tuz Spreyi Testi:</strong> Korozyon direncini test eder</li>
          <li><strong>Intergranüler Korozyon Testi:</strong> Kaynak bölgelerini kontrol eder</li>
        </ul>

        <h2>Sertifikasyonlar</h2>

        <h3>Mill Test Certificate (MTC)</h3>
        <p>Üretici tarafından verilen malzeme sertifikasıdır. EN 10204 3.1 veya 3.2 tipinde olabilir.</p>

        <h3>FDA Onayı</h3>
        <p>Gıda ile temas eden malzemeler için gereklidir.</p>

        <h3>CE İşareti</h3>
        <p>Avrupa Birliği standartlarına uygunluğu gösterir.</p>

        <blockquote>
          <p><strong>Önemli:</strong> Gıda ve ilaç endüstrisinde kullanılacak paslanmaz çelik ekipmanlar için mutlaka sertifika talep edilmelidir.</p>
        </blockquote>

        <h2>Yüzey İşlemleri</h2>

        <h3>2B Yüzey</h3>
        <p>Soğuk haddelenmiş, mat görünümlü standart yüzeydir.</p>

        <h3>BA Yüzey (Bright Annealed)</h3>
        <p>Parlak, ayna gibi yüzeydir. Gıda endüstrisi için idealdir.</p>

        <h3>Elektro-Polisaj</h3>
        <p>Elektrokimyasal işlemle yüzey pürüzlülüğü azaltılır. En hijyenik yüzey işlemidir.</p>

        <h2>Sonuç</h2>
        <p>Doğru paslanmaz çelik kalitesi seçimi, uygulamanın başarısı için kritiktir. Ertunç Paslanmaz olarak, tüm ürünlerimizde uluslararası standartlara uygun, sertifikalı malzemeler kullanıyoruz.</p>
      `
    },
    'stainless-steel-quality-standards': {
      title: 'Stainless Steel Quality Standards',
      excerpt: 'Detailed information about quality standards and certifications in stainless steel materials.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070',
      category: 'industry',
      date: '2024-12-28',
      author: 'Ertunç Paslanmaz',
      readTime: '8 min read',
      content: `
        <h2>What is Stainless Steel?</h2>
        <p>Stainless steel is a corrosion-resistant steel alloy containing at least 10.5% chromium. Chromium reacts with oxygen on the surface to form a protective layer.</p>

        <h2>Types of Stainless Steel</h2>

        <h3>304 Grade (18/8)</h3>
        <p>The most commonly used stainless steel type:</p>
        <ul>
          <li>Contains 18% Chromium, 8% Nickel</li>
          <li>Ideal for food industry</li>
          <li>Easy to process and weld</li>
          <li>Excellent cost-performance balance</li>
        </ul>

        <h3>316 Grade (18/10)</h3>
        <p>Offers higher corrosion resistance:</p>
        <ul>
          <li>Contains 18% Chromium, 10% Nickel, 2-3% Molybdenum</li>
          <li>Resistant to seawater and chemical environments</li>
          <li>Preferred for pharmaceutical and chemical industries</li>
          <li>More expensive than 304</li>
        </ul>

        <h2>International Standards</h2>

        <h3>AISI (American Iron and Steel Institute)</h3>
        <p>Standard system used in America. Example: AISI 304, AISI 316</p>

        <h3>EN (European Norm)</h3>
        <p>European standard. Example: EN 1.4301 (304), EN 1.4401 (316)</p>

        <h2>Quality Control Tests</h2>

        <h3>Chemical Analysis</h3>
        <p>Verifies the chemical composition of the material. Performed with spectrometer.</p>

        <h3>Mechanical Tests</h3>
        <ul>
          <li><strong>Tensile Test:</strong> Measures strength and elongation values</li>
          <li><strong>Hardness Test:</strong> Determines material hardness</li>
          <li><strong>Impact Test:</strong> Tests fracture resistance</li>
        </ul>

        <h2>Certifications</h2>

        <h3>Mill Test Certificate (MTC)</h3>
        <p>Material certificate issued by manufacturer. Can be EN 10204 3.1 or 3.2 type.</p>

        <h3>FDA Approval</h3>
        <p>Required for materials in contact with food.</p>

        <blockquote>
          <p><strong>Important:</strong> Certificates must be requested for stainless steel equipment to be used in food and pharmaceutical industries.</p>
        </blockquote>

        <h2>Conclusion</h2>
        <p>Selecting the correct stainless steel grade is critical for application success. As Ertunç Stainless Steel, we use certified materials that comply with international standards in all our products.</p>
      `
    },
    'konveyor-sistemlerinde-otomasyon': {
      title: 'Konveyör Sistemlerinde Otomasyon',
      excerpt: 'Modern konveyör sistemlerinde otomasyon teknolojileri ve avantajları.',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070',
      category: 'technology',
      date: '2024-12-20',
      author: 'Ertunç Paslanmaz',
      readTime: '6 dk okuma',
      content: `
        <h2>Konveyör Sistemlerinde Otomasyon</h2>
        <p>Modern üretim tesislerinde konveyör sistemleri, malzeme taşıma ve üretim akışının omurgasını oluşturur. Otomasyon teknolojileri, bu sistemlerin verimliliğini ve güvenilirliğini önemli ölçüde artırır.</p>

        <h2>Otomasyon Avantajları</h2>

        <h3>1. Verimlilik Artışı</h3>
        <ul>
          <li>%30-50 daha hızlı malzeme taşıma</li>
          <li>24/7 kesintisiz çalışma</li>
          <li>İnsan hatasını minimize etme</li>
          <li>Optimum hız kontrolü</li>
        </ul>

        <h3>2. Maliyet Tasarrufu</h3>
        <ul>
          <li>İşçilik maliyetlerinde azalma</li>
          <li>Enerji tüketiminde optimizasyon</li>
          <li>Bakım maliyetlerinde düşüş</li>
          <li>Hata ve fire oranında azalma</li>
        </ul>

        <h3>3. Güvenlik</h3>
        <ul>
          <li>İş kazalarında azalma</li>
          <li>Acil durum sensörleri</li>
          <li>Otomatik durdurma sistemleri</li>
          <li>Güvenlik bariyerleri</li>
        </ul>

        <h2>Otomasyon Teknolojileri</h2>

        <h3>PLC (Programmable Logic Controller)</h3>
        <p>Konveyör sistemlerinin beyni olan PLC'ler:</p>
        <ul>
          <li>Hız kontrolü</li>
          <li>Yön kontrolü</li>
          <li>Sensör entegrasyonu</li>
          <li>Alarm yönetimi</li>
        </ul>

        <h3>Sensör Sistemleri</h3>
        <p>Çeşitli sensörler ile:</p>
        <ul>
          <li><strong>Fotoelektrik Sensörler:</strong> Ürün algılama</li>
          <li><strong>Proximity Sensörler:</strong> Metal algılama</li>
          <li><strong>Lazer Sensörler:</strong> Mesafe ölçümü</li>
          <li><strong>Ağırlık Sensörleri:</strong> Yük kontrolü</li>
        </ul>

        <h3>Değişken Hız Sürücüleri (VFD)</h3>
        <p>Motor hızını kontrol ederek:</p>
        <ul>
          <li>Enerji tasarrufu sağlar</li>
          <li>Yumuşak başlatma/durdurma</li>
          <li>Hassas hız kontrolü</li>
          <li>Motor ömrünü uzatır</li>
        </ul>

        <h2>Endüstri 4.0 Entegrasyonu</h2>

        <h3>IoT (Internet of Things)</h3>
        <p>Nesnelerin interneti ile:</p>
        <ul>
          <li>Uzaktan izleme ve kontrol</li>
          <li>Gerçek zamanlı veri toplama</li>
          <li>Bulut tabanlı analiz</li>
          <li>Mobil uygulama desteği</li>
        </ul>

        <h3>Yapay Zeka ve Makine Öğrenmesi</h3>
        <p>AI teknolojileri ile:</p>
        <ul>
          <li>Öngörücü bakım</li>
          <li>Optimum rota planlama</li>
          <li>Arıza tespiti</li>
          <li>Performans optimizasyonu</li>
        </ul>

        <h2>Uygulama Örnekleri</h2>

        <h3>Gıda Endüstrisi</h3>
        <p>Otomatik konveyör sistemleri ile:</p>
        <ul>
          <li>Hijyenik malzeme taşıma</li>
          <li>Sıcaklık kontrollü taşıma</li>
          <li>Otomatik paketleme entegrasyonu</li>
          <li>Kalite kontrol sistemleri</li>
        </ul>

        <h3>Lojistik ve Depolama</h3>
        <p>Akıllı konveyör sistemleri:</p>
        <ul>
          <li>Otomatik sıralama</li>
          <li>Barkod okuma</li>
          <li>Ağırlık kontrolü</li>
          <li>Yönlendirme sistemleri</li>
        </ul>

        <blockquote>
          <p><strong>Gelecek:</strong> Otonom konveyör sistemleri, yapay zeka ile kendi kendine optimize olacak ve bakım ihtiyaçlarını önceden bildirecek.</p>
        </blockquote>

        <h2>Sonuç</h2>
        <p>Konveyör sistemlerinde otomasyon, modern üretim tesisleri için artık bir lüks değil, zorunluluktur. Ertunç Paslanmaz olarak, en son otomasyon teknolojileri ile donatılmış konveyör sistemleri tasarlıyor ve kuruyoruz.</p>
      `
    },
    'automation-in-conveyor-systems': {
      title: 'Automation in Conveyor Systems',
      excerpt: 'Automation technologies and advantages in modern conveyor systems.',
      image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070',
      category: 'technology',
      date: '2024-12-20',
      author: 'Ertunç Paslanmaz',
      readTime: '6 min read',
      content: `
        <h2>Automation in Conveyor Systems</h2>
        <p>In modern production facilities, conveyor systems form the backbone of material handling and production flow. Automation technologies significantly increase the efficiency and reliability of these systems.</p>

        <h2>Automation Advantages</h2>

        <h3>1. Efficiency Increase</h3>
        <ul>
          <li>30-50% faster material handling</li>
          <li>24/7 uninterrupted operation</li>
          <li>Minimize human error</li>
          <li>Optimum speed control</li>
        </ul>

        <h3>2. Cost Savings</h3>
        <ul>
          <li>Reduction in labor costs</li>
          <li>Optimization in energy consumption</li>
          <li>Decrease in maintenance costs</li>
          <li>Reduction in error and waste rates</li>
        </ul>

        <h2>Automation Technologies</h2>

        <h3>PLC (Programmable Logic Controller)</h3>
        <p>PLCs, the brain of conveyor systems:</p>
        <ul>
          <li>Speed control</li>
          <li>Direction control</li>
          <li>Sensor integration</li>
          <li>Alarm management</li>
        </ul>

        <h3>Sensor Systems</h3>
        <p>With various sensors:</p>
        <ul>
          <li><strong>Photoelectric Sensors:</strong> Product detection</li>
          <li><strong>Proximity Sensors:</strong> Metal detection</li>
          <li><strong>Laser Sensors:</strong> Distance measurement</li>
          <li><strong>Weight Sensors:</strong> Load control</li>
        </ul>

        <h2>Industry 4.0 Integration</h2>

        <h3>IoT (Internet of Things)</h3>
        <p>With Internet of Things:</p>
        <ul>
          <li>Remote monitoring and control</li>
          <li>Real-time data collection</li>
          <li>Cloud-based analysis</li>
          <li>Mobile application support</li>
        </ul>

        <h3>Artificial Intelligence and Machine Learning</h3>
        <p>With AI technologies:</p>
        <ul>
          <li>Predictive maintenance</li>
          <li>Optimum route planning</li>
          <li>Fault detection</li>
          <li>Performance optimization</li>
        </ul>

        <blockquote>
          <p><strong>Future:</strong> Autonomous conveyor systems will self-optimize with artificial intelligence and predict maintenance needs in advance.</p>
        </blockquote>

        <h2>Conclusion</h2>
        <p>Automation in conveyor systems is no longer a luxury but a necessity for modern production facilities. As Ertunç Stainless Steel, we design and install conveyor systems equipped with the latest automation technologies.</p>
      `
    },
    'yeni-fabrika-acilisimiz': {
      title: 'Yeni Fabrika Açılışımız',
      excerpt: 'Esenyurt\'taki yeni üretim tesisimiz hizmete açıldı. Modern teknoloji ve geniş üretim kapasitesi.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg',
      category: 'news',
      date: '2024-12-15',
      author: 'Ertunç Paslanmaz',
      readTime: '4 dk okuma',
      content: `
        <h2>Yeni Fabrikamız Hizmete Açıldı!</h2>
        <p>Ertunç Paslanmaz ailesi olarak, Esenyurt'taki yeni ve modern üretim tesisimizi hizmete açmanın gururunu yaşıyoruz. 15 yıllık deneyimimizi en son teknoloji ile birleştirerek, müşterilerimize daha iyi hizmet sunmak için büyük bir adım attık.</p>

        <h2>Tesis Özellikleri</h2>

        <h3>Üretim Alanı</h3>
        <ul>
          <li><strong>Toplam Alan:</strong> 5.000 m²</li>
          <li><strong>Kapalı Üretim Alanı:</strong> 3.500 m²</li>
          <li><strong>Depo ve Lojistik:</strong> 1.000 m²</li>
          <li><strong>İdari Binalar:</strong> 500 m²</li>
        </ul>

        <h3>Modern Ekipmanlar</h3>
        <p>Yeni fabrikamızda en son teknoloji ekipmanlar bulunmaktadır:</p>
        <ul>
          <li>CNC Lazer Kesim Makinesi</li>
          <li>CNC Abkant Pres (3 adet)</li>
          <li>Otomatik Kaynak Robotları</li>
          <li>Elektro-Polisaj Ünitesi</li>
          <li>Kalite Kontrol Laboratuvarı</li>
        </ul>

        <h2>Üretim Kapasitesi</h2>
        <p>Yeni tesisimiz ile üretim kapasitemizi önemli ölçüde artırdık:</p>
        <ul>
          <li><strong>Tank Üretimi:</strong> Aylık 50+ adet</li>
          <li><strong>Mikser Sistemleri:</strong> Aylık 30+ adet</li>
          <li><strong>Konveyör Sistemleri:</strong> Aylık 100+ metre</li>
          <li><strong>Özel Projeler:</strong> Sınırsız kapasite</li>
        </ul>

        <h2>Çevre ve Sürdürülebilirlik</h2>
        <p>Yeni fabrikamızda çevre dostu üretim anlayışını benimsedik:</p>
        <ul>
          <li><strong>Güneş Enerjisi:</strong> Çatı üzeri 200 kW güneş paneli</li>
          <li><strong>Atık Yönetimi:</strong> %100 geri dönüşüm sistemi</li>
          <li><strong>Su Tasarrufu:</strong> Kapalı devre su sistemi</li>
          <li><strong>Enerji Verimliliği:</strong> LED aydınlatma ve akıllı sistemler</li>
        </ul>

        <h2>Çalışma Ortamı</h2>
        <p>Çalışanlarımız için modern ve konforlu bir ortam oluşturduk:</p>
        <ul>
          <li>Klimalı üretim alanları</li>
          <li>Modern sosyal tesisler</li>
          <li>Yemekhane ve dinlenme alanları</li>
          <li>Spor salonu</li>
          <li>Otopark</li>
        </ul>

        <h2>Kalite ve Sertifikalar</h2>
        <p>Yeni tesisimizde uluslararası kalite standartlarına uygun üretim yapıyoruz:</p>
        <ul>
          <li>ISO 9001:2015 Kalite Yönetim Sistemi</li>
          <li>ISO 14001:2015 Çevre Yönetim Sistemi</li>
          <li>ISO 45001:2018 İş Sağlığı ve Güvenliği</li>
          <li>CE Belgesi</li>
          <li>TSE Belgesi</li>
        </ul>

        <blockquote>
          <p><strong>Hedefimiz:</strong> Türkiye'nin en modern ve çevre dostu paslanmaz çelik üretim tesisi olmak!</p>
        </blockquote>

        <h2>Gelecek Planları</h2>
        <p>Yeni fabrikamız ile birlikte büyüme hedeflerimiz:</p>
        <ul>
          <li>2025 yılında %50 kapasite artışı</li>
          <li>Yeni ürün grupları ekleme</li>
          <li>İhracat pazarlarına açılma</li>
          <li>Ar-Ge merkezi kurulumu</li>
          <li>100+ yeni istihdam</li>
        </ul>

        <h2>Teşekkür</h2>
        <p>Bu başarıda emeği geçen tüm çalışanlarımıza, iş ortaklarımıza ve müşterilerimize teşekkür ederiz. Yeni fabrikamızı ziyaret etmek için bizimle iletişime geçebilirsiniz.</p>

        <p><strong>Adres:</strong> Esenyurt, İstanbul<br>
        <strong>Telefon:</strong> +90 (212) 672 10 17<br>
        <strong>E-posta:</strong> info@ertuncpaslanmaz.com</p>
      `
    },
    'our-new-factory-opening': {
      title: 'Our New Factory Opening',
      excerpt: 'Our new production facility in Esenyurt has been opened. Modern technology and wide production capacity.',
      image: 'https://ertuncpaslanmaz.com/wp-content/uploads/2025/05/DJI_20250105132823_0027_D-kopyasi.jpeg',
      category: 'news',
      date: '2024-12-15',
      author: 'Ertunç Paslanmaz',
      readTime: '4 min read',
      content: `
        <h2>Our New Factory is Now Open!</h2>
        <p>As the Ertunç Stainless Steel family, we are proud to open our new and modern production facility in Esenyurt. We have taken a big step to serve our customers better by combining our 15 years of experience with the latest technology.</p>

        <h2>Facility Features</h2>

        <h3>Production Area</h3>
        <ul>
          <li><strong>Total Area:</strong> 5,000 m²</li>
          <li><strong>Indoor Production Area:</strong> 3,500 m²</li>
          <li><strong>Warehouse and Logistics:</strong> 1,000 m²</li>
          <li><strong>Administrative Buildings:</strong> 500 m²</li>
        </ul>

        <h3>Modern Equipment</h3>
        <p>Our new factory has the latest technology equipment:</p>
        <ul>
          <li>CNC Laser Cutting Machine</li>
          <li>CNC Press Brake (3 units)</li>
          <li>Automatic Welding Robots</li>
          <li>Electro-Polishing Unit</li>
          <li>Quality Control Laboratory</li>
        </ul>

        <h2>Production Capacity</h2>
        <p>With our new facility, we have significantly increased our production capacity:</p>
        <ul>
          <li><strong>Tank Production:</strong> 50+ units per month</li>
          <li><strong>Mixer Systems:</strong> 30+ units per month</li>
          <li><strong>Conveyor Systems:</strong> 100+ meters per month</li>
          <li><strong>Custom Projects:</strong> Unlimited capacity</li>
        </ul>

        <h2>Environment and Sustainability</h2>
        <p>We have adopted an environmentally friendly production approach in our new factory:</p>
        <ul>
          <li><strong>Solar Energy:</strong> 200 kW rooftop solar panels</li>
          <li><strong>Waste Management:</strong> 100% recycling system</li>
          <li><strong>Water Conservation:</strong> Closed circuit water system</li>
          <li><strong>Energy Efficiency:</strong> LED lighting and smart systems</li>
        </ul>

        <h2>Quality and Certificates</h2>
        <p>We produce in accordance with international quality standards in our new facility:</p>
        <ul>
          <li>ISO 9001:2015 Quality Management System</li>
          <li>ISO 14001:2015 Environmental Management System</li>
          <li>ISO 45001:2018 Occupational Health and Safety</li>
          <li>CE Certificate</li>
        </ul>

        <blockquote>
          <p><strong>Our Goal:</strong> To be Turkey's most modern and environmentally friendly stainless steel production facility!</p>
        </blockquote>

        <h2>Thank You</h2>
        <p>We thank all our employees, business partners and customers who contributed to this success. You can contact us to visit our new factory.</p>

        <p><strong>Address:</strong> Esenyurt, Istanbul<br>
        <strong>Phone:</strong> +90 (212) 672 10 17<br>
        <strong>Email:</strong> info@ertuncpaslanmaz.com</p>
      `
    },
  };

  // Blog yazısını bul - Find blog post
  const post = blogContents[slug];

  // Eğer blog bulunamazsa 404 - If blog not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === 'tr' ? 'Blog Yazısı Bulunamadı' : 'Blog Post Not Found'}
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft size={20} />
            <span>{language === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}</span>
          </Link>
        </div>
      </div>
    );
  }

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
        title={`${post.title} - Ertunç Paslanmaz Blog`}
        description={post.excerpt}
        keywords={language === 'tr'
          ? `${post.title}, paslanmaz mikser, paslanmaz stok tank, paslanmaz toz mikseri, depolama tankı, paslanmaz proses, paslanmaz hijyen ekipmanları, ${categories[post.category]}`
          : `${post.title}, stainless steel mixer, stainless steel storage tank, powder mixer, storage tank, stainless steel process, stainless steel hygiene equipment, ${categories[post.category]}`
        }
        image={post.image}
        type="article"
        article={true}
      />

      {/* Hero Section - Blog Header */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image - Arka Plan Resmi */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${post.image})`,
          }}
        ></div>

        {/* Dark Overlay - Koyu Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>

        {/* Content - İçerik */}
        <div className="container-custom relative z-10 text-white py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
            <Link to="/" className="hover:text-primary-300 transition-colors">
              {language === 'tr' ? 'Anasayfa' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary-300 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-300">{post.title}</span>
          </div>

          {/* Category Badge - Kategori Rozeti */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600/30 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-primary-400/30 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Tag size={16} />
            {categories[post.category]}
          </div>

          {/* Title - Başlık */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {post.title}
          </h1>

          {/* Meta Info - Meta Bilgiler */}
          <div className="flex flex-wrap items-center gap-6 text-gray-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content - Blog İçeriği */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Main Content Card - Ana İçerik Kartı */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Featured Image - Öne Çıkan Görsel */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content Wrapper - İçerik Sarmalayıcı */}
            <div className="p-8 md:p-12 lg:p-16">
              {/* Content - İçerik */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:text-gray-900
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-gradient-to-r prose-h2:from-primary-500 prose-h2:to-orange-500 prose-h2:relative
                  prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:bottom-0 prose-h2:before:w-20 prose-h2:before:h-1 prose-h2:before:bg-gradient-to-r prose-h2:before:from-primary-600 prose-h2:before:to-orange-500 prose-h2:before:rounded-full
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5 prose-h3:text-primary-700 prose-h3:flex prose-h3:items-center prose-h3:gap-3
                  prose-h3:before:content-['▸'] prose-h3:before:text-orange-500 prose-h3:before:text-3xl
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                  prose-ul:my-8 prose-ul:space-y-4 prose-ul:bg-gradient-to-br prose-ul:from-gray-50 prose-ul:to-primary-50/30 prose-ul:p-6 prose-ul:rounded-2xl prose-ul:border prose-ul:border-gray-200
                  prose-ol:my-8 prose-ol:space-y-4 prose-ol:bg-gradient-to-br prose-ol:from-gray-50 prose-ol:to-orange-50/30 prose-ol:p-6 prose-ol:rounded-2xl prose-ol:border prose-ol:border-gray-200
                  prose-li:text-gray-700 prose-li:text-base prose-li:leading-relaxed
                  prose-li:marker:text-primary-600 prose-li:marker:font-bold
                  prose-strong:text-gray-900 prose-strong:font-bold prose-strong:text-primary-700
                  prose-blockquote:border-l-0 prose-blockquote:bg-gradient-to-r prose-blockquote:from-amber-50 prose-blockquote:via-orange-50 prose-blockquote:to-amber-50 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-2xl prose-blockquote:my-10 prose-blockquote:shadow-lg prose-blockquote:border-2 prose-blockquote:border-orange-200
                  prose-blockquote:relative prose-blockquote:before:content-['💡'] prose-blockquote:before:absolute prose-blockquote:before:left-4 prose-blockquote:before:top-4 prose-blockquote:before:text-3xl
                  prose-blockquote:pl-16
                  prose-a:text-primary-600 prose-a:no-underline prose-a:font-semibold hover:prose-a:text-primary-700 hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Section - Etiketler Bölümü */}
              <div className="mt-16 pt-8 border-t-2 border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Tag size={24} className="text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {language === 'tr' ? 'Etiketler' : 'Tags'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold hover:from-primary-200 hover:to-primary-300 transition-all cursor-pointer">
                    {language === 'tr' ? 'Paslanmaz Çelik' : 'Stainless Steel'}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full text-sm font-semibold hover:from-orange-200 hover:to-orange-300 transition-all cursor-pointer">
                    {categories[post.category]}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:from-gray-200 hover:to-gray-300 transition-all cursor-pointer">
                    {language === 'tr' ? 'Endüstri' : 'Industry'}
                  </span>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-sm font-semibold hover:from-blue-200 hover:to-blue-300 transition-all cursor-pointer">
                    {language === 'tr' ? 'Üretim' : 'Production'}
                  </span>
                </div>
              </div>

              {/* Share Buttons - Paylaş Butonları */}
              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <Share2 size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg">
                          {language === 'tr' ? 'Bu yazıyı paylaş' : 'Share this article'}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {language === 'tr' ? 'Sosyal medyada paylaşın' : 'Share on social media'}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <span>Facebook</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <span>Twitter</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 font-semibold flex items-center gap-2 text-sm sm:text-base">
                        <span>LinkedIn</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Blog Button - Blog'a Dön Butonu */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              <span>{language === 'tr' ? 'Tüm Blog Yazıları' : 'All Blog Posts'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Harekete Geçirici Bölüm */}
      <section className="relative section overflow-hidden">
        {/* Background with pattern - Desenli arka plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-orange-600"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon - İkon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <ArrowRight size={40} className="text-white" />
            </div>

            {/* Title - Başlık */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'tr'
                ? 'Projeleriniz İçin Bizimle İletişime Geçin'
                : 'Contact Us for Your Projects'}
            </h2>

            {/* Description - Açıklama */}
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {language === 'tr'
                ? 'Paslanmaz çelik çözümleriniz için uzman ekibimizle görüşün. 15 yıllık deneyimimizle projelerinize değer katıyoruz.'
                : 'Consult with our expert team for your stainless steel solutions. We add value to your projects with our 15 years of experience.'}
            </p>

            {/* Buttons - Butonlar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={language === 'tr' ? '/iletisim' : '/contact'}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
              >
                <span>{language === 'tr' ? 'İletişime Geç' : 'Get in Touch'}</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to={language === 'tr' ? '/urunler' : '/products'}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                <span>{language === 'tr' ? 'Ürünlerimiz' : 'Our Products'}</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats - İstatistikler */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-white/80">
                  {language === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80">
                  {language === 'tr' ? 'Tamamlanan Proje' : 'Completed Projects'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80">
                  {language === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;

