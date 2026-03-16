"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

// Константа для шрифтового стека с приоритетом Inter
const fontStack = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

export default function Page() {
  const { t } = useI18n();

  return (
    /* Фон теперь идеально белый, текст — радикально черный */
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4 bg-white text-black" style={{ fontFamily: fontStack }}>
      
      <div className="mb-20 space-y-6">
        {/* Заголовок в глубоком черном с красным акцентом */}
        <h1 className="text-2xl md:text-4xl font-black uppercase select-none">
          FINDOG<span className="text-red-600">.NET</span>
        </h1>
        
        {/* Слоган: теперь он серый (black/30) для легкости, но читается идеально */}
        <p className="text-[12px] md:text-sm uppercase text-black/30 leading-relaxed max-w-[300px] md:max-w-none">
          FILTERING INBOUND DATA OBSERVATION GATE
        </p>
      </div>

      <div className="flex justify-center w-full">
        <Link href="/login" className="group relative">
          <div className="
            w-24 h-24 md:w-32 md:h-32 
            flex items-center justify-center 
            bg-transparent 
            border border-black/5 
            rounded-3xl 
            transition-all duration-700 
            group-hover:border-red-600/20
            group-hover:shadow-[0_0_40px_rgba(220,38,38,0.05)]
            group-hover:scale-[1.02]
            active:scale-95
          ">
            {/* Иконка стала темной, при наведении — красной */}
            <svg 
              viewBox="0 0 24 24" 
              className="w-10 h-10 md:w-12 md:h-12 text-black/10 group-hover:text-red-600 transition-all duration-700"
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

      {/* Футер: статусы теперь выглядят как строгий отчет на бумаге */}
      <div className="mt-24 opacity-40 flex items-center space-x-6 text-[9px] text-black uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-red-600 rounded-full"></span>
          <span>Nodes: Operational</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1 h-1 bg-red-600 rounded-full opacity-30"></span>
          <span>L-2 Secure</span>
        </div>
      </div>

    </div>
  );
}