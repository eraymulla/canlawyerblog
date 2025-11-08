# Av. Ali Can Yılmaztürk - Blog Sayfası

Avukat Ali Can Yılmaztürk için oluşturulmuş modern ve responsive blog sayfası.

## Teknolojiler

- **Next.js 14** - React tabanlı framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Modern CSS framework
- **App Router** - Next.js'in yeni routing sistemi

## Özellikler

- ✅ Responsive tasarım (mobil uyumlu)
- ✅ Modern ve profesyonel arayüz
- ✅ Blog yazıları listesi ve detay sayfaları
- ✅ Hakkımda sayfası
- ✅ İletişim formu
- ✅ SEO dostu yapı

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
```

veya

```bash
yarn install
```

### 2. Geliştirme Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

### 3. Production Build

```bash
npm run build
npm start
```

## Proje Yapısı

```
alican_blog/
├── app/
│   ├── blog/           # Blog sayfaları
│   ├── hakkimda/       # Hakkımda sayfası
│   ├── iletisim/       # İletişim sayfası
│   ├── layout.tsx      # Ana layout
│   ├── page.tsx        # Ana sayfa
│   └── globals.css     # Global stiller
├── components/
│   ├── Navigation.tsx  # Navigasyon bileşeni
│   └── Footer.tsx      # Footer bileşeni
└── public/             # Statik dosyalar
```

## Yayınlama (Deployment)

### Seçenek 1: Vercel (Önerilen - En Kolay)

Vercel, Next.js projeleri için özel olarak optimize edilmiş bir platformdur.

#### Adımlar:

1. **GitHub'a Yükleyin**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [GITHUB_REPO_URL]
   git push -u origin main
   ```

2. **Vercel'e Kaydolun**
   - [vercel.com](https://vercel.com) adresine gidin
   - GitHub hesabınızla giriş yapın

3. **Projeyi İçe Aktarın**
   - "New Project" butonuna tıklayın
   - GitHub repository'nizi seçin
   - Vercel otomatik olarak Next.js projesini algılayacak
   - "Deploy" butonuna tıklayın

4. **Domain Ayarları (Opsiyonel)**
   - Vercel dashboard'da "Settings" > "Domains" bölümüne gidin
   - Kendi domain'inizi ekleyebilirsiniz

**Avantajları:**
- Ücretsiz plan mevcut
- Otomatik SSL sertifikası
- Otomatik deployment (her push'ta)
- CDN desteği
- Çok hızlı

### Seçenek 2: Netlify

#### Adımlar:

1. **GitHub'a Yükleyin** (Vercel ile aynı)

2. **Netlify'e Kaydolun**
   - [netlify.com](https://netlify.com) adresine gidin
   - GitHub hesabınızla giriş yapın

3. **Projeyi Deploy Edin**
   - "Add new site" > "Import an existing project"
   - GitHub repository'nizi seçin
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - "Deploy site" butonuna tıklayın

**Not:** Next.js için Netlify'da özel ayarlar gerekebilir. `netlify.toml` dosyası eklemeniz gerekebilir.

### Seçenek 3: Kendi Sunucunuz (VPS)

#### Adımlar:

1. **Sunucuya Bağlanın**
   ```bash
   ssh kullanici@sunucu-ip
   ```

2. **Node.js ve npm Kurulumu**
   ```bash
   # Ubuntu/Debian için
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Projeyi Klonlayın**
   ```bash
   git clone [GITHUB_REPO_URL]
   cd alican_blog
   npm install
   ```

4. **Production Build**
   ```bash
   npm run build
   ```

5. **PM2 ile Çalıştırın** (Process Manager)
   ```bash
   npm install -g pm2
   pm2 start npm --name "alican-blog" -- start
   pm2 save
   pm2 startup
   ```

6. **Nginx Reverse Proxy Kurulumu** (Opsiyonel ama önerilir)
   ```bash
   sudo apt install nginx
   ```
   
   Nginx config dosyası oluşturun:
   ```bash
   sudo nano /etc/nginx/sites-available/alican-blog
   ```
   
   İçeriği:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Symlink oluşturun:
   ```bash
   sudo ln -s /etc/nginx/sites-available/alican-blog /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **SSL Sertifikası (Let's Encrypt)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

## Özelleştirme

### İletişim Bilgilerini Güncelleme

1. `components/Footer.tsx` dosyasında email ve telefon bilgilerini güncelleyin
2. `app/iletisim/page.tsx` dosyasında iletişim bilgilerini güncelleyin

### Blog Yazıları Ekleme

1. `app/blog/page.tsx` dosyasındaki `blogPosts` array'ine yeni yazı ekleyin
2. `app/blog/[slug]/page.tsx` dosyasındaki `blogPosts` objesine içerik ekleyin

### Renkleri Değiştirme

`tailwind.config.ts` dosyasındaki `primary` renk paletini değiştirebilirsiniz.

## İletişim Formu

Şu anda iletişim formu sadece frontend'de çalışmaktadır. Gerçek bir form gönderimi için:

1. **Email Servisi** (SendGrid, Mailgun, vb.)
2. **API Route** oluşturma (`app/api/contact/route.ts`)
3. **Form servisi** (Formspree, FormSubmit, vb.)

## Lisans

Bu proje özel kullanım içindir.

