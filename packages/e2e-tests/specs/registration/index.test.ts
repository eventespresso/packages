import { saveVideo } from 'playwright-video';

import { addNewTicket, clickEventPostPermaLink, createNewEvent, DateEditor } from '@e2eUtils/admin/event-editor';
import {
	submitRegistration,
	submitTicketSelector,
	chooseFromTicketSelector,
	fillAttendeeInformation,
} from '@e2eUtils/public/reg-checkout';

const namespace = 'event.free-event.registration';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

const dateEditor = new DateEditor();

describe(namespace, () => {
	it('should show thank you message if everything went well', async () => {
		await createNewEvent({ title: 'Free event' });

		await dateEditor.updateCapacityInline(null, 75);

		await addNewTicket({ amount: 100, name: 'Paid Ticket' });

		await clickEventPostPermaLink();

		await chooseFromTicketSelector('Free Ticket', 1);
		await submitTicketSelector();

		await fillAttendeeInformation({
			fname: 'Joe',
			lname: 'Doe',
			email: 'test@example.com',
		});

		await submitRegistration();

		const title = await page.$eval('h1.entry-title', (el) => el.textContent);
		expect(title).toContain('Thank You');

		const content = await page.$eval('.entry-content', (el) => el.textContent);
		expect(content).toContain('Congratulations');
	});
});
