"use client";

import { useState } from "react";

const teamMembers = [
  {
    name: "Ali Can Yılmaztürk",
    role: "Kurucu Avukat",
    image: "https://via.placeholder.com/400x600?text=ACY",
  },
];

const filters = ["Tümü", "Ortaklar", "Asistanlar", "İş Hukuku", "Aile Hukuku", "Dava"];

export default function TeamPage() {
  const [activeFilter, setActiveFilter] = useState("Tümü");

  return (
    <main className="flex-1 px-4 sm:px-8 lg:px-10 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-4 px-4">
          <h1 className="text-[#181711] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
            Uzmanlarımızla Tanışın
          </h1>
          <p className="text-[#8a8460] dark:text-white/60 text-base md:text-lg font-normal leading-normal max-w-3xl">
            Olağanüstü hüner ve adanmışlık yoluyla müvekkillerimiz için en iyi sonuçları elde etmeye 
            bağlı, hukuk profesyonellerinden oluşan adanmış bir ekip.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-[#181711] font-bold"
                  : "bg-[#f5f4f0] dark:bg-white/10 hover:bg-primary/30 dark:hover:bg-primary/20 text-[#181711] dark:text-white/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-xl"
            >
              <div className="w-full h-full bg-primary/20 flex items-center justify-center aspect-[3/4] text-6xl text-primary">
                ACY
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end">
                <h3 className="text-lg font-bold leading-tight">{member.name}</h3>
                <p className="text-sm text-white/80">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

