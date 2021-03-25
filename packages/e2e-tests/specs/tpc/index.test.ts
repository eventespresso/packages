/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';
import { isNil } from 'ramda';

import { ticketTotalTestCases } from '@eventespresso/tpc/src/utils/test/ticketTotalData';
import { basePriceTestCases } from '@eventespresso/tpc/src/utils/test/basePriceData';
import { convertToModifier, createPrices } from '@eventespresso/tpc/src/utils/test/utils';
import { formatAmount } from '@eventespresso/utils';
import { getBasePrice, getPriceModifiers } from '@eventespresso/predicates';

import {
	addNewTicket,
	createNewEvent,
	removeAllTickets,
	removeAllPriceModifiers,
	setPrice,
	setPrices,
} from '../../utils';

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

const setTestName = async (name: string) => {
	await page.$eval(
		'header.ee-modal__header',
		(header, text) => {
			// eslint-disable-next-line no-param-reassign
			header.innerHTML = text;
		},
		name
	);
};

describe('TPC:calculateTicketTotal', () => {
	// lets reverse calculate ticket total from the base price test data
	for (const { basePrice, name, prices, total } of basePriceTestCases) {
		if (isNil(total)) {
			continue;
		}

		it('reverse calculates: ' + name, async () => {
			await setTestName('reverse calculates: ' + name);
			// set the base price
			await setPrice({ amount: basePrice, name, isBasePrice: true } as any);

			const testPrices = createPrices(prices.map(convertToModifier), 2);

			// set modifiers
			await setPrices(testPrices);

			const calculatedTotal = await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value);

			expect(getFormattedAmount(calculatedTotal)).toEqual(getFormattedAmount(total));
		});
	}

	for (const { name, prices, total } of ticketTotalTestCases) {
		it(name, async () => {
			await setTestName(name);

			const testPrices = createPrices(prices.map(convertToModifier));

			await setPrices(testPrices);

			const calculatedTotal = await page.$eval('#ticket-price-total', (el: HTMLInputElement) => el?.value);

			expect(getFormattedAmount(calculatedTotal)).toEqual(getFormattedAmount(total));
		});
	}
});

describe('TPC:calculateBasePrice', () => {
	beforeAll(async () => {
		await page.click('[aria-label="Enable reverse calculate"]').catch(console.log);
	});

	// lets reverse calculate base price from the ticket total test data
	for (const { name, prices, total } of ticketTotalTestCases) {
		it('reverse calculates: ' + name, async () => {
			const testPrices = createPrices(prices.map(convertToModifier), 2);

			const basePrice = getBasePrice(testPrices)?.amount || 0;

			await setTestName('reverse calculates: ' + name);

			await setPrices(getPriceModifiers(testPrices));

			// Set ticket total
			await page.focus(`.ee-ticket-price-calculator__total [aria-label="ticket total"]`);
			await page.fill(`.ee-ticket-price-calculator__total [aria-label="ticket total"]`, (total || '').toString());

			const firstTPCRow = '.ee-ticket-price-calculator tbody tr:first-child';
			const calculatedPrice = await page.$eval(
				`${firstTPCRow} [aria-label="amount"]`,
				(el: HTMLInputElement) => el?.value
			);
			expect(getFormattedAmount(calculatedPrice)).toBe(getFormattedAmount(basePrice));
		});
	}

	for (const { basePrice, name, prices, total } of basePriceTestCases) {
		it(name, async () => {
			await setTestName(name);

			const testPrices = createPrices(prices.map(convertToModifier), 2);

			await setPrices(testPrices);

			// Set ticket total
			await page.focus(`.ee-ticket-price-calculator__total [aria-label="ticket total"]`);
			await page.fill(`.ee-ticket-price-calculator__total [aria-label="ticket total"]`, (total || '').toString());

			const firstTPCRow = '.ee-ticket-price-calculator tbody tr:first-child';
			const calculatedPrice = await page.$eval(
				`${firstTPCRow} [aria-label="amount"]`,
				(el: HTMLInputElement) => el?.value
			);

			expect(getFormattedAmount(calculatedPrice)).toBe(getFormattedAmount(basePrice));
		});
	}
});
