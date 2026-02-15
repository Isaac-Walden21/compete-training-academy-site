import type { ZodError } from "zod";

import type { LeadRequest } from "@/types";

export function formatLeadFieldErrors(
  error: ZodError
): Partial<Record<keyof LeadRequest, string>> {
  const fieldErrors: Partial<Record<keyof LeadRequest, string>> = {};

  for (const issue of error.issues) {
    const key = issue.path[0] as keyof LeadRequest | undefined;
    if (key && !fieldErrors[key]) {
      fieldErrors[key] = issue.message;
    }
  }

  return fieldErrors;
}
