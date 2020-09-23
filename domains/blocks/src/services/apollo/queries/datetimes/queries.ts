import gql from 'graphql-tag';

export const DATETIME_ATTRIBUTES: any = gql`
	fragment blocksDatetimeAttributes on EspressoDatetime {
		id
		dbId
		cacheId
		name
	}
`;

export const GET_DATETIMES: any = gql`
	query GET_DATETIMES($first: Int, $where: EspressoRootQueryDatetimesConnectionWhereArgs) {
		espressoDatetimes(first: $first, where: $where) {
			nodes {
				...blocksDatetimeAttributes
			}
		}
	}
	${DATETIME_ATTRIBUTES}
`;
