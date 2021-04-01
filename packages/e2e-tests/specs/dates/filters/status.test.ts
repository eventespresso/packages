/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, clickButton, createNewEvent } from '../../../utils';
import { getEntitiesLength } from '../../../assertions';

const namespace = 'eventDates.filters.status';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should show trashed date when status filter is set to "all"', async () => {
		const newDateName = 'brand new trashed date';

		await addNewDate({ name: newDateName, isTrashed: true });

		expect(await getEntitiesLength('datetime')).toBe(1);

		await clickButton('show filters');

		await page.selectOption('#ee-dates-list-status-control', {
			value: 'all',
		});

		expect(await getEntitiesLength('datetime')).toBe(2);

		const datetimesList = await page.$eval('#ee-entity-list-datetimes', (elements) => elements.innerHTML);

		expect(await datetimesList).toContain('trash');
	});
});
