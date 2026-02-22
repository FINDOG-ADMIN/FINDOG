"use client";

import React from 'react';
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/useI18n";

export default function Header() {
  const { t } = useI18n();
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur font-sans">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        
        {/* Логотип в хедере */}
        <Link href="/" className="font-bold tracking-tight text-white text-xl uppercase">
          FINDOG<span className="text-red-600">.NET</span>
        </Link>

        <div className="flex items-center gap-4">
          <LanguageSelector />

          <div className="hidden sm:block w-[1px] h-6 bg-white/20 mx-1"></div>

          {isLoggedIn ? (
            <Link 
              href="/dashboard" 
              className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors"
            >
              {t("contact.title") || "Cabinet"}
            </Link>
          ) : (
            <Link 
              href="/login" 
              className="px-4 py-1.5 rounded-full border border-white/30 text-white text-[11px] font-bold hover:bg-white hover:text-black transition-all uppercase tracking-widest"
            >
              {/* Теперь здесь только ключ. Он подтянет "MLEBU" для яванского, "ENTRAR" для португальского и т.д. */}
              {t("auth.login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}