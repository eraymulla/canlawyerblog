# Yayınlama (Deployment) Rehberi

Bu dosya, Av. Ali Can Yılmaztürk blog sayfasını yayınlamak için adım adım talimatlar içermektedir.

## 📋 Genel Bakış

Bu proje Next.js ile geliştirilmiştir ve birkaç farklı platformda yayınlanabilir. En kolay ve önerilen yöntem **Vercel**'dir çünkü Next.js'in resmi hosting platformudur.

---

## 🚀 Seçenek 1: Vercel ile Yayınlama (ÖNERİLEN)

### Avantajlar:
- ✅ Tamamen ücretsiz (kişisel projeler için)
- ✅ Otomatik SSL sertifikası
- ✅ Her git push'ta otomatik deployment
- ✅ CDN desteği (dünya çapında hızlı erişim)
- ✅ Next.js için optimize edilmiş
- ✅ Kolay domain bağlama

### Adım Adım Talimatlar:

#### 1. GitHub Repository Oluşturma

1. [GitHub.com](https://github.com) adresine gidin ve hesabınıza giriş yapın
2. Sağ üstteki "+" butonuna tıklayın ve "New repository" seçin
3. Repository adı: `alican-blog` (veya istediğiniz bir isim)
4. "Public" veya "Private" seçin
5. "Create repository" butonuna tıklayın

#### 2. Projeyi GitHub'a Yükleme

Terminal/PowerShell'de proje klasöründe şu komutları çalıştırın:

```bash
# Git'i başlat (eğer henüz yapılmadıysa)
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "İlk commit - Av. Ali Can Yılmaztürk blog sayfası"

# GitHub repository URL'ini ekle (GitHub'da oluşturduğunuz repo'nun URL'i)
git remote add origin https://github.com/KULLANICI_ADI/alican-blog.git

# Ana branch'i ayarla
git branch -M main

# GitHub'a yükle
git push -u origin main
```

**Not:** `KULLANICI_ADI` yerine kendi GitHub kullanıcı adınızı yazın.

#### 3. Vercel'e Kaydolma ve Proje Ekleme

1. [vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" butonuna tıklayın
3. "Continue with GitHub" seçeneğini seçin
4. GitHub hesabınızla giriş yapın ve izinleri onaylayın

#### 4. Projeyi Deploy Etme

1. Vercel dashboard'da "Add New..." > "Project" butonuna tıklayın
2. GitHub repository listenizden `alican-blog` projesini seçin
3. Vercel otomatik olarak Next.js projesini algılayacak:
   - Framework Preset: Next.js
   - Build Command: `npm run build` (otomatik)
   - Output Directory: `.next` (otomatik)
4. "Deploy" butonuna tıklayın
5. 1-2 dakika içinde projeniz yayında olacak!

#### 5. Domain Ekleme (Opsiyonel)

1. Vercel dashboard'da projenize tıklayın
2. "Settings" sekmesine gidin
3. "Domains" bölümüne gidin
4. Domain'inizi ekleyin (örn: `www.alicanyilmazturk.com`)
5. Vercel size DNS ayarlarını gösterecek
6. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) bu DNS kayıtlarını ekleyin
7. 24-48 saat içinde domain aktif olacak

**Vercel'in verdiği ücretsiz domain:** Her proje için `proje-adi.vercel.app` şeklinde bir domain verilir.

---

## 🌐 Seçenek 2: Netlify ile Yayınlama

### Adım Adım Talimatlar:

1. [netlify.com](https://netlify.com) adresine gidin ve kaydolun
2. "Add new site" > "Import an existing project" seçin
3. GitHub repository'nizi seçin
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. "Deploy site" butonuna tıklayın

**Not:** Netlify için Next.js özel ayarları gerekebilir. `netlify.toml` dosyası eklemeniz gerekebilir.

---

## 🖥️ Seçenek 3: Kendi Sunucunuz (VPS)

### Gereksinimler:
- Ubuntu/Debian sunucu
- Root veya sudo erişimi
- Domain (opsiyonel ama önerilir)

### Adım Adım Talimatlar:

#### 1. Sunucuya Bağlanma

```bash
ssh kullanici@sunucu-ip-adresi
```

#### 2. Node.js Kurulumu

```bash
# Node.js 18.x kurulumu
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Kurulumu kontrol et
node --version
npm --version
```

#### 3. Git Kurulumu

```bash
sudo apt update
sudo apt install git
```

#### 4. Projeyi Klonlama

```bash
cd /var/www  # veya istediğiniz bir klasör
git clone https://github.com/KULLANICI_ADI/alican-blog.git
cd alican-blog
npm install
```

#### 5. Production Build

```bash
npm run build
```

#### 6. PM2 ile Çalıştırma

PM2, Node.js uygulamalarını arka planda çalıştırmak için bir process manager'dır.

```bash
# PM2'yi global olarak kur
sudo npm install -g pm2

# Uygulamayı başlat
pm2 start npm --name "alican-blog" -- start

# PM2'yi sistem başlangıcında otomatik başlat
pm2 save
pm2 startup
# Çıkan komutu çalıştırın (sudo ile başlayan)
```

#### 7. Nginx Reverse Proxy Kurulumu

```bash
# Nginx kurulumu
sudo apt install nginx

# Config dosyası oluştur
sudo nano /etc/nginx/sites-available/alican-blog
```

Config dosyası içeriği:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Symlink oluşturma ve Nginx'i yeniden başlatma:

```bash
sudo ln -s /etc/nginx/sites-available/alican-blog /etc/nginx/sites-enabled/
sudo nginx -t  # Config'i test et
sudo systemctl restart nginx
```

#### 8. SSL Sertifikası (Let's Encrypt)

```bash
# Certbot kurulumu
sudo apt install certbot python3-certbot-nginx

# SSL sertifikası al
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Otomatik yenileme testi
sudo certbot renew --dry-run
```

---

## 📧 İletişim Formu Entegrasyonu

Şu anda iletişim formu sadece frontend'de çalışmaktadır. Gerçek bir email gönderimi için:

### Seçenek 1: Formspree (En Kolay)

1. [formspree.io](https://formspree.io) adresine kaydolun
2. Yeni form oluşturun
3. Form endpoint URL'ini alın
4. `app/iletisim/page.tsx` dosyasında form action'ını güncelleyin

### Seçenek 2: API Route ile Email Servisi

1. SendGrid, Mailgun veya Resend gibi bir email servisi kullanın
2. `app/api/contact/route.ts` dosyası oluşturun
3. Email servisini entegre edin

### Seçenek 3: Serverless Function

Vercel veya Netlify'da serverless function oluşturarak email gönderimi yapabilirsiniz.

---

## 🔄 Güncellemeler

### Vercel/Netlify:
- GitHub'a push yaptığınızda otomatik olarak deploy edilir
- Manuel deploy için dashboard'dan "Redeploy" butonuna tıklayın

### Kendi Sunucunuz:
```bash
cd /var/www/alican-blog
git pull
npm install
npm run build
pm2 restart alican-blog
```

---

## 🐛 Sorun Giderme

### Build Hatası:
- `npm install` komutunu tekrar çalıştırın
- `node_modules` klasörünü silip tekrar kurun: `rm -rf node_modules && npm install`

### Port Hatası:
- PM2'de port 3000 kullanılıyorsa, `next.config.js`'de port değiştirin

### Domain Çalışmıyor:
- DNS ayarlarının 24-48 saat içinde aktif olmasını bekleyin
- DNS propagation kontrolü için: [whatsmydns.net](https://www.whatsmydns.net)

---

## 📞 Destek

Herhangi bir sorun yaşarsanız:
1. README.md dosyasını kontrol edin
2. Next.js dokümantasyonuna bakın: [nextjs.org/docs](https://nextjs.org/docs)
3. Vercel dokümantasyonuna bakın: [vercel.com/docs](https://vercel.com/docs)

---

## ✅ Yayınlama Sonrası Kontrol Listesi

- [ ] Site erişilebilir durumda
- [ ] Tüm sayfalar çalışıyor (Ana Sayfa, Blog, Hakkımda, İletişim)
- [ ] Mobil görünüm test edildi
- [ ] İletişim bilgileri güncellendi
- [ ] Domain bağlandı (opsiyonel)
- [ ] SSL sertifikası aktif (HTTPS)
- [ ] Google Analytics eklenmiş (opsiyonel)
- [ ] SEO ayarları yapılmış (opsiyonel)

---

**Başarılar! 🎉**

