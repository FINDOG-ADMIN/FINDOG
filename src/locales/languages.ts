export type TextDirection = "ltr" | "rtl";

// IMPORTANT:
// - Labels are intentionally in Latin script to allow strict A–Z sorting.
// - The list matches the languages requested by the user.
export const LANGUAGES = [
  { code: "sq", label: "Albanian", dir: "ltr" },
  { code: "ar", label: "Arabic (RTL)", dir: "rtl" },
  { code: "hy", label: "Armenian", dir: "ltr" },
  { code: "az", label: "Azerbaijani", dir: "ltr" },
  { code: "eu", label: "Basque (Euskara)", dir: "ltr" },
  { code: "be", label: "Belarusian", dir: "ltr" },
  { code: "bg", label: "Bulgarian", dir: "ltr" },
  { code: "ca", label: "Catalan", dir: "ltr" },
  { code: "zh", label: "Chinese", dir: "ltr" },
  { code: "cs", label: "Czech", dir: "ltr" },
  { code: "da", label: "Danish", dir: "ltr" },
  { code: "nl", label: "Dutch", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "et", label: "Estonian", dir: "ltr" },
  { code: "fi", label: "Finnish", dir: "ltr" },
  { code: "fr", label: "French", dir: "ltr" },
  { code: "ka", label: "Georgian", dir: "ltr" },
  { code: "de", label: "German", dir: "ltr" },
  { code: "el", label: "Greek", dir: "ltr" },
  { code: "hi", label: "Hindi", dir: "ltr" },
  { code: "hu", label: "Hungarian", dir: "ltr" },
  { code: "is", label: "Icelandic", dir: "ltr" },
  { code: "id", label: "Indonesian", dir: "ltr" },
  { code: "it", label: "Italian", dir: "ltr" },
  { code: "ja", label: "Japanese", dir: "ltr" },
  { code: "kk", label: "Kazakh", dir: "ltr" },
  { code: "ko", label: "Korean", dir: "ltr" },
  { code: "lv", label: "Latvian", dir: "ltr" },
  { code: "lt", label: "Lithuanian", dir: "ltr" },
  { code: "mk", label: "Macedonian", dir: "ltr" },
  { code: "mo", label: "Moldovan", dir: "ltr" },
  { code: "mn", label: "Mongolian", dir: "ltr" },
  { code: "no", label: "Norwegian", dir: "ltr" },
  { code: "pl", label: "Polish", dir: "ltr" },
  { code: "pt", label: "Portuguese", dir: "ltr" },
  { code: "ro", label: "Romanian", dir: "ltr" },
  { code: "ru", label: "Russian", dir: "ltr" },
  { code: "sr-Latn", label: "Serbian (latin)", dir: "ltr" },
  { code: "sk", label: "Slovak", dir: "ltr" },
  { code: "es", label: "Spanish", dir: "ltr" },
  { code: "sw", label: "Swahili", dir: "ltr" },
  { code: "sv", label: "Swedish", dir: "ltr" },
  { code: "tg", label: "Tajik", dir: "ltr" },
  { code: "th", label: "Thai", dir: "ltr" },
  { code: "tr", label: "Turkish", dir: "ltr" },
  { code: "uk", label: "Ukrainian", dir: "ltr" },
  { code: "uz", label: "Uzbek", dir: "ltr" },
  { code: "vi", label: "Vietnamese", dir: "ltr" },
  { code: "he", label: "Hebrew (RTL)", dir: "rtl" },
] as const satisfies readonly { code: string; label: string; dir: TextDirection }[];

export type Locale = (typeof LANGUAGES)[number]["code"];

export type Language = {
  code: Locale;
  label: string; // must be Latin for A–Z sorting
  dir: TextDirection;
};

export const SORTED_LANGUAGES: readonly Language[] = [...LANGUAGES].sort((a, b) =>
  a.label.localeCompare(b.label, "en", { sensitivity: "base" }),
);

export const RTL_LOCALES: ReadonlySet<Locale> = new Set(
  LANGUAGES.filter((l) => l.dir === "rtl").map((l) => l.code),
);

const SUPPORTED_LOCALES: ReadonlySet<string> = new Set(LANGUAGES.map((l) => l.code));

export function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.has(value);
}

export function getLocaleDir(locale: Locale): TextDirection {
  return RTL_LOCALES.has(locale) ? "rtl" : "ltr";
}

