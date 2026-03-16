"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { useI18n } from "@/i18n/useI18n";

export default function Header() {
  const { t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isLoggedIn = false;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <>
      <header className={`sticky top-0 z-[100] w-full transition-all duration-300 ${
        /* ИЗМЕНЕНИЕ: Белый фон с размытием и черными границами низкой плотности */
        isScrolled ? 'bg-white/95 border-b border-black/10 py-3 backdrop-blur-lg' : 'bg-white/80 border-b border-black/5 py-5 backdrop-blur-md'
      }`}>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          {/* ИЗМЕНЕНИЕ: Текст логотипа стал черным */}
          <Link href="/" className="font-black tracking-tight text-black text-lg md:text-xl uppercase z-[110]" onClick={() => setIsMenuOpen(false)}>
            FINDOG<span className="text-red-600">.NET</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <LanguageSelector />
            {/* ИЗМЕНЕНИЕ: Разделитель стал темным (black/10) */}
            <div className="w-[1px] h-4 bg-black/10"></div>
            {/* ИЗМЕНЕНИЕ: Кнопка инвертирована для светлого фона */}
            <Link href="/login" className="px-5 py-2 rounded-xl border border-black/20 text-black text-[10px] font-black hover:bg-black hover:text-white transition-all uppercase">
              {t("auth.login")}
            </Link>
          </div>

          <button className="md:hidden z-[110] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 relative flex flex-col justify-between">
              {/* ИЗМЕНЕНИЕ: Гамбургер-меню теперь черное */}
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      {/* Мобильное меню: Полная инверсия на белый фон */}
      <div className={`fixed inset-0 z-[90] bg-white transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} md:hidden flex flex-col items-center justify-center`}>
        <nav className="flex flex-col items-center gap-12 w-full px-10">
          <LanguageSelector />
          <Link href="/login" onClick={() => setIsMenuOpen(false)} className="w-full max-w-xs py-5 bg-red-600 text-white text-center rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-red-600/20">
            {t("auth.login")}
          </Link>
          {/* ИЗМЕНЕНИЕ: Кнопка закрытия стала темной/прозрачной */}
          <button onClick={() => setIsMenuOpen(false)} className="mt-8 text-black/20 uppercase text-[9px] tracking-[0.4em] font-mono">[ Close Terminal ]</button>
        </nav>
      </div>
    </>
  );
}