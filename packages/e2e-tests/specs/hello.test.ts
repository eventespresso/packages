/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />
import { activatePlugin, loginUser } from '../utils';

describe('hello playwright', () => {
	it('should work', async () => {
		await loginUser();

		const title = await page.title();

		expect(title).toBe('Dashboard ‹ barista — WordPress');

		await activatePlugin('gutenberg-test-plugin-disables-the-css-animations');

		await browser.close();
	});
});
