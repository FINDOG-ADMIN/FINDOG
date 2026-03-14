"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function HomeClient() {
  const { t, locale } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
      <div className="w-full max-w-3xl space-y-12">
        {/* Блок заголовка и расшифровки протокола */}
        <div className="space-y-6 px-4">
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter text-[#EDEDED]">
            FINDOG<span className="text-red-600">.NET</span>
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 font-mono tracking-[0.4em] uppercase opacity-70 max-w-2xl mx-auto leading-relaxed">
            {t("home.subtitle")}
          </p>
        </div>

        {/* Главная кнопка входа в шлюз */}
        <div className="flex flex-col items-center pt-8">
          <Link
            href={`/${locale}/register`}
            className="group relative w-full max-w-sm bg-red-600 hover:bg-red-700 text-white font-black py-6 px-10 rounded-2xl text-xl sm:text-2xl shadow-[0_0_50px_rgba(220,38,38,0.25)] border border-red-500/50 transition-all active:scale-95 uppercase tracking-[0.1em]"
          >
            {t("home.registerButton")}
          </Link>
          
          {/* Технический статус системы */}
          <div className="mt-8 flex items-center space-x-3 text-[10px] font-mono text-green-500/40 uppercase tracking-[0.2em]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>Gate Status: Active</span>
            <span className="text-gray-800">|</span>
            <span>Nodes: 64/64</span>
          </div>
        </div>

        {/* Футер протокола */}
        <div className="pt-24 space-y-3">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.3em] opacity-50">
            {t("footer.freeRegistry")}
          </p>
          <p className="text-[9px] text-gray-800 font-mono opacity-30">
            {t("footer.version")}
          </p>
        </div>
      </div>
    </div>
  );
}