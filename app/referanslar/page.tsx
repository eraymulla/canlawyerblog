import Link from "next/link";

const testimonials = [
  {
    quote: "Baştan sona, iletişim netti ve beklentilerimiz mükemmel bir şekilde yönetildi. Stratejik yaklaşımları davamızda çok önemliydi. Tüm beklentilerimizi aşan beş yıldızlı bir deneyim.",
    author: "M.T.",
    role: "İş Hukuku Müvekkili",
    verified: true,
  },
  {
    quote: "Ticaret hukukunda olağanüstü profesyonellik ve derin bir anlayış. Hukuki zorluklarımızı sorunsuz ve stressiz bir şekilde yönetmek mümkün oldu.",
    author: "A.M.",
    role: "Birleşme ve Satın Alma",
  },
  {
    quote: "Ekibin adanmışlığı ve stratejik yaklaşımı davamızda çok önemliydi. Gerçekten olağanüstü bir büro. Şiddetle tavsiye edilir.",
    author: "J.D.",
    role: "İş Hukuku Müvekkili",
  },
  {
    quote: "Fikri mülkiyet alanındaki uzmanlıkları eşsiz. Varlıklarımızı titizlik ve hassasiyetle korudular.",
    author: "S.P.",
    role: "Fikri Mülkiyet",
  },
  {
    quote: "Tüm süreç boyunca desteklendiğimi ve dinlendiğimi hissettim. Şefkatli yaklaşımları zor bir durumu yönetilebilir hale getirdi.",
    author: "L.C.",
    role: "Aile Hukuku Müvekkili",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex-1">
      {/* HeroSection */}
      <div className="w-full">
        <div
          className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 35, 66, 0.8) 0%, rgba(10, 35, 66, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDACTXfcLnAZ2Jh4YOc5jkNZfsupXfddL04uDNFwlBIYrR8JuVElxc7MhxhEw5xrxNpNtGylQzYvgA-ckrj9IN5xA6bN7JgT9WdEQUgoT_YX7OvZbXvB62AnyUxKmOcgUkcd5Ye71CMiIfDhlDM904A9B6FgVMT_iIclycaelIyy4ILfS4dXpE80pahotPNfJPf_K1ZOPfzTnNpZ-L4ihmaceDL4WVDUiKMTcAN3jjX7xF8nif-249pa07IH_iNvkpCU8LhjGUP3mmQ")',
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-white text-5xl font-black font-display leading-tight tracking-tight md:text-6xl">
              Müvekkillerimiz Ne Diyor
            </h1>
            <h2 className="text-off-white/90 text-lg font-normal leading-normal md:text-xl">
              Gururla temsil ettiğimiz müvekkillerden başarı hikayelerini okuyun.
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12">
          {/* Featured Testimonial Card */}
          <div className="bg-white dark:bg-navy/50 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-navy/30">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <span className="material-symbols-outlined text-5xl text-gold shrink-0">format_quote</span>
              <div className="flex flex-col gap-4">
                <p className="text-navy dark:text-off-white text-lg font-medium leading-relaxed italic">
                  {testimonials[0].quote}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  {testimonials[0].verified && (
                    <span className="material-symbols-outlined text-gold">verified</span>
                  )}
                  <div>
                    <p className="text-navy dark:text-off-white text-base font-bold leading-tight">
                      {testimonials[0].author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                      {testimonials[0].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Testimonials */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-navy/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-navy/30 flex flex-col"
              >
                <span className="material-symbols-outlined text-4xl text-gold mb-4">format_quote</span>
                <p className="text-navy dark:text-off-white text-base leading-relaxed flex-grow">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 pt-6 mt-4 border-t border-gray-200 dark:border-navy">
                  <span className="material-symbols-outlined text-gold">person</span>
                  <div>
                    <p className="text-navy dark:text-off-white text-sm font-bold leading-tight">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-navy dark:bg-navy/80">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-extrabold text-white sm:text-4xl">
            <span className="block">Davanızı Tartışmaya Hazır mısınız?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-off-white/80">
            Deneyimimiz rehberiniz olsun. Gizli bir danışmanlık için bugün bizimle iletişime geçin.
          </p>
          <Link href="/iletisim">
            <button className="mt-8 flex w-full sm:w-auto mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-navy text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-opacity">
              <span className="truncate">Danışmanlık Planla</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

