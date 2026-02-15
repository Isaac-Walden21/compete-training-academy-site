import { Resend } from "resend";

import type { LeadInput } from "@/lib/validation/lead";

function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  return new Resend(key);
}

export async function sendLeadEmail(payload: LeadInput, requestId: string) {
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!to || !from) {
    throw new Error("LEAD_TO_EMAIL and LEAD_FROM_EMAIL must be configured.");
  }

  const resend = getResendClient();

  await resend.emails.send({
    from,
    to,
    subject: `[Compete Lead] ${payload.subject}`,
    replyTo: payload.email,
    text: [
      `Request ID: ${requestId}`,
      `Source Page: ${payload.sourcePage}`,
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Email: ${payload.email}`,
      `Newsletter: ${payload.newsletter ? "Yes" : "No"}`,
      `Pricing Option: ${payload.pricingOption}`,
      "",
      "Message:",
      payload.message
    ].join("\n")
  });
}
