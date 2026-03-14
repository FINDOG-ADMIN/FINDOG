"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from "@/i18n/useI18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-between p-4 font-sans overflow-hidden">
      
      {/* 1. ВЕРХНЯЯ ЧАСТЬ: Логотип и Манифест */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none select-none">
          FINDOG<span className="text-red-600">.NET</span>
        </h1>
        {/* Добавляем манифест протокола */}
        <div className="flex flex-col items-center space-y-2">
          <p className="text-[10px] md:text-xs text-white/40 font-mono tracking-[0.4em] uppercase text-center max-w-[280px] md:max-w-none">
            {t("home.subtitle") || "Filtering Inbound Data & Observation Gate"}
          </p>
          <div className="h-px w-8 bg-red-600/30"></div>
        </div>
      </div>

      {/* 2. ЦЕНТРАЛЬНАЯ ЧАСТЬ: Основная кнопка доступа */}
      <div className="flex-none z-10">
        <div className="relative group">
          {/* Эффект свечения сзади кнопки */}
          <div className="absolute -inset-1 bg-red-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          
          <Link 
            href="/login" 
            className="relative px-12 py-6 bg-red-600 hover:bg-red-700 text-white text-xl font-black rounded-2xl transition-all hover:scale-[1.02] active:scale-95 text-center uppercase tracking-[0.1em] inline-block shadow-2xl shadow-red-900/40"
          >
            {t("home.registerButton")}
          </Link>
        </div>
      </div>

      {/* 3. НИЖНЯЯ ЧАСТЬ: Технический статус вместо ошибки */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-3 text-[9px] font-mono text-green-500/40 uppercase tracking-[0.2em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
          </span>
          <span>Protocol Active</span>
          <span className="text-white/10">|</span>
          <span>Nodes: Operational</span>
        </div>
      </div>

      {/* 4. ФУТЕР: Информация о протоколе */}
      <div className="pb-10 w-full text-center">
        <p className="text-[9px] text-white/10 uppercase tracking-[0.3em] font-mono">
          {t("footer.freeRegistry")}
        </p>
      </div>
    </main>
  );
}