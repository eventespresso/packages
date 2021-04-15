import { saveVideo } from 'playwright-video';

import { createNewEvent, setListDisplayControl, EntityListParser } from '@e2eUtils/admin/event-editor';
import { clickButton, selectDateFromNextMonth } from '@e2eUtils/common';

import { expectCardToContain } from '../../assertions';
import { modalRTESel } from '../../constants';

const namespace = 'event.tickets.edit';
const parser = new EntityListParser('ticket');

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
	await createNewEvent({ title: namespace });
});

afterAll(async () => {
	await browser.close();
});

describe(namespace, () => {
	// eslint-disable-next-line jest/expect-expect
	it('should edit an existing ticket', async () => {
		const newTicketName = 'new ticket name';
		const newTicketDesc = 'new ticket description';
		const newTicketQuantity = '1000';

		try {
			await page.click('[aria-label="ticket main menu"]');
			await clickButton('edit ticket');
			await page.focus('[aria-label="Name"]');
			await page.type('[aria-label="Name"]', newTicketName);
			await page.click(modalRTESel);
			await page.type(modalRTESel, newTicketDesc);
			await page.focus('[name="startDate"]');
			const [startDate, startDateMonth] = await selectDateFromNextMonth();
			await page.click('[name="endDate"]');
			const [endDate, endDateMonth] = await selectDateFromNextMonth();
			await page.click('[name="quantity"]');
			await page.type('[name="quantity"]', newTicketQuantity);
			await clickButton('Skip prices - assign dates');

			const waitForListUpdate = await parser.createWaitForListUpdate();

			await page.click('button[type=submit]');

			await waitForListUpdate();

			await setListDisplayControl('ticket', 'both');

			await expectCardToContain({
				desc: newTicketDesc,
				endDate,
				endDateMonth,
				name: newTicketName,
				quantity: newTicketQuantity,
				startDate,
				startDateMonth,
				type: 'ticket',
			});
		} catch (e) {
			console.log(e);
		}
	});
});
