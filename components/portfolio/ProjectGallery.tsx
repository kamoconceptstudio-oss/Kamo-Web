import ResponsivePicture from "./ResponsivePicture";
import type { PortfolioCategory, PortfolioImage } from "@/lib/portfolio/types";

const CATEGORY_LABEL: Record<PortfolioCategory, string> = {
  fotografia: "Fotografía",
  render: "Render",
  obra: "Obra",
};

const CATEGORY_ORDER: PortfolioCategory[] = ["fotografia", "render", "obra"];

interface ProjectGalleryProps {
  folder: string;
  images: PortfolioImage[];
}

export default function ProjectGallery({ folder, images }: ProjectGalleryProps) {
  const categories = CATEGORY_ORDER.filter((category) =>
    images.some((img) => img.category === category)
  );

  return (
    <div className="space-y-2xl">
      {categories.map((category) => (
        <section key={category} aria-labelledby={`gallery-${category}`}>
          <h2
            id={`gallery-${category}`}
            className="mb-lg text-h3 font-normal uppercase tracking-[0.15em] text-neutral-500"
          >
            {CATEGORY_LABEL[category]}
          </h2>
          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            {images
              .filter((img) => img.category === category)
              .map((image) => (
                <div key={image.id} className="overflow-hidden bg-surface-warm">
                  <ResponsivePicture
                    folder={folder}
                    image={image}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
