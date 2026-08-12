import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectPage from "@/components/pages/ProjectPage";
import { getAllSlugs, getProjectBySlug } from "@/lib/portfolio";
import { getAssetPath } from "@/lib/portfolio/getAssetPath";
import { SITE_NAME } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const coverUrl = getAssetPath(project.slug, project.coverImage.id, "desktop", "webp");

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      type: "website",
      locale: "es_ES",
      siteName: SITE_NAME,
      title: project.title,
      description: project.summary,
      url: `/portfolio/${project.slug}`,
      images: [
        {
          url: coverUrl,
          width: project.coverImage.tiers.desktop.width,
          height: project.coverImage.tiers.desktop.height,
          alt: project.coverImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [coverUrl],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectPage project={project} />;
}
