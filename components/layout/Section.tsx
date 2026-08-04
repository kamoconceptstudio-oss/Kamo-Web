import { ReactNode } from "react";
import Container, { type ContainerWidth } from "./Container";

type SectionSurface = "default" | "warm" | "contrast";

interface SectionProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
  id?: string;
  surface?: SectionSurface;
}

const surfaceClasses: Record<SectionSurface, string> = {
  default: "",
  warm: "bg-surface-warm",
  contrast: "bg-surface-contrast",
};

export default function Section({
  children,
  width = "default",
  className = "",
  id,
  surface = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-xl md:py-2xl ${surfaceClasses[surface]} ${className}`}
    >
      <Container width={width}>{children}</Container>
    </section>
  );
}
