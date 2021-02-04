import { chromium, Browser, Page } from 'playwright';

describe('hello playwright', () => {
	it('should work', async () => {
		const browser: Browser = await chromium.launch({
			headless: true,
		});
		const context = await browser.newContext();
		const page: Page = await context.newPage();
		const host = process.env.CI ? 'http://localhost:8889' : 'http://ee.local/wp-admin';

		await page.goto(host);
		await page.focus('#user_login');
		await page.type('#user_login', 'admin');
		await page.focus('#user_pass');
		await page.type('#user_pass', 'password');
		await Promise.all([page.waitForNavigation(), page.click('#wp-submit')]);

		const title = await page.title();
		expect(title).toBe('Dashboard ‹ North Korea Best Korea — WordPress');

		await browser.close();
	});
});
