/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />
import { activatePlugin, loginUser } from '../utils';

describe('hello playwright', () => {
	it('should work', async () => {
		await loginUser();

		await activatePlugin('gutenberg-test-plugin-disables-the-css-animations');

		expect(true).toBe(true);

		await browser.close();
	});
});
