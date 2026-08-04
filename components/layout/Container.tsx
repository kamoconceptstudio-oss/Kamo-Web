import { ReactNode } from "react";

export type ContainerWidth = "narrow" | "default" | "wide";

interface ContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
  className?: string;
}

const widthClasses: Record<ContainerWidth, string> = {
  narrow: "max-w-2xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export default function Container({
  children,
  width = "default",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-sm md:px-lg ${widthClasses[width]} ${className}`}
    >
      {children}
    </div>
  );
}
