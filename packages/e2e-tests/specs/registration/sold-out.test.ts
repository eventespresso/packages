import { saveVideo } from 'playwright-video';

import { clickEventPostPermaLink, createNewEvent, getEventUrl, DateEditor } from '@e2eUtils/admin/event-editor';
import {
	chooseFromTicketSelector,
	submitRegistration,
	submitTicketSelector,
	fillAttendeeInformation,
} from '@e2eUtils/public/reg-checkout';

const namespace = 'event.free.event.registration.sold.out';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

const dateEditor = new DateEditor();

const registerForEvent = async () => {
	await chooseFromTicketSelector('Free Ticket', 1);
	await submitTicketSelector();

	await fillAttendeeInformation({
		fname: 'Joe',
		lname: 'Doe',
		email: 'test@example.com',
	});
};

const goBackToEvent = async (eventUrl) => {
	await page.goto(eventUrl);
	await page.waitForLoadState('domcontentloaded');
};

describe(namespace, () => {
	it('should show show sold out label on date when the number of registration is the same as capacity', async () => {
		const dateName = 'upcoming datetime';

		await createNewEvent({ title: 'Free event' });

		await dateEditor.updateNameInline(null, dateName);
		await dateEditor.updateCapacityInline(null, 2);

		const eventUrl = await getEventUrl();

		await clickEventPostPermaLink();
		await registerForEvent();
		await submitRegistration();

		await goBackToEvent(eventUrl);

		expect(await dateEditor.getItemCount()).toBe(1);

		await clickEventPostPermaLink();
		await registerForEvent();
		await submitRegistration();

		await goBackToEvent(eventUrl);

		expect(await dateEditor.getStatusByName(dateName)).toBe('sold out');
	});
});
