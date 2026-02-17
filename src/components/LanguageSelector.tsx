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
        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span className="text-white/60">{t("header.language")}</span>
        <span className="font-semibold">{currentLabel}</span>
        <span aria-hidden className="text-white/60">
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-white/15 bg-black/95 backdrop-blur p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          <input
            ref={searchRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("language.searchPlaceholder")}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />

          <div className="mt-3 max-h-72 overflow-y-auto overscroll-contain pr-1">
            {filtered.length === 0 ? (
              <div className="px-3 py-4 text-sm text-white/60">{t("language.noResults")}</div>
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
                          "w-full rounded-xl px-3 py-2 text-left text-sm",
                          active
                            ? "bg-red-600/20 text-white border border-red-600/30"
                            : "text-white/85 hover:bg-white/10 border border-transparent",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-medium">{l.label}</span>
                          <span className="text-xs text-white/45">{l.code}</span>
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

