/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { ticketTotalTestCases } from '@eventespresso/tpc/src/utils/test/ticketTotalData';
import { convertToModifier, createPrices } from '@eventespresso/tpc/src/utils/test/utils';
import { formatAmount } from '@eventespresso/utils';

import {
	addNewPriceModifier,
	addNewTicket,
	createNewEvent,
	removeAllTickets,
	removeAllPriceModifiers,
	setPrices,
	setPrice,
} from '../../utils';
import { testData } from './testData';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/calculateTicketTotal.mp4');
	const newTicketName = 'one way ticket';
	const newTicketAmount = '10';

	await createNewEvent({ title: 'calculateTicketTotal: to be deleted' });

	// Wait for tickets list lazy load
	await page.waitForTimeout(3000);

	await removeAllTickets();

	await addNewTicket({ amount: newTicketAmount, name: newTicketName });

	await page.click('[aria-label="ticket price calculator"]');
});

beforeEach(async () => {
	await setPrice({ amount: 0, isBasePrice: true } as any);
	await removeAllPriceModifiers();
});

const getFormattedAmount = formatAmount(2);

describe('TPC', () => {
	Object.entries(testData).forEach(([testName, test]) => {
		describe(testName, () => {
			test.forEach(({ expected, modifiers: { amount, priceTypeLabel }, should }) => {
				it(should, async () => {
					// Make sure the base price amount is as expected
					await setPrice({ amount: 10, isBasePrice: true } as any);

					await addNewPriceModifier({ amount, priceTypeLabel });
					expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe(expected);
				});
			});
		});
	});

	describe('calculateTicketTotalByModifiers', () => {
		ticketTotalTestCases.forEach(({ name, prices, total }) => {
			it(name, async () => {
				const testPrices = createPrices(prices.map(convertToModifier));

				await setPrices(testPrices);

				const calculatedTotal = await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value);

				expect(getFormattedAmount(calculatedTotal)).toEqual(getFormattedAmount(total));
			});
		});
	});
});
