import type { Entity, EntityEdge, RecurrencesList as RecurrenceList } from '@eventespresso/data';

export interface Recurrence extends Entity {
	dateDuration: number;
	exDates: string;
	exRule: string;
	rDates: string;
	rRule: string;
	gDates: string;
	name: string;
}

export interface RecurrenceItem {
	recurrence: Recurrence;
}

export type RecurrenceEdge<Connection = 'EspressoRootQueryRecurrencesConnection'> = EntityEdge<Recurrence, Connection>;

export type RecurrencesList = RecurrenceList<RecurrenceEdge>;
