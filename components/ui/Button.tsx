import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "sm";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-body tracking-wide transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
