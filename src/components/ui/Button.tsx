"use client";

import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base"
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-white shadow-md hover:bg-[#ad7a47] hover:shadow-glow focus-visible:ring-gold",
  secondary:
    "border border-navy/40 bg-white/60 text-navy hover:border-gold hover:text-gold focus-visible:ring-navy"
};

export function buttonStyles(variant: ButtonVariant = "primary", size: ButtonSize = "md") {
  return cn(
    "cinematic-glow button-sheen relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
    sizeStyles[size],
    variantStyles[variant]
  );
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonStyles(variant, size),
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Sending
        </>
      ) : (
        children
      )}
    </button>
  );
}
