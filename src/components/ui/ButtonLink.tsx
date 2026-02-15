import Link from "next/link";
import type { ReactNode } from "react";

import { buttonStyles } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className
}: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(buttonStyles(variant, size), className)}>
      {children}
    </Link>
  );
}
