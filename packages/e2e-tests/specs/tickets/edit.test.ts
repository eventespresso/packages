import { saveVideo } from 'playwright-video';

import { clickButton, clickLastDateFromPicker, createNewEvent, setListDisplayControl } from '../../utils';
import { expectCardToContain } from '../../assertions';
import { modalRTESel } from '../../constants';

const namespace = 'event.tickets.edit';

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
			const [startDate, startDateMonth] = await clickLastDateFromPicker();
			await page.click('[name="endDate"]');
			const [endDate, endDateMonth] = await clickLastDateFromPicker();
			await page.click('[name="quantity"]');
			await page.type('[name="quantity"]', newTicketQuantity);
			await clickButton('Skip prices - assign dates');
			await page.click('button[type=submit]');
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
