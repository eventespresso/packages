import { data } from './data';
import { addNewDate, addNewTicket } from '../../utils';

export const addDatesAndTickets = async () => {
	// add dates
	for (const item of data) {
		await addNewDate({ ...item, name: 'Date ' + item.name });
	}

	// add tickets
	for (const item of data) {
		await addNewTicket({ ...item, name: 'Ticket ' + item.name, amount: 10 });
	}
};
