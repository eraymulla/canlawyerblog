"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-4 text-text-light dark:text-text-dark">
            <span className="material-symbols-outlined text-primary text-3xl">gavel</span>
            <h2 className="text-xl font-bold tracking-tighter font-display">Av. Ali Can Yılmaztürk</h2>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <div className="flex items-center gap-9">
              <Link href="/" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/hakkimda" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                Hakkımda
              </Link>
              <Link href="/hizmetler" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                Hizmetler
              </Link>
              <Link href="/ekibimiz" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                Ekibimiz
              </Link>
              <Link href="/blog" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/referanslar" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                Referanslar
              </Link>
              <Link href="/sss" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                SSS
              </Link>
              <Link href="/iletisim" className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors">
                İletişim
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/iletisim">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-primary text-[#0A2342] text-sm font-bold leading-normal tracking-wide hover:opacity-90 transition-opacity">
                <span className="truncate">Danışmanlık Al</span>
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-light dark:text-text-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link
              href="/"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link
              href="/hakkimda"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hakkımda
            </Link>
            <Link
              href="/hizmetler"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hizmetler
            </Link>
            <Link
              href="/ekibimiz"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Ekibimiz
            </Link>
            <Link
              href="/blog"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/referanslar"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Referanslar
            </Link>
            <Link
              href="/sss"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SSS
            </Link>
            <Link
              href="/iletisim"
              className="block text-text-light dark:text-text-dark hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
