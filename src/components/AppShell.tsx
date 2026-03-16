"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/i18n/useI18n";

export default function AppShell({ children }: { children: ReactNode }) {
  const { dir } = useI18n();

  return (
    /* ИЗМЕНЕНИЕ: Добавлено bg-white и min-h-screen, чтобы AppShell 
       полностью перекрывал любой темный фон родителя */
    <div dir={dir} className="w-full min-h-screen bg-white transition-colors duration-500">
      {/* Контейнер main остается с max-w-5xl для центрирования контента, 
         но так как родитель (div) теперь белый, черных полей по бокам не будет.
      */}
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        {children}
      </main>
    </div>
  );
}