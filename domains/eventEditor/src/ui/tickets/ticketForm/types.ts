import type { DateAndTime } from '@eventespresso/edtr-services';
import type { UpdateTicketInput } from '@eventespresso/edtr-services';

export interface TicketFormShape extends UpdateTicketInput, DateAndTime {
	dateTime?: DateAndTime;
}
