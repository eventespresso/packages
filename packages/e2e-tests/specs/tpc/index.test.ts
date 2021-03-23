/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import {
	addNewPriceModifier,
	addNewTicket,
	createNewEvent,
	removeAllTickets,
	removeAllPriceModifiers,
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
	await removeAllPriceModifiers();
});

describe('TPC', () => {
	Object.entries(testData).forEach(([testName, test]) => {
		describe(testName, () => {
			test.forEach(({ expected, modifiers: { amount, priceTypeLabel }, should }) => {
				it(should, async () => {
					await addNewPriceModifier({ amount, priceTypeLabel });
					expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe(expected);
				});
			});
		});
	});
});
