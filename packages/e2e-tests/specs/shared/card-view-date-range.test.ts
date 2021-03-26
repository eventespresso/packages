/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { createNewEvent, clickLastDateFromPicker, setListDisplayControl } from '../../utils';

const namespace = 'event.entities.edit.calendar.date.range';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

describe(namespace, () => {
	for (const entity of ['datetime', 'ticket']) {
		it('should change the start and end date from the card for:' + entity, async () => {
			const entityList = `#ee-entity-list-${entity}s`;

			await createNewEvent({ title: namespace });

			await page.click(`${entityList} .ee-edit-calendar-date-range-btn`);

			await page.focus('.date-range-picker__start .react-datepicker__input-container input');
			const [startDate, startDateMonth] = await clickLastDateFromPicker();
			await page.click('.ee-timezone-info__button');

			await page.focus('.date-range-picker__end .react-datepicker__input-container input');
			const [endDate, endDateMonth] = await clickLastDateFromPicker();
			await page.click('.ee-timezone-info__button');

			await page.click('.chakra-popover__content [aria-label="save"]');

			await setListDisplayControl(entity as 'datetime' | 'ticket', 'both');

			expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(startDate);
			expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(
				startDateMonth.substring(0, 3)
			);

			expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(endDate);
			expect(await page.$eval(`${entityList} .entity-card__sidebar`, (el) => el.innerHTML)).toContain(
				endDateMonth.substring(0, 3)
			);
		});
	}
});
