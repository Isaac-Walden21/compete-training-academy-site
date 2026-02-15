import { z } from "zod";

const namePattern = /^[A-Za-z\s-]+$/;

export const leadSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or fewer")
    .regex(namePattern, "First name can only contain letters, spaces, and hyphens"),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or fewer")
    .regex(namePattern, "Last name can only contain letters, spaces, and hyphens"),
  email: z.string().trim().email("Enter a valid email address"),
  subject: z
    .string()
    .trim()
    .min(1, "Subject is required")
    .max(100, "Subject must be 100 characters or fewer"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be 1000 characters or fewer"),
  newsletter: z.boolean().default(false),
  pricingOption: z.enum(["full_price_100", "discount_70"], {
    errorMap: () => ({ message: "Choose a pricing option" })
  }),
  sourcePage: z.string().trim().min(1, "Source page is required"),
  honeypot: z.string().optional()
});

export type LeadInput = z.infer<typeof leadSchema>;
