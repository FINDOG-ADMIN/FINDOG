"use client";

import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import {
  getLocaleDir,
  isSupportedLocale,
  SORTED_LANGUAGES,
  type Locale,
  type TextDirection,
} from "@/locales/languages";
import { EN_TRANSLATIONS, TRANSLATIONS, type TranslationKey } from "@/locales/translations";

const STORAGE_KEY = "findog.locale";

type I18nContextValue = {
  locale: Locale;
  dir: TextDirection;
  languages: typeof SORTED_LANGUAGES;
  t: (key: TranslationKey) => string;
  setLocale: (locale: Locale) => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

function normalizeTag(tag: string): string {
  return tag.trim().replace(/_/g, "-").toLowerCase();
}

function matchNavigatorLocale(navLang: string): Locale | undefined {
  const normalized = normalizeTag(navLang);
  if (isSupportedLocale(normalized)) return normalized;

  const base = normalized.split("-")[0];
  if (!base) return undefined;

  // Prefer a specific variant where our list needs it
  if (base === "sr") return "sr-Latn";

  // Otherwise match by base language
  const found = SORTED_LANGUAGES.find((l) => l.code.toLowerCase() === base);
  return found?.code;
}

export function I18nProvider({
  children,
  initialLocaleFromCountry,
}: {
  children: React.ReactNode;
  initialLocaleFromCountry?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocaleFromCountry ?? "en");

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  // Determine locale (priority: localStorage -> navigator.language -> cf-ipcountry -> English)
  useEffect(() => {
    // 1) localStorage (manual selection)
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isSupportedLocale(stored)) {
        setLocaleState(stored);
        return;
      }
    } catch {
      // ignore
    }

    // 2) navigator.language
    const nav = typeof navigator !== "undefined" ? navigator.language : "";
    if (nav) {
      const matched = matchNavigatorLocale(nav);
      if (matched) {
        setLocaleState(matched);
        return;
      }
    }

    // 3) Cloudflare header-derived locale (server hint)
    if (initialLocaleFromCountry) {
      setLocaleState(initialLocaleFromCountry);
      return;
    }

    // 4) fallback
    setLocaleState("en");
  }, [initialLocaleFromCountry]);

  const dir = useMemo(() => getLocaleDir(locale), [locale]);

  // Keep document element in sync (helps for caret direction, selection, etc.)
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [dir, locale]);

  const t = useCallback(
    (key: TranslationKey) => {
      const value = TRANSLATIONS[locale]?.[key] ?? EN_TRANSLATIONS[key];
      return value ?? String(key);
    },
    [locale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dir,
      languages: SORTED_LANGUAGES,
      t,
      setLocale,
    }),
    [dir, locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

