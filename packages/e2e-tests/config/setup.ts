import { chromium, Browser, Page } from 'playwright';

(async function () {
	const browser: Browser = await chromium.launch({
		headless: true,
	});

	const context = await browser.newContext();
	const page: Page = await context.newPage();
})();
