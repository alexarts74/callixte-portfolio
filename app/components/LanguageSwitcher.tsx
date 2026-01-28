"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => setLocale("en")}
        className={`text-xs font-light tracking-wider transition-opacity ${
          locale === "en" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
      >
        EN
      </button>
      <span className="text-xs opacity-40">/</span>
      <button
        onClick={() => setLocale("fr")}
        className={`text-xs font-light tracking-wider transition-opacity ${
          locale === "fr" ? "opacity-100" : "opacity-40 hover:opacity-70"
        }`}
      >
        FR
      </button>
    </div>
  );
}
