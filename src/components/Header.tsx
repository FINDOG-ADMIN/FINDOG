"use client";

import React, { useState } from 'react';
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/useI18n";

export default function Header() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-md font-sans">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        
        {/* ЛОГОТИП */}
        <Link 
          href="/" 
          className="font-black tracking-tight text-white text-lg md:text-xl uppercase z-[60]"
          onClick={() => setIsMenuOpen(false)}
        >
          FINDOG<span className="text-red-600">.NET</span>
        </Link>

        {/* ДЕСКТОПНОЕ МЕНЮ (Видно от md и выше) */}
        <div className="hidden md:flex items-center gap-10">
          <LanguageSelector />
          <div className="w-[1px] h-4 bg-white/10"></div>
          <Link 
            href="/login" 
            className="px-5 py-2 rounded-xl border border-white/20 text-white text-[10px] font-black hover:bg-white hover:text-black transition-all uppercase"
          >
            {t("auth.login")}
          </Link>
        </div>

        {/* МОБИЛЬНАЯ КНОПКА (БУРГЕР) */}
        <button 
          className="md:hidden z-[60] p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>

        {/* МОБИЛЬНОЕ ВЫПАДАЮЩЕЕ МЕНЮ */}
        <div className={`
          fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 z-[50]
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          md:hidden
        `}>
          <nav className="flex flex-col items-center gap-12">
            {/* В мобильном меню селектор языка может дышать свободно */}
            <div className="scale-125">
              <LanguageSelector />
            </div>
            
            <Link 
              href="/login" 
              onClick={() => setIsMenuOpen(false)}
              className="px-8 py-4 rounded-2xl bg-red-600 text-white text-sm font-black uppercase tracking-widest"
            >
              {t("auth.login")}
            </Link>

            <button 
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 text-white/30 uppercase text-[10px] tracking-[0.3em]"
            >
              Close Terminal
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}