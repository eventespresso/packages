/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewPriceModifier, addNewTicket, createNewEvent, removeFreeTicket } from '../utils';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/calculateTicketTotal.mp4');

	const newTicketName = 'one way ticket';
	const newTicketAmount = '10';

	await createNewEvent({ title: 'calculateTicketTotal: to be deleted' });

	await removeFreeTicket();

	await addNewTicket({ amount: newTicketAmount, name: newTicketName });

	await page.click('[aria-label="ticket price calculator"]');
});

describe('TPC', () => {
	describe('calculateTicketTotal', () => {
		it('should calculate total ticket price for the given amount of Percent Discount', async () => {
			await addNewPriceModifier({ amount: '10', priceTypeLabel: 'Percent Discount' });
			expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe('10.35');
		});
		it('should calculate total ticket price for the given amount of Dollar Discount', async () => {
			await addNewPriceModifier({ amount: '2', priceTypeLabel: 'Dollar Discount' });
			expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe('8.35');
		});
		it('should calculate total ticket price for the given amount of Percent Surcharge', async () => {
			await addNewPriceModifier({ amount: '3', priceTypeLabel: 'Percent Surcharge' });
			expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe('8.6');
		});
		it('should calculate total ticket price for the given amount of Dollar Surcharge', async () => {
			await addNewPriceModifier({ amount: '4', priceTypeLabel: 'Dollar Surcharge' });
			expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe('12.6');
		});
		it('should calculate total ticket price for the given amount of Regional Tax', async () => {
			await addNewPriceModifier({ amount: '5', priceTypeLabel: 'Regional Tax' });

			expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe('13.23');
		});
		it('should calculate total ticket price for the given amount of Federal Tax', async () => {
			await addNewPriceModifier({ amount: '6', priceTypeLabel: 'Federal Tax' });
			expect(await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value)).toBe('14.02');
		});
	});
});
