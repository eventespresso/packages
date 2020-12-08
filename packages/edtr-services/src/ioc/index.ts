import { getHooks } from '@eventespresso/ioc';
import { Ticket } from '../apollo';

type Filters = {
	'eventEditor.ticketForm.sections': [sections: Array<Record<string, unknown>>, ticket: Ticket];
};
type Actions = {
	'eventEditor.ticketForm.sections': [sections: Array<Record<string, unknown>>, ticket: Ticket];
};

export const hooks = getHooks<Actions, Filters>();

hooks.addFilter('eventEditor.ticketForm.sections', 'ok.eventEditor.ticketForm.sections', (val1, val2) => {
	console.log(val1, val2);
	return val1;
});

hooks.applyFilters('eventEditor.ticketForm.sections', [], null);
