/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { createNewEvent, setListDisplayControl } from '../../utils';

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

			const lastDateSelector =
				'.react-datepicker__week:last-child .react-datepicker__day:last-child:not(.react-datepicker__day--selected)';
			const monthSelector = '.react-datepicker__current-month';

			const startDate = await page.$eval(lastDateSelector, (elements) => elements.innerHTML);
			await page.click(lastDateSelector);
			// month is evaluated after the click, because it can choose a date from the next month
			const [startDateMonth] = await page.$eval(monthSelector, (elements) => elements?.innerHTML?.split(' '));
			await page.click('.ee-timezone-info__button');

			await page.focus('.date-range-picker__end .react-datepicker__input-container input');
			const endDate = await page.$eval(lastDateSelector, (elements) => elements.innerHTML);
			await page.click(lastDateSelector);
			const [endDateMonth] = await page.$eval(monthSelector, (elements) => elements?.innerHTML?.split(' '));
			await page.click('.ee-timezone-info__button');

			await page.waitForTimeout(1000);

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
