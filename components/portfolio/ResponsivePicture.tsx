import { getAssetPath, type PortfolioTier } from "@/lib/portfolio/getAssetPath";
import type { PortfolioImage } from "@/lib/portfolio/types";

const TIERS: PortfolioTier[] = ["mobile", "tablet", "desktop"];

interface ResponsivePictureProps {
  folder: string;
  image: PortfolioImage;
  sizes: string;
  className?: string;
  priority?: boolean;
}

function buildSrcSet(folder: string, image: PortfolioImage, format: "avif" | "webp") {
  return TIERS.map(
    (tier) => `${getAssetPath(folder, image.id, tier, format)} ${image.tiers[tier].width}w`
  ).join(", ");
}

// Unico componente que renderiza imagenes de 03_WEB: encapsula el <picture>
// AVIF/WebP con las 3 variantes responsive, a partir de un PortfolioImage
// resuelto (lib/portfolio). No hace art-direction (recortes distintos por
// breakpoint, como Hero.tsx) sino resolution-switching de la misma imagen.
export default function ResponsivePicture({
  folder,
  image,
  sizes,
  className,
  priority = false,
}: ResponsivePictureProps) {
  const fallback = getAssetPath(folder, image.id, "desktop", "webp");

  return (
    <picture>
      <source type="image/avif" srcSet={buildSrcSet(folder, image, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={buildSrcSet(folder, image, "webp")} sizes={sizes} />
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
