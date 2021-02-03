import playwright from 'playwright';

import { activatePlugin } from '../../e2e-test-utils/src/activate-plugin';
import { changeSiteTimezone } from '../../e2e-test-utils/src/change-site-timezone';
import { installPlugin } from '../../e2e-test-utils/src/install-plugin';

let page: import('playwright').Page;

describe('hello', () => {
	// test.jestPlaywrightDebug('failed', async () => {
	it('should work', async () => {
		const browser = await playwright['chromium'].launch({ headless: false, slowMo: 200 });
		const context = await browser.newContext();
		page = await context.newPage();

		await page.goto('http://ee.local/wp-admin');

		await page.focus('#user_login');
		await page.type('#user_login', 'admin');

		await page.focus('#user_pass');
		await page.type('#user_pass', 'password');

		await Promise.all([page.waitForNavigation(), page.click('#wp-submit')]);

		const title = await page.title();

		expect(title).toBe('Dashboard ‹ South Korea Best Korea — WordPress');

		//await installPlugin('event-espresso-decaf', 'event espresso', page);

		// await activatePlugin('event-espresso-decaf', page);

		await changeSiteTimezone('UTC+10', page);

		await browser.close();
	});
});
