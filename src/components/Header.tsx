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
      {/* px-4 для самых маленьких экранов, sm:px-6 для остальных */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
        
        {/* Логотип: добавили pr-6, чтобы создать принудительный зазор справа на мобилках */}
        <Link 
          href="/" 
          className="font-black tracking-tight text-white text-lg md:text-xl uppercase hover:opacity-80 transition-opacity pr-6 flex-shrink-0"
        >
          FINDOG<span className="text-red-600">.NET</span>
        </Link>

        {/* gap-4 на мобилках, md:gap-10 на десктопе */}
        <div className="flex items-center gap-4 md:gap-10">
          
          <div className="flex items-center">
            <LanguageSelector />
          </div>

          <div className="hidden sm:block w-[1px] h-4 bg-white/10"></div>

          {isLoggedIn ? (
            <Link 
              href="/dashboard" 
              className="px-5 py-2 rounded-xl bg-white text-black text-[10px] font-black hover:bg-gray-200 transition-colors uppercase flex-shrink-0"
            >
              {t("contact.title") || "Cabinet"}
            </Link>
          ) : (
            <Link 
              href="/login" 
              className="px-4 py-2 sm:px-5 rounded-xl border border-white/20 text-white text-[10px] font-black hover:bg-white hover:text-black transition-all uppercase flex-shrink-0"
            >
              {t("auth.login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}