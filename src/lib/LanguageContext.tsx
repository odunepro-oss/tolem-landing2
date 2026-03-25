"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { translations, type Language } from "./translations";

type TranslationData = (typeof translations)["fr"] | (typeof translations)["en"];

interface LanguageContextType {
  lang: Language;
  t: TranslationData;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  t: translations.fr as TranslationData,
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "fr" ? "en" : "fr"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as TranslationData, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
