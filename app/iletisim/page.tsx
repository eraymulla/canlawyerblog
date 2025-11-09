"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    "full-name": "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderimi burada yapılacak
    alert("Mesajınız gönderildi! En kısa sürede size dönüş yapacağım.");
    setFormData({ "full-name": "", email: "", phone: "", message: "", terms: false });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* PageHeading */}
        <div className="text-center mb-16">
          <h1 className="text-primary dark:text-white text-5xl md:text-6xl font-black font-display leading-tight tracking-tight">
            İletişime Geçin
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-subtle-light dark:text-subtle-dark text-lg font-normal leading-normal">
            <span className="font-bold">Yılmaztürk Hukuk Bürosu</span> olarak yardımcı olmak için buradayız. Davanızı tartışmak için bize ulaşın.
          </p>
          <p className="mt-2 text-subtle-light dark:text-subtle-dark text-base">Av. Ali Can Yılmaztürk</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Info & Map */}
          <div className="flex flex-col gap-10">
            {/* SectionHeader */}
            <h3 className="text-primary dark:text-white text-2xl font-bold font-display tracking-tight">
              Ofis Detayları
            </h3>

            {/* ListItems */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                    123 Adalet Caddesi, Suite 400, İstanbul, 34000
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    Adres
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                    (0212) XXX XX XX
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    Telefon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                    info@alicanyilmazturk.com
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    Email
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-accent flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </p>
                  <p className="text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                    Ofis Saatleri
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-4">
              <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="Harita"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAevGwvbnbdn95IrGLcaH6Ntuj7_8-4JkGb7epnBfJ7U-4eOm9fXfnKIPC8aI-Rv2DR1jVKTSwBDp4KbWyxAPL2C2K1yd2Zb9ihA6BKNt9cqpUJHikwKcFyT_vEXkylMbpQZ5F0y6C-EgFrYYUUqQmcwhwwNU3FW-mBWGtiPzbgFly8VqEdSu_UnOxVRI1bUcW8tHYVU81tOvf9ohBfGqwx-bSM300XKaqRUN7StKEBzAd-huFxAAe-lYeXURZeIWF20mT8_mSSWfFK"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-800/50 p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-primary dark:text-white text-2xl font-bold font-display tracking-tight mb-2">
              Bana Mesaj Gönderin
            </h3>
            <p className="text-subtle-light dark:text-subtle-dark mb-8 text-sm">
              Aşağıdaki formu doldurun, kısa süre içinde size dönüş yapacağım.
            </p>
            <form action="#" className="space-y-6" method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
                  htmlFor="full-name"
                >
                  Ad Soyad
                </label>
                <input
                  autoComplete="name"
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"
                  id="full-name"
                  name="full-name"
                  type="text"
                  value={formData["full-name"]}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  autoComplete="email"
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
                  htmlFor="phone"
                >
                  Telefon Numarası
                </label>
                <input
                  autoComplete="tel"
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
                  htmlFor="message"
                >
                  Size nasıl yardımcı olabiliriz?
                </label>
                <textarea
                  className="block w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 shadow-sm focus:border-primary focus:ring-primary sm:text-sm px-4 py-2"
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="relative flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary"
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <p className="text-subtle-light dark:text-subtle-dark">
                    Bu formu göndererek,{" "}
                    <Link href="#" className="font-medium text-primary hover:underline">
                      Gizlilik Politikası
                    </Link>
                    &apos;nı kabul etmiş olursunuz.
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  type="submit"
                >
                  Danışmanlık Planla
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
