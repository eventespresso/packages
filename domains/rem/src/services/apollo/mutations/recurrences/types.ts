import type { EntityId } from '@eventespresso/data';
import type { Recurrence } from '../../types';

export interface RecurrenceBaseInput {
	datetimes?: Array<EntityId>;
	exDates?: string;
	exRule?: string;
	patternHash?: string;
	rDates?: string;
	rRule?: string;
	salesEndOffset?: string;
	salesStartOffset?: string;
}

export type CreateRecurrenceInput = RecurrenceBaseInput;

export interface UpdateRecurrenceInput extends RecurrenceBaseInput {
	id?: EntityId;
}

export interface DeleteRecurrenceInput {
	id?: EntityId;
}

export interface RecurrenceCommonInput extends RecurrenceBaseInput, DeleteRecurrenceInput {}

export type RecurrenceMutationResult = {
	espressoRecurrence: Recurrence;
};

export type CreateRecurrenceResult = {
	createEspressoRecurrence: RecurrenceMutationResult;
};

export type UpdateRecurrenceResult = {
	updateEspressoRecurrence: RecurrenceMutationResult;
};

export type DeleteRecurrenceResult = {
	deleteEspressoRecurrence: RecurrenceMutationResult;
};
