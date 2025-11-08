"use client";

import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="flex flex-1 justify-center py-10 md:py-20 px-4 sm:px-6 md:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* PageHeading */}
        <div className="flex flex-wrap justify-between gap-3 p-4 mb-8 text-center">
          <div className="flex w-full flex-col gap-3">
            <p className="font-display text-4xl font-bold leading-tight tracking-[-0.033em] text-primary dark:text-secondary">
              Sıkça Sorulan Sorular
            </p>
            <p className="text-base font-normal leading-normal text-text-muted-light dark:text-text-muted-dark max-w-3xl mx-auto">
              Hizmetlerimiz, süreçlerimiz ve ücretlerimiz hakkında yaygın soruların yanıtlarını bulun. 
              Şeffaflığa inanıyoruz ve ihtiyacınız olan netliği sağlamak için buradayız.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* General & Initial Consultation Section */}
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4 text-primary dark:text-secondary">
              Genel & İlk Danışmanlık
            </h3>
            <div className="flex flex-col p-4">
              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    İlk danışmanlığı nasıl planlayabilirim?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Ofisimizi doğrudan arayarak veya web sitemizdeki iletişim formunu doldurarak bir danışmanlık 
                  planlayabilirsiniz. Ekibimiz size uygun bir zaman ayarlamak için kısa süre içinde size dönüş yapacaktır.
                </p>
              </details>

              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    İlk toplantıma ne getirmeliyim?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Lütfen davanızla ilgili tüm belgeleri getirin, örneğin sözleşmeler, yazışmalar, polis raporları 
                  veya mahkeme bildirimleri. Ayrıca avukata sormak istediğiniz soruların bir listesi de çok yardımcı 
                  olabilir. Bu, birlikte geçirdiğimiz zamanın mümkün olduğunca verimli olmasını sağlar.
                </p>
              </details>

              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    Danışmanlığım gizli mi?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Kesinlikle. Danışmanlığınız sırasındaki tüm iletişimler, büromuzu işe alıp almayacağınıza bakılmaksızın, 
                  avukat-müvekkil ayrıcalığı ile korunur ve tam gizlilik sağlanır.
                </p>
              </details>
            </div>
          </div>

          {/* Billing & Fees Section */}
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4 text-primary dark:text-secondary">
              Faturalandırma & Ücretler
            </h3>
            <div className="flex flex-col p-4">
              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    Büro hizmetleri için nasıl ücret alıyor?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Dava niteliğine bağlı olarak çeşitli ücret yapıları sunuyoruz, saatlik ücretler, sabit ücretler ve 
                  başarı ücreti dahil. İlk danışmanlık sırasında sizin için en uygun seçeneği tartışacağız.
                </p>
              </details>

              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    Ön ödeme veya avans var mı?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Birçok dava için, bir güven hesabında tutulan bir avans ödemesi olan bir avans gerektiririz. 
                  Hukuki ücretler ve masraflar daha sonra bu avanstan düşülür. Tam şeffaflık için ayrıntılı aylık 
                  faturalar sağlıyoruz.
                </p>
              </details>
            </div>
          </div>

          {/* The Legal Process Section */}
          <div>
            <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-4 text-primary dark:text-secondary">
              Hukuki Süreç
            </h3>
            <div className="flex flex-col p-4">
              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    Davam ne kadar sürecek?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Bir hukuki davanın süresi, karmaşıklığına, mahkemenin programına ve karşı tarafın işbirliğine bağlı 
                  olarak önemli ölçüde değişir. Size tahmini bir zaman çizelgesi sağlayacak ve herhangi bir gelişmeden 
                  sizi haberdar edeceğiz.
                </p>
              </details>

              <details className="flex flex-col border-b border-b-primary/10 dark:border-b-accent/20 py-3 group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                  <p className="font-display text-lg font-medium leading-normal text-primary dark:text-secondary">
                    Davamın ilerlemesi hakkında nasıl bilgilendirileceğim?
                  </p>
                  <div className="text-accent group-open:rotate-180 transition-transform">
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </summary>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal pb-2 pt-2">
                  Açık iletişimi sürdürmeye bağlıyız. Avukatınızdan telefon veya e-posta yoluyla düzenli güncellemeler 
                  alacaksınız ve davanızın durumu hakkında her zaman sorularınızı yanıtlamak için hazırız.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="mt-16 bg-primary/5 dark:bg-accent/10 rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl font-bold text-primary dark:text-secondary mb-4">
            Farklı Bir Sorunuz mu Var?
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark mb-6 max-w-xl mx-auto">
            Ekibimiz ihtiyacınız olan yanıtları ve rehberliği sağlamaya hazır. Kişiselleştirilmiş ve gizli bir 
            danışmanlık için bize ulaşın.
          </p>
          <Link href="/iletisim">
            <button className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary dark:bg-accent text-secondary dark:text-primary text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90">
              <span className="truncate">Danışmanlık Planla</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

