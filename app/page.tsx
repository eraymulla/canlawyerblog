import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-background-dark opacity-50"></div>
        <div 
          className="min-h-[60vh] md:min-h-[70vh] flex flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDurdjo-vegGZ-lmtTbDk4rGq3dQV7QMLInISW9vRFDjMyw9Qin73A6wu_4pwAGGQiywNCNmlNtGlnhXm53MQx9e2CYySc7ZXq_MUzwCMO71fOiqJbQ0sKetEutsFdsIo255i12bO1JBYGm1U8QPJKFA30MbLNmC2SenZGTZWnP2sbeBDaehFj7rESlVOCa_5Vw4QgYp4R9Qag073J0A2CuDefPwW5zELTuwoLpcOnA438pTvU7cgR88iOzaFjdu0_7INtjf8OlRDqj")'
          }}
        >
          <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter font-display">
              Adalet, Güven, Deneyim
            </h1>
            <h2 className="text-white text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
              Hukukun karmaşıklıklarında yolunuzu bulmanız için güvenilir ortağınız. Hukukun karmaşıklıklarında size rehberlik eden adanmış partneriniz.
            </h2>
          </div>
        </div>
      </div>

      {/* Introduction & Primary CTA */}
      <div className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg mb-8">
            Onlarca yıllık birleşik deneyimle, Av. Ali Can Yılmaztürk geniş bir yelpazede 
            eşsiz hukuk uzmanlığı sunmaktadır. Müvekkillerimiz için mümkün olan en iyi sonuçları 
            elde etmeye, titiz temsil, stratejik danışmanlık ve sarsılmaz adanmışlık yoluyla 
            bağlıyız.
          </p>
          <Link href="/iletisim">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-[#0A2342] text-base font-bold leading-normal tracking-wide mx-auto hover:opacity-90 transition-opacity">
              <span className="truncate">Ücretsiz Danışmanlık Al</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-background-light/50 dark:bg-background-dark/50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold leading-tight tracking-tighter font-display">
              Hukuk Alanlarımız
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center items-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">business_center</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">
                  İş Hukuku
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">
                  İşletmenizin ihtiyaçları için uzman hukuk çözümleri.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center items-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">groups</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">
                  Aile Hukuku
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">
                  Aile hukuku konularında şefkatli rehberlik.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6 text-center items-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">real_estate_agent</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight font-display">
                  Gayrimenkul Hukuku
                </h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-normal">
                  Karmaşık gayrimenkul işlemlerinde güvenle ilerleyin.
                </p>
              </div>
            </div>
          </div>
          <Link href="/hizmetler">
            <p className="text-primary text-base font-semibold leading-normal pt-8 text-center underline cursor-pointer">
              Tüm Hizmetleri Görüntüle
            </p>
          </Link>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-background-light dark:bg-background-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold leading-tight tracking-tighter font-display">
              Uzmanlarımızla Tanışın
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="h-40 w-40 rounded-full bg-primary/20 flex items-center justify-center text-6xl text-primary mb-4">
                ACY
              </div>
              <h3 className="text-text-light dark:text-text-dark text-xl font-bold font-display">
                Ali Can Yılmaztürk
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">Kurucu Avukat</p>
            </div>
          </div>
          <Link href="/ekibimiz">
            <p className="text-primary text-base font-semibold leading-normal pt-8 text-center underline cursor-pointer">
              Ekibi Görüntüle
            </p>
          </Link>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-background-light/50 dark:bg-background-dark/50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-bold leading-tight tracking-tighter font-display">
              Müvekkillerimiz Ne Diyor
            </h2>
          </div>
          <div className="relative text-center">
            <span className="material-symbols-outlined text-primary text-6xl opacity-50">format_quote</span>
            <blockquote className="text-text-light dark:text-text-dark text-xl md:text-2xl italic font-display mt-4 mb-6">
              "Bu hukuk bürosuyla çalışmak işletmemiz için bir oyun değiştiriciydi. Stratejik tavsiyeleri 
              ve titiz dikkatleri, karmaşık bir birleşmeyi yönetmede çok önemliydi. Her adımda desteklendiğimizi 
              ve güvende olduğumuzu hissettik."
            </blockquote>
            <footer className="text-text-muted-light dark:text-text-muted-dark font-bold text-lg">
              - Müvekkil, İşletme Sahibi
            </footer>
            <div className="flex justify-center gap-2 mt-8">
              <button className="h-2 w-2 rounded-full bg-primary"></button>
              <button className="h-2 w-2 rounded-full bg-border-light dark:bg-border-dark"></button>
              <button className="h-2 w-2 rounded-full bg-border-light dark:bg-border-dark"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
