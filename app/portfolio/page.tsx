import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { SITE_NAME } from "@/lib/site";

const TITLE = "Portfolio";
const DESCRIPTION =
  "Proyectos de interiorismo residencial de Kamo Concept: cocinas y baños, desde la propuesta hasta la obra ejecutada.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
    url: "/portfolio",
    images: [
      {
        url: "/Assets/Brand/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/Assets/Brand/og-image.png"],
  },
};

export default function Page() {
  return <PortfolioPage />;
}
