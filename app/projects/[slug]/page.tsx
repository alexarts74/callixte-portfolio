"use client";

import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ProjectGallery from "@/app/components/ProjectGallery";
import Link from "next/link";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function ProjectPage() {
  const params = useParams();
  const { locale } = useLanguage();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white pt-32">
          <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
            <h1
              className="text-3xl font-light"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {locale === "en" ? "Project not found" : "Projet non trouvé"}
            </h1>
            <Link
              href="/#projets"
              className="mt-8 inline-block text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              ← {locale === "en" ? "Back to projects" : "Retour aux projets"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
          {/* Back link */}
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            {locale === "en" ? "Back to projects" : "Retour aux projets"}
          </Link>

          {/* Header */}
          <div className="mb-10 md:mb-12">
            <span
              className="text-sm text-neutral-400 tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.year}
            </span>
            <h1
              className="mt-2 text-4xl font-light leading-tight tracking-wide md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h1>
          </div>

          {/* Gallery */}
          <ProjectGallery images={project.images} title={project.title} />

          {/* Description */}
          <div className="max-w-3xl">
            <p
              className="text-lg font-light leading-relaxed text-neutral-600 md:text-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.fullDescription}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
