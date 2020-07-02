import type { Entity, EntityEdge, RecurrencesList as RecurrenceList } from '@eventespresso/data';

export interface Recurrence extends Entity {
	exDates: string;
	exRule: string;
	patternHash: string;
	rDates: string;
	rRule: string;
	salesEndOffset: string;
	salesStartOffset: string;
}

export interface RecurrenceItem {
	recurrence: Recurrence;
}

export type RecurrenceEdge<Connection = 'EspressoRootQueryRecurrencesConnection'> = EntityEdge<Recurrence, Connection>;

export type RecurrencesList = RecurrenceList<RecurrenceEdge>;
