import type { Locale } from "./languages";

export const EN_TRANSLATIONS = {
  "site.title": "FINDOG.NET",
  "site.description": "Filtering Inbound Data & Observation Gate.",
  "header.language": "Language",
  "language.searchPlaceholder": "Search languages…",
  "language.noResults": "No matches",
  "home.title": "FINDOG.NET",
  "home.subtitle": "Filtering Inbound Data & Observation Gate.",
  "home.tagline": "Filtering Inbound Data & Observation Gate.",
  "home.registerButton": "Authorize Connection",
  "auth.login": "Login",
  "auth.description": "Log in to manage secured connections",
  "auth.google": "Sign in with Google",
  "auth.telegram": "Sign in with Telegram",
  "auth.continue": "Continue",
  "footer.freeRegistry": "Global Inbound Filtering Protocol",
  "footer.version": "v.0.1.0 Beta • Novi Sad Edition 🇷🇸",
  "found.title": "Connection Detected",
  "register.title": "Authorize Connection",
  "contact.title": "Contact",
} as const;

export type TranslationKey = keyof typeof EN_TRANSLATIONS;
export type Translations = Partial<Record<TranslationKey, string>>;

export const TRANSLATIONS: Record<string, Translations> = {
  en: EN_TRANSLATIONS,

  "sr-Latn": {
    "site.description": "Filtering Inbound Data & Observation Gate.",
    "home.title": "FINDOG.NET",
    "home.subtitle": "Filtering Inbound Data & Observation Gate.",
    "home.tagline": "Filtering Inbound Data & Observation Gate.",
    "home.registerButton": "Autorizuj vezu",
    "register.title": "Autorizuj vezu",
    "auth.login": "PRIJAVA",
    "auth.description": "Prijavite se da upravljate zaštićenim vezama",
    "auth.google": "Prijavi se putem Google-a",
    "auth.telegram": "Prijavi se putem Telegram-a",
    "auth.continue": "Nastavi",
    "footer.freeRegistry": "Global Inbound Filtering Protocol",
  },

  ru: {
    "site.description": "Filtering Inbound Data & Observation Gate.",
    "home.title": "FINDOG.NET",
    "home.subtitle": "Filtering Inbound Data & Observation Gate.",
    "home.tagline": "Filtering Inbound Data & Observation Gate.",
    "home.registerButton": "Авторизовать соединение",
    "register.title": "Авторизовать соединение",
    "auth.login": "ВХОД",
    "auth.description": "Войдите, чтобы управлять защищёнными соединениями",
    "auth.google": "Войти через Google",
    "auth.telegram": "Войти через Telegram",
    "auth.continue": "Продолжить",
    "footer.freeRegistry": "Global Inbound Filtering Protocol",
  },
  // ... (остальные языки из предыдущего полного списка будут работать через fallback на EN дляSubtitle)
};