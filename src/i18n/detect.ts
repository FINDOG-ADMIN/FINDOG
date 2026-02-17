import type { Locale } from "@/locales/languages";

// Cloudflare `cf-ipcountry` is a country/region code, not a language.
// We map common countries to a reasonable default locale.
export function localeFromCountry(countryCode?: string | null): Locale | undefined {
  if (!countryCode) return undefined;
  const cc = countryCode.toUpperCase();

  // Cyrillic / Slavic
  if (cc === "RU") return "ru";
  if (cc === "UA") return "uk";
  if (cc === "BY") return "be";
  if (cc === "MD") return "mo";
  if (cc === "BG") return "bg";
  if (cc === "MK") return "mk";
  if (cc === "RS" || cc === "ME" || cc === "BA") return "sr-Latn";

  // Central / Western Europe
  if (cc === "RO") return "ro";
  if (cc === "HU") return "hu";
  if (cc === "PL") return "pl";
  if (cc === "CZ") return "cs";
  if (cc === "SK") return "sk";
  if (cc === "DE" || cc === "AT") return "de";
  if (cc === "FR") return "fr";
  if (cc === "NL") return "nl";
  if (cc === "ES") return "es";
  if (cc === "PT" || cc === "BR") return "pt";
  if (cc === "IT") return "it";

  // Nordics
  if (cc === "SE") return "sv";
  if (cc === "DK") return "da";
  if (cc === "NO") return "no";
  if (cc === "FI") return "fi";
  if (cc === "IS") return "is";

  // Balkans
  if (cc === "AL") return "sq";

  // Baltics
  if (cc === "LT") return "lt";
  if (cc === "LV") return "lv";
  if (cc === "EE") return "et";

  // Caucasus / Central Asia
  if (cc === "GE") return "ka";
  if (cc === "AM") return "hy";
  if (cc === "AZ") return "az";
  if (cc === "KZ") return "kk";
  if (cc === "UZ") return "uz";
  if (cc === "TJ") return "tg";

  // Middle East (RTL)
  if (cc === "IL") return "he";
  if (
    cc === "SA" ||
    cc === "AE" ||
    cc === "QA" ||
    cc === "KW" ||
    cc === "BH" ||
    cc === "OM" ||
    cc === "JO" ||
    cc === "LB" ||
    cc === "EG" ||
    cc === "MA" ||
    cc === "TN" ||
    cc === "DZ"
  )
    return "ar";

  // Asia
  if (cc === "KR") return "ko";
  if (cc === "JP") return "ja";
  if (cc === "CN" || cc === "HK" || cc === "TW") return "zh";
  if (cc === "MN") return "mn";
  if (cc === "TH") return "th";
  if (cc === "VN") return "vi";
  if (cc === "ID") return "id";
  if (cc === "IN") return "hi";

  // Africa
  if (cc === "KE" || cc === "TZ" || cc === "UG") return "sw";

  return undefined;
}

