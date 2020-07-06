import gql from 'graphql-tag';

export const RECURRENCE_ATTRIBUTES: any = gql`
	fragment recurrenceAttributes on EspressoRecurrence {
		id
		dbId
		cacheId
		exDates
		exRule
		gDates
		name
		rDates
		rRule
		salesEndOffset
		salesStartOffset
	}
`;

export const GET_RECURRENCE: any = gql`
	query GET_RECURRENCE($id: ID!) {
		recurrence(id: $id) {
			...recurrenceAttributes
		}
	}
	${RECURRENCE_ATTRIBUTES}
`;

export const GET_RECURRENCES: any = gql`
	query GET_RECURRENCES($where: EspressoRootQueryRecurrencesConnectionWhereArgs) {
		espressoRecurrences(where: $where) {
			nodes {
				...recurrenceAttributes
			}
		}
	}
	${RECURRENCE_ATTRIBUTES}
`;
