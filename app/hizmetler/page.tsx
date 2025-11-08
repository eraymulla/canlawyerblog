import Link from "next/link";

const services = [
  {
    icon: "gavel",
    title: "Ceza Hukuku",
    description: "Geniş bir yelpazede ceza suçlamaları için adanmış savunma, hukuki sürecin her adımında haklarınızı korur.",
    link: "#",
  },
  {
    icon: "business_center",
    title: "Ticaret Hukuku",
    description: "İşletmeler için uzman hukuk danışmanlığı, oluşum ve sözleşmelerden karmaşık dava ve uyumluluk konularına kadar.",
    link: "#",
  },
  {
    icon: "groups",
    title: "Aile Hukuku",
    description: "Boşanma, çocuk velayeti ve evlat edinme dahil olmak üzere hassas aile hukuku konularında şefkatli rehberlik.",
    link: "#",
  },
  {
    icon: "work",
    title: "İş Hukuku",
    description: "İşyerinde haklarınız için savunuculuk, anlaşmazlıkları ele alma, ayrımcılık ve adil muamele sağlama.",
    link: "#",
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-grow">
      {/* HeroSection */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark sm:text-5xl md:text-6xl">
              Güvenebileceğiniz Kapsamlı Hukuk Uzmanlığı
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-muted-light dark:text-text-muted-dark">
              Büromuz, geniş bir uygulama alanı yelpazesinde olağanüstü hukuk desteği sağlamaya ve 
              müvekkillerimiz için mümkün olan en iyi sonuçları elde etmeye adanmıştır.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* SectionHeader */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              Uygulama Alanlarımız
            </h2>
            <p className="mt-4 text-base text-text-muted-light dark:text-text-muted-dark">
              Size nasıl yardımcı olabileceğimizi görmek için uzmanlık alanlarımızı keşfedin.
            </p>
          </div>

          {/* TextGrid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold font-display text-text-light dark:text-text-dark">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted-light dark:text-text-muted-dark">
                  {service.description}
                </p>
                <Link href={service.link} className="mt-4 text-sm font-bold text-primary hover:underline">
                  Daha Fazla Bilgi
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTASection */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-display tracking-tight text-text-light dark:text-text-dark sm:text-4xl">
              Davanızı Tartışmaya Hazır mısınız?
            </h2>
            <p className="mt-4 text-lg leading-8 text-text-muted-light dark:text-text-muted-dark">
              Hukuki ihtiyaçlarınızın gizli bir incelemesi için bugün bizimle iletişime geçin. 
              Deneyimimiz rehberiniz olsun.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link href="/iletisim">
                <button className="flex min-w-[84px] max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                  <span className="truncate">Ücretsiz Danışmanlık Planla</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

