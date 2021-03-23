/// <reference types="jest-playwright-preset" />
import type { TpcPriceModifier } from '@eventespresso/tpc';
import { isBasePrice } from '@eventespresso/predicates';
import { getPriceTypeLabel } from './getPriceTypeLabel';

const lastTPCRow = '.ee-ticket-price-calculator tbody tr:last-child';
export const setPrice = async (price: TpcPriceModifier) => {
	// we do not add a base price or change the order and price of base price
	if (!isBasePrice(price)) {
		await page.click(`${lastTPCRow} [aria-label="add new price modifier after this row"]`);
		// Set price order
		await page.focus(`${lastTPCRow} [aria-label="price order"]`);
		await page.fill(`${lastTPCRow} [aria-label="price order"]`, (price.order || 2).toString());

		// Set price type
		const label = getPriceTypeLabel(price);
		await page.selectOption(`${lastTPCRow} [aria-label="price type"]`, { label });
	}

	// Set price name
	await page.focus(`${lastTPCRow} [aria-label="price name"]`);
	await page.fill(`${lastTPCRow} [aria-label="price name"]`, price.name || '');

	// Set price description
	await page.focus(`${lastTPCRow} [aria-label="price description"]`);
	await page.fill(`${lastTPCRow} [aria-label="price description"]`, price.description || '');

	// Set price amount
	await page.focus(`${lastTPCRow} [aria-label="amount"]`);
	await page.fill(`${lastTPCRow} [aria-label="amount"]`, (price.amount || '').toString());
};
