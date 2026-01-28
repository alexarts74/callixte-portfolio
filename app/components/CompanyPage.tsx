"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const companyImages = [
  { src: "/images/company/company_1.jpg", alt: "Company performance" },
  { src: "/images/company/company_2.jpg", alt: "Collective creation" },
  { src: "/images/company/company_3.jpg", alt: "Studio rehearsal" },
  { src: "/images/company/company_4.jpg", alt: "Company show" },
];

export default function CompanyPage() {
  const { locale } = useLanguage();

  const content = {
    en: {
      back: "Back",
      subtitle: "Dance Company",
      title: "A collective",
      titleItalic: "vision",
      intro:
        "Founded in 2024, the company brings together artists united by a shared passion for contemporary dance and the desire to push creative boundaries.",
      section1Title: "Our",
      section1TitleItalic: "approach",
      section1Text1:
        "The company was born from the desire to create a space where bodies meet, where ideas intertwine, and where ambitious projects emerge, carried by a collective vision of movement.",
      section1Text2:
        "Each creation is the fruit of deep collaboration between dancers, choreographers, musicians, and visual artists. We believe in the power of the collective to transcend individual limits.",
      section2Title: "The",
      section2TitleItalic: "artists",
      section2Text:
        "The company brings together artists with varied backgrounds, from classical dance to contemporary techniques, from physical theater to performance. This diversity is our strength.",
      valuesTitle: "Our values",
      values: [
        {
          title: "Collaboration",
          description:
            "Each voice counts, each body brings its unique experience to the collective work.",
        },
        {
          title: "Exploration",
          description:
            "We constantly push the boundaries of contemporary dance, seeking new forms of expression.",
        },
        {
          title: "Transmission",
          description:
            "We share our knowledge through workshops, residencies, and educational programs.",
        },
      ],
      galleryTitle: "In images",
      nextSection: "Discover the projects",
    },
    fr: {
      back: "Retour",
      subtitle: "Compagnie de danse",
      title: "Une vision",
      titleItalic: "collective",
      intro:
        "Fondée en 2024, la compagnie réunit des artistes unis par une passion commune pour la danse contemporaine et le désir de repousser les frontières créatives.",
      section1Title: "Notre",
      section1TitleItalic: "approche",
      section1Text1:
        "La compagnie est née du désir de créer un espace où les corps se rencontrent, où les idées s'entremêlent et où naissent des projets ambitieux, portés par une vision collective du mouvement.",
      section1Text2:
        "Chaque création est le fruit d'une collaboration profonde entre danseurs, chorégraphes, musiciens et artistes visuels. Nous croyons en la puissance du collectif pour transcender les limites individuelles.",
      section2Title: "Les",
      section2TitleItalic: "artistes",
      section2Text:
        "La compagnie réunit des artistes aux parcours variés, de la danse classique aux techniques contemporaines, du théâtre physique à la performance. Cette diversité est notre force.",
      valuesTitle: "Nos valeurs",
      values: [
        {
          title: "Collaboration",
          description:
            "Chaque voix compte, chaque corps apporte son expérience unique au travail collectif.",
        },
        {
          title: "Exploration",
          description:
            "Nous repoussons constamment les frontières de la danse contemporaine, cherchant de nouvelles formes d'expression.",
        },
        {
          title: "Transmission",
          description:
            "Nous partageons notre savoir à travers des ateliers, des résidences et des programmes pédagogiques.",
        },
      ],
      galleryTitle: "En images",
      nextSection: "Découvrir les projets",
    },
  };

  const t = content[locale];

  return (
    <>
      {/* Fixed Header */}
      <div className="fixed left-0 right-0 top-6 z-50 mx-6 md:mx-12 lg:mx-16 xl:mx-24 flex justify-between items-center">
        <Link
          href="/"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-60"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm transition-colors group-hover:border-white/60">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className="hidden text-xs font-light tracking-[0.2em] uppercase md:block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.back}
          </span>
        </Link>
        <LanguageSwitcher className="text-white" />
      </div>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden bg-black">
          <Image
            src="/images/company/company_1.jpg"
            alt="Company"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-8">
            <span
              className="mb-4 text-xs font-light tracking-[0.4em] text-white/70 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.subtitle}
            </span>
            <h1
              className="text-center text-5xl font-light tracking-[0.1em] text-white uppercase md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t.title} <span className="italic">{t.titleItalic}</span>
            </h1>
            <p
              className="mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-white/80 md:text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.intro}
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="h-12 w-px bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 md:py-28 lg:py-36">
          <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src="/images/company/company_2.jpg"
                  alt="Our approach"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <span
                  className="mb-4 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  01
                </span>
                <h2
                  className="mb-8 text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.section1Title}{" "}
                  <span className="italic">{t.section1TitleItalic}</span>
                </h2>
                <div
                  className="space-y-6 text-base font-light leading-relaxed text-neutral-600 md:text-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <p>{t.section1Text1}</p>
                  <p>{t.section1Text2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
            <div className="mb-12 flex items-center gap-4">
              <span
                className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                02
              </span>
              <div className="h-px flex-1 bg-neutral-300" />
              <span
                className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.valuesTitle}
              </span>
            </div>

            <div className="grid gap-8 md:grid-cols-3 md:gap-12">
              {t.values.map((value, index) => (
                <div key={index} className="border-t border-neutral-300 pt-6">
                  <h3
                    className="mb-4 text-xl font-light tracking-wide md:text-2xl"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-base font-light leading-relaxed text-neutral-600"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Artists Section */}
        <section className="py-20 md:py-28 lg:py-36">
          <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Text */}
              <div className="flex flex-col justify-center lg:order-2">
                <span
                  className="mb-4 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  03
                </span>
                <h2
                  className="mb-8 text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t.section2Title}{" "}
                  <span className="italic">{t.section2TitleItalic}</span>
                </h2>
                <p
                  className="text-base font-light leading-relaxed text-neutral-600 md:text-lg"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.section2Text}
                </p>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 lg:order-1">
                <Image
                  src="/images/company/company_3.jpg"
                  alt="The artists"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-black py-20 md:py-28">
          <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
            <div className="mb-12 flex items-center gap-4">
              <span
                className="shrink-0 text-xs font-light tracking-[0.3em] text-white/50 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                04
              </span>
              <div className="h-px flex-1 bg-white/20" />
              <span
                className="shrink-0 text-xs font-light tracking-[0.3em] text-white/50 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {t.galleryTitle}
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {companyImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/4] overflow-hidden bg-neutral-900"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Section Link */}
        <section className="bg-neutral-900">
          <Link href="/#projets" className="group block">
            <div className="flex items-center justify-center py-16 md:py-20">
              <div className="flex items-center gap-4 text-white transition-opacity group-hover:opacity-70">
                <span
                  className="text-sm font-light tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {t.nextSection}
                </span>
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
