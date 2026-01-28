"use client";

import Image from "next/image";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function Presentation() {
  const { t } = useLanguage();

  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
        {/* Section Header - Séparation */}
        <div className="mb-10 md:mb-12 flex items-center gap-4">
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.presentation.number}
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.presentation.section}
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Image */}
          <div>
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait de Callixte"
                fill
                className="object-cover grayscale transition-[filter] duration-1000 ease-in-out hover:grayscale-0"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2
              className="mb-6 text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.presentation.title}
              <br />
              <span className="italic">{t.presentation.titleItalic}</span>
            </h2>

            <div
              className="space-y-4 text-base font-light leading-relaxed text-neutral-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>{t.presentation.paragraph1}</p>
              <p>{t.presentation.paragraph2}</p>
              <p>{t.presentation.paragraph3}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-8">
              <div>
                <span
                  className="text-2xl font-light md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  10+
                </span>
                <p
                  className="mt-1 text-[10px] font-light tracking-wider text-neutral-500 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.presentation.stats.experience}
                </p>
              </div>
              <div>
                <span
                  className="text-2xl font-light md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  15
                </span>
                <p
                  className="mt-1 text-[10px] font-light tracking-wider text-neutral-500 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.presentation.stats.creations}
                </p>
              </div>
              <div>
                <span
                  className="text-2xl font-light md:text-3xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  8
                </span>
                <p
                  className="mt-1 text-[10px] font-light tracking-wider text-neutral-500 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.presentation.stats.countries}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
