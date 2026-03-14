"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from "@/i18n/useI18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-4 font-sans overflow-hidden">
      
      {/* 1. ВЕРХНЯЯ ЧАСТЬ: Логотип и Манифест (Размер уменьшен до 5xl) */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none select-none">
          FINDOG<span className="text-red-600">.NET</span>
        </h1>
        
        <div className="flex flex-col items-center space-y-4">
          <p className="text-[10px] md:text-xs text-white/30 uppercase text-center max-w-[280px] md:max-w-none leading-relaxed">
            {t("home.subtitle") || "Filtering Inbound Data & Observation Gate"}
          </p>
          <div className="h-px w-6 bg-red-600/30"></div>
        </div>
      </div>

      {/* 2. ЦЕНТРАЛЬНАЯ ЧАСТЬ: Основная кнопка доступа */}
      <div className="flex-none z-10">
        <div className="relative group">
          <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <Link 
            href="/login" 
            className="relative px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-black rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-center uppercase inline-block shadow-2xl shadow-red-900/40"
          >
            {t("home.registerButton")}
          </Link>
        </div>
      </div>

      {/* 3. НИЖНЯЯ ЧАСТЬ: Технический статус */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-3 text-[10px] text-green-500/30 uppercase">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span className="font-medium">Protocol Active</span>
          <span className="text-white/10">|</span>
          <span className="font-medium">Nodes: Operational</span>
        </div>
      </div>

      {/* 4. ФУТЕР: Информация о протоколе */}
      <div className="pb-10 w-full text-center">
        <p className="text-[10px] text-white/10 uppercase font-medium">
          {t("footer.freeRegistry")}
        </p>
      </div>
    </main>
  );
}