import type { Entity } from '@eventespresso/data';
import type { AnyObject } from '@eventespresso/utils';

interface Ticket extends Entity, AnyObject {}

export const ticketDroppableId = 'ticket-entities-droppable';

export const TICKET_FIELDS_FOR_TPC: Array<keyof Ticket> = ['id', 'name', 'description', 'quantity', 'reverseCalculate'];
