"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

const companyImages = [
  { src: "/images/company/company_1.jpg", alt: "Company performance" },
  { src: "/images/company/company_2.jpg", alt: "Collective creation" },
  { src: "/images/company/company_3.jpg", alt: "Studio rehearsal" },
  { src: "/images/company/company_4.jpg", alt: "Company show" },
  { src: "/images/company/company_5.jpeg", alt: "Company rehearsal" },
  { src: "/images/company/company_6.png", alt: "Company creation" },
];

export default function Company() {
  const { t, locale } = useLanguage();

  return (
    <section id="compagnie" className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 flex items-center gap-4">
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.company.number}
          </span>
          <div className="h-px flex-1 bg-neutral-200" />
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.company.section}
          </span>
        </div>

        {/* Content Grid */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="flex flex-col justify-center lg:order-2">
            <h2
              className="mb-6 text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.company.title}
              <br />
              <span className="italic">{t.company.titleItalic}</span>
            </h2>

            <div
              className="space-y-4 text-base font-light leading-relaxed text-neutral-600"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>{t.company.paragraph1}</p>
              <p>{t.company.paragraph2}</p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/company"
                className="inline-flex items-center gap-2 border border-neutral-900 px-6 py-3 text-sm font-light tracking-wider text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {locale === "en" ? "Learn more" : "En savoir plus"}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Images Grid */}
          <Link href="/company" className="group grid grid-cols-2 gap-3 lg:order-1">
            {companyImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/5] overflow-hidden bg-neutral-100"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
            ))}
          </Link>
        </div>
      </div>
    </section>
  );
}
