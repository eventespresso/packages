import gql from 'graphql-tag';

export const ATTENDEE_ATTRIBUTES: any = gql`
	fragment blocksAttendeeAttributes on EspressoAttendee {
		id
		dbId
		avatar
		cacheId
		fullName
	}
`;

export const GET_ATTENDEES: any = gql`
	query GET_ATTENDEES($first: Int, $where: EspressoRootQueryAttendeesConnectionWhereArgs) {
		espressoAttendees(first: $first, where: $where) {
			nodes {
				...blocksAttendeeAttributes
			}
		}
	}
	${ATTENDEE_ATTRIBUTES}
`;
