export type PortfolioTier = "mobile" | "tablet" | "desktop";
export type PortfolioFormat = "avif" | "webp";

// Unica funcion que conoce la convencion de nombres de 03_WEB:
// /Assets/Portafolio/{slug}/03_WEB/{imageId}-{tier}.{format}
// El slug es el UNICO identificador publico de carpetas/assets/rutas: nunca
// pasar aqui el codename interno del cliente (project.folder).
export function getAssetPath(
  slug: string,
  imageId: string,
  tier: PortfolioTier,
  format: PortfolioFormat
): string {
  return `/Assets/Portafolio/${slug}/03_WEB/${imageId}-${tier}.${format}`;
}
