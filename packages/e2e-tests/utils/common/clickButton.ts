import type { ElementHandle } from 'playwright';

/**
 * Clicks a button with the given text.
 * If the context is provided, the button will be selected within that context (DOM Tree)
 * Otherwise it will be selected in page context
 */
export async function clickButton(buttonText: string, context?: ElementHandle<SVGElement | HTMLElement>) {
	const selector = `[type=button] >> text=${buttonText}`;
	if (context) {
		const button = await context.$(selector);
		await button.click();
	} else {
		await page.click(selector).catch(console.log);
	}
}
