import { NextRequest } from "next/server";

import { resetLeadRateLimit } from "@/lib/rate-limit";

vi.mock("@/lib/email", () => ({
  sendLeadEmail: vi.fn().mockResolvedValue(undefined)
}));

import { POST } from "@/app/api/leads/route";

const validPayload = {
  firstName: "Jordan",
  lastName: "Delks",
  email: "jordan@example.com",
  subject: "Training Inquiry",
  message: "I would like details about mindset coaching.",
  newsletter: true,
  pricingOption: "full_price_100",
  sourcePage: "home",
  honeypot: ""
} as const;

function makeRequest(body: unknown, ip = "1.1.1.1") {
  return new NextRequest("http://localhost:3000/api/leads", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-forwarded-for": ip
    },
    body: JSON.stringify(body)
  });
}

describe("POST /api/leads", () => {
  beforeEach(() => {
    resetLeadRateLimit();
  });

  it("returns success for valid submissions", async () => {
    const response = await POST(makeRequest(validPayload));
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json.ok).toBe(true);
    expect(json.requestId).toBeDefined();
  });

  it("returns field errors for invalid submissions", async () => {
    const response = await POST(makeRequest({ ...validPayload, email: "bad-email", firstName: "" }));
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
    expect(json.fieldErrors).toBeDefined();
  });

  it("rejects honeypot submissions", async () => {
    const response = await POST(makeRequest({ ...validPayload, honeypot: "bot-value" }));
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json.ok).toBe(false);
    expect(json.message).toMatch(/rejected/i);
  });

  it("rate limits repeated requests from same IP", async () => {
    for (let index = 0; index < 8; index += 1) {
      const response = await POST(makeRequest(validPayload, "2.2.2.2"));
      expect(response.status).toBe(200);
    }

    const throttled = await POST(makeRequest(validPayload, "2.2.2.2"));
    const json = await throttled.json();

    expect(throttled.status).toBe(429);
    expect(json.ok).toBe(false);
  });
});
