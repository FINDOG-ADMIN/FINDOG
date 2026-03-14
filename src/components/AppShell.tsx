"use client";

import type { ReactNode } from "react";
import { useI18n } from "@/i18n/useI18n";

export default function AppShell({ children }: { children: ReactNode }) {
  const { dir } = useI18n();

  return (
    <div dir={dir} className="w-full">
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        {children}
      </main>
    </div>
  );
}