/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { ticketTotalTestCases } from '@eventespresso/tpc/src/utils/test/ticketTotalData';
import { convertToModifier, createPrices } from '@eventespresso/tpc/src/utils/test/utils';
import { formatAmount } from '@eventespresso/utils';

import { addNewTicket, createNewEvent, removeAllTickets, removeAllPriceModifiers, setPrices } from '../../utils';

const ticketsListSelector = '#ee-entity-list-tickets .ee-entity-list__card-view';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/calculateTicketTotal.mp4');
	const newTicketName = 'one way ticket';
	const newTicketAmount = '10';

	await createNewEvent({ title: 'calculateTicketTotal: to be deleted' });

	// Wait for page load after the event is published
	await page.waitForNavigation();

	// Wait for tickets list lazy load
	await page.waitForFunction((selector) => document.querySelector(selector), ticketsListSelector);

	await removeAllTickets();

	// Wait for tickets list to refresh
	await page.waitForFunction((selector) => !document.querySelector(selector), ticketsListSelector);

	await addNewTicket({ amount: newTicketAmount, name: newTicketName });

	// Wait for tickets list to update
	await page.waitForFunction((selector) => document.querySelector(selector), ticketsListSelector);

	await page.click('[aria-label="ticket price calculator"]');
});

beforeEach(async () => {
	await removeAllPriceModifiers();
});

const getFormattedAmount = formatAmount(2);

describe('TPC:calculateTicketTotal', () => {
	ticketTotalTestCases.forEach(({ name, prices, total }) => {
		it(name, async () => {
			const testPrices = createPrices(prices.map(convertToModifier));

			await setPrices(testPrices);

			const calculatedTotal = await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value);

			expect(getFormattedAmount(calculatedTotal)).toEqual(getFormattedAmount(total));
		});
	});
});
