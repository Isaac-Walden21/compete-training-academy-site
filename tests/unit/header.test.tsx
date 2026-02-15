import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header } from "@/components/layout/Header";
import { navItems } from "@/content/navigation";

describe("Header", () => {
  it("renders all navigation links", () => {
    render(<Header />);

    for (const item of navItems) {
      expect(screen.getAllByText(item.label)[0]).toBeInTheDocument();
    }
  });

  it("toggles mobile navigation", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const button = screen.getByRole("button", { name: /toggle navigation/i });
    const mobileNav = screen.getByRole("navigation", { name: /mobile/i });

    expect(mobileNav.className).toContain("max-h-0");

    await user.click(button);
    expect(mobileNav.className).toContain("max-h-[70vh]");

    await user.click(button);
    expect(mobileNav.className).toContain("max-h-0");
  });
});
