import { NextRequest, NextResponse } from "next/server";

import { sendLeadEmail } from "@/lib/email";
import { checkLeadRateLimit } from "@/lib/rate-limit";
import { formatLeadFieldErrors } from "@/lib/validation/errors";
import { leadSchema } from "@/lib/validation/lead";
import type { LeadResponse } from "@/types";

function getClientIp(request: NextRequest) {
  const fromForwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const fromRealIp = request.headers.get("x-real-ip")?.trim();

  return fromForwarded || fromRealIp || "unknown";
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);

  if (!checkLeadRateLimit(clientIp)) {
    return NextResponse.json<LeadResponse>(
      {
        ok: false,
        message: "Too many requests. Please try again later."
      },
      { status: 429 }
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<LeadResponse>(
      {
        ok: false,
        message: "Invalid JSON payload."
      },
      { status: 400 }
    );
  }

  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json<LeadResponse>(
      {
        ok: false,
        message: "Please fix the highlighted fields and try again.",
        fieldErrors: formatLeadFieldErrors(parsed.error)
      },
      { status: 400 }
    );
  }

  const payload = parsed.data;

  if (payload.honeypot && payload.honeypot.trim().length > 0) {
    return NextResponse.json<LeadResponse>(
      {
        ok: false,
        message: "Submission rejected."
      },
      { status: 400 }
    );
  }

  try {
    const requestId = crypto.randomUUID();
    await sendLeadEmail(payload, requestId);

    return NextResponse.json<LeadResponse>({
      ok: true,
      message: "Thanks for your request. We will reach out soon.",
      requestId
    });
  } catch {
    return NextResponse.json<LeadResponse>(
      {
        ok: false,
        message: "We could not send your request right now. Please try again."
      },
      { status: 500 }
    );
  }
}
