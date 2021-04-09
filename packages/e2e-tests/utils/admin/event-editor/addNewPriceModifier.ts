export const addNewPriceModifier = async ({ amount, priceTypeLabel }) => {
	const lastTPCRow = '.ee-ticket-price-calculator tbody tr:last-child';

	await page.waitForTimeout(1000);

	await page.click(`${lastTPCRow} [aria-label="add new price modifier after this row"]`);

	await page.selectOption(`${lastTPCRow} [aria-label="price type"]`, {
		label: priceTypeLabel,
	});

	await page.focus(`${lastTPCRow} [aria-label="amount"]`);

	await page.type(`${lastTPCRow} [aria-label="amount"]`, amount);
};
