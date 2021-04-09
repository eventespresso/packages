import { saveVideo } from 'playwright-video';

import { addNewDate, createNewEvent, EntityListParser } from '@e2eUtils/admin/event-editor';
import { clickButton } from '@e2eUtils/common';
import { pressKeyWithModifier } from '@e2eUtils/misc';

const namespace = 'eventDates.filters.search';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

const datesParser = new EntityListParser('datetime');

describe(namespace, () => {
	it('should filter based on search query', async () => {
		await addNewDate({ name: 'abc' });
		await addNewDate({ name: 'def' });

		expect(await datesParser.getItemCount()).toBe(3);

		await clickButton('show filters');
		await page.type('#ee-ee-search-input-dates-list', 'abc');
		expect(await datesParser.getItemCount()).toBe(1);
		expect(await page.$eval(datesParser.getRootSelector(), (elements) => elements.innerHTML)).toContain('abc');

		await pressKeyWithModifier('primary', 'a');
		await page.type('#ee-ee-search-input-dates-list', 'def');

		expect(await datesParser.getItemCount()).toBe(1);
		expect(await page.$eval(datesParser.getRootSelector(), (elements) => elements.innerHTML)).toContain('def');
	});
});
