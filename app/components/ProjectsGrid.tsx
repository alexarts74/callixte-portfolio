"use client";

import { projects } from "@/app/data/projects";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { useInView } from "@/app/hooks/useInView";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  const { t } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useInView({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useInView({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridVisible } = useInView({ threshold: 0.05 });

  return (
    <section id="projets" className="w-full bg-neutral-50 py-20 md:py-28 lg:py-36">
      <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-10 md:mb-12 flex items-center gap-4 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.projects.number}
          </span>
          <div
            className={`h-px flex-1 bg-neutral-300 transition-transform duration-1000 origin-left ${
              headerVisible ? "scale-x-100" : "scale-x-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          />
          <span
            className="shrink-0 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t.projects.section}
          </span>
        </div>

        {/* Title */}
        <div
          ref={titleRef}
          className={`mb-10 md:mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          <h2
            className="text-3xl font-light leading-tight tracking-wide md:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t.projects.title}{" "}
            <span className="italic">{t.projects.titleItalic}</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`transition-all duration-700 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${0.15 * index}s` }}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
