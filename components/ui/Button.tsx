import { ButtonHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  // Si se pasa, el botón se renderiza como enlace (next/link) en vez de
  // <button> — para CTAs que navegan/hacen scroll a una sección en vez de
  // ejecutar una acción (p. ej. "Reservar consulta" -> /#contacto).
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-neutral-900 text-neutral-50 hover:bg-neutral-800",
  secondary:
    "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-lg py-sm",
  sm: "px-md py-xs",
};

export default function Button({
  variant = "primary",
  size = "default",
  className = "",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-block text-body tracking-wide transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
