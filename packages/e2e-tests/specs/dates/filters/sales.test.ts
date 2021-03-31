/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import {
	// addNewRegistration,
	addNewTicket,
	clickButton,
	createNewEvent,
	removeLastTicket,
} from '../../../utils';
import { getDatesLength } from '../../../assertions';

const namespace = 'eventDates.filters.sales';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should filter dates corresponding to sales control', async () => {
		await removeLastTicket();

		await addNewTicket({ name: 'Paid Ticket' });

		// await addNewRegistration();

		await clickButton('show filters');

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above90Capacity',
		});

		expect(await getDatesLength()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above75Capacity',
		});

		expect(await getDatesLength()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above50Capacity',
		});

		expect(await getDatesLength()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'below50Capacity',
		});

		expect(await getDatesLength()).toBe(1);
	});
});
