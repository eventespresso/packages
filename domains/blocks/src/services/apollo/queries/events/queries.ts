import gql from 'graphql-tag';

export const EVENT_ATTRIBUTES: any = gql`
	fragment blocksEventAttributes on EspressoEvent {
		id
		dbId
		cacheId
		name
	}
`;

export const GET_EVENTS: any = gql`
	query GET_EVENTS($first: Int) {
		espressoEvents(first: $first) {
			nodes {
				...blocksEventAttributes
			}
		}
	}
	${EVENT_ATTRIBUTES}
`;
