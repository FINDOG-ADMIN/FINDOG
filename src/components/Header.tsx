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
        isScrolled ? 'bg-black/95 border-b border-white/10 py-3 backdrop-blur-lg' : 'bg-black/80 border-b border-white/5 py-5 backdrop-blur-md'
      }`}>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6">
          <Link href="/" className="font-black tracking-tight text-white text-lg md:text-xl uppercase z-[110]" onClick={() => setIsMenuOpen(false)}>
            FINDOG<span className="text-red-600">.NET</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <LanguageSelector />
            <div className="w-[1px] h-4 bg-white/10"></div>
            <Link href="/login" className="px-5 py-2 rounded-xl border border-white/20 text-white text-[10px] font-black hover:bg-white hover:text-black transition-all uppercase">
              {t("auth.login")}
            </Link>
          </div>

          <button className="md:hidden z-[110] p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[90] bg-black transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'} md:hidden flex flex-col items-center justify-center`}>
        <nav className="flex flex-col items-center gap-12 w-full px-10">
          <LanguageSelector />
          <Link href="/login" onClick={() => setIsMenuOpen(false)} className="w-full max-w-xs py-5 bg-red-600 text-white text-center rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl shadow-red-900/40">
            {t("auth.login")}
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="mt-8 text-white/20 uppercase text-[9px] tracking-[0.4em] font-mono">[ Close Terminal ]</button>
        </nav>
      </div>
    </>
  );
}