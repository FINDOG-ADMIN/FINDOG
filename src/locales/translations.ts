import type { Locale } from "./languages";

export const EN_TRANSLATIONS = {
  "site.title": "FINDOG.NET",
  "site.description": "10 seconds to bring a friend back home.",

  "header.language": "Language",
  "language.searchPlaceholder": "Search languages…",
  "language.noResults": "No matches",

  "home.tagline": "10 seconds to bring a friend back home.",
  "home.foundButton": "I FOUND A DOG",
  "home.registerButton": "Register a pet",

  "footer.freeRegistry": "Free international safety registry",
  "footer.version": "v.0.1.0 Beta • Novi Sad Edition 🇷🇸",

  // Future-proof placeholders (so all site strings live here as the app grows)
  "found.title": "Found a dog",
  "register.title": "Register a pet",
  "contact.title": "Contact",
} as const;

export type TranslationKey = keyof typeof EN_TRANSLATIONS;
export type Translations = Partial<Record<TranslationKey, string>>;

// NOTE: For most locales we keep an empty object for now.
// Missing keys automatically fall back to English at runtime.
export const TRANSLATIONS: Record<Locale, Translations> = {
  en: EN_TRANSLATIONS,

  "sr-Latn": {
    "site.description": "10 sekundi da vratite prijatelja kući.",
    "home.tagline": "10 sekundi da vratite prijatelja kući.",
    "home.foundButton": "NAŠAO/LA SAM PSA",
    "home.registerButton": "Registruj ljubimca",
    "footer.freeRegistry": "Besplatan međunarodni registar bezbednosti",
  },

  ru: {
    "site.description": "10 секунд, чтобы вернуть друга домой.",
    "home.tagline": "10 секунд, чтобы вернуть друга домой.",
    "home.foundButton": "Я НАШЕЛ СОБАКУ",
    "home.registerButton": "Зарегистрировать питомца",
    "footer.freeRegistry": "Бесплатный международный реестр безопасности",
  },

  // Everything below is currently falling back to English
  sq: {},
  ar: {},
  hy: {},
  az: {},
  eu: {},
  be: {},
  bg: {},
  ca: {},
  zh: {},
  cs: {},
  da: {},
  nl: {},
  et: {},
  fi: {},
  fr: {},
  ka: {},
  de: {},
  el: {},
  hi: {},
  hu: {},
  is: {},
  id: {},
  it: {},
  ja: {},
  kk: {},
  ko: {},
  lv: {},
  lt: {},
  mk: {},
  mo: {},
  mn: {},
  no: {},
  pl: {},
  pt: {},
  ro: {},
  es: {},
  sk: {},
  sw: {},
  sv: {},
  tg: {},
  th: {},
  tr: {},
  uk: {},
  uz: {},
  vi: {},
  he: {},
};

