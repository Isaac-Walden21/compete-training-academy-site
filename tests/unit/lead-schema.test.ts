import { leadSchema } from "@/lib/validation/lead";

describe("leadSchema", () => {
  it("rejects malformed payload", () => {
    const result = leadSchema.safeParse({
      firstName: "123",
      lastName: "",
      email: "not-an-email",
      subject: "",
      message: "",
      newsletter: false,
      pricingOption: "unknown",
      sourcePage: ""
    });

    expect(result.success).toBe(false);
  });
});
