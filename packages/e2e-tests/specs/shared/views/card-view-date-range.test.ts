import { createNewEvent, setListDisplayControl, EntityListParser } from '@e2eUtils/admin/event-editor';
import { clickLastDateFromPicker } from '@e2eUtils/common';

import { entities } from '../../../constants';

const namespace = 'event.entities.edit.calendar.date.range';
const parser = new EntityListParser();

beforeAll(async () => {
	await createNewEvent({ title: namespace });
});

describe(namespace, () => {
	for (const entity of entities) {
		it('should change the start and end date from the card for:' + entity, async () => {
			parser.setEntityType(entity);

			await page.click(`${parser.getRootSelector()} .ee-edit-calendar-date-range-btn`);

			await page.focus('.date-range-picker__start .react-datepicker__input-container input');
			const [startDate, startDateMonth] = await clickLastDateFromPicker();
			await page.click('.ee-timezone-info__button');

			await page.focus('.date-range-picker__end .react-datepicker__input-container input');
			const [endDate, endDateMonth] = await clickLastDateFromPicker();

			const waitForListUpdate = await parser.createWaitForListUpdate();
			await page.click('.chakra-popover__content [aria-label="save"]');
			await waitForListUpdate();

			await setListDisplayControl(entity, 'both');

			// first/only item
			const item = await parser.getItem();
			const sidebarContent = await item?.$eval('.entity-card__sidebar', (elements) => elements.textContent);

			expect(sidebarContent).toContain(startDate);
			expect(sidebarContent).toContain(startDateMonth.substring(0, 3));

			expect(sidebarContent).toContain(endDate);
			expect(sidebarContent).toContain(endDateMonth.substring(0, 3));
		});
	}
});
