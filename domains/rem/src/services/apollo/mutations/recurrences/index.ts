import { gql } from '@eventespresso/data';
import { RECURRENCE_ATTRIBUTES } from '../../queries/recurrences';

export const CREATE_RECURRENCE = gql`
	mutation CREATE_RECURRENCE($input: CreateEspressoRecurrenceInput!) {
		createEspressoRecurrence(input: $input) {
			espressoRecurrence {
				...recurrenceAttributes
			}
		}
	}
	${RECURRENCE_ATTRIBUTES}
`;

export const UPDATE_RECURRENCE = gql`
	mutation UPDATE_RECURRENCE($input: UpdateEspressoRecurrenceInput!) {
		updateEspressoRecurrence(input: $input) {
			espressoRecurrence {
				...recurrenceAttributes
			}
		}
	}
	${RECURRENCE_ATTRIBUTES}
`;

export const DELETE_RECURRENCE = gql`
	mutation DELETE_RECURRENCE($input: DeleteEspressoRecurrenceInput!) {
		deleteEspressoRecurrence(input: $input) {
			espressoRecurrence {
				id
			}
		}
	}
`;

export { default as useRecurrenceMutator } from './useRecurrenceMutator';

export * from './types';
