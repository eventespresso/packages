/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewPriceModifier, addNewTicket, createNewEvent, removeLastTicket } from '../../utils';
import { testData } from './testData';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/calculateTicketTotal.mp4');

	const newTicketName = 'one way ticket';
	const newTicketAmount = '10';

	await createNewEvent({ title: 'calculateTicketTotal: to be deleted' });

	await removeLastTicket();

	await addNewTicket({ amount: newTicketAmount, name: newTicketName });

	await page.click('[aria-label="ticket price calculator"]');
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
