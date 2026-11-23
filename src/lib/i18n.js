import ar from "@/data/dictionaries/ar.json";
import en from "@/data/dictionaries/en.json";

export const locales = ["ar", "en"];
export const defaultLocale = "ar";

const dictionaries = { ar, en };

export const hasLocale = (value) => locales.includes(value);
export const getDictionary = (locale) => dictionaries[locale];
export const tr = (value, locale) => (value ? value[locale] ?? "" : "");
export const dirOf = (locale) => (locale === "ar" ? "rtl" : "ltr");
export const otherLocale = (locale) => (locale === "ar" ? "en" : "ar");
export const fill = (template, values) =>
  template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
