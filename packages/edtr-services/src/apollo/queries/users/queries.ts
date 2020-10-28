import gql from 'graphql-tag';

export const GET_EVENT_MANAGERS: any = gql`
	query GET_EVENT_MANAGERS($where: RootQueryToUserConnectionWhereArgs!) {
		users(where: $where) {
			nodes {
				id
				name
			}
		}
	}
`;
