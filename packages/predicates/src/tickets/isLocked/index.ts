import type { Ticket } from '@eventespresso/edtr-services';

const isLocked = (ticket: Partial<Ticket>): boolean => ticket.registrationCount > 0;

export default isLocked;
