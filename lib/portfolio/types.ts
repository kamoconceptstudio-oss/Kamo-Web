export type PortfolioCategory = "fotografia" | "render" | "obra";

export type PortfolioStatus = "completado" | "en-obra" | "concepto";

export interface PortfolioImageInput {
  id: string;
  alt: string;
}

export interface PortfolioImage extends PortfolioImageInput {
  category: PortfolioCategory;
  width: number;
  height: number;
  tiers: Record<"mobile" | "tablet" | "desktop", { width: number; height: number }>;
}

export interface PortfolioProjectInput {
  slug: string;
  folder: string;
  title: string;
  status: PortfolioStatus;
  summary: string;
  description: string;
  featured: boolean;
  coverImageId: string;
  images: PortfolioImageInput[];
}

export interface PortfolioProject extends Omit<PortfolioProjectInput, "images" | "coverImageId"> {
  coverImage: PortfolioImage;
  images: PortfolioImage[];
}
