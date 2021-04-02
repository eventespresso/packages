import { saveVideo } from 'playwright-video';

import { createNewEvent, addNewDate, addNewTicket, clickButton, clickLabel } from '../../utils';
import { data } from './data';

const datesListSelector = '#ee-entity-list-datetimes .ee-entity-list__card-view';

const tamSelector = '.ee-ticket-assignments-manager';

beforeAll(async () => {
	await saveVideo(page, 'artifacts/tam-filters.mp4');

	await createNewEvent({ title: 'TAM Filters Test' });

	// Wait for the list lazy load
	await page.waitForFunction((selector) => document.querySelector(selector), datesListSelector);

	// add dates
	for (const item of data) {
		await addNewDate({ ...item, name: 'Date ' + item.name });
	}

	// add tickets
	for (const item of data) {
		await addNewTicket({ ...item, name: 'Ticket ' + item.name, amount: 10 });
	}

	await page.waitForTimeout(1000);

	await clickButton('Ticket Assignments');
});

describe('TAM:Filters', () => {
	it('tests the "show trashed dates" filter', async () => {
		let rows = await page.$$(`${tamSelector} tbody tr`);
		// We added 6 dates and a default date was also present which makes it 7
		// But one of our dates was trashed, so that won't be visible
		expect(rows.length).toBe(6);

		// Now lets "show trashed dates"
		await clickLabel('show trashed dates');
		rows = await page.$$(`${tamSelector} tbody tr`);
		// Now that trashed date should also be visible, making it 7
		expect(rows.length).toBe(7);
	});
});
