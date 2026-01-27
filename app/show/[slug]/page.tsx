import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectGallery from "@/app/components/ProjectGallery";

interface ShowPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ShowPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Projet non trouvé" };
  }

  return {
    title: `${project.title} | Callixte`,
    description: project.shortDescription,
  };
}

export default async function ShowPage({ params }: ShowPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      {/* Fixed Back Button */}
      <div className="fixed left-0 right-0 top-6 z-50 mx-6 md:mx-12 lg:mx-16 xl:mx-24">
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
            Retour
          </span>
        </Link>
      </div>

      <main className="min-h-screen bg-white">
        {/* Hero Image */}
        <section className="relative h-[70vh] w-full overflow-hidden bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          {/* Title Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 px-8">
            <span
              className="mb-4 text-xs font-light tracking-[0.3em] text-white/60 uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.year}
            </span>
            <h1
              className="text-center text-5xl font-light tracking-[0.1em] text-white uppercase md:text-7xl lg:text-8xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20">
          <div className="mx-6 md:mx-12 lg:mx-16 xl:mx-24">
            {/* Project Info */}
            <div className="mb-12 grid gap-6 border-b border-neutral-200 pb-12 md:grid-cols-3">
              <div>
                <h3
                  className="mb-2 text-xs font-light tracking-[0.2em] text-neutral-400 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Année
                </h3>
                <p
                  className="text-lg font-light"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.year}
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 text-xs font-light tracking-[0.2em] text-neutral-400 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Type
                </h3>
                <p
                  className="text-lg font-light"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Création chorégraphique
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 text-xs font-light tracking-[0.2em] text-neutral-400 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Durée
                </h3>
                <p
                  className="text-lg font-light"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  45 minutes
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-16">
              <h2
                className="mb-6 text-2xl font-light leading-tight md:text-3xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.shortDescription}
              </h2>
              <p
                className="text-base font-light leading-relaxed text-neutral-600 md:text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {project.fullDescription}
              </p>
            </div>

            {/* Gallery */}
            <ProjectGallery images={project.images} title={project.title} />

            {/* Credits */}
            <div className="border-t border-neutral-200 pt-10">
              <h3
                className="mb-6 text-xs font-light tracking-[0.3em] text-neutral-400 uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Crédits
              </h3>
              <div className="grid gap-y-4 gap-x-24 md:grid-cols-2">
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span
                    className="text-sm font-light text-neutral-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Chorégraphie
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Callixte
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span
                    className="text-sm font-light text-neutral-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Interprétation
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Callixte
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span
                    className="text-sm font-light text-neutral-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Lumières
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Studio Lumière
                  </span>
                </div>
                <div className="flex justify-between border-b border-neutral-100 pb-3">
                  <span
                    className="text-sm font-light text-neutral-500"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Musique
                  </span>
                  <span
                    className="text-sm font-light"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Composition originale
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="bg-black">
          <Link href={`/show/${nextProject.slug}`} className="group block">
            <div className="relative h-[50vh] overflow-hidden">
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
                <span
                  className="mb-4 text-xs font-light tracking-[0.3em] text-white/60 uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Projet suivant
                </span>
                <h2
                  className="text-4xl font-light tracking-[0.1em] text-white uppercase transition-all group-hover:tracking-[0.15em] md:text-6xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {nextProject.title}
                </h2>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}
