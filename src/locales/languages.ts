export type TextDirection = "ltr" | "rtl";

export interface Language {
  code: string;
  label: string;
  dir: TextDirection;
}

export type Locale = string;

export const LANGUAGES: Language[] = [
  { code: "sq", label: "Albanian", dir: "ltr" },
  { code: "am", label: "Amharic", dir: "ltr" },
  { code: "ar", label: "Arabic (RTL)", dir: "rtl" },
  { code: "hy", label: "Armenian", dir: "ltr" },
  { code: "az", label: "Azerbaijani", dir: "ltr" },
  { code: "eu", label: "Basque (Euskara)", dir: "ltr" },
  { code: "be", label: "Belarusian", dir: "ltr" },
  { code: "bg", label: "Bulgarian", dir: "ltr" },
  { code: "my", label: "Burmese", dir: "ltr" },
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
  { code: "he", label: "Hebrew (RTL)", dir: "rtl" },
  { code: "hi", label: "Hindi", dir: "ltr" },
  { code: "hu", label: "Hungarian", dir: "ltr" },
  { code: "is", label: "Icelandic", dir: "ltr" },
  { code: "id", label: "Indonesian", dir: "ltr" },
  { code: "it", label: "Italian", dir: "ltr" },
  { code: "ja", label: "Japanese", dir: "ltr" },
  { code: "jv", label: "Javanese", dir: "ltr" },
  { code: "kk", label: "Kazakh", dir: "ltr" },
  { code: "km", label: "Khmer", dir: "ltr" },
  { code: "ko", label: "Korean", dir: "ltr" },
  { code: "ky", label: "Kyrgyz", dir: "ltr" },
  { code: "lo", label: "Lao", dir: "ltr" },
  { code: "lv", label: "Latvian", dir: "ltr" },
  { code: "lt", label: "Lithuanian", dir: "ltr" },
  { code: "mk", label: "Macedonian", dir: "ltr" },
  { code: "mg", label: "Malagasy", dir: "ltr" },
  { code: "ms", label: "Malay", dir: "ltr" },
  { code: "mo", label: "Moldovan", dir: "ltr" },
  { code: "mn", label: "Mongolian", dir: "ltr" },
  { code: "ne", label: "Nepali", dir: "ltr" },
  { code: "no", label: "Norwegian", dir: "ltr" },
  { code: "fa", label: "Persian (RTL)", dir: "rtl" },
  { code: "pl", label: "Polish", dir: "ltr" },
  { code: "pt", label: "Portuguese", dir: "ltr" },
  { code: "ro", label: "Romanian", dir: "ltr" },
  { code: "ru", label: "Russian", dir: "ltr" },
  { code: "sr-Latn", label: "Serbian (latin)", dir: "ltr" },
  { code: "sk", label: "Slovak", dir: "ltr" },
  { code: "es", label: "Spanish", dir: "ltr" },
  { code: "sw", label: "Swahili", dir: "ltr" },
  { code: "sv", label: "Swedish", dir: "ltr" },
  { code: "tl", label: "Tagalog (Filipino)", dir: "ltr" },
  { code: "tg", label: "Tajik", dir: "ltr" },
  { code: "te", label: "Telugu", dir: "ltr" },
  { code: "th", label: "Thai", dir: "ltr" },
  { code: "tr", label: "Turkish", dir: "ltr" },
  { code: "tk", label: "Turkmen", dir: "ltr" },
  { code: "uk", label: "Ukrainian", dir: "ltr" },
  { code: "uz", label: "Uzbek", dir: "ltr" },
  { code: "vi", label: "Vietnamese", dir: "ltr" },
  { code: "zu", label: "Zulu", dir: "ltr" }
];

export const SORTED_LANGUAGES = [...LANGUAGES].sort((a, b) => a.label.localeCompare(b.label));

export const getLocaleDir = (locale: Locale): TextDirection => {
  return LANGUAGES.find((l) => l.code === locale)?.dir || "ltr";
};

export const isSupportedLocale = (locale: string): locale is Locale => {
  return LANGUAGES.some((l) => l.code === locale);
};