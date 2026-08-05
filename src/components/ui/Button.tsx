// src/components/ui/Button.tsx
import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  to?: string;
  onClick?: () => void;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size" | "onClick">;

const SIZE_STYLES: Record<Size, string> = {
  sm: "h-10 px-5 text-sm gap-1.5",
  md: "h-12 px-6 text-[15px] gap-2",
  lg: "h-14 px-8 text-base gap-2.5",
};

const VARIANT_STYLES: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-[0_12px_28px_-10px_rgba(20,83,72,0.56)] hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-[0_18px_34px_-12px_rgba(20,83,72,0.64)]",
  secondary:
    "bg-primary-light text-primary-dark hover:-translate-y-0.5 hover:bg-[#ccecdf]",
  outline:
    "border border-text/10 bg-white/75 text-text shadow-[0_8px_20px_-16px_rgba(18,37,35,0.6)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/35 hover:bg-white hover:text-primary-dark",
  ghost: "text-text/70 hover:bg-primary-light/60 hover:text-primary-dark",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  className,
  to,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    SIZE_STYLES[size],
    VARIANT_STYLES[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  );
}
