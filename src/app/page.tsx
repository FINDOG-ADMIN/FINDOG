"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function Page() {
  const { t } = useI18n();

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      {/* Секция Логотипа и Слогана */}
      <div className="mb-16 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
          FINDOG<span className="text-red-600">.NET</span>
        </h1>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/30 font-mono">
          {t("home.tagline")} {/* "Filtering Inbound Data & Observation Gate" */}
        </p>
      </div>

      {/* Кнопка POWER (ENGAGE SYSTEM) */}
      <Link href="/login" className="group relative">
        <div className="
          w-24 h-24 md:w-28 md:h-28 
          flex items-center justify-center 
          bg-transparent 
          border border-white/5 
          rounded-3xl 
          transition-all duration-700 
          group-hover:border-red-600/40
          group-hover:shadow-[0_0_50px_rgba(220,38,38,0.15)]
        ">
          {/* Иконка Power (SVG) */}
          <svg 
            viewBox="0 0 24 24" 
            className="w-10 h-10 text-white/20 group-hover:text-red-600 transition-all duration-700"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>

          {/* Технологичные уголки */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/10 group-hover:border-red-600 transition-colors duration-700"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/10 group-hover:border-red-600 transition-colors duration-700"></div>
        </div>
        
        {/* Сверхтонкая подпись статуса */}
        <div className="mt-6 overflow-hidden">
          <span className="block text-[9px] uppercase tracking-[0.6em] text-white/10 group-hover:text-red-500/50 transition-all duration-700 translate-y-0">
            System Standby
          </span>
        </div>
      </Link>
    </div>
  );
}