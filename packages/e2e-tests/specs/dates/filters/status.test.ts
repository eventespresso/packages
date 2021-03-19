/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, addNewRegistration, addNewTicket, createNewEvent, removeLastTicket } from '../../../utils';
import { getDatesLength } from '../../../assertions';

const namespace = 'eventDates.filters.status';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should show trashed date when status filter is set to "all"', async () => {
		const newDateName = 'brand new trashed date';

		await addNewDate({ name: newDateName, isTrashed: true });

		expect(await getDatesLength()).toBe(1);

		await page.click('[type=button] >> text=show filters');

		await page.selectOption('#ee-dates-list-status-control', {
			value: 'all',
		});

		expect(await getDatesLength()).toBe(2);

		const datetimesList = await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML);

		expect(await datetimesList).toContain('trash');
	});

	it('should filter dates corresponding to sales control', async () => {
		await removeLastTicket();

		await addNewTicket({ name: 'Paid Ticket' });

		// await addNewRegistration();

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
