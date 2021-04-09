import { addNewDate, createNewEvent, deleteDateByName, EntityListParser } from '@e2eUtils/admin/event-editor';

const namespace = 'event.dates.delete';

const datesParser = new EntityListParser('datetime');
const ticketsParser = new EntityListParser('ticket');

describe(namespace, () => {
	it('should delete dates by name:', async () => {
		await createNewEvent({ title: namespace });

		await addNewDate({ name: namespace + '.date' });

		expect(await datesParser.getItemCount()).toBe(2);

		await deleteDateByName('edit title…');

		expect(await datesParser.getItemCount()).toBe(1);
		expect(await ticketsParser.getItemCount()).toBe(1);

		await deleteDateByName('event.dates.delete.date');

		expect(await datesParser.getItemCount()).toBe(0);
		expect(await ticketsParser.getItemCount()).toBe(0);
	});
});
