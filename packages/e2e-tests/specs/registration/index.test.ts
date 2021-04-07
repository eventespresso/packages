import { saveVideo } from 'playwright-video';

import {
	addNewTicket,
	answerRegFormTextInput,
	clickEventPostPermaLink,
	createNewEvent,
	EntityListParser,
	submitRegistration,
	submitTicketSelector,
} from '../../utils';
import { chooseFromTicketSelector } from '../../utils/public/ticket-selector/selectTicket';

const namespace = 'event.free-event.registration';

beforeAll(async () => {
	await saveVideo(page, `artifacts/${namespace}.mp4`);
});

const dateParser = new EntityListParser('datetime');
const ticketParser = new EntityListParser('ticket');

describe('Create free event and register to it', () => {
	it('should show thank you message if everything went well', async () => {
		const dateRootSelector = dateParser.getRootSelector();
		const ticketRootSelector = ticketParser.getRootSelector();
		const capture = await saveVideo(page, `artifacts/${namespace}.mp4`);

		try {
			await createNewEvent({ title: 'Free event' });
			await page.click(`${dateRootSelector} [data-testid="ee-datetime-inline-cap-preview"]`);
			await page.type(`${dateRootSelector} [data-testid="ee-datetime-inline-cap"]`, '75');
			await page.click(`${ticketRootSelector} [data-testid="ee-ticket-inline-qty-preview"]`);
			await page.type(`${ticketRootSelector} [data-testid="ee-ticket-inline-qty"]`, '75');

			await addNewTicket({ amount: 100, name: 'Paid Ticket' });

			await clickEventPostPermaLink();

			await chooseFromTicketSelector('Free Ticket', 1);
			await submitTicketSelector();
			await answerRegFormTextInput('fname', 'Joe');
			await answerRegFormTextInput('lname', 'Doe');
			await answerRegFormTextInput('email', 'test@example.com');

			await submitRegistration();
		} catch (e) {
			await capture.stop();
		}

		const statusTitle = await page
			.$eval('.status-publish .entry-title', (elements) => elements?.textContent)
			.catch(console.log);

		expect(statusTitle).toContain('Thank You');
	});
});
