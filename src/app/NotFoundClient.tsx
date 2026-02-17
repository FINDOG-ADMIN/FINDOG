"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function NotFoundClient() {
  const { t } = useI18n();

  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center text-center py-20">
      <h1 className="text-3xl font-black tracking-tight">404</h1>
      <p className="mt-3 text-white/70">{t("site.description")}</p>
      <Link
        href="/"
        className="mt-8 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
      >
        {t("site.title")}
      </Link>
    </div>
  );
}

