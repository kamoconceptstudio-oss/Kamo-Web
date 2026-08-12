import { getAssetPath, type PortfolioTier } from "@/lib/portfolio/getAssetPath";
import type { PortfolioImage } from "@/lib/portfolio/types";

const TIERS: PortfolioTier[] = ["mobile", "tablet", "desktop"];

interface ResponsivePictureProps {
  slug: string;
  image: PortfolioImage;
  sizes: string;
  className?: string;
  priority?: boolean;
}

function buildSrcSet(slug: string, image: PortfolioImage, format: "avif" | "webp") {
  return TIERS.map(
    (tier) => `${getAssetPath(slug, image.id, tier, format)} ${image.tiers[tier].width}w`
  ).join(", ");
}

// Unico componente que renderiza imagenes de 03_WEB: encapsula el <picture>
// AVIF/WebP con las 3 variantes responsive, a partir de un PortfolioImage
// resuelto (lib/portfolio). No hace art-direction (recortes distintos por
// breakpoint, como Hero.tsx) sino resolution-switching de la misma imagen.
export default function ResponsivePicture({
  slug,
  image,
  sizes,
  className,
  priority = false,
}: ResponsivePictureProps) {
  const fallback = getAssetPath(slug, image.id, "desktop", "webp");

  return (
    <picture>
      <source type="image/avif" srcSet={buildSrcSet(slug, image, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet(slug, image, "webp")} sizes={sizes} />
      <img
        src={fallback}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
