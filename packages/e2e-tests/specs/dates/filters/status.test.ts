import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, EntityListParser } from '@e2eUtils/admin/event-editor';
import { clickButton } from '@e2eUtils/common';

const namespace = 'eventDates.filters.status';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const datesParser = new EntityListParser('datetime');

describe(namespace, () => {
	it('should show trashed date when status filter is set to "all"', async () => {
		const newDateName = 'brand new trashed date';

		await addNewDate({ name: newDateName, isTrashed: true });

		expect(await datesParser.getItemCount()).toBe(1);

		await clickButton('show filters');

		await page.selectOption('#ee-dates-list-status-control', {
			value: 'all',
		});

		expect(await datesParser.getItemCount()).toBe(2);

		const datetimesList = await page.$eval(datesParser.getRootSelector(), (elements) => elements.innerHTML);

		expect(datetimesList).toContain('trash');
	});
});
