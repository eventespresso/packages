/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewTicket, clickButton, createNewEvent, EntityListParser, removeLastTicket } from '../../../utils';

const namespace = 'eventDates.filters.sales';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const datesParser = new EntityListParser('datetime');

describe(namespace, () => {
	it('should filter dates corresponding to sales control', async () => {
		await removeLastTicket();

		await addNewTicket({ name: 'Paid Ticket' });

		// await addNewRegistration();

		await clickButton('show filters');

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above90Capacity',
		});

		expect(await datesParser.getItemCount()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above75Capacity',
		});

		expect(await datesParser.getItemCount()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'above50Capacity',
		});

		expect(await datesParser.getItemCount()).toBe(0);

		await page.selectOption('#ee-dates-list-sales-control', {
			value: 'below50Capacity',
		});

		expect(await datesParser.getItemCount()).toBe(1);
	});
});
