import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  requiredLabel?: boolean;
}

export function InputField({ label, error, requiredLabel, className, ...props }: InputFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-navy">
      <span className="font-medium">
        {label} {requiredLabel ? <span className="text-navy/70">(required)</span> : null}
      </span>
      <input
        className={cn(
          "border-0 border-b border-navy/30 bg-transparent px-1 py-2 text-sm text-ink",
          "transition-colors duration-300 focus:border-gold focus:outline-none",
          error ? "border-red-500" : "",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
