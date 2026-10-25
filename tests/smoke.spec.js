import { test, expect } from "@playwright/test";

test.describe("Portfolio smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders hero with name and role", async ({ page }) => {
    await expect(page).toHaveTitle(/Ishaq Hannan Rozen/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Ishaq Hannan Rozen" })
    ).toBeVisible();
    await expect(page.getByText("Quality Control Engineer · QA Engineer")).toBeVisible();
  });

  test("every main section is present", async ({ page }) => {
    for (const id of ["experience", "work", "skills", "contact"]) {
      await expect(page.locator(`section#${id}`)).toBeAttached();
    }
  });

  test("resume download is served as PDF", async ({ page, request }) => {
    const href = await page
      .getByRole("link", { name: "Download CV" })
      .getAttribute("href");
    const response = await request.get(href);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()["content-type"]).toContain("pdf");
  });

  test("external links open safely in a new tab", async ({ page }) => {
    const links = page.locator('a[target="_blank"]');
    await expect(links.first()).toBeAttached();
    for (const link of await links.all()) {
      await expect(link).toHaveAttribute("rel", /noopener/);
    }
  });

  test("images have alt text", async ({ page }) => {
    for (const img of await page.locator("img").all()) {
      await expect(img).toHaveAttribute("alt", /.*/);
    }
  });

  test("no horizontal overflow", async ({ page }) => {
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });

  test("revealed content becomes visible on scroll", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "Selected QA work." });
    await heading.scrollIntoViewIfNeeded();
    await expect(heading).toBeInViewport();
    await expect(heading).toHaveCSS("opacity", "1");
  });

  test("metrics count up to their final values", async ({ page }) => {
    const values = page.getByTestId("metric-value");
    await values.first().scrollIntoViewIfNeeded();
    for (const value of await values.all()) {
      const final = await value.getAttribute("data-final");
      await expect(value.locator('[aria-hidden="true"]')).toHaveText(final);
    }
  });

  test("no console errors on load", async ({ page }) => {
    const errors = [];
    page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
    await page.reload();
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });
});

test("mobile menu navigates to a section", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only flow");
  await page.goto("/");
  await page.getByRole("button", { name: "Toggle menu" }).click();
  await page.locator("#mobile-menu").getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator("#mobile-menu")).toBeHidden();
});
