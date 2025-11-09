# Vercel'de Projeyi Güncelleme

## Otomatik Deploy (Önerilen)

Vercel, GitHub repository'nize bağlıysa **otomatik olarak** deploy yapmalıdır. Eğer deploy olmadıysa:

### 1. Vercel Dashboard'u Kontrol Edin

1. [vercel.com/dashboard](https://vercel.com/dashboard) adresine gidin
2. `Alican_LawyerBlog` projenizi bulun
3. "Deployments" sekmesine tıklayın
4. En üstte yeni bir deployment görünmeli (son commit'inizden)

### 2. Otomatik Deploy Çalışmıyorsa

#### Seçenek A: Manuel Redeploy

1. Vercel Dashboard'da projenize tıklayın
2. "Deployments" sekmesine gidin
3. En üstteki deployment'ın yanındaki "..." (üç nokta) menüsüne tıklayın
4. "Redeploy" seçeneğini seçin
5. "Redeploy" butonuna tıklayın

#### Seçenek B: GitHub Bağlantısını Kontrol Edin

1. Vercel Dashboard → Settings → Git
2. "Connected Git Provider" bölümünde GitHub'ın bağlı olduğundan emin olun
3. Eğer bağlı değilse:
   - "Connect Git Provider" butonuna tıklayın
   - GitHub'ı seçin ve izinleri onaylayın
   - Repository'nizi seçin

#### Seçenek C: Yeni Deploy Başlatın

1. Vercel Dashboard'da projenize tıklayın
2. "Deployments" sekmesine gidin
3. Sağ üstteki "Deploy" butonuna tıklayın
4. "Deploy Latest Commit" seçeneğini seçin

## Deploy Durumunu Kontrol Etme

1. Vercel Dashboard → Deployments
2. Deployment'ın durumunu kontrol edin:
   - ✅ **Ready**: Başarılı, site canlıda
   - ⏳ **Building**: Hala build ediliyor
   - ❌ **Error**: Hata var, logları kontrol edin

## Build Loglarını İnceleme

Eğer deploy başarısız olduysa:

1. Deployment'a tıklayın
2. "Build Logs" sekmesine gidin
3. Hata mesajlarını kontrol edin
4. Gerekirse düzeltmeleri yapıp tekrar push edin

## Hızlı Kontrol

Terminal'de şu komutu çalıştırarak son commit'inizi kontrol edebilirsiniz:

```bash
git log -1 --oneline
```

Bu commit'in Vercel'de görünüp görünmediğini kontrol edin.

