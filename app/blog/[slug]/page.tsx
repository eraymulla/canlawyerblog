import { notFound } from "next/navigation";
import Link from "next/link";

const blogPosts: Record<string, {
  title: string;
  date: string;
  content: string;
}> = {
  "yeni-is-kanunu-degisiklikleri": {
    title: "Yeni İş Kanunu Değişiklikleri",
    date: "15 Mayıs 2024",
    content: `
      <p class="mb-4">
        İş kanununda yapılan son değişiklikler, hem işverenler hem de çalışanlar için önemli 
        yeni düzenlemeler getirmektedir. Bu yazıda, değişikliklerin detaylarını ve etkilerini 
        inceleyeceğiz.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Çalışma Saatleri Düzenlemeleri</h2>
      <p class="mb-4">
        Yeni düzenlemelerle birlikte, haftalık çalışma saatleri ve fazla mesai konularında 
        önemli değişiklikler yapılmıştır. İşverenlerin bu konularda dikkatli olması gerekmektedir.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">İş Güvencesi</h2>
      <p class="mb-4">
        İş güvencesi kapsamı genişletilmiş ve çalışanların hakları daha da güçlendirilmiştir. 
        İşten çıkarma süreçlerinde yeni prosedürler uygulanmaya başlanmıştır.
      </p>
    `,
  },
  "sozlesme-hazirlarken-dikkat": {
    title: "Sözleşme Hazırlarken Dikkat Edilmesi Gerekenler",
    date: "10 Mayıs 2024",
    content: `
      <p class="mb-4">
        İş sözleşmeleri, hem işveren hem de çalışan için önemli yasal belgelerdir. 
        Doğru hazırlanmış bir sözleşme, gelecekte yaşanabilecek anlaşmazlıkları önleyebilir.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Temel Unsurlar</h2>
      <p class="mb-4">
        Her iş sözleşmesinde bulunması gereken temel unsurlar şunlardır:
      </p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>İş tanımı ve sorumluluklar</li>
        <li>Çalışma saatleri ve izin hakları</li>
        <li>Ücret ve ödeme koşulları</li>
        <li>İşten ayrılma koşulları</li>
      </ul>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Yasal Gereklilikler</h2>
      <p class="mb-4">
        Sözleşmelerin yasal gerekliliklere uygun olması çok önemlidir. Aksi takdirde, 
        sözleşme geçersiz sayılabilir veya taraflar için olumsuz sonuçlar doğurabilir.
      </p>
    `,
  },
  "dijital-haklar": {
    title: "Dijital Çağda Bireysel Haklar",
    date: "5 Mayıs 2024",
    content: `
      <p class="mb-4">
        Dijitalleşen dünyada, bireysel hakların korunması giderek daha önemli hale gelmektedir. 
        Kişisel verilerin korunması ve dijital haklar, modern hukukun önemli bir parçasıdır.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">KVKK ve Kişisel Veriler</h2>
      <p class="mb-4">
        Kişisel Verilerin Korunması Kanunu (KVKK), bireylerin kişisel verilerinin korunmasını 
        amaçlamaktadır. Bu kanun kapsamında, veri işleyenlerin yükümlülükleri bulunmaktadır.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Dijital Haklar</h2>
      <p class="mb-4">
        Dijital platformlarda bireylerin sahip olduğu haklar ve bu hakların korunması için 
        alınabilecek önlemler hakkında bilgiler.
      </p>
    `,
  },
  "ticaret-hukuku-temelleri": {
    title: "Ticaret Hukuku Temelleri",
    date: "28 Nisan 2024",
    content: `
      <p class="mb-4">
        Ticaret hukuku, işletmelerin faaliyetlerini düzenleyen önemli bir hukuk dalıdır. 
        Bu yazıda, ticaret hukukunun temel kavramlarını ele alacağız.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Şirket Türleri</h2>
      <p class="mb-4">
        Türk hukukunda çeşitli şirket türleri bulunmaktadır. Her birinin kendine özgü 
        özellikleri ve yasal gereklilikleri vardır.
      </p>
    `,
  },
  "gayrimenkul-hukuku": {
    title: "Gayrimenkul Hukuku ve Alım-Satım İşlemleri",
    date: "20 Nisan 2024",
    content: `
      <p class="mb-4">
        Gayrimenkul alım-satım işlemleri, dikkatli bir şekilde yürütülmesi gereken önemli 
        hukuki işlemlerdir. Bu yazıda, dikkat edilmesi gereken hususları ele alacağız.
      </p>
      <h2 class="text-2xl font-semibold mt-6 mb-4">Tapu İşlemleri</h2>
      <p class="mb-4">
        Tapu işlemlerinde dikkat edilmesi gereken önemli noktalar ve yasal gereklilikler.
      </p>
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <Link
          href="/blog"
          className="text-primary-600 hover:text-primary-700 mb-6 inline-block"
        >
          ← Blog'a Dön
        </Link>
        
        <article className="bg-white p-8 rounded-lg shadow-md">
          <div className="text-primary-600 font-semibold text-sm mb-4">
            {post.date}
          </div>
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

