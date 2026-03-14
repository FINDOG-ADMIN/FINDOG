"use client";

import React from 'react';
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/useI18n";

export default function Header() {
  const { t } = useI18n();
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md font-sans">
      {/* Увеличили px до 6 для боковых отступов и max-w до 6xl для соразмерности */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Логотип: используем font-black и уменьшенный размер для компактности в шапке */}
        <Link href="/" className="font-black tracking-tight text-white text-lg md:text-xl uppercase hover:opacity-80 transition-opacity">
          FINDOG<span className="text-red-600">.NET</span>
        </Link>

        {/* Увеличили gap между LanguageSelector и кнопкой/разделителем */}
        <div className="flex items-center gap-6 md:gap-10">
          
          <div className="flex items-center">
            <LanguageSelector />
          </div>

          {/* Разделитель стал еще деликатнее */}
          <div className="hidden sm:block w-[1px] h-4 bg-white/10"></div>

          {isLoggedIn ? (
            <Link 
              href="/dashboard" 
              className="px-5 py-2 rounded-xl bg-white text-black text-[10px] font-black hover:bg-gray-200 transition-colors uppercase"
            >
              {t("contact.title") || "Cabinet"}
            </Link>
          ) : (
            <Link 
              href="/login" 
              className="px-5 py-2 rounded-xl border border-white/20 text-white text-[10px] font-black hover:bg-white hover:text-black transition-all uppercase"
            >
              {t("auth.login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}