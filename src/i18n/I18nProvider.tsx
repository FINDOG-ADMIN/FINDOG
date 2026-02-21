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

function matchNavigatorLocale(navLang: string): Locale | undefined {
  const normalized = navLang.toLowerCase();
  if (!normalized) return undefined;
  if (isSupportedLocale(normalized)) return normalized;

  const base = normalized.split("-")[0];
  if (!base) return undefined; 

  if (base === "sr") return "sr-Latn";

  const found = SORTED_LANGUAGES.find((l) => l.code.toLowerCase() === base);
  return found ? (found.code as Locale) : undefined;
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
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isSupportedLocale(stored)) {
        setLocaleState(stored);
        return;
      }
    } catch { /* ignore */ }

    const nav = typeof navigator !== "undefined" ? navigator.language : "";
    if (nav) {
      const matched = matchNavigatorLocale(nav);
      if (matched) {
        setLocaleState(matched);
        return;
      }
    }

    if (initialLocaleFromCountry && isSupportedLocale(initialLocaleFromCountry)) {
      setLocaleState(initialLocaleFromCountry);
      return;
    }

    setLocaleState("en");
  }, [initialLocaleFromCountry]);

  const dir = useMemo(() => getLocaleDir(locale), [locale]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = dir;
    }
  }, [dir, locale]);

  const t = useCallback(
    (key: TranslationKey) => {
      const translationsForLocale = TRANSLATIONS[locale as keyof typeof TRANSLATIONS];
      const value = (translationsForLocale as any)?.[key] ?? (EN_TRANSLATIONS as any)[key];
      return value ?? String(key);
    },
    [locale],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, dir, languages: SORTED_LANGUAGES, t, setLocale }),
    [dir, locale, setLocale, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}