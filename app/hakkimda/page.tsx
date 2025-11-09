import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="flex min-h-[520px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-4"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.7) 0%, rgba(10, 35, 66, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUFS2ZtnpN0gG1MYFssRpxn8QUxY3JyL6aTgxdeN2NeWnCU9xjP4_rBpDzogLIAvGnylLdoN6zzxy5N3J6in6ZHRv5zTGIK4UogjbrWKthHJEhH9okm-29HkrGfQ4TKua-PeGIi2Wl5gBdczS3ODmxcpUZKms2Zxz6RtQ25yQfDCoi8KKbG_6gzVbwOWO1e59nfBMcz1TNzxVI0t8fiz7RGBE6NkN1-5ZahQcQXxB6dBUPFEl9XGHMs6jabzYQ9LYgBod4Y93moy-I")'
          }}
        >
          <div className="flex max-w-3xl flex-col gap-4 text-center">
            <h1 className="font-display text-5xl font-black leading-tight tracking-tight text-secondary md:text-6xl">
              Mükemmellik Mirası
            </h1>
            <h2 className="text-secondary/90 text-lg font-normal leading-normal">
              <span className="font-bold">Yılmaztürk Hukuk Bürosu</span> olarak, yılların deneyimiyle müvekkillerimize eşsiz hukuk uzmanlığı ve sarsılmaz bağlılık sunmaya adanmış.
            </h2>
            <p className="text-secondary/80 text-base mt-2">Av. Ali Can Yılmaztürk</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-secondary">
            Misyonum & Vizyonum
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-accent"></div>
          <p className="mt-8 text-lg font-normal leading-relaxed">
            Misyonum, bütünlük, profesyonellik ve müvekkillerimin ihtiyaçlarını derinlemesine anlayarak 
            olağanüstü hukuk hizmetleri sunmaktır. Titiz analiz, stratejik düşünce ve amansız savunuculuk 
            yoluyla mümkün olan en iyi sonuçları elde etmeye çalışıyorum, güven ve karşılıklı saygıya dayalı 
            kalıcı ilişkiler kuruyorum.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-secondary dark:bg-primary py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-secondary">
              Değerlerim
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent"></div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 dark:bg-accent/20">
                <span className="material-symbols-outlined text-3xl text-accent">shield</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-text-light dark:text-secondary">
                Bütünlük
              </h3>
              <p className="mt-2 text-base leading-relaxed">
                Yaptığım her eylemde ve verdiğim her tavsiyede en yüksek etik standartları koruyorum.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 dark:bg-accent/20">
                <span className="material-symbols-outlined text-3xl text-accent">target</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-text-light dark:text-secondary">
                Adanmışlık
              </h3>
              <p className="mt-2 text-base leading-relaxed">
                Müvekkillerimin davalarına tüm kalbimle bağlanıyor, yorulmak bilmeyen savunuculuk ve destek sunuyorum.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 dark:bg-accent/20">
                <span className="material-symbols-outlined text-3xl text-accent">lightbulb</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold text-text-light dark:text-secondary">
                Yenilik
              </h3>
              <p className="mt-2 text-base leading-relaxed">
                Karmaşık zorlukları çözmek için yaratıcı hukuk stratejileri ve modern yaklaşımlar kullanıyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-secondary">
              Kariyerim
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent"></div>
          </div>
          <div className="relative mt-12">
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 dark:bg-gray-700"></div>
            <div className="relative mt-8">
              <div className="flex justify-between items-center w-full">
                <div className="w-2/5">
                  <div className="text-right">
                    <h4 className="font-bold text-lg text-text-light dark:text-secondary">2010</h4>
                    <p className="mt-1">Hukuk fakültesinden mezun oldum ve avukatlık mesleğine başladım.</p>
                  </div>
                </div>
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background-light dark:ring-background-dark"></div>
                <div className="w-2/5"></div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="flex justify-between items-center w-full">
                <div className="w-2/5"></div>
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background-light dark:ring-background-dark"></div>
                <div className="w-2/5">
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-text-light dark:text-secondary">2015</h4>
                    <p className="mt-1">İş hukuku alanında uzmanlaştım ve bu alanda derinlemesine çalışmaya başladım.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="flex justify-between items-center w-full">
                <div className="w-2/5">
                  <div className="text-right">
                    <h4 className="font-bold text-lg text-text-light dark:text-secondary">2020</h4>
                    <p className="mt-1">Fikri mülkiyet hukukunda yeni bir emsal oluşturan önemli bir dava kazandım.</p>
                  </div>
                </div>
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background-light dark:ring-background-dark"></div>
                <div className="w-2/5"></div>
              </div>
            </div>
            <div className="relative mt-8">
              <div className="flex justify-between items-center w-full">
                <div className="w-2/5"></div>
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-accent ring-4 ring-background-light dark:ring-background-dark"></div>
                <div className="w-2/5">
                  <div className="text-left">
                    <h4 className="font-bold text-lg text-text-light dark:text-secondary">2024</h4>
                    <p className="mt-1">Adalet ve müvekkil başarısına sarsılmaz bağlılığımın 14 yılını kutluyorum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-secondary dark:bg-primary py-16 sm:py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-secondary">
              Hakkımda
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-accent"></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg">
              Yılların deneyimiyle, müvekkillerime en iyi hukuki danışmanlığı sunmak ve adaletin tecellisi için 
              çalışmaktayım. Her dava için özenle hazırlanır, müvekkillerimin haklarını en iyi şekilde korumak için 
              çaba gösteririm.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <div className="text-center">
              <div className="mx-auto h-48 w-48 rounded-full bg-primary/20 flex items-center justify-center text-6xl text-primary mb-4">
                ACY
              </div>
              <h4 className="mt-6 font-display text-xl font-bold text-text-light dark:text-secondary">
                Av. Ali Can Yılmaztürk
              </h4>
              <p className="text-accent">Avukat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-primary dark:bg-primary/90 text-secondary py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight">
            Davanızı Tartışmaya Hazır mısınız?
          </h2>
          <p className="mt-4 text-lg font-normal leading-relaxed text-secondary/80">
            Deneyimim rehberiniz olsun. Bugün hukuki seçeneklerinizi keşfetmek için benimle gizli bir 
            danışmanlık planlayın.
          </p>
          <div className="mt-8">
            <Link href="/iletisim">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-primary text-base font-bold leading-normal tracking-wide mx-auto hover:opacity-90 transition-opacity">
                <span className="truncate">Danışmanlık Planla</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
