import Link from "next/link";
import ResponsivePicture from "./ResponsivePicture";
import { STATUS_LABEL } from "@/lib/portfolio/statusLabel";
import type { PortfolioProject } from "@/lib/portfolio/types";

interface ProjectCardProps {
  project: PortfolioProject;
  priority?: boolean;
  headingLevel?: "h2" | "h3";
}

export default function ProjectCard({
  project,
  priority = false,
  headingLevel: Heading = "h3",
}: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-warm">
        <ResponsivePicture
          folder={project.folder}
          image={project.coverImage}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
      <div className="mt-sm">
        <p className="mb-xs text-small uppercase tracking-[0.15em] text-neutral-500">
          {STATUS_LABEL[project.status]}
        </p>
        <Heading className="text-h3 font-normal">{project.title}</Heading>
        <p className="mt-xs text-body text-neutral-600">{project.summary}</p>
      </div>
    </Link>
  );
}
