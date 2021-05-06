import {
	addNewDate,
	addNewTicket,
	clickEventPostPermaLink,
	createNewEvent,
	editEntityCard,
	questionsForPrimaryRegistrant,
} from '@e2eUtils/admin/event-editor';
import {
	submitRegistration,
	submitTicketSelector,
	chooseFromTicketSelector,
	fillAttendeeInformation,
} from '@e2eUtils/public/reg-checkout';

const namespace = 'event.entities.reigstration-2';

describe(namespace, () => {
	it('should check if registration was succesful and the reg status is approved', async () => {
		try {
			await createNewEvent({ title: 'Two Dates Two Tickets' });

			await editEntityCard({
				capacity: '20',
				entityType: 'datetime',
				name: 'Date 1',
			});

			await editEntityCard({
				name: 'Ticket 1',
				entityType: 'ticket',
				quantity: '15',
			});

			await addNewTicket({ name: 'Ticket 2', quantity: '20' });
			await addNewDate({ name: 'Date 2', capacity: '20' });

			await questionsForPrimaryRegistrant('Address Information');

			await clickEventPostPermaLink();

			await chooseFromTicketSelector('Ticket 1', 1);
			await submitTicketSelector();

			await fillAttendeeInformation({
				fname: 'Joe',
				lname: 'Doe',
				email: 'test@example.com',
				address: '3868  Burton Avenue',
			});
			await submitRegistration();
		} catch (e) {
			console.log(e);
		}

		const statusTitle = await page
			.$eval('.status-publish .entry-title', (elements) => elements?.textContent)
			.catch(console.log);
		expect(statusTitle).toContain('Thank You');
		expect(await page.$eval('.ee-registrations-list tbody', (el) => el.textContent)).toContain('Approved');
	});
});
