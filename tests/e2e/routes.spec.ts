import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/get-better",
  "/about",
  "/services",
  "/library",
  "/engage",
  "/book-session",
  "/thank-you",
  "/404"
];

test("all public routes load", async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    await expect(page).toHaveURL(new RegExp(`${route === "/" ? "" : route}$`));
    await expect(page.locator("h1").first()).toBeVisible();
  }
});

test("pre-order CTA scrolls to form and pre-fills subject", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /pre-order book/i }).click();

  const form = page.locator("#lead-form");
  await expect(form).toBeVisible();
  await expect(page.getByLabel(/subject/i)).toHaveValue(/Get Better Pre-Order Request/i);
});

test("book session page loads calendly embed", async ({ page }) => {
  await page.goto("/book-session");
  await expect(page.locator('iframe[title="Calendly Scheduling"]')).toBeVisible();
});

test("mobile navigation opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const toggle = page.getByRole("button", { name: /toggle navigation/i });
  await toggle.click();
  await expect(page.getByRole("navigation", { name: /mobile/i })).toBeVisible();

  await toggle.click();
});
