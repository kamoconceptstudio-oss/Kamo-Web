import manifestJson from "./manifest.generated.json";
import { projects as projectInputs } from "./projects";
import type { PortfolioCategory, PortfolioImage, PortfolioProject } from "./types";

interface ManifestEntry {
  category: PortfolioCategory;
  width: number;
  height: number;
  tiers: Record<"mobile" | "tablet" | "desktop", { width: number; height: number }>;
}

const manifest = manifestJson as unknown as Record<string, Record<string, ManifestEntry>>;

function resolveImage(
  projectSlug: string,
  input: { id: string; alt: string }
): PortfolioImage {
  const entry = manifest[projectSlug]?.[input.id];
  if (!entry) {
    throw new Error(
      `[portfolio] La imagen "${input.id}" referenciada en el proyecto "${projectSlug}" ` +
        `no existe en manifest.generated.json para el slug "${projectSlug}". ` +
        `¿Falta ejecutar "npm run portfolio:manifest"?`
    );
  }
  return { ...input, ...entry };
}

function resolveProject(input: (typeof projectInputs)[number]): PortfolioProject {
  const images = input.images.map((img) => resolveImage(input.slug, img));
  const coverImage = images.find((img) => img.id === input.coverImageId);
  if (!coverImage) {
    throw new Error(
      `[portfolio] coverImageId "${input.coverImageId}" del proyecto "${input.slug}" ` +
        `no está en su lista de imágenes.`
    );
  }
  const { slug, folder, title, status, summary, description, featured } = input;
  return { slug, folder, title, status, summary, description, featured, coverImage, images };
}

export const allProjects: PortfolioProject[] = projectInputs.map(resolveProject);

export function getAllProjects(): PortfolioProject[] {
  return allProjects;
}

export function getFeaturedProjects(): PortfolioProject[] {
  return allProjects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return allProjects.map((p) => p.slug);
}

export type { PortfolioProject, PortfolioImage } from "./types";
