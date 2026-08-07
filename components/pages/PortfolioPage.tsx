import Section from "../layout/Section";
import ProjectCard from "../portfolio/ProjectCard";
import { getAllProjects } from "@/lib/portfolio";

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <Section width="wide">
      <p className="mb-md text-small uppercase tracking-[0.2em] text-neutral-500">
        Kamo Concept
      </p>
      <h1 className="mb-2xl max-w-2xl text-h1 font-light leading-tight">
        Portfolio
      </h1>
      <div className="grid grid-cols-1 gap-xl md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 3}
            headingLevel="h2"
          />
        ))}
      </div>
    </Section>
  );
}
