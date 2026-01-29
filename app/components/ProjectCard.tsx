"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/app/data/projects";
import { useLanguage } from "@/app/i18n/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage();
  const projectTranslations = t.projectData[project.slug as keyof typeof t.projectData];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <article>
        {/* Image Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/40" />

          {/* Hover Content - Desktop */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
            <span
              className="border border-white px-5 py-2.5 text-xs font-light tracking-[0.3em] text-white uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.projects.viewProject}
            </span>
          </div>

          {/* Mobile indicator - Always visible */}
          <div className="absolute bottom-4 right-4 md:hidden">
            <span
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 text-xs font-light tracking-[0.15em] text-neutral-800 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.projects.viewProject}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3
              className="text-lg font-light tracking-wide md:text-xl transition-all duration-300 group-hover:tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p
              className="mt-1.5 text-sm font-light text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {projectTranslations?.shortDescription || project.shortDescription}
            </p>
          </div>
          <span
            className="text-xs font-light tracking-wider text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600"
            style={{ fontFamily: "var(--font-body)" }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Year Tag */}
        <div className="mt-2">
          <span
            className="text-xs font-light tracking-[0.2em] text-neutral-400 uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {project.year}
          </span>
        </div>
      </article>
    </Link>
  );
}
