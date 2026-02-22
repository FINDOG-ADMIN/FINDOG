"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from "@/i18n/useI18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-4 font-sans">
      
      {/* Верхняя часть: Логотип (поднят выше к хедеру) */}
      <div className="flex-1 flex items-center justify-center pb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-none">
          FINDOG<span className="text-red-600">.NET</span>
        </h1>
      </div>

      {/* Центральная часть: Основная кнопка (строго центр страницы) */}
      <div className="flex-none shadow-[0_0_50px_rgba(220,38,38,0.15)]">
        <Link 
          href="/login" 
          className="px-10 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-2xl transition-all hover:scale-105 active:scale-95 text-center uppercase tracking-wider inline-block"
        >
          {t("home.registerButton")}
        </Link>
      </div>

      {/* Нижняя часть: Кнопка "Я нашел собаку" (уравновешивает логотип) */}
      <div className="flex-1 flex flex-col items-center justify-center pt-12">
        <Link 
          href="/found" 
          className="px-8 py-3 border border-white/20 hover:border-red-600/50 hover:text-red-600 text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] rounded-xl transition-all"
        >
          {t("home.foundButton")}
        </Link>
      </div>

      {/* Футер: информация о реестре (самый низ) */}
      <div className="pb-10 w-full text-center">
        <p className="text-[9px] text-white/20 uppercase tracking-widest font-medium">
          {t("footer.freeRegistry")}
        </p>
      </div>
    </main>
  );
}