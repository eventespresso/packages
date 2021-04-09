import { saveVideo } from 'playwright-video';

import {
	answerRegFormTextInput,
	clickEventPostPermaLink,
	createNewEvent,
	getEventUrl,
	EntityListParser,
	submitRegistration,
	submitTicketSelector,
} from '../../../utils';
import { chooseFromTicketSelector } from '../../../utils/public/ticket-selector/selectTicket';

const namespace = 'event.free-event.registration';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

const dateParser = new EntityListParser('datetime');
const ticketParser = new EntityListParser('ticket');

const registerForEvent = async () => {
	await chooseFromTicketSelector('Free Ticket', 1);
	await submitTicketSelector();
	await answerRegFormTextInput('fname', 'Joe');
	await answerRegFormTextInput('lname', 'Doe');
	await answerRegFormTextInput('email', 'test@example.com');
};

const goBackToEvent = async (eventUrl) => {
	await page.goto(eventUrl);
	await page.waitForLoadState('domcontentloaded');
};

describe('Create free event and register to it until it is sold', () => {
	it('should show show sold out label on date when the number of registration is the same as capacity', async () => {
		const dateRootSelector = dateParser.getRootSelector();
		const ticketRootSelector = ticketParser.getRootSelector();
		const dateName = 'upcoming datetime';

		await createNewEvent({ title: 'Free event' });

		await page.click(`${dateRootSelector} .entity-card-details__name`);
		await page.type(`${dateRootSelector} .entity-card-details__name`, dateName);
		await page.click(`${dateRootSelector} [data-testid="ee-datetime-inline-cap-preview"]`);
		await page.type(`${dateRootSelector} [data-testid="ee-datetime-inline-cap"]`, '2');

		await page.click(`${ticketRootSelector} [data-testid="ee-ticket-inline-qty-preview"]`);
		await page.type(`${ticketRootSelector} [data-testid="ee-ticket-inline-qty"]`, '2');

		const eventUrl = await getEventUrl();

		await clickEventPostPermaLink();
		await registerForEvent();
		await submitRegistration();

		await goBackToEvent(eventUrl);

		expect(await dateParser.getItemCount()).toBe(1);

		await clickEventPostPermaLink();
		await registerForEvent();
		await submitRegistration();

		await goBackToEvent(eventUrl);

		expect(await dateParser.getStatusByName(dateName)).toBe('sold out');
	});
});
