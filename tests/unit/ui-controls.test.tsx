import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "@/components/ui/Button";
import { CheckboxField } from "@/components/ui/CheckboxField";
import { InputField } from "@/components/ui/InputField";
import { RadioGroup } from "@/components/ui/RadioGroup";

describe("UI Controls", () => {
  it("renders button variants", () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button", { name: /primary/i })).toBeInTheDocument();

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button", { name: /secondary/i })).toBeInTheDocument();
  });

  it("renders input with error", () => {
    render(<InputField label="Email" error="Invalid" />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/invalid/i)).toBeInTheDocument();
  });

  it("handles checkbox toggle", () => {
    render(<CheckboxField label="Sign Up" />);

    const checkbox = screen.getByRole("checkbox", { name: /sign up/i });
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("handles radio selection", () => {
    const onChange = vi.fn();
    const { rerender } = render(
      <RadioGroup
        name="pricingOption"
        selected="full_price_100"
        onChange={onChange}
        options={[
          { value: "full_price_100", label: "I WANT FULL PRICE $100" },
          { value: "discount_70", label: "I WANT DISCOUNT $70 + FREE BOOK" }
        ]}
      />
    );

    const radio = screen.getByText(/discount/i).closest("label");
    expect(radio).toBeInTheDocument();

    fireEvent.click(radio!);
    expect(onChange).toHaveBeenCalledWith("discount_70");

    rerender(
      <RadioGroup
        name="pricingOption"
        selected="discount_70"
        onChange={onChange}
        options={[
          { value: "full_price_100", label: "I WANT FULL PRICE $100" },
          { value: "discount_70", label: "I WANT DISCOUNT $70 + FREE BOOK" }
        ]}
      />
    );

    expect(screen.getByText(/discount/i)).toBeInTheDocument();
  });
});
