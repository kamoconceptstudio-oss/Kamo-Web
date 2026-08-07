import Link from "next/link";
import Section from "../layout/Section";
import ResponsivePicture from "../portfolio/ResponsivePicture";
import ProjectGallery from "../portfolio/ProjectGallery";
import { STATUS_LABEL } from "@/lib/portfolio/statusLabel";
import type { PortfolioProject } from "@/lib/portfolio/types";

interface ProjectPageProps {
  project: PortfolioProject;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  return (
    <>
      <Section width="wide" className="border-b border-neutral-200">
        <Link
          href="/portfolio"
          className="mb-lg inline-block text-small text-neutral-500 hover:text-neutral-900"
        >
          ← Portfolio
        </Link>
        <div className="md:flex md:gap-2xl">
          <div className="md:w-1/2">
            <p className="mb-md text-small uppercase tracking-[0.2em] text-neutral-500">
              {STATUS_LABEL[project.status]}
            </p>
            <h1 className="mb-lg text-h1 font-light leading-tight">
              {project.title}
            </h1>
            <p className="max-w-[32rem] text-body text-neutral-600">
              {project.description}
            </p>
          </div>
          <div className="relative mt-xl aspect-[4/3] w-full overflow-hidden bg-surface-warm md:mt-0 md:w-1/2">
            <ResponsivePicture
              folder={project.folder}
              image={project.coverImage}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section width="wide">
        <ProjectGallery folder={project.folder} images={project.images} />
      </Section>
    </>
  );
}
