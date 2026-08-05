export type PortfolioTier = "mobile" | "tablet" | "desktop";
export type PortfolioFormat = "avif" | "webp";

// Unica funcion que conoce la convencion de nombres de 03_WEB:
// /Assets/Portafolio/{folder}/03_WEB/{imageId}-{tier}.{format}
export function getAssetPath(
  folder: string,
  imageId: string,
  tier: PortfolioTier,
  format: PortfolioFormat
): string {
  return `/Assets/Portafolio/${folder}/03_WEB/${imageId}-${tier}.${format}`;
}
