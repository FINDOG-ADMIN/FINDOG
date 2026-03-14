"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function Page() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      {/* 1. Секция Логотипа и Слогана */}
      <div className="mb-20 space-y-6">
        {/* Логотип уменьшен: был 4xl/6xl, стал 2xl/4xl */}
        <h1 className="text-2xl md:text-4xl font-black tracking-tighter text-white uppercase select-none">
          FINDOG<span className="text-red-600">.NET</span>
        </h1>
        
        {/* Расшифровка увеличена: была 10px/xs, стала 12px/sm */}
        <p className="text-[12px] md:text-sm uppercase tracking-[0.5em] text-white/40 font-mono leading-relaxed max-w-[300px] md:max-w-none">
          {t("home.tagline") || "FILTERING INBOUND DATA & OBSERVATION GATE"}
        </p>

        {/* Минималистичный разделитель */}
        <div className="flex justify-center items-center gap-4 pt-2">
          <div className="h-[1px] w-10 bg-white/10"></div>
          <div className="h-1 w-1 rounded-full bg-red-600/50"></div>
          <div className="h-[1px] w-10 bg-white/10"></div>
        </div>
      </div>

      {/* 2. Центральная кнопка POWER (Без уголков и лишнего текста) */}
      <div className="flex justify-center w-full">
        <Link href="/login" className="group relative">
          <div className="
            w-24 h-24 md:w-32 md:h-32 
            flex items-center justify-center 
            bg-transparent 
            border border-white/5 
            rounded-full
            transition-all duration-700 
            group-hover:border-red-600/40
            group-hover:shadow-[0_0_40px_rgba(220,38,38,0.1)]
          ">
            {/* Иконка Power (SVG) — теперь это единственный акцент */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-10 h-10 md:w-12 md:h-12 text-white/20 group-hover:text-red-600 transition-all duration-700"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
              <line x1="12" y1="2" x2="12" y2="12"></line>
            </svg>
          </div>
        </Link>
      </div>

      {/* 3. Техническая сводка (в самом низу для баланса) */}
      <div className="mt-24 flex items-center space-x-6 text-[9px] text-white/5 uppercase tracking-widest font-mono">
        <span>Nodes: Operational</span>
        <span>L-2 Secure</span>
      </div>
    </div>
  );
}