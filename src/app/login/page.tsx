"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from "@/i18n/useI18n";

export default function LoginPage() {
  const { t, locale } = useI18n();

  // Временная заглушка для текстов, которых еще нет в translations.ts
  const getAltText = (key: string, defaultRu: string, defaultEn: string) => {
    // Добавляем 'as any', чтобы TypeScript не ругался на строковый ключ
    const translation = t(key as any);
    if (translation !== key) return translation;
    return locale === 'ru' ? defaultRu : defaultEn;
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-black text-white flex flex-col items-center justify-center p-4 font-sans">
      
      <div className="w-full max-w-sm flex flex-col items-center">
        
        {/* Логотип: СТРОГО ПРЯМОЙ, font-bold, как на главной */}
        <Link href="/" className="mb-10 hover:opacity-80 transition-opacity">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase leading-none text-center italic-none">
            FINDOG<span className="text-red-600">.NET</span>
          </h1>
        </Link>

        {/* Описание над кнопками — теперь мультиязычное */}
        <p className="text-[11px] text-white/50 uppercase tracking-[0.15em] mb-8 text-center leading-relaxed max-w-[280px]">
          {getAltText(
            "auth.description", 
            "Войдите, чтобы управлять профилями ваших питомцев", 
            "Log in to manage your pet profiles"
          )}
        </p>

        {/* Блок кнопок */}
        <div className="w-full flex flex-col gap-3">
          
          <button className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-200 transition-all active:scale-[0.98] uppercase text-xs tracking-widest">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            {getAltText("auth.google", "Войти через Google", "Sign in with Google")}
          </button>

          <button className="w-full py-4 bg-[#24A1DE] text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#208bbf] transition-all active:scale-[0.98] uppercase text-xs tracking-widest">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 6.6 5.344 11.944 11.944 11.944 6.6 0 11.944-5.344 11.944-11.944C23.888 5.344 18.544 0 11.944 0zM17.81 7.552l-2.01 9.48c-.15.67-.55.83-1.11.51l-3.07-2.26-1.48 1.42c-.16.16-.3.3-.61.3l.22-3.13 5.7-5.15c.25-.22-.05-.34-.38-.12l-7.05 4.44-3.04-.95c-.66-.21-.67-.66.14-.98l11.88-4.58c.55-.2.1.32-.2.52z"/>
            </svg>
            {getAltText("auth.telegram", "Войти через Telegram", "Sign in with Telegram")}
          </button>

          <div className="py-4 flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-red-600 transition-colors uppercase tracking-widest font-bold placeholder:text-white/20"
            />
            <button className="w-full py-4 border border-white/20 text-white/90 font-bold rounded-2xl hover:bg-white hover:text-black transition-all active:scale-[0.98] uppercase text-xs tracking-widest">
              {getAltText("auth.continue", "Продолжить", "Continue")}
            </button>
          </div>

        </div>

        {/* Футер страницы входа */}
        <p className="mt-10 text-[9px] text-white/20 uppercase tracking-[0.2em] text-center leading-relaxed">
          {t("footer.freeRegistry" as any)}
        </p>

      </div>
    </main>
  );
}