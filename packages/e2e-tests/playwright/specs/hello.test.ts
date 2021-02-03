import playwright from 'playwright';
let page: import('playwright').Page;

describe('hello playwright', () => {
	it('should work', async () => {
		const browser = await playwright['chromium'].launch({
			headless: false,
		});
		const context = await browser.newContext();
		page = await context.newPage();

		await page.goto('http://ee.local/wp-admin');

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
