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
        className="inline-flex items-center gap-2 rounded-xl border border-black/[0.06] bg-transparent px-4 py-2 text-sm text-black hover:bg-black/[0.02] focus:outline-none transition-all active:scale-95"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-black/30 uppercase text-[10px] tracking-wider font-bold">
          {t("header.language")}
        </span>
        <span className="font-bold text-[11px] uppercase tracking-tighter">{currentLabel}</span>
        <span aria-hidden className={`text-black/20 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-0 mt-3 w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-black/[0.05] bg-white p-3 shadow-[0_30px_60px_rgba(0,0,0,0.08)] z-[200]"
        >
          <div className="relative mb-3">
            <input
              ref={searchRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("language.searchPlaceholder")}
              className="w-full rounded-xl border border-black/[0.03] bg-black/[0.03] px-4 py-3 text-sm text-black placeholder:text-black/20 focus:outline-none focus:border-red-600/20 transition-colors"
            />
          </div>

          <div className="max-h-72 overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-6 text-sm text-black/30 text-center italic">
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
                            ? "bg-red-600 text-white font-bold"
                            : "text-black/60 hover:bg-black/[0.03] hover:text-black",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="tracking-tight">{l.label}</span>
                          <span className={`text-[10px] font-mono uppercase ${active ? 'text-white/70' : 'text-black/20'}`}>
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