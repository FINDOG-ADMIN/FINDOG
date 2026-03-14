"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n/useI18n";
import type { Locale } from "@/locales/languages";

function includesInsensitive(haystack: string, needle: string) {
  return haystack.toLowerCase().includes(needle.toLowerCase());
}

export default function LanguageSelector() {
  const { locale, languages, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const id = window.setTimeout(() => searchRef.current?.focus(), 0);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const root = rootRef.current;
      if (!root) return;
      if (e.target instanceof Node && !root.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const currentLabel = useMemo(() => {
    return languages.find((l) => l.code === locale)?.label ?? locale;
  }, [languages, locale]);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return languages;
    return languages.filter((l) => includesInsensitive(l.label, q) || includesInsensitive(l.code, q));
  }, [languages, query]);

  const onPick = (code: Locale) => {
    setLocale(code);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-white/40 uppercase text-[10px] tracking-wider font-medium">
          {t("header.language")}
        </span>
        <span className="font-bold">{currentLabel}</span>
        <span aria-hidden className={`text-white/40 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          /* КЛЮЧЕВОЕ ИСПРАВЛЕНИЕ:
             На мобильных: left-1/2 -translate-x-1/2 (центровка)
             На ПК (md): left-auto right-0 translate-x-0 (по правому краю кнопки)
          */
          className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-white/15 bg-[#0a0a0a] backdrop-blur-2xl p-3 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-[200]"
        >
          {/* Поле поиска */}
          <div className="relative mb-3">
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("language.searchPlaceholder")}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-red-600/50 transition-colors"
            />
          </div>

          {/* Список языков */}
          <div className="max-h-[50vh] md:max-h-72 overflow-y-auto overscroll-contain pr-1 custom-scrollbar">
            {filtered.length === 0 ? (
              <div className="px-3 py-6 text-sm text-white/30 text-center italic">
                {t("language.noResults")}
              </div>
            ) : (
              <ul className="space-y-1">
                {filtered.map((l) => {
                  const active = l.code === locale;
                  return (
                    <li key={l.code}>
                      <button
                        type="button"
                        role="menuitem"
                        onClick={() => onPick(l.code)}
                        className={[
                          "w-full rounded-xl px-4 py-3 text-left text-sm transition-all duration-200",
                          active
                            ? "bg-red-600 text-white font-bold shadow-lg shadow-red-900/20"
                            : "text-white/60 hover:bg-white/5 hover:text-white",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="tracking-tight">{l.label}</span>
                          <span className={`text-[10px] font-mono uppercase ${active ? 'text-white/70' : 'text-white/20'}`}>
                            {l.code}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}