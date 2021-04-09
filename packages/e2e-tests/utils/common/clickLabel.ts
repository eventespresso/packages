export async function clickLabel(ariaLabel: string) {
	await page.click(`[aria-label="${ariaLabel}"]`);
}
