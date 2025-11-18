# 🚀 Netlify Deployment Rehberi

Bu rehber, Ertunç Paslanmaz web sitesinin Netlify'de nasıl deploy edileceğini açıklar.

## ✅ Yapılan Düzeltmeler

### 1. **netlify.toml Dosyası Eklendi**
Netlify için gerekli konfigürasyon dosyası oluşturuldu:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  
  [build.environment]
    NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Önemli Noktalar:**
- ✅ **Build Command**: `npm run build` - Vite build komutu
- ✅ **Publish Directory**: `dist` - Build çıktı klasörü
- ✅ **Node Version**: 18 - Uyumlu Node.js versiyonu
- ✅ **SPA Redirect**: Tüm route'lar index.html'e yönlendiriliyor

### 2. **vite.config.js Güncellendi**
Build ayarları optimize edildi:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000
  }
})
```

### 3. **Video Dosyası Kaldırıldı**
- ❌ `public/long_video.mp4` (57.89 MB) kaldırıldı
- ✅ Build boyutu küçültüldü
- ✅ Deploy süresi hızlandırıldı

---

## 🔧 Netlify'de Deploy Adımları

### Yöntem 1: GitHub Entegrasyonu (Önerilen)

1. **Netlify'e Giriş Yapın**
   - https://app.netlify.com adresine gidin
   - GitHub hesabınızla giriş yapın

2. **Yeni Site Ekleyin**
   - "Add new site" > "Import an existing project" tıklayın
   - "Deploy with GitHub" seçin
   - Repository'yi seçin: `gokhanazp/ertuncpaslanmaz`

3. **Build Ayarları (Otomatik Algılanacak)**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Deploy** butonuna tıklayın

4. **Deploy Tamamlandı! 🎉**
   - Netlify otomatik bir domain verecek: `https://random-name-123456.netlify.app`
   - Her GitHub push'ta otomatik deploy olacak

### Yöntem 2: Manuel Deploy

```bash
# Netlify CLI'yi yükleyin
npm install -g netlify-cli

# Netlify'e giriş yapın
netlify login

# Build yapın
npm run build

# Deploy edin
netlify deploy --prod --dir=dist
```

---

## 🌐 Custom Domain Bağlama

### 1. Netlify'de Domain Ayarları

1. Site dashboard'a gidin
2. "Domain settings" > "Add custom domain" tıklayın
3. Domain adınızı girin: `ertuncpaslanmaz.com`
4. Netlify size DNS kayıtlarını verecek

### 2. Domain Sağlayıcınızda DNS Ayarları

**A Record (Root Domain):**
```
Type: A
Name: @
Value: 75.2.60.5 (Netlify IP)
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

### 3. SSL Sertifikası (Otomatik)
- Netlify otomatik olarak Let's Encrypt SSL sertifikası oluşturacak
- 24 saat içinde HTTPS aktif olacak

---

## 🔍 Sorun Giderme

### Beyaz Ekran Sorunu ✅ (Çözüldü)

**Neden oldu?**
- SPA (Single Page Application) redirect kuralı eksikti
- Netlify, React Router route'larını bulamıyordu

**Çözüm:**
- `netlify.toml` dosyasında redirect kuralı eklendi
- Tüm route'lar `index.html`'e yönlendiriliyor

### Build Hatası

**Hata:** `Command failed with exit code 1`

**Çözüm:**
```bash
# Local'de test edin
npm run build

# Hata varsa düzeltin
npm install
npm run build
```

### 404 Hatası

**Hata:** Sayfa yenilendiğinde 404 hatası

**Çözüm:**
- `netlify.toml` dosyasının olduğundan emin olun
- Redirect kuralının doğru olduğunu kontrol edin

### Yavaş Build

**Çözüm:**
- `node_modules` cache'i temizleyin
- Netlify dashboard'da "Clear cache and retry deploy"

---

## 📊 Build Bilgileri

**Build Süresi:** ~2 saniye  
**Build Boyutu:** ~400 KB (video olmadan)  
**Chunk Boyutu:**
- CSS: 50.08 KB (gzip: 7.30 KB)
- JS: 323.26 KB (gzip: 91.38 KB)

---

## 🔐 Güvenlik ve Performans

### Security Headers (netlify.toml'da)
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### Cache Control
- **Statik dosyalar**: 1 yıl cache (immutable)
- **HTML dosyaları**: Cache yok (her zaman güncel)

---

## 📞 Destek

**Netlify Dokümantasyon:** https://docs.netlify.com  
**Netlify Status:** https://www.netlifystatus.com  
**Community Forum:** https://answers.netlify.com

---

## ✅ Checklist

Deploy öncesi kontrol listesi:

- [x] `netlify.toml` dosyası var
- [x] `vite.config.js` güncel
- [x] Build başarılı (`npm run build`)
- [x] Preview çalışıyor (`npm run preview`)
- [x] Video dosyası kaldırıldı
- [x] GitHub'a push edildi
- [ ] Netlify'de site oluşturuldu
- [ ] Deploy başarılı
- [ ] Site açılıyor
- [ ] Tüm sayfalar çalışıyor
- [ ] Custom domain bağlandı (opsiyonel)
- [ ] SSL aktif (opsiyonel)

---

**Son Güncelleme:** 2025-01-18  
**Versiyon:** 1.0.0

