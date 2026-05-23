import { test, expect } from '@playwright/test';

test('homepage visual and performance check', async ({ page }) => {
  await page.goto(`file://${process.cwd()}/index.html`);

  // Wait for entrance animations
  await page.waitForTimeout(1500);

  // Check if nav items are present
  const navItems = page.locator('.nav-menu li');
  await expect(navItems).toHaveCount(5);

  // Check hover state (simulated)
  await navItems.nth(1).hover();
  await page.waitForTimeout(500);

  // Take screenshot
  await page.screenshot({ path: 'verification_v2.png' });
});
