/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { addNewDate, clickButton, createNewEvent, pressKeyWithModifier } from '../../../utils';
import { getEntitiesLength } from '../../../assertions';
import { datesList } from '../../../constants';

const namespace = 'eventDates.filters.search';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);

	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	it('should filter based on search query', async () => {
		await addNewDate({ name: 'abc' });
		await addNewDate({ name: 'def' });

		expect(await getEntitiesLength('datetime')).toBe(3);

		await clickButton('show filters');
		await page.type('#ee-ee-search-input-dates-list', 'abc');
		expect(await getEntitiesLength('datetime')).toBe(1);
		expect(await page.$eval(datesList, (elements) => elements.innerHTML)).toContain('abc');

		await pressKeyWithModifier('primary', 'a');
		await page.type('#ee-ee-search-input-dates-list', 'def');

		expect(await getEntitiesLength('datetime')).toBe(1);
		expect(await page.$eval(datesList, (elements) => elements.innerHTML)).toContain('def');
	});
});
