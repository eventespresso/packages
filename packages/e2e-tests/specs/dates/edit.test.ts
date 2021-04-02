/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { saveVideo } from 'playwright-video';

import { clickButton, clickLastDateFromPicker, createNewEvent, setListDisplayControl } from '../../utils';
import { expectCardToContain } from '../../assertions';
import { datesList, modalRTESel } from '../../constants';

const namespace = 'event.dates.edit';

beforeAll(async () => {
	await createNewEvent({ title: namespace });
});

afterAll(async () => {
	await browser.close();
});

describe(namespace, () => {
	it('should edit an existing datetime', async () => {
		const newDateName = 'new date name';
		const newDateDesc = 'new date description';
		const newDateCap = '1000';
		const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);

		try {
			await page.click('[aria-label="event date main menu"]');
			await clickButton('edit datetime');
			await page.focus('[aria-label="Name"]');
			await page.type('[aria-label="Name"]', newDateName);
			await page.click(modalRTESel);
			await page.type(modalRTESel, newDateDesc);
			await page.focus('[name="startDate"]');
			const [startDate, startDateMonth] = await clickLastDateFromPicker();
			await page.click('[name="endDate"]');
			const [endDate, endDateMonth] = await clickLastDateFromPicker();
			await page.click('[name="capacity"]');
			await page.type('[name="capacity"]', newDateCap);
			await clickButton('Save and assign tickets');
			await page.click('button[type=submit]');
			await setListDisplayControl('datetime', 'both');

			expect(
				await page.$eval(`${datesList} .entity-card-details__name`, (elements) => elements.innerHTML)
			).toContain(newDateName);

			expect(
				await page.$eval(`${datesList} .entity-card-details__text`, (elements) => elements.innerHTML)
			).toContain(newDateDesc);

			await expectCardToContain({
				capacity: newDateCap,
				endDate,
				endDateMonth,
				name: newDateName,
				startDate,
				startDateMonth,
				type: 'datetime',
			});
		} catch (e) {
			await capture.stop();
		}
	});
});
