"use client";

import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";

export default function HomeClient() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-4 px-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter break-words px-2">
            FINDOG<span className="text-red-600">.NET</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-medium px-2">{t("home.tagline")}</p>
        </div>

        <div className="flex flex-col gap-6 pt-8">
          <Link
            href="/found"
            className="group relative w-full bg-red-600 hover:bg-red-700 text-white font-bold py-6 px-8 rounded-2xl text-2xl shadow-[0_0_30px_rgba(220,38,38,0.5)] border border-red-500 transition-all active:scale-95"
          >
            {t("home.foundButton")}
          </Link>

          <Link
            href="/register"
            className="w-full bg-transparent border-2 border-white/20 hover:border-white text-gray-300 hover:text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all"
          >
            {t("home.registerButton")}
          </Link>
        </div>

        <div className="pt-12 text-sm text-gray-600">
          <p>{t("footer.freeRegistry")}</p>
          <p className="mt-2 text-xs opacity-40">{t("footer.version")}</p>
        </div>
      </div>
    </div>
  );
}

