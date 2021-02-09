/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />
import { activatePlugin, loginUser } from '../utils';

describe('hello playwright', () => {
	it('should work', async () => {
		await loginUser();

		await activatePlugin('event-espresso');

		await page.click(`.toplevel_page_espresso_events > a`);

		const espressoAdmin = await page.$eval('.espresso-admin', (el) => el.innerHTML);

		expect(espressoAdmin).toContain('Event Espresso&nbsp;-&nbsp;Events');

		await browser.close();
	});
});
