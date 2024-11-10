import { defaultLang } from ".";
import { vocabulary } from "./vocabulary";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in vocabulary) return lang as keyof typeof vocabulary;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof vocabulary) {
  return function t(key: keyof (typeof vocabulary)[typeof defaultLang]) {
    return vocabulary[lang][key] || vocabulary[defaultLang][key];
  };
}
