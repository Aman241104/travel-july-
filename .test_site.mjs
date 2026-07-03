import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const SHOTS = "/tmp/claude-1000/-home-whoever-work-travel-july/63b1dd0c-038b-4738-aa1f-d12b7c741659/scratchpad";

const browser = await chromium.launch({ headless: true });

// --- Desktop pass ---
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const consoleErrors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleErrors.push(msg.text());
});
page.on("pageerror", (exc) => consoleErrors.push(String(exc)));

await page.goto(BASE);
await page.waitForLoadState("networkidle");
await page.screenshot({ path: `${SHOTS}/home_desktop_top.png` });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
await page.waitForTimeout(800);
await page.screenshot({ path: `${SHOTS}/home_desktop_mid.png` });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(500);
await page.screenshot({ path: `${SHOTS}/home_desktop_bottom.png` });

// Nav to Services
await page.click("nav >> text=Services");
await page.waitForLoadState("networkidle");
await page.screenshot({ path: `${SHOTS}/services_desktop.png`, fullPage: true });

// Click a service CTA -> should go to enquiry with prefilled dropdown
await page.click("text=Enquire about Hotels →");
await page.waitForLoadState("networkidle");
await page.screenshot({ path: `${SHOTS}/enquiry_prefilled.png` });
const selectedValue = await page.$eval("select", (el) => el.value);
console.log("Prefilled service select value:", selectedValue);

// Test form validation: submit empty
await page.click("text=Send Enquiry");
await page.waitForTimeout(300);
await page.screenshot({ path: `${SHOTS}/enquiry_errors.png` });
const errorCount = await page.locator("span.text-xs.text-ember-600").count();
console.log("Validation error count on empty submit:", errorCount);

// Fill valid data
await page.fill("input[placeholder='Aman Patel']", "Test User");
await page.fill("input[placeholder='98200 11234']", "9820011234");
await page.fill("input[placeholder='you@email.com']", "test@example.com");
await page.selectOption("select", "hotels");
await page.click("text=Send Enquiry");
await page.waitForTimeout(300);
await page.screenshot({ path: `${SHOTS}/enquiry_success.png` });
const successCount = await page.locator("h2:has-text('Thanks')").count();
console.log("Success panel shown:", successCount > 0);

// Home quick enquiry strip -> routes with query params
await page.goto(BASE);
await page.waitForLoadState("networkidle");
await page.fill("input[placeholder='Pune']", "Pune");
await page.fill("input[placeholder='Goa']", "Goa");
await page.click("text=Get a Quote");
await page.waitForLoadState("networkidle");
console.log("URL after quick enquiry submit:", page.url());
await page.screenshot({ path: `${SHOTS}/enquiry_from_quickstrip.png` });

console.log("Console errors (desktop):", consoleErrors);
await page.close();

// --- Mobile pass ---
const mpage = await browser.newPage({ viewport: { width: 375, height: 800 } });
const mErrors = [];
mpage.on("console", (msg) => {
  if (msg.type() === "error") mErrors.push(msg.text());
});
await mpage.goto(BASE);
await mpage.waitForLoadState("networkidle");
await mpage.screenshot({ path: `${SHOTS}/home_mobile.png`, fullPage: true });

await mpage.click("button[aria-label='Open menu']");
await mpage.waitForTimeout(400);
await mpage.screenshot({ path: `${SHOTS}/mobile_nav_open.png` });
await mpage.click("a:has-text('Services')");
await mpage.waitForLoadState("networkidle");
await mpage.screenshot({ path: `${SHOTS}/services_mobile.png`, fullPage: true });

await mpage.goto(`${BASE}/enquiry`);
await mpage.waitForLoadState("networkidle");
await mpage.screenshot({ path: `${SHOTS}/enquiry_mobile.png`, fullPage: true });

console.log("Console errors (mobile):", mErrors);
await mpage.close();

await browser.close();
console.log("DONE");
