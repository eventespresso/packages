import { pickBy } from 'ramda';
import { isTicketField } from './selectionPredicates';

export const copyTicketFields = <T>(ticket: T, predicate = isTicketField): T => pickBy(predicate, ticket);
