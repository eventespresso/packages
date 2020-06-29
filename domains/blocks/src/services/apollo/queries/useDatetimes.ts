import gql from 'graphql-tag';

import type { FetchQueryResult } from '@eventespresso/data';
import { useDatetimesQuery } from '@eventespresso/data';
import type { DatetimesList } from '../types';

export const GET_DATETIMES: any = gql`
	query GET_DATETIMES($first: Int, $where: EspressoRootQueryDatetimesConnectionWhereArgs) {
		espressoDatetimes(first: $first, where: $where) {
			nodes {
				id
				dbId
				name
			}
		}
	}
`;

const useDatetimes = (event?: string): FetchQueryResult<DatetimesList> => {
	return useDatetimesQuery({
		query: GET_DATETIMES,
		variables: {
			where: {
				event,
			},
		},
		fetchPolicy: 'cache-first',
	});
};

export default useDatetimes;
