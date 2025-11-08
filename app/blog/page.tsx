"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    slug: "yeni-is-kanunu-degisiklikleri",
    title: "Yeni İş Kanunu Değişiklikleri",
    category: "İş Hukuku",
    date: "28 Mayıs 2024",
    excerpt: "İş kanununda yapılan son değişiklikler ve çalışan hakları hakkında detaylı bilgiler. Yeni düzenlemelerin işveren ve çalışanlar üzerindeki etkileri.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdvHFffMvODcBK0WxC2xP4PkrOjRueWns9BvKjuSBrRDyMHQ9tvlL6Pq_TH7SehBxKWRBWAeX_kC5o3gPDLvVcj2UPszmAghcv4Rp_YlFA3ML1FwcDWWis_0889yAuvfKjLCnFLhAApFBqJJm_kOR4giMcUvUjgpnvgyz7MJlaISpa2-vt0MX4VNoFkB0zk2rMeT7gqTxs9OupPflqfMd0O0CAV0sj-yK-ugMHiBBFCCin2EqSObzl5wTZAqaQ81_S7DYb-z-1eD7t",
  },
  {
    slug: "sozlesme-hazirlarken-dikkat",
    title: "Sözleşme Hazırlarken Dikkat Edilmesi Gerekenler",
    category: "Sözleşme Hukuku",
    date: "22 Mayıs 2024",
    excerpt: "İş sözleşmeleri hazırlarken dikkat edilmesi gereken önemli noktalar. Sözleşme maddelerinde bulunması gereken temel unsurlar ve yasal gereklilikler.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaCJyJwSWGOCq2CIkfgVSSICKr2kla1Gz9NxODBurwNLHwVSc40Se4hmqCDz8KH8-EblY6zNTD6EhLdv5MpyWElyQytOWumPtLcJVb8UMDvDheaTZtO7VnMhHVPy9p_ddncLj3WF6ZettAxhhuPoXgO0puUSz6bxMUS56jjdogHJQGcVVYmLeH3H7DjPauzFV0NGJYEevn9c9cCNTRUYTFa3Q6_S84G5cFFwmnLY87t0mthkPsVp2LSeFLq-D5sp1stXuh0gkqj1D3",
  },
  {
    slug: "dijital-haklar",
    title: "Dijital Çağda Bireysel Haklar",
    category: "Dijital Hukuk",
    date: "15 Mayıs 2024",
    excerpt: "Dijitalleşen dünyada bireysel hakların korunması ve yasal düzenlemeler. Kişisel verilerin korunması ve dijital haklar hakkında bilgiler.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1vm53ONvcINtCtKZKdaEGbVccLgouVlSOe4EmNvBYEJqgUvkpYafQNjg_PYriNVTHLHceJe6olP_QSnjIJsemFdkw-uEhordCxlVMvB6vlbZOUJs2qfZFARHOqxI5NgpN7knWasdwrnOq_Uh-wHS8wCwhAr4c_S-QbmtXZRnB5SGXPxoyR45hPHwvcytwzKeG5xmqxdCdr0DPHU29vDNjJGY2Te8x7yEmxX-OQlR-Bfr2D2Vc3PLsvvfASw_dbP1SH8B1pIZWgOMh",
  },
];

const categories = [
  { name: "İş Hukuku", count: 8 },
  { name: "Dava", count: 5 },
  { name: "Gayrimenkul", count: 12 },
  { name: "Aile Hukuku", count: 4 },
  { name: "Fikri Mülkiyet", count: 7 },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="container mx-auto flex-1 px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Blog Posts (Left Column) */}
        <div className="w-full lg:w-2/3">
          {/* Page Heading */}
          <div className="mb-10">
            <h1 className="text-navy dark:text-white text-4xl md:text-5xl font-display font-black leading-tight tracking-tight">
              Hukuk İçgörüleri
            </h1>
            <p className="mt-2 text-lg text-text-muted-light dark:text-text-muted-dark">
              En son makalelerimiz, haberlerimiz ve hukuk analizlerimizle bilgilenin.
            </p>
          </div>

          {/* Blog Post Cards */}
          <div className="flex flex-col gap-12">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row items-start gap-6 group"
              >
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video md:aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url("${post.image}")` }}
                  ></div>
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-2">
                  <p className="text-text-muted-light dark:text-text-muted-dark text-sm font-medium leading-normal">
                    {post.category} - {post.date}
                  </p>
                  <h2 className="text-navy dark:text-white text-2xl font-display font-bold leading-tight tracking-tight group-hover:text-primary dark:group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-muted-light dark:text-text-muted-dark text-base font-normal leading-relaxed mt-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-3 text-sm font-bold text-navy dark:text-primary hover:underline">
                    Devamını Oku →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex items-center justify-center gap-2">
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-text-muted-light dark:text-text-muted-dark hover:bg-navy/5 dark:hover:bg-primary/10">
              <span>←</span>
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-navy/10 dark:bg-primary/20 text-navy dark:text-primary font-bold">
              1
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-text-muted-light dark:text-text-muted-dark hover:bg-navy/5 dark:hover:bg-primary/10">
              2
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-text-muted-light dark:text-text-muted-dark hover:bg-navy/5 dark:hover:bg-primary/10">
              3
            </button>
            <button className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-transparent text-text-muted-light dark:text-text-muted-dark hover:bg-navy/5 dark:hover:bg-primary/10">
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Sidebar (Right Column) */}
        <aside className="w-full lg:w-1/3 lg:sticky lg:top-28 self-start">
          <div className="flex flex-col gap-10">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Makalelerde ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 px-4 pr-12 rounded-lg border border-navy/20 dark:border-primary/20 bg-transparent focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark transition-colors"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-text-muted-light dark:text-text-muted-dark">
                <svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
                </svg>
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="text-xl font-display font-bold text-navy dark:text-white mb-4 border-b-2 border-primary pb-2">
                Son Yazılar
              </h3>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-display font-bold text-navy dark:text-white mb-4 border-b-2 border-primary pb-2">
                Kategoriler
              </h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href="#"
                      className="flex justify-between items-center hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-xs font-mono text-text-muted-light dark:text-text-muted-dark">
                        ({category.count})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
