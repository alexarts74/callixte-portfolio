"use client";

import { projects } from "@/app/data/projects";
import { useLanguage } from "@/app/i18n/LanguageContext";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const { t } = useLanguage();

  return (
    <section id="projets" className="w-full bg-neutral-50 py-20 md:py-28 lg:py-36">
      <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 flex items-center gap-4">
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.projects.number}
          </span>
          <div className="h-px flex-1 bg-neutral-300" />
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.projects.section}
          </span>
        </div>

        {/* Title */}
        <div className="mb-10 md:mb-12">
          <h2
            className="text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.projects.title}{" "}
            <span className="italic">{t.projects.titleItalic}</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
