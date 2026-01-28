"use client";

import { useLanguage } from "@/app/i18n/LanguageContext";

export default function VideoHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      >
        <source src="/videos/solo_1.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <p
          className="mb-4 text-xs font-light tracking-[0.4em] text-white/80 uppercase md:text-sm"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {t.hero.subtitle}
        </p>
        <h1
          className="text-center text-6xl font-light tracking-[0.15em] text-white uppercase md:text-8xl lg:text-9xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Callixte
        </h1>
        <div className="mt-6 h-px w-24 bg-white/40" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[10px] font-light tracking-[0.3em] text-white/60 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.hero.scroll}
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
