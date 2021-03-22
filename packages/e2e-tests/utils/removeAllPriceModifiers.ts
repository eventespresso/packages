/// <reference types="jest-playwright-preset" />

const selector = '[aria-label="delete price modifier"]';

export const removeAllPriceModifiers = async () => {
	let button = await page.$(selector);

	while (button) {
		await button.click();
		await page.click('[type=button] >> text=Yes');

		button = await page.$(selector);
	}
};
