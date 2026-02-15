import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

interface CheckboxFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export function CheckboxField({ label, className, ...props }: CheckboxFieldProps) {
  return (
    <label className={cn("group flex cursor-pointer items-start gap-3 text-sm text-navy", className)}>
      <span className="relative mt-0.5 grid h-5 w-5 place-content-center rounded border border-navy/40 bg-white transition group-hover:border-gold">
        <input className="peer absolute inset-0 opacity-0" type="checkbox" {...props} />
        <span className="h-2.5 w-2.5 rounded-sm bg-gold opacity-0 transition peer-checked:opacity-100" />
      </span>
      <span className="uppercase tracking-[0.1em]">{label}</span>
    </label>
  );
}
