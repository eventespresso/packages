import gql from 'graphql-tag';

import type { FetchQueryResult, AttendeesQueryWhereArgs } from '@eventespresso/data';
import { useAttendeesQuery } from '@eventespresso/data';
import { AttendeesList } from '@blocksServices/apollo/types';

export const GET_ATTENDEES: any = gql`
	query GET_ATTENDEES($first: Int, $where: EspressoRootQueryAttendeesConnectionWhereArgs) {
		espressoAttendees(first: $first, where: $where) {
			nodes {
				id
				dbId
				avatar
				fullName
			}
		}
	}
`;

type UseAttendees = (whereArgs: AttendeesQueryWhereArgs, limit?: number) => FetchQueryResult<AttendeesList>;

const useAttendees: UseAttendees = (where, limit) => {
	return useAttendeesQuery({
		query: GET_ATTENDEES,
		variables: {
			first: limit,
			where,
		},
		fetchPolicy: 'cache-first',
		// do not fetch until an event has been selected
		// otherwise, we will end up fetching unrelated attendees
		skip: !where.event,
	});
};

export default useAttendees;
