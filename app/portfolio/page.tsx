import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Proyectos de interiorismo residencial de Kamo Concept: cocinas y baños, desde la propuesta hasta la obra ejecutada.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function Page() {
  return <PortfolioPage />;
}
