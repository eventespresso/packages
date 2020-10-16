import { pickBy } from 'ramda';
import { isTicketField } from './selectionPredicates';
import type { Ticket } from '@eventespresso/edtr-services';

export const copyTicketFields = <T = Ticket>(ticket: T, predicate = isTicketField): T =>
	pickBy<any, T>(predicate, ticket);
