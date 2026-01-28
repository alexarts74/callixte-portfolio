import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import ProjectDetail from "@/app/components/ProjectDetail";

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
    return { title: "Project not found" };
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

  return <ProjectDetail project={project} nextProject={nextProject} />;
}
